"use client";
import { useSearchParams } from "next/navigation";
import { hargaPembayaran, aksesPrevent, helpUtama } from "../dataHelp";
import { AccordionHelp } from "@/components/ui/Accordion";

function page() {
   const searchParams = useSearchParams();

   const search = searchParams.get("q");

   const questions = [...helpUtama, ...hargaPembayaran, ...aksesPrevent];

   return (
      <>
         <div className=" flex items-center flex-col">
            <div className=" font-semibold text-[34px] mb-[47px]">
               Hasil pencarian untuk : {search}
            </div>
            <div className="w-full sm:w-[1088px]  px-5">
               {questions.map((item) => {
                  if (
                     item.question.toLowerCase().includes(search.toLowerCase())
                  ) {
                     return (
                        <AccordionHelp
                           question={item.question}
                           answer={item.answer}
                        />
                     );
                  }
                  return null;
               })}
            </div>
         </div>
      </>
   );
}

export default page;
