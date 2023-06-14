"use client";

import Card from "@/components/ui/Card";
import detailArtikel from "../public/assets/images/detail-article.png";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";
import Carousel from "@/components/ui/Carousel";
import { useRouter } from "next/navigation";
import { useArticles } from "@/components/atoms/useArticles";


export default function Home() {
    const articles = useArticles();
    const [currentPage, setCurentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const router = useRouter();
    const handleDetailArticle = (id) => {
        router.push(`/article/${id}`);
    };

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center">
                <Carousel />
                <div className="grid grid-cols-3 gap-10 mt-[102px]" id="article">
                    {articles && articles.slice(firstPostIndex, lastPostIndex).map((article, index) => (
                        <Card
                            key={index}
                            images={detailArtikel}
                            title={article.title}
                            description={article.description}
                            postId={1}
                            handleDetailArticle={handleDetailArticle}
                        />
                    ))}
                </div>
                <div className="flex justify-center mb-36">
                    <Pagination totalPosts={articles ? articles.length : 0} postPerPage={postPerPage} setCurrentPage={setCurentPage} currentPage={currentPage} />
                </div>
            </main>
            <Footer />
        </>
    );
}
