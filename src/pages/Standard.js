import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Standard() {
    const [state, setState] = useState([]);

    const getStandard = async () => {
        const req = await axios.get('/api/v1/blitz');
        localStorage.setItem('standard', req.data.data);
        
    }
    const handleStorage = () => {
        if (localStorage.getItem("standard")) {
            setState(JSON.parse(localStorage.getItem("standard")));
        }else {
            getStandard();
        }
        
    }
    useEffect(() => {
        handleStorage();
    });
    
    return (
            <div className="bg-blue-100 min-h-screen">
                <header className="p-10">
                    <h1 className='text-red-600 text-center text-4xl font-bold'>FIDE Chess Top 100 Standard Rankings</h1>  
                </header>
                <section className="w-full flex flex-col place-content-center place-items-center">
                    <ul>
                        {localStorage.getItem('standard').map((item, index) => {
                            
                        })}
                    </ul>
                    
                </section>
            </div>
  );
}

export default Standard;
