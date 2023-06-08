"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "@/public/assets/images/hero-1.png";
import hero2 from "@/public/assets/images/hero-2.png";
import hero3 from "@/public/assets/images/hero-3.png";

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const images = [
        {
            src: hero1,
            alt: "Hero 1",
        },
        {
            src: hero2,
            alt: "Hero 2",
        },
        {
            src: hero3,
            alt: "Hero 3",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div id="default-carousel" className="relative w-full">
                <div className="relative ">
                    <Image
                        src={images[activeSlide].src.src}
                        alt={images[activeSlide].alt}
                        className="w-full"
                        width={1440} height={500}
                    />

                </div>
                {/* Slider indicators */}
                <div className="absolute z-30  space-x-3 bottom-5 left-1/2 ">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-4 h-4 rounded-full ${index === activeSlide ? 'bg-neutral-300' : 'bg-neutral-0'}`}
                            aria-label={image.alt}
                            disabled={index === activeSlide}
                            onClick={() => handleSlideChange(index)}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Carousel;
