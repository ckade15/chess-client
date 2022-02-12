import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Player from '../components/Player';

function Rapid() {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(0);

    const getRapid = async () => {
        const req = await axios.get('/api/v1/rapid');
        //localStorage.setItem('standard', JSON.stringify(req.data.data));
        setState(req.data.data);
        setLoading(false);
        
    }
    const handleStorage = () => {
        /*if (localStorage.getItem("standard")) {
            setState(JSON.stringify(localStorage.getItem("standard")));
            setLoading(false);
        }else {
            getStandard();
            setLoading(false);
        }*/
        getRapid();
    }
    useEffect(() => {
        setWidth(window.innerWidth);
        if (loading){
            handleStorage();
            
        }
        document.title = "Rapid Rankings";
        
    }, []);  
    if (width < 768) {
        return (
            <div className="bg-blue-100 min-h-screen">
                <header className="p-10 flex flex-col place-items-center">
                    <h1 className='text-red-600 text-center text-4xl font-bold'>FIDE Chess Top 100 Rapid Rankings</h1>  
                    <a href="/" className="mt-4 text-lg font-bold">Blitz Rankings</a>  
                    <a href="/standard" className="mt-4 text-lg font-bold">Standard Rankings</a>
                </header>
                <section className="w-full flex flex-col place-content-center place-items-center bg-red-200 pb-10">
                    <div className="w-full bg-gray-200 h-20 grid grid-cols-4 mb-6">
                        <p className="p-6">Ranking</p>
                        <p className="p-6">Name</p>
                        <p className="p-6">Country</p>
                        <p className="p-6">Rating</p>
                    </div>
                        {state.map((player)=> {
                            return (
                                <Player ranking={player.ranking} name={player.name} country={player.country} rating={player.rating} avgRating={player.avgRating} type="mobile"/>
                                
                            );
                        })}
                    
                </section>
            </div>
        )
    }else{
        return (
            <div className="bg-blue-100 min-h-screen">
                <header className="p-10 flex place-items-center">
                    <h1 className='text-red-600 text-center text-4xl font-bold'>FIDE Chess Top 100 Rapid Rankings</h1> 
                    <a href="/" className="ml-40 font-bold text-xl font-mono hover:text-blue-800">Blitz Rankings</a>  
                    <a href="/standard" className="ml-10 font-bold text-xl font-mono hover:text-blue-800">Standard Rankings</a> 
                </header>
                <section className="w-full flex flex-col place-content-center place-items-center bg-red-200 pt-20 pb-10">
                    <div className="w-2/3 ml-auto mr-auto bg-gray-200 h-20 grid grid-cols-5 ">
                        <p className="p-6">Ranking</p>
                        <p className="p-6">Name</p>
                        <p className="p-6">Country</p>
                        <p className="p-6">Rating</p>
                        <p className="p-6">Average Rating</p>
                    </div>
                        {state.map((player)=> {
                            return (
                                <Player ranking={player.ranking} name={player.name} country={player.country} rating={player.rating} avgRating={player.avgRating}/>
                                
                            );
                        })}
                    
                </section>
            </div>
        )
    }
    

}

export default Rapid;
