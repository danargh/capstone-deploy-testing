import useSWR, { mutate } from "swr";
import AWSLink from "./awslink";

// Fix Later
const fetcher = async (url, token) =>
   fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());

export default function ArticleAdminAPI() {
   // Define the endpoint
   const { awslink, token } = AWSLink();

   const articleEndpoint = `${awslink}/admin/articles`;

   //Fetch the datas
   const {
      data: articleData,
      error: articleError,
      mutate: articleMutate,
   } = useSWR(articleEndpoint, () => fetcher(articleEndpoint, token), {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
   });

   return {
      articleData,
      articleError,
      articleMutate,
      articleEndpoint,
      token,
   };
}
