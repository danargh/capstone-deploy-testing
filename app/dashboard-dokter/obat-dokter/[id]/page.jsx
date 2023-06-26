"use client";

import { useState, useRef, useEffect } from "react";
import { AddObatIcon, SearchIcon } from "@/public/assets/icons/icons";
import ObatItem from "../ObatItem";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { getDrugs } from "@/components/atoms/useObatDoctor";
import { receiptAtom } from "@/components/atoms/useCreateReceipt";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
export default function page({ params }) {
   const editObatRef = useRef([]);
   const [choosedObat, setChoosedObat] = useState([]);
   const [choosedObatId, setChoosedObatId] = useState([]);

   const [keywordSearch, setKeywordSearch] = useState("");
   const router = useRouter();
   const { dataDrugs, error: errorGetDrugs } = getDrugs();
   // const { error: errorCreateReceipt, triggerCreateReceipt, isReceiptLoading } = createReceipt();
   //    const [receipt, setReceipt] = useAtom(receiptAtom);

   const [drugsData, setDrugsData] = useState({ drugs: [] });

   const dataDrugsArray = dataDrugs.recipt;

   const handleAddObat = (obat) => {
      setChoosedObat([...choosedObat, obat.nama]);
      setChoosedObatId([...choosedObatId, obat.ID]);
      const updatedDrugs = { drugs: [...drugsData.drugs, { ID: obat.ID }] };
      setDrugsData(updatedDrugs);
   };

   const handleRemoveObat = (index) => {
      const removeObat = choosedObat;
      const removeObatId = drugsData;

      removeObat.splice(index, 1);
      removeObatId.drugs.splice(index, 1);

      setChoosedObat([...removeObat]);
      setDrugsData({ drugs: [...removeObatId.drugs] });
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

   const handleSubmitObat = async (e) => {
      e.preventDefault();
      try {
         //  setReceipt(choosedObatId);
         const token = Cookies.get("doctorToken") || "";
         //  console.log(choosedObatId);
         console.log(drugsData);
         const response = await fetch(
            `https://capstone-project.duckdns.org:8080/doctor/recipt/${params.id}`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(drugsData),
            }
         );
         if (!response.ok) {
            throw new Error("Error adding drugs");
         } else {
            console.log("Success adding drugs");
            Swal.fire({
               icon: "success",
               title: "Berhasil mengirim obat",
               text: "Ketuk dimana saja untuk menutup halaman ini",
               showConfirmButton: false,
            });
            router.push(`/dashboard-dokter/order-by-dokter`);
         }
      } catch (error) {
         console.error(error);
      }
   };

   //    console.log(params.id);
   //    console.log(drugsData);

   return (
      <>
         <section className="grid grid-cols-2 gap-[46px] text-[#577536] mt-[46px] max-w-[1320px] mx-auto h-[1080px] mb-8">
            <div className="flex flex-col justify-between">
               <div>
                  <h1 className="font-inter font-[600] text-[36px] leading-[46px] mb-[30px]">
                     Resep Obat
                  </h1>
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
                             return (
                                <ObatItem
                                   key={index}
                                   editObatRef={editObatRef}
                                   onBlurObatInput={handleBlurObatInput}
                                   onChangeObat={handleChangeObat}
                                   onFocusEditObat={handleFocusEditObat}
                                   onRemoveObat={handleRemoveObat}
                                   obat={obat}
                                   index={index}
                                />
                             );
                          })
                        : searchedObat.map((obat, index) => {
                             return (
                                <ObatItem
                                   key={index}
                                   editObatRef={editObatRef}
                                   onBlurObatInput={handleBlurObatInput}
                                   onChangeObat={handleChangeObat}
                                   onFocusEditObat={handleFocusEditObat}
                                   onRemoveObat={handleRemoveObat}
                                   obat={obat}
                                   index={index}
                                />
                             );
                          })}
                  </ul>
               </div>
               <motion.button
                  whileHover={{ transition: 2, backgroundColor: "#63863E" }}
                  onClick={handleSubmitObat}
                  className="w-[220px] font-poppins font-[600] text-[24px] leading-[28px] text-white px-[74px] py-[20px] hover:shadow-md bg-web-green-300 rounded-[12px]"
               >
                  Lanjut
               </motion.button>
            </div>
            <motion.div
               whileInView={{ y: [64, 0], opacity: [0, 1] }}
               transition={{ duration: 1 }}
               className="h-[1080px] overflow-y-scroll bg-[#C7E8AF] rounded-[5px] px-[24px] pb-[38px] pt-[16px]"
            >
               <h2 className="font-poppins font-[700] text-[24px] leading-[36px] text-[#577536] mb-[38px]">
                  Daftar Obat
               </h2>
               <ul className="flex flex-col gap-[12px]">
                  {dataDrugsArray &&
                     dataDrugsArray.map((obat, index) => {
                        return (
                           <li
                              key={index}
                              className="rounded-[5px] bg-white w-full h-[110px] font-poppins text-[20px] leading-[30px] font-[500] flex items-center justify-between p-[16px]"
                           >
                              <p>{obat.nama}</p>
                              <motion.button
                                 whileHover={{
                                    transition: 2,
                                    backgroundColor: "#63863E",
                                 }}
                                 onClick={() => {
                                    handleAddObat(obat);
                                 }}
                                 className="bg-[#8EBF59] px-[34px] py-[12px] rounded-[8px] hover:shadow-md"
                              >
                                 <AddObatIcon />
                              </motion.button>
                           </li>
                        );
                     })}
               </ul>
            </motion.div>
         </section>
      </>
   );
}
