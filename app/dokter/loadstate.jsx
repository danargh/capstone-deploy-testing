import React from "react";
import DoctorCardSkeletonLoading from "@/components/loading/DoctorCardSkeletonLoading";

export default function Loadstate() {
   return (
      <>
         {[...Array(2).keys()].map((index) => (
            <React.Fragment key={index}>
               <DoctorCardSkeletonLoading />
            </React.Fragment>
         ))}
      </>
   );
}
