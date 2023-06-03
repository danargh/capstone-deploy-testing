"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import detailArtikel from "@/public/assets/images/detail-article.png";
import { Pagination } from "@/components/ui/Pagination";
import { useRouter } from "next/navigation";

export default function Article({ keyword = "Covid" }) {
   const [currentPage, setCurentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(12);
   const router = useRouter();

   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;

   const handleDetailArticle = (id) => {
      router.push(`/article/${id}`);
   };

   return (
      <>
         <section className="font-inter font-[600] text-[20px] mt-[32px] mb-16 w-[1440px] mx-auto">
            <p className="mb-[20px] leading-8">Hasil Pencarian "{keyword}"</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
               {Array(8)
                  .fill(
                     <Card
                        images={detailArtikel}
                        title="Ilmuwan di China Sebut COVID-19 Mungkin Berasal dari Manusia, Begini Temuannya"
                        description="Seorang ilmuwan di China mengungkapkan kemungkinan COVID-19 berasal dari manusia. Hal ini menyusul desakan dari Organisasi Kesehatan Dunia (WHO) kepada China untuk bersikap transparan perihal data asal-usul virus Corona."
                        href="www.google.com"
                        postId={1}
                        handleDetailArticle={handleDetailArticle}
                     />
                  )
                  .slice(firstPostIndex, lastPostIndex)}
            </div>
            <div className="flex justify-center mt-3">
               <Pagination totalPosts={15} postPerPage={postPerPage} setCurrentPage={setCurentPage} currentPage={currentPage} />
            </div>
         </section>
      </>
   );
}
