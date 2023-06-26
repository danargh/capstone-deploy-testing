import React, { useState, useEffect } from 'react';
import { PaginationOrderDokter } from './Pagination';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { mutate } from 'swr';
import { useRouter } from "next/navigation";


export const TableOrder = (props) => {
    const handlePhone = async (id) => {

        const { value: url } = await Swal.fire({
            title: 'Masukkan Link Pertemuan',
            input: 'text',
            text: 'Silahkan masukkan link pertemuan anda dengan pasien ke dalam form di bawah ini! Link dapat berupa Zoom, Google meet, Discord call, dll. ',
            inputPlaceholder: 'Masukan link pertemuan',
            showCancelButton: true,
            confirmButtonText: "Kirim",
            confirmButtonColor: " green",
            cancelButtonText: "Batal"

        })

        if (url) {
            Swal.fire({ icon: 'success', title: 'Yeyy Link Berhasil Dikirim', text: 'Ketuk dimana saja untuk menutup halaman ini', showConfirmButton: false, })

            const urlLink = new FormData();
            urlLink.append('link', url)
            try {
                const response = await fetch(
                    `https://capstone-project.duckdns.org:8080/doctor/schedules/${id}`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${props.token}`,
                        },
                        body: urlLink,
                    }
                );
                if (!response.ok) {
                    throw new Error("Error adding article");
                }

            } catch (error) {
                console.error(error);
            }

        }

    }

    const handleExit = (id) => {

        Swal.fire({
            title: 'Apakah Kamu yakin ingin menutup sesi konsultasi ini?',
            showCancelButton: true,
            confirmButtonColor: " green",
            confirmButtonText: 'Ya',
            cancelButtonText: `Tidak`,
            icon: 'warning'
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const token = Cookies.get('doctorToken');
                try {
                    const response = await fetch(`https://capstone-project.duckdns.org:8080/doctor/schedules/${id}`, {
                        method: 'PUT',

                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(response);
                    if (!response.ok) {
                        throw new Error('Error updating article');
                    }
                    // const updatedData = await response.json();
                    mutate(`https://capstone-project.duckdns.org:8080/doctor/schedules`);
                    // return updatedData;
                } catch (error) {
                    console.error('Error updating article:', error);
                }
                Swal.fire({ icon: 'success', title: 'Sesi berhasil ditutup', text: 'Ketuk dimana saja untuk menutup halaman ini', showConfirmButton: false, })

            }
        })
    }



    const router = useRouter();
    const handleObat = (id) => {
        router.push(`/dashboard-dokter/obat-dokter/${id}`);
    };
    const regexPatternTimes = /(\d{2}:\d{2})/;
    const regexPatternDate = /(\d{2})\/(\d{2})\/(\d{4})/;
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
                    <th className='border border-black'>Aksi</th>

                </tr>
            </thead>
            <tbody>
                {props.order && props.order.length > 0 ? props.order.slice(props.firstPostIndex, props.lastPostIndex).map((order, index) => (
                    <tr className={order.status === "selesai" ? 'pointer-none bg-neutral-20' : ''} >
                        <td className='border border-black text-center'>{index + 1}</td>
                        <td className='border border-black text-center'>{order.date.match(regexPatternDate) && `${order.date.match(regexPatternDate)[1]}-${order.date.match(regexPatternDate)[2]}-${order.date.match(regexPatternDate)[3]}`}</td>
                        <td className='border border-black text-center'>{order.date.match(regexPatternTimes)[1]}</td>
                        <td className='border border-black text-center'>{order.user_name}</td>
                        <td className='border border-black text-center'>{order.user_gender}</td>
                        <td className='border border-black text-center'>{order.status}</td>
                        {order.method === "chat" ? (
                            <>
                                <td className={`border border-black ${order.status === "selesai" ? 'disabled' : ''}`}>
                                    {order.status !== "selesai" ? (
                                        <Link href={'/dashboard-dokter/chat'}>
                                            <img className='mx-auto cursor-pointer' src={"/assets/icons/chat-dokter.svg"} />
                                        </Link>
                                    ) : (
                                        <img className='mx-auto cursor-pointer' src={"/assets/icons/chat-dokter.svg"} />
                                    )}
                                </td>
                                <td className={`border border-black ${order.status === "selesai" ? 'disabled' : ''}`}>
                                    <img className='mx-auto cursor-pointer' />
                                </td>
                            </>
                        ) : (
                            <>
                                <td className={`border border-black ${order.status === "selesai" ? 'disabled' : ''}`}>
                                    <img className='mx-auto cursor-pointer' />
                                </td>
                                <td className={`border border-black ${order.status === "selesai" ? 'disabled' : ''}`}>
                                    {order.status !== "selesai" ? (
                                        <img className='mx-auto cursor-pointer' src={"/assets/icons/call-dokter.svg"} onClick={() => handlePhone(order.id)} />
                                    ) : (
                                        <img className='mx-auto cursor-pointer' src={"/assets/icons/call-dokter.svg"} />
                                    )}
                                </td>
                            </>
                        )}
                        <td className='border border-black text-center'>
                            {order.status !== "selesai" ? (
                                <div className='flex gap-5 justify-center'>
                                    <div className='cursor-pointer' onClick={() => handleExit(order.id)}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.625 6.125L9.12492 8.62492M9.12492 8.62492L11.6249 11.1249M9.12492 8.62492L6.625 11.1249M9.12492 8.62492L11.6249 6.125M9.125 16.125C4.98287 16.125 1.625 12.7672 1.625 8.625C1.625 4.48287 4.98287 1.125 9.125 1.125C13.2672 1.125 16.625 4.48287 16.625 8.625C16.625 12.7672 13.2672 16.125 9.125 16.125Z" stroke="#8EBF59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <div onClick={() => handleObat(order.user_id)}>
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.4514 10.1615C16.8154 8.83853 15.7423 7.8363 14.4306 7.27506C15.5833 5.55123 15.3845 3.22606 13.8741 1.74276C13.0394 0.94098 11.9663 0.5 10.8533 0.5H10.8136C9.66091 0.5 8.58773 0.981069 7.75304 1.78285L1.23447 8.51782C0.439526 9.35969 -0.0374428 10.4421 0.00230455 11.6047C0.00230455 12.7673 0.479273 13.8497 1.27422 14.6915C2.10891 15.5334 3.22184 15.9343 4.29502 15.9343C5.24896 15.9343 6.16315 15.6136 6.95809 15.0122C6.99784 15.0523 6.99784 15.1325 7.03759 15.1726C7.99152 17.2171 10.0186 18.5 12.2445 18.5C13.1189 18.5 13.9139 18.2996 14.7088 17.9388C17.5706 16.5356 18.8028 13.088 17.4514 10.1615ZM15.5038 10.1615L8.23001 13.6091C8.03127 12.8474 8.07102 12.0056 8.34925 11.2439C8.70698 10.2016 9.46218 9.35969 10.4559 8.87862C11.0123 8.598 11.6085 8.47773 12.2047 8.47773C13.5164 8.51782 14.7486 9.15924 15.5038 10.1615ZM8.94546 2.94543C9.46218 2.42428 10.0981 2.14365 10.8136 2.14365C11.529 2.14365 12.2047 2.42428 12.7215 2.90534C13.7549 3.94766 13.7946 5.6314 12.7612 6.71381L12.642 6.83408C12.5227 6.83408 12.3637 6.83408 12.2445 6.83408C11.37 6.83408 10.5751 7.03452 9.78016 7.39532C9.38268 7.59577 8.98521 7.8363 8.66723 8.11693L6.28239 5.75167L8.94546 2.94543ZM6.20289 13.4488C5.16946 14.4911 3.50007 14.5312 2.42689 13.4889C1.91018 12.9677 1.63195 12.3263 1.63195 11.6047C1.63195 10.8831 1.91018 10.2016 2.38715 9.6804L5.08997 6.91425L7.51456 9.3196C7.23632 9.72049 6.99784 10.2016 6.7991 10.6826C6.52087 11.4844 6.40163 12.2862 6.48112 13.1281L6.20289 13.4488ZM13.9934 16.4154C13.4369 16.696 12.8407 16.8163 12.2445 16.8163C10.9328 16.8163 9.74041 16.1748 8.94546 15.1726L16.2192 11.7249C16.6564 13.569 15.782 15.5334 13.9934 16.4154Z" fill="#8EBF59" />
                                            </svg>
                                        </div>

                                    </div>


                                </div>) : (<div className='flex gap-5 justify-center'>
                                    <div >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.625 6.125L9.12492 8.62492M9.12492 8.62492L11.6249 11.1249M9.12492 8.62492L6.625 11.1249M9.12492 8.62492L11.6249 6.125M9.125 16.125C4.98287 16.125 1.625 12.7672 1.625 8.625C1.625 4.48287 4.98287 1.125 9.125 1.125C13.2672 1.125 16.625 4.48287 16.625 8.625C16.625 12.7672 13.2672 16.125 9.125 16.125Z" stroke="#8EBF59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <div >
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.4514 10.1615C16.8154 8.83853 15.7423 7.8363 14.4306 7.27506C15.5833 5.55123 15.3845 3.22606 13.8741 1.74276C13.0394 0.94098 11.9663 0.5 10.8533 0.5H10.8136C9.66091 0.5 8.58773 0.981069 7.75304 1.78285L1.23447 8.51782C0.439526 9.35969 -0.0374428 10.4421 0.00230455 11.6047C0.00230455 12.7673 0.479273 13.8497 1.27422 14.6915C2.10891 15.5334 3.22184 15.9343 4.29502 15.9343C5.24896 15.9343 6.16315 15.6136 6.95809 15.0122C6.99784 15.0523 6.99784 15.1325 7.03759 15.1726C7.99152 17.2171 10.0186 18.5 12.2445 18.5C13.1189 18.5 13.9139 18.2996 14.7088 17.9388C17.5706 16.5356 18.8028 13.088 17.4514 10.1615ZM15.5038 10.1615L8.23001 13.6091C8.03127 12.8474 8.07102 12.0056 8.34925 11.2439C8.70698 10.2016 9.46218 9.35969 10.4559 8.87862C11.0123 8.598 11.6085 8.47773 12.2047 8.47773C13.5164 8.51782 14.7486 9.15924 15.5038 10.1615ZM8.94546 2.94543C9.46218 2.42428 10.0981 2.14365 10.8136 2.14365C11.529 2.14365 12.2047 2.42428 12.7215 2.90534C13.7549 3.94766 13.7946 5.6314 12.7612 6.71381L12.642 6.83408C12.5227 6.83408 12.3637 6.83408 12.2445 6.83408C11.37 6.83408 10.5751 7.03452 9.78016 7.39532C9.38268 7.59577 8.98521 7.8363 8.66723 8.11693L6.28239 5.75167L8.94546 2.94543ZM6.20289 13.4488C5.16946 14.4911 3.50007 14.5312 2.42689 13.4889C1.91018 12.9677 1.63195 12.3263 1.63195 11.6047C1.63195 10.8831 1.91018 10.2016 2.38715 9.6804L5.08997 6.91425L7.51456 9.3196C7.23632 9.72049 6.99784 10.2016 6.7991 10.6826C6.52087 11.4844 6.40163 12.2862 6.48112 13.1281L6.20289 13.4488ZM13.9934 16.4154C13.4369 16.696 12.8407 16.8163 12.2445 16.8163C10.9328 16.8163 9.74041 16.1748 8.94546 15.1726L16.2192 11.7249C16.6564 13.569 15.782 15.5334 13.9934 16.4154Z" fill="#8EBF59" />
                                            </svg>
                                        </div>

                                    </div>


                                </div>)} </td>

                    </tr>
                )) : null}

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

