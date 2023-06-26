"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArticleAdminAPI from "@/api/article-admin";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";

export default function PreviewArticle({ params }) {
   const { articleData } = ArticleAdminAPI();
   const articles = articleData ? articleData.data : [];
   console.log(articles);
   const filteredArticles =
      articles && articles.filter((article) => article.id == params.id);
   console.log(filteredArticles);
   return (
      <div className="relative">
         <Link
            className="absolute ml-5 hover:scale-125 transition-transform"
            href={`dashboard-admin/admin-article-tables`}
         >
            <ArrowBackIcon2 width="60" height="60" />
         </Link>
         <article className="mt-[62px] mb-[142px]">
            {filteredArticles && filteredArticles ? (
               filteredArticles.map((article, index) => (
                  <React.Fragment key={index}>
                     <header className="w-[1440px] mx-auto">
                        <h1 className="font-poppins font-[600] text-[32px] leading-[52px]">
                           {article.title}
                        </h1>
                        <div className="flex flex-col gap-[22px] font-inter text-[16px] leading-[18px] font-[400] mt-6">
                           <div className="p-[8px] bg-[#E2F0DC] rounded-[3px] max-w-[202px]">
                              <p className="font-poppins font-[600] text-[20px] leading-[30px] text-[#7CA153]">
                                 {article.category}
                              </p>
                           </div>
                           <p className="font-poppins font-[400] text-[16px] leading-[24px] italic">
                              Dibuat Oleh: {article.doctor_name} {article.date}
                           </p>
                        </div>
                     </header>

                     <Image
                        priority
                        alt="images"
                        className="w-full mt-[48px] h-[680px] object-cover "
                        src={article.thumbnail}
                        width={1440}
                        height={5}
                     />

                     <main className="max-w-[1220px] mx-auto">
                        <p
                           className=" font-inter font-[400] text-[22px] leading-9 text-justify prose max-w-full"
                           dangerouslySetInnerHTML={{
                              __html: article.content,
                           }}
                        ></p>
                     </main>
                  </React.Fragment>
               ))
            ) : (
               <>Loading...</>
            )}
         </article>
      </div>
   );
}
