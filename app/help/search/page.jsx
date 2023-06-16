"use client";
import { useSearchParams } from "next/navigation";
import { hargaPembayaran, aksesPrevent, helpUtama } from "../dataHelp";
import { AccordionHelp } from "@/components/ui/Accordion";

function page() {
   const searchParams = useSearchParams();

   const search = searchParams.get("q");

   const questions = [...helpUtama, ...hargaPembayaran, ...aksesPrevent];
   const filteredQuestions = questions.filter((question) =>
      question.question.toLowerCase().includes(search.toLowerCase())
   );
   return (
      <>
         <div className=" flex items-center flex-col">
            <div className=" font-semibold text-[34px] mb-[46px]">
               Hasil pencarian untuk : {search}
            </div>
            <div className="w-full sm:w-[1088px]  px-5">
               {filteredQuestions.length !== 0 ? (
                  filteredQuestions.map((item) => (
                     <AccordionHelp
                        question={item.question}
                        answer={item.answer}
                     />
                  ))
               ) : (
                  <div className="font-regular text-lg text-center">
                     Maaf hasil pencarian tidak ditemukan :)
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

export default page;
