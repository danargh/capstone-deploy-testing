"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import Input from "@/components/forms/Input";
import { ArrowBackArtikelEditButton, KirimArtikelButton } from "@/components/ui/Button";
import NavbarDokter from "@/components/ui/NavbarDokter";
import InputFile from "@/components/forms/input-file";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function page({ params }) {
   const id = params.id;
   const [artikel, setArtikel] = useState("");
   const [category, setCategory] = useState("");

   useEffect(() => {
      if (id) {
         axios.get(`https://6470c28f3de51400f724e4ab.mockapi.io/artikel/article/${id}`).then((response) => {
            const data = response.data;
            setArtikel(data.artikel);
            setCategory(data.category);
         });
      }
   }, [id]);

   const updateArticle = async (id, data) => {
      try {
         const response = await axios.put(`https://6470c28f3de51400f724e4ab.mockapi.io/artikel/article/${id}`, data);
         return response.data;
      } catch (error) {
         console.error("Error updating article:", error);
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      Swal.fire({
         title: "Berhasil",
         text: "Yeyy Artikel Berhasil Diedit",
         icon: "success",
         confirmButtonText: "OK",
      });

      const data = {
         artikel: artikel,
         category: category,
      };

      await updateArticle(id, data);
   };
   return (
      <>
         <section className="mx-auto max-w-[1440px]">
            <div className="ml-16" style={{ paddingTop: 47.25 }}>
               <Link href="/dashboard-dokter/data-artikel">
                  {" "}
                  <ArrowBackArtikelEditButton />
               </Link>
            </div>
            <div className="mx-24" style={{ paddingTop: 17 }}>
               <span className="text-sm">Judul Artikel</span>
               <br />
               <span className="" style={{ fontSize: 12, color: "#979797" }}>
                  Maksimal 250 Karakter
               </span>
               <div className="" style={{ width: 914 }}>
                  <input type="text" placeholder="Masukkan Judul Artikel" className="w-full rounded-lg" onChange={(e) => setArtikel(e.target.value)} value={artikel} />
               </div>
               <div className="" style={{ paddingTop: 31 }}>
                  <span className="text-sm">Detail Artikel</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: "#979797" }}>
                     Minimal 250 Karakter
                  </span>
               </div>
               <ReactQuill theme="snow" placeholder="Masukkan Detail Artikel" style={{ width: 1233, height: 334, paddingBottom: 36 }} />
               <div className="" style={{ paddingTop: 36 }}>
                  <span className="text-sm">Tambahkan Gambar</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: "#979797" }}>
                     Format gambar .Jpg .png Max. 3MB
                  </span>
                  <InputFile />
               </div>
               <div className="pb-[39.5px]">
                  <p className="text-sm font-bold pt-[35px] mb-5">Kategori Artikel</p>
                  <div className="flex items-center mb-4">
                     <input id="" type="radio" value="Depresi" name="kategori" className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500" onChange={(e) => setCategory(e.target.value)} checked={category === "Depresi"} />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Depresi
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input id="" type="radio" value="Gangguan Kepribadian" name="kategori" className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500" onChange={(e) => setCategory(e.target.value)} checked={category === "Gangguan Kepribadian"} />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Gangguan Kepribadian
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input id="" type="radio" value="Gangguan Tidur" name="kategori" className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500" onChange={(e) => setCategory(e.target.value)} checked={category === "Gangguan Tidur"} />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Gangguan Tidur
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input id="" type="radio" value="Kesehatan Mental" name="kategori" className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500" onChange={(e) => setCategory(e.target.value)} checked={category === "Kesehatan Mental"} />
                     <label htmlFor="" className="text-inter ml-3 text-sm font-semibold text-neutral-900 ">
                        Kesehatan Mental
                     </label>
                  </div>
                  <div className="flex items-center mb-4">
                     <input id="" type="radio" value="Stress" name="kategori" className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500" onChange={(e) => setCategory(e.target.value)} checked={category === "Stress"} />
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
