"use client";

import Input from "@/components/forms/Input";
import Image from "next/image";
import Dropdown from "@/components/forms/Dropdown";
import { useEffect, useState } from "react";
import { SimpanProfileButton } from "@/components/ui/Button";
import Swal from "sweetalert2";
import { dataDoctorAtom, getUserDoctor } from "@/components/atoms/useUserDoctor";
import { useAtom } from "jotai";
import Cookies from "js-cookie";

export default function Profile() {
   const { data: dokter, error, isLoading } = getUserDoctor();

   const [fullName, setFullName] = useState("");
   const [displayName, setDisplayName] = useState("");
   const [propic, setPropic] = useState("");
   const [alumnus, setAlumnus] = useState("");
   const [practiceAddress, setPracticeAddress] = useState("");
   const [work, setWork] = useState("");
   const [yearEntry, setYearEntry] = useState("");
   const [yearOut, setYearOut] = useState("");
   const [specialist, setSpecialist] = useState("");
   const [description, setDescription] = useState("");
   const [inputImageFile, setInputImageFile] = useState("");
   const [previewImage, setPreviewImage] = useState("");
   const [dataPrecentage, setDataPrecentage] = useState(0);

   useEffect(() => {
      if (!inputImageFile) {
         setPreviewImage(undefined);
         return;
      }
      const objectUrl = URL.createObjectURL(inputImageFile);
      setPreviewImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
   }, [inputImageFile]);

   useEffect(() => {
      if (dokter) {
         setFullName(dokter?.doctor.full_name);
         setDisplayName(dokter?.doctor.display_name);
         setPropic(dokter?.doctor.propic);
         setAlumnus(dokter?.doctor.alumnus);
         setPracticeAddress(dokter?.doctor.practice_address);
         setWork(dokter?.doctor.work);
         setYearEntry(dokter?.doctor.year_entry);
         setYearOut(dokter?.doctor.year_out);
         setSpecialist(dokter?.doctor.specialist);
         setDescription(dokter?.doctor.description);
         setDataPrecentage({
            full_name: dokter?.doctor.full_name,
            display_name: dokter?.doctor.display_name,
            propic: dokter?.doctor.propic,
            alumnus: dokter?.doctor.alumnus,
            practice_address: dokter?.doctor.practice_address,
            work: dokter?.doctor.work,
            year_entry: dokter?.doctor.year_entry,
            year_out: dokter?.doctor.year_out,
            specialist: dokter?.doctor.specialist,
            description: dokter?.doctor.description,
         });
      }
   }, [dokter]);

   const handleInputImageFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
         setInputImageFile(undefined);
         return;
      }
      setInputImageFile(e.target.files[0]);
   };

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("display_name", displayName);
      formData.append("propic", inputImageFile ? inputImageFile : propic);
      formData.append("alumnus", alumnus);
      formData.append("practice_address", practiceAddress);
      formData.append("work", work);
      formData.append("year_entry", yearEntry);
      formData.append("year_out", yearOut);
      formData.append("specialist", specialist);
      formData.append("description", description);

      // show file formdata
      for (var pair of formData.entries()) {
         console.log(pair[0] + ", " + pair[1]);
      }

      try {
         const token = Cookies.get("doctorToken");
         const resp = await fetch("https://capstone-project.duckdns.org:8080/doctor/", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
            method: "PUT",
            body: formData,
         });

         const data = await resp.json();

         if (data.message === "success update doctor") {
            Swal.fire("Update Profile Berhasil", "Terima kasih sudah melengkapi data", "success");
         } else {
            Swal.fire("Maaf Update Profile Gagal", "Pastikan data Profile sesuai dengan ketentuan.", "error");
         }
      } catch (error) {
         console.error(error);
         Swal.fire("Maaf Update Profile Gagal", "Terjadi kesalahan saat mengirim permintaan.", "error");
      }
   };

   // tingkat penyelesaian
   const totalAttributes = Object.keys(dataPrecentage).length;
   let attributesWithValue = 0;
   let attributesWithoutValue = 0;

   for (const key in dataPrecentage) {
      if (dataPrecentage[key] !== null && dataPrecentage[key] !== undefined && dataPrecentage[key] !== "") {
         attributesWithValue++;
      } else {
         attributesWithoutValue++;
      }
   }
   const percentageWithValue = (attributesWithValue / totalAttributes) * 100;

   return (
      <>
         <section className="w-[1440px] mx-auto">
            <div className="flex flex-col justify-center items-center mt-[18px]">
               <div className="flex text-center items-center w-11/12 justify-between">
                  <div className="float-left flex items-center">
                     <div className="bg-[#1BE38F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white">1</div>
                     <p className="text-[#1BE28E] ml-[13px]">Informasi Pribadi</p>
                  </div>
                  <div className="float-right">
                     <p className="font-inter font-normal text-[#747474] text-[16px]">Tingkat Penyelesaian: {parseInt(percentageWithValue)}%</p>
                     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-[#1BE38F] h-2.5 rounded-full" style={{ width: `${parseInt(percentageWithValue)}%` }}></div>
                     </div>
                  </div>
               </div>
               <div className="border-b-4 border-solid border-gray-400 w-11/12 h-1 mt-6"></div>
            </div>
            <p className="font-inter font-semibold text-[40px] mx-14 text-[#515151] mt-[42px]">Informasi Pribadi</p>
            <p className="font-inter font-normal text-lg text-[#4A4A4A] mx-14 max-w-3xl mt-7">Beritahu kami sedikit tentang dirimu, Informasi ini akan muncul di profil publik anda, sehingga calon pembeli dapat lebih mengenal Anda.</p>
            <div className="border-b-4 border-solid border-gray-400 w-11/12 h-1 mt-6 mx-14" />
            <form onSubmit={handleFormSubmit}>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-8">
                  <div className="flex">
                     <label htmlFor="full_name" className="font-inter font-semibold text-lg my-2 flex">
                        Nama Lengkap
                     </label>
                     <p className="text-red-700 my-2 text-lg">*</p>
                  </div>
                  <div className="col-span-2">
                     <input
                        id="full_name"
                        name="full_name"
                        value={fullName}
                        onChange={(e) => {
                           setFullName(e.target.value);
                        }}
                        type="text"
                        className="font-poppins font-[500] py-[15px] text-[20px] w-full border-gray-400 rounded-[10px]"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <label htmlFor="display_name" className="font-inter font-semibold text-lg my-2">
                        Nama Tampilan
                     </label>
                  </div>
                  <div className="col-span-2">
                     <input
                        id="display_name"
                        name="display_name"
                        value={displayName}
                        onChange={(e) => {
                           setDisplayName(e.target.value);
                        }}
                        type="text"
                        className="font-poppins font-[500] py-[15px] text-[20px] w-full border-gray-400 rounded-[10px]"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <p className="font-inter font-semibold text-lg my-14">Gambar Profil</p>
                  <div className="col-span-2">
                     <div style={{ position: "relative", display: "inline-block" }}>
                        <label htmlFor="upload-input" className="cursor-pointer">
                           <div className="w-[200px] h-[200px]">
                              <Image fill={true} className="shadow-lg lg:shadow-lg xl:shadow-xl z-10 rounded-full" src={previewImage ? previewImage : dokter?.doctor.propic} alt="Dokter" />
                           </div>

                           <svg style={{ position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "99" }} className="my-8 mx-14" width="60" height="60" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="44" height="44" rx="22" fill="#87AF5B" />
                              <path
                                 d="M22 27.5C23.25 27.5 24.3127 27.0623 25.188 26.187C26.0633 25.3117 26.5007 24.2493 26.5 23C26.5 21.75 26.0623 20.6873 25.187 19.812C24.3117 18.9367 23.2493 18.4993 22 18.5C20.75 18.5 19.6873 18.9377 18.812 19.813C17.9367 20.6883 17.4993 21.7507 17.5 23C17.5 24.25 17.9377 25.3127 18.813 26.188C19.6883 27.0633 20.7507 27.5007 22 27.5ZM22 26.5L20.9 24.1L18.5 23L20.9 21.9L22 19.5L23.1 21.9L25.5 23L23.1 24.1L22 26.5ZM14 31C13.45 31 12.979 30.804 12.587 30.412C12.195 30.02 11.9993 29.5493 12 29V17C12 16.45 12.196 15.979 12.588 15.587C12.98 15.195 13.4507 14.9993 14 15H17.15L19 13H25L26.85 15H30C30.55 15 31.021 15.196 31.413 15.588C31.805 15.98 32.0007 16.4507 32 17V29C32 29.55 31.804 30.021 31.412 30.413C31.02 30.805 30.5493 31.0007 30 31H14Z"
                                 fill="white"
                              />
                           </svg>
                        </label>
                        <input onChange={handleInputImageFile} id="upload-input" type="file" className="hidden" />
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <label htmlFor="alumnus" className="font-inter font-semibold text-lg">
                        Alumnus
                     </label>
                  </div>
                  <div className="col-span-2">
                     <input
                        id="alumnus"
                        name="alumnus"
                        value={alumnus}
                        onChange={(e) => {
                           setAlumnus(e.target.value);
                        }}
                        type="text"
                        className="font-poppins font-[500] py-[15px] text-[20px] w-full border-gray-400 rounded-[10px]"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <label htmlFor="practice_address" className="font-inter font-semibold text-lg">
                        Praktik di
                     </label>
                  </div>
                  <div className="col-span-2">
                     <input
                        id="practice_address"
                        name="practice_address"
                        value={practiceAddress}
                        onChange={(e) => {
                           setPracticeAddress(e.target.value);
                        }}
                        type="text"
                        className="font-poppins font-[500] py-[15px] text-[20px] rounded-[10px] w-full border-gray-400"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <label htmlFor="work" className="font-inter font-semibold text-lg my-2">
                        Pekerjaan Anda
                     </label>
                  </div>
                  <div className="col-span-2">
                     <div className="flex items-center gap-4">
                        <input
                           id="work"
                           name="work"
                           value={work}
                           onChange={(e) => {
                              setWork(e.target.value);
                           }}
                           type="text"
                           className="font-poppins font-[500] py-[15px] text-[20px] rounded-[10px] w-full border-gray-400"
                        />
                        <p className="font-inter font-bold text-sm">From</p>
                        <Dropdown value={yearEntry} onChange={setYearEntry} />
                        <p className="font-inter font-bold text-sm">To</p>
                        <Dropdown value={yearOut} onChange={setYearOut} />
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-4 mx-14 mt-[105px]">
                  <div className="">
                     <label htmlFor="specialist" className="font-inter font-semibold text-lg my-2">
                        Dokter Khusus
                     </label>
                  </div>
                  <div className="col-span-2">
                     <input
                        id="specialist"
                        name="specialist"
                        value={specialist}
                        onChange={(e) => {
                           setSpecialist(e.target.value);
                        }}
                        type="text"
                        className="font-poppins font-[500] py-[15px] text-[20px] rounded-[10px] w-full border-gray-400"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-3 mx-14 mt-[105px]">
                  <div className="">
                     <label htmlFor="description" className="font-inter font-semibold text-lg">
                        Deskripsi Dokter
                     </label>
                  </div>
                  <div className="col-span-2">
                     <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => {
                           setDescription(e.target.value);
                        }}
                        className="font-poppins font-[500] py-[15px] text-[20px] rounded-[10px] w-full border-gray-400 h-48"
                     />
                  </div>
               </div>
               <div className="float-right mx-16 mt-16 mb-14">
                  <SimpanProfileButton>Simpan</SimpanProfileButton>
               </div>
            </form>
         </section>
      </>
   );
}
