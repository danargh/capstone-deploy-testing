import useSWRMutation from "swr/mutation";
import Cookies from "js-cookie";
import { atom, useAtom } from "jotai";

export const receiptAtom = atom([]);

const fetcher = async (url, { arg }) =>
   fetch(url, {
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + Cookies.get("doctorToken"),
      },
      method: "POST",
      body: JSON.stringify(arg),
   }).then((res) => res.json());

export function createReceipt() {
   const { data, trigger, error, isMutating } = useSWRMutation("https://capstone-project.duckdns.org:8080/doctor/recipt", fetcher);

   return {
      data,
      triggerCreateReceipt: ({ id, nama, jumlah }) => trigger({ id: id, nama: nama, jumlah: jumlah }),
      error,
      isReceiptLoading: isMutating,
   };
}
