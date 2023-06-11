import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-web-green-300  text-white">
                <div className=" font-poppins w-[1440px] mx-auto">
                    <div className="font-poppins text-[20px] flex gap-[61px] justify-center font-bold py-7">
                        <div>
                            <Link href="/about">Tentang Kami</Link>
                        </div>
                        <div>
                            <Link href="/contact-us">Hubungi Kami</Link>
                        </div>

                    </div>
                    <div className="flex justify-between py-28">
                        <div>
                            <div className="text-[24px] font-[700] leading-normal">JELAJAH FITUR</div>
                            <ul className="font-[400] leading-relaxed">
                                <li>
                                    <Link href="/">Beranda</Link>
                                </li>
                                <li>
                                    <Link href="/#artikel">Artikel</Link>
                                </li>
                                <li>
                                    <Link href="/dokter">Dokter</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-[24px]  font-[700] leading-normal">RINGKASAN</div>
                            <ul className="font-[400] leading-relaxed">
                                <li>
                                    <Link href="/about">Tentang Kami</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us">Hubungi Kami</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="">
                            <div className="text-[24px]  font-[700] leading-normal">KOMUNITAS</div>
                            <ul className="font-[400] leading-relaxed">

                                <li>
                                    <Link href="/help">Bantuan</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-[24px]  font-[600] leading-normal w-[270px]">PREVENT! APPS</div>
                            <p className="font-[400] leading-relaxed w-[270px]">Download aplikasi Prevent di play sotre secara gratis.</p>
                            <div className="flex items-center gap-3 mt-3">
                                <Image src="/assets/logo/logo-p-green.png" alt="Logo" width={90} height={83} />
                                <div className="flex flex-col gap-3">
                                    <button>
                                        <Image className="w-full h-auto" src="/assets/images/google-play.png" alt="Logo" width={120} height={48} />
                                    </button>
                                    <button>
                                        <Image className="w-full h-auto" src="/assets/images/app-store.png" alt="Logo" width={120} height={48} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-10">
                        <p className="text-[25px]">&copy; Copyright by PREVENT!</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
