"use client";

import React from "react";
import { LoginDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputNew from "@/components/forms/InputNew";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import ErrorMessage from "@/components/error/ErrorMessage";
import { motion } from "framer-motion";
import { login } from "@/lib/auth";
import Cookies from "js-cookie";

export default function Login() {
   const router = useRouter();
   const { data, error, isLoginLoading, triggerLogin } = login();

   // check if user already logged in
   React.useEffect(() => {
      const token = Cookies.get("doctorToken");
      if (token) {
         router.push("/dashboard-dokter");
      }
   }, []);

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      onSubmit: async (values) => {
         const { email, password } = values;
         try {
            const result = await triggerLogin({ email: email, password: password });
            console.log(result);
            if (result.message === "success login") {
               Cookies.set("doctorToken", result.token, { expires: 7 });
               localStorage.setItem("doctorData", JSON.stringify(result.doctor));
               router.push("/dashboard-dokter");
            }
         } catch (error) {
            console.log(error.message);
         }
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
               <motion.div whileInView={{ x: [64, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12">Area Dokter</p>
                  <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
                     <InputNew type="email" label="Email" name="email" onHandleChange={formik.handleChange} value={formik.values.email} />
                     <InputNew type="password" label="Password" name="password" onHandleChange={formik.handleChange} value={formik.values.password} />
                     {data?.message === "invalid credentials" ? <ErrorMessage errorMessage="Email atau kata sandi salah. Silahkan coba lagi atau klik lupa kata sandi!" /> : null}
                     <LoginDokterButton type="submit">{isLoginLoading ? "Loading..." : "Log In"}</LoginDokterButton>
                     <button onClick={handleLupaPassword} className="hover:text-[#7CA153] transition-colors text-left font-poppins font-[700] text-[12px] text-web-green-500">
                        Lupa kata sandi?
                     </button>
                  </form>
               </motion.div>
            </div>
         </section>
      </>
   );
}
