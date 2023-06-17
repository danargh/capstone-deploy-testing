import React from "react";
import { ErrorIcon } from "@/public/assets/icons/icons";

export default function ErrorMessage({ errorMessage }) {
   return (
      <>
         <div className="gap-[8px] font-[600] justify-start rounded-lg px-[12px] py-[12px] flex items-center bg-[#F6EAEA] font-inter text-[12px] leading-[24px]">
            <i>
               <ErrorIcon fill="#A12D28" />
            </i>
            <p className="text-[#A12D28]">{errorMessage}</p>
         </div>
      </>
   );
}
