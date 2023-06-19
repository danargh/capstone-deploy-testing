'use client';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import useSWR, { mutate } from 'swr';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { useEditArticleDoctor } from '@/components/atoms/useEditArticleDoctor';

import { ArrowBackArtikelEditButton, KirimArtikelButton } from '@/components/ui/Button';
import InputFile from '@/components/forms/input-file';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { input_variants } from '@/components/custom/custom';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import Cookies from 'js-cookie';
// const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = (url) => {
   const token = Cookies.get('doctorToken');
   return fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());
};

export default function page({ params }) {
   const id = params.id;
   const router = useRouter();
   const { data: artikelData, error } = useSWR(`https://capstone-project.duckdns.org:8080/doctor/articles/${id}`, fetcher);
   const { title, setTitle, category, setCategory, content, setContent, thumbnail, setThumbnail } = useEditArticleDoctor();

   useEffect(() => {
      if (artikelData) {
         setTitle(artikelData.data.title);
         setCategory(artikelData.data.category);
         setContent(artikelData.data.content);
         setThumbnail(artikelData.data.thumbnail);
      }
   }, [artikelData]);

   const updateArticle = async (id, data) => {
      const token = Cookies.get('doctorToken');
      try {
         const response = await fetch(`https://capstone-project.duckdns.org:8080/doctor/articles/${id}`, {
            method: 'PUT',

            headers: {
               Authorization: `Bearer ${token}`,
            },

            body: data,
         });
         console.log(response);
         if (!response.ok) {
            throw new Error('Error updating article');
         }
         const updatedData = await response.json();
         mutate(`https://capstone-project.duckdns.org:8080/doctor/articles/${id}`);
         return updatedData;
      } catch (error) {
         console.error('Error updating article:', error);
      }
   };

   const handleSubmit = async (e) => {
      const token = Cookies.get('doctorToken');
      e.preventDefault();
      Swal.fire({
         title: 'Berhasil',
         text: 'Yeyy Artikel Berhasil Diedit',
         icon: 'success',
         confirmButtonText: 'OK',
      });

      const data = new FormData();
      data.append('title', title);
      data.append('category', category);
      data.append('content', content);
      data.append('thumbnail', thumbnail);

      await updateArticle(id, data);
      router.push('/dashboard-dokter/data-artikel');
   };
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      setThumbnail(file); // Menyimpan file ke state thumbnail
   };
   return (
      <>
         <section className="mx-auto max-w-[1440px]">
            <div className="ml-16" style={{ paddingTop: 47.25 }}>
               <Link href="/dashboard-dokter/data-artikel">
                  {' '}
                  <ArrowBackArtikelEditButton />
               </Link>
            </div>
            <div className="mx-24" style={{ paddingTop: 17 }}>
               <span className="text-sm">Judul Artikel</span>
               <br />
               <span className="" style={{ fontSize: 12, color: '#979797' }}>
                  Maksimal 250 Karakter
               </span>
               <div className="" style={{ width: 914 }}>
                  <input type="text" placeholder="Masukkan Judul Artikel" className="w-full rounded-lg" onChange={(e) => setTitle(e.target.value)} value={title} />
               </div>
               <div className="" style={{ paddingTop: 31 }}>
                  <span className="text-sm">Detail Artikel</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: '#979797' }}>
                     Minimal 250 Karakter
                  </span>
               </div>
               <ReactQuill theme="snow" placeholder="Masukkan Detail Artikel" style={{ width: 1233, height: 334, paddingBottom: 36 }} value={content} onChange={setContent} />
               <div className="" style={{ paddingTop: 36 }}>
                  <span className="text-sm">Tambahkan Gambar</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: '#979797' }}>
                     Format gambar .Jpg .png Max. 3MB
                  </span>
                  <label htmlFor="file-input" className="flex flex-row-reverse w-[914px] cursor-pointer h-[41px]">
                     <div className="bg-web-green-400 font-poppins whitespace-nowrap flex items-center px-3 rounded-r-md text-white">Pilih Gambar</div>
                     <div className={input_variants({ variant: 'image' })}>{selectedFile ? selectedFile.name : 'Pilih Gambar'}</div>
                  </label>
                  <input id="file-input" className="hidden" type="file" onChange={handleFileChange} />
               </div>
               <div className="pb-[39.5px]">
                  <p className="text-sm font-bold pt-[35px] mb-5">Kategori Artikel</p>
                  <div className="flex items-center mb-4">
                     <input
                        id=""
                        type="radio"
                        value="Depresi"
                        name="kategori"
                        className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500"
                        onChange={(e) => setCategory(e.target.value)}
                        checked={category === 'Depresi'}
                     />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Depresi
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input
                        id=""
                        type="radio"
                        value="Gangguan Kepribadian"
                        name="kategori"
                        className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500"
                        onChange={(e) => setCategory(e.target.value)}
                        checked={category === 'Gangguan Kepribadian'}
                     />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Gangguan Kepribadian
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input
                        id=""
                        type="radio"
                        value="Gangguan Tidur"
                        name="kategori"
                        className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500"
                        onChange={(e) => setCategory(e.target.value)}
                        checked={category === 'Gangguan Tidur'}
                     />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Gangguan Tidur
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input
                        id=""
                        type="radio"
                        value="Kesehatan Mental"
                        name="kategori"
                        className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500"
                        onChange={(e) => setCategory(e.target.value)}
                        checked={category === 'Kesehatan Mental'}
                     />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Kesehatan Mental
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input
                        id=""
                        type="radio"
                        value="Stress"
                        name="kategori"
                        className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500"
                        onChange={(e) => setCategory(e.target.value)}
                        checked={category === 'Stress'}
                     />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Stress
                     </label>
                  </div>
                  {/* Tambahkan input radio lainnya untuk kategori yang berbeda */}
               </div>
               <KirimArtikelButton onClick={handleSubmit}> Kirim Artikel </KirimArtikelButton>
            </div>
         </section>
      </>
   );
}
