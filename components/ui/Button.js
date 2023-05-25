import React from "react";

export default function Button({ className, type, placeholder, children }) {
   return (
      <div>
         <button className={className} placeholder={placeholder} type={type}>
            {children}
         </button>
      </div>
   );
}
