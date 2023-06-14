"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import detailArtikel from "@/public/assets/images/detail-article.png";
import { Pagination } from "@/components/ui/Pagination";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useSearchParams } from "next/navigation";
import { useArticles } from "@/components/atoms/useArticles";
export default function Article() {
   const articles = useArticles();
   const [currentPage, setCurentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(12);
   const router = useRouter();
   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;

   const handleDetailArticle = (id) => {
      router.push(`/article/${id}`);
   };

   const searchParams = useSearchParams();
   const search = searchParams.get("q");

   const filteredArticles =
      articles &&
      articles.filter((article) =>
         article.title.toLowerCase().includes(search.toLowerCase())
      );

   console.log(filteredArticles && filteredArticles);
   return (
      <>
         <Navbar />
         <section className="font-inter font-[600] text-[20px] mt-[32px] mb-16 w-[1440px] mx-auto">
            <p className="mb-[20px] leading-8">Hasil Pencarian "{search}"</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
               {filteredArticles.length !== 0 ? (
                  filteredArticles
                     .slice(firstPostIndex, lastPostIndex)
                     .map((article, index) => (
                        <Card
                           key={index}
                           images={detailArtikel}
                           title={article.title}
                           description={article.description}
                           postId={1}
                           handleDetailArticle={handleDetailArticle}
                        />
                     ))
               ) : (
                  <div className="">
                     <h1>Maaf hasil tidak ditemukan :(</h1>
                  </div>
               )}
            </div>
            <div className="flex justify-center mt-3">
               <Pagination
                  totalPosts={filteredArticles.length}
                  postPerPage={postPerPage}
                  setCurrentPage={setCurentPage}
                  currentPage={currentPage}
               />
            </div>
         </section>
         <Footer />
      </>
   );
}
