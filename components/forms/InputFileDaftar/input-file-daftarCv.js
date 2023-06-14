"use client";
import { input_variants } from "@/components/custom/custom";
import { useState } from "react";

const InputFileDaftarCv = ({ value, error, errorTouched }) => {
   const [selectedFile, setSelectedFile] = useState(value);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
   };

   return (
      <>
         <label htmlFor="file-input-cv" className="flex flex-row-reverse w-full cursor-pointer h-[41px]">
            <div className="bg-[#8EBF59] font-poppins whitespace-nowrap flex items-center px-9 rounded-r-md text-white">Pilih</div>
            <div className={input_variants({ variant: "image" })}>
               <div className="float-left">{selectedFile ? selectedFile.name : "Pilih File"}</div>
            </div>
         </label>
         <input required id="file-input-cv" className="hidden" type="file" onChange={handleFileChange} />
         {/* {errorTouched && error ? <p className="text-[14px] text-left text-red-600 absolute">{error}</p> : null} */}
      </>
   );
};

export default InputFileDaftarCv;
