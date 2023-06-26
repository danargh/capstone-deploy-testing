import { atom, useAtom } from "jotai";
import useSWR, { mutate } from "swr";
import Cookies from "js-cookie";

export const dataDoctorAtom = atom(null);

const fetcher = async (url) => {
   const token = Cookies.get("adminToken");
   return fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());
};

export function useAkunDoctor() {
   const [dataDoctor, setDataDoctor] = useAtom(dataDoctorAtom);
   const { data, error } = useSWR("https://capstone-project.duckdns.org:8080/admin/doctors", fetcher, {
      onSuccess: (data) => {
         setDataDoctor(data);
      },
      onError: (error) => {
         setError(error);
      },
   });
   return { dataDoctor, error };
}
