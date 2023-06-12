import React from 'react';
import ErrorMessage from '@/components/error/ErrorMessage';
import InputNew from '@/components/forms/InputNew';

export default function page() {
   return (
      <>
         <div className="bg-[#F8FFF1] h-[1080px] ">
            <div className="pt-[210px] max-w-[1440px] mx-auto">
               <div className="w-[677px] mx-auto">
                  <div className="item-center justify-center text-left font-poppins text-[20px]">
                     <h4>
                        <b>Lupa Kata Sandi</b>{' '}
                     </h4>
                     <p className="pb-3">Ikuti langkah mudah dibawah ini untuk mengatur ulang akun Anda:</p>
                     <ul>
                        <li>1. Masukkan alamat email Prevent Anda </li>
                        <li>2. Tunggu sampai data pemulihan Anda dikirim</li>
                        <li>3. Ikuti petunjuknya dan aktifkan kembali akun Prevent Anda</li>
                     </ul>
                  </div>
               </div>

               <div className="bg-white w-[784px] h-auto mx-auto mt-[79px]  border px-[35px] border-[#B0B0B0] rounded-xl">
                  <div className="w-[714px] pt-[39px] flex flex-col gap-8 mx-auto text-center ">
                     <form onSubmit={{}} className="flex flex-col gap-8 ">
                        <InputNew type="email" label="Alamat Email" />
                        <ErrorMessage errorMessage="Email anda tidak terdaftar pada sistem. Silahkan coba lagi!" />
                        <button className="w-[734px] h-[56px] bg-[#577536] text-white rounded-xl mb-[39px]">Dapatkan Kata Sandi Baru</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
