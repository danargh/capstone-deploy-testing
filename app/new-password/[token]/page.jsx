"use client";

import React from "react";
import { LoginDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputNew from "@/components/forms/InputNew";
import { usePathname, useRouter } from "next/navigation";
import { useFormik } from "formik";
import ErrorMessage from "@/components/error/ErrorMessage";
import { motion } from "framer-motion";
// import { resetPassword } from "@/lib/auth"; // Assuming you have a resetPassword function in your auth library
import Cookies from "js-cookie";

export default function ResetPasswordPage() {
  const router = useRouter();
  const pathname = usePathname();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      repeatPassword: "",
    },
    onSubmit: async (values) => {
      const { password } = values;
      try {
        const result = await resetPassword(token, password);
        console.log(result);
        if (result.message === "success reset password") {
          Cookies.set("doctorToken", result.token, { expires: 7 });
          localStorage.setItem("doctorData", JSON.stringify(result.doctor));
          router.push("/login");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <>
      <section className="flex bg-gray-500 min-screen-2xl h-screen">
        <HeroLogin />
        <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
          <motion.div
            whileInView={{ x: [64, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="w-[480px] flex flex-col gap-8 mx-auto text-center"
          >
            <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12">
              Area Dokter
            </p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
              <InputNew
                type="password"
                label="New Password"
                name="newpassword"
                onHandleChange={formik.handleChange}
                value={formik.values.password}
              /><InputNew
               type="password"
               label="Repeat Password"
               name="repeatpassword"
               onHandleChange={formik.handleChange}
               value={formik.values.password}
               />
              {formik.errors.password ? (
                <ErrorMessage errorMessage={formik.errors.password} />
              ) : null}
              {formik.submitCount > 0 && result?.message === "invalid credentials" ? (
                <ErrorMessage errorMessage="Password berhasil di reset" />
              ) : null}
              <LoginDokterButton type="submit">
                {formik.isSubmitting ? "Loading..." : "Submit Password"}
              </LoginDokterButton>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
