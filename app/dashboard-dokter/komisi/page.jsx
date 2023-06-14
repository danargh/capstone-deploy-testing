'use client';
import React from 'react';
import useSWR from 'swr';
import { FilterButton } from '@/components/ui/Button';

import { TabelHistory, TableOrder } from '@/components/ui/Table';

// Membuat fungsi fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

function Page() {
   const { data: dataOrders, error } = useSWR('https://648915770e2469c038fe9b25.mockapi.io/komisi/komisi', fetcher);

   if (error) return <div>Gagal memuat data...</div>;
   if (!dataOrders) return <div>Memuat data...</div>;

   return (
      <>
         <div className=" max-w-[1440px] mx-auto px-[32px] bg-neutral-10 pt-[50px]">
            <h1 className="text-inter text-xl text-white font-bold  mb-[20px] bg-web-green-300 py-4 px-5 rounded-lg">Riwayat Komisi</h1>
            <FilterButton>Filter Data</FilterButton>

            <TabelHistory orders={dataOrders} />
         </div>
      </>
   );
}

export default Page;
