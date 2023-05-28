import react from "react";
import Link from "next/link";
import Image from "next/image";
import Check from "public/assets/icons/CheckIcon.png";

export default function ApakahKamuDokter() {

    function CheckIcon() {
      return (
        <Image src={Check} alt='check' width={40} height={40} quality={50}/>
      )
    }
    
  return (
    <>
    <div className="bg-neutral-0 flex flex-col gap-0 items-start justify-start relative overflow-hidden">
        <div className="flex flex-col gap-[106px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-[60px] items-center justify-start shrink-0 relative">
                <div className="flex flex-col gap-20 items-center justify-start shrink-0 relative">
                    <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1332px] relative">
                        <div className="flex flex-col gap-8 items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-col gap-[21px] items-start justify-start shrink-0 relative">
                                <div
                                    className="font-poppins font-semibold text-[28px]/[42px] font text-neutral-900 text-left relative"
                                >
                                    Tertarik untuk Menjalankan Misi Simplifying Healthcare di
                                    Indonesia?
                                </div>
                                <div
                                    className="font-poppins font-medium text-lg/[36px] text-neutral-900 text-left relative"
                                >
                                    Ayo Bergabung dengan Prevent!
                                </div>
                                <div
                                    className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                >
                                    Apakah anda seorang dokter? Mari bergabung sebagai mitra
                                    dokter di Prevent dan bantu kami untuk memberikan pelayanan
                                    kesehatan mental di Indonesia
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
                                <div
                                    className="font-poppins font-medium text-lg/[36px] text-neutral-900 text-left relative w-[198px] h-9"
                                >
                                    Keuntungan
                                </div>
                                <div className="flex flex-col gap-[21px] items-start justify-start shrink-0 relative">
                                    <div className="flex flex-row gap-[22px] items-center justify-start shrink-0 relative">
                                        <CheckIcon />
                                        <div
                                            className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                        >
                                            Memberikan pelayanan kesehatan di Indonesia
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[22px] items-center justify-start shrink-0 relative">
                                        <CheckIcon />
                                        <div 
                                            className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                        >
                                            Memberikan pelayanan kesehatan di Indonesia
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[19px] items-center justify-start shrink-0 relative">
                                        <CheckIcon />
                                        <div
                                            className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                        >
                                            Insentif yang menarik
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
                                <div
                                    className="font-inter font-medium text-sm/[24.2px] text-neutral-900 text-left relative w-[324px] h-3.5"
                                >
                                    Langkah - langkah Mendaftar
                                </div>
                                <div className="flex flex-col gap-[21px] items-start justify-start shrink-0 relative">
                                    <div className="flex flex-row gap-[22px] items-center justify-start shrink-0 relative">
                                        <CheckIcon />
                                        <div
                                            className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                        >
                                            Silahkan klik “Daftar sebagai dokter” lalu isi
                                            persyaratan yang ada
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[22px] items-center justify-start shrink-0 relative">
                                        <CheckIcon />
                                        <div
                                            className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                        >
                                            Persiapkan dokumen Curriculum Vitae, ijazah, STR (Post
                                            Internship) aktif dan SIP aktif.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[19px] items-center justify-start shrink-0 relative">
                                        <CheckIcon />
                                        <div
                                            className="font-poppins font-normal text-xs text-neutral-900 text-left relative"
                                        >
                                            Anda akan segera dihubungi oleh tim prevent melalui
                                            email untuk proses selanjutnya
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Later turn this to Link?*/}
                    <div>
                        <button 
                            className="font-poppins font-semibold text-sm text-neutral-0 text-center bg-web-green-300 rounded-xl pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[299px] h-14 relative"
                        >
                            Daftar Sebagai Dokter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
