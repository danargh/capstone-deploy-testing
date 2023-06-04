"use client";

import { FilterButton } from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import NavbarDokter from "@/components/ui/NavbarDokter";
import { TableOrder } from "@/components/ui/Table";
import React from "react";

function page() {
   const dataDokter = [
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: true,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: true,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Online",
         chat: false,
      },
   ];
   return (
      <>
         <div className=" max-w-[1440px] mx-auto px-[32px]">
            <h1 className="text-inter text-xl font-bold mt-[50px] mb-[20px]">Pesanan</h1>
            <FilterButton>Filter Data</FilterButton>

            <TableOrder order={dataDokter} />
         </div>
      </>
   );
}

export default page;
