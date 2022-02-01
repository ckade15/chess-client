import React from "react";
import { useState } from "react";

const UploadForm = (width) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const handleChange = (e) =>{
        let selected = e.target.files[0];
        console.log(selected.type);
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError("");
        }else{
            setFile(null);
            setError("Please upload a JPEG or PNG file.");
        }
        console.log(file)
    }
    return (
        <form className="bg-blue-500 p-4 rounded-lg">
            <input type="file" onChange={handleChange} />
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
        </form>
    )
}

export default UploadForm;