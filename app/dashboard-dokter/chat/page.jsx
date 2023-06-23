"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
   createReceipt,
   receiptAtom,
} from "@/components/atoms/useCreateReceipt";
import Link from "next/link";
import { useAtom } from "jotai";
import ChatSidebar from "./chatSidebar";
import Chat from "./chat";
import Action from "./action";

export default function Page() {
   const [selectedFile, setSelectedFile] = useState(null);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [selectedUser, setSelectedUser] = useState("0");
   const [newMessage, setNewMessage] = useState("");
   const {
      triggerCreateReceipt,
      error: errorCreateReceipt,
      isReceiptLoading,
   } = createReceipt();
   const [receipt, setReceipt] = useAtom(receiptAtom);

   const receiptLocal = receipt;

   const handleInputChange = (e) => {
      setNewMessage(e.target.value);
   };
   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
   };

   const handleClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   const [users, setUsers] = useState([
      {
         id: "1",
         nama: "rudi",
         chat: [
            { message: "Hola", type: "user" },
            { message: "Hola", type: "doctor" },
            { message: "?", type: "user" },
            { message: "ko", type: "doctor" },
         ],
      },
   ]);
   const handleUserClick = (id) => {
      setSelectedUser(id);
   };
   //    const handleSendMessage = (e) => {
   //       e.preventDefault();

   //       const updatedUsers = users.map((user) => {
   //          if (newMessage === "" && selectedFile === "") {
   //             return user;
   //          } else {
   //             if (user.id === selectedUser) {
   //                console.log(selectedFile);
   //                if (selectedFile !== null) {
   //                   return {
   //                      ...user,
   //                      chat: [
   //                         ...user.chat,
   //                         { message: selectedFile, type: "sent" },
   //                      ],
   //                   };
   //                } else {
   //                   return {
   //                      ...user,
   //                      chat: [
   //                         ...user.chat,
   //                         { message: newMessage, type: "sent" },
   //                      ],
   //                   };
   //                }
   //             }
   //          }
   //          return user;
   //       });

   //       setUsers(updatedUsers);
   //       setNewMessage("");
   //    };

   const handleSendObat = async (e) => {
      e.preventDefault();
      let updatedUsers;
      try {
         // await triggerCreateReceipt(receiptLocal);
         const messageObat = `Obat yang direkomendasikan : \n ${receipt.join(
            ",\n"
         )}, semoga cepat sembuh :)`;
         updatedUsers = users.map((user) => {
            if (user.id === selectedUser) {
               return {
                  ...user,
                  chat: [...user.chat, { message: messageObat, type: "sent" }],
               };
            }
            return user;
         });
      } catch (error) {
         console.log(error);
      }
      setReceipt([]);
      setUsers(updatedUsers);
      setNewMessage("");
   };

   // Websocket Starts here ---- Cleaning the code above will take a lot of time

   const [chatHistory, setChatHistory] = useState([]);

   const socket = useRef(null);

   useEffect(() => {
      const createSocket = () => {
         const socket = new WebSocket("ws://localhost:8080");

         // Event listener for WebSocket connection establishment
         socket.addEventListener("open", () => {
            console.log("WebSocket connection established");
         });

         // Event listener for receiving messages from the server
         socket.addEventListener("message", (event) => {
            const receivedMessage = JSON.parse(event.data);
            setChatHistory((prevChatHistory) => [
               ...prevChatHistory,
               receivedMessage,
            ]);
         });

         // Event listener for WebSocket disconnections
         socket.addEventListener("close", () => {
            console.log("WebSocket connection closed");
         });

         return socket;
      };

      // Only create a new socket if the previous one is not defined
      if (!socket.current) {
         socket.current = createSocket();
      }

      return () => {
         // Close the WebSocket connection when the component is unmounted
         if (socket.current) {
            socket.current.close();
         }
      };
   }, [socket]);

   const handleSendMessage = (e) => {
      e.preventDefault();
      if (newMessage.trim() === "") return;

      // Send the message to the WebSocket server
      const messageToSend = {
         "to": 1,
         "message": newMessage,
         "type": "doctor",
      };
      socket.current.send(JSON.stringify(messageToSend));
   };
   return (
      <>
         {receiptLocal.length !== 0 ? (
            <div className="rounded-2xl shadow-xl flex flex-col justify-between font-inter font-[600] text-[24px] leading-[30px] absolute left-0 right-0 top-[296px] w-[811px] min-h-[482px] bg-white mx-auto py-[55px] px-[52px]">
               <h3>Obat yang Diinformasikan</h3>
               <ul className="my-[32px]">
                  {receiptLocal.map((obat, index) => (
                     <li
                        key={index}
                        className="border-2 border-black pt-[10px] pl-[10px] pb-[42px]"
                     >
                        {obat}
                     </li>
                  ))}
               </ul>
               <div className="flex justify-center gap-[48px] text-white">
                  <button
                     onClick={() => {
                        setReceipt([]);
                     }}
                     className="bg-[#858585] py-[14px] px-[58px] rounded-xl"
                  >
                     Kembali
                  </button>
                  <button
                     onClick={handleSendObat}
                     className="bg-[#8EBF59] py-[14px] px-[58px] rounded-xl"
                  >
                     Kirim
                  </button>
               </div>
            </div>
         ) : (
            ""
         )}

         <div className="flex mx-auto">
            <ChatSidebar users={users} handleUserClick={handleUserClick} />
            <div className="flex-grow">
               <div className="flex justify-between py-7 px-4 bg-web-green-75 text-xl font-bold">
                  {users[selectedUser].nama}
                  <div className="relative">
                     <button
                        onClick={handleClick}
                        className="flex justify-between items-center gap-7 bg-web-green-300 rounded-full w-[148px]  px-4 py-2"
                     >
                        <svg
                           width="14"
                           height="4"
                           viewBox="0 0 14 4"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M7 3.5C7.27689 3.5 7.54757 3.41203 7.7778 3.2472C8.00803 3.08238 8.18747 2.84811 8.29343 2.57402C8.39939 2.29994 8.42712 1.99834 8.3731 1.70736C8.31908 1.41639 8.18574 1.14912 7.98995 0.939341C7.79416 0.729562 7.5447 0.586701 7.27313 0.528823C7.00155 0.470945 6.72006 0.50065 6.46424 0.614181C6.20843 0.727713 5.98978 0.919972 5.83594 1.16665C5.68211 1.41332 5.6 1.70333 5.6 2C5.6 2.39782 5.7475 2.77935 6.01005 3.06066C6.2726 3.34196 6.6287 3.5 7 3.5ZM1.4 0.500001C1.67689 0.500001 1.94757 0.587974 2.1778 0.752796C2.40803 0.917618 2.58747 1.15189 2.69343 1.42598C2.79939 1.70006 2.82712 2.00166 2.7731 2.29264C2.71908 2.58361 2.58574 2.85088 2.38995 3.06066C2.19416 3.27044 1.9447 3.4133 1.67313 3.47118C1.40155 3.52906 1.12006 3.49935 0.864243 3.38582C0.608427 3.27229 0.389776 3.08003 0.235942 2.83335C0.0821085 2.58668 0 2.29667 0 2C0 1.60218 0.1475 1.22065 0.41005 0.939341C0.672601 0.658036 1.0287 0.500001 1.4 0.500001ZM12.6 3.5C12.3231 3.5 12.0524 3.41203 11.8222 3.2472C11.592 3.08238 11.4125 2.84811 11.3066 2.57402C11.2006 2.29994 11.1729 1.99834 11.2269 1.70736C11.2809 1.41639 11.4143 1.14912 11.6101 0.939341C11.8058 0.729562 12.0553 0.586701 12.3269 0.528823C12.5984 0.470945 12.8799 0.50065 13.1358 0.614181C13.3916 0.727713 13.6102 0.919972 13.7641 1.16665C13.9179 1.41332 14 1.70333 14 2C14 2.39782 13.8525 2.77935 13.5899 3.06066C13.3274 3.34196 12.9713 3.5 12.6 3.5Z"
                              fill="white"
                           />
                        </svg>
                        <div className="text-neutral-0 text-xs">Action</div>
                     </button>
                     <Action isDropdownOpen={isDropdownOpen} />
                  </div>
               </div>
               <div className="h-[70vh] overflow-y-auto">
                  <Chat message={chatHistory} />
               </div>

               <div className="flex-grow px-2">
                  <div className="flex items-center justify-between bg-web-green-75 px-3 py-2">
                     <form onSubmit={handleSendMessage} className="flex w-full">
                        <div className="flex items-center gap-3 w-full h-auto">
                           <div>
                              <label
                                 htmlFor="file-input"
                                 className="cursor-pointer relative"
                              >
                                 {selectedFile ? (
                                    <>
                                       <div className="absolute z-10 bottom-10 p-3 border border-black w-[200px]">
                                          <img
                                             src={URL.createObjectURL(
                                                selectedFile
                                             )}
                                             alt={selectedFile.name}
                                             className="selected-image   "
                                          />
                                       </div>

                                       <div className="line-clamp-1 w-24">
                                          {" "}
                                          {selectedFile.name}
                                       </div>
                                    </>
                                 ) : (
                                    <svg
                                       width="24"
                                       height="25"
                                       viewBox="0 0 24 25"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <rect
                                          y="0.5"
                                          width="24"
                                          height="24"
                                          rx="5"
                                          fill="#769E4B"
                                       />
                                       <path
                                          d="M21.6869 17.6972L18.67 11.3628C18.1206 10.2032 17.3013 9.54553 16.3664 9.50226C15.4411 9.45899 14.5447 10.0388 13.8603 11.1464L12.029 14.0973C11.6434 14.7204 11.094 15.0925 10.4964 15.1358C9.88918 15.1877 9.28194 14.9021 8.79037 14.3396L8.57832 14.0973C7.89397 13.3272 7.04577 12.9551 6.17829 13.033C5.31081 13.1108 4.56863 13.6474 4.07706 14.5214L2.40957 17.5069C1.81197 18.5886 1.8698 19.8433 2.57343 20.8645C3.27705 21.8856 4.50116 22.5 5.84094 22.5H18.1399C19.4315 22.5 20.6363 21.9202 21.3496 20.951C22.0821 19.9818 22.1978 18.7616 21.6869 17.6972Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M7.09833 11.6967C8.8095 11.6967 10.1966 10.3095 10.1966 8.59833C10.1966 6.88717 8.8095 5.5 7.09833 5.5C5.38717 5.5 4 6.88717 4 8.59833C4 10.3095 5.38717 11.6967 7.09833 11.6967Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M19 6.7549H17.2941V8.5H15.7059V6.7549H14V5.2549H15.7059V3.5H17.2941V5.2549H19V6.7549Z"
                                          fill="white"
                                       />
                                    </svg>
                                 )}
                              </label>

                              <input
                                 id="file-input"
                                 className="hidden"
                                 type="file"
                                 onChange={handleFileChange}
                              />
                           </div>

                           <input
                              type="text "
                              placeholder="Tulis pesan anda"
                              className="outline-none bg-transparent text-xs px-4 w-full h-auto resize-none"
                              value={newMessage}
                              onChange={handleInputChange}
                           />
                        </div>
                        <label htmlFor="chat-submit" className="cursor-pointer">
                           <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <rect
                                 width={25}
                                 height={25}
                                 rx={5}
                                 fill="#769E4B"
                              />
                              <mask
                                 id="mask0_1618_19880"
                                 style={{ maskType: "luminance" }}
                                 maskUnits="userSpaceOnUse"
                                 x={0}
                                 y={0}
                                 width={25}
                                 height={25}
                              >
                                 =======
                                 <path d="M25 0H0V25H25V0Z" fill="white" />
                              </mask>
                              <g mask="url(#mask0_1618_19880)">
                                 <path
                                    d="M5.20861 12.5L4.57933 6.83641C4.3992 5.21527 6.06766 4.0253 7.54177 4.72355L19.9838 10.6171C21.5725 11.3696 21.5725 13.6303 19.9838 14.3828L7.54177 20.2763C6.06766 20.9746 4.3992 19.7846 4.57933 18.1635L5.20861 12.5ZM5.20861 12.5H12.5003"
                                    stroke="white"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </g>
                           </svg>
                        </label>
                        <input
                           type="submit"
                           id="chat-submit"
                           className="hidden"
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
