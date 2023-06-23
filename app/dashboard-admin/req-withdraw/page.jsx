"use client";

import { useState, useEffect } from "react";
import PaginationAlt from "@/components/ui/PaginationAlt";
import Swal from "sweetalert2";
import useSWR from "swr";

export default function ReqWithdraw() {
   // const [dokter, setDokter] = useState(dataDokter);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(3);

   const fetcher = async (url) => {
      const token = Cookies.get("adminToken");
      return fetch(url, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      }).then((res) => res.json());
   };
   const { data: dataWithdraw, error, mutate: mutateDataWithdraw } = useSWR("https://capstone-project.duckdns.org:8080/withdraw", fetcher, {});

   const totalpages = dataWithdraw?.length / itemsPerPage;

   const PaginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return dataWithdraw?.slice(startIndex, endIndex);
   };

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   };

   const handleApproved = async (id) => {
      try {
         const newDataWithdraw = dataWithdraw.map((data) => {
            if (data.id === id) {
               data.status = "accepted";
            }
            return data;
         });
         const index = newDataWithdraw.findIndex((data) => data.id === id);

         const response = await fetch(`https://capstone-project.duckdns.org:8080/admin/withdraw/${id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newDataWithdraw[index]),
         });

         if (response.ok) {
            mutateDataWithdraw(newDataWithdraw, true);
            // Swal.fire("Diterima!", "Penarikan telah diterima.", "success");
         } else {
            throw new Error("Gagal menghapus data");
         }
      } catch (error) {
         Swal.fire("Terjadi kesalahan", error.message, "error");
      }
   };

   const handleDenied = (id) => {
      Swal.fire({
         title: "Apakah kamu yakin ingin menolak pencairan dana ini?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#8E1E18",
         cancelButtonColor: "grey",
         confirmButtonText: "Ya",
         cancelButtonText: "Tidak",
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const response = await fetch(`https://642f8c91b289b1dec4b50531.mockapi.io/withdraw/${id}`, {
                  method: "DELETE",
               });

               if (response.ok) {
                  const updatedData = dataWithdraw.filter((data) => data.id !== id);
                  mutateDataWithdraw(updatedData, false);
                  // Swal.fire("Terhapus!", "Data telah dihapus.", "success");
               } else {
                  throw new Error("Gagal menghapus data");
               }
            } catch (error) {
               Swal.fire("Terjadi kesalahan", error.message, "error");
            }
         } else {
            return;
         }
      });
   };

   return (
      <>
         <section className="pl-[378px] pt-[40px] bg-[#F8FFF1] h-screen w-screen">
            <header>
               <h1 className="font-poppins mb-[40px] font-[700] text-[#577536] text-[32px] leading-[48px]">Daftar Permintaan Pencairan Dana</h1>
               <div className="flex mb-[30px]">
                  <input className="bg-[#F8FFF1] border-[#8EBF59] w-[559px] h-[50px]" type="text" placeholder="Cari Dokter" />
                  <button className="hover:bg-[#9acf60] flex justify-center items-center font-poppins font-[600] text-[16px] leading-[18px] text-white bg-[#8EBF59] w-[81px] h-[50px]">Cari</button>
               </div>
            </header>

            <table className="table-auto w-[80%] border-[#8EBF59]">
               <thead className="bg-[#7CA153] text-center font-inter font-[600] text-[16px] leading-[48px] text-white">
                  <tr>
                     <th>No</th>
                     <th>Nama Dokter</th>
                     <th>Email Dokter</th>
                     <th>Penarikan</th>
                     <th>Tanggal</th>
                     <th>Aksi</th>
                  </tr>
               </thead>
               <tbody>
                  {PaginatedData()?.map((data, index) => (
                     <tr key={index} className="bg-white border-[#A9BFB4] border-2 text-center font-poppins font-[400] text-[14px] leading-[48px]">
                        <td className="border-2 border-[#A9BFB4]">{index + 1}</td>
                        <td className="border-2 border-[#A9BFB4]">{data.fullName}</td>
                        <td className="border-2 border-[#A9BFB4]">{data.email}</td>
                        <td className="border-2 border-[#A9BFB4]">{data.withdraw}</td>
                        <td className="border-2 border-[#A9BFB4]">{data.date}</td>
                        <td className="py-[6px] flex gap-[28px] justify-center border-[#A9BFB4]">
                           {data.status === "waiting" ? (
                              <>
                                 <button
                                    onClick={() => {
                                       handleApproved(data.id);
                                    }}
                                    className="text-white px-6 bg-[#8EBF59] rounded-[5px]"
                                 >
                                    Terima
                                 </button>
                                 <button
                                    onClick={() => {
                                       handleDenied(data.id);
                                    }}
                                    className="text-white px-6 bg-[#A12D28] rounded-[5px]"
                                 >
                                    Tolak
                                 </button>
                              </>
                           ) : (
                              <div
                                 onClick={() => {
                                    handleApproved(data.id);
                                 }}
                                 className="text-white px-6 bg-[#8EBF59] rounded-[5px]"
                              >
                                 Diterima
                              </div>
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className="flex justify-start mt-8">
               <PaginationAlt currentPage={currentPage} totalPages={totalpages} onPageChange={handlePageChange} />
            </div>
         </section>
      </>
   );
}
