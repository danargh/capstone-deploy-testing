"use client";

import React from "react";
import { AddObatIcon, PenIcon, TrashIcon } from "@/public/assets/icons/icons";

export default function ObatItem({ onChangeObat, onBlurObatInput, editObatRef, obat, index, onRemoveObat, onFocusEditObat }) {
   return (
      <li key={index} className="flex justify-between rounded-[5px] bg-white width-[517px] height-[110px] py-[18px] border-b-2">
         <div className="flex gap-3">
            <p className="font-poppins font-[500] text-[32px] leading-[48px]">{`${index + 1}. `}</p>
            <input
               onChange={(e) => {
                  onChangeObat(e.target.value, index);
               }}
               onKeyDown={() => {
                  onBlurObatInput(event, index);
               }}
               ref={(el) => (editObatRef.current[index] = el)}
               value={obat}
               className="font-poppins font-[500] text-[32px] leading-[48px]"
            />
         </div>

         <div className="flex gap-[24px]">
            <button
               onClick={() => {
                  onFocusEditObat(index);
               }}
            >
               <PenIcon fill="#577536" />
            </button>
            <button
               onClick={() => {
                  onRemoveObat(index);
               }}
            >
               <TrashIcon fill="#577536" />
            </button>
         </div>
      </li>
   );
}
