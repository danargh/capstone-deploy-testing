import React from "react";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { LoginDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputNew from "@/components/forms/InputNew";
import ErrorMessage from "@/components/error/ErrorMessage";

export default function LupaPassword({ params }) {
   return (
      <>
         <section className="flex bg-gray-500 min-screen-2xl h-screen">
            <HeroLogin />
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
               <a href="#" className="absolute top-20 ml-5">
                  <ArrowBackIcon2 width="60" height="60" />
               </a>

               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <h1 className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12">Lupa Kata Sandi?</h1>
                  <div className="flex flex-col justify-start text-left font-poppins text-[14px]">
                     <h4>
                        <b>Lupa Kata Sandi</b>{" "}
                     </h4>
                     <p>Ikuti langkah mudah dibawah ini untuk mengatur ulang akun Anda:</p>
                     <ul>
                        <li>1. Masukkan alamat email Prevent Anda </li>
                        <li>2. Tunggu sampai data pemulihan Anda dikirim</li>
                        <li>3. Ikuti petunjuknya dan aktifkan kembali akun Prevent Anda</li>
                     </ul>
                  </div>
                  <form onSubmit={{}} className="flex flex-col gap-8">
                     <InputNew type="email" label="Email" />
                     <ErrorMessage errorMessage="Email anda tidak terdaftar pada sistem. Silahkan coba lagi!" />
                     <LoginDokterButton>Log In</LoginDokterButton>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
