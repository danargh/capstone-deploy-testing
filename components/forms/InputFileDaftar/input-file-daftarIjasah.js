"use client"
import { input_variants } from "@/components/custom/custom";
import { useState } from "react";


const InputFileDaftarIjasah = ({ handleSelectedFile, value}) => {
    const [selectedFile, setSelectedFile] = useState(value);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        handleSelectedFile(file);
    };

    return (
        <>
            <label htmlFor="file-input-ijasah" className="flex flex-row-reverse w-full cursor-pointer h-[41px]">
                <div className="bg-[#8EBF59] font-poppins whitespace-nowrap flex items-center px-9 rounded-r-md text-white">
                    Pilih
                </div>
                <div className={input_variants({ variant: "image" })}>
                    <div className="float-left">
                        {selectedFile ? selectedFile.name : "Pilih File"}
                    </div>
                </div>
            </label>
            <input id="file-input-ijasah" className="hidden" type="file" onChange={handleFileChange} />
        </>
    );
};

export default InputFileDaftarIjasah;