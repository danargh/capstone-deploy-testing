import React, { useState } from "react";

/* Example of Page Change Function :
   const handlePageChange = (page) => {
      setCurrentPage(page); // Set the current Page
      setBaseIndex(1 + articlesPerPage * (page-1)); // To set the base indexes
   };
*/

// Might later make a dropdown for the pages if necessary
export default function PaginationDok( {currentPage, totalPages, onPageChange} ) {
   const [cPage, setCurrentPage] = useState(currentPage);

   // Function to handle the next page
   const nextPage = () => {
      if (cPage < totalPages) {
         setCurrentPage(cPage + 1);
         onPageChange(cPage + 1);
      }
   };

   // Function to handle the previous page
   const prevPage = () => {
      if (cPage > 1) {
         setCurrentPage(cPage - 1);
         onPageChange(cPage - 1);
      }
   };

   return (
      <div className="flex flex-row gap-0 items-start justify-start shrink-0 w-[238px] relative">
         <div
            className={`select-none font-poppins font-normal text-xs/[120%] text-neutral-0 text-left rounded-[5px_0px_0px_5px] pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 h-[45px] relative ${
                cPage === 1 ? "cursor-not-allowed bg-[#d1d8c8]" : "cursor-pointer bg-web-green-300"}`}
            onClick={prevPage}
         >
               Sebelum
         </div>
         <div className="select-none border-solid border-web-green-300 border pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[60px] h-[45px] relative">
            <div className="font-poppins font-normal text-xs/[120%] text-[#7CA153] text-left relative">
               {cPage}
            </div>
         </div>
         <div
            className={`select-none font-poppins font-normal text-xs/[120%] text-neutral-0 text-left  rounded-[0px_5px_5px_0px] pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center flex-1 h-[45px] relative ${
                cPage === totalPages ? "cursor-not-allowed bg-[#d1d8c8]" : "cursor-pointer bg-web-green-300"}`}
            onClick={nextPage}
         >
               Lanjut
         </div>
      </div>
   );
}