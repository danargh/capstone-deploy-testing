import React from "react";

export default function InputNew({ label, type, name, onHandleChange, value }) {
   return (
      <>
         <div className="w-full relative group font-inter font-[400] text-[18px] leading-[27px]">
            <input name={name} onChange={onHandleChange} value={value} type={type} required className="border-[#8EBF59] w-full h-12 px-4 text-sm peer bg-white outline-none rounded-lg focus:border-none valid:bg-white" />
            <label
               htmlFor="username"
               className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:left-3 peer-valid:left3 group-focus-within:pt-5 peer-valid:pt-0 group-focus-within:bg-white peer-valid:pl-0 group-focus-within:px-2
                peer-valid:px-2"
            >
               {label}
            </label>
         </div>
      </>
   );
}
