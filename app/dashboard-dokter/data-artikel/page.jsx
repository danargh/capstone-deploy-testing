'use client';
import React from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { AddArtikelButton } from '@/components/ui/Button';
import { button_variants } from '@/components/custom/custom';
import PaginationAlt from '@/components/ui/PaginationAlt';
import { currentPageAtom, baseIndexAtom, articlesPerPageAtom, useArticleData } from '@/components/atoms/useArticleDoctor';

export default function page() {
   const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
   const [baseIndex, setBaseIndex] = useAtom(baseIndexAtom);
   const [articlesPerPage] = useAtom(articlesPerPageAtom);

   const { dataArtikel, error, handleDelete } = useArticleData();

   const indexOfLastArticle = currentPage * articlesPerPage;
   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

   const currentArticles = Array.isArray(dataArtikel) ? dataArtikel.slice(indexOfFirstArticle, indexOfLastArticle) : [];

   const totalPages = Math.ceil((dataArtikel?.length || 0) / articlesPerPage);

   const handlePageChange = (page) => {
      setCurrentPage(page);
      setBaseIndex(1 + articlesPerPage * (page - 1));
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
                           <td className="border border-success-green-100 text-center ">{artikel.image}</td>
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
