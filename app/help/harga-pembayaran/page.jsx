import { hargaPembayaran } from "../dataHelp";
import { AccordionHelp } from "@/components/ui/Accordion";

function page() {
   return (
      <>
         <div className=" flex items-center flex-col">
            <div className=" font-semibold text-[34px] mb-[47px]">
               Harga dan Pembayaran
            </div>
            <div className="w-full sm:w-[1088px]  px-5">
               {hargaPembayaran.map((item) => (
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
