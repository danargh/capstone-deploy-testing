"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAtom } from "jotai";
import useSidebar from "@/components/atoms/useSidebar.js";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
   SidebarDarkCartIcon,
} from "@/public/assets/icons/icons";

/*How it works:
1. Take FULL pathname (not params)
2. Filter only the ROOT ('/', '/profile', etc.)
3. Detect which page we're currently in
4. set the button state to ACTIVE (using ${FilteredPath === "/" ? "ACTIVE CLASS" : "INACTIVE CLASS"}   )

This is done in order to make that even in children pages (ex: withdraw/bank/x ), navbar keeps being active.
*/

export default function Sidebar() {
   // First, get the atom (not nuclear bomb, atom as in the smallest particle~)
   const { isSidebarOpen } = useSidebar();
   const router = useRouter();
   // Get curent page's path
   const path = usePathname();

   // Split and filter the path
   const pathSegments = path.split("/");
   const filteredPath =
      pathSegments.length >= 3 // the first segment is the domain the second is dashboard-dokter and the third is the one used.
         ? `/dashboard-dokter/${pathSegments[2]}`
         : "/dashboard-dokter";

   const logoutHandler = () => {
      Cookies.remove("doctorToken");
      localStorage.removeItem("doctorData");
      router.push("/login");
   };

   // Function to unify components
   function SidebarComponent({ navName, navPoint, sidebarDarkIcon, sidebarLightIcon }) {
    const hover = "hover:bg-web-green-400 hover:border-solid hover:border-neutral-0 hover:border-l-[5px] hover:py-[5px] hover:pr-[5px] hover:pl-3"
      return (
         <Link
            href={`/dashboard-dokter${navPoint}`}
            className={`${filteredPath === "/dashboard-dokter" + navPoint ? "bg-web-green-400 border-solid border-neutral-0 border-l-[5px] pt-[5px] pr-[5px] pb-[5px] pl-3" : " "} ${hover} flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}
         >
            {filteredPath === "/dashboard-dokter" + navPoint ? sidebarDarkIcon : sidebarLightIcon}
            <div className={`font-poppins ${filteredPath === "/dashboard-dokter" + navPoint ? "font-bold" : "hover:font-bold font-medium"} text-[35px] text-neutral-0 text-left relative`}>{navName}</div>
         </Link>
      );
   }

   //Navigation Points
   const navigationPoints = [
      {
         navigationName: "Dashboard",
         navigationPoint: "",
         sidebarDarkIcon: <ClarityDashboardIcon width="50" height="50" fill="white" />,
         sidebarLightIcon: <SidebarDashboardIcon />,
      },
      {
         navigationName: "Pesanan",
         navigationPoint: "/order-by-dokter",
         sidebarDarkIcon: <SidebarDarkCartIcon width="50" height="50" fill="white" />,
         sidebarLightIcon: <CartIcon width={42} height={46} fill={"white"} />,
      },
      {
         navigationName: "Artikel",
         navigationPoint: "/data-artikel",
         sidebarDarkIcon: <SidebarDarkArticleIcon />,
         sidebarLightIcon: <SidebarArticleIcon />,
      },
      {
         navigationName: "Pesan",
         navigationPoint: "/chat",
         sidebarDarkIcon: <SidebarDarkMessageIcon />,
         sidebarLightIcon: <SidebarMessageIcon />,
      },
      {
         navigationName: "Notifikasi",
         navigationPoint: "/notifikasi-dokter",
         sidebarDarkIcon: <SidebarDarkNotificationIcon />,
         sidebarLightIcon: <SidebarNotificationIcon />,
      },
      {
         navigationName: "Komisi",
         navigationPoint: "/komisi",
         sidebarDarkIcon: <SidebarDarkDollarIcon />,
         sidebarLightIcon: <SidebarDollarIcon width="22" height="38" fill="white" />,
      },
      {
         navigationName: "Profil",
         navigationPoint: "/profile-dokter",
         sidebarDarkIcon: <SidebarDarkProfileIcon />,
         sidebarLightIcon: <SidebarProfileIcon />,
      },
   ];

   return (
      <>
         {isSidebarOpen && (
            <div className="z-0 flex top-0">
               <div className="bg-web-green-300 min-h-screen min-w-[467px] px-[61px] py-[47px] flex relative overflow-y-auto">
                  <div className="flex flex-col items-center justify-between relative">
                     <div className="flex flex-col gap-[51px] items-start justify-start shrink-0 relative">
                        <div className="font-poppins font-normal text-[40px] text-neutral-0 text-left relative">Dashboard Menu</div>

                        <div className="flex flex-col gap-[31px] items-start justify-start self-stretch shrink-0 relative">
                           {navigationPoints.map((navigation) => {
                              return <SidebarComponent key={navigation.navigationPoint} navName={navigation.navigationName} navPoint={navigation.navigationPoint} sidebarDarkIcon={navigation.sidebarDarkIcon} sidebarLightIcon={navigation.sidebarLightIcon} />;
                           })}
                        </div>
                     </div>

                     {/* Keep this separate!!!! */}
                     <button onClick={logoutHandler} className={`hover:bg-web-green-400 hover:border-solid hover:border-neutral-0 hover:border-l-[5px] hover:py-[5px] hover:pr-[5px] hover:pl-3 flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative`}>
                        {path === "/login" ? <SidebarDarkLogOutIcon /> : <SidebarLogOutIcon />}
                        <div className={`font-poppins ${path === "/" ? "font-bold" : "hover:font-bold font-medium"} text-[35px] text-neutral-0 text-left relative`}>Keluar</div>
                     </button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
