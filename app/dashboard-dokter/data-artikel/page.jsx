'use client';
import Swal from 'sweetalert2';
import useSWR, { mutate } from 'swr';

// import { TableArtikel } from '@/components/ui/Table';
import React, { useState } from 'react';
import { AddArtikelButton } from '@/components/ui/Button';
import Link from 'next/link';
import { button_variants } from '@/components/custom/custom';
import PaginationAlt from '@/components/ui/PaginationAlt';

const fetcher = (url) =>
   fetch(url, {
      headers: {
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2ODU5ODUzMTUsImlkIjoyLCJuYW1lIjoiZG9jdG9yIDEifQ._kTRqYbZEZ6MiFfZ5fDHpO8twM5wuLkOxHvadxbHHXw',
      },
   }).then((res) => res.json());
export default function page() {
   const [currentPage, setCurrentPage] = useState(1);
   const [baseIndex, setBaseIndex] = useState(1);
   const [articlesPerPage] = useState(13);
   const {
      data: dataArtikel,
      error,
      mutate: mutateDataArtikel,
   } = useSWR('https://6470c28f3de51400f724e4ab.mockapi.io/artikel/article', fetcher, {
      // Opsi SWR yang dapat Anda sesuaikan
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
   });

   // Calculate the indexes of the articles to be displayed on the current page
   const indexOfLastArticle = currentPage * articlesPerPage;
   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

   // Slice the dataArtikel array to get the articles for the current page
   const currentArticles = dataArtikel ? dataArtikel.slice(indexOfFirstArticle, indexOfLastArticle) : [];

   // Calculate the total number of pages based on the articlesPerPage
   const totalPages = Math.ceil((dataArtikel?.length || 0) / articlesPerPage);

   // Handle the Page changes from Pagination
   const handlePageChange = (page) => {
      setCurrentPage(page);
      setBaseIndex(1 + articlesPerPage * (page - 1));
   };
   const handleDelete = async (id) => {
      Swal.fire({
         title: 'Apakah Anda yakin?',
         text: 'Apakah kamu yakin ingin menghapus artikel ini?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Ya!',
         cancelButtonText: 'Batal',
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const response = await fetch(`https://6470c28f3de51400f724e4ab.mockapi.io/artikel/article/${id}`, {
                  method: 'DELETE',
               });

               if (response.ok) {
                  const updatedData = dataArtikel.filter((artikel) => artikel.id !== id);
                  mutateDataArtikel(updatedData, false);
                  Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');
               } else {
                  console.error('Gagal menghapus data:', response);
                  throw new Error('Gagal menghapus data');
               }
            } catch (error) {
               Swal.fire('Terjadi kesalahan', error.message, 'error');
            }
         }
      });
   };
   return (
      <>
         <div className="mx-auto mb-5 max-w-[1440px]">
            <div style={{ marginTop: 100 }} className="flex mr-[60px] items-end justify-end default">
               <Link href="dashboard-dokter/data-artikel/tambah-artikel">
                  <AddArtikelButton />
               </Link>
            </div>
            <div className="ml-3">
               <input type="text" className="w-[640px] h-[50px] mt-[39px]" placeholder="Pencarian"></input>
               <button className="bg-[#8EBF59] py-[13.5px] px-[23px]">Cari</button>
            </div>

            <div className="relative flex pt-10"></div>
            <table className="border-collapse borde ml-3 border-success-green-100 w-[1370px]">
               <thead className="">
                  <tr className="bg-[#8EBF59] font-semibold h-[43px]">
                     {' '}
                     <th className=" w-[82px] px-4 py-3 text-white">No</th>
                     <th className=" w-[372px] text-white">Artikel</th>
                     <th className="text-white w-[225px]">Gambar</th>
                     <th className="text-white w-[183px] ">Kategori Artikel</th>
                     <th className=" text-white w-[131px]">Status</th>
                     <th className=" text-white w-[317px]">Aksi</th>
                  </tr>
               </thead>
               <tbody className="">
                  {currentArticles && currentArticles.length > 0 ? (
                     currentArticles.map((artikel, index) => (
                        <tr key={index} scope="" className="">
                           <td className="border border-success-green-100 text-center ">{baseIndex + index}</td>
                           <td className="border border-success-green-100 pl-2 ">{artikel.title}</td>
                           <td className="border border-success-green-100 text-center ">gambar</td>
                           <td className="border border-success-green-100 text-center ">{artikel.category}</td>
                           <td className="border border-success-green-100 text-center ">{artikel.status}</td>

                           <td className="border border-success-green-100 text-center flex justify-center px-10 gap-2">
                              <Link href="/data-artikel/edit/[id]" as={`/dashboard-dokter/data-artikel/edit/${artikel.id}`}>
                                 <button className={button_variants({ variant: 'default', size: 'default' })} style={{ marginTop: 18.5, marginBottom: 18.5 }}>
                                    Edit
                                 </button>
                              </Link>

                              <button className={button_variants({ variant: 'danger', size: 'default' })} onClick={() => handleDelete(artikel.id)} style={{ marginTop: 18.5, marginBottom: 18.5 }}>
                                 Hapus
                              </button>
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td colSpan="5" className="text-center w-full">
                           0 artikel
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
            <div className=" flex justify-end pt-[85px] pr-[66px]">
               <PaginationAlt currentPage={currentPage} articlePerPages={articlesPerPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
         </div>
      </>
   );
}
