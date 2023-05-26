"use client"
import { input_variants } from "@/components/custom/custom";
import { useState } from "react";


const InputFileDaftar = ({ handleSelectedFile }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        handleSelectedFile(file);
    };

    return (
        <>
            <label htmlFor="file-input" className="flex flex-row-reverse w-full cursor-pointer h-[41px]">
                <div className="bg-[#8EBF59] font-poppins whitespace-nowrap flex items-center px-9 rounded-r-md text-white">
                    Pilih
                </div>
                <div className={input_variants({ variant: "image" })}>
                    <div className="float-left">
                        {selectedFile ? selectedFile.name : "Pilih File"}
                    </div>
                </div>
            </label>
            <input id="file-input" className="hidden" type="file" onChange={handleFileChange} />
        </>
    );
};

export default InputFileDaftar;