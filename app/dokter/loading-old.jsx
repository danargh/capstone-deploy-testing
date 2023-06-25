import React from "react";

export default function Loading() {
   return (
      <div className="bg-transparent flex justify-center items-center h-screen">
         <div
            className="inline-block h-32 w-32 animate-spin rounded-full border-[16px] border-solid border-web-green-500 border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_4s_linear_infinite]"
            role="status"
         >
            
         </div>
      </div>
   );
}
