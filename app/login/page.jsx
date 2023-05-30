"use client";

import React from "react";
import Input from "@/components/forms/Input";
import { input_variants } from "@/components/custom/custom";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { LoginDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";

export default function Login() {
   return (
      <>
         <section className="flex bg-gray-500 min-screen-2xl h-screen">
            <HeroLogin />
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
               <a href="#" className="absolute top-20 ml-5">
                  <ArrowBackIcon2 width="60" height="60" />
               </a>

               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12">Dokter Area</p>
                  <form onSubmit={{}} className="flex flex-col gap-8">
                     <Input type="text" placeholder="email" className={input_variants({ variant: "default" })} />
                     <Input type="password" placeholder="password" className={input_variants({ variant: "default" })} />
                     <a href="#" className=" text-right font-poppins font-[700] text-[12px] text-web-green-500">
                        Lupa kata sandi?
                     </a>
                     <LoginDokterButton>Log In</LoginDokterButton>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
