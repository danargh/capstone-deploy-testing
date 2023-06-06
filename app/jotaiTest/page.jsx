"use client";

import React from "react";
import { useAtom } from "jotai";
import { dataJotai } from "@/store/store";

export default function page() {
   const [data, setData] = useAtom(dataJotai);
   return (
      <div>
         Ini data jotai : {data.dataDokter[0].id} {data.dataDokter[0].nama}
      </div>
   );
}
