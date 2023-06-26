import React from "react";
import NavbarDokter from "./NavbarDokter";

export default function DoctorNavbarLayout({children}) {
   return (
      <div className="h-full w-full">
            <NavbarDokter />
            <main className="h-full">{children}</main>
      </div>
   );
}
