"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import detailArtikel from "@/public/assets/images/detail-article.png";
import { Pagination } from "@/components/ui/Pagination";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useSearchParams } from "next/navigation";
// import { searchedArticle } from "@/components/atoms/searchedArticle";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function searchedArticle(keyword) {
   const { data: getSearchArticle } = useSWR(
      `http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/articles/search?keyword=${keyword}`,
      fetcher
   );
   return getSearchArticle;
}
export default function Article() {
   //    const articles = searchedArticle();
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

   const filteredArticles = searchedArticle(search);

   return (
      <>
         <Navbar />
         <section className="font-inter font-[600] text-[20px] mt-[32px] mb-16 w-[1440px] mx-auto">
            <p className="mb-[20px] leading-8">Hasil Pencarian "{search}"</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
               {filteredArticles &&
               filteredArticles.data.length !== 0 &&
               search !== "" ? (
                  filteredArticles.data
                     .slice(firstPostIndex, lastPostIndex)
                     .map((article, index) => (
                        <Card
                           key={index}
                           images={article.thumbnail}
                           title={article.title}
                           description={article.description}
                           postId={article.id}
                           handleDetailArticle={handleDetailArticle}
                        />
                     ))
               ) : (
                  <div className="">
                     <h1>Maaf hasil pencarian tidak ditemukan :(</h1>
                  </div>
               )}
            </div>
            <div className="flex justify-center mt-3">
               <Pagination
                  totalPosts={
                     filteredArticles &&
                     filteredArticles.data.length > postPerPage
                        ? filteredArticles.data.length
                        : 0
                  }
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
