"use client";

import { useState, useRef } from "react";
import NavbarDokter from "@/components/ui/NavbarDokter";
import InputSearch from "@/components/forms/input-search";
import { AddObatIcon, SearchIcon } from "@/public/assets/icons/icons";
import ObatItem from "./ObatItem";

const listObat = ["Paracetamol 500mg", "Amoxicillin 3.000mg", "Fluoxetine", "Alprazolam", "Sertraline", "Lorazepam", "Antidepresan"];

export default function ObatDokter() {
   const editObatRef = useRef([]);
   const [choosedObat, setChoosedObat] = useState(["Paracetamol"]);
   const [keywordSearch, setKeywordSearch] = useState("");

   const handleAddObat = (obat) => {
      setChoosedObat([...choosedObat, obat]);
   };

   const handleRemoveObat = (index) => {
      const removeObat = choosedObat;
      removeObat.splice(index, 1);
      setChoosedObat([...removeObat]);
   };

   const handleFocusEditObat = (index) => {
      editObatRef.current[index].focus();
   };

   const handleChangeObat = (item, index) => {
      setChoosedObat(choosedObat.map((obat, i) => (i === index ? item : obat)));
   };

   const handleBlurObatInput = (event, index) => {
      if (event.key === "Enter") {
         editObatRef.current[index].blur();
      }
   };

   const searchedObat = choosedObat.filter((obat) => {
      return obat.toLowerCase().includes(keywordSearch.toLowerCase());
   });

   return (
      <>
         <section className="grid grid-cols-2 gap-[46px] text-[#577536] mt-[46px] max-w-[1320px] mx-auto h-[90vh]">
            <div className="flex flex-col justify-between">
               <div>
                  <h1 className="font-inter font-[600] text-[36px] leading-[46px] mb-[30px]">Resep Obat</h1>
                  <div className="flex items-center">
                     <input
                        placeholder="Cari Obat"
                        className=" border-neutral-200 border-[3px] h-[54px] p-3 w-full mr-3 rounded-lg"
                        onChange={(e) => {
                           setKeywordSearch(e.target.value);
                        }}
                        value={keywordSearch}
                     />
                     <SearchIcon fill="black" />
                  </div>
                  <ul className="mt-[20px]">
                     {keywordSearch === ""
                        ? choosedObat.map((obat, index) => {
                             return <ObatItem editObatRef={editObatRef} onBlurObatInput={handleBlurObatInput} onAddObat={handleAddObat} onChangeObat={handleChangeObat} onFocusEditObat={handleFocusEditObat} onRemoveObat={handleRemoveObat} obat={obat} index={index} />;
                          })
                        : searchedObat.map((obat, index) => {
                             return <ObatItem editObatRef={editObatRef} onBlurObatInput={handleBlurObatInput} onAddObat={handleAddObat} onChangeObat={handleChangeObat} onFocusEditObat={handleFocusEditObat} onRemoveObat={handleRemoveObat} obat={obat} index={index} />;
                          })}
                  </ul>
               </div>
               <button className="w-[220px] font-poppins font-[600] text-[24px] leading-[28px] text-white px-[74px] py-[20px] hover:bg-web-green-400 hover:shadow-md bg-web-green-300 rounded-[12px]">Lanjut</button>
            </div>
            <div className="bg-[#C7E8AF] rounded-[5px] px-[24px] pb-[38px] pt-[16px]">
               <h2 className="font-poppins font-[700] text-[24px] leading-[36px] text-[#577536] mb-[38px]">Daftar Obat</h2>
               <ul className="flex flex-col gap-[12px]">
                  {listObat.map((obat, index) => {
                     return (
                        <li key={index} className="rounded-[5px] bg-white w-full h-[110px] font-poppins text-[20px] leading-[30px] font-[500] flex items-center justify-between p-[16px]">
                           <p>{obat}</p>
                           <button
                              onClick={() => {
                                 handleAddObat(obat);
                              }}
                              className="bg-[#8EBF59] px-[34px] py-[12px] rounded-[8px] hover:bg-web-green-400 hover:shadow-md"
                           >
                              <AddObatIcon />
                           </button>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </section>
      </>
   );
}
