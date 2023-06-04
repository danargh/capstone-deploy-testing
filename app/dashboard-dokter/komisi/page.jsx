"use client";

import { FilterButton } from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import NavbarDokter from "@/components/ui/NavbarDokter";
import { TabelHistory, TableOrder } from "@/components/ui/Table";
import React from "react";

function page() {
   const dataOrders = [
      {
         date: "12/05/2023",
         order: "6",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
      {
         date: "12/05/2023",
         order: "5",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
      {
         date: "12/05/2023",
         order: "2",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
      {
         date: "12/05/2023",
         order: "6",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
      {
         date: "12/05/2023",
         order: "1",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
      {
         date: "12/05/2023",
         order: "3",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
      {
         date: "12/05/2023",
         order: "15",
         komisi: "Rp. 400.000",
         tax: "-Rp. 12.500",
      },
   ];
   return (
      <>
         <div className=" max-w-[1440px] mx-auto px-[32px] bg-neutral-10 pt-[50px]">
            <h1 className="text-inter text-xl text-white font-bold  mb-[20px] bg-web-green-300 py-4 px-5 rounded-lg">Riwayat Komisi</h1>
            <FilterButton>Filter Data</FilterButton>

            <TabelHistory orders={dataOrders} />
         </div>
      </>
   );
}

export default page;
