"use client";

import React from "react";
import Logo from "../../public/assets/logo/logo-admin-login.png";
import Image from "next/image";
import InputNew from "@/components/forms/InputNew";
import { useRouter } from "next/navigation";

export default function page() {
   const router = useRouter();
   const handleLupaPassword = (e) => {
      e.preventDefault();
      router.push("/login-admin/lupa-password");
   };
   return (
      <>
         <div className="bg-[#F8FFF1] h-screen">
            <div className="pt-[210px] max-w-[1440px] mx-auto">
               <Image src={Logo} className="w-[540px] h-[102px] mx-auto rounded-xl" />
               <div className="bg-white w-[550px] h-auto mx-auto mt-[79px] ">
                  <form onSubmit={{}} className="flex flex-col gap-8 pt-[50px] border px-[35px] border-[#B0B0B0] rounded-xl ">
                     <InputNew type="email" label="Email" />
                     <InputNew type="password" label="Password" />
                     <button className="w-full bg-[#577536] h-[56px] text-white rounded-xl mt-[10px]" onClick={""}>
                        Masuk
                     </button>

                     <button onClick={handleLupaPassword} className="text-left font-poppins font-[400] text-[16px] underline underline-offset-1 mb-[40px]">
                        Lupa kata sandi?
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}
