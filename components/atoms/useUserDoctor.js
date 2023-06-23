import { atom, useAtom } from "jotai";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import Cookies from "js-cookie";

export const dataDoctorAtom = atom({});

const fetcher = async (url) =>
   fetch(url, {
      headers: {
         "Content-Type": "application/json",
      },
      method: "GET",
   }).then((res) => res.json());

export function getUserDoctor() {
   const [dataDoctorLogged, setDataDoctorLogged] = useAtom(dataDoctorAtom);

   let dataDoctorLocal = "";

   if (typeof window !== "undefined") {
      dataDoctorLocal = JSON.parse(localStorage.getItem("doctorData"));
   }

   const { data, error } = useSWR("https://capstone-project.duckdns.org:8080/doctor/5", fetcher, {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
   });

   return {
      dataDoctorLogged: data,
      error,
      isLoading: !error && !data,
   };
}
