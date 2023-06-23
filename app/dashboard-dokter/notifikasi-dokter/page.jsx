'use client';
import React, { useEffect, useState } from 'react';
import NavbarDokter from '@/components/ui/NavbarDokter';
import Footer from '@/components/ui/Footer';

export default function NotifikasiDokter() {
   const [notifData, setNotifData] = useState([]);

   useEffect(() => {
      fetch('https://648915770e2469c038fe9b25.mockapi.io/komisi/notif')
         .then((response) => response.json())
         .then((data) => setNotifData(data.slice(0, 5))) // ambil hanya 5 item pertama
         .catch((error) => console.error('Error:', error));
   }, []);

   return (
      <>
         <section className="font-inter font-[700] max-w-[1320px] mx-auto h-[80vh]">
            <header className="flex justify-between items-center mt-[100px] bg-[#8EBF59] px-[24px] py-[16px] rounded-xl">
               <h1 className="text-[32px] leading-[38px] text-white">Notifikasi</h1>
               <p className="text-[22px] leading-[26px] text-white">Sudah Dibaca</p>
            </header>
            <ul className="mt-[68px] bg-[#E7E6E6]">
               {notifData.map((notif, i) => (
                  <li key={i} className="flex flex-col gap-[10px] text-[22px] leading-[26px] px-[16px] py-[20px]">
                     <p className="font-[600]">
                        Anda mendapatkan chat dari pasien bernama <b>{notif.name}</b>
                     </p>
                     <p className="font-[600]">{notif.tanggal}</p>
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}
