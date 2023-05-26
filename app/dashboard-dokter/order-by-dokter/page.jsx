"use client";
import Select from "@/components/forms/Select";
import { FilterButton } from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import NavbarDokter from "@/components/ui/NavbarDokter";
import { TableOrder } from "@/components/ui/Table";
import { FilterIcon } from "@/public/assets/icons/icons";
import React from "react";

function page() {
   const dropOptions = [
      { value: 10, label: 10 },
      { value: 15, label: 15 },
      { value: 20, label: 20 },
      { value: 25, label: 25 },
   ];

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
   ];
   return (
      <>
         <NavbarDokter />
         <div className="px-16">
            <h1>Pesanan</h1>
            <FilterButton>
               <FilterIcon fill="white" />

               <span>Filter Data </span>
            </FilterButton>

            <TableOrder order={dataDokter} />
         </div>

         <Footer />
      </>
   );
}

export default page;
