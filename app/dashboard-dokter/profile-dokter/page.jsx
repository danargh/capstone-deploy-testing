"use client";

import { useEffect, useState } from "react";
import NavbarDokter from "@/components/ui/NavbarDokter";
import Input from "@/components/forms/Input";
import Dokter from "@/public/assets/images/Dokter.png";
import Image from "next/image";
import Textarea from "@/components/forms/Textarea";
import Dropdown from "@/components/forms/Dropdown";
import { SimpanProfileButton } from "@/components/ui/Button";
import Swal from "sweetalert2";
import { dataDoctorAtom, getUserDoctor } from "@/components/atoms/useUserDoctor";
import { useAtom } from "jotai";

export default function Profile() {
   // const { data, error, isLoading, revalidate } = getUserDoctor();
   // const [dataDoctorLogged, setDataDoctorLogged] = useAtom(dataDoctorAtom);

   let dokter = {};
   if (typeof window !== "undefined") {
      dokter = JSON.parse(localStorage.getItem("doctorData"));
   }

   const handleFormSubmit = (e) => {
      e.preventDefault();

      Swal.fire("Profil Baru disimpan", "Ketuk oke untuk menutup halaman ini", "success");
   };
   return (
      <>
         <section className="w-[1440px] mx-auto">
            <div className="flex flex-col justify-center items-center mt-[18px]">
               <div className="flex text-center items-center w-11/12 justify-between">
                  <div className="float-left flex items-center">
                     <div className="bg-[#1BE38F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white">1</div>
                     <p className="text-[#1BE28E] ml-[13px]">Informasi Pribadi</p>
                  </div>
                  <div className="float-right">
                     <p className="font-inter font-normal text-[#747474] text-[16px]">Tingkat Penyelesaian: 70%</p>
                     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-[#1BE38F] h-2.5 rounded-full w-3/4"></div>
                     </div>
                  </div>
               </div>
               <div className="border-b-4 border-solid border-gray-400 w-11/12 h-1 mt-6"></div>
            </div>
            <p className="font-inter font-semibold text-[40px] mx-14 text-[#515151] mt-[42px]">Informasi Pribadi</p>
            <p className="font-inter font-normal text-lg text-[#4A4A4A] mx-14 max-w-3xl mt-7">Beritahu kami sedikit tentang dirimu, Informasi ini akan muncul di profil publik anda, sehingga calon pembeli dapat lebih mengenal Anda.</p>
            <div className="border-b-4 border-solid border-gray-400 w-11/12 h-1 mt-6 mx-14" />
            <form onSubmit={handleFormSubmit}>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-8">
                  <div className="flex">
                     <p className="font-inter font-semibold text-lg my-2 flex">Nama Lengkap</p>
                     <p className="text-red-700 my-2 text-lg">*</p>
                  </div>
                  <div className="col-span-2">
                     {/* <Input value={dataDoctorLogged.full_name} type="text" className="w-11/12 mx-16 border-gray-400 rounded-sm" /> */}
                     <p className="font-inter font-semibold text-lg my-2 flex">: {dokter?.full_name}</p>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <p className="font-inter font-semibold text-lg my-2">Nama Tampilan</p>
                  </div>
                  <div className="col-span-2">
                     {/* <Input type="text" className="w-11/12 mx-16 border-gray-400 rounded-sm" /> */}
                     <p className="font-inter font-semibold text-lg my-2 flex">: {dokter?.display_name}</p>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <p className="font-inter font-semibold text-lg my-14">Gambar Profil</p>
                  <div className="col-span-2">
                     <div style={{ position: "relative", display: "inline-block" }}>
                        <label htmlFor="upload-input" className="cursor-pointer">
                           <Image className="rounded-full shadow-md lg:shadow-lg xl:shadow-xl z-10 mx-14" width={200} height={200} src={dokter?.propic} alt="Dokter" />
                           <svg style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1" }} className="my-8 mx-14" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="44" height="44" rx="22" fill="#87AF5B" />
                              <path
                                 d="M22 27.5C23.25 27.5 24.3127 27.0623 25.188 26.187C26.0633 25.3117 26.5007 24.2493 26.5 23C26.5 21.75 26.0623 20.6873 25.187 19.812C24.3117 18.9367 23.2493 18.4993 22 18.5C20.75 18.5 19.6873 18.9377 18.812 19.813C17.9367 20.6883 17.4993 21.7507 17.5 23C17.5 24.25 17.9377 25.3127 18.813 26.188C19.6883 27.0633 20.7507 27.5007 22 27.5ZM22 26.5L20.9 24.1L18.5 23L20.9 21.9L22 19.5L23.1 21.9L25.5 23L23.1 24.1L22 26.5ZM14 31C13.45 31 12.979 30.804 12.587 30.412C12.195 30.02 11.9993 29.5493 12 29V17C12 16.45 12.196 15.979 12.588 15.587C12.98 15.195 13.4507 14.9993 14 15H17.15L19 13H25L26.85 15H30C30.55 15 31.021 15.196 31.413 15.588C31.805 15.98 32.0007 16.4507 32 17V29C32 29.55 31.804 30.021 31.412 30.413C31.02 30.805 30.5493 31.0007 30 31H14Z"
                                 fill="white"
                              />
                           </svg>
                        </label>
                        <input id="upload-input" type="file" className="hidden" />
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <p className="font-inter font-semibold text-lg">Alumnus</p>
                  </div>
                  <div className="col-span-2">
                     {/* <Textarea className="w-11/12 mx-16 border-gray-400 rounded-sm h-48" /> */}
                     <p className="font-inter font-semibold text-lg my-2 flex">: {dokter?.alumnus}</p>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <p className="font-inter font-semibold text-lg">Praktik di</p>
                  </div>
                  <div className="col-span-2">
                     {/* <Textarea className="w-11/12 mx-16 border-gray-400 rounded-sm h-48" /> */}
                     <p className="font-inter font-semibold text-lg my-2 flex">: {dokter?.practice_address}</p>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <p className="font-inter font-semibold text-lg my-2">Pekerjaan Anda</p>
                  </div>
                  <div className="col-span-2">
                     <div className="flex items-center mx-14 gap-4">
                        <Input type="text" className="w-80 border-gray-400 rounded-lg" />
                        <p className="font-inter font-bold text-sm">From</p>
                        <Dropdown />
                        <p className="font-inter font-bold text-sm">To</p>
                        <Dropdown />
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <p className="font-inter font-semibold text-lg my-2">Dokter Khusus</p>
                  </div>
                  <div className="col-span-2">
                     <Input type="text" className="w-72 mx-16 border-gray-400 rounded-sm" />
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <p className="font-inter font-semibold text-lg">Deskripsi Dokter</p>
                  </div>
                  <div className="col-span-2">
                     <Textarea className="w-11/12 mx-16 border-gray-400 rounded-sm h-48" />
                  </div>
               </div>
               <div className="float-right mx-16 mt-16 mb-14">
                  <SimpanProfileButton>Simpan</SimpanProfileButton>
               </div>
            </form>
         </section>
      </>
   );
}
