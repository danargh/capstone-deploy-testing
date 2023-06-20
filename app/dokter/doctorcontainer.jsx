"use client";

import React from "react";
import DoctorCard from "@/components/ui/DoctorCard";
import { useAtom } from "jotai";
import { SearchIcon } from "@/public/assets/icons/icons";
import AllDoctor from "./alldoctor";
import {
   allDoctorAtom,
   searchQueryAtom,
} from "@/components/atoms/useAllDoctor";
import FetchAllDoctor from "@/api/all-doctor";
import SkeletonLoader from "./doctor-container/skeletonloader";

export default async function DoctorContainer() {
   const [allDoctor, setAllDoctor] = useAtom(allDoctorAtom);
   const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

   //Fetch the data from API
   const { doctorData } = FetchAllDoctor();
   const doctor_list = doctorData; // im just too lazy to replace.... yea ik just use replace all
   const handleAllDoctor = () => {
      setAllDoctor(!allDoctor);
   };

   const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
   };

   const filteredDoctors = doctor_list?.filter((doctor) => {
      const name = doctor.full_name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return name.includes(query);
   });

   // Randomize the Recommendation
   function RandomizeDoctors(doctor_list, count) {
      const randomIndexes = [];
      while (
         randomIndexes.length < count &&
         randomIndexes.length < doctor_list.length
      ) {
         const randomIndex = Math.floor(Math.random() * doctor_list.length);
         if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
         }
      }
      return randomIndexes;
   }
   const randomDoctorIndex = RandomizeDoctors(doctor_list, 2);
   const randomDoctors = randomDoctorIndex.map((index) => doctor_list[index]);

   return (
      <>
         <div className="flex flex-row items-center justify-start absolute left-[541px] top-[150px]">
            <div className="relative w-[835px]">
               <input
                  type="text"
                  className="font-inter font-normal text-lg text-[rgba(0,0,0,0.55)] text-left bg-neutral-0 rounded-[9px] border-solid border-[#848484] border-2 w-full h-[61px] pl-4 pr-12"
                  placeholder="Cari nama dokter (eq. Fauzan Hakim)"
                  onChange={handleSearchInputChange}
               />
               <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                  <SearchIcon fill="black" onClick={handleAllDoctor} />
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-[45px] items-start justify-start absolute left-[541px] top-[250px]">
            {allDoctor || searchQuery != 0 ? (
               <AllDoctor doctor_list={filteredDoctors} />
            ) : (
               <>
                  <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
                     <div className="flex flex-col gap-[15px] items-start justify-start shrink-0 relative">
                        <div className="font-inter font-[500px] text-lg text-neutral-900 text-left relative w-[254px]">
                           Rekomendasi Dokter
                        </div>

                        <div className="font-inter font-normal text-xs text-[rgba(0,0,0,0.62)] text-left relative w-[301px]">
                           Konsultasi online dengan dokter kami
                        </div>
                     </div>
                     <div className="flex flex-row flex-wrap gap-[45px] items-center justify-start shrink-0 relative">
                        {randomDoctors?.map((doctor_list) => (
                           <React.Fragment key={doctor_list.ID}>
                              <DoctorCard
                                 image={doctor_list.photo}
                                 name={doctor_list.full_name}
                                 title={doctor_list.title}
                                 work_time={doctor_list.work_time}
                                 href={`/detail-dokter/${doctor_list.ID}`}
                              />
                           </React.Fragment>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
                     <div className="font-inter font-[500px] text-lg text-neutral-900 text-left relative w-[254px]">
                        <button onClick={handleAllDoctor}>
                           Dokter Lainnya &gt;
                        </button>
                     </div>

                     <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                        <div className="flex flex-row flex-wrap gap-[45px] items-center justify-start shrink-0 relative">
                           {
                              doctor_list?.slice(0, 4).map((doctor_list) => (
                                 <React.Fragment key={doctor_list.ID}>
                                    <DoctorCard
                                       image={doctor_list.photo}
                                       name={doctor_list.full_name}
                                       title={doctor_list.title}
                                       work_time={doctor_list.work_time}
                                       href={`/detail-dokter/${doctor_list.ID}`}
                                    />
                                 </React.Fragment>
                              ))
                           }
                        </div>
                     </div>
                  </div>
               </>
            )}
         </div>
      </>
   );
}
