"use client";

import React, { useState } from "react";
import { useAtom } from "jotai";
import useWithdrawal, {
   WithdrawalMethodAtom,
   selectedDropdownAtom,
} from "@/components/atoms/useWithdrawal";
import { bankLists, VWalletLists } from "@/components/ui/BankCardList";
import { BankCard, VWalletCard } from "@/components/ui/BankCard";

export default function WithdrawMethodControl() {
   const { handleWithdrawalSteps } = useWithdrawal();

   const [isBankOpen, setIsBankOpen] = useState(false);
   const [isVWalletOpen, setIsVWalletOpen] = useState(false);
   const [WithdrawOption, setWithdrawOption] = useAtom(WithdrawalMethodAtom);
   const [selectedDropdown, setDropdown] = useAtom(selectedDropdownAtom);

   //Choose the Dropdown
   const handleBankDropdownClick = () => {
      setIsBankOpen(!isBankOpen);
      setDropdown("Bank");
      setIsVWalletOpen(false);
   };
   const handleVWalletDropdownClick = () => {
      setIsVWalletOpen(!isVWalletOpen);
      setDropdown("VWallet");
      setIsBankOpen(false);
   };

   // Handle Method Selection (Which one you want to withdraw to?)
   const handleWithdrawalOptionSelection = (option) => {
      setWithdrawOption(option);
   };
   
   return (
      <>
         <div className="flex flex-col gap-[12px] items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-[57px] items-end justify-center shrink-0 w-[447px] relative">
               <div className="flex flex-row gap-[75px] items-center justify-start shrink-0 w-[447px] relative">
                  <div className="font-inter font-semibold text-lg/[61px] text-[#3a8504] text-center relative">
                     Metode Penarikan
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
               <div
                  className="select-none cursor-pointer rounded-lg border-solid border-[#d9d9d9] border-[3px] shrink-0 w-[447px] h-[124px] relative overflow-hidden"
                  onClick={handleBankDropdownClick}
               >
                  <div className="flex flex-row gap-[239px] items-center justify-start absolute left-[25px] top-2.5">
                     <div className="flex flex-col gap-[11px] items-start justify-center shrink-0 relative">
                        <svg
                           className="shrink-0 relative overflow-visible"
                           width="62"
                           height="72"
                           viewBox="0 0 62 72"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M5 31.6801H10V48.9601H7C6.20435 48.9601 5.44129 49.4152 4.87868 50.2254C4.31607 51.0355 4 52.1343 4 53.2801C4 54.4258 4.31607 55.5246 4.87868 56.3347C5.44129 57.1449 6.20435 57.6 7 57.6H55C55.7956 57.6 56.5587 57.1449 57.1213 56.3347C57.6839 55.5246 58 54.4258 58 53.2801C58 52.1343 57.6839 51.0355 57.1213 50.2254C56.5587 49.4152 55.7956 48.9601 55 48.9601H52V31.6801H57C57.6532 31.6802 58.2886 31.3733 58.8097 30.8059C59.3307 30.2386 59.7089 29.4419 59.8868 28.5368C60.0647 27.6317 60.0327 26.6678 59.7954 25.7913C59.5582 24.9149 59.1288 24.1739 58.5725 23.6809L32.5725 0.641019C32.0996 0.221908 31.5553 0 31 0C30.4447 0 29.9004 0.221908 29.4275 0.641019L3.4275 23.6809C2.87117 24.1739 2.44178 24.9149 2.20456 25.7913C1.96734 26.6678 1.93526 27.6317 2.11318 28.5368C2.2911 29.4419 2.66931 30.2386 3.19034 30.8059C3.71138 31.3733 4.34678 31.6802 5 31.6801ZM16 31.6801H22V48.9601H16V31.6801ZM34 31.6801V48.9601H28V31.6801H34ZM46 48.9601H40V31.6801H46V48.9601ZM31 9.39259L46.4 23.0402H15.6L31 9.39259ZM62 67.68C62 68.8257 61.6839 69.9246 61.1213 70.7347C60.5587 71.5449 59.7956 72 59 72H3C2.20435 72 1.44129 71.5449 0.87868 70.7347C0.31607 69.9246 0 68.8257 0 67.68C0 66.5343 0.31607 65.4355 0.87868 64.6253C1.44129 63.8152 2.20435 63.36 3 63.36H59C59.7956 63.36 60.5587 63.8152 61.1213 64.6253C61.6839 65.4355 62 66.5343 62 67.68Z"
                              fill="black"
                              fillOpacity="0.72"
                           />
                        </svg>

                        <div className="font-inter font-medium text-xs/[21px] text-[rgba(0,0,0,0.47)] text-left relative">
                           Bank Transfer
                        </div>
                     </div>

                     <svg
                        className={`shrink-0 relative overflow-visible ${
                           isBankOpen ? "rotate-180" : ""
                        }`}
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <mask
                           id="mask0_1_151"
                           style={{ maskType: "alpha" }}
                           maskUnits="userSpaceOnUse"
                           x="0"
                           y="0"
                           width="52"
                           height="52"
                        >
                           <rect width="52" height="52" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1_151)">
                           <path
                              d="M26 33.3125L13 20.3125L16.0333 17.2792L26 27.2458L35.9667 17.2792L39 20.3125L26 33.3125Z"
                              fill="#1C1B1F"
                           />
                        </g>
                     </svg>
                  </div>
               </div>

               {/* Bank Dropdown Contents */}
               {isBankOpen && (
                  <div className="relative top-full left-0 bg-white w-full rounded-b-lg pb-[18px] z-10">
                     <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        {bankLists &&
                           bankLists.map((banks, index) => {
                              return (
                                 <React.Fragment key={index}>
                                    <BankCard
                                       bankName={banks.bankName}
                                       bankLogo={banks.bankLogo}
                                       height={banks.height}
                                       width={banks.width}
                                       handleWithdrawalOptionSelection={() => handleWithdrawalOptionSelection(banks.bankName)}
                                    />
                                 </React.Fragment>
                              );
                           })}
                     </div>
                  </div>
               )}

               <div
                  className="select-none cursor-pointer  rounded-lg border-solid border-[#d9d9d9] border-[3px] pt-[7px] pr-6 pb-[7px] pl-6 flex flex-col gap-2.5 items-start justify-start shrink-0 w-[446px] relative overflow-hidden"
                  onClick={handleVWalletDropdownClick}
               >
                  <div className="flex flex-row gap-[239px] items-center justify-start self-stretch shrink-0 relative">
                     <div className="flex flex-col gap-[11px] items-start justify-center flex-1 relative">
                        <svg
                           className="shrink-0 relative overflow-visible"
                           width="84"
                           height="75"
                           viewBox="0 0 84 75"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M77 18.75V56.25C77 57.9688 76.314 59.4406 74.942 60.6656C73.57 61.8906 71.9227 62.5021 70 62.5H14C12.075 62.5 10.4265 61.8875 9.05451 60.6625C7.68251 59.4375 6.99767 57.9667 7.00001 56.25V18.75C7.00001 17.0313 7.68601 15.5594 9.05801 14.3344C10.43 13.1094 12.0773 12.4979 14 12.5H70C71.925 12.5 73.5735 13.1125 74.9455 14.3375C76.3175 15.5625 77.0023 17.0333 77 18.75ZM14 25H70V18.75H14V25ZM14 37.5V56.25H70V37.5H14Z"
                              fill="black"
                              fillOpacity="0.72"
                           />
                        </svg>

                        <div className="font-inter font-medium text-xs/[21px] text-[rgba(0,0,0,0.47)] text-left relative w-[107px]">
                           Virtual Wallet
                        </div>
                     </div>

                     <svg
                        className={`shrink-0 relative overflow-visible ${
                           isVWalletOpen ? "rotate-180" : ""
                        }`}
                        width="52"
                        height="53"
                        viewBox="0 0 52 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <mask
                           id="mask0_1_160"
                           style={{ maskType: "alpha" }}
                           maskUnits="userSpaceOnUse"
                           x="0"
                           y="0"
                           width="52"
                           height="53"
                        >
                           <rect
                              y="0.5"
                              width="52"
                              height="52"
                              fill="#D9D9D9"
                           />
                        </mask>
                        <g mask="url(#mask0_1_160)">
                           <path
                              d="M26 33.8125L13 20.8125L16.0333 17.7792L26 27.7458L35.9667 17.7792L39 20.8125L26 33.8125Z"
                              fill="#1C1B1F"
                           />
                        </g>
                     </svg>
                  </div>
               </div>
               {/* Virtual Wallet Dropdown Contents */}
               {isVWalletOpen && (
                  <div className="relative top-full left-0 bg-white w-full rounded-b-lg pb-[18px] z-10">
                     <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                     {VWalletLists &&
                           VWalletLists.map((vWallet, index) => {
                              return (
                                 <React.Fragment key={index}>
                                    <VWalletCard
                                       bankName={vWallet.bankName}
                                       bankLogo={vWallet.bankLogo}
                                       height={vWallet.height}
                                       width={vWallet.width}
                                       handleWithdrawalOptionSelection={() => handleWithdrawalOptionSelection(vWallet.bankName)}
                                    />
                                 </React.Fragment>
                              );
                           })}
                     </div>
                  </div>
               )}
               <button
                  className={`disabled:cursor-not-allowed font-poppins font-medium text-lg text-neutral-0 text-left bg-web-green-300 rounded-xl pt-4 pr-3 pb-4 pl-3 flex gap-2.5 items-center justify-center w-[168px] h-[75px] relative`}
                  onClick={handleWithdrawalSteps}
                  disabled={!WithdrawOption}
               >
                  Lanjutkan
               </button>
            </div>
         </div>
      </>
   );
}
