"use client";

import { useState } from "react";
import PaginationAlt from "@/components/ui/PaginationAlt";
import Swal from "sweetalert2";
import useSWR, { mutate } from "swr";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

export default function ReqWithdraw() {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);
   const [dataWithdraw, setDataWithdraw] = useState([]);

   const fetcher = async (url) => {
      const token = Cookies.get("adminToken");
      return fetch(url, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
         method: "GET",
      }).then((res) => res.json());
   };
   const { data, error } = useSWR("https://capstone-project.duckdns.org:8080/admin/withdraw", fetcher, {
      onSuccess: (data) => {
         setDataWithdraw(data.data);
      },
      onError: (error) => {
         console.log(error);
      },
   });

   const totalpages = Math.ceil(dataWithdraw?.length / itemsPerPage);

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
               data.status = "terima";
            }
            return data;
         });

         const token = Cookies.get("adminToken");
         const response = await fetch(`https://capstone-project.duckdns.org:8080/admin/withdraw/${id}`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
               status: "terima",
            }),
         });

         if (response.ok) {
            // mutateDataWithdraw(newDataWithdraw, true);
            Swal.fire("Diterima!", "Penarikan telah diterima.", "success");
         } else {
            throw new Error("Gagal menerima data penarikan");
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
               const response = await fetch(`https://capstone-project.duckdns.org:8080/admin/withdraw/${id}`, {
                  method: "DELETE",
               });

               if (response.ok) {
                  const updatedData = dataWithdraw.filter((data) => data.id !== id);
                  // mutateDataWithdraw(updatedData, false);
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
         <motion.section whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="pl-[378px] pt-[40px] bg-[#F8FFF1] h-screen w-screen">
            <header>
               <h1 className="font-poppins mb-[40px] font-[700] text-[#577536] text-[32px] leading-[48px]">Daftar Permintaan Pencairan Dana</h1>
               <div className="flex mb-[30px]">
                  <input className="bg-[#F8FFF1] border-[#8EBF59] w-[559px] h-[50px]" type="text" placeholder="Cari Dokter" />
                  <button className="hover:bg-[#9acf60] flex justify-center items-center font-poppins font-[600] text-[16px] leading-[18px] text-white bg-[#8EBF59] w-[81px] h-[50px]">Cari</button>
               </div>
            </header>

            <div className=" overflow-x-auto mr-6">
               <table className="table-auto w-[1600px] border-[#8EBF59]">
                  <thead className="bg-[#7CA153] text-center font-inter font-[600] text-[16px] leading-[48px] text-white">
                     <tr>
                        <th>No</th>
                        <th>No Referensi</th>
                        <th>Nama Dokter</th>
                        <th>Email</th>
                        <th>Metode</th>
                        <th>Tujuan</th>
                        <th>No Rekening</th>
                        <th>Nominal Transfer</th>
                        <th>Tanggal</th>
                        <th>Aksi</th>
                     </tr>
                  </thead>
                  <tbody>
                     {PaginatedData()?.map((data, index) => (
                        <tr key={index} className=" hover:bg-gray-100 bg-white border-[#A9BFB4] border-2 text-center font-poppins font-[400] text-[14px] leading-[48px]">
                           <td className="border-2 border-[#A9BFB4]">{index + 1}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.reference_number}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.doctor_name}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.doctor_email}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.method}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.bank}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.account_number}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.total}</td>
                           <td className="border-2 border-[#A9BFB4]">{data.date}</td>
                           <td className="py-[6px] flex gap-[28px] justify-center border-[#A9BFB4]">
                              {data.status === undefined ? (
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
                              ) : data.status === "terima" ? (
                                 <div className="text-white px-6 bg-[#8EBF59] rounded-[5px]">Diterima</div>
                              ) : (
                                 <div className="text-white px-6 bg-[#8EBF59] rounded-[5px]">Ditolak</div>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="flex justify-start mt-8">
               <PaginationAlt currentPage={currentPage} totalPages={totalpages} onPageChange={handlePageChange} />
            </div>
         </motion.section>
      </>
   );
}
