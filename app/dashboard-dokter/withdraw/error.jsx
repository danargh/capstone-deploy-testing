"use client";

import { useEffect } from "react";

// Default Error Page
export default function Error({ error, reset }) {
   useEffect(() => {
      // Log the error
      console.error(error);
   }, [error]);

   return (
      <div>
         <h2>Something went wrong!</h2>
      </div>
   );
}
