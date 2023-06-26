"use client";

import { useState } from "react";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { LoginDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputNew from "@/components/forms/InputNew";
import ErrorMessage from "@/components/error/ErrorMessage";
import Link from "next/link";
import { motion } from "framer-motion";
import useSWR from "swr";

export default function LupaPassword({ params }) {
  const [email, setEmail] = useState("");
  const [resetPasswordStatus, setResetPasswordStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResetPasswordStatus("loading");

    const url = "https://capstone-project.duckdns.org:8080/doctor/forgotpassword";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setResetPasswordStatus("success");
      } else {
        setResetPasswordStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setResetPasswordStatus("error");
    }
  };

  return (
    <>
      <section className="flex bg-gray-500 min-screen-2xl h-screen">
        <HeroLogin />
        <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
          <Link href="/login" className="absolute top-20 ml-5 hover:scale-125 transition-transform">
            <ArrowBackIcon2 width="60" height="60" />
          </Link>

          <motion.div
            whileInView={{ x: [64, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="w-[480px] flex flex-col gap-8 mx-auto text-center"
          >
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <InputNew
                type="email"
                label="Email"
                name="email"
                onHandleChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {resetPasswordStatus === "error" && (
                <ErrorMessage errorMessage="Email anda tidak terdaftar pada sistem. Silahkan coba lagi!" />
              )}
              {resetPasswordStatus === "success" && (
                <p className="text-green-500">Email pemulihan telah dikirim. Silahkan cek kotak masuk Anda.</p>
              )}
              <LoginDokterButton disabled={resetPasswordStatus === "loading"}>
                {resetPasswordStatus === "loading" ? "Loading..." : "Dapatkan Kata Sandi Baru"}
              </LoginDokterButton>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}