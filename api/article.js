import useSWR, { mutate } from "swr";

// Fix Later

const authToken = "lorem ipsum";
export const fetcher = (url) =>
   fetch(url, {
      headers: {
         Authorization: 
            `Bearer ${authToken}`,
      },
   }).then((res) => res.json());
