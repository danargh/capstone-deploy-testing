"use client";
import "flowbite";
import Card from "@/components/ui/Card";
import detailArtikel from "../public/assets/images/detail-article.png";

import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";
import Carousel from "@/components/ui/Carousel";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
    const [currentPage, setCurentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center">
                <Carousel />
                <div className="grid grid-cols-3 gap-10 mt-[102px]" id="article">
                    {Array(15)
                        .fill(
                            <Card
                                images={detailArtikel}
                                title="Ilmuwan di China Sebut COVID-19 Mungkin Berasal dari Manusia, Begini Temuannya"
                                description="Seorang ilmuwan di China mengungkapkan kemungkinan COVID-19 berasal dari manusia. Hal ini menyusul desakan dari Organisasi Kesehatan Dunia (WHO) kepada China untuk bersikap transparan perihal data asal-usul virus Corona."
                                href="www.google.com"
                            />
                        )
                        .slice(firstPostIndex, lastPostIndex)}
                </div>
                <div className="flex justify-center mb-36">
                    <Pagination
                        totalPosts={15}
                        postPerPage={postPerPage}
                        setCurrentPage={setCurentPage}
                        currentPage={currentPage}
                    />
                </div>
            </main>
            <Footer />
        </>

    );
}
