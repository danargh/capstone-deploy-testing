import React from "react";
import Image from "next/image";
import Doctor1 from "public/assets/images/doctor-1.png";
import Doctor2 from "public/assets/images/doctor-2.png";
import Consultation from "public/assets/images/consultation-1.png";
import Diagnosis from "public/assets/images/diagnosis-1.png";
import Chat from "public/assets/images/chat-1.png";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DoctorContainer from "./doctorcontainer";

export default function Dokter() {
   return (
      <>
         <Navbar />
         <div className="mx-auto bg-neutral-0 w-[1440px] h-[1000px] relative overflow-hidden">
            <div className="flex flex-col gap-[31px] items-center justify-start absolute left-14 top-[172px]">
               <div className="flex flex-col gap-[30px] items-end justify-start shrink-0 relative">
                  <div className="flex flex-col gap-3.5 items-center justify-start shrink-0 relative">
                     <div className="font-inter font-semibold text-sm text-neutral-900 text-left relative">
                        Konsultasi Dengan Prevent
                     </div>
                     <div className="font-inter font-normal text-xs text-neutral-900 text-left relative">
                        Layanan Prevent siap siaga untuk membantu hidup anda
                     </div>
                  </div>

                  <div className="shrink-0 w-[354px] h-[172px] static">
                     <Image
                        className="w-[172px] h-[172px] absolute left-[254px] top-[87px]"
                        src={Doctor2}
                        alt="doctorlg"
                        width={172}
                        height={172}
                     />

                     <Image
                        className="w-20 h-20 absolute left-[72px] top-[87px]"
                        src={Doctor1}
                        alt="doctor"
                        width={80}
                        height={80}
                     />

                     <Image
                        className="w-20 h-20 absolute left-[72px] top-[179px]"
                        src={Doctor1}
                        alt="doctor"
                        width={80}
                        height={80}
                     />

                     <Image
                        className="w-20 h-20 absolute left-[163px] top-[179px]"
                        src={Doctor1}
                        alt="doctor"
                        width={80}
                        height={80}
                     />

                     <Image
                        className="w-20 h-20 absolute left-[163px] top-[87px]"
                        src={Doctor1}
                        alt="doctor"
                        width={80}
                        height={80}
                     />
                  </div>
               </div>

               <div className="font-inter font-[500px] text-xs text-neutral-900 text-left relative">
                  Dokter akan segera menerima permintaan pesan kamu
               </div>
            </div>

            <>
               <DoctorContainer />
            </>
            <div className="w-[419px] h-60 absolute left-16 top-[542px]">
               <div className="font-inter font-semibold text-sm text-neutral-900 text-left absolute left-0 top-0">
                  Konsultasi Dengan Prevent
               </div>

               <div className="flex flex-col gap-[23px] items-start justify-start absolute left-0 top-11">
                  <div className="flex flex-row gap-[18px] items-center justify-start shrink-0 relative">
                     <Image
                        className="shrink-0 w-[50px] h-[50px] relative"
                        src={Consultation}
                        alt="consultation"
                        width={50}
                        height={50}
                     />

                     <div
                        className="font-inter font-normal text-[rgba(0,0,0,0.68)] text-left relative w-[351px]"
                        style={{ font: "16px/157.02%" }}
                     >
                        Dalam satu aplikasi ini akan menghubungkan
                        <br />
                        dengan dokter professional.
                     </div>
                  </div>

                  <div className="flex flex-row gap-[18px] items-center justify-start shrink-0 relative">
                     <Image
                        className="shrink-0 w-[50px] h-[50px] relative"
                        src={Diagnosis}
                        alt="diagnosis"
                        width={50}
                        height={50}
                     />

                     <div
                        className="font-inter font-normal text-[rgba(0,0,0,0.68)] text-left relative w-[351px]"
                        style={{ font: "16px/157.02%" }}
                     >
                        Dapatkan rujukan ke rumah sakit terdekat sesuai anjuran
                        dokter.
                     </div>
                  </div>

                  <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative">
                     <Image
                        className="shrink-0 w-[50px] h-[50px] relative"
                        src={Chat}
                        alt="chat"
                        width={50}
                        height={50}
                     />

                     <div
                        className="font-inter font-normal text-[rgba(0,0,0,0.68)] text-left relative w-[351px]"
                        style={{ font: "16px/157.02%" }}
                     >
                        Dokter akan merespon sangat cepat dan siaga selama 24
                        jam.
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
