"use client"
import 'flowbite';
import Image from 'next/image';
import hero1 from "../../public/assets/images/hero-1.png";
import hero2 from "../../public/assets/images/hero-2.png";
import hero3 from "../../public/assets/images/hero-3.png";

export default function Carousel() {

    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative z-10 h-[704px] overflow-hidden ">
                    {/* Item 1 */}
                    <div className=" hidden duration-500  ease-in-out w-full   h-[704px]" data-carousel-item>
                        <Image
                            src={hero1.src}
                            fill={true}
                            alt="hero-img"


                        />
                    </div>
                    {/* Item 2 */}
                    <div className=" hidden duration-500 ease-in-out w-full h-[704px]" data-carousel-item>
                        <Image
                            src={hero2.src}
                            fill={true}

                            alt="hero-img"
                        />
                    </div>
                    {/* Item 3 */}
                    <div className=" hidden duration-500  ease-in-out w-full h-[704px]" data-carousel-item>
                        <Image
                            src={hero3.src}
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
        </>
    )
}