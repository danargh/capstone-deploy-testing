'use client';
import { button_variants, text_variants_inter, text_variants_poppins } from '../custom/custom';
import React, { useState } from 'react';

function Accordion() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div className={button_variants({ variant: 'default', size: 'full' })}>
            <button onClick={() => setIsOpen(!isOpen)} className="text-lg leading-6 font-medium text-gray-900">
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  Accordion Button{' '}
                  <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
               </div>
            </button>
         </div>
         {isOpen && (
            <div className="px-4 py-5 sm:px-6">
               <p className="text-sm leading-5 text-gray-500">Ini adalah konten accordion.</p>
            </div>
         )}
      </>
   );
}

export default Accordion;
