import {
   DetailDokter,
   DaftarEmail,
   DaftarWhatsApp,
   KirimKomentar,
   LoginDokter,
   TransferSaldo,
   Filter,
   KirimPesan,
   AddObat,
   SendObat,
   KirimArtikel,
   SimpanArtikel,
   BatalHapusArtikel,
   HapusArtikel,
   LanjutkanProfile,
   SimpanProfile,
   ContinueWithdraw,
   LanjutkanWithdraw,
   TutupWithdraw,
   Register,
   SignIn,
} from '@/components/ui/Button';
import React from 'react';

export default function page() {
   return (
      <>
         <div className="flex flex-col items-center pb-5">
            <div className="my-5">
               <DetailDokter />
            </div>
            <div className="my-5">
               <DaftarWhatsApp />
            </div>
            <div className="my-5">
               <DaftarEmail />
            </div>
            <div className="my-5">
               <KirimKomentar />
            </div>
            <div className="my-5 w-1/4">
               <LoginDokter />
            </div>
            <div className="my-5 ">
               <TransferSaldo />
            </div>
            <div className="my-5 ">
               <Filter />
            </div>
            <div className="my-5 ">
               <KirimPesan />
            </div>
            <div className="my-5 ">
               <AddObat />
            </div>
            <div className="my-5 ">
               <SendObat />
            </div>
            <div className="my-5 ">
               <LanjutkanProfile />
            </div>
            <div className="my-5 ">
               <SimpanProfile />
            </div>
            <div className="my-5 ">
               <KirimArtikel />
            </div>
            <div className="my-5 ">
               <SimpanArtikel />
            </div>
            <div className="my-5 ">
               <BatalHapusArtikel />
            </div>
            <div className="my-5 ">
               <HapusArtikel />
            </div>
            <div className="my-5 ">
               <ContinueWithdraw />
            </div>
            <div className="my-5 w-1/4">
               <LanjutkanWithdraw />
            </div>
            <div className="my-5 ">
               <TutupWithdraw />
            </div>
            <div className="my-5 ">
               <Register />
            </div>
            <div className="my-5 ">
               <SignIn />
            </div>
         </div>
      </>
   );
}
