"use client";

import React from "react";
import Image from "next/image";
import Input from "@/components/forms/Input";
import Button, { Filter, LoginDokter } from "@/components/ui/Button";
import { input_variants, button_variants } from "@/components/custom/custom";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";

export default function Login() {
   return (
      <>
         <section className="flex bg-gray-500 min-screen-2xl h-screen">
            <div className="w-1/2 bg-[#7CA153] font-poppins text-[16px] font-[700] flex flex-col justify-between">
               <div className="mt-4">
                  <Image
                     className="mx-auto"
                     src="/assets/logo/logo-APP-solo-white.png"
                     alt="login"
                     width={278}
                     height={46}
                  />
                  <p className=" text-neutral-0 mt-[20px] text-center">
                     Kesehatan Mental Prioritas Global
                  </p>
               </div>
               <div>
                  <Image
                     className="mx-auto"
                     src="/assets/images/login-atribut.png"
                     alt="login"
                     width={525}
                     height={153}
                  />
                  <Image
                     className="mx-auto"
                     src="/assets/images/login-dokter.png"
                     alt="login"
                     width={578}
                     height={482}
                  />
               </div>
            </div>
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
               <i className="relative top-[-180px] left-10">
                  <ArrowBackIcon2 width="60" height="60" />
               </i>
               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12">
                     Dokter Area
                  </p>
                  <form onSubmit={{}} className="flex flex-col gap-8">
                     <Input
                        type="text"
                        placeholder="email"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                     <Input
                        type="password"
                        placeholder="password"
                        className={input_variants({ variant: "dokter_login" })}
                     />
                  </form>
                  <a
                     href="#"
                     className=" text-right font-poppins font-[700] text-[12px] text-web-green-500"
                  >
                     Lupa kata sandi?
                  </a>

                  <Button className={button_variants({ variant: "default", size: "full" })}>
                     <p className="font-poppins font-[700]">Log In</p>
                  </Button>
               </div>
            </div>
         </section>
      </>
   );
}
