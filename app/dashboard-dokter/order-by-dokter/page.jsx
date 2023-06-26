"use client";

import { FilterButton } from "@/components/ui/Button";
import { PaginationOrderDokter } from "@/components/ui/Pagination";
import { TableOrder } from "@/components/ui/Table";
import React, { useState, useEffect } from "react";
import ordersDoctorAPI from "@/api/all-order";

function page() {
   const { doctorOrders, token } = ordersDoctorAPI();
   const orders = doctorOrders ? doctorOrders.data : [];

   const orderLength = orders && orders.length;
   const [orderShow, setOrderShow] = useState("5");
   const [currentPage, setCurentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(orderShow);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   useEffect(() => {
      setPostPerPage(orderShow);
      setCurentPage(1);
   }, [orderShow]);
   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;
   const handleSelectChange = (event) => {
      setOrderShow(event.target.value);
   };

   const handleClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };
   const [orderStatus, setOrderStatus] = useState(true);
   console.log(orderStatus);
   return (
      <>
         <div className=" max-w-[1440px] mx-auto px-[32px]">
            <h1 className="text-inter text-xl font-bold mt-[50px] mb-[20px]">
               Pesanan
            </h1>
            <div className="relative">
               <FilterButton onClick={handleClick}>Filter Data</FilterButton>

               {isDropdownOpen && (
                  <div className="absolute z-10  bg-neutral-20 top-20  w-[400px] rounded-3xl px-7 py-7">
                     <p className="font-bold  text-md">Filter</p>
                     <div className="flex items-center justify-center gap-7 mt-3">
                        <div className=" py-3 px-10 flex rounded-xl items-center flex-col gap-2 cursor-pointer  bg-neutral-40">
                           <svg
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g id="uil:calender">
                                 <path
                                    id="Vector"
                                    d="M19.5 4H17.5V3C17.5 2.73478 17.3946 2.48043 17.2071 2.29289C17.0196 2.10536 16.7652 2 16.5 2C16.2348 2 15.9804 2.10536 15.7929 2.29289C15.6054 2.48043 15.5 2.73478 15.5 3V4H9.5V3C9.5 2.73478 9.39464 2.48043 9.20711 2.29289C9.01957 2.10536 8.76522 2 8.5 2C8.23478 2 7.98043 2.10536 7.79289 2.29289C7.60536 2.48043 7.5 2.73478 7.5 3V4H5.5C4.70435 4 3.94129 4.31607 3.37868 4.87868C2.81607 5.44129 2.5 6.20435 2.5 7V19C2.5 19.7956 2.81607 20.5587 3.37868 21.1213C3.94129 21.6839 4.70435 22 5.5 22H19.5C20.2956 22 21.0587 21.6839 21.6213 21.1213C22.1839 20.5587 22.5 19.7956 22.5 19V7C22.5 6.20435 22.1839 5.44129 21.6213 4.87868C21.0587 4.31607 20.2956 4 19.5 4ZM20.5 19C20.5 19.2652 20.3946 19.5196 20.2071 19.7071C20.0196 19.8946 19.7652 20 19.5 20H5.5C5.23478 20 4.98043 19.8946 4.79289 19.7071C4.60536 19.5196 4.5 19.2652 4.5 19V12H20.5V19ZM20.5 10H4.5V7C4.5 6.73478 4.60536 6.48043 4.79289 6.29289C4.98043 6.10536 5.23478 6 5.5 6H7.5V7C7.5 7.26522 7.60536 7.51957 7.79289 7.70711C7.98043 7.89464 8.23478 8 8.5 8C8.76522 8 9.01957 7.89464 9.20711 7.70711C9.39464 7.51957 9.5 7.26522 9.5 7V6H15.5V7C15.5 7.26522 15.6054 7.51957 15.7929 7.70711C15.9804 7.89464 16.2348 8 16.5 8C16.7652 8 17.0196 7.89464 17.2071 7.70711C17.3946 7.51957 17.5 7.26522 17.5 7V6H19.5C19.7652 6 20.0196 6.10536 20.2071 6.29289C20.3946 6.48043 20.5 6.73478 20.5 7V10Z"
                                    fill="black"
                                 />
                              </g>
                           </svg>
                           <p className="text-neutral-900 text-xs">Calender</p>
                        </div>

                        <div
                           className=" py-3 px-10 rounded-xl flex items-center  flex-col gap-4 cursor-pointer bg-neutral-40"
                           onClick={() => setOrderStatus(!orderStatus)}
                        >
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g id="pajamas:status">
                                 <path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.941 7.033C16.1623 8.84936 15.7542 10.6867 14.7848 12.2386C13.8155 13.7905 12.3434 14.9633 10.6141 15.5612C8.88474 16.1592 7.00269 16.1463 5.28174 15.5246C3.56079 14.9029 2.10496 13.7101 1.157 12.145C1.05383 11.9749 1.02247 11.7707 1.06983 11.5775C1.11718 11.3842 1.23936 11.2177 1.4095 11.1145C1.57964 11.0113 1.78379 10.98 1.97704 11.0273C2.1703 11.0747 2.33683 11.1969 2.44 11.367C2.95064 12.2102 3.64639 12.9263 4.47459 13.4609C5.30279 13.9956 6.24176 14.3348 7.22043 14.4531C8.1991 14.5713 9.19184 14.4654 10.1235 14.1433C11.0552 13.8212 11.9015 13.2915 12.5982 12.5941C13.295 11.8967 13.824 11.05 14.1452 10.118C14.4664 9.18606 14.5714 8.19323 14.4523 7.21466C14.3332 6.23609 13.9931 5.29744 13.4577 4.46971C12.9223 3.64199 12.2057 2.94689 11.362 2.437C11.1917 2.3341 11.0693 2.16777 11.0217 1.97461C10.974 1.78144 11.0051 1.57727 11.108 1.407C11.2109 1.23673 11.3772 1.11431 11.5704 1.06668C11.7636 1.01905 11.9677 1.0501 12.138 1.153C13.1763 1.78059 14.0582 2.63609 14.717 3.65479C15.3759 4.67349 15.7944 5.82869 15.941 7.033ZM9 1C9 1.26522 8.89464 1.51957 8.70711 1.70711C8.51957 1.89464 8.26522 2 8 2C7.73478 2 7.48043 1.89464 7.29289 1.70711C7.10536 1.51957 7 1.26522 7 1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1ZM2.804 5C2.8707 4.88623 2.91423 4.76039 2.9321 4.62972C2.94996 4.49906 2.94181 4.36615 2.9081 4.23865C2.87439 4.11115 2.81579 3.99158 2.73569 3.88682C2.65558 3.78206 2.55554 3.69418 2.44133 3.62824C2.32712 3.56229 2.20099 3.5196 2.07021 3.5026C1.93943 3.4856 1.80658 3.49464 1.67931 3.52919C1.55203 3.56374 1.43285 3.62313 1.32863 3.70393C1.2244 3.78473 1.13718 3.88535 1.072 4C0.941483 4.22956 0.907063 4.50142 0.976251 4.75626C1.04544 5.01111 1.21262 5.22824 1.44131 5.36027C1.66999 5.49231 1.94162 5.52853 2.19692 5.46104C2.45221 5.39354 2.67045 5.22781 2.804 5ZM1 7C1.26522 7 1.51957 7.10536 1.70711 7.29289C1.89464 7.48043 2 7.73478 2 8C2 8.26522 1.89464 8.51957 1.70711 8.70711C1.51957 8.89464 1.26522 9 1 9C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7ZM5 2.804C5.11465 2.73882 5.21527 2.6516 5.29607 2.54737C5.37687 2.44315 5.43626 2.32397 5.47081 2.19669C5.50536 2.06942 5.5144 1.93657 5.4974 1.80579C5.4804 1.67501 5.43771 1.54888 5.37176 1.43467C5.30582 1.32046 5.21794 1.22042 5.11318 1.14031C5.00842 1.06021 4.88885 1.00161 4.76135 0.967901C4.63385 0.934192 4.50094 0.926036 4.37028 0.943902C4.23961 0.961767 4.11377 1.0053 4 1.072C3.77219 1.20555 3.60646 1.42379 3.53896 1.67908C3.47147 1.93438 3.50769 2.20601 3.63973 2.43469C3.77176 2.66338 3.98889 2.83056 4.24374 2.89975C4.49858 2.96894 4.77044 2.93452 5 2.804Z"
                                    fill="black"
                                 />
                              </g>
                           </svg>

                           <p className="text-neutral-900 text-xs">Status</p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
            <div className="relative flex py-10">
               <p className="py-2">Menampilkan</p>
               <select
                  id="data-per-page"
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500 mx-5"
                  value={orderShow}
                  onChange={handleSelectChange}
               >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
               </select>
               <p className="py-2">Data</p>
            </div>
            <TableOrder
               order={orders}
               firstPostIndex={firstPostIndex}
               lastPostIndex={lastPostIndex}
               token={token}
            />
            <div className="flex justify-between items-center mt-10 mb-24">
               <div>
                  Menampilkan {firstPostIndex + 1} ke{" "}
                  {lastPostIndex > orderLength ? orderLength : lastPostIndex}{" "}
                  dari {orderLength} data
               </div>
               <PaginationOrderDokter
                  totalPosts={orderLength}
                  postPerPage={postPerPage}
                  setCurrentPage={setCurentPage}
                  currentPage={currentPage}
                  orderShow={orderShow}
               />
            </div>
         </div>
      </>
   );
}

export default page;
