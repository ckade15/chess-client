import React, {createContext, useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import reducer from './reducer';

export const globalState = createContext({"value": "This is fucking broken"});

const initialState = {
    "standard": [1],
    "blitz": [2],
    "rapid": [3],
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
}




/*
// Initial state
const initialState = {
    standard: {},
    blitz: {},
    rapid: {},
}
const url = 'http://192.168.1.127:5001/api/v1';

// Create context
export const GlobalContext = createContext(initialState);

// Creates provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [received, setReceived] = useState(false);

            const fetchData = async () => {
                await getStandard();
                await getBlitz();
                await getRapid();
                setReceived(true);
            }
            fetchData();


    
    // Actions
    async function getStandard() {
        try {
            const res = await axios.get(`${url}/standard`);
            console.log(res);
            dispatch({
                standard: {...res},
            });
        } catch (err) {
            console.log(err);
        }
    }
    async function getRapid() {
        try {
            const res = await axios.get(`${url}/rapid`).then(resp => {console.log(resp)});
            console.log(res.data);
            dispatch({
                rapid: {...res},
            });
        } catch (err) {
            dispatch({})
        }
    }
    async function getBlitz() {
        try {
            const res = await axios.get(`${url}/blitz`);
            console.log(res.data);
            dispatch({
                blitz: {...res},
            });
        } catch (err) {
            dispatch({})
        }
    }

    return (<GlobalContext.Provider value={{
        standard: state.standard,
        blitz: state.blitz,
        rapid: state.rapid,
        loading: state.loading,
    }}>{children}</GlobalContext.Provider>);
}
*/