import React from "react";
import SidebarDokter from "./SidebarDokter";

export default function DoctorNavbarLayout({children}) {
   return (
      <div className="h-full flex flex-row">
            <SidebarDokter />
            <main className="lg:pl-20 h-full">{children}</main>
      </div>
   );
}
