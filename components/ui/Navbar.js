"use client";

import { useState } from "react";
import Image from "next/image";
import { SearchIcon } from "@/public/assets/icons/icons";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import InputSearch from "../forms/input-search";

const Navbar = () => {
    const pathname = usePathname();
    const [dropdown, setdropdown] = useState(false);
    const inputRef = useRef(null);
    const router = useRouter();
    const handleClick = () => {
        setdropdown(!dropdown);
    };

    const handleSearch = () => {
        const value = inputRef.current.value;
        inputRef.current.value = null;
        router.push(`/article/search?q=${value}`)

    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <>
            <nav className=" bg-web-green-300">
                <div className="max-w-[1440px] flex flex-wrap items-center justify-between mx-auto p-[22px]">
                    <Link href="/#utama">
                        <Image src="/assets/logo/logo-p-white.png" alt="Logo" width={32} height={47} />
                    </Link>
                    <div>
                        <ul className="font-poppins text-[20px] font-[700] flex flex-row gap-[61px]  text-white">
                            <li className={pathname === "/" ? "border-b-4 border-white transition-all" : "border-b-4 border-[#8EBF59]"}>
                                <Link href="/#utama">Beranda</Link>
                            </li>
                            <li className={pathname === "/article" || pathname === `/article/1` ? "border-b-4 border-white transition-all" : "border-b-4 border-[#8EBF59]"}>
                                <Link href="/#article"> Artikel</Link>
                            </li>
                            <li className={pathname === "/dokter" || pathname === "/are-you-doctor" ? "border-b-4 border-white transition-all" : "border-b-4 border-[#8EBF59]"}>
                                <div className="relative">
                                    <button type="button" className="flex flex-row items-center" onClick={handleClick}>
                                        Dokter
                                        <svg className="w-6 h-6 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {dropdown && (
                                        <ul className="absolute mt-7 top-5 z-20 w-[301px] bg-neutral-0 text-neutral-900">
                                            <li className="px-[24px] py-[24px]">
                                                <Link href="/dokter">Semua Dokter</Link>
                                            </li>
                                            <hr />
                                            <li className="px-[24px] py-[24px]">
                                                <Link href="/are-you-doctor">Apakah Kamu Dokter?</Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                            <li className={pathname === "/login" ? "border-b-4 border-white transition-all" : "border-b-4 border-[#8EBF59]"}>
                                <Link href="/login">Dokter Area</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="relative">
                            <input type="text" id="simple-search" className="border-none rounded-lg h-[54px] bg-web-green-200  placeholder-white text-white" placeholder="Pencarian" ref={inputRef} onKeyDown={handleKeyDown} />
                            <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none mr-3">
                                <svg width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.3979 30.4521L42.3208 39.3729L39.3729 42.3208L30.4521 33.3979C27.1328 36.0588 23.0042 37.5061 18.75 37.5C8.4 37.5 0 29.1 0 18.75C0 8.4 8.4 0 18.75 0C29.1 0 37.5 8.4 37.5 18.75C37.5061 23.0042 36.0588 27.1328 33.3979 30.4521ZM29.2187 28.9062C31.8627 26.1873 33.3393 22.5426 33.3333 18.75C33.3333 10.6937 26.8062 4.16667 18.75 4.16667C10.6937 4.16667 4.16667 10.6937 4.16667 18.75C4.16667 26.8062 10.6937 33.3333 18.75 33.3333C22.5426 33.3393 26.1873 31.8627 28.9062 29.2187L29.2187 28.9062Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
