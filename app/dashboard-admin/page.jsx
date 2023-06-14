import { AdminArtikelIcon, AdminArtikelTinjauIcon, AdminArtikelUnggahIcon, AdminDokterIcon, AdminDokterRegisterIcon, AdminUserIcon } from "@/public/assets/icons/icons";
import React from "react";

export default function page() {
   return (
      <>
         <div className="bg-[#F8FFF1] h-screen w-screen">
            <div className=" pl-[313px] max-w-full max-h-[1080px] mx-auto">
               <div className="flex">
                  <div className=" pl-[68px]">
                     <p className="pt-[57px] font-poppins font-bold text-[#577536] text-lg">Dashboard</p>
                     <div className="mt-[51px] flex">
                        <div className="w-[384px] h-[373px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminDokterIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah dokter Terverifikasi</p>
                           <p className="font-normal text-center text-sm mt-[23px]">3.257 dokter</p>
                        </div>
                        <div className="w-[384px] h-[373px] mx-[58px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminDokterRegisterIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah register dokter</p>
                           <p className="font-normal text-center text-sm mt-[23px]">50 dokter</p>
                        </div>
                     </div>

                     <div className="mt-[65px] flex">
                        <div className="w-[384px] h-[373px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminArtikelUnggahIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel terunggah</p>
                           <p className="font-normal text-center text-sm mt-[23px]">1.000 Artikel</p>
                        </div>
                        <div className="w-[384px] h-[373px] mx-[58px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminArtikelTinjauIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel ditinjau</p>
                           <p className="font-normal text-center text-sm mt-[23px]">150 Artikel</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
