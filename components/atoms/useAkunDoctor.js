import { atom, useAtom } from 'jotai';
import useSWR, { mutate } from 'swr';
import Cookies from 'js-cookie';

export const dataDoctorAtom = atom(null);

const fetcher = (url) => {
   const token = Cookies.get('adminDoctor');
   return fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());
};

export default function useAkunDoctor() {
   const [dataDoctor, setDataDoctor] = useAtom(dataDoctorAtom);
   useSWR('https://capstone-project.duckdns.org:8080/admin/doctors', fetcher, {
      onSuccess: (data) => {
         setDataDoctor(data.doctors);
      },
      onError: (error) => {
         setError(error);
      },
   });
   return { dataDoctor, error };
}
