"use client";
import React, { useRef } from "react";

import logoHelp from "../../public/assets/logo/logo-p-help.png";
import navbarHelp from "../../public/assets/images/navbar-help.png";
import { button_variants, input_variants } from "@/components/custom/custom";
import {
   ArrowBackHelpIcon,
   MailIcon,
   QuestionHelp,
} from "@/public/assets/icons/icons";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
function layout({ children }) {
   const pathname = usePathname();
   const inputRef = useRef(null);
   const router = useRouter();
   const handleSearch = () => {
      const value = inputRef.current.value;
      inputRef.current.value = null;
      router.push(`/help/search?q=${value}`);
   };

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         handleSearch();
      }
   };
   return (
      <>
         <div className="bg-web-green-300 ">
            <div className="max-w-[1440px] mx-auto flex flex-col justify-between items-center py-3 sm:flex-row">
               <div className="flex items-center gap-3">
                  <Image
                     src={logoHelp}
                     alt=""
                     style={{ objectFit: "contain" }}
                  />
                  <p className="text-poppins text-[64px] text-neutral-0">
                     Bantuan
                  </p>
               </div>
               <div className="flex flex-col text-neutral-0 gap-2">
                  <p className="font-bold text-[20px]">
                     Apa yang bisa kami bantu?
                  </p>
                  <div className="relative w-full">
                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-3">
                        <svg
                           width="30"
                           height="30"
                           viewBox="0 0 43 43"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M33.3979 30.4521L42.3208 39.3729L39.3729 42.3208L30.4521 33.3979C27.1328 36.0588 23.0042 37.5061 18.75 37.5C8.4 37.5 0 29.1 0 18.75C0 8.4 8.4 0 18.75 0C29.1 0 37.5 8.4 37.5 18.75C37.5061 23.0042 36.0588 27.1328 33.3979 30.4521ZM29.2187 28.9062C31.8627 26.1873 33.3393 22.5426 33.3333 18.75C33.3333 10.6937 26.8062 4.16667 18.75 4.16667C10.6937 4.16667 4.16667 10.6937 4.16667 18.75C4.16667 26.8062 10.6937 33.3333 18.75 33.3333C22.5426 33.3393 26.1873 31.8627 28.9062 29.2187L29.2187 28.9062Z"
                              fill="#ffffff"
                           />
                        </svg>
                     </div>
                     <input
                        type="text"
                        id="simple-search"
                        className={`${input_variants()} bg-web-green-300 border-white ps-14`}
                        placeholder="Search"
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                        required=""
                     />
                  </div>
                  <small>
                     Pencarian teratas:{" "}
                     <span className="hover:font-medium">
                        <Link href={"/help/akses-prevent"}>Masalah log in</Link>
                     </span>{" "}
                     |{" "}
                     <span className="hover:font-medium">
                        <Link href={"/help/harga-pembayaran"}>
                           {" "}
                           Masalah pembayaran
                        </Link>
                     </span>
                  </small>
               </div>
               <div>
                  <Image src={navbarHelp} alt="" className="hidden sm:block" />
               </div>
            </div>
         </div>

         <div className=" max-w-[1440px] mx-auto flex justify-start mb-28 mt-3">
            <Link href={pathname === "/help" ? "/" : "/help"}>
               <ArrowBackHelpIcon />
            </Link>
         </div>
         <div>{children}</div>
         <div className="flex flex-col items-center mb-[121px] mt-28 px-5">
            <p className=" font-semibold text-lg">
               Apakah Anda membutuhkan bantuan lebih lanjut?
            </p>
            <div className="flex gap-5 mt-5">
               <Link href="https://wa.me/081775262221" target="_blank">
                  <button
                     className={button_variants({
                        variant: "outline_primary",
                     })}
                     style={{
                        color: "black",
                        fontWeight: "600",
                        alignItems: "center",
                     }}
                  >
                     <QuestionHelp fill="black" /> Hubungi Kami
                  </button>
               </Link>

               <Link href="mailto:melkijonathan2@gmail.com">
                  <button
                     className={button_variants({
                        variant: "outline_primary",
                     })}
                     style={{
                        color: "black",
                        fontWeight: "600",
                        alignItems: "center",
                     }}
                  >
                     <MailIcon fill="black" /> Email kami
                  </button>
               </Link>
            </div>
         </div>
      </>
   );
}

export default layout;
