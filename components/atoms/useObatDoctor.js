import { atom, useAtom } from "jotai";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import Cookies from "js-cookie";

export const namaObatAtom = atom([]);
export const dataDrugsAtom = atom(["Fluoxetine", "Alprazolam", "Sertraline", "Lorazepam", "Antidepresan"]);

const fetcher = (url) =>
   fetch(url, {
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + Cookies.get("doctorToken"),
      },
      method: "GET",
   }).then((res) => res.json());

export function getDrugs() {
   const [dataDrugs, setDataDrugs] = useAtom(dataDrugsAtom);

   const { data, error } = useSWR("http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/doctor/drugs", fetcher, {
      onSuccess: (data) => {
         setDataDrugs(data);
      },
      onError: (error) => {
         console.log(error);
      },
   });

   return {
      dataDrugs,
      error,
      isLoading: !error && !data,
   };
}

const sendObatRequest = (url, { arg }) =>
   fetch(url, {
      headers: {
         "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(arg),
   }).then((res) => res.json());

export function useObatDoctor() {
   const [namaObat, setNamaObat] = useAtom(namaObatAtom);
   const { trigger, isMutating, data, error } = useSWRMutation("http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/doctor/recipt", sendObatRequest);

   return {
      data,
      error,
      isObatLoading: isMutating,
      triggerObat: ({ id, nama, jumlah }) => trigger({ id: id, nama: nama, jumlah: jumlah }),
   };
}
