"use client";
import React, { useState } from "react";

const Dropdown = ({ value, onChange }) => {
   const [selectedYear, setSelectedYear] = useState("");

   const years = Array.from({ length: 24 }, (_, i) => 2000 + i);

   const selectYear = (event) => {
      setSelectedYear(event.target.value);
      onChange(event.target.value);
   };

   return (
      <div>
         <select value={value} onChange={selectYear} className="font-poppins font-[500] py-[15px] text-[20px] rounded-[10px] block appearance-none w-28 bg-white border border-gray-400 px-4 pr-8 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400">
            <option value="">Select Year</option>
            {years.map((year) => (
               <option key={year} value={year}>
                  {year}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Dropdown;
