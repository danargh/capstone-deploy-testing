import React from "react";
import Image from "next/image";
import Link from "next/link";

//Still need to be fixed
export default function Card({ images, title, description, href, postId, handleDetailArticle }) {
   return (
      <>
         <div className="flex flex-col items-start isolation-auto  w-[410px] h-[528px]  bg-neutral-0 shadow-md rounded-lg border border-neutral-40">
            <div className="w-[410px] h-[256px] rounded-t-lg  overflow-hidden">
               <Image src={images} alt="Title" width={410} height={256} />
            </div>
            <div className="flex flex-col items-center w-[410px] h-[248px]">
               <div className="flex w-96 h-fit items-center justify-center px-4 -mt-24 bg-neutral-0 rounded-t-xl">
                  <p className="pt-3 font-inter text-center text- font-bold text-neutral-900">{title}</p>
               </div>
               <div className="flex w-96 h-fit items-start justify-start px-4 py-8 bg-neutral-0 rounded-none">
                  <p className="font-inter text-justify text-[14px] font-normal text-neutral-300">{description}</p>
               </div>
               <div className="flex flex-grow"></div>
               <div className="flex flex-row justify-end w-96 h-fit px-4 py-2 bg-neutral-0 rounded-none">
                  <button
                     onClick={() => {
                        handleDetailArticle(postId);
                     }}
                     className="font-inter text-right  text-[14px] font-normal text-[#0637B5]"
                  >
                     Baca Selengkapnya
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
