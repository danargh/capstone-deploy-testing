import { atom, useAtom } from "jotai";

export const allDoctorAtom = atom(false);
export const searchQueryAtom = atom("");

const useAllDoctor = () => {
   const [allDoctor, setAllDoctor] = useAtom(allDoctorAtom);

   const handleAllDoctor = () => {
      setAllDoctor(!allDoctor);
   };

   return {
      allDoctor,
      handleAllDoctor,
   };
};

export default useAllDoctor;
