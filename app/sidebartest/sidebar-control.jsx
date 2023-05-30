"use client";

import React, {useState} from "react";
import Sidebar from "@/components/ui/Sidebar";


//Use this as reference when integrating the button to Navbar
export default function SidebarControl() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
      setIsSidebarOpen((prev) => !prev);
    };

   return (
      <>
         <div className="fixed top-0 left-0 h-full w-full overflow-hidden">
            {isSidebarOpen && <Sidebar />}
         </div>

         <button
            className="fixed top-[50%] left-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out bg-blue-600 border-neutral-100 text-2xl px-2 py-1 rounded-r-lg text-white"
            onClick={handleSidebarToggle}
         >
            {isSidebarOpen ? ">" : "<"}
         </button>
      </>
   );
}
