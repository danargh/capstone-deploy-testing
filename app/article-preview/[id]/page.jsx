import Image from "next/image";
import useSWR from "swr";
import { useArticles } from "@/components/atoms/useArticles";

const fetcher = (url) => fetch(url).then((res) => res.json());

function fetchArticle(id) {
   const { data: article } = useSWR(
      `https://capstone-project.duckdns.org:8080/articles/${id}`,
      fetcher
   );
   return article;
}

export default function PreviewArticle({ params }) {
   const articles = useArticles();

   const getArticle = fetchArticle(params.id);

   const url = window.location.href;
   console.log(url);
   const filteredArticles =
      articles && articles.data.filter((article) => article.id != params.id);

   return (
      <div className="relative">
         {/* <Navbar /> */}

         <article className="mt-[62px] mb-[142px]">
            {getArticle && getArticle ? (
               <>
                  <header className="w-[1440px] mx-auto">
                     <h1 className="font-poppins font-[600] text-[32px] leading-[52px]">
                        {getArticle.data.title}
                     </h1>
                     <div className="flex flex-col gap-[22px] font-inter text-[16px] leading-[18px] font-[400] mt-6">
                        <div className="p-[8px] bg-[#E2F0DC] rounded-[3px] max-w-[202px]">
                           <p className="font-poppins font-[600] text-[20px] leading-[30px] text-[#7CA153]">
                              {getArticle.data.category}
                           </p>
                        </div>
                        <p className="font-poppins font-[400] text-[16px] leading-[24px] italic">
                           Dibuat Oleh: {getArticle.data.doctor_name}{" "}
                           {getArticle.data.date}
                        </p>
                     </div>
                  </header>

                  <Image
                     priority
                     alt="images"
                     className="w-full mt-[48px]   h-[680px] object-cover "
                     src={getArticle.data.thumbnail}
                     width={1440}
                     height={5}
                  />

                  <main className="max-w-[1220px] mx-auto">
                     <p
                        className=" font-inter font-[400] text-[22px] leading-9 text-justify prose max-w-full"
                        dangerouslySetInnerHTML={{
                           __html: getArticle.data.content,
                        }}
                     ></p>
                  </main>
               </>
            ) : (
               <>Loading...</>
            )}
         </article>
      </div>
   );
}
