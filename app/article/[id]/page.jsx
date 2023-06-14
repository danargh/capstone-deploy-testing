"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { PersonIcon, ClockIcon } from "@/public/assets/icons/icons";
import { TextAreaArtikel } from "@/components/forms/TextAreas";
import Input from "@/components/forms/Input";
import { KirimKomentarButton } from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

const comments = [
   {
      id: Math.random(),
      firstName: "Arka",
      lastName: "Samudra",
      commentValue: "Saat ini hampir setiap orang mengalami penderitaan akibat pandemi ini. Jika orang tersebut belum siap menghadapi perubahan sosial yang mendadak maka berpotensi timbul depresi dan gangguan kecemasan yang mengancam gangguan mental bila tidak dikelola dengan baik",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
   },
];

export default function DetailArticle({ params }) {
   const [comment, setComment] = useState(comments);
   const commentTextRef = useRef();
   const firstNameRef = useRef();
   const lastNameRef = useRef();

   const handleSubmit = (event) => {
      event.preventDefault();
      setComment((prevComment) => {
         const newComment = {
            id: Math.random(),
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            commentValue: commentTextRef.current?.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
         };
         commentTextRef.current.value = "";
         firstNameRef.current.value = "";
         lastNameRef.current.value = "";
         return [...prevComment, newComment];
      });
   };

   return (
      <>
         <Navbar />
         <article className="mt-[62px] mb-[142px]">
            <header className="w-[1440px] mx-auto">
               <h1 className="font-poppins font-[600] text-[32px] leading-[52px]">Copy Artikel / Ilmuwan di China Sebut COVID-19 Mungkin Berasal dari Manusia, Begini Temuannya</h1>
               <div className="flex flex-col gap-[22px] font-inter text-[16px] leading-[18px] font-[400] mt-6">
                  <div className="p-[8px] bg-[#E2F0DC] rounded-[3px] max-w-[202px]">
                     <p className="font-poppins font-[600] text-[20px] leading-[30px] text-[#7CA153]">Kesehatan Mental</p>
                  </div>
                  <p className="font-poppins font-[400] text-[16px] leading-[24px] italic">Dibuat Oleh: Dr. Fauzan Hakim M.Psi.Psi 25 Mei 2023</p>
               </div>
            </header>
            <Image priority alt="images" className="w-full mt-[48px]" src="/assets/images/detail-article.png" width={1440} height={500} />
            <main className="max-w-[1220px] mx-auto">
               <div className="flex gap-[42px] justify-center my-[32px]">
                  <a href="#" className=" bg-neutral-40 w-[164px] h-[52px] flex items-center justify-center rounded-[10px]">
                     <Image priority alt="images" src="/assets/icons/facebook-icon.svg" width={30} height={30} />
                  </a>
                  <a href="#" className=" bg-neutral-40 w-[164px] h-[52px] flex items-center justify-center rounded-[10px]">
                     <Image priority alt="images" src="/assets/icons/google-icon.svg" width={30} height={30} />
                  </a>
                  <a href="#" className=" bg-neutral-40 w-[164px] h-[52px] flex items-center justify-center rounded-[10px]">
                     <Image priority alt="images" src="/assets/icons/twitter-icon.svg" width={30} height={30} />
                  </a>
                  <a href="#" className=" bg-neutral-40 w-[164px] h-[52px] flex items-center justify-center rounded-[10px]">
                     <Image priority alt="images" src="/assets/icons/google-plus-icon.svg" width={30} height={30} />
                  </a>
               </div>
               <p className="font-inter font-[400] text-[22px] leading-9 text-justify">
                  Jakarta - Seorang ilmuwan di China mengungkapkan kemungkinan COVID-19 berasal dari manusia. Hal ini menyusul desakan dari Organisasi Kesehatan Dunia (WHO) kepada China untuk bersikap transparan perihal data asal-usul virus Corona. Seperti apa temuannya?Kemungkinan tersebut
                  diungkapkan oleh Tong Yigang dari Universitas Teknologi Kimia Beijing. Ia mengacu kepada sampel virus yang diambil dari Pasar Makanan Laut Huanan di Wuhan. Sampel dari pasar yang dianggap sebagai titik nol pandemi COVID-19 tersebut ditemukan 'hampir identik' dengan sampel pasien
                  yang terpapar virus Corona. Dari sanalah ia menyebut, ada kemungkinan COVID-19 berasal dari manusia.Dikutip dari CNN, dalam konferensi pers yang diadakan oleh Dewan Negara China mengenai penelitian asal mula virus Corona, Tong menjelaskan lebih dari 1.300 sampel lingkungan dan
                  hewan beku telah diambil di pasar antara Januari 2020 dan Maret 2020. Para peneliti telah mengisolasi tiga strain virus dari sampel.
                  <br />
                  <br />
                  Ia juga mengatakan, hingga kini belum ada cukup bukti untuk mendukung penelitian terbaru yang menyatakan anjing rakun adalah asal dari penularan virus COVID-19.Dalam kesempatan yang sama, peneliti Pusat Pengendalian dan Pencegahan Penyakit (CDC) China, Zhou Lei, menyerukan perlunya
                  kolaborasi ilmiah global dalam melacak asal-usul virus Corona. Sebab menurutnya, situs tempat COVID-19 teridentifikasi pertama kali belum tentu merupakan asal muasal virus Corona.Mengingat, China banyak dikritik karena dianggap menghalangi penyelidikan internasional perihal
                  asal-usul virus Corona. Awal pekan ini, WHO menegaskan pihaknya masih belum memiliki data kunci dari China perihal awal wabah.
               </p>
               <aside className=" mt-[130px] font-inter font-[600] text-[22px] leading-9">
                  <div className="flex justify-between">
                     <h2 className="w-[500px]">Peran WHO Dalam Menanggulangan COVID-19 Bagi Masyarakat</h2>
                     <h2 className="w-[500px] text-right">Breakdown Perkaraka Terjadinya COVID-19</h2>
                  </div>
                  <div className="flex justify-between mt-[18px]">
                     <Link href={`/article/${parseInt(params.id) - 1}`} className="font-[500] text-[16px] leading-4 text-[#268AFF]">
                        Post Sebelumnya
                     </Link>
                     <Link href={`/article/${parseInt(params.id) + 1}`} className="font-[500] text-[16px] leading-4 text-[#268AFF]">
                        Post Selanjutnya
                     </Link>
                  </div>
               </aside>
            </main>
            <section className="max-w-[1220px] mx-auto mt-[70px] mb-[50px]">
               <div>
                  <h3 className="font-inter font-[600] text-[22px] leading-9">Tinggalkan Balasan</h3>
                  <p className="font-inter font-[400] text-[20px] leading-8 mt-[26px]">Alamat email Anda tidak akan dipublikasikan. Ruas yang wajib ditandai *</p>
               </div>
               {comment.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start my-[50px]">
                     <Image priority alt="images" src="/assets/icons/profile2-icon.svg" width={40} height={40} />
                     <div>
                        <h4 className="font-poppins font-[500] text-[24px] leading-8 text-[#00000096]">{`${item.firstName} ${item.lastName}`}</h4>
                        <p>{item.commentValue}</p>
                     </div>
                  </div>
               ))}
               <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                  <div>
                     <textarea
                        ref={commentTextRef}
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full h-[312px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Comment"
                        required
                     ></textarea>
                  </div>
                  <div className="flex gap-5">
                     <input
                        ref={firstNameRef}
                        type="text"
                        placeholder="First Name"
                        className="block p-2.5 w-full h-[68px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                     />
                     <input
                        ref={lastNameRef}
                        type="text"
                        placeholder="Last Name"
                        className="block p-2.5 w-full h-[68px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                     />
                  </div>
                  <KirimKomentarButton type="submit">Kirim Komentar</KirimKomentarButton>
               </form>
            </section>
         </article>
         <Footer />
      </>
   );
}
