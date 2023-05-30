import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Select from "@/components/forms/Select";
import Input from "@/components/forms/Input";
import { input_variants } from "@/components/custom/custom";
import { TextAreaContact } from "@/components/forms/TextAreas";
import { KirimPesanButton } from "@/components/ui/Button";
import { useForm } from "react-hook-form";

export default function ContactUs() {
   return (
      <>
         <Navbar />
         <section className="w-[1275px] mx-auto my-[94px] font-poppins font-[400] text-[24px] leading-[32px] text-[#40522B]">
            <header className="flex justify-between items-center gap-[82px]">
               <div>
                  <h1 className="font-[700] text-[56px] leading-[82px]">Hubungi Kami</h1>
                  <p>Dapatkan jawaban dari setiap pertanyaanmu terkait aplikasi Prevent</p>
               </div>
               <Image src="/assets/images/contact-us.png" alt="Contact US" width={637} height={485} />
            </header>
            <div className="mt-[70px]">
               <div className="text-center">
                  <h2 className="font-[700] text-[64px] leading-[132px] text-[#6FB54E]">Tanya Prevent!</h2>
                  <p>Isi form singkat di bawah jika kamu memiliki pertanyaan atau permintaan khusus</p>
               </div>
               <form className="bg-[#E5E2E2] text-[#6FB54E] font-inter font-[600] text-[24px] py-[48px] px-[28px] rounded-[20px] mt-[66px]">
                  <div className="flex gap-[20px]">
                     <div className="w-full">
                        <label className="mb-[16px] leading-[60px]" htmlFor="name">
                           PILIH TOPIK
                        </label>
                        <Select
                           options={[
                              { value: "Informasi", label: "Informasi" },
                              { value: "Bugs", label: "Bugs" },
                           ]}
                        />
                     </div>
                     <div className="w-full">
                        <label className="mb-[16px] leading-[60px]" htmlFor="nama">
                           DATA DIRI
                        </label>
                        <Input type="text" id="nama" name="nama" placeholder="Nama*" className={input_variants({ variant: "contact_us" })} />
                     </div>
                  </div>
                  <div className="flex gap-[20px]">
                     <div className="w-full">
                        <label className="mb-[16px] leading-[60px]" htmlFor="name">
                           TOPIK
                        </label>
                        <Select
                           options={[
                              { value: "Informasi", label: "Informasi" },
                              { value: "Bugs", label: "Bugs" },
                           ]}
                        />
                     </div>
                     <div className="w-1/2">
                        <label className="mb-[16px] leading-[60px]" htmlFor="email">
                           EMAIL
                        </label>
                        <Input type="email" id="email" name="email" placeholder="Email*" className={input_variants({ variant: "contact_us" })} />
                     </div>
                     <div className="w-1/2">
                        <label className="mb-[16px] leading-[60px]" htmlFor="phone">
                           TELEPON
                        </label>
                        <Input type="phone" id="phone" name="phone" placeholder="Telepon*" className={input_variants({ variant: "contact_us" })} />
                     </div>
                  </div>
                  <div className="mt-[53px]">
                     <div className="w-full">
                        <TextAreaContact />
                     </div>
                     <div className="w-full mt-[40px]">
                        <label className="mb-[16px] leading-[60px]" htmlFor="name">
                           APAKAH SUDAH MENGGUNAKAN APLIKASI KASIR?
                        </label>
                        <Select
                           options={[
                              { value: "Informasi", label: "Informasi" },
                              { value: "Bugs", label: "Bugs" },
                           ]}
                        />
                     </div>
                  </div>
                  <div className="mt-[76px]">
                     <KirimPesanButton>Kirim Pesan</KirimPesanButton>
                  </div>
               </form>
            </div>
         </section>
         <Footer />
      </>
   );
}
