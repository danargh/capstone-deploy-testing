"use client"
import 'flowbite';

import Card from "@/components/ui/Card";

import heroImg from "../public/assets/images/hero.png"
import hero2Img from "../public/assets/images/about-us-2-video.png"
import hero3Img from "../public/assets/images/about-us-1.png"
import detailArtikel from "../public/assets/images/detail-article.png"

import Image from 'next/image';
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";

export default function Home() {

    const [currentPage, setCurentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    return (
        <main className="flex min-h-screen flex-col items-center ">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-[704px] overflow-hidden ">
                    {/* Item 1 */}
                    <div className="hidden duration-500  ease-in-out w-full   h-[704px]" data-carousel-item>
                        <Image
                            src={heroImg.src}
                            fill={true}
                            alt="hero-img"
                        />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-500 ease-in-out w-full h-[704px]" data-carousel-item>
                        <Image
                            src={hero2Img.src}
                            fill={true}

                            alt="hero-img"
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-500  ease-in-out w-full h-[704px]" data-carousel-item>
                        <Image
                            src={hero3Img.src}
                            fill={true}
                            alt="hero-img"
                        />
                    </div>

                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button
                        type="button"
                        className="w-4 h-4 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to={0}
                    />
                    <button
                        type="button"
                        className="w-4 h-4 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to={1}
                    />
                    <button
                        type="button"
                        className="w-4 h-4 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to={2}
                    />

                </div>

            </div>
            <div className="grid grid-cols-3 gap-10 mt-[102px]">
                {Array(15).fill(<Card images={detailArtikel} title="Ilmuwan di China Sebut COVID-19 Mungkin Berasal dari Manusia, Begini Temuannya
          " description="Seorang ilmuwan di China mengungkapkan kemungkinan COVID-19 berasal dari manusia. Hal ini menyusul desakan dari Organisasi Kesehatan Dunia (WHO) kepada China untuk bersikap transparan perihal data asal-usul virus Corona." href="www.google.com" />).slice(firstPostIndex, lastPostIndex)}


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
    )
}
