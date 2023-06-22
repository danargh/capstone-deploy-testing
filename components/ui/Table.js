import React, { useState, useEffect } from 'react';
import { PaginationOrderDokter } from './Pagination';
import Link from 'next/link';

export const TableOrder = (props) => {
    const handlePhone = () => {

    }
    return (
        <table className="border-collapse border w-full border-black">
            <thead >
                <tr className="bg-gray-300 font-semibold h-[43px]">
                    <th className='border border-black'>No</th>
                    <th className='border border-black'>Tanggal</th>
                    <th className='border border-black'>Jam</th>
                    <th className='border border-black'>Nama</th>
                    <th className='border border-black'>Jenis Kelamin</th>
                    <th className='border border-black'>Status</th>
                    <th className='border border-black'>Chat</th>
                    <th className='border border-black'>Telepon</th>
                </tr>
            </thead>
            <tbody>
                {props.order.slice(props.firstPostIndex, props.lastPostIndex).map((order, index) => (
                    <tr className=''>
                        <td className='border border-black text-center'>{index + 1}</td>
                        <td className='border border-black text-center'>{order.date}</td>
                        <td className='border border-black text-center'>{order.hours}</td>
                        <td className='border border-black text-center'>{order.name}</td>
                        <td className='border border-black text-center'>{order.gender}</td>
                        <td className='border border-black text-center'>{order.status}</td>
                        {order.chat ?
                            (<>
                                <td className='border border-black'><Link href={'/dashboard-dokter/chat'} ><img className='mx-auto cursor-pointer' src={"/assets/icons/chat-dokter.svg"} /></Link></td>
                                <td className='border border-black'><img className='mx-auto cursor-pointer' /></td>

                            </>)
                            : (
                                <>
                                    <td className='border border-black'><img className='mx-auto cursor-pointer' /></td>
                                    <td className='border border-black'><img className='mx-auto cursor-pointer' src={"/assets/icons/call-dokter.svg"} onClick={handlePhone} /></td>

                                </>
                            )
                        }
                    </tr>
                ))}

            </tbody>
        </table>
    );
}


