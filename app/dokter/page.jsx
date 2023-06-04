"use client";

import DoctorCard from "@/components/ui/DoctorCard";
import { useState } from "react";
import { SearchIcon } from "@/public/assets/icons/icons";
import Image from "next/image";
import TestIMG from "public/assets/images/dokter.png";
import Doctor1 from "public/assets/images/doctor-1.png";
import Doctor2 from "public/assets/images/doctor-2.png";
import Consultation from "public/assets/images/consultation-1.png";
import Diagnosis from "public/assets/images/diagnosis-1.png";
import Chat from "public/assets/images/chat-1.png";
import AllDoctor from "./alldoctor";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Dokter() {
   const [allDokter, setAllDokter] = useState(false);
   const doctor_list = [
      {
         image: TestIMG,
         name: "Saul Orang Baik",
         title: "Criminal Lawyer",
         work_time: "69",
         href: "/detail-dokter",
      },
   ];

   const handleAllDokter = () => {
      setAllDokter(!allDokter);
   };

   return (
      <>
         <Navbar />
         <div className="mx-auto bg-neutral-0 w-[1440px] h-[1000px] relative overflow-hidden">
            <div className="flex flex-col gap-[31px] items-center justify-start absolute left-14 top-[172px]">
               <div className="flex flex-col gap-[30px] items-end justify-start shrink-0 relative">
                  <div className="flex flex-col gap-3.5 items-center justify-start shrink-0 relative">
                     <div className="font-inter font-semibold text-sm text-neutral-900 text-left relative">Konsultasi Dengan Prevent</div>
                     <div className="font-inter font-normal text-xs text-neutral-900 text-left relative">Layanan Prevent siap siaga untuk membantu hidup anda</div>
                  </div>

                  <div className="shrink-0 w-[354px] h-[172px] static">
                     <Image className="w-[172px] h-[172px] absolute left-[254px] top-[87px]" src={Doctor2} alt="doctorlg" width={172} height={172} />

                     <Image className="w-20 h-20 absolute left-[72px] top-[87px]" src={Doctor1} alt="doctor" width={80} height={80} />

                     <Image className="w-20 h-20 absolute left-[72px] top-[179px]" src={Doctor1} alt="doctor" width={80} height={80} />

                     <Image className="w-20 h-20 absolute left-[163px] top-[179px]" src={Doctor1} alt="doctor" width={80} height={80} />

                     <Image className="w-20 h-20 absolute left-[163px] top-[87px]" src={Doctor1} alt="doctor" width={80} height={80} />
                  </div>
               </div>

               <div className="font-inter font-[500px] text-xs text-neutral-900 text-left relative">Dokter akan segera menerima permintaan pesan kamu</div>
            </div>

            <div className="flex flex-row items-center justify-start absolute left-[541px] top-[150px]">
               <div className="relative w-[835px]">
                  <input type="text" className="font-inter font-normal text-lg text-[rgba(0,0,0,0.55)] text-left bg-neutral-0 rounded-[9px] border-solid border-[#848484] border-2 w-full h-[61px] pl-4 pr-12" placeholder="Cari nama dokter (eq. Fauzan Hakim)" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                     <SearchIcon fill="black" />
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-[45px] items-start justify-start absolute left-[541px] top-[250px]">
               {allDokter ? (
                  <AllDoctor doctor_list={doctor_list} />
               ) : (
                  <>
                     <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-[15px] items-start justify-start shrink-0 relative">
                           <div className="font-inter font-[500px] text-lg text-neutral-900 text-left relative w-[254px]">Rekomendasi Dokter</div>

                           <div className="font-inter font-normal text-xs text-[rgba(0,0,0,0.62)] text-left relative w-[301px]">Konsultasi online dengan dokter kami</div>
                        </div>

                        <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                           {doctor_list.map((doctor_list) => (
                              <>
                                 <DoctorCard image={TestIMG} name={"Otto Apocalypse, Prime Minister of Austria"} title={"Overseer"} work_time={"500"} href={doctor_list.href} />
                                 <DoctorCard image={doctor_list.image} name={doctor_list.name} title={doctor_list.title} work_time={doctor_list.work_time} href={doctor_list.href} />
                              </>
                           ))}
                        </div>
                     </div>

                     <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
                        <div className="font-inter font-[500px] text-lg text-neutral-900 text-left relative w-[254px]">
                           <button onClick={handleAllDokter}>Dokter Lainnya &gt;</button>
                        </div>

                        <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                           {doctor_list.map((doctor_list) => (
                              <>
                                 <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                                    <DoctorCard image={doctor_list.image} name={doctor_list.name} title={doctor_list.title} work_time={doctor_list.work_time} href={doctor_list.href} />
                                    <DoctorCard image={doctor_list.image} name={doctor_list.name} title={doctor_list.title} work_time={doctor_list.work_time} href={doctor_list.href} />
                                 </div>

                                 <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                                    <DoctorCard image={doctor_list.image} name={doctor_list.name} title={doctor_list.title} work_time={doctor_list.work_time} href={doctor_list.href} />
                                    <DoctorCard image={doctor_list.image} name={doctor_list.name} title={doctor_list.title} work_time={doctor_list.work_time} href={doctor_list.href} />
                                 </div>
                              </>
                           ))}
                        </div>
                     </div>
                  </>
               )}
            </div>

            <div className="w-[419px] h-60 absolute left-16 top-[542px]">
               <div className="font-inter font-semibold text-sm text-neutral-900 text-left absolute left-0 top-0">Konsultasi Dengan Prevent</div>

               <div className="flex flex-col gap-[23px] items-start justify-start absolute left-0 top-11">
                  <div className="flex flex-row gap-[18px] items-center justify-start shrink-0 relative">
                     <Image className="shrink-0 w-[50px] h-[50px] relative" src={Consultation} alt="consultation" width={50} height={50} />

                     <div className="font-inter font-normal text-[rgba(0,0,0,0.68)] text-left relative w-[351px]" style={{ font: "16px/157.02%" }}>
                        Dalam satu aplikasi ini akan menghubungkan
                        <br />
                        dengan dokter professional.
                     </div>
                  </div>

                  <div className="flex flex-row gap-[18px] items-center justify-start shrink-0 relative">
                     <Image className="shrink-0 w-[50px] h-[50px] relative" src={Diagnosis} alt="diagnosis" width={50} height={50} />

                     <div className="font-inter font-normal text-[rgba(0,0,0,0.68)] text-left relative w-[351px]" style={{ font: "16px/157.02%" }}>
                        Dapatkan rujukan ke rumah sakit terdekat sesuai anjuran dokter.
                     </div>
                  </div>

                  <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative">
                     <Image className="shrink-0 w-[50px] h-[50px] relative" src={Chat} alt="chat" width={50} height={50} />

                     <div className="font-inter font-normal text-[rgba(0,0,0,0.68)] text-left relative w-[351px]" style={{ font: "16px/157.02%" }}>
                        Dokter akan merespon sangat cepat dan siaga selama 24 jam.
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
