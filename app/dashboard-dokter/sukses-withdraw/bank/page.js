"use client";

import Footer from "@/components/ui/Footer";
import NavbarDokter from "@/components/ui/NavbarDokter";
import React from "react";
import { useState } from "react";
import CheckIcon from "@/public/assets/icons/CheckIcon.png";
import Image from "next/image";
import Dokter from "@/public/assets/images/dokter.png";
import { TutupWithdrawButton } from "@/components/ui/Button";
import { Salinan } from "@/public/assets/icons/icons";

export default function SuksesWithdrawBank() {
   const [isCopied, setIsCopied] = useState(false);
   const WithdrawBank = [
      {
         totTransaksi: "Rp2.007.500",
         dokter: "Fauzan Hakim",
         tanggal: "5 Mei 2023",
         waktu: "12:40",
         noRef: "p02-5521565-nan646..",
         nominalTf: "Rp2.000.000",
         biayaTransaki: "Rp7.500",
         pembayaran: "Bank BCA",
         rek: "**********",
      },
   ];
   const handleCopyClick = (text) => {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
         setIsCopied(false);
      }, 2000);
   };
   return (
      <>
         {WithdrawBank.map((withdraw) => (
            <div className="flex flex-col justify-center items-center">
               <Image className="w-[110px] h-[110px] mt-[100px]" src={CheckIcon} />
               <p className="font-poppins text-xl font-semibold text-[#039900] mt-[47px]">Transaksi Berhasil</p>
               <p className="font-inter text-4xl font-bold">{withdraw.totTransaksi}</p>
               <div className="flex flex-col justify-center items-center mt-7 mb-[89px]">
                  <div className="relative top-16">
                     <Image className="rounded-full shadow-md lg:shadow-lg xl:shadow-xl z-10" src={Dokter} alt="Dokter" />
                     <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full z-20"></div>
                  </div>
                  <div className="w-[1200px] rounded-2xl overflow-hidden border border-gray-400 flex flex-col justify-center items-center">
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 items-center justify-center mt-20 text-center">{withdraw.dokter}</div>
                        <p className="font-inter font-normal text-[32px] text-gray-400 text-center">
                           {withdraw.pembayaran} - {withdraw.rek}
                        </p>
                     </div>
                     <div className="w-3/4 rounded-2xl overflow-hidden border border-gray-400 mb-[78px]">
                        <div className="px-7 py-4">
                           <p className="text-[32px] font-inter font-semibold text-center">Detail Transaksi</p>
                           <div className="flex flex-wrap justify-between mx-auto p-[10px]">
                              <p className="font-inter font-medium text-[32px] text-gray-400">Tanggal</p>
                              <p className="font-inter font-medium text-[32px] text-gray-400">{withdraw.tanggal}</p>
                           </div>
                           <div className="flex flex-wrap items-center justify-between mx-auto p-[10px]">
                              <p className="font-inter font-medium text-[32px] text-gray-400">Waktu</p>
                              <p className="font-inter font-medium text-[32px] text-gray-400">{withdraw.waktu}</p>
                           </div>
                           <div className="flex flex-wrap items-center justify-between mx-auto p-[10px]">
                              <p className="font-inter font-medium text-[32px] text-gray-400">No. Referensi</p>
                              <div className="flex items-center">
                                 <p className="font-inter font-medium text-[32px] text-gray-400">{withdraw.noRef}</p>
                                 <button className="ml-2 focus:outline-none" onClick={() => handleCopyClick(withdraw.noRef)}>
                                    <Salinan />
                                 </button>
                              </div>
                           </div>
                           <div className="border border-solid border-black bg-black w-full h-1"></div>
                           <div className="flex flex-wrap items-center justify-between mx-auto p-[10px] mt-9">
                              <p className="font-inter font-medium text-[32px] text-gray-400">Nominal Transfer</p>
                              <p className="font-inter font-medium text-[32px] text-gray-400">{withdraw.nominalTf}</p>
                           </div>
                           <div className="flex flex-wrap items-center justify-between mx-auto p-[10px]">
                              <p className="font-inter font-medium text-[32px] text-gray-400">Biaya Transaksi</p>
                              <p className="font-inter font-medium text-[32px] text-gray-400">{withdraw.biayaTransaki}</p>
                           </div>
                           <div className="border-b-4 border-dashed border-black w-full h-1"></div>
                           <div className="flex flex-wrap items-center justify-between mx-auto p-[10px] mt-9">
                              <p className="font-inter font-semibold text-[32px]">Total</p>
                              <p className="font-inter font-semibold text-[32px]">Rp2.007.500</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mb-[150px]">
                  <TutupWithdrawButton>Tutup</TutupWithdrawButton>
               </div>
            </div>
         ))}
      </>
   );
}
