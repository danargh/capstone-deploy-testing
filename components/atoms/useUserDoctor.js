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

   const id = Cookies.get("doctorID");

   const { data, error } = useSWR(`https://capstone-project.duckdns.org:8080/doctor/${id}`, fetcher, {
      onSuccess: (data) => {
         setDataDoctorLogged(data);
      },
      onError: (error) => {
         console.log(error);
      },
   });

   return {
      data,
      error,
      isLoading: !error && !data,
   };
}
