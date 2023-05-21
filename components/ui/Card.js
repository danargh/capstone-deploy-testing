import React from "react";
import Image from "next/image";
import Link from "next/link";

//Still need to be fixed
export default function Card({ images, title, description, href }) {
   return (
      <>
         <div className="flex flex-col items-start isolation-auto absolute w-[410px] h-[528px] left-[74px] top-[202px] bg-white shadow-md rounded-lg border border-gray-300">
            <div className="w-[410px] h-[256px] rounded-t-lg">
               <Image src={images} alt="Title" width={410} height={256} />
            </div>
            <div className="flex flex-col items-center w-[410px] h-[248px]">
               <div className="flex w-96 h-fit items-center justify-center px-4 -mt-24 bg-white rounded-xl">
                  <p className="font-poppins text-center text-base font-bold text-black">{title}</p>
               </div>
               <div className="flex w-96 h-fit items-start justify-start px-4 py-8 bg-white rounded-none">
                  <p className="font-poppins text-justify text-sm font-normal text-[#6C6C6C]">
                     {description}
                  </p>
               </div>
               <div className="flex flex-grow"></div>
               <div className="flex flex-row justify-end w-96 h-fit px-4 py-2 bg-white rounded-none">
                  <Link
                     href={href}
                     className="font-inter text-right text-sm font-normal text-[#0637B5]"
                  >
                     Baca Selengkapnya
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}
