"use client";

import React, { useState } from "react";
import Input from "@/components/forms/Input";
import { input_variants } from "@/components/custom/custom";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { RegisterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputFileDaftarCv from "@/components/forms/InputFileDaftar/input-file-daftarCv";
import Swal from "sweetalert2";
import InputFileDaftarIjasah from "@/components/forms/InputFileDaftar/input-file-daftarIjasah";
import InputFileDaftarStr from "@/components/forms/InputFileDaftar/input-file-daftarstr";
import InputFileDaftarSip from "@/components/forms/InputFileDaftar/input-file-daftarsip";

export default function RegisterDokter() {
   const [index, setIndex] = useState(0);
   const handleFormSubmit = (e) => {
      e.preventDefault();

      Swal.fire("Maaf Pendaftaran Gagal", "Pastikan data pendaftaran sesuai dengan ketentuan.", "error");

      Swal.fire("Pendaftaran Berhasil", "Informasi pendaftaran anda akan kami informasikan melalui email.", "success");
   };
   const handleBack = () => {
      setIndex(index - 1);
   };
   return (
      <>
         <section className="flex bg-gray-500 ">
            <HeroLogin />
            <div className="h-screen w-1/2 bg-neutral-0 flex flex-col justify-center">
               <div className="flex mt-5">
                  {index > 0 && (
                     <a href="#" className="absolute ml-5" onClick={handleBack}>
                        <ArrowBackIcon2 width="60" height="60" />
                     </a>
                  )}
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12 text-center mx-auto">Daftar Sebagai Dokter</p>
               </div>

               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-normal text-xs text-[#7CA153] mb-12">Mari bergabung sebagai mitra dokter di Prevent dan bantu kami untuk memberikan pelayanan kesehatan mental di Indonesia</p>
                  <div className="mb-12">
                     <div className="flex justify-center items-center">
                        <div className="bg-[#BDDA9F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white">1</div>
                        <div className="border border-solid border-3 bg-[#63863E] w-[113px] h-2"></div>
                        <div
                           className="bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]"
                           style={{
                              backgroundColor: index >= 1 ? "#BDDA9F" : "white",
                              color: index >= 1 ? "white" : "#63863E",
                              position: index >= 1 ? "relative" : "static",
                              zIndex: index >= 1 ? 1 : "auto",
                           }}
                        >
                           2
                        </div>
                        <div className="border border-solid border-3 bg-[#63863E] w-[113px] h-2"></div>
                        <div
                           className="bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]"
                           style={{
                              backgroundColor: index >= 2 ? "#BDDA9F" : "white",
                              color: index >= 2 ? "white" : "#63863E",
                           }}
                        >
                           3
                        </div>
                     </div>
                     <div className="flex gap-11 justify-center items-center">
                        <p className="text-[12px]">Informasi Pribadi</p>
                        <p className="text-[12px]">Informasi Akademik</p>
                        <p className="text-[12px]">Informasi Dokumen</p>
                     </div>
                  </div>
                  {index === 0 && (
                     <form onSubmit={() => setIndex(1)} className="flex flex-col gap-8">
                        <Input type="email" placeholder="Alamat Email" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Nama Lengkap" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="number" placeholder="NIK" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Jenis Kelamin" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Tempat Lahir" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="date" placeholder="Tanggal Lahir" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Agama" className={input_variants({ variant: "dokter_login" })} />
                        <RegisterButton>Lanjut</RegisterButton>
                     </form>
                  )}
                  {index === 1 && (
                     <form onSubmit={() => setIndex(2)} className="flex flex-col gap-8">
                        <Input type="text" placeholder="Asal Universitas 1*" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Jurusan*" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="number" placeholder="Tahun Lulus*" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Asal Universitas 2" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Jurusan" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="number" placeholder="Tahun Lulus" className={input_variants({ variant: "dokter_login" })} />
                        <Input type="text" placeholder="Tempat Praktik Sekarang*" className={input_variants({ variant: "dokter_login" })} />
                        <RegisterButton>Lanjut</RegisterButton>
                     </form>
                  )}
                  {index === 2 && (
                     <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Curriculum Vitae (CV)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah CV dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarCv />
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Ijazah</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Jadikan satu file dan unggah ijazah dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarIjasah />
                        </div>
                        <div>
                           <div className="max-w-sm">
                              <p className="text-[18px] font-semibold font-poppins float-left">STR Aktif</p>
                              <p className="text-[12px] font-normal text-gray-500 float-left">Unggah STR dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           </div>
                           <InputFileDaftarStr />
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">SIP (Surat Izin Praktek)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah SIP dalam bentuk pdf dengan ukuranmaksimal 2 MB</p>
                           <InputFileDaftarSip />
                        </div>
                        <div className="mt-4 w-full flex flex-col justify-center">
                           <RegisterButton>Daftar</RegisterButton>
                        </div>
                     </form>
                  )}
               </div>
            </div>
         </section>
      </>
   );
}
