'use client';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import useSWR from 'swr';
import PaginationDok from '@/components/PaginationDok';
import Cookies from 'js-cookie';
import PaginationAlt from '@/components/ui/PaginationAlt';

export default function DokterMasuk({ params }) {
   const [token, setToken] = useState('');
   const [alasanPenolakan, setAlasanPenolakan] = useState('');
   const [searchKeyword, setSearchKeyword] = useState('');
   const id = params.id;
   // const [dokterMasuk, setDokterMasuk] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(30);
   // const fetcher = (url) => fetch(url, {headers: {"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MSwiYXV0aG9yaXplZCI6dHJ1ZSwiZXhwIjoxNjg3MTg2MTIxfQ.bm-y7OXsdiVe9lXviUryWAiwiZOB2pJ0kAr7ZJZdXz0`}}).then((res) => {
   //    res.json()
   //    console.log(res)
   // });
   const tokenDoctor = Cookies.get('adminToken');

   const fetcher = async (url) => {
      const response = await fetch(url, { headers: { Authorization: `Bearer ${tokenDoctor}` } });
      const jsonData = await response.json();
      return jsonData;
   };

   const { data: dokterMasuk, mutate } = useSWR('https://capstone-project.duckdns.org:8080/admin/doctors', fetcher);

   const totalpages = Math.ceil(dokterMasuk?.length / itemsPerPage);

   useEffect(() => {
      const tokenCookies = Cookies.get('adminToken');
      if (tokenCookies) {
         setToken(tokenCookies);
         console.log(token);
      }
      mutate(searchKeyword);
   }, []);

   const handleSearchKeywordChange = (event) => {
      const keyword = event.target.value;
      setSearchKeyword(keyword);

      if (keyword.trim() === '') {
         // If search keyword is empty, reset the data
         mutate();
      }
   };

   const handleSearch = () => {
      if (searchKeyword.trim() === '') {
         // If search keyword is empty, reset the data
         setSearchKeyword(''); // Clear the search keyword
         mutate(); // Fetch the original data
      } else {
         // Filter the dokterMasuk data based on the search keyword
         const filteredData = dokterMasuk?.doctors.filter((dokter) => {
            const fullName = dokter.full_name.toLowerCase();
            const email = dokter.email.toLowerCase();
            const keyword = searchKeyword.toLowerCase();
            return fullName.includes(keyword) || email.includes(keyword);
         });
         mutate({ doctors: filteredData }, false);
      }
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
            const token = Cookies.get('adminToken');
            const alasan = result.value;
            fetch(`https://capstone-project.duckdns.org:8080/admin/doctors/${id}/reject `, {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify({
                  alasanPenolakan: alasan,
                  status: 'Ditolak',
               }),
            })
               .then((response) => response.json())
               .then((data) => {
                  Swal.fire('Berhasil!', 'Dokter ditolak.', 'success');
               })
               .catch((error) => {
                  console.log(error);
                  Swal.fire('Oops!', 'Terjadi kesalahan. Mohon coba lagi.', 'error');
               });
         }
      });
   };

   const handleVerifikasi = (id) => {
      const token = Cookies.get('adminToken');
      fetch(`https://capstone-project.duckdns.org:8080/admin/doctors/${id}/approve`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ status: 'Terverifikasi' }),
      })
         .then((response) => response.json())
         .then((data) => {
            Swal.fire('Berhasil!', 'Dokter terverifikasi.', 'success');
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
      if (!dokterMasuk?.doctors || dokterMasuk?.doctors.length === 0) {
         return [];
      }

      return dokterMasuk?.doctors.slice(startIndex, endIndex);
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
                        value={searchKeyword}
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
                  <Link href="/dashboard-admin/edit-pengguna/verifikasi-dokter">
                     <button className="w-32 h-11 bg-web-green-300 text-white rounded ">Data Verifikasi</button>
                  </Link>
                  <Link href="/dashboard-admin/edit-pengguna/daftar-dokter">
                     <button className="w-32 h-11 bg-web-green-300 text-white rounded ">Daftar Dokter</button>
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
                        <td className="border border-web-green-300 text-center">{dokter.ID}</td>
                        <td className="border border-web-green-300 text-center">{dokter.full_name}</td>
                        <td className="border border-web-green-300 text-center">{dokter.email}</td>
                        <td className="border border-web-green-300 text-center">{dokter.nik}</td>
                        <td className="border border-web-green-300 text-center">{dokter.gender}</td>
                        <td className="border border-web-green-300 text-center">{dokter.birth_place}</td>
                        <td className="border border-web-green-300 text-center">{dokter.religion}</td>
                        <td className="border border-web-green-300 text-center">{dokter.alumnus}</td>
                        <td className="border border-web-green-300 text-center">{dokter.jurusan}</td>
                        <td className="border border-web-green-300 text-center">{dokter.grad_year}</td>
                        <td className="border border-web-green-300 text-center">{dokter.practice_address}</td>
                        <td className="border border-web-green-300 text-center">{dokter.str_number}</td>
                        <td className="border border-web-green-300 text-center">
                           {dokter.cv && dokter.ijazah && dokter.str ? (
                              <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(`${dokter.cv}\n${dokter.ijazah}\n${dokter.str}`)}`} download="dokumen.txt" className="text-blue-500 underline">
                                 LinkDokumen
                              </a>
                           ) : (
                              'Tidak ada dokumen'
                           )}
                        </td>
                        <td className="flex gap-3 py-2 justify-center border">
                           <button onClick={() => handleVerifikasi(dokter.ID)} className="w-[83px] h-[35px] rounded-md  bg-web-green-300 text-white">
                              Verifikasi
                           </button>

                           <button onClick={() => handleTolak(dokter.ID)} className="w-[83px] h-[35px] rounded-md  bg-red-900 text-white">
                              Tolak
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className="flex justify-center mt-11">
               <PaginationAlt currentPage={currentPage} totalPages={totalpages} onPageChange={handlePageChange} />
            </div>
         </div>
      </>
   );
}
