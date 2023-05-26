import Image from "next/image";
import { SearchIcon } from "@/public/assets/icons/icons";

const Navbar = () => {
   return (
      <>
         <nav className=" bg-web-green-300">
            <div className="max-w-[1440px] flex flex-wrap items-center justify-between mx-auto p-[22px]">
               <a href="#home">
                  <Image src="/assets/logo/logo-p-white.png" alt="Logo" width={32} height={47} />
               </a>
               <div>
                  <ul className="font-poppins text-[24px] font-[700] flex flex-row gap-[61px]  text-white">
                     <li>
                        <a href="">Home</a>{" "}
                     </li>
                     <li>
                        <a href=""> Artikel</a>
                     </li>
                     <li>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button" className="flex flex-row items-center">
                           Dokter
                           <svg class="w-6 h-6 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                           </svg>
                        </button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y text-neutral-900 font-[600] shadow-md">
                           <ul aria-labelledby="dropdownDefaultButton">
                              <li className="px-[24px] py-[24px]">
                                 <a href="#">Detail Dokter</a>
                              </li>
                              <hr />
                              <li className="px-[24px] py-[24px]">
                                 <a href="#">Apakah Kamu Dokter?</a>
                              </li>
                           </ul>
                        </div>
                     </li>
                     <li>
                        <a href="">Dokter Area</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <button className="flex items-center">
                     <SearchIcon fill="white" />
                  </button>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