export const TabelKomisi = (props) => {
    const [ordersSuccess, setOrderSuccess] = useState([])
    useEffect(() => {
        const filteredOrders = props.orders.filter((order) => order.status === 'selesai');
        setOrderSuccess(filteredOrders);
    }, [props.orders]);
    const orderLength = ordersSuccess.length;
    const [orderShow, setOrderShow] = useState("5");
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

    const regexPatternDate = /(\d{2})\/(\d{2})\/(\d{4})/;

    return (
        <div className={props.className}>
            <div className="relative flex items-center py-5">
                <p >Menampilkan</p>
                <select id="data-per-page" className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500 mx-5"
                    value={orderShow}
                    onChange={handleSelectChange}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
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
                    {ordersSuccess.length !== 0 ? ordersSuccess
                        .slice(firstPostIndex, lastPostIndex)
                        .map((order) => (
                            <tr scope="col" key={order.id}>
                                <td className='text-center'>{order.date.match(regexPatternDate) && `${order.date.match(regexPatternDate)[1]}-${order.date.match(regexPatternDate)[2]}-${order.date.match(regexPatternDate)[3]}`}</td>
                                <td className='text-center'>{order.user_name}</td>
                                <td className='text-center'>200.000</td>
                                <td className='text-center'>12.500</td>
                            </tr>
                        )) : null}
                </tbody>
            </table>
            <div className='flex justify-end items-center mt-10 pb-24'>

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
