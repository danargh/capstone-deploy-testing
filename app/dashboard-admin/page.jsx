import SidebarAdmin from "@/components/ui/SidebarAdmin";
import { AdminArtikelIcon, AdminArtikelTinjauIcon, AdminArtikelUnggahIcon, AdminDokterIcon, AdminDokterRegisterIcon, AdminUserIcon } from "@/public/assets/icons/icons";
import React from "react";

export default function page() {
   return (
      <>
         <SidebarAdmin>
            <div className="bg-[#F8FFF1] pl-[313px] max-w-full h-screen mx-auto">
               <div className="flex">
                  <div className=" pl-[68px]">
                     <p className="pt-[57px] font-poppins font-bold text-[#577536] text-lg">Dashboard</p>

                     <input type="text" className="w-[640px] h-[50px] mt-[39px]" placeholder="Pencarian"></input>
                     <button className="bg-[#8EBF59] py-[13.5px] px-[23px]">Cari</button>

                     <div className="mt-[51px] flex">
                        <div className="w-[293px] h-[299px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[66px] pt-[10px]">
                              <AdminDokterIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah dokter</p>
                           <p className="font-normal text-center text-sm mt-[23px]">3.257 dokter</p>
                        </div>
                        <div className="w-[293px] h-[299px] mx-[58px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[66px] pt-[10px]">
                              <AdminUserIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah pengguna</p>
                           <p className="font-normal text-center text-sm mt-[23px]">3.307 Pengguna</p>
                        </div>
                        <div className="w-[293px] h-[299px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[66px] pt-[10px]">
                              <AdminDokterRegisterIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah register dokter</p>
                           <p className="font-normal text-center text-sm mt-[23px]">50 dokter</p>
                        </div>
                     </div>

                     <div className="mt-[65px] flex">
                        <div className="w-[293px] h-[299px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[66px] pt-[10px]">
                              <AdminArtikelUnggahIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel terunggah</p>
                           <p className="font-normal text-center text-sm mt-[23px]">1.000 Artikel</p>
                        </div>
                        <div className="w-[293px] h-[299px] mx-[58px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[66px] pt-[10px]">
                              <AdminArtikelTinjauIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel ditinjau</p>
                           <p className="font-normal text-center text-sm mt-[23px]">150 Artikel</p>
                        </div>
                        <div className="w-[293px] h-[299px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[66px] pt-[10px]">
                              <AdminArtikelIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel</p>
                           <p className="font-normal text-center text-sm mt-[23px]">1.200 Artikel</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </SidebarAdmin>
      </>
   );
}
