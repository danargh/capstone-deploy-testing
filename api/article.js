import { atom, useAtom } from "jotai";
import useSWR, { mutate } from "swr";

// Fix Later

const authToken = atom("loremIpsum");

export const fetcher = (url) =>
   fetch(url, {
      headers: {
         Authorization: 
            `Bearer ${authToken}`,
      },
   }).then((res) => res.json());