export const TableArtikel = (props) => {
    return (
        <div className={props.className}>
            <div className="relative flex py-10">
            </div>
            <table className="border-collapse border w-full border-black ">
                <thead className={props.className}>
                    <tr className="bg-[#B3C99A] font-semibold h-[43px]"> {props.children}
                        <th className='border border-black w-1/4'>Artikel</th>
                        <th className='border border-black w-1/4'>Gambar</th>
                        <th className='border border-black w-1/4'>Kategori Artikel</th>
                        <th className='border border-black w-1/4'>Aksi</th>
                    </tr>
                </thead>
                <tbody className={props.className}>
                    <tr scope="" className=''>
                        <td className='border border-black text-center '>12/05/2023</td>
                        <td className='border border-black text-center '>Farhan</td>
                        <td className='border border-black text-center '>L</td>
                        <td className=' border-black text-center flex justify-center px-10'>
                            <svg width="22.5" height="22.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.75 20.75V3.25H3.25V20.75H20.75ZM20.75 0.75C21.413 0.75 22.0489 1.01339 22.5178 1.48223C22.9866 1.95107 23.25 2.58696 23.25 3.25V20.75C23.25 21.413 22.9866 22.0489 22.5178 22.5178C22.0489 22.9866 21.413 23.25 20.75 23.25H3.25C2.58696 23.25 1.95107 22.9866 1.48223 22.5178C1.01339 22.0489 0.75 21.413 0.75 20.75V3.25C0.75 2.58696 1.01339 1.95107 1.48223 1.48223C1.95107 1.01339 2.58696 0.75 3.25 0.75H20.75ZM17.875 8.6875L16.625 9.9375L14.0625 7.375L15.3125 6.125C15.575 5.85 16.0125 5.85 16.275 6.125L17.875 7.725C18.15 7.9875 18.15 8.425 17.875 8.6875ZM5.75 15.675L13.325 8.1L15.9 10.675L8.325 18.25H5.75V15.675Z" fill="black" />
                            </svg>
                            <svg className='ml-2' width="20" height="22.5" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.0752 9.59091H38.0752V6.86364C38.0752 5.1759 37.3377 3.55728 36.0249 2.36387C34.7122 1.17045 32.9317 0.5 31.0752 0.5H19.0752C17.2187 0.5 15.4382 1.17045 14.1254 2.36387C12.8127 3.55728 12.0752 5.1759 12.0752 6.86364V9.59091H3.0752C2.27955 9.59091 1.51648 9.87825 0.953875 10.3897C0.391266 10.9012 0.0751953 11.5949 0.0751953 12.3182C0.0751953 13.0415 0.391266 13.7352 0.953875 14.2467C1.51648 14.7581 2.27955 15.0455 3.0752 15.0455H4.0752V45.9545C4.0752 47.1601 4.60198 48.3162 5.53966 49.1687C6.47734 50.0211 7.74911 50.5 9.0752 50.5H41.0752C42.4013 50.5 43.673 50.0211 44.6107 49.1687C45.5484 48.3162 46.0752 47.1601 46.0752 45.9545V15.0455H47.0752C47.8708 15.0455 48.6339 14.7581 49.1965 14.2467C49.7591 13.7352 50.0752 13.0415 50.0752 12.3182C50.0752 11.5949 49.7591 10.9012 49.1965 10.3897C48.6339 9.87825 47.8708 9.59091 47.0752 9.59091ZM18.0752 6.86364C18.0752 6.62253 18.1806 6.3913 18.3681 6.22081C18.5556 6.05032 18.81 5.95455 19.0752 5.95455H31.0752C31.3404 5.95455 31.5948 6.05032 31.7823 6.22081C31.9698 6.3913 32.0752 6.62253 32.0752 6.86364V9.59091H18.0752V6.86364ZM40.0752 45.0455H10.0752V15.0455H40.0752V45.0455ZM22.0752 22.3182V36.8636C22.0752 37.587 21.7591 38.2806 21.1965 38.7921C20.6339 39.3036 19.8708 39.5909 19.0752 39.5909C18.2795 39.5909 17.5165 39.3036 16.9539 38.7921C16.3913 38.2806 16.0752 37.587 16.0752 36.8636V22.3182C16.0752 21.5949 16.3913 20.9012 16.9539 20.3897C17.5165 19.8782 18.2795 19.5909 19.0752 19.5909C19.8708 19.5909 20.6339 19.8782 21.1965 20.3897C21.7591 20.9012 22.0752 21.5949 22.0752 22.3182ZM34.0752 22.3182V36.8636C34.0752 37.587 33.7591 38.2806 33.1965 38.7921C32.6339 39.3036 31.8708 39.5909 31.0752 39.5909C30.2795 39.5909 29.5165 39.3036 28.9539 38.7921C28.3913 38.2806 28.0752 37.587 28.0752 36.8636V22.3182C28.0752 21.5949 28.3913 20.9012 28.9539 20.3897C29.5165 19.8782 30.2795 19.5909 31.0752 19.5909C31.8708 19.5909 32.6339 19.8782 33.1965 20.3897C33.7591 20.9012 34.0752 21.5949 34.0752 22.3182Z" fill="black" />
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const TabelHistory = (props) => {
    const orderLength = props.orders.length;
    const [orderShow, setOrderShow] = useState("1");
    const [currentPage, setCurentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(orderShow);

    useEffect(() => {
        setPostPerPage(orderShow);
        setCurentPage(1);

    }, [orderShow]);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const handleSelectChange = (event) => {
        setOrderShow(event.target.value);
    };
    return (
        <div className={props.className}>
            <div className="relative flex items-center py-5">
                <p >Menampilkan</p>
                <select id="data-per-page" className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500 mx-5"
                    value={orderShow}
                    onChange={handleSelectChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                <p >Data</p>
            </div>
            <div className="relative flex ">
            </div>
            <table className="w-full">
                <thead className={props.className}>
                    <tr className="bg-gray-300 font-semibold h-[43px]"> {props.children}
                        <th className='w-1/4'>Tanggal Pemasukan</th>
                        <th className='w-1/4'>Order</th>
                        <th className='w-1/4'>Total Komisi</th>
                        <th className='w-1/4'>Tax</th>
                    </tr>
                </thead>
                <tbody className="bg-neutral-0">
                    {props.orders.slice(firstPostIndex, lastPostIndex).map((order) => (
                        <tr scope="col" >
                            <td className='text-center'>{order.date}</td>
                            <td className='text-center'>{order.order}</td>
                            <td className='text-center'>{order.komisi}</td>
                            <td className='text-center'>{order.tax}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-end items-center mt-10 pb-24'>
                {/* <div>Menampilkan {firstPostIndex + 1} ke {lastPostIndex > orderLength ? orderLength : lastPostIndex} dari {orderLength} data</div> */}
                <PaginationOrderDokter
                    totalPosts={orderLength}
                    postPerPage={postPerPage}
                    setCurrentPage={setCurentPage}
                    currentPage={currentPage}
                    orderShow={orderShow}
                />
            </div>
        </div>
    )
}
