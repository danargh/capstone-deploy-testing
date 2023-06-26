"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ordersDoctorAPI from "@/api/all-order";
import Cookies from "js-cookie";

export default function ChatSidebar() {
   // Define the Variables
   const router = useRouter();
   const { doctorOrders } = ordersDoctorAPI();

   // Filter chat that hadn't been completed yet
   const unfinishedOrders = doctorOrders?.data.filter(
      (user, index, self) =>
         user.status !== "selesai" &&
         user.method === "chat" &&
         self.findIndex((u) => u.user_id === user.user_id) === index // Prevents duplication
   );

   // Save the user ID then go to the chatroom
   const handleUserClick = (id) => {
      const selectedUser = unfinishedOrders.find((user) => user.user_id === id);
      Cookies.set("selectedUser", JSON.stringify(selectedUser));
      router.push(`/dashboard-dokter/chat/${id}`);
   };

   return (
      <div className="min-w-[353px] h-[89vh] overflow-y-auto">
         <div className="px-5 py-7 bg-web-green-75 text-xl font-bold">Chat</div>

         {unfinishedOrders?.map((user) => (
            <UserContact
               key={user.user_id}
               id={user.user_id}
               nama={user.user_name}
               onClick={handleUserClick}
            />
         ))}
      </div>
   );
}

const UserContact = ({ id, nama, onClick }) => {
   return (
      <>
         <div
            id="user-selection"
            className="flex bg-neutral-10 px-5 py-2 items-center hover:bg-web-green-50 cursor-pointer"
            onClick={() => onClick(id)}
         >
            <div>
               <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g clipPath="url(#clip0_1618_19825)">
                     <rect width="80" height="80" rx="40" fill="#8EBF59" />
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M58 26.5C58 31.2739 56.1036 35.8523 52.7279 39.2279C49.3523 42.6036 44.7739 44.5 40 44.5C35.2261 44.5 30.6477 42.6036 27.2721 39.2279C23.8964 35.8523 22 31.2739 22 26.5C22 21.7261 23.8964 17.1477 27.2721 13.7721C30.6477 10.3964 35.2261 8.5 40 8.5C44.7739 8.5 49.3523 10.3964 52.7279 13.7721C56.1036 17.1477 58 21.7261 58 26.5ZM49 26.5C49 28.8869 48.0518 31.1761 46.364 32.864C44.6761 34.5518 42.3869 35.5 40 35.5C37.6131 35.5 35.3239 34.5518 33.636 32.864C31.9482 31.1761 31 28.8869 31 26.5C31 24.1131 31.9482 21.8239 33.636 20.136C35.3239 18.4482 37.6131 17.5 40 17.5C42.3869 17.5 44.6761 18.4482 46.364 20.136C48.0518 21.8239 49 24.1131 49 26.5Z"
                        fill="white"
                     />
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40 -9.5C12.6625 -9.5 -9.5 12.6625 -9.5 40C-9.5 67.3375 12.6625 89.5 40 89.5C67.3375 89.5 89.5 67.3375 89.5 40C89.5 12.6625 67.3375 -9.5 40 -9.5ZM-0.5 40C-0.5 49.405 2.7085 58.063 8.086 64.939C11.8625 59.9795 16.7346 55.9604 22.3214 53.1954C27.9083 50.4304 34.0588 48.9946 40.2925 49C46.4455 48.9942 52.5186 50.3929 58.0492 53.0895C63.5798 55.7862 68.4218 59.7097 72.2065 64.561C76.1055 59.4472 78.7308 53.4785 79.865 47.1487C80.9993 40.8188 80.6099 34.3099 78.7292 28.1604C76.8485 22.011 73.5305 16.3977 69.0497 11.7852C64.5689 7.17262 59.0541 3.69337 52.9617 1.63529C46.8693 -0.42279 40.3744 -1.00053 34.0144 -0.0501213C27.6543 0.900285 21.6121 3.35151 16.3875 7.10074C11.1629 10.85 6.90615 15.7894 3.96953 21.5104C1.03291 27.2313 -0.499187 33.5694 -0.5 40ZM40 80.5C30.7028 80.514 21.6862 77.3156 14.476 71.446C17.3782 67.2913 21.241 63.8991 25.7359 61.5581C30.2307 59.217 35.2245 57.9964 40.2925 58C45.2972 57.996 50.2307 59.1861 54.6832 61.4714C59.1357 63.7567 62.9786 67.0714 65.893 71.14C58.6268 77.2002 49.4616 80.5133 40 80.5Z"
                        fill="white"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_1618_19825">
                        <rect width="80" height="80" rx="40" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
            </div>
               <div className="ps-5 flex flex-col gap-1">
                  <div className="text-lg font-medium truncate">{nama}</div>
               </div>
         </div>
      </>
   );
};
