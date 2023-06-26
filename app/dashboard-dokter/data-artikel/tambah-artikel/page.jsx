'use client';
import { useState } from 'react';

import { KirimArtikelButton } from '@/components/ui/Button';
import InputFile from '@/components/forms/input-file';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { ArrowBackArtikelButton } from '@/components/ui/Button';
import { useAddArticleDoctor } from '@/components/atoms/useAddArticleDoctor';

import dynamic from 'next/dynamic';
import { input_variants } from '@/components/custom/custom';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Page() {
   const { title, setTitle, category, setCategory, content, setContent, thumbnail, setThumbnail, handleSubmit } = useAddArticleDoctor();
   const [selectedFile, setSelectedFile] = useState(null);

   //input file maksimal 3MB
   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file.size > 3000000) {
         // 3MB dalam bytes
         alert('File terlalu besar, ukuran file maksimal 3MB');
         return;
      }
      setSelectedFile(file);
      setThumbnail(file); // Menyimpan file ke state thumbnail
   };
   return (
      <>
         <section className="mx-auto max-w-[1440px]">
            <div className="ml-16" style={{ paddingTop: 47.25 }}>
               <Link href="/dashboard-dokter/data-artikel">
                  <ArrowBackArtikelButton />
               </Link>
            </div>
            <form id="form-tambah-artikel-dokter" onSubmit={handleSubmit}>
               <div className="mx-24" style={{ paddingTop: 17 }}>
                  <span className="text-sm">Judul Artikel</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: '#979797' }}>
                     Maksimal 250 Karakter
                  </span>
                  <div className="" style={{ width: 914 }}>
                     <input id="input-judul-artikel" type="text" placeholder="Masukkan Judul Artikel" className="w-full rounded-lg" onChange={(e) => setTitle(e.target.value)} required maxLength="250" value={title} />
                  </div>
                  <div className="" style={{ paddingTop: 31 }}>
                     <span className="text-sm">Detail Artikel</span>
                     <br />
                     <span className="" style={{ fontSize: 12, color: '#979797' }}>
                        Minimal 250 Karakter
                     </span>
                  </div>
                  <ReactQuill id="input-konten-artikel" theme="snow" placeholder="Masukkan Detail Artikel" style={{ width: 1233, height: 334, paddingBottom: 36 }} value={content} onChange={setContent} />
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
                     <input id="file-input" className="hidden" required type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
                  </div>
                  <div className="pb-[39.5px]">
                     <p className="text-sm font-bold pt-[35px] mb-5">Kategori Artikel</p>
                     <div className="flex items-center mb-4">
                        <input
                           id="radio-deperesi"
                           type="radio"
                           value="Depresi"
                           name="kategori"
                           required
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
                           id="radio-gangguna-kepribadian"
                           type="radio"
                           value="Gangguan Kepribadian"
                           name="kategori"
                           required
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
                           id="radio-gangguan-tidur"
                           type="radio"
                           value="Gangguan Tidur"
                           name="kategori"
                           required
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
                           id="radio-kesehatan-mental"
                           type="radio"
                           value="Kesehatan Mental"
                           name="kategori"
                           required
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
                           id="radio-stress"
                           type="radio"
                           value="Stress"
                           name="kategori"
                           required
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
                  <KirimArtikelButton>Kirim Artikel</KirimArtikelButton>
               </div>
            </form>
         </section>
      </>
   );
}
