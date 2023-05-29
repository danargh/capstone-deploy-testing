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

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function page(props) {
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
         <div className="mx-5 mb-5">
            <div style={{ marginTop: 100 }} className="flex items-end justify-end ml-auto default">
               <Link href="/data-artikel/tambah-artikel">
                  <AddArtikelButton />
               </Link>
            </div>

            <div className="relative flex pt-10"></div>
            <table className="border-collapse border w-full border-black ">
               <thead className={props.className}>
                  <tr className="bg-[#8EBF59] font-semibold h-[43px]">
                     {' '}
                     {props.children}
                     <th className=" w-1/4">No</th>
                     <th className=" w-1/4">Artikel</th>
                     <th className=" w-1/4">Gambar</th>
                     <th className=" w-1/4">Kategori Artikel</th>
                     <th className=" w-1/4">Aksi</th>
                  </tr>
               </thead>
               <tbody className="">
                  {dataArtikel && dataArtikel.length > 0 ? (
                     dataArtikel.map((artikel, index) => (
                        <tr key={index} scope="" className="">
                           <td className="border border-black text-center ">{artikel.id}</td>
                           <td className="border border-black text-center ">{artikel.artikel}</td>
                           <td className="border border-black text-center ">{artikel.gambar}</td>
                           <td className="border border-black text-center ">{artikel.category}</td>

                           <td className="border border-black text-center flex justify-center px-10">
                              <Link href="/data-artikel/edit/[id]" as={`/data-artikel/edit/${artikel.id}`}>
                                 <button>
                                    <EditArtikelIcon />
                                 </button>
                              </Link>

                              <button className="ml-2" onClick={() => handleDelete(artikel.id)}>
                                 <TrashIcon fill="black" width="20" height="22.5" />
                              </button>
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td colSpan="5" className="border border-black text-center">
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
