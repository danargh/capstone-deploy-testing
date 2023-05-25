import React from "react";
import Image from "next/image";

export default function HeroLogin() {
   return (
      <>
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
      </>
   );
}
