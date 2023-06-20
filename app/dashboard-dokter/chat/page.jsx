"use client";

import { useState } from "react";
import Image from "next/image";
import {
   createReceipt,
   receiptAtom,
} from "@/components/atoms/useCreateReceipt";
import Link from "next/link";
import { useAtom } from "jotai";
import ChatSidebar from "./chatSidebar";
import Chat from "./chat";

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
         id: "0",
         nama: "rudi",
         chat: [
            { message: "Hola", type: "received" },
            { message: "Hola", type: "sent" },
            { message: "?", type: "received" },
            { message: "ko", type: "sent" },
         ],
      },
      {
         id: "1",
         nama: "rudix",
         chat: [
            { message: "tes", type: "received" },
            { message: "tes2", type: "received" },
            { message: "tes", type: "sent" },
            { message: "tes2", type: "sent" },
         ],
      },
   ]);
   const handleUserClick = (id) => {
      setSelectedUser(id);
   };
   const handleSendMessage = (e) => {
      e.preventDefault();

      const updatedUsers = users.map((user) => {
         if (newMessage === "" && selectedFile === "") {
            return user;
         } else {
            if (user.id === selectedUser) {
               console.log(selectedFile);
               if (selectedFile !== null) {
                  return {
                     ...user,
                     chat: [
                        ...user.chat,
                        { message: selectedFile, type: "sent" },
                     ],
                  };
               } else {
                  return {
                     ...user,
                     chat: [
                        ...user.chat,
                        { message: newMessage, type: "sent" },
                     ],
                  };
               }
            }
         }
         return user;
      });

      setUsers(updatedUsers);
      setNewMessage("");
   };

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
                     {isDropdownOpen && (
                        <ul className="absolute z-10 right-0 bg-web-green-300 top-12  w-[150px] rounded-3xl">
                           <li>
                              <Link
                                 href="#"
                                 className=" py-3 px-3 flex items-center gap-5 cursor-pointer"
                              >
                                 <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M6.625 6.125L9.12492 8.62492M9.12492 8.62492L11.6249 11.1249M9.12492 8.62492L6.625 11.1249M9.12492 8.62492L11.6249 6.125M9.125 16.125C4.98287 16.125 1.625 12.7672 1.625 8.625C1.625 4.48287 4.98287 1.125 9.125 1.125C13.2672 1.125 16.625 4.48287 16.625 8.625C16.625 12.7672 13.2672 16.125 9.125 16.125Z"
                                       stroke="white"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>
                                 <p className="text-neutral-0 text-xs">
                                    Tutup sesi
                                 </p>
                              </Link>
                           </li>

                           <li>
                              <Link
                                 href="/dashboard-dokter/obat-dokter"
                                 className=" py-3 px-3 flex items-center gap-5 cursor-pointer"
                              >
                                 <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M17.4514 10.1615C16.8154 8.83853 15.7423 7.8363 14.4306 7.27506C15.5833 5.55123 15.3845 3.22606 13.8741 1.74276C13.0394 0.94098 11.9663 0.5 10.8533 0.5H10.8136C9.66091 0.5 8.58773 0.981069 7.75304 1.78285L1.23447 8.51782C0.439526 9.35969 -0.0374428 10.4421 0.00230455 11.6047C0.00230455 12.7673 0.479273 13.8497 1.27422 14.6915C2.10891 15.5334 3.22184 15.9343 4.29502 15.9343C5.24896 15.9343 6.16315 15.6136 6.95809 15.0122C6.99784 15.0523 6.99784 15.1325 7.03759 15.1726C7.99152 17.2171 10.0186 18.5 12.2445 18.5C13.1189 18.5 13.9139 18.2996 14.7088 17.9388C17.5706 16.5356 18.8028 13.088 17.4514 10.1615ZM15.5038 10.1615L8.23001 13.6091C8.03127 12.8474 8.07102 12.0056 8.34925 11.2439C8.70698 10.2016 9.46218 9.35969 10.4559 8.87862C11.0123 8.598 11.6085 8.47773 12.2047 8.47773C13.5164 8.51782 14.7486 9.15924 15.5038 10.1615ZM8.94546 2.94543C9.46218 2.42428 10.0981 2.14365 10.8136 2.14365C11.529 2.14365 12.2047 2.42428 12.7215 2.90534C13.7549 3.94766 13.7946 5.6314 12.7612 6.71381L12.642 6.83408C12.5227 6.83408 12.3637 6.83408 12.2445 6.83408C11.37 6.83408 10.5751 7.03452 9.78016 7.39532C9.38268 7.59577 8.98521 7.8363 8.66723 8.11693L6.28239 5.75167L8.94546 2.94543ZM6.20289 13.4488C5.16946 14.4911 3.50007 14.5312 2.42689 13.4889C1.91018 12.9677 1.63195 12.3263 1.63195 11.6047C1.63195 10.8831 1.91018 10.2016 2.38715 9.6804L5.08997 6.91425L7.51456 9.3196C7.23632 9.72049 6.99784 10.2016 6.7991 10.6826C6.52087 11.4844 6.40163 12.2862 6.48112 13.1281L6.20289 13.4488ZM13.9934 16.4154C13.4369 16.696 12.8407 16.8163 12.2445 16.8163C10.9328 16.8163 9.74041 16.1748 8.94546 15.1726L16.2192 11.7249C16.6564 13.569 15.782 15.5334 13.9934 16.4154Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <p className="text-neutral-0 text-xs">
                                    Resep obat
                                 </p>
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>
               </div>
               <div className="h-[70vh] overflow-y-auto">
                <Chat users={users} selectedUser={selectedUser}/>
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
