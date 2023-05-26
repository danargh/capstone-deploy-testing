"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Card from "@/components/ui/Card";
import detailArtikel from "@/public/assets/images/detail-article.png";

export default function Article({ keyword = "Covid" }) {
   const [currentPage, setCurentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(12);

   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;
   return (
      <>
         <Navbar />
         <section className="font-inter font-[600] text-[20px] leading-8 mt-[32px] mb-16 w-[1440px] mx-auto">
            <p className="mb-[20px]">Hasil Pencarian "{keyword}"</p>
            <div className="grid grid-cols-3 gap-10">
               {Array(8)
                  .fill(
                     <Card
                        images={detailArtikel}
                        title="Ilmuwan di China Sebut COVID-19 Mungkin Berasal dari Manusia, Begini Temuannya
          "
                        description="Seorang ilmuwan di China mengungkapkan kemungkinan COVID-19 berasal dari manusia. Hal ini menyusul desakan dari Organisasi Kesehatan Dunia (WHO) kepada China untuk bersikap transparan perihal data asal-usul virus Corona."
                        href="www.google.com"
                     />
                  )
                  .slice(firstPostIndex, lastPostIndex)}
            </div>
         </section>
         <Footer />
      </>
   );
}
