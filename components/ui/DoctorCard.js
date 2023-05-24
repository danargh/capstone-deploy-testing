import React from 'react';
import Image from 'next/image';
import { DetailDokter } from './Button';
import { redirect } from 'next/navigation';

export default function DoctorCard({image, name, title, work_time, href }) {

    // THE HREF SHOULD ALWAYS START WITH '/' ! 
    const button_redirect =  (e) => {
        redirect({href})
    }
  return (
    <div
      className="bg-neutral-0 rounded-[5px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-row gap-1.5 items-center justify-center shrink-0 w-[374px] h-[145px] relative"
    >
      <Image src={image} alt='doctor' width={129} height={146} className="flex-1 h-[146px] w-[129px] relative" />

      <div className="flex flex-col gap-[26px] items-start justify-start shrink-0 relative">
        <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
            <div
              className="font-poppins font-[500] text-[16px] text-neutral-900 text-left relative w-[239px]"
            >
              {name}
            </div>

            <div
              className="font-poppins font-normal text-[14px] text-neutral-900/50 text-left relative w-[102.45px] whitespace-nowrap"
            >
              {title}
            </div>
          </div>

          <div className="bg-[#d8d8d8] rounded pt-1 pr-[5px] pb-1 pl-[5px] flex flex-row gap-[3px] items-center justify-center shrink-0 w-[61px] h-5 relative">
            
            <div
              className="font-poppins font-normal text-[8px] text-neutral-900 text-left relative"
            >
              {work_time} Tahun
            </div>
          </div>
        </div>
        {/* <DetailDokter /> */}
      </div>
    </div>
  )
}
