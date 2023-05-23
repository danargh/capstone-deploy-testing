"use client"
import React,  { useState } from 'react';
import ReactQuill from 'react-quill';

export const TextAreaArtikel = () =>{
    return(
        <div>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment"></textarea>
        </div>
    )
}

export const TextAreaContact = () =>{
    return(
        <div>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tuliskan Pesanmu Disini..."></textarea>
        </div>
    )
}

export const TextAreaPesan = () =>{
    return(
        <div>
            <label>Pesan</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
        </div>
    )
}

export const TextAreaQuill = () => {
    const [value, setValue] = useState('');
    return(
        <div>
            <ReactQuill className='border-2' theme="snow" value={value} onChange={setValue} />
        </div>
    )
}