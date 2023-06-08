"use client";

import React from "react";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { LoginDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputNew from "@/components/forms/InputNew";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import ErrorMessage from "@/components/error/ErrorMessage";

export default function Login() {
   const router = useRouter();
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
   });

   const handleLupaPassword = (e) => {
      e.preventDefault();
      router.push("/login/1");
   };
   return (
      <>
         <section className="flex bg-gray-500 min-screen-2xl h-screen">
            <HeroLogin />
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
               <a href="#" className="absolute top-20 ml-5">
                  <ArrowBackIcon2 width="60" height="60" />
               </a>

               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12">Area Dokter</p>
                  <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
                     <InputNew type="email" label="Email" name="email" onHandleChange={formik.handleChange} value={formik.values.email} />
                     {formik.errors.email ? <ErrorMessage errorMessage={formik.errors.password} /> : null}
                     <InputNew type="password" label="Password" name="password" onHandleChange={formik.handleChange} value={formik.values.password} />
                     {formik.errors.password ? <ErrorMessage errorMessage={formik.errors.password} /> : null}
                     <LoginDokterButton>Log In</LoginDokterButton>
                     <button onClick={handleLupaPassword} className="text-left font-poppins font-[700] text-[12px] text-web-green-500">
                        Lupa kata sandi?
                     </button>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
