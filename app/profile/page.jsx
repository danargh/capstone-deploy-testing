import React from 'react'
import NavbarDokter from '@/components/ui/NavbarDokter'
import Input from '@/components/forms/Input'
import Dokter from '../../public/assets/images/dokter.png'
import Image from "next/image"
import Textarea from '@/components/forms/Textarea'
import Dropdown from '@/components/forms/Dropdown'
import { SimpanProfileButton } from '@/components/ui/Button'

export default function Profile() {
  return (
    <>
        <NavbarDokter/>
        <div className='flex flex-col justify-center items-center mt-[18px]'>
            <div className='flex text-center items-center w-11/12 justify-between'>
                <div className='float-left flex items-center'>
                    <div className='bg-[#1BE38F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white'>1</div>
                    <p className='text-[#1BE28E] ml-[13px]'>Informasi Pribadi</p>
                </div>
                <div className='float-right'>
                    <p className='font-inter font-normal text-[#747474] text-[16px]'>Tingkat Penyelesaian: 70%</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-[#1BE38F] h-2.5 rounded-full w-3/4"></div>
                    </div>
                </div>
            </div>
            <div className='border-b-4 border-solid border-gray-400 w-11/12 h-1 mt-6'></div>
        </div>
        <p className='font-inter font-semibold text-[40px] mx-14 text-[#515151] mt-[42px]'>Informasi Pribadi</p>
        <p className='font-inter font-normal text-lg text-[#4A4A4A] mx-14 max-w-3xl mt-7'>Beritahu kami sedikit tentang dirimu, Informasi ini akan muncul di profil publik anda, sehingga calon pembeli dapat lebih mengenal Anda.</p>
        <div className='border-b-4 border-solid border-gray-400 w-11/12 h-1 mt-6 mx-14'></div>
        <form onSubmit={{}}>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-8'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg my-2'>Nama Lengkap</p>
                </div>
                <div className='col-span-2'> 
                    <Input type="text" className="w-11/12 mx-16 border-gray-400 rounded-sm"/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg my-2'>Nama Tampilan</p>
                </div>
                <div className='col-span-2'> 
                    <Input type="text" className="w-11/12 mx-16 border-gray-400 rounded-sm"/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg my-14'>Gambar Profil</p>
                </div>
                <div className='col-span-2'> 
                    <Image className="rounded-full shadow-md lg:shadow-lg xl:shadow-xl z-10 mx-14" src={Dokter} alt="Dokter"/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg'>Alumnus</p>
                </div>
                <div className='col-span-2'> 
                    <Textarea className="w-11/12 mx-16 border-gray-400 rounded-sm h-48"/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg'>Praktik di</p>
                </div>
                <div className='col-span-2'> 
                    <Textarea className="w-11/12 mx-16 border-gray-400 rounded-sm h-48"/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg my-2'>Pekerjaan Anda</p>
                </div>
                <div className='col-span-2'>
                    <div className='flex items-center mx-14 gap-4'>
                        <Input type="text" className="w-80 border-gray-400 rounded-lg"/>
                        <p className='font-inter font-bold text-sm'>From</p>
                        <Dropdown/>
                        <p className='font-inter font-bold text-sm'>To</p>
                        <Dropdown/>
                    </div> 
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg my-2'>Dokter Khusus</p>
                </div>
                <div className='col-span-2'> 
                    <Input type="text" className="w-72 mx-16 border-gray-400 rounded-sm"/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14 mt-[105px]'>
                <div className=''>
                    <p className='font-inter font-semibold text-lg'>Deskripsi Dokter</p>
                </div>
                <div className='col-span-2'> 
                    <Textarea className="w-11/12 mx-16 border-gray-400 rounded-sm h-48"/>
                </div>
            </div>
            <div className='float-right mx-16 mt-16 mb-14'>
                <SimpanProfileButton>Simpan</SimpanProfileButton>
            </div>
        </form>
    </>
  )
}
