"use client";
import SidebarAdmin from "@/components/ui/SidebarAdmin";
import React, { useState, useEffect } from "react";
import useSWR from 'swr';
import Swal from "sweetalert2";
import Link from "next/link";
import PaginationDok from "@/components/PaginationDok";

export default function VerifikasiDokter() {
  const [dokterVerif, setDokterVerif] = useState([]);
  const [dokterTolak, setDokterTolak] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;   

  const fetchDokterVerif = (url) => fetch(url).then((response) => response.json());
  const fetchDokterTolak = (url) => fetch(url).then((response) => response.json());

  const { data: dataDokterVerif, error: errorDokterVerif } = useSWR(
    "https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk?status=Terverifikasi",
    fetchDokterVerif
  );

  const { data: dataDokterTolak, error: errorDokterTolak } = useSWR(
    "https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk?status=Tolak",
    fetchDokterTolak
  );

  useEffect(() => {
    if (dataDokterVerif) {
      setDokterVerif(dataDokterVerif);
    }
  }, [dataDokterVerif]);

  useEffect(() => {
    if (dataDokterTolak) {
      setDokterTolak(dataDokterTolak);
    }
  }, [dataDokterTolak]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const searchUrl = `https://647aaec0d2e5b6101db07ba8.mockapi.io/verif/doktermasuk?search=${searchInput}`;
    
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        setDokterVerif(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const paginateData = (data) => {
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   return data.slice(startIndex, endIndex);
 };
 const changePage = (page) => {
   setCurrentPage(page);
 };

  return (
    <>
      {/* <div className='flex'> */}
      <SidebarAdmin />
      <div className="p-4 sm:ml-72 w-full">
        <p className="text-[32px] font-bold text-web-green-500 mx-16 ">Pendaftaran Dokter</p>
        <div class="flex items-center h-24 mx-16 mt-9">
          <div class="mb-4 flex w-full gap-16">
            <div className="flex">
              <input
                type="search"
                className=" relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-web-green-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-web-green-300 focus:text-neutral-700 focus:outline-none dark:border-web-green-300 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-web-green-300"
                placeholder="Cari Dokter"
                aria-label="Search"
                aria-describedby="button-addon1"
                value={searchInput}
                onChange={handleSearchInputChange}
              />

              <button
                className="relative z-[2] flex items-center rounded-r bg-web-green-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                onClick={handleSearch}
              >
                Cari
              </button>
            </div>
            <Link href="/edit-pengguna/daftar-dokter">
              <button className="w-32 h-11 bg-web-green-300 text-white rounded ">Daftar Dokter</button>
            </Link>
          </div>
        </div>
        <table className="border-collapse border w-full border-web-green-300 mx-16">
          <thead className="">
            <tr className="bg-[#63863E] font-semibold border-web-green-300 text-white">
              <th className="border border-web-green-300 py-5">No</th>
              <th className="border border-web-green-300">Nama Dokter</th>
              <th className="border border-web-green-300">Email Dokter</th>
              <th className="border border-web-green-300">NIK</th>
              <th className="border border-web-green-300">Jenis Kelamin</th>
              <th className="border border-web-green-300">Tempat Lahir</th>
              <th className="border border-web-green-300">Agama</th>
              <th className="border border-web-green-300">Universitas</th>
              <th className="border border-web-green-300">Jurusan</th>
              <th className="border border-web-green-300">Tahun Lulus</th>
              <th className="border border-web-green-300">Tempat Praktik</th>
              <th className="border border-web-green-300">No STR</th>
              <th className="border border-web-green-300">Dokumen</th>
              <th className="border border-web-green-300">Aksi</th>
            </tr>
          </thead>
          <tbody className="">
            {[...paginateData(dokterVerif), ...paginateData(dokterTolak)].map((dokter, i) => (
              <tr scope="col" key={dokter.id} className="bg-white">
                <td className="border border-web-green-300 text-center">{dokter.id}</td>
                <td className="border border-web-green-300 text-center">{dokter.namaDokter}</td>
                <td className="border border-web-green-300 text-center">{dokter.emailDokter}</td>
                <td className="border border-web-green-300 text-center">{dokter.nik}</td>
                <td className="border border-web-green-300 text-center">{dokter.jenisKelamin}</td>
                <td className="border border-web-green-300 text-center">{dokter.tempatLahir}</td>
                <td className="border border-web-green-300 text-center">{dokter.Agama}</td>
                <td className="border border-web-green-300 text-center">{dokter.Universitas}</td>
                <td className="border border-web-green-300 text-center">{dokter.jurusan}</td>
                <td className="border border-web-green-300 text-center">{dokter.tahunLulus}</td>
                <td className="border border-web-green-300 text-center">{dokter.tempatPraktik}</td>
                <td className="border border-web-green-300 text-center">{dokter.noStr}</td>
                <td className="border border-web-green-300 text-center">{dokter.dokumen}</td>
                <td className="border border-web-green-300 text-center">
                  {dokter.status === "Terverifikasi" ? (
                    <div className="flex flex-col justify-center items-center p-3">
                      <p className="text-white font-semibold bg-[#2D6248] w-28 h-9 text-center rounded py-1 justify-center items-center">Terverifikasi</p>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center p-3">
                      <p className="text-white font-semibold bg-[#A12D28] w-28 h-9 text-center rounded py-1 justify-center items-center">Ditolak</p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-11 float-right">
        <PaginationDok
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={dokterVerif.length + dokterTolak.length}
            onPageChange={changePage}
         />
        </div>
      </div>
    </>
  );
}
