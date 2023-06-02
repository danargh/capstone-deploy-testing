"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
   CartIcon,
   ClarityDashboardIcon,
   SidebarArticleIcon,
   SidebarDarkArticleIcon,
   SidebarDarkDollarIcon,
   SidebarDarkLogOutIcon,
   SidebarDarkMessageIcon,
   SidebarDarkNotificationIcon,
   SidebarDarkProfileIcon,
   SidebarDashboardIcon,
   SidebarDollarIcon,
   SidebarLogOutIcon,
   SidebarMessageIcon,
   SidebarNotificationIcon,
   SidebarProfileIcon,
} from "@/public/assets/icons/icons";

/*How it works:
1. Take FULL pathname (not params)
2. Filter only the ROOT ('/', '/profile', etc.)
3. Detect which page we're currently in
4. set the button state to ACTIVE (using ${FilteredPath === "/" ? "ACTIVE CLASS" : "INACTIVE CLASS"}   )
*/

//Might wanna install 'tailwind-scrollbar-hide' later
//If you want to integrate this to Navbar, see SidebarControl in Sidebartest for reference!
export default function Sidebar() {
   //get path
   const path = usePathname();

   //split and filter
   const pathSegments = path.split("/");
   const FilteredPath = `/${pathSegments[1]}`;

   return (
      <div className="bg-web-green-300 h-screen max-w-[467px] rounded-xl pt-[47px] pr-[61px] pb-[47px] pl-[61px] flex flex-row gap-2.5 items-start justify-start relative overflow-y-auto">
         <div className="flex flex-col gap-[452px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-[51px] items-start justify-start shrink-0 relative">
               <div className="font-poppins font-normal text-[40px] text-neutral-0 text-left relative">
                  Dashboard Menu
               </div>

               <div className="flex flex-col gap-[31px] items-start justify-start self-stretch shrink-0 relative">
                  <Link
                     href={"/sidebartest"}
                     className={`${
                        FilteredPath === "/sidebartest"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <ClarityDashboardIcon
                           width="50"
                           height="50"
                           fill="white"
                        />
                     ) : (
                        <SidebarDashboardIcon />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Dashboard
                     </div>
                  </Link>

                  <Link
                     href={"/pesanan"}
                     className={`${
                        FilteredPath === "/"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <SidebarDarkCartIcon
                           width="50"
                           height="50"
                           fill="white"
                        />
                     ) : (
                        <CartIcon width={42} height={46} fill={"white"} />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Pesanan
                     </div>
                  </Link>

                  <Link
                     href={"/"}
                     className={`${
                        FilteredPath === "/"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <SidebarDarkArticleIcon />
                     ) : (
                        <SidebarArticleIcon />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Artikel
                     </div>
                  </Link>

                  <Link
                     href={"#"}
                     className={`${
                        FilteredPath === "/"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <SidebarDarkMessageIcon />
                     ) : (
                        <SidebarMessageIcon />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Pesan
                     </div>
                  </Link>

                  <Link
                     href={"#"}
                     className={`${
                        FilteredPath === "/"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <SidebarDarkNotificationIcon />
                     ) : (
                        <SidebarNotificationIcon />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Notifikasi
                     </div>
                  </Link>

                  <Link
                     href={"/komisi"}
                     className={`${
                        FilteredPath === "/komisi"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <SidebarDarkDollarIcon />
                     ) : (
                        <SidebarDollarIcon
                           width="22"
                           height="38"
                           fill="white"
                        />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Komisi
                     </div>
                  </Link>

                  <Link
                     href={"/profile"}
                     className={`${
                        FilteredPath === "/profile"
                           ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                           : " "
                     } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
                     prefetch={false}
                  >
                     {FilteredPath === "/" ? (
                        <SidebarDarkProfileIcon />
                     ) : (
                        <SidebarProfileIcon />
                     )}
                     <div
                        className={`font-poppins ${
                           FilteredPath === "/" ? "font-bold" : "font-medium"
                        } text-[35px] text-neutral-0 text-left relative`}
                     >
                        Profil
                     </div>
                  </Link>
               </div>
            </div>

            <Link
               href={"/logout"}
               className={`${
                  FilteredPath === "/logout"
                     ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3"
                     : " "
               } flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
               prefetch={false}
            >
               {FilteredPath === "/" ? (
                  <SidebarDarkLogOutIcon />
               ) : (
                  <SidebarLogOutIcon />
               )}
               <div
                  className={`font-poppins ${
                     FilteredPath === "/" ? "font-bold" : "font-medium"
                  } text-[35px] text-neutral-0 text-left relative`}
               >
                  Keluar
               </div>
            </Link>
         </div>
      </div>
   );
}
