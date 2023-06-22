'use client';
import React from 'react';
import AvatarSquare from '@/components/ui/AvatarSquare';
import Badge from '@/components/ui/Badge';
import dokterProfile from '@/public/assets/images/dokter.png';
import garudaUrl from '@/public/assets/images/detail-dokter.png';
import graduationUrl from '@/public/assets/icons/mdi_graduation-cap.svg';
import mapUrl from '@/public/assets/icons/ic_round-maps-home-work.svg';

import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import useSWR from 'swr';

// Data dokter
// const dokterData = [
//    {
//       nama: "Fauzan Hakim M.Psi, Psikolog",
//       jenisDokter: "Psikolog Klinis",
//       spesialis: "Trauma, Depresi, Gangguan Kecemasan, Gangguan Kepribadian",
//       alumnus: ["Universitas Pajajaran, 2019", "Universitas Airlangga, 2016"],
//       praktik: "Soerojo Hospital Magelang, Jawa Tengah",
//       noSTR: "14248822203190653321",
//    },
//    // Tambahkan data dokter lainnya di sini
// ];
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function page({ params }) {
   const id = params.id;
   const { data, error } = useSWR(`https://capstone-project.duckdns.org:8080/doctor/${id}`, fetcher);

   if (error) return <div>Gagal memuat data...</div>;
   if (!data || !data.doctor) return <div>Memuat data...</div>;
   return (
      <>
         <Navbar />
         <div className="mx-auto  max-w-[1440px]">
            <div className="  mt-[100px] mb-[50px] flex flex-col items-center">
               <div className="relative inline-block mt-9  ">
                  <AvatarSquare image={data.doctor.propic} round={20} width={190} height={192} />
                  <Badge status={data.doctor.status_online ? 'online' : 'offline'} />
               </div>
               <span className="font-poppins text-lg font-semibold text-center mt-3.5 mb-10">{data.doctor.full_name}</span>
               <span className="font-poppins text-lg text-center mt-3.5">{data.doctor.specialist}</span>
               <span className="font-poppins text-lg text-center mt-2">{data.doctor.jurusan}</span>
            </div>
            <div className="flex " style={{ marginLeft: 360 }}>
               <Image src={graduationUrl} alt=" Icon" />
               <div className="flex flex-col ml-5 ">
                  <p className="font-semibold text-lg">Alumnus</p>
                  <p>{data.doctor.alumnus}</p>
               </div>
            </div>
            <div className="flex  " style={{ marginLeft: 360 }}>
               <Image src={mapUrl} alt=" Icon" />
               <div className="flex flex-col ml-5 ">
                  <p className="font-semibold text-lg">Praktik di</p>
                  <p>{data.doctor.practice_address}</p>
               </div>
            </div>
            <div className="mb-[100px] flex " style={{ marginLeft: 360 }}>
               <Image src={garudaUrl} alt=" Icon" style={{ width: 89, height: 96.42 }} />
               <div className="flex flex-col ml-5 ">
                  <p className="font-semibold text-lg">No STR</p>
                  <p>{data.doctor.str_number}</p>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
