import React from "react";
import Image from "next/image";

// Due to difference in Icons and border i've split these into two

function PaymentImage({ image, height, width }) {
   return (
      <>
         <Image src={image} alt="bank" width={width} height={height} />
      </>
   );
}

export function BankCard({
   bankName,
   bankLogo,
   height,
   width,
   handleWithdrawalOptionSelection,
}) {
   return (
      <>
         <div
            className="w-[447px] h-[82px] border-solid border-[#d9d9d9] border p-5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
         >
            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
               <div className="flex flex-row gap-[11px] items-center justify-start flex-1 relative">
                  <PaymentImage
                     image={bankLogo}
                     height={height}
                     width={width}
                  />

                  <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative w-[107px]">
                     {bankName}
                  </div>
               </div>
               <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative cursor-pointer">
                  <input
                     id={`${bankName}-radio`}
                     type="radio"
                     defaultValue={bankName}
                     name="bank-radio"
                     className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500 "
                     onClick={handleWithdrawalOptionSelection}
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export function VWalletCard({
   bankName,
   bankLogo,
   height,
   width,
   handleWithdrawalOptionSelection,
}) {
   return (
      <>
         <div
            className="w-[447px] h-[82px] border-solid border-[#d9d9d9] border pt-3 pr-5 pb-3 pl-5 flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
         >
            <div className="flex flex-row gap-0 items-center justify-start flex-1 relative">
               <div className="flex flex-row gap-[11px] items-center justify-start flex-1 relative">
                  <PaymentImage
                     image={bankLogo}
                     height={height}
                     width={width}
                  />

                  <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative w-[107px]">
                     {bankName}
                  </div>
               </div>
               <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative cursor-pointer">
                  <input
                     id={`${bankName}-radio`}
                     type="radio"
                     defaultValue={bankName}
                     name="bank-radio"
                     className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500 "
                     onClick={handleWithdrawalOptionSelection}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
