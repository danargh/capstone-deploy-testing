import { atom, useAtom } from "jotai";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import Cookies from "js-cookie";

export const dataDrugsAtom = atom([]);

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

   const { data, error } = useSWR("https://capstone-project.duckdns.org:8080/doctor/drugs", fetcher, {
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
