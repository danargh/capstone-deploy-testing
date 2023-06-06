"use client";

import { FilterButton } from "@/components/ui/Button";
import { PaginationOrderDokter } from "@/components/ui/Pagination";
import { TableOrder } from "@/components/ui/Table";
import React, { useState, useEffect } from "react";
function page() {
   const dataDokter = [
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Berlanjut",
         chat: true,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Selesai",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Selesai",
         chat: true,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Berlanjut",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Berlanjut",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Berlanjut",
         chat: false,
      },
      {
         date: "12/05/2023",
         name: "Farhan",
         gender: "L",
         status: "Berlanjut",
         chat: false,
      },
   ];
   const orderLength = dataDokter.length;
   const [orderShow, setOrderShow] = useState("1");
   const [currentPage, setCurentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(orderShow);

   useEffect(() => {
      setPostPerPage(orderShow);
      setCurentPage(1);
   }, [orderShow]);
   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;
   const handleSelectChange = (event) => {
      setOrderShow(event.target.value);
   };
   return (
      <>
         <div className=" max-w-[1440px] mx-auto px-[32px]">
            <h1 className="text-inter text-xl font-bold mt-[50px] mb-[20px]">
               Pesanan
            </h1>
            <FilterButton>Filter Data</FilterButton>
            <div className="relative flex py-10">
               <p className="py-2">Menampilkan</p>
               <select
                  id="data-per-page"
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500 mx-5"
                  value={orderShow}
                  onChange={handleSelectChange}
               >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
               </select>
               <p className="py-2">Data</p>
            </div>
            <TableOrder
               order={dataDokter}
               firstPostIndex={firstPostIndex}
               lastPostIndex={lastPostIndex}
            />
            <div className="flex justify-between items-center mt-10 mb-24">
               <div>
                  Menampilkan {firstPostIndex + 1} ke{" "}
                  {lastPostIndex > orderLength ? orderLength : lastPostIndex}{" "}
                  dari {orderLength} data
               </div>
               <PaginationOrderDokter
                  totalPosts={orderLength}
                  postPerPage={postPerPage}
                  setCurrentPage={setCurentPage}
                  currentPage={currentPage}
                  orderShow={orderShow}
               />
            </div>
         </div>
      </>
   );
}

export default page;
