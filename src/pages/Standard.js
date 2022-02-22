import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Player from '../components/Player';
import Footer from '../components/Footer';

function Standard() {
    const proxyurl = "https://api.fiderankings.kadewebsolutions.com/api/v1/standard";

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(0);

    const getStandard = async () => {
        const req = await axios.get(proxyurl).then(res => {setLoading(false); return res;});
        setState(req.data.data);
        
    }
    
    useEffect(() => {
        setWidth(window.innerWidth);
        if (loading){
            getStandard();
            
        }
        document.title = "Standard Rankings";
        
    }, []);  
    if (width < 768) {
        return (
            <div className="bg-blue-100 min-h-screen">
                <header className="p-10 flex flex-col place-items-center">
                    <h1 className='text-red-600 text-center text-4xl font-bold'>FIDE Chess Top 100 Standard Rankings</h1> 
                    <a href="/" className="mt-4 text-lg font-bold">Blitz Rankings</a> 
                    <a href="/rapid" className="mt-4 text-lg font-bold">Rapid Rankings</a>  
                </header>
                <section className="w-full flex flex-col place-content-center place-items-center bg-red-200 pb-10">
                    <div className="w-full bg-gray-200 h-20 grid grid-cols-4 mb-6">
                        <p className="p-6">Ranking</p>
                        <p className="p-6">Name</p>
                        <p className="p-6">Country</p>
                        <p className="p-6">Rating</p>
                    </div>
                        {state.length > 1 ?  state.map((player)=> {
                            return (
                                <Player ranking={player.ranking} name={player.name} country={player.country} rating={player.rating} avgRating={player.avgRating} type="mobile"/>
                                
                            );
                        }) : <p className="text-center text-lg font-bold text-red-500 bg-gray-200 w-full p-4">Standings are not loading due to hosting costs...</p>}
                    
                </section>
                <Footer type="mobile"/>
            </div>
        )
    }else{
        return (
            <div className="bg-blue-100 min-h-screen">
                <header className="p-10 flex place-items-center">
                    <h1 className='text-red-600 text-center text-4xl font-bold'>FIDE Chess Top 100 Standard Rankings</h1>
                    <a href="/" className="ml-40 font-bold text-xl font-mono hover:text-blue-800">Blitz Rankings</a>  
                    <a href="/rapid" className="ml-10 font-bold text-xl font-mono hover:text-blue-800">Rapid Rankings</a>  
                </header>
                <section className="w-full flex flex-col place-content-center place-items-center bg-red-200 pt-20 pb-10">
                    <div className="w-2/3 ml-auto mr-auto bg-gray-200 h-20 grid grid-cols-5 ">
                        <p className="p-6">Ranking</p>
                        <p className="p-6">Name</p>
                        <p className="p-6">Country</p>
                        <p className="p-6">Rating</p>
                        <p className="p-6">Average Rating</p>
                    </div>
                    
                        {state.length > 1 ? state.map((player)=> {
                            return (
                                <Player ranking={player.ranking} name={player.name} country={player.country} rating={player.rating} avgRating={player.avgRating}/>
                                
                            );
                        }) : <p className="text-center text-xl font-bold text-red-500 bg-gray-200 w-2/3 p-4">Standings are not loading due to hosting costs...</p>}
                    
                </section>
                <Footer />
            </div>
        )
    }
    

}

export default Standard;
