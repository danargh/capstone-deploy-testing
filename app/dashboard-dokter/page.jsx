"use client";

import NavbarDokter from "@/components/ui/NavbarDokter";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardDokter() {
   let dokter = {};
   if (typeof window !== "undefined") {
      dokter = JSON.parse(localStorage.getItem("doctorData"));
   }

   console.log(dokter);

   return (
      <>
         <section className="w-[1440px] mx-auto">
            <div className="">
               <p className="font-inter text-[22px] font-semibold pt-14 px-14">Hallo, Selamat Datang, Dokter {dokter.full_name}</p>
            </div>

            <div>
               <div className="grid grid-cols-3 gap-7 pt-7 px-14">
                  <div className="block max-w-md p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <div className="py-24">
                        <p className="p-2 font-inter text-sm font-semibold"> 28 April 2023</p>
                        <p className="p-2 font-inter text-[32px] font-semibold">Bank Anda</p>
                        <p className="p-2 text-[32px] font-normal text-gray-400">Belum Ada Data</p>
                     </div>
                  </div>
                  <div className="block max-w-md p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <div className="py-16 px-5">
                        <svg width="154" height="135" viewBox="0 0 154 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M142.75 25.3125H17.75C15.678 25.3125 13.6909 24.4894 12.2257 23.0243C10.7606 21.5591 9.9375 19.572 9.9375 17.5C9.9375 15.428 10.7606 13.4409 12.2257 11.9757C13.6909 10.5106 15.678 9.6875 17.75 9.6875H124C125.243 9.6875 126.435 9.19364 127.315 8.31456C128.194 7.43549 128.688 6.2432 128.688 5C128.688 3.7568 128.194 2.56451 127.315 1.68544C126.435 0.80636 125.243 0.3125 124 0.3125H17.75C13.1916 0.3125 8.81988 2.12332 5.5966 5.3466C2.37332 8.56988 0.5625 12.9416 0.5625 17.5V117.5C0.5625 122.058 2.37332 126.43 5.5966 129.653C8.81988 132.877 13.1916 134.688 17.75 134.688H142.75C145.651 134.688 148.433 133.535 150.484 131.484C152.535 129.433 153.688 126.651 153.688 123.75V36.25C153.688 33.3492 152.535 30.5672 150.484 28.516C148.433 26.4648 145.651 25.3125 142.75 25.3125ZM144.312 123.75C144.312 124.164 144.148 124.562 143.855 124.855C143.562 125.148 143.164 125.312 142.75 125.312H17.75C15.678 125.312 13.6909 124.489 12.2257 123.024C10.7606 121.559 9.9375 119.572 9.9375 117.5V32.8047C12.3546 34.0453 15.0331 34.6909 17.75 34.6875H142.75C143.164 34.6875 143.562 34.8521 143.855 35.1451C144.148 35.4382 144.312 35.8356 144.312 36.25V123.75ZM122.438 76.875C122.438 78.4202 121.979 79.9306 121.121 81.2154C120.262 82.5002 119.042 83.5015 117.615 84.0928C116.187 84.6841 114.616 84.8388 113.101 84.5374C111.585 84.2359 110.193 83.4919 109.101 82.3993C108.008 81.3067 107.264 79.9146 106.963 78.3991C106.661 76.8837 106.816 75.3128 107.407 73.8853C107.998 72.4577 109 71.2376 110.285 70.3791C111.569 69.5207 113.08 69.0625 114.625 69.0625C116.697 69.0625 118.684 69.8856 120.149 71.3507C121.614 72.8158 122.438 74.803 122.438 76.875Z"
                              fill="#8EBF59"
                           />
                        </svg>
                     </div>
                     <div className="mx-6">
                        <p className="text-[32px] font-bold font-Inter py-3">Saldo Anda</p>
                     </div>
                     <div className="mx-6 py-6">
                        <p>{dokter.balance}</p>
                     </div>
                  </div>

                  <div className="block max-w-md p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <div className="py-16 px-4">
                        <svg width="168" height="134" viewBox="0 0 168 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M34 75.333H109V58.6664H34V75.333ZM34 50.333H109V33.6664H34V50.333ZM17.3333 133.666C12.75 133.666 8.82497 132.033 5.55831 128.766C2.29164 125.5 0.661085 121.577 0.66664 117V16.9997C0.66664 12.4164 2.29997 8.49135 5.56664 5.22469C8.83331 1.95802 12.7555 0.327466 17.3333 0.333022H150.667C155.25 0.333022 159.175 1.96635 162.442 5.23302C165.708 8.49969 167.339 12.4219 167.333 16.9997V117C167.333 121.583 165.7 125.508 162.433 128.775C159.167 132.041 155.244 133.672 150.667 133.666H17.3333ZM17.3333 117H150.667V16.9997H17.3333V117Z"
                              fill="#8EBF59"
                           />
                        </svg>
                     </div>
                     <div className="mx-3">
                        <p className="text-[28px] font-bold font-Inter py-3">Maksimal Dicairkan</p>
                     </div>
                     <div className="mx-3 py-6">
                        <p>Rp10.000.000,-</p>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-7 py-7  items-center text-center px-14 justify-center ">
                  <div className="block max-w-xl p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                     <div className="py-28">
                        <p className="font-Inter font-bold text-[32px]">Jumlah Order</p>
                        <p className="font-Inter font-medium text-[32px] py-[90px]">4</p>
                     </div>
                  </div>
                  <div className="block max-w-xl max-h-xl p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <div className="py-[104px]">
                        <p className="font-Inter font-bold text-[32px]">Withdraw</p>
                        <button className="bg-web-green-300 w-36 h-16 rounded-xl text-white my-[90px] font-medium">
                           <Link href="/dashboard-dokter/withdraw">Transfer</Link>
                        </button>
                     </div>
                  </div>
               </div>

               <div className="py-7 px-14 text-[32px]">
                  <p className="font-Inter font-bold">Semua Data</p>
               </div>

               <div className="grid grid-cols-2 gap-7 py-7 items-center text-center px-14">
                  <div className="block max-w-xl p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <div className="py-14 flex items-center justify-center">
                        <svg width="155" height="159" viewBox="0 0 155 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M42.17 17.4996C57.54 10.0896 90.34 3.12965 127.27 27.1896C127.82 27.5482 128.436 27.7948 129.081 27.9154C129.727 28.0361 130.39 28.0284 131.032 27.8928C131.675 27.7573 132.285 27.4964 132.826 27.1253C133.368 26.7541 133.832 26.2799 134.19 25.7296C134.549 25.1794 134.795 24.5639 134.916 23.9184C135.036 23.2728 135.029 22.6099 134.893 21.9673C134.758 21.3247 134.497 20.7151 134.126 20.1733C133.755 19.6315 133.28 19.1682 132.73 18.8096C92.36 -7.49036 55.76 -0.160355 37.83 8.49965C37.2118 8.76742 36.6542 9.15735 36.1904 9.64603C35.7267 10.1347 35.3665 10.7121 35.1315 11.3434C34.8965 11.9748 34.7915 12.6471 34.8228 13.32C34.8541 13.993 35.0211 14.6527 35.3137 15.2595C35.6063 15.8663 36.0185 16.4077 36.5256 16.8512C37.0327 17.2948 37.6242 17.6312 38.2645 17.8405C38.9049 18.0497 39.581 18.1273 40.2521 18.0688C40.9232 18.0102 41.5756 17.8166 42.17 17.4996ZM24.09 23.9096C24.4516 24.4584 24.7015 25.0731 24.8253 25.7185C24.9491 26.364 24.9445 27.0275 24.8117 27.6711C24.6789 28.3147 24.4205 28.9259 24.0513 29.4696C23.6821 30.0133 23.2093 30.4788 22.66 30.8396C17.43 34.2796 11.56 41.6896 9.31002 45.5296C8.61831 46.6301 7.52523 47.418 6.26248 47.7262C4.99974 48.0345 3.66659 47.8389 2.54563 47.1808C1.42467 46.5228 0.604007 45.4541 0.257611 44.2013C-0.088786 42.9485 0.0663092 41.6101 0.690019 40.4697C3.39002 35.8697 10.19 27.0696 17.17 22.4796C18.2776 21.7525 19.6284 21.4947 20.9259 21.7629C22.2234 22.031 23.3614 22.8031 24.09 23.9096ZM80 23.4096C78.6739 23.4096 77.4022 23.9364 76.4645 24.8741C75.5268 25.8118 75 27.0836 75 28.4096C75 29.7357 75.5268 31.0075 76.4645 31.9452C77.4022 32.8829 78.6739 33.4096 80 33.4096C96.56 33.4096 135.14 47.1696 145.1 98.9396C145.402 100.188 146.173 101.273 147.253 101.968C148.333 102.664 149.639 102.917 150.901 102.675C152.163 102.433 153.283 101.715 154.029 100.67C154.776 99.6241 155.091 98.3314 154.91 97.0596C143.93 39.9396 100.68 23.4096 80.01 23.4096H80ZM68.45 86.0196C59.75 93.0796 53.18 112.87 74.03 150.58C74.6718 151.741 74.8259 153.11 74.4583 154.386C74.0908 155.661 73.2317 156.738 72.07 157.38C70.9084 158.021 69.5393 158.176 68.2641 157.808C66.9888 157.44 65.9118 156.581 65.27 155.42C43.79 116.56 47.49 90.1596 62.14 78.2596C76.38 66.6896 98.84 71.7096 104.97 91.4996C105.78 94.1296 106.43 97.2796 107.07 100.43L107.4 102C108.2 105.8 109.08 109.76 110.38 113.75C112.97 121.68 117.14 129.47 125.19 135.41C126.258 136.197 126.968 137.377 127.166 138.689C127.364 140 127.033 141.337 126.245 142.405C125.457 143.472 124.278 144.183 122.966 144.381C121.654 144.579 120.318 144.247 119.25 143.46C108.98 135.88 103.86 126 100.87 116.86C99.546 112.65 98.4576 108.37 97.61 104.04L97.27 102.37C96.7698 99.7029 96.1492 97.0602 95.41 94.4496C91.52 81.8796 77.55 78.6196 68.45 86.0196ZM129.99 97.7196C129.974 97.0501 129.824 96.3906 129.548 95.7803C129.272 95.17 128.877 94.6213 128.385 94.1668C127.893 93.7123 127.315 93.3612 126.684 93.1344C126.054 92.9077 125.385 92.8098 124.716 92.8467C124.048 92.8835 123.393 93.0543 122.792 93.349C122.19 93.6436 121.654 94.0561 121.215 94.5619C120.776 95.0677 120.443 95.6565 120.236 96.2935C120.029 96.9304 119.952 97.6024 120.01 98.2696C120.99 116.35 132.17 125.73 138.47 127.76C139.729 128.154 141.093 128.034 142.264 127.427C143.436 126.82 144.32 125.774 144.723 124.518C145.127 123.262 145.018 121.897 144.42 120.721C143.822 119.545 142.783 118.653 141.53 118.24C139.26 117.51 130.76 111.75 129.99 97.7196ZM85 103C85 101.674 84.4732 100.402 83.5356 99.4641C82.5979 98.5264 81.3261 97.9996 80 97.9996C78.6739 97.9996 77.4022 98.5264 76.4645 99.4641C75.5268 100.402 75 101.674 75 103C75 113.45 76.29 121.51 79.37 129.38C82.41 137.12 87.09 144.42 93.42 153.38C93.79 153.936 94.2677 154.412 94.8249 154.781C95.382 155.149 96.0074 155.402 96.664 155.525C97.3207 155.648 97.9953 155.638 98.6479 155.496C99.3006 155.353 99.9182 155.082 100.464 154.697C101.01 154.312 101.473 153.822 101.827 153.255C102.18 152.688 102.416 152.056 102.521 151.396C102.626 150.736 102.598 150.062 102.438 149.414C102.278 148.765 101.99 148.155 101.59 147.62C95.31 138.72 91.24 132.27 88.68 125.72C86.16 119.31 85 112.55 85 103ZM54.7 65.8996C37.54 79.1796 27.68 107.32 44.48 140.75C45.0768 141.935 45.1781 143.309 44.7618 144.569C44.3454 145.83 43.4455 146.873 42.26 147.47C41.0745 148.066 39.7005 148.168 38.4402 147.751C37.18 147.335 36.1368 146.435 35.54 145.25C16.84 108.03 27.22 74.5296 48.57 57.9896C59.18 49.7796 72.47 45.8296 85.84 47.9896C99.26 50.1696 112.21 58.4296 122.27 73.5596C122.634 74.1066 122.886 74.7199 123.013 75.3644C123.14 76.0089 123.138 76.6721 123.009 77.3161C122.879 77.96 122.624 78.5722 122.258 79.1176C121.892 79.6629 121.422 80.1309 120.875 80.4947C120.328 80.8584 119.715 81.1109 119.07 81.2376C118.426 81.3644 117.763 81.363 117.119 81.2334C116.475 81.1039 115.862 80.8488 115.317 80.4827C114.772 80.1166 114.304 79.6466 113.94 79.0996C105.19 65.9296 94.53 59.5396 84.24 57.8696C73.89 56.1896 63.34 59.1996 54.7 65.8996ZM59.57 35.9396C60.1872 35.7151 60.7542 35.3712 61.2385 34.9275C61.7228 34.4838 62.1149 33.9491 62.3926 33.3539C62.6702 32.7587 62.8279 32.1146 62.8566 31.4584C62.8854 30.8023 62.7846 30.1469 62.56 29.5296C62.3355 28.9124 61.9915 28.3455 61.5479 27.8612C61.1042 27.3769 60.5695 26.9847 59.9743 26.7071C59.379 26.4294 58.735 26.2718 58.0788 26.243C57.4226 26.2143 56.7672 26.3151 56.15 26.5396C9.35001 43.5396 -1.74998 88.3996 2.57002 118.71C2.75832 120.022 3.46043 121.207 4.52189 122.002C5.58334 122.797 6.9172 123.138 8.23002 122.95C9.54284 122.761 10.7271 122.059 11.5222 120.998C12.3174 119.936 12.6583 118.602 12.47 117.29C8.56002 89.8996 18.69 50.7896 59.57 35.9396Z"
                              fill="#8EBF59"
                           />
                        </svg>
                     </div>
                     <div className="flex justify-center">
                        <div className="mx-4">
                           <p className="text-[28px] font-bold font-Inter py-3">Interaksi</p>
                           <p className="text-2xl">0</p>
                        </div>
                     </div>
                  </div>
                  <div className="block max-w-xl p-6 bg-white border-4 border-gray-200S shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <div className="py-20 flex items-center justify-center">
                        <svg width="201" height="108" viewBox="0 0 201 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M100.5 82.125C106.647 82.125 112.655 80.4755 117.766 77.3851C122.877 74.2947 126.86 69.9021 129.212 64.763C131.565 59.6238 132.18 53.9688 130.981 48.5131C129.782 43.0574 126.822 38.046 122.476 34.1126C118.129 30.1793 112.592 27.5006 106.563 26.4154C100.534 25.3302 94.2857 25.8872 88.6069 28.0159C82.9281 30.1446 78.0744 33.7495 74.6595 38.3746C71.2446 42.9997 69.4219 48.4374 69.4219 54C69.4219 61.4592 72.6962 68.6129 78.5245 73.8874C84.3527 79.1618 92.2576 82.125 100.5 82.125ZM100.5 32.125C105.281 32.125 109.954 33.4079 113.929 35.8116C117.904 38.2153 121.002 41.6317 122.832 45.6288C124.661 49.6259 125.14 54.0243 124.207 58.2676C123.275 62.5109 120.973 66.4087 117.592 69.468C114.212 72.5272 109.905 74.6106 105.216 75.4547C100.527 76.2987 95.6667 75.8655 91.2498 74.2099C86.833 72.5542 83.0579 69.7504 80.4018 66.1531C77.7458 62.5558 76.3281 58.3265 76.3281 54C76.3281 48.1984 78.8748 42.6344 83.4079 38.532C87.941 34.4297 94.0892 32.125 100.5 32.125ZM197.188 0.875H3.8125C2.89667 0.875 2.01836 1.20424 1.37077 1.79029C0.723185 2.37634 0.359375 3.1712 0.359375 4V104C0.359375 104.829 0.723185 105.624 1.37077 106.21C2.01836 106.796 2.89667 107.125 3.8125 107.125H197.188C198.103 107.125 198.982 106.796 199.629 106.21C200.277 105.624 200.641 104.829 200.641 104V4C200.641 3.1712 200.277 2.37634 199.629 1.79029C198.982 1.20424 198.103 0.875 197.188 0.875ZM7.26562 37.7969C15.5072 36.0412 23.0448 32.2409 29.0318 26.8229C35.0187 21.4048 39.218 14.5835 41.158 7.125H159.842C161.782 14.5835 165.981 21.4048 171.968 26.8229C177.955 32.2409 185.493 36.0412 193.734 37.7969V70.2031C185.493 71.9588 177.955 75.7591 171.968 81.1771C165.981 86.5952 161.782 93.4165 159.842 100.875H41.158C39.218 93.4165 35.0187 86.5952 29.0318 81.1771C23.0448 75.7591 15.5072 71.9588 7.26562 70.2031V37.7969ZM193.734 31.3438C187.354 29.7202 181.543 26.6402 176.856 22.3993C172.17 18.1583 168.767 12.8987 166.973 7.125H193.734V31.3438ZM34.0273 7.125C32.2333 12.8987 28.8299 18.1583 24.1437 22.3993C19.4574 26.6402 13.6455 29.7202 7.26562 31.3438V7.125H34.0273ZM7.26562 76.6562C13.6455 78.2798 19.4574 81.3598 24.1437 85.6007C28.8299 89.8417 32.2333 95.1013 34.0273 100.875H7.26562V76.6562ZM166.973 100.875C168.767 95.1013 172.17 89.8417 176.856 85.6007C181.543 81.3598 187.354 78.2798 193.734 76.6562V100.875H166.973Z"
                              fill="#8EBF59"
                           />
                        </svg>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="mx-4">
                           <p className="text-[28px] font-bold font-Inter py-3">Total Komisi</p>
                           <p className="text-2xl">Rp. 7.786.000</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
