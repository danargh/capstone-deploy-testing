import React from "react";

export default function AllDoctor({ doctor_list }) {
   return (
      <>
         <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
            {doctor_list.map((doctor_list) => (
               <>
                  <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                  </div>

                  <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                  </div>

                  <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                  </div>

                  <div className="flex flex-row gap-[45px] items-center justify-start shrink-0 relative">
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                     <DoctorCard
                        image={doctor_list.image}
                        name={doctor_list.name}
                        title={doctor_list.title}
                        work_time={doctor_list.work_time}
                        href={doctor_list.href}
                     />
                  </div>
               </>
            ))}
         </div>
      </>
   );
}
