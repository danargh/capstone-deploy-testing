import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function DetailArticle() {
   return (
      <>
         <Navbar />
         <article className="mt-[62px] mb-[142px]">
            <header>
               <h1></h1>
               <p></p>
            </header>
            <main>
               <Image />
               <div>Logo share ke medsos</div>
               <p></p>
               <aside>Post sebelum dan sesudah</aside>
            </main>
            <section>commentar</section>
         </article>
         <Footer />
      </>
   );
}
