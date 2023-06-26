"use client";
import { input_variants } from "@/components/custom/custom";
import { useState } from "react";

const InputFile = ({ handleSelectedFile }) => {
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      handleSelectedFile(file);
   };

   return (
      <>
         <label htmlFor="file-input" className="flex flex-row-reverse w-[914px] cursor-pointer h-[41px]">
            <div className="bg-web-green-400 font-poppins whitespace-nowrap flex items-center px-3 rounded-r-md text-white">Pilih Gambar</div>
            <div className={input_variants({ variant: "image" })}>{selectedFile ? selectedFile.name : "Pilih Gambar"}</div>
         </label>
         <input id="file-input" className="hidden" type="file" onChange={handleFileChange} />
      </>
   );
};

export default InputFile;
