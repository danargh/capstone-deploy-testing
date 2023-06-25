"use client";
import SidebarAdmin from "@/components/ui/SidebarAdmin";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Swal from "sweetalert2";
import PaginationDok from "@/components/PaginationDok";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

export default function DaftarDokter({ params }) {
   const [searchKeyword, setSearchKeyword] = useState("");
   const id = params.id;
   const [selectedId, setSelectedId] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);

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

   const { data: pengguna, mutate } = useSWR("https://capstone-project.duckdns.org:8080/admin/doctor/order", fetcher);

   useEffect(() => {
      mutate();
   }, []);

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
   };

   const handleSearch = () => {
      fetch(`https://647a44b3a455e257fa648a39.mockapi.io/penggunas/dokter?search=${searchKeyword}`)
         .then((response) => response.json())
         .then((data) => {
            mutate(data, false);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handlePrint = (id) => {
      const data = pengguna.find((item) => item.id === id);
      if (data) {
         const printContent = `
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Dokter</th>
                <th>Email Dokter</th>
                <th>Komisi</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${data.id}</td>
                <td>${data.namaDokter}</td>
                <td>${data.emailDokter}</td>
                <td>${data.komisi}</td>
                <td>${data.tanggal}</td>
              </tr>
            </tbody>
          </table>
        `;

         const printWindow = window.open("", "_blank");
         printWindow.document.write(`
          <html>
            <head>
              <title>Data Dokter</title>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);

         printWindow.document.close();
         printWindow.print();
      }
   };
   const PaginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Check if pengguna is an array before trying to slice it
      if (!Array.isArray(pengguna)) {
         console.error("pengguna is not an array:", pengguna);
         return [];
      }

      return pengguna.slice(startIndex, endIndex);
   };

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   };
   return (
      <>
         <motion.div whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="bg-[#F8FFF1] w-screen h-screen p-4 sm:ml-72">
            <p className="text-[32px] font-bold text-web-green-500 mx-16 ">Daftar Dokter</p>
            <div class="flex items-center h-24 mx-16 mt-9">
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
            <table className="border-collapse border w-5/6 border-web-green-300 mx-16">
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
                  {PaginatedData().map((penggunas, i) => (
                     <tr scope="col" key={penggunas.id} className={selectedId === penggunas.id ? "bg-gray-200" : "bg-white"}>
                        <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.id}</td>
                        <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.doctor_name}</td>
                        <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.doctor_email}</td>
                        <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.komisi}</td>
                        <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{penggunas.tanggal}</td>
                        <td className="bg-[#F8FFF1] flex gap-3 py-2 justify-center border">
                           <button className="w-[68px] h-[35px] rounded-md  bg-web-green-300 text-white">
                              {penggunas.cv && penggunas.ijazah && penggunas.str ? (
                                 <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(`${penggunas.cv}\n${penggunas.ijazah}\n${penggunas.str}\n${penggunas.sip}`)}`} download="dokumen.txt" className="text-white">
                                    Lihat
                                 </a>
                              ) : (
                                 "Tidak ada dokumen"
                              )}
                           </button>
                           <button onClick={() => handleDelete(penggunas.id)} className="w-[68px] h-[35px] rounded-md bg-red-800 text-white">
                              Hapus
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className="float-left ml-16 mt-11">{pengguna && pengguna.length > 0 ? <PaginationDok currentPage={currentPage} totalItems={pengguna.length} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} /> : null}</div>
         </motion.div>
      </>
   );
}
