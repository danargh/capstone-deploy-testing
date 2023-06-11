"use client";

import { useState } from "react";
import SidebarAdmin from "@/components/ui/SidebarAdmin";
import PaginationAlt from "@/components/ui/PaginationAlt";

const dataDokter = [
   {
      id: 1,
      nama: "Dr. Fauzan Hakim, M.Psi,Psi",
      email: "EmailDokter@gmail.com",
      penarikan: "Rp. 1.000.000",
      tanggal: new Date().toLocaleDateString(),
      status: "Diterima",
   },
   {
      id: 2,
      nama: "Dr. Fauzan Hakim, M.Psi,Psi",
      email: "EmailDokter@gmail.com",
      penarikan: "Rp. 1.000.000",
      tanggal: new Date().toLocaleDateString(),
      status: "Menunggu",
   },
   {
      id: 3,
      nama: "Dr. Fauzan Hakim, M.Psi,Psi",
      email: "EmailDokter@gmail.com",
      penarikan: "Rp. 1.000.000",
      tanggal: new Date().toLocaleDateString(),
      status: "Diterima",
   },
   {
      id: 4,
      nama: "Dr. Fauzan Hakim, M.Psi,Psi",
      email: "EmailDokter@gmail.com",
      penarikan: "Rp. 1.000.000",
      tanggal: new Date().toLocaleDateString(),
      status: "Ditolak",
   },
];

export default function ReqWithdraw() {
   const [dokter, setDokter] = useState(dataDokter);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(2);

   const totalpages = dokter.length / itemsPerPage;

   const PaginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return dokter.slice(startIndex, endIndex);
   };

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   };

   const handleApproved = (id) => {
      const newDokter = dokter.map((dokter) => {
         if (dokter.id === id) {
            dokter.status = "Diterima";
         }
         return dokter;
      });
      setDokter(newDokter);
   };

   const handleDenied = (id) => {
      const newDokter = dokter.map((dokter) => {
         if (dokter.id === id) {
            dokter.status = "Ditolak";
         }
         return dokter;
      });
      setDokter(newDokter);
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
                     <th>Nama hokter</th>
                     <th>Email hokter</th>
                     <th>Penarikan</th>
                     <th>Tanggal</th>
                     <th>Aksi</th>
                  </tr>
               </thead>
               <tbody>
                  {PaginatedData().map((dokter, index) => (
                     <tr key={index} className="bg-white border-[#A9BFB4] border-2 text-center font-poppins font-[400] text-[14px] leading-[48px]">
                        <td className="border-2 border-[#A9BFB4]">{dokter.id}</td>
                        <td className="border-2 border-[#A9BFB4]">{dokter.nama}</td>
                        <td className="border-2 border-[#A9BFB4]">{dokter.email}</td>
                        <td className="border-2 border-[#A9BFB4]">{dokter.penarikan}</td>
                        <td className="border-2 border-[#A9BFB4]">{dokter.tanggal}</td>
                        <td className="py-[6px] flex gap-[28px] justify-center border-[#A9BFB4]">
                           {dokter.status === "Menunggu" ? (
                              <>
                                 <button
                                    onClick={() => {
                                       handleApproved(dokter.id);
                                    }}
                                    className="text-white px-6 bg-[#8EBF59] rounded-[5px]"
                                 >
                                    Terima
                                 </button>
                                 <button
                                    onClick={() => {
                                       handleDenied(dokter.id);
                                    }}
                                    className="text-white px-6 bg-[#A12D28] rounded-[5px]"
                                 >
                                    Tolak
                                 </button>
                              </>
                           ) : dokter.status === "Diterima" ? (
                              <div
                                 onClick={() => {
                                    handleApproved(dokter.id);
                                 }}
                                 className="text-white px-6 bg-[#8EBF59] rounded-[5px]"
                              >
                                 Diterima
                              </div>
                           ) : (
                              <div
                                 onClick={() => {
                                    handleDenied(dokter.id);
                                 }}
                                 className="text-white px-6 bg-[#A12D28] rounded-[5px]"
                              >
                                 Ditolak
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
