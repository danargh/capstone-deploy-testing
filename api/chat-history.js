"use client";

import useSWR from "swr";
import AWSLink from "./awslink";
import Cookies from "js-cookie";

// Fix Later
const fetcher = async (url, token) =>
   fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }).then((res) => res.json());

export default function ChatHistoryAPI() {
   // Define the endpoint
   const selectedUserData = JSON.parse(Cookies.get("selectedUser"));
   const selectedUser = selectedUserData ? selectedUserData.user_id : "";
   const { awslink, doctortoken } = AWSLink();

   const chatHistoryEndpoint = `${awslink}/chathistory/${selectedUser}`;

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
