"use client"
import { input_variants } from "@/components/custom/custom";
import { useState } from "react";


const Input_file = ({ handleSelectedFile }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        handleSelectedFile(file); // Pass the selected file value to the prop
    };

    return (
        <>
            <label htmlFor="file-input" className="flex flex-row-reverse w-full cursor-pointer h-[41px]">
                <div className="bg-web-green-400 font-poppins whitespace-nowrap flex items-center px-3 rounded-r-xl text-white">
                    Pilih Gambar
                </div>
                <div className={input_variants({ variant: "image" })}>
                    {selectedFile ? selectedFile.name : "Pilih Gambar"}
                </div>
            </label>
            <input id="file-input" className="hidden" type="file" onChange={handleFileChange} />
        </>
    );
};

export default Input_file;