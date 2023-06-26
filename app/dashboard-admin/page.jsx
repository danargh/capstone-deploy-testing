"use client";

import { AdminArtikelIcon, AdminArtikelTinjauIcon, AdminArtikelUnggahIcon, AdminDokterIcon, AdminDokterRegisterIcon, AdminUserIcon } from "@/public/assets/icons/icons";
import React from "react";
import ArticleAdminAPI from "@/api/article-admin";
import { useAkunDoctor } from "@/components/atoms/useAkunDoctor";
import { motion } from "framer-motion";

export default function page() {
   const { articleData, articleError } = ArticleAdminAPI();
   const { dataDoctor, error } = useAkunDoctor();

   const artikelTerunggah = articleData?.data?.filter((item) => item.status === "disetujui");
   const artikelDitinjau = articleData?.data?.filter((item) => item.status === "ditinjau");
   const doctorTerverifikasi = dataDoctor?.doctors?.filter((item) => item.status === "approved");

   return (
      <>
         <motion.div whileInView={{ x: [30, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="bg-[#F8FFF1] h-screen w-screen">
            <div className=" pl-[313px] max-w-full max-h-[1080px] mx-auto">
               <div className="flex">
                  <div className="pl-[68px]">
                     <p className="pt-[57px] font-poppins font-bold text-[#577536] text-lg">Dashboard</p>
                     <div className="mt-[51px] flex">
                        <motion.div whileHover={{ transition: 1, scale: 1.05 }} className="w-[384px] h-[373px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminDokterIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah dokter Terverifikasi</p>
                           <p className="font-normal text-center text-sm mt-[23px]">{doctorTerverifikasi?.length} Dokter</p>
                        </motion.div>
                        <motion.div whileHover={{ transition: 1, scale: 1.05 }} className="w-[384px] h-[373px] mx-[58px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminDokterRegisterIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah register dokter</p>
                           <p className="font-normal text-center text-sm mt-[23px]">{dataDoctor?.doctors.length} Dokter</p>
                        </motion.div>
                     </div>

                     <div className="mt-[65px] flex">
                        <motion.div whileHover={{ transition: 1, scale: 1.05 }} className="w-[384px] h-[373px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminArtikelUnggahIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel terunggah</p>
                           <p className="font-normal text-center text-sm mt-[23px]">{artikelTerunggah?.length} Artikel</p>
                        </motion.div>
                        <motion.div whileHover={{ transition: 1, scale: 1.05 }} className="w-[384px] h-[373px] mx-[58px] border-[#63863E] border-[5px] rounded-[15px]">
                           <div className="px-[92px] pt-[10px]">
                              <AdminArtikelTinjauIcon />
                           </div>
                           <p className="font-bold text-center text-sm mt-[30px]">Jumlah artikel ditinjau</p>
                           <p className="font-normal text-center text-sm mt-[23px]">{artikelDitinjau?.length} Artikel</p>
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </>
   );
}
