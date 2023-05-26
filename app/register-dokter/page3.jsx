import React from 'react'
import Input from "@/components/forms/Input";
import { input_variants } from "@/components/custom/custom";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { LoginDokterButton, RegisterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputFileDaftar from '@/components/forms/input-file-daftar';

export default function RegisterDokter3() {
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
                        <div className='bg-[#BDDA9F] rounded-full w-[39px] h-[37px] flex justify-center items-center text-white'>2</div>
                        <div className='border border-solid border-3 bg-[#63863E] w-[113px] h-2'></div>
                        <div className='bg-[#BDDA9F] rounded-full w-[39px] h-[37px] flex justify-center items-center text-white'>3</div>
                    </div>
                    <div className='flex gap-11 justify-center items-center'>
                        <p className='text-[12px]'>Informasi Pribadi</p>
                        <p className='text-[12px]'>Informasi Akademik</p>
                        <p className='text-[12px]'>Informasi Dokumen</p>
                    </div>
                  </div>
                  <form onSubmit={{}} className="flex flex-col gap-4">
                    <div>
                      <p className='text-[18px] font-semibold font-poppins float-left'>Curriculum Vitae (CV)</p>
                      <p className='text-[12px] font-normal text-gray-500 float-left'>Unggah CV dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                      <InputFileDaftar/>
                    </div>
                    <div>
                      <p className='text-[18px] font-semibold font-poppins float-left'>Ijazah</p>
                      <p className='text-[12px] font-normal text-gray-500 float-left'>Jadikan satu file dan unggah ijazah dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                      <InputFileDaftar/>
                    </div>
                    <div>
                      <div className='max-w-sm'>
                        <p className='text-[18px] font-semibold font-poppins float-left'>STR Aktif</p>
                        <p className='text-[12px] font-normal text-gray-500 float-left'>Unggah STR dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                      </div>
                      <InputFileDaftar/>
                    </div>
                    <div>
                      <p className='text-[18px] font-semibold font-poppins float-left'>SIP (Surat Izin Praktek)</p>
                      <p className='text-[12px] font-normal text-gray-500 float-left'>Unggah SIP dalam bentuk pdf dengan ukuranmaksimal 2 MB</p>
                      <InputFileDaftar/>
                    </div>
                    <div className='mt-4 w-full flex flex-col justify-center'>
                      <RegisterButton>Daftar</RegisterButton>
                    </div>
                  </form>
               </div>
            </div>
         </section>
    </>
  )
}
