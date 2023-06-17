import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogin() {
   return (
      <>
         <div className="w-1/2 bg-[#7CA153] font-poppins text-[16px] font-[700] flex flex-col justify-between">
            <motion.div whileInView={{ x: [-64, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="mt-4">
               <Image className="mx-auto" src="/assets/logo/logo-APP-solo-white.png" alt="login" width={278} height={46} />
               <p className=" text-neutral-0 mt-[20px] text-center">Kesehatan Mental Prioritas Global</p>
            </motion.div>
            <motion.div whileInView={{ y: [64, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
               <Image className="mx-auto" src="/assets/images/login-atribut.png" alt="login" width={525} height={153} />
               <Image className="mx-auto" src="/assets/images/login-dokter.png" alt="login" width={578} height={482} />
            </motion.div>
         </div>
      </>
   );
}
