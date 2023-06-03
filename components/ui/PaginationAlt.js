import React, { useState } from "react";

export default function PaginationAlt( {currentPage, articlePerPages, articleData} ) {
   const [cPage, setCurrentPage] = useState(currentPage);

   // Calculate the indexes of the articles to be displayed on the current page
   const indexOfLastArticle = cPage * articlePerPages;
   const indexOfFirstArticle = indexOfLastArticle - articlePerPages;

   // Slice the articleData array to get the articles for the current page
   const currentArticles = articleData
      ? articleData.slice(indexOfFirstArticle, indexOfLastArticle)
      : [];

   // Calculate the total number of pages based on the articlePerPages
   const totalPages = Math.ceil((articleData?.length || 0) / articlePerPages);

   // Function to handle the next page
   const nextPage = () => {
      if (cPage < totalPages) {
         setCurrentPage(cPage + 1);
      }
   };

   // Function to handle the previous page
   const prevPage = () => {
      if (cPage > 1) {
         setCurrentPage(cPage - 1);
      }
   };

   return (
      <div className="flex flex-row gap-0 items-start justify-start shrink-0 w-[238px] relative">
         <div
            className="bg-[#d1d8c8] rounded-[5px_0px_0px_5px] pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 h-[45px] relative"
            onClick={prevPage}
         >
            <div className="font-poppins font-normal text-xs/[120%] text-neutral-0 text-left relative">
               Sebelum
            </div>
         </div>
         <div className="border-solid border-web-green-300 border pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[60px] h-[45px] relative">
            <div className="font-poppins font-normal text-xs/[120%] text-[#7CA153] text-left relative">
               {cPage}
            </div>
         </div>
         <div
            className="bg-web-green-300 rounded-[0px_5px_5px_0px] pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 h-[45px] relative"
            onClick={nextPage}
         >
            <div className="font-poppins font-normal text-xs/[120%] text-neutral-0 text-left relative">
               Lanjut
            </div>
         </div>
      </div>
   );
}
