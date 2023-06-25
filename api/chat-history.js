"use client";

import { useEffect } from "react";
import useSWR from "swr";
import AWSLink from "./awslink";

// Fix Later
const fetcher = async (url, token) =>
   fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());

export default function ChatHistoryAPI() {
   // Define the endpoint
   const { awslink, doctortoken } = AWSLink();

   const chatHistoryEndpoint = `${awslink}/chathistory/23`;

   //Fetch history
   const { data: fetchedchatHistoryData, error: chatHistoryError } = useSWR(
      chatHistoryEndpoint,
      () => fetcher(chatHistoryEndpoint, doctortoken),
      {
         revalidateOnFocus: false,
         revalidateOnReconnect: false,
      }
   );

   const chatHistoryData = fetchedchatHistoryData?.chat;

   return {
      chatHistoryData,
      chatHistoryError,
   };
}
