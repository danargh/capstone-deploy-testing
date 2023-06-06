"use client";

import Card from "@/components/ui/Card";
import detailArtikel from "../public/assets/images/detail-article.png";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";
import Carousel from "@/components/ui/Carousel";
import { useRouter } from "next/navigation";

export default function Home() {
    const [currentPage, setCurentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const router = useRouter();
    const handleDetailArticle = (id) => {
        router.push(`/article/${id}`);
    };
    const newData = [];
    const totalPosts = 26;
    for (let i = 0; i < totalPosts; i++) {
        const item = {
            images: detailArtikel,
            title: "Ilmuwan di China Sebut COVID-19 Mungkin Berasal dari Manusia, Begini Temuannya",
            description: "Seorang ilmuwan di China mengungkapkan kemungkinan COVID-19 berasal dari manusia. Hal ini menyusul desakan dari Organisasi Kesehatan Dunia (WHO) kepada China untuk bersikap transparan perihal data asal-usul virus Corona.",
        };
        const newItem = {
            ...item,
        };
        newData.push(newItem);
    }
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center">
                <Carousel />
                <div className="grid grid-cols-3 gap-10 mt-[102px]" id="article">
                    {newData.slice(firstPostIndex, lastPostIndex).map((item, index) => (
                        <Card
                            key={index}
                            images={item.images}
                            title={item.title}
                            description={item.description}
                            postId={1}
                            handleDetailArticle={handleDetailArticle}
                        />
                    ))}
                </div>
                <div className="flex justify-center mb-36">
                    <Pagination totalPosts={totalPosts} postPerPage={postPerPage} setCurrentPage={setCurentPage} currentPage={currentPage} />
                </div>
            </main>
            <Footer />
        </>
    );
}
