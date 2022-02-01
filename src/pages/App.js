import { useEffect } from "react";
import { useState } from "react";
import UploadForm from "../components/UploadForm";


function App() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth)
        document.title = "Home";
    });

    return (
        <div className="bg-blue-100 min-h-screen">
            <header className="p-10">
                <h1 className='text-red-600 text-center text-4xl font-bold'>Photo Storage</h1>
                
            </header>
            <section className="w-full flex flex-col place-content-center place-items-center">
                <UploadForm width={width} />
                
            </section>
        </div>
  );
}

export default App;
