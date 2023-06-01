import React from "react";
import NavbarDokter from "@/components/ui/NavbarDokter";
import Footer from "@/components/ui/Footer";

export default function NotifikasiDokter() {
   return (
      <>
         <NavbarDokter />
         <section className="font-inter font-[700] max-w-[1320px] mx-auto h-[80vh]">
            <header className="flex justify-between items-center mt-[100px] bg-[#8EBF59] px-[24px] py-[16px] rounded-xl">
               <h1 className="text-[32px] leading-[38px] text-white">Notifikasi</h1>
               <p className="text-[22px] leading-[26px] text-white">Sudah Dibaca</p>
            </header>
            <ul className="mt-[68px] bg-[#E7E6E6]">
               {Array(5)
                  .fill()
                  .map((_, i) => (
                     <li className="flex flex-col gap-[10px] text-[22px] leading-[26px] px-[16px] py-[20px]">
                        <p className="font-[600]">
                           Anda mendapatkan chat dari pasien bernama <b>Ananda Putri</b>
                        </p>
                        <p className="font-[600]">30 Apr, 10.30</p>
                     </li>
                  ))}
            </ul>
         </section>
         <Footer />
      </>
   );
}
