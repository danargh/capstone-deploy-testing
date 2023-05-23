import React from 'react';
import AvatarSquare from '@/components/ui/AvatarSquare';
import Badge from '@/components/ui/Badge';
import dokterProfile from 'public/assets/images/dokter.png';
import garudaUrl from 'public/assets/images/detail-dokter.png';
import graduationUrl from '../../public/assets/icons/mdi_graduation-cap.svg';
import mapUrl from '../../public/assets/icons/ic_round-maps-home-work.svg';

import Image from 'next/image';

export default function page() {
   return (
      <>
         <div className="flex flex-col items-center">
            <div className="relative inline-block mt-9">
               <AvatarSquare image={dokterProfile} round={20} width={190} height={192} />
               <Badge status={'online'} />
            </div>
            <span className="font-poppins text-lg font-semibold text-center mt-3.5 mb-10">Fauzan Hakim M.Psi, Psikolog</span>
            <span className="font-poppins text-lg text-center mt-3.5">Psikolog Klinis</span>
            <span className="font-poppins text-lg text-center mt-2">Trauma, Depresi, Gangguan Kecemasan, Gangguan Kepribadian</span>
         </div>
         <div className="flex items-center " style={{ marginLeft: 360 }}>
            <Image src={graduationUrl} alt=" Icon" />
            <div className="flex flex-col ml-5 ">
               {' '}
               <p className="font-semibold text-lg">Alumnus</p>
               <p>Universitas Pajajaran, 2019</p>
               <p>Universitas Airlangga, 2016</p>
            </div>
         </div>
         <div className="flex items-center " style={{ marginLeft: 360 }}>
            <Image src={mapUrl} alt=" Icon" />
            <div className="flex flex-col ml-5 ">
               {' '}
               <p className="font-semibold text-lg">Praktik di</p>
               <p>Soerojo Hospital Magelang, Jawa Tengah</p>
            </div>
         </div>
         <div className="flex items-center mb-8" style={{ marginLeft: 360 }}>
            <Image src={garudaUrl} alt=" Icon" style={{ width: 89, height: 96.42 }} />
            <div className="flex flex-col ml-5 ">
               {' '}
               <p className="font-semibold text-lg">No STR</p>
               <p>14248822203190653321</p>
            </div>
         </div>
      </>
   );
}
