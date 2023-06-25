'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { bankLists } from '@/components/ui/BankCardList';
import Link from 'next/link';
import { useAtom } from 'jotai';
import useWithdrawal, { WithdrawalDataAtom } from '@/components/atoms/useWithdrawal';

export default function BankFinale() {
   const [hideBankNumber, toggleHiddenBankNumber] = useState(true);
   const { handleWithdrawalDataSend } = useWithdrawal();

   const [withdrawalData] = useAtom(WithdrawalDataAtom);
   const handleHiddenBankNumber = (e) => {
      toggleHiddenBankNumber((prev) => !prev);
   };

   function SelectedBankCard({ selectedBank }) {
      const selectedBankData = bankLists.find((bank) => bank.bankName === selectedBank);
      return (
         <div className="flex flex-row gap-[11px] items-center justify-start self-stretch shrink-0 relative">
            <Image src={selectedBankData.bankLogo} alt="bank" width={selectedBankData.width} height={selectedBankData.height} />
         </div>
      );
   }
   return (
      <>
         {withdrawalData &&
            withdrawalData.map((data, index) => (
               <div key={index} className="flex flex-col gap-[19px] items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
                     <div className="border-solid border-[#d9d9d9] border-[3px] shrink-0 w-[447px] h-[151px] relative overflow-hidden">
                        <div className="flex flex-col gap-5 items-start justify-start absolute left-5 top-[13px]">
                           <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                              <div className="font-inter font-bold text-md text-neutral-900 text-center relative">Rekening Tujuan</div>
                           </div>

                           <div className="flex flex-row gap-[11px] items-center justify-start shrink-0 relative">
                              <SelectedBankCard selectedBank={data.bank} />

                              <div className="flex flex-col gap-[11px] items-start justify-start shrink-0 relative">
                                 <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative">SDR {data.name}</div>

                                 <div className="cursor-pointer select-none font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative" onClick={handleHiddenBankNumber}>
                                    {data.method} {hideBankNumber ? '***************' : data.account_number}
                                 </div>
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

                                    <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Rp{data.amount}</div>
                                 </div>

                                 <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                                    <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Biaya Transaksi</div>
                                    {/* is it static? */}
                                    <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Rp7.500</div>
                                 </div>

                                 <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                                    <div className="font-inter font-normal text-[18px] text-neutral-900 text-center relative">Total</div>

                                    <div className="text-neutral-900 text-center relative">Rp{data.amount + 7500}</div>
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

                  <button
                     className="font-poppins font-medium text-lg text-neutral-0 text-left bg-web-green-300 rounded-xl pt-4 pr-3 pb-4 pl-3 flex gap-2.5 items-center justify-center w-[168px] h-[75px] relative"
                     onClick={handleWithdrawalDataSend}
                  >
                     Lanjutkan
                  </button>
               </div>
            ))}
      </>
   );
}
