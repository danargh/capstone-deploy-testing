'use client';
import Swal from 'sweetalert2';
import useSWR, { mutate } from 'swr';

// import { TableArtikel } from '@/components/ui/Table';
import React, { useState } from 'react';
import Footer from '@/components/ui/Footer';
import NavbarDokter from '@/components/ui/NavbarDokter';
import { AddArtikelIcon, TrashIcon, EditArtikelIcon } from '@/public/assets/icons/icons';
import { AddArtikel, AddArtikelButton } from '@/components/ui/Button';
import Link from 'next/link';
import { button_variants } from '@/components/custom/custom';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function page() {
   const {
      data: dataArtikel,
      error,
      mutate: mutateDataArtikel,
   } = useSWR('https://6470c28f3de51400f724e4ab.mockapi.io/artikel/article', fetcher, {
      // Opsi SWR yang dapat Anda sesuaikan
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
   });

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
         <NavbarDokter />
         <div className="mx-[67px] mb-5">
            <div style={{ marginTop: 100 }} className="flex items-end justify-end ml-auto default">
               <Link href="/data-artikel/tambah-artikel">
                  <AddArtikelButton />
               </Link>
            </div>

            <div className="relative flex pt-10"></div>
            <table className="border-collapse border border-success-green-100 w-full">
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
                  {dataArtikel && dataArtikel.length > 0 ? (
                     dataArtikel.map((artikel, index) => (
                        <tr key={index} scope="" className="">
                           <td className="border border-success-green-100 text-center ">{artikel.id}</td>
                           <td className="border border-success-green-100 pl-2 ">{artikel.artikel}</td>
                           <td className="border border-success-green-100 text-center ">gambar</td>
                           <td className="border border-success-green-100 text-center ">{artikel.category}</td>
                           <td className="border border-success-green-100 text-center ">Di setujui</td>

                           <td className="border border-success-green-100 text-center flex justify-center px-10 gap-2">
                              <Link href="/data-artikel/edit/[id]" as={`/data-artikel/edit/${artikel.id}`}>
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
         </div>

         <Footer />
      </>
   );
}
