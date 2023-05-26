"use client";

import React from 'react'
import Input from "@/components/forms/Input";
import { input_variants } from "@/components/custom/custom";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { LoginDokterButton, RegisterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";

export default function RegisterDokter() {
  return (
    <>
        <section className="flex bg-gray-500 ">
            <HeroLogin />
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
                <div className='flex mt-5'>
                  <a href="#" className="absolute ml-5">
                    <ArrowBackIcon2 width="60" height="60" />
                  </a>
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12 text-center mx-auto">
                    Daftar Sebagai Dokter
                  </p>
                </div>

               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-normal text-xs text-[#7CA153] mb-12">
                     Mari bergabung sebagai mitra dokter di Prevent dan bantu kami untuk memberikan pelayanan kesehatan mental di Indonesia  
                  </p>
                  <div className='mb-12'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#BDDA9F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white'>1</div>
                        <div className='border border-solid border-3 bg-[#63863E] w-[113px] h-2'></div>
                        <div className='bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]'>2</div>
                        <div className='border border-solid border-3 bg-[#63863E] w-[113px] h-2'></div>
                        <div className='bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]'>3</div>
                    </div>
                    <div className='flex gap-11 justify-center items-center'>
                        <p className='text-[12px]'>Informasi Pribadi</p>
                        <p className='text-[12px]'>Informasi Akademik</p>
                        <p className='text-[12px]'>Informasi Dokumen</p>
                    </div>
                  </div>
                  <form onSubmit={{}} className="flex flex-col gap-8">
                     <Input
                        type="email"
                        placeholder="Alamat Email"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="text"
                        placeholder="Nama Lengkap"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="number"
                        placeholder="NIK"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="text"
                        placeholder="Jenis Kelamin"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="text"
                        placeholder="Tempat Lahir"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="date"
                        placeholder="Tanggal Lahir"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="text"
                        placeholder="Agama"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <RegisterButton>Lanjut</RegisterButton>
                  </form>
               </div>
            </div>
         </section>
    </>
  )
}
