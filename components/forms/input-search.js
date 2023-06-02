import { input_variants } from "../custom/custom";

export default function InputSearch({ placeholder = "Search" }) {
   return (
      <>
         <div className="relative w-full">
            <input type="text" id="simple-search" className={`h-[54px] ${input_variants({ variant: "search" })}`} placeholder={placeholder} required="" />
            <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none mr-3">
               <svg width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M33.3979 30.4521L42.3208 39.3729L39.3729 42.3208L30.4521 33.3979C27.1328 36.0588 23.0042 37.5061 18.75 37.5C8.4 37.5 0 29.1 0 18.75C0 8.4 8.4 0 18.75 0C29.1 0 37.5 8.4 37.5 18.75C37.5061 23.0042 36.0588 27.1328 33.3979 30.4521ZM29.2187 28.9062C31.8627 26.1873 33.3393 22.5426 33.3333 18.75C33.3333 10.6937 26.8062 4.16667 18.75 4.16667C10.6937 4.16667 4.16667 10.6937 4.16667 18.75C4.16667 26.8062 10.6937 33.3333 18.75 33.3333C22.5426 33.3393 26.1873 31.8627 28.9062 29.2187L29.2187 28.9062Z"
                     fill="#959595"
                  />
               </svg>
            </div>
         </div>
      </>
   );
}
