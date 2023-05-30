import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { DownloadIcon } from "@/public/assets/icons/icons";

export default function ContactUs() {
   return (
      <>
         <Navbar />
         <section className="font-inter text-[20px] font-[500] leading-6 text-[#40522B] my-[118px] max-w-[1248px] mx-auto">
            <div className="flex items-center justify-center gap-[70px]">
               <header className="flex flex-col gap-[30px]">
                  <h1 className="font-[700] text-[48px] leading-[58px]">Tentang Kami</h1>
                  <h2 className="text-[30px] leading-9">Berinovasi Untuk Mengatasi Orang Stress</h2>
                  <p>
                     Kami percaya bahwa dokter klinis di prevent bisa mengatasi orang orang yang mengalami penyakit mental, dan kami akan memberikan yang terbaik kepada pasien hingga masalah dari pasien tersebut terselesaikan. Kami akan melayani pasien 24 jam dengan respon yang sangat cepat serta
                     prosedur penggunaan pada aplikasi prevent.
                  </p>
               </header>
               <Image src="/assets/images/about-us-1.png" alt="about" width={558} height={425} />
            </div>

            <div className="flex flex-col items-center justify-center gap-[60px] mt-[135px]">
               <header className="flex flex-col gap-[16px] text-center">
                  <h2 className="font-[700] text-[32px] leading-[40px]">Kenali PREVENT! lebih dekat!</h2>
                  <p>Perjalanan kami dimulai dari pasien untuk pasien</p>
               </header>
               <Image src="/assets/images/about-us-2-video.png" alt="about" width={964} height={434} />
            </div>

            <div className="flex items-center justify-center gap-[75px] mt-[198px]">
               <header className="flex flex-col gap-[30px]">
                  <h2 className="font-[700] text-[32px] leading-[40px]">PREVENT! UNTUK INDONESIA</h2>
                  <p>
                     naiknya jumlah kasus gangguan jiwa baik pada laki-laki maupun perempuan, temuan lainnya adalah gangguan kesehatan jiwa pada perempuan lebih tinggi dibanding pada laki-laki. Apa penyebabnya? Menurut Ilham Akhsanu Ridho, dosen dan peneliti Fakultas Kesehatan Masyarakat Universitas
                     Airlangga, perempuan di Indonesia rentan mengalami gangguan kesehatan mental karena mengalami beban ganda dalam keluarga dan tempat kerja. Hadirnya prevent akan mengatasi setiap orang yang mengalami gangguan jiwa.
                  </p>
               </header>
               <Image src="/assets/images/about-us-3.png" alt="about" width={517} height={345} />
            </div>

            <div className="flex items-end justify-center gap-[75px] mt-[198px]">
               <div className="text-center">
                  <Image src="/assets/images/about-us-4.png" alt="about" width={571} height={338} />
                  <h2 className="font-[700] text-[32px] leading-[40px] mt-[25px]">Segala Solusi Dalam Satu Aplikasi</h2>
                  <p className="mt-[45px]">Berkonsultasi dengan mudah dengan aplikasi prevent</p>
               </div>
               <div className="text-center">
                  <Image src="/assets/images/about-us-5.png" alt="about" width={571} height={338} />
                  <h2 className="font-[700] text-[32px] leading-[40px] mt-[25px]">Layanan Responsif 24 Jam</h2>
                  <p className="mt-[45px]">Prevent akan siap siaga melayani anda 24 jam</p>
               </div>
            </div>

            <div className="flex flex-col items-center gap-[42px] mt-[100px]">
               <header>
                  <h2 className="font-inter font-[600] text-[48px] leading-[92px]">Unduh Aplikasi Prevent! </h2>
                  <p className="font-inter font-[500] text-center">Unduh Aplikasi Prevent! untuk keperluan publikasi</p>
               </header>
               <div className="flex gap-[85px]">
                  <div className="bg-[#D0E6C6] rounded-[20px] flex flex-col gap-[68px] p-[42px]">
                     <Image src="/assets/icons/window-icon.svg" alt="about" width={271} height={49} />
                     <div className="flex gap-3 items-center justify-center font-inter font-[600] text-[24px]">
                        <DownloadIcon fill="#366A11" />
                        <p>Brosur (Desktop)</p>
                     </div>
                  </div>
                  <div className="bg-[#D0E6C6] rounded-[20px] flex flex-col gap-4 justify-center py-[16px] px-[36px]">
                     <div className="flex items-center justify-center">
                        <Image src="/assets/icons/android-icon.svg" alt="about" width={150} height={150} />
                        <div>
                           <Image className="mb-1" src="/assets/images/app-store.png" alt="about" width={121} height={49} />
                           <Image src="/assets/images/google-play.png" alt="about" width={121} height={49} />
                        </div>
                     </div>
                     <p className="flex gap-3 items-center justify-center font-inter font-[600] text-[24px]">
                        <DownloadIcon fill="#366A11" />
                        Aplikasi Android
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
}
