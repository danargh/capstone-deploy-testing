"use client";
import SidebarAdmin from "@/components/ui/SidebarAdmin";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import useSWR, { mutate } from 'swr'
import PaginationDok from "@/components/PaginationDok";

export default function DokterMasuk({ params }) {
   const [alasanPenolakan, setAlasanPenolakan] = useState("");
   const [searchKeyword, setSearchKeyword] = useState("");
   const id = params.id;
   // const [dokterMasuk, setDokterMasuk] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);
   const fetcher = (url) => fetch(url).then((res) => res.json());

   const { data: dokterMasuk, mutate } = useSWR('https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk', fetcher);

   useEffect(() => {
      mutate();
   }, []);

   const handleSearchKeywordChange = (event) => {
      setSearchKeyword(event.target.value);
   };

   const handleSearch = () => {
      fetch(`https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk?search=${searchKeyword}`)
      .then((response) => response.json())
      .then((data) => {
         mutate(data, false);
      })
      .catch((error) => {
         console.log(error);
      });
   };

   const handleTolak = (id) => {
   Swal.fire({
      title: 'Alasan Penolakan',
      icon: 'warning',
      input: 'text',
      inputLabel: 'Masukkan alasan penolakan',
      showCancelButton: true,
      confirmButtonColor: '#8E1E18',
      confirmButtonText: 'Tolak',
      cancelButtonText: 'Batal',
      inputValidator: (value) => {
         if (!value) {
            return 'Mohon masukkan alasan penolakan';
         }
      },
   }).then((result) => {
      if (result.isConfirmed) {
         const alasan = result.value;
         fetch(`https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ alasanPenolakan: alasan, status: 'Ditolak' }),
         })
            .then((response) => response.json())
            .then((data) => {
               Swal.fire('Berhasil!', 'Dokter ditolak.', 'success');
               fetch('https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk', fetcher)
                  .then((response) => response.json())
                  .then((data) => {
                     setDokterMasuk(data);
                  })
                  .catch((error) => {
                     console.log(error);
                  });
            })
            .catch((error) => {
               console.log(error);
               Swal.fire('Oops!', 'Terjadi kesalahan. Mohon coba lagi.', 'error');
            });
      }
      });
   };

   const handleVerifikasi = (id) => {
   fetch(`https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk/${id}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Terverifikasi' }),
   })
      .then((response) => response.json())
      .then((data) => {
         Swal.fire('Berhasil!', 'Dokter terverifikasi.', 'success');
         fetch('https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk', fetcher)
            .then((response) => response.json())
            .then((data) => {
               setDokterMasuk(data);
            })
            .catch((error) => {
               console.log(error);
            });
      })
      .catch((error) => {
         console.log(error);
         Swal.fire('Oops!', 'Terjadi kesalahan. Mohon coba lagi.', 'error');
      });
   };

   const PaginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
      // Check if dokterMasuk is empty or null
      if (!dokterMasuk || dokterMasuk.length === 0) {
         return [];
      }

      return dokterMasuk.slice(startIndex, endIndex);
   };

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   };
   return (
      <>
         {/* <div className='flex'> */}

         <div className="p-4 sm:ml-72 w-full">
            <p className="text-[32px] font-bold text-web-green-500 mx-16 ">Pendaftaran Dokter</p>
            <div class="flex items-center h-24 mx-16 mt-9">
               <div class="mb-4 flex w-full gap-16">
                  <div className="flex">
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
                        className="relative z-[2] flex items-center rounded-r bg-web-green-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        onClick={handleSearch}
                     >
                        Cari
                     </button>
                  </div>
                  <Link href="/dashboard-admin/edit-pengguna/daftar-dokter">
                     <button className="w-32 h-11 bg-web-green-300 text-white rounded ">
                        Daftar Dokter
                     </button>
                  </Link>
               </div>
            </div>
            <table className="border-collapse border w-full border-web-green-300 mx-16">
               <thead className="">
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
               <tbody className="">
                  {PaginatedData().map((dokter, i) => (
                     <tr scope="col" key={dokter.id} className="bg-white">
                        <td className="border border-web-green-300 text-center">{dokter.id}</td>
                        <td className="border border-web-green-300 text-center">{dokter.namaDokter}</td>
                        <td className="border border-web-green-300 text-center">{dokter.emailDokter}</td>
                        <td className="border border-web-green-300 text-center">{dokter.nik}</td>
                        <td className="border border-web-green-300 text-center">{dokter.jenisKelamin}</td>
                        <td className="border border-web-green-300 text-center">{dokter.tempatLahir}</td>
                        <td className="border border-web-green-300 text-center">{dokter.Agama}</td>
                        <td className="border border-web-green-300 text-center">{dokter.Universitas}</td>
                        <td className="border border-web-green-300 text-center">{dokter.jurusan}</td>
                        <td className="border border-web-green-300 text-center">{dokter.tahunLulus}</td>
                        <td className="border border-web-green-300 text-center">{dokter.tempatPraktik}</td>
                        <td className="border border-web-green-300 text-center">{dokter.noStr}</td>
                        <td className="border border-web-green-300 text-center">{dokter.dokumen}</td>
                        <td className="flex gap-3 py-2 justify-center border">
                           <button onClick={() => handleVerifikasi(dokter.id)} className="w-[83px] h-[35px] rounded-md  bg-web-green-300 text-white">
                              Verifikasi
                           </button>
                           <button onClick={() => handleTolak(dokter.id)} className="w-[83px] h-[35px] rounded-md  bg-red-900 text-white">
                              Tolak
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className="float-right mt-11">
           {dokterMasuk && dokterMasuk.length > 0 ? (
               <PaginationDok
                  currentPage={currentPage}
                  totalItems={dokterMasuk.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
               />
            ) : null}
            </div>
         </div>
      </>
   );
}
