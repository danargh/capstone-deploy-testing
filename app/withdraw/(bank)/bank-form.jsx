import React from "react";
import Image from "next/image";
import BCALogo from "public/assets/images/bca.png";

export default function PaymentForm() {
   return (
      <div className="flex flex-row gap-[57px] items-end justify-center w-[447px] absolute left-9 top-[26px]">
         <div className="flex flex-col gap-[17px] items-start justify-center shrink-0 relative">
            <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
               <div className="border-solid border-[#d9d9d9] border-[3px] pt-3 pr-5 pb-3 pl-5 flex flex-col gap-2.5 items-start justify-start shrink-0 w-[474px] relative overflow-hidden">
                  <div className="flex flex-row gap-[11px] items-center justify-start self-stretch shrink-0 relative">
                     <Image src={BCALogo} alt="bank" width={103} height={58} />

                     <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative w-[107px]">
                        BCA
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-[19px] items-center justify-start shrink-0 relative">
                  <div className="flex flex-col gap-[19px] items-start justify-start shrink-0 relative">
                     <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                        <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                           <div className="font-inter font-medium font-md text-neutral-900 text-center relative">
                              Nomor Rekening
                           </div>
                        </div>

                        <div className="bg-neutral-0 rounded-lg border-solid border-[#acacac] border p-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 w-[474px] relative">
                           <div className="font-inter font-normal text-[18px]/[150%] text-[#b9b4b4] text-left relative flex-1 flex items-center justify-start">
                              Masukkan Nomor Rekening
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                           <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                              <div className="font-inter font-medium text-md text-neutral-900 text-center relative">
                                 Nominal
                              </div>
                           </div>

                           <div className="bg-neutral-0 rounded-lg border-solid border-[#acacac] border p-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 w-[474px] relative">
                              <div className="font-inter font-normal text-[18px]/[150%] text-[#b9b4b4] text-left relative flex-1 flex items-center justify-start">
                                 Rp0
                              </div>
                           </div>
                        </div>
                        {/* Later become an alert  */}
                        <div className="font-inter font-light text-[15px]/[150%] text-[#ff0000] text-left relative w-[453px] flex items-center justify-start">
                           Minimal Transfer Rp.100.000
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                     <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                        <div className="font-inter font-medium text-md text-neutral-900 text-center relative">
                           Pesan (Opsional)
                        </div>
                     </div>

                     <div className="bg-neutral-0 rounded-lg border-solid border-[#acacac] border p-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 w-[474px] h-[47px] relative"></div>
                  </div>
               </div>
            </div>
            <button className="font-poppins font-medium text-lg text-neutral-0 text-left bg-web-green-300 rounded-xl pt-4 pr-3 pb-4 pl-3 flex gap-2.5 items-center justify-center w-[168px] h-[75px] relative">
               Lanjutkan
            </button>
         </div>
      </div>
   );
}
