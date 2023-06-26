"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// @param {children} is a component that will be rendered inside this component
import { SidebarDarkLogOutIcon, SidebarLogOutIcon } from "@/public/assets/icons/icons";
import { motion } from "framer-motion";

const navLinks = [
   {
      name: "Dasbor",
      icon: "/assets/icons/dashboard-icon.svg",
      href: "/dashboard-admin",
      width: 48,
      height: 48,
   },
   {
      name: "Edit Pengguna",
      icon: "/assets/icons/edit-user-dokter-icon.svg",
      href: "/dashboard-admin/edit-pengguna",
      width: 48,
      height: 48,
   },
   {
      name: "Edit Artikel",
      icon: "/assets/icons/edit-artikel-icon.svg",
      href: "/dashboard-admin/admin-article-tables",
      width: 45,
      height: 45,
   },
   {
      name: "Verifikasi Pencairan Dana",
      icon: "/assets/icons/req-withdraw-icon.svg",
      href: "/dashboard-admin/req-withdraw",
      width: 48,
      height: 48,
   },
];

export default function SidebarAdmin({ children }) {
   const pathname = usePathname();
   const path = usePathname();
   const router = useRouter();

   // Split and filter the path
   const pathSegments = path.split("/");
   const filteredPath =
      pathSegments.length >= 3 // the first segment is the domain the second is dashboard-dokter and the third is the one used.
         ? `/dashboard-admin/${pathSegments[2]}`
         : "/dashboard-admin";

   const logoutHandler = () => {
      Cookies.remove("adminToken");
      router.push("/login-admin");
   };

   return (
      <>
         <section className="relative">
            <div className="font-inter font-[500] text-[16px] leading-[20px] text-[#D1E5BB] bg-[#63863E] w-[313px] h-screen fixed z-50 top-0 left-0">
               <Image alt="images" className="mt-[48px] mb-[82px] mx-auto" src="/assets/logo/logo-APP-solo-white.png" width={126} height={21} />
               {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                     <Link key={link.name} className={`${isActive ? "bg-[#FFFFFF33]" : ""} flex items-center justify-start hover:bg-[#FFFFFF33] py-3 my-3`} href={link.href}>
                        <Image alt="images" className="mx-[20px]" src={link.icon} width={link.width} height={link.height} />
                        <p>{link.name}</p>
                     </Link>
                  );
               })}
               <button onClick={logoutHandler} className={`${path === "/logout" ? "bg-web-green-400 border-solid border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3" : " "} flex justify-start w-full hover:bg-[#FFFFFF33] my-3 py-3`}>
                  <Image alt="images" className="mx-[20px]" src="/assets/icons/logout-icon.svg" width="48" height="48" />
                  <div className={`font-inter ${path === "/" ? "font-bold" : "font-[500]"} text-[16px] text-[#D1E5BB] text-left relative mx-[8px] py-3`}>Keluar</div>
               </button>
            </div>
            <div>{children}</div>
         </section>
      </>
   );
}
