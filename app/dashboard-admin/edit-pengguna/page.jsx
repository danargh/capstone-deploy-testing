"use client";
import SidebarAdmin from "@/components/ui/SidebarAdmin";
import React, { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import Swal from "sweetalert2";
import Link from "next/link";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import PaginationAlt from "@/components/ui/PaginationAlt";

export default function VerifikasiDokter() {
   const [searchInput, setSearchInput] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const [dataDokterVerif, setDataDokterVerif] = useState([]);
   const [dataDokterFound, setDataDokterFound] = useState([]);
   const itemsPerPage = 8;

   const fetchDokterVerif = async (url) => {
      const token = Cookies.get("adminToken");
      const response = await fetch(url, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      const jsonData = await response.json();
      return jsonData;
   };

   const { data, error } = useSWR("https://capstone-project.duckdns.org:8080/admin/doctors", fetchDokterVerif, {
      onSuccess: (data) => {
         setDataDokterVerif(data.doctors);
         setDataDokterFound(data.doctors);
      },
      onError: (error) => {
         console.log(error);
      },
   });

   const handleSearchInputChange = (e) => {
      setSearchInput(e.target.value);
      handleSearch();
   };

   const handleSearch = () => {
      if (searchInput === "") {
         setDataDokterVerif(data.doctors);
         return setDataDokterFound(data.doctors);
      } else {
         const filteredData = dataDokterVerif.filter((dokter) => {
            return dokter.full_name.toLowerCase().includes(searchInput.toLowerCase());
         });
         setDataDokterFound(filteredData);
      }
   };

   const totalpages = Math.ceil(dataDokterFound?.length / itemsPerPage);

   const PaginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return dataDokterFound?.slice(startIndex, endIndex);
   };

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   };
   const handleTolak = (id) => {
      Swal.fire({
         title: "Alasan Penolakan",
         icon: "warning",
         input: "text",
         inputLabel: "Masukkan alasan penolakan",
         showCancelButton: true,
         confirmButtonColor: "#8E1E18",
         confirmButtonText: "Tolak",
         cancelButtonText: "Batal",
         inputValidator: (value) => {
            if (!value) {
               return "Mohon masukkan alasan penolakan";
            }
         },
      }).then((result) => {
         if (result.isConfirmed) {
            const token = Cookies.get("adminToken");
            const alasan = result.value;
            fetch(`https://capstone-project.duckdns.org:8080/admin/doctors/${id}/reject `, {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify({
                  alasanPenolakan: alasan,
                  status: "Ditolak",
               }),
            })
               .then((response) => response.json())
               .then((data) => {
                  Swal.fire("Berhasil!", "Dokter terverifikasi.", "success");
                  mutate("https://capstone-project.duckdns.org:8080/admin/doctors");
               })

               .catch((error) => {
                  console.log(error);
                  Swal.fire("Oops!", "Terjadi kesalahan. Mohon coba lagi.", "error");
               });
         }
      });
   };

   const handleVerifikasi = (id) => {
      const token = Cookies.get("adminToken");
      fetch(`https://capstone-project.duckdns.org:8080/admin/doctors/${id}/approve`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ status: "Terverifikasi" }),
      })
         .then((response) => response.json())
         .then((data) => {
            Swal.fire("Berhasil!", "Dokter terverifikasi.", "success");
            mutate("https://capstone-project.duckdns.org:8080/admin/doctors");
         })

         .catch((error) => {
            console.log(error);
            Swal.fire("Oops!", "Terjadi kesalahan. Mohon coba lagi.", "error");
         });
   };

   return (
      <>
         <SidebarAdmin />
         <motion.div whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="p-4 pl-[378px] bg-[#F8FFF1] w-screen h-screen">
            <p className="text-[32px] font-bold text-web-green-500 ">Pendaftaran Dokter</p>
            <div className="flex items-center h-24 mt-9">
               <div className="mb-4 flex w-full gap-16">
                  <div className="flex">
                     <input
                        type="search"
                        className=" relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-web-green-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-web-green-300 focus:text-neutral-700 focus:outline-none dark:border-web-green-300 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-web-green-300"
                        placeholder="Cari Dokter"
                        aria-label="Search"
                        aria-describedby="button-addon1"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                     />

                     <button
                        className="relative z-[2] flex items-center rounded-r bg-web-green-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        onClick={handleSearch}
                     >
                        Cari
                     </button>
                  </div>
                  <Link href="/dashboard-admin/edit-pengguna/daftar-dokter">
                     <button className="w-32 h-11 bg-web-green-300 text-white rounded ">Daftar Dokter</button>
                  </Link>
               </div>
            </div>
            <div className="overflow-x-auto mr-6">
               <table className="bg-[#F8FFF1] border-collapse table-auto w-[2500px] border border-web-green-300">
                  <thead>
                     <tr className="bg-[#63863E] font-semibold border-web-green-300 text-white">
                        <th className="border border-web-green-300 py-5">No</th>
                        <th className="border border-web-green-300">Nama Dokter</th>
                        <th className="border border-web-green-300">Email Dokter</th>
                        <th className="border border-web-green-300">NIK</th>
                        <th className="border border-web-green-300">Jenis Kelamin</th>
                        <th className="border border-web-green-300">Tempat Lahir</th>
                        <th className="border border-web-green-300">Agama</th>
                        <th className="border border-web-green-300">Universitas</th>
                        <th className="border border-web-green-300">Jurusan</th>
                        <th className="border border-web-green-300">Tahun Lulus</th>
                        <th className="border border-web-green-300">Tempat Praktik</th>
                        <th className="border border-web-green-300">No STR</th>
                        <th className="border border-web-green-300">Dokumen</th>
                        <th className="border border-web-green-300">Aksi</th>
                     </tr>
                  </thead>
                  <tbody className="bg-[#F8FFF1]">
                     {PaginatedData()?.map((dokter, i) => (
                        <tr scope="col" key={dokter.id} className="bg-white">
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{i + 1}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.full_name}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.email}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.nik}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.gender}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.birth_place}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.religion}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.alumnus}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.jurusan}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.grad_year}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.practice_address}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">{dokter.str_number}</td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">
                              {dokter.cv && dokter.ijazah && dokter.str ? (
                                 <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(`${dokter.cv}\n${dokter.ijazah}\n${dokter.str}`)}`} download="dokumen.txt" className="text-blue-500 underline">
                                    LinkDokumen
                                 </a>
                              ) : (
                                 "Tidak ada dokumen"
                              )}
                           </td>
                           <td className="bg-[#F8FFF1] border border-web-green-300 text-center">
                              {(() => {
                                 switch (dokter.status) {
                                    case "approved":
                                       return (
                                          <div className="flex flex-col justify-center items-center p-3">
                                             <p className="text-white font-semibold bg-[#2D6248] w-28 h-9 text-center rounded py-1 justify-center items-center">Terverifikasi</p>
                                          </div>
                                       );
                                    case "notapproved":
                                       return (
                                          <td className="flex gap-3 py-2 justify-center border">
                                             <button onClick={() => handleVerifikasi(dokter.ID)} className="w-[83px] h-[35px] rounded-md  bg-web-green-300 text-white">
                                                Verifikasi
                                             </button>

                                             <button onClick={() => handleTolak(dokter.ID)} className="w-[83px] h-[35px] rounded-md  bg-red-900 text-white">
                                                Tolak
                                             </button>
                                          </td>
                                       );
                                    case "rejected":
                                       return (
                                          <div className="flex flex-col justify-center items-center p-3">
                                             <p className="text-white font-semibold bg-[#A12D28] w-28 h-9 text-center rounded py-1 justify-center items-center">Ditolak</p>
                                          </div>
                                       );
                                    default:
                                       return null;
                                 }
                              })()}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="mt-11 float-left">
               <PaginationAlt currentPage={currentPage} totalPages={totalpages} onPageChange={handlePageChange} />
            </div>
         </motion.div>
      </>
   );
}
