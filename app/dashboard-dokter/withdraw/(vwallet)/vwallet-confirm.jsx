import React from "react";
import Image from "next/image";
import BCALogo from "public/assets/images/bca.png";
import Link from "next/link";

export default function WalletPaymentFinale() {
   return (
      <div className="flex flex-col gap-[19px] items-start justify-start shrink-0 relative">
         <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
            <div className="border-solid border-[#d9d9d9] border-[3px] shrink-0 w-[447px] h-[151px] relative overflow-hidden">
               <div className="flex flex-col gap-5 items-start justify-start absolute left-5 top-[13px]">
                  <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                     <div className="font-inter font-bold text-md text-neutral-900 text-center relative">Rekening Tujuan</div>
                  </div>

                  <div className="flex flex-row gap-[11px] items-center justify-start shrink-0 relative">
                     <Image src={BCALogo} alt="bank" width={103} height={58} />

                     <div className="flex flex-col gap-[11px] items-start justify-start shrink-0 relative">
                        <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative">SDR Fauzan Hakim</div>

                        <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative">BCA ***************</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
               <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div className="font-inter font-medium text-md text-neutral-900 text-center relative">Keterangan</div>
               </div>

               <div className="bg-neutral-0 rounded-sm border-solid border-[#d9d9d9] border-[3px] shrink-0 w-[447px] h-[340px] relative">
                  <div className="flex flex-col gap-[50px] items-center justify-start px-[22px] pb-[14px] pt-[24px] relative">
                     <div className="flex flex-col gap-[18px] items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                           <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Nominal Transfer</div>

                           <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Rp2.000.000</div>
                        </div>

                        <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                           <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Biaya Transaksi</div>

                           <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Rp7.500</div>
                        </div>

                        <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                           <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Total</div>

                           <div className="text-neutral-900 text-center relative">Rp2.007.500</div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-[9px] items-start justify-start self-stretch shrink-0 relative">
                        <div className="font-inter font-normal text-[18px] text-neutral-900 text-left relative w-[428px]">Pesan</div>
                        <textarea
                           type="text"
                           className="font-inter font-normal text-[18px] placeholder:text-[#8f8f8f] resize-none bg-neutral-0 rounded-md border-solid border-[#d9d9d9] border-[3px] pt-2 pr-3.5 pb-2 pl-3.5 flex flex-row gap-2.5 items-start justify-start w-[403px] h-[101px] relative overflow-y-auto"
                           placeholder="komen"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <button className="font-poppins font-medium text-lg text-neutral-0 text-left bg-web-green-300 rounded-xl pt-4 pr-3 pb-4 pl-3 flex gap-2.5 items-center justify-center w-[168px] h-[75px] relative">
            Lanjutkan
         </button>
      </div>
   );
}
