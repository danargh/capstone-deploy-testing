"use client";

import React from "react";
import Logo from "../../public/assets/logo/logo-admin-login.png";
import Image from "next/image";
import InputNew from "@/components/forms/InputNew";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginAdmin } from "@/lib/auth";
import Cookies from "js-cookie";
import ErrorMessage from "@/components/error/ErrorMessage";
export default function page() {
   const router = useRouter();

   const { data, error, isLoginLoading, triggerLogin } = loginAdmin();

   React.useEffect(() => {
      const token = Cookies.get("adminToken");
      if (token) {
         router.push("/dashboard-admin");
      }
   }, []);

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      onSubmit: async (values) => {
         const { email, password } = values;
         console.log({ email, password });
         try {
            const result = await triggerLogin({
               email: email,
               password: password,
            });
            console.log(result);
            if (result.message === "success login") {
               Cookies.set("adminToken", result.token, { expires: 7 });
               router.push("/dashboard-admin");
            }
         } catch (error) {
            console.log(error.message);
         }
      },
   });

   return (
      <>
         <div className="bg-[#F8FFF1] h-screen">
            <div className="pt-[210px] max-w-[1440px] mx-auto">
               <Image src={Logo} alt="logo" className="w-[540px] h-[102px] mx-auto rounded-xl" />
               <div className="bg-white w-[550px] h-auto mx-auto mt-[79px]">
                  <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8 py-[50px] border px-[35px] border-[#B0B0B0] rounded-xl ">
                     <InputNew type="email" label="Email" name="email" onHandleChange={formik.handleChange} value={formik.values.email} />
                     <InputNew type="password" label="Password" name="password" onHandleChange={formik.handleChange} value={formik.values.password} />
                     {data?.message === "failed to login" ? <ErrorMessage errorMessage="Email atau kata sandi salah. Silahkan coba lagi atau klik lupa kata sandi!" /> : null}
                     <button className="w-full bg-[#577536] h-[56px] text-white rounded-xl mt-[10px]">{isLoginLoading ? "Loading..." : ""}Masuk</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}
