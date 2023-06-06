'use client';

import Sidebar from './Sidebar';
import { useState } from 'react';

const NavbarDokter = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const handleSidebarToggle = () => {
      setIsSidebarOpen((prev) => !prev);
   };

   return (
      <>
         <nav className=" bg-web-green-300 m-0 p-0">
            <div className="max-w-[1440px] flex flex-wrap items-center justify-between mx-auto p-[22px]">
               <div className="flex flex-wrap items-center">
                  <button onClick={handleSidebarToggle}>
                     <svg width="33.75px" height="26.25px" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="24" height="2" rx="1" fill="#DCD6D6" />
                        <rect x="1" y="1" width="24" height="2" rx="1" stroke="white" strokeWidth="2" />
                        <rect x="1" y="8" width="24" height="2" rx="1" fill="#DCD6D6" />
                        <rect x="1" y="8" width="24" height="2" rx="1" stroke="white" strokeWidth="2" />
                        <rect x="1" y="15" width="24" height="2" rx="1" fill="#DCD6D6" />
                        <rect x="1" y="15" width="24" height="2" rx="1" stroke="white" strokeWidth="2" />
                     </svg>
                  </button>
                  <div>
                     <ul className="font-poppins text-[22px] font-[700] flex flex-row  text-white ">
                        <li className="px-[46.62px] items-center">
                           <a href="">Dokter Area</a>{' '}
                        </li>
                     </ul>
                  </div>
               </div>
               <div>
                  <p className="font-poppins text-[22px] text-white font-[700] float-right mr-9">Hai, Dokter</p>
               </div>
            </div>
            {isSidebarOpen && (
               <div className="fixed w-[456px] top-0 left-0 h-full overflow-hidden">
                  <Sidebar />
               </div>
            )}
         </nav>
      </>
   );
};

export default NavbarDokter;
