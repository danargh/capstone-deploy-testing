import React from "react";
import PaymentControl from "./payment-control";
import PaymentForm from "./(bank)/bank-form";
import PaymentFinale from "./(bank)/payment-confirm";

export default function Withdrawal() {
   return (
      <>
         <div className="bg-neutral-0 flex flex-col pt-[100px] pb-[150px] px-[64px] items-center justify-start relative overflow-hidden">
            <div className="flex flex-col gap-[91px] items-start justify-start shrink-0 relative">
               <div className="flex flex-col gap-[91px] items-center justify-start shrink-0 relative">
                  <div className="flex flex-col gap-[30px] items-start justify-start shrink-0 relative">
                     <div className="flex flex-row gap-[480px] items-start justify-start shrink-0 w-[1312px] relative">
                        <div className="bg-neutral-0 border-solid border-[#d9d9d9] border-[3px] pt-3.5 pr-6 pb-3.5 pl-6 flex flex-col gap-[23px] items-start justify-start flex-1 h-[405px] relative overflow-hidden">
                           <svg
                              className="shrink-0 relative overflow-visible"
                              width="200"
                              height="200"
                              viewBox="0 0 200 200"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M168.75 57.8125H43.75C41.678 57.8125 39.6909 56.9894 38.2257 55.5243C36.7606 54.0591 35.9375 52.072 35.9375 50C35.9375 47.928 36.7606 45.9409 38.2257 44.4757C39.6909 43.0106 41.678 42.1875 43.75 42.1875H150C151.243 42.1875 152.435 41.6936 153.315 40.8146C154.194 39.9355 154.688 38.7432 154.688 37.5C154.688 36.2568 154.194 35.0645 153.315 34.1854C152.435 33.3064 151.243 32.8125 150 32.8125H43.75C39.1916 32.8125 34.8199 34.6233 31.5966 37.8466C28.3733 41.0699 26.5625 45.4416 26.5625 50V150C26.5625 154.558 28.3733 158.93 31.5966 162.153C34.8199 165.377 39.1916 167.188 43.75 167.188H168.75C171.651 167.188 174.433 166.035 176.484 163.984C178.535 161.933 179.688 159.151 179.688 156.25V68.75C179.688 65.8492 178.535 63.0672 176.484 61.016C174.433 58.9648 171.651 57.8125 168.75 57.8125ZM170.312 156.25C170.312 156.664 170.148 157.062 169.855 157.355C169.562 157.648 169.164 157.812 168.75 157.812H43.75C41.678 157.813 39.6909 156.989 38.2257 155.524C36.7606 154.059 35.9375 152.072 35.9375 150V65.3047C38.3546 66.5453 41.0331 67.1909 43.75 67.1875H168.75C169.164 67.1875 169.562 67.3521 169.855 67.6451C170.148 67.9382 170.312 68.3356 170.312 68.75V156.25ZM148.438 109.375C148.438 110.92 147.979 112.431 147.121 113.715C146.262 115 145.042 116.002 143.615 116.593C142.187 117.184 140.616 117.339 139.101 117.037C137.585 116.736 136.193 115.992 135.101 114.899C134.008 113.807 133.264 112.415 132.963 110.899C132.661 109.384 132.816 107.813 133.407 106.385C133.998 104.958 135 103.738 136.285 102.879C137.569 102.021 139.08 101.562 140.625 101.562C142.697 101.562 144.684 102.386 146.149 103.851C147.614 105.316 148.438 107.303 148.438 109.375Z"
                                 fill="#8EBF59"
                              />
                           </svg>

                           <div className="flex flex-row gap-[21px] items-center justify-start self-stretch shrink-0 relative">
                              <div className="font-poppins font-bold text-xl text-neutral-900 text-left relative flex-1">
                                 Saldo Anda
                              </div>
                           </div>

                           <div className="font-poppins font-normal text-lg text-neutral-900 text-left relative self-stretch">
                              Rp. 5.000.000
                           </div>
                        </div>

                        <div className="bg-neutral-0 border-solid border-[#d9d9d9] border-[3px] pt-3.5 pr-6 pb-3.5 pl-6 flex flex-col gap-[23px] items-start justify-start shrink-0 w-[416px] h-[405px] relative overflow-hidden">
                           <svg
                              className="shrink-0 relative overflow-visible"
                              width="200"
                              height="200"
                              viewBox="0 0 200 200"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M50 108.333H125V91.6667H50V108.333ZM50 83.3333H125V66.6667H50V83.3333ZM33.3333 166.667C28.75 166.667 24.825 165.033 21.5583 161.767C18.2917 158.5 16.6611 154.578 16.6667 150V50C16.6667 45.4167 18.3 41.4917 21.5667 38.225C24.8333 34.9583 28.7556 33.3278 33.3333 33.3333H166.667C171.25 33.3333 175.175 34.9667 178.442 38.2333C181.708 41.5 183.339 45.4222 183.333 50V150C183.333 154.583 181.7 158.508 178.433 161.775C175.167 165.042 171.244 166.672 166.667 166.667H33.3333ZM33.3333 150H166.667V50H33.3333V150Z"
                                 fill="#6FB54E"
                              />
                           </svg>

                           <div className="flex flex-row gap-[21px] items-center justify-start shrink-0 relative">
                              <div className="font-inter font-bold text-xl text-neutral-900 text-left relative">
                                 Maksimal Dicairkan
                              </div>
                           </div>

                           <div className="font-inter font-normal text-lg text-neutral-900 text-left relative self-stretch">
                              Rp. 10.000.000
                           </div>
                        </div>
                     </div>

                     <div className="rounded-lg border-solid border-[#d9d9d9] border-[3px] pt-[26px] pr-8 pb-[26px] pl-8 flex flex-col gap-2.5 items-start justify-start w-[1312px] h-[831px] relative overflow-hidden">
                        <div className="flex flex-row gap-[33px] items-start justify-start shrink-0 relative">
                           {/* <PaymentControl /> */}
                           {/* <PaymentForm /> */}
                           <PaymentFinale />

                           <div className="bg-neutral-0 rounded-[20px] border-solid border-[rgba(0,0,0,0.50)] border-[3px] shrink-0 w-[767px] h-[375px] relative overflow-hidden">
                              <div className="font-inter font-semibold text-xl/[42px] text-neutral-900 text-left absolute left-[276px] top-11">
                                 Informasi Penarikan
                              </div>

                              <div className="font-inter font-normal text-lg text-neutral-900 text-justified absolute left-[47px] top-[117px] w-[672px]">
                                 1. Biaya penarikan Rp50.000 untuk penarikan di
                                 bawah Rp5.000.000 dan Rp100.000 dikenakan untuk
                                 penarikan di atas Rp5.000.000
                                 <br />
                                 2. Dana akan diterima dalam 1 hari ke akun Anda
                                 <br />
                                 3. Batas penarikan harian adalah Rp10.000.000
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
