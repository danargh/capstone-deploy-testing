import ChatSidebar from "./chatSidebar";

export default function Page() {
   return (
      <>
         <div className="flex mx-auto">
            <ChatSidebar />
            <div className="flex-grow">
               <div className="flex justify-between py-7 px-4 bg-web-green-75 text-xl font-bold">
                  <div></div>
                  <div className="relative cursor-not-allowed">
                     <div className="flex justify-between items-center gap-7 bg-web-green-300 rounded-full w-[148px]  px-4 py-2">
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
                     </div>
                  </div>
               </div>
               <div className="h-[70vh] overflow-y-auto"></div>

               <div className="flex-grow px-2">
                  <div className="flex items-center justify-between bg-web-green-75 px-3 py-2">
                     <div className="flex w-full">
                        <div className="flex items-center gap-3 w-full h-auto">
                           <div>
                              <label
                                 htmlFor="file-input"
                                 className="cursor-not-allowed relative"
                              ></label>

                              <input
                                 id="file-input"
                                 className="hidden"
                                 type="file"
                                 disabled
                              />
                           </div>

                           <input
                              id="message-input"
                              type="text"
                              placeholder="Tulis pesan anda"
                              className="outline-none bg-transparent text-xs px-4 w-full h-auto resize-none"
                           />
                        </div>
                        <label
                           htmlFor="chat-submit"
                           className="cursor-not-allowed"
                        >
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
