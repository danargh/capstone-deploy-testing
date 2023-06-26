"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Swal from "sweetalert2";
import PaginationDok from "@/components/PaginationDok";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import PaginationAlt from "@/components/ui/PaginationAlt";
import jsPDF from "jspdf";

export default function DaftarDokter({ params }) {
   const [searchKeyword, setSearchKeyword] = useState("");
   const id = params.id;
   const [selectedId, setSelectedId] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(8);
   const [pengguna, setPengguna] = useState([]);
   const [penggunaFound, setPenggunaFound] = useState([]);

   const fetcher = async (url) => {
      const token = Cookies.get("adminToken");
      return fetch(url, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => data.doctors); // akses properti "doctors" dari data
   };

   const { data, mutate } = useSWR("https://capstone-project.duckdns.org:8080/admin/doctors", fetcher, {
      onSuccess: (data) => {
         setPengguna(data);
         setPenggunaFound(data);
      },
      onError: (error) => {
         console.log(error);
      },
   });

   const handleDelete = (id) => {
      Swal.fire({
         title: "Apakah kamu yakin ingin menghapus akun dokter ini?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#8E1E18",
         cancelButtonColor: "grey",
         confirmButtonText: "Ya",
         cancelButtonText: "Tidak",
      }).then((result) => {
         if (result.isConfirmed) {
            const token = Cookies.get("adminToken");
            fetch(`https://capstone-project.duckdns.org:8080/admin/doctor/${id}`, {
               method: "DELETE",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
               },
            })
               .then(() => {
                  Swal.fire("Data berhasil dihapus", "", "success");
                  // Mengupdate data pengguna setelah penghapusan
                  mutate(
                     pengguna.filter((pengguna) => pengguna.id !== id),
                     true
                  );
               })
               .catch((error) => {
                  Swal.fire("Terjadi kesalahan", error.message, "error");
               });
         }
      });
   };

   const handleSearchKeywordChange = (event) => {
      setSearchKeyword(event.target.value);
      handleSearch();
   };

   const handleSearch = () => {
      if (searchKeyword === "") {
         setPengguna(data);
         return setPenggunaFound(data);
      } else {
         const filteredData = pengguna.filter((dokter) => {
            return dokter.full_name.toLowerCase().includes(searchKeyword.toLowerCase());
         });
         setPenggunaFound(filteredData);
      }
   };

   // const handlePrint = (doctorData) => {
   //    const printContent = `
   //       <p>ID Dokter: <p>
   //       <p>${doctorData.id}</p>
   //       <p>Nama Dokter: </p>
   //       <p>${doctorData.doctor_name}</p>
   //       <p>Email Dokter: </p> 
   //       <p>${doctorData.doctor_email}</p>
   //       <p>Komisi Dokter: </p>
   //       <p>${doctorData.komisi}</p>
   //       <p>Tanggal: </p>
   //       <p>${doctorData.tanggal}</p>
   //    `;
   
   //    const printWindow = window.open("", "_blank");
   //    printWindow.document.write(`
   //       <html>
   //          <head>
   //             <title>Data Dokter</title>
   //          </head>
   //          <body>
   //             ${printContent}
   //          </body>
   //       </html>
   //    `);
   
   //    printWindow.document.close();
   //    printWindow.print();
   // };
   const generatePDF = (id) => {
      const doctor = pengguna.find((item) => item.id === id);
      if (doctor) {
        const doc = new jsPDF();
        
        doc.setFont("helvetica");
        doc.setFontSize(12);
        
        doc.setTextColor(0, 0, 0);
        
        doc.text(`Nama Dokter: ${doctor.doctor_name}`, 10, 10, { align: "left" });
        doc.text(`Email Dokter: ${doctor.doctor_email}`, 10, 20, { align: "left" });
        doc.text(`Komisi: ${doctor.komisi}`, 10, 30, { align: "left" });
        doc.text(`Tanggal: ${doctor.tanggal}`, 10, 40, { align: "left" });
        
        doc.line(10, 50, 200, 50);
        
        doc.save("dokumen.pdf");
      }
    };
    
   const totalpages = Math.ceil(penggunaFound?.length / itemsPerPage);

   const PaginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return penggunaFound?.slice(startIndex, endIndex);
   };

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   };

   const dokterApproved = PaginatedData().filter((dokter) => dokter.status === "approved");

   return (
      <>
         <motion.div whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="bg-[#F8FFF1] pl-[378px] p-4 w-screen h-screen">
            <p className="text-[32px] font-bold text-web-green-500 ">Daftar Dokter</p>
            <div class="flex items-center h-24 mt-9">
               <div class="mb-4 flex w-96">
                  <input
                     type="search"
                     className=" relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-web-green-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-web-green-300 focus:text-neutral-700 focus:outline-none dark:border-web-green-300 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-web-green-300"
                     placeholder="Cari Dokter"
                     aria-label="Search"
                     aria-describedby="button-addon1"
                     vvalue={searchKeyword}
                     onChange={handleSearchKeywordChange}
                  />

                  <button
                     class="relative z-[2] flex items-center rounded-r bg-web-green-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                     type="button"
                     id="button-addon1"
                     onClick={handleSearch}
                  >
                     Cari
                  </button>
               </div>
            </div>
            <div className="overflow-x-auto mr-6">
               <table className="border-collapse border w-[1500px] border-web-green-300">
                  <thead className="">
                     <tr className="bg-[#63863E] font-semibold h-[43px] border-web-green-300 text-white">
                        <th className="border border-web-green-300">No</th>
                        <th className="border border-web-green-300">Nama Dokter</th>
                        <th className="border border-web-green-300">Email Dokter</th>
                        <th className="border border-web-green-300">Komisi</th>
                        <th className="border border-web-green-300">Tanggal</th>
                        <th className="border border-web-green-300">Aksi</th>
                     </tr>
                  </thead>
                  <tbody className="">
                     {dokterApproved?.map((penggunas, i) => (

                        <tr scope="col" key={penggunas.id} className={selectedId === penggunas.id ? "bg-gray-200" : "bg-white"}>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{i + 1}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.full_name}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.email}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.komisi}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.CreatedAt}</td>
                           <td className="bg-[#F8FFF1] flex gap-3 py-2 justify-center border">

                           <button
                              className="w-[68px] h-[35px] rounded-md bg-web-green-300 text-white"
                              onClick={() => generatePDF(penggunas.id)}>
                              Lihat
                           </button>

                              <button onClick={() => handleDelete(penggunas.id)} className="w-[68px] h-[35px] rounded-md bg-red-800 text-white">

                                 Hapus
                              </button>
                           </td>
                        </tr>
                     ))}

                  </tbody>
               </table>
            </div>
            <div className="float-left mt-11">
               <PaginationAlt currentPage={currentPage} totalPages={totalpages} onPageChange={handlePageChange} />
            </div>
         </motion.div>
      </>
   );
}
