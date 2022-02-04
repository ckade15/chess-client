import { useEffect } from "react";
import { useState } from "react";
const axios = require('axios');


function Standard() {
    const [standard, setStandard] = useState(null);

    const getStandard = () => {
        axios.get('http://localhost:5001/api/v1/standard')
            .then(res => {
                setStandard(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() =>  {

    });
    return (
        <div className="bg-blue-100 min-h-screen">
            <header className="p-10">
                <h1 className='text-red-600 text-center text-4xl font-bold'>FIDE Chess Top 100 Standard Rankings</h1>  
            </header>
            <section className="w-full flex flex-col place-content-center place-items-center">
                
            </section>
        </div>
  );
}

export default Standard;
