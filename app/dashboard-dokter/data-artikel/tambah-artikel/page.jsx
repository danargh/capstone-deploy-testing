"use client";

import { KirimArtikelButton } from "@/components/ui/Button";
import InputFile from "@/components/forms/input-file";
import Link from "next/link";
import Swal from "sweetalert2";
import { ArrowBackArtikelButton } from "@/components/ui/Button";
import { useAddArticleDoctor } from "@/components/atoms/useAddArticleDoctor";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Page() {
   const {
      title,
      setTitle,
      category,
      setCategory,
      description,
      setDescription,
      handleSubmit,
   } = useAddArticleDoctor();

   return (
      <>
         <section className="mx-auto max-w-[1440px]">
            <div className="ml-16" style={{ paddingTop: 47.25 }}>
               <Link href="/dashboard-dokter/data-artikel">
                  <ArrowBackArtikelButton />
               </Link>
            </div>
            <div className="mx-24" style={{ paddingTop: 17 }}>
               <span className="text-sm">Judul Artikel</span>
               <br />
               <span className="" style={{ fontSize: 12, color: "#979797" }}>
                  Maksimal 250 Karakter
               </span>
               <div className="" style={{ width: 914 }}>
                  <input
                     type="text"
                     placeholder="Masukkan Judul Artikel"
                     className="w-full rounded-lg"
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                  />
               </div>
               <div className="" style={{ paddingTop: 31 }}>
                  <span className="text-sm">Detail Artikel</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: "#979797" }}>
                     Minimal 250 Karakter
                  </span>
               </div>
               <ReactQuill
                  theme="snow"
                  placeholder="Masukkan Detail Artikel"
                  style={{ width: 1233, height: 334, paddingBottom: 36 }}
                  value={description}
                  onChange={setDescription}
               />
               <div className="" style={{ paddingTop: 36 }}>
                  <span className="text-sm">Tambahkan Gambar</span>
                  <br />
                  <span className="" style={{ fontSize: 12, color: "#979797" }}>
                     Format gambar .Jpg .png Max. 3MB
                  </span>
                  <InputFile />
               </div>
               <div className="pb-[39.5px]">
                  <p className="text-sm font-bold pt-[35px] mb-5">
                     Kategori Artikel
                  </p>
                  <div className="flex items-center mb-4">
                     <input
                        id=""
                        type="radio"
                        value="Depresi"
                        name="kategori"
                        className="w-6 h-6 text-web-green-400 bg-neutral-0 border-web-green-400 border-2 focus:ring-web-green-500"
                        onChange={(e) => setCategory(e.target.value)}
                        checked={category === "Depresi"}
                     />
                     <label
                        htmlFor=""
                        className="text-inter ml-3 text-sm font-semibold text-neutral-900 "
                     >
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
                        checked={category === "Gangguan Kepribadian"}
                     />
                     <label
                        htmlFor=""
                        className="text-inter ml-3 text-sm font-semibold text-neutral-900 "
                     >
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
                        checked={category === "Gangguan Tidur"}
                     />
                     <label
                        htmlFor=""
                        className="text-inter ml-3 text-sm font-semibold text-neutral-900 "
                     >
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
                        checked={category === "Kesehatan Mental"}
                     />
                     <label
                        htmlFor=""
                        className="text-inter ml-3 text-sm font-semibold text-neutral-900 "
                     >
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
                        checked={category === "Stress"}
                     />
                     <label
                        htmlFor=""
                        className="text-inter ml-3 text-sm font-semibold text-neutral-900 "
                     >
                        Stress
                     </label>
                  </div>
                  {/* Tambahkan input radio lainnya untuk kategori yang berbeda */}
               </div>
               <KirimArtikelButton onClick={handleSubmit}>
                  Kirim Artikel
               </KirimArtikelButton>
            </div>
         </section>
      </>
   );
}
