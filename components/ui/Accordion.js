'use client';
import { button_variants, text_variants_inter, text_variants_poppins } from '../custom/custom';
import React, { useState } from 'react';

export function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={button_variants({ variant: 'default', size: 'full' })}>
                <button onClick={() => setIsOpen(!isOpen)} className="text-lg leading-6 font-medium text-gray-900">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        Accordion Button{' '}
                        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
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


export function AccordionHelp({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="w-full bg-neutral-40 py-4 px-3 border-b-2  border-gray-400 " onClick={() => setIsOpen(!isOpen)}>
                <div className='w-full px-4 flex justify-between text-lg leading-6 font-semibold text-gray-900'>
                    <p className="leading-8">{question}</p>

                    <svg data-accordion-icon class={`w-6 h-6 ${isOpen ? "rotate-180" : "rotate-0"}  shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>


                </div>
            </button>
            {isOpen && (
                <div className="px-6 py-5 border bg-neutral-40">
                    <p className="text-sm leading-8 text-black">{answer}</p>
                </div>
            )}
        </>
    );
}


