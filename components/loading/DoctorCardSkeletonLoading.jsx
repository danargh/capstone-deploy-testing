import React from "react";

export default function DoctorCardSkeletonLoading() {
  return (
    <div className="bg-neutral-0 rounded-[5px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-row gap-1.5 items-center justify-center shrink-0 w-[374px] h-[145px] relative">
      <div className="bg-[#d1d8c8] animate-pulse w-[129px] h-[146px] flex-1 relative" />

      <div className="h-[134px] flex flex-col pb-[2px] items-start justify-between relative">
        <div className="flex flex-col items-start justify-start relative">
          <div className="flex flex-col gap-1 px-[5px] items-start justify-start relative">
            <div className="font-poppins font-[500] text-xs text-neutral-900 text-left relative w-[239px] bg-[#d1d8c8] animate-pulse h-3" />
            <div className="font-poppins font-normal text-[14px]/[21px] text-neutral-900/50 text-left relative w-[102.45px] whitespace-nowrap bg-[#d1d8c8] animate-pulse h-3" />
          </div>
          <div className="bg-[#d1d8c8] rounded py-1 px-[5px] flex flex-row gap-[3px] items-center justify-center shrink-0 w-[61px] animate-pulse h-5 relative">
            <div className="font-poppins font-normal text-[8px] text-neutral-900 text-left relative bg-[#d1d8c8] animate-pulse h-2 w-[30px]" />
          </div>
        </div>
         <button
          className="font-normal font-poppins text-neutral-0 text-xs/[120%] text-left bg-[#d1d8c8] rounded-xl pt-4 pr-3 pb-4 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[84px] h-[31px] animate-pulse relative"
        disabled
        >
          
        </button>
      </div>
    </div>
  );
}
