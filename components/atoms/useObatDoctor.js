import { atom, useAtom } from "jotai";

export const namaObatAtom = atom([]);

export function useObatDoctor() {
   const [namaObat, setNamaObat] = useAtom(namaObatAtom);

   return {
      namaObat,
      setNamaObat,
   };
}
