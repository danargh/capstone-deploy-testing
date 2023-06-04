"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// @param {children} is a component that will be rendered inside this component

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
   {
      name: "Keluar",
      icon: "/assets/icons/logout-icon.svg",
      href: "/logout",
      width: 48,
      height: 48,
   },
];

export default function SidebarAdmin({ children }) {
   const pathname = usePathname();

   return (
      <>
         <section className="relative">
            <div className="font-inter font-[500] text-[16px] leading-[20px] text-[#D1E5BB] bg-[#63863E] w-[313px] h-screen fixed z-50 top-0 left-0">
               <Image className="mt-[48px] mb-[82px] mx-auto" src="/assets/logo/logo-APP-solo-white.png" width={126} height={21} />
               {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                     <Link key={link.name} className={`${isActive ? "bg-[#FFFFFF33]" : ""} flex items-center justify-start hover:bg-[#FFFFFF33] py-3 my-3`} href={link.href}>
                        <Image className="mx-[20px]" src={link.icon} width={link.width} height={link.height} />
                        <p>{link.name}</p>
                     </Link>
                  );
               })}
            </div>
            <div>{children}</div>
         </section>
      </>
   );
}
