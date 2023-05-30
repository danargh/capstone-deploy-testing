"use client";
import React from "react";
import { helpUtama } from "./dataHelp";
import { AccordionHelp } from "@/components/ui/Accordion";
import Link from "next/link";
function page() {
   return (
      <>
         <div className=" flex items-center flex-col">
            <div className=" font-semibold text-[34px] mb-[47px]">
               Top Kategori
            </div>
            <Link
               href={"/help/harga-pembayaran"}
               className="border border-black rounded-lg px-4 py-3 flex justify-between items-center w-[1088px] hover:bg-neutral-50"
            >
               <div className="font-semibold text-lg">Harga dan pembayaran</div>
               <svg
                  data-accordion-icon
                  class={"w-6 h-6 -rotate-90 shrink-0"}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fill-rule="evenodd"
                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                     clip-rule="evenodd"
                  ></path>
               </svg>
            </Link>
            <Link
               href={"/help/akses-prevent"}
               className="mt-4 border border-black rounded-lg px-4 py-3 flex justify-between items-center w-[1088px] hover:bg-neutral-50"
            >
               <div className="font-semibold text-lg">Mengakses Prevent</div>
               <svg
                  data-accordion-icon
                  class={"w-6 h-6 -rotate-90 shrink-0"}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fill-rule="evenodd"
                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                     clip-rule="evenodd"
                  ></path>
               </svg>
            </Link>
         </div>

         <div className=" my-28 flex items-center flex-col ">
            <div className=" font-semibold text-[34px] mb-[47px]">
               Pertanyaan Berdasarkan Topik Anda
            </div>
            <div className="w-[1088px]">
               {helpUtama.map((item) => (
                  <AccordionHelp
                     question={item.question}
                     answer={item.answer}
                  />
               ))}
            </div>
         </div>
      </>
   );
}

export default page;
