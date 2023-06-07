"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "@/components/forms/Input";
import { input_variants } from "@/components/custom/custom";
import { ArrowBackIcon2 } from "@/public/assets/icons/icons";
import { RegisterButton, RegisterDokterButton } from "@/components/ui/Button";
import HeroLogin from "@/components/ui/HeroLogin";
import InputFileDaftarCv from "@/components/forms/InputFileDaftar/input-file-daftarCv";
import Swal from "sweetalert2";
import InputFileDaftarIjasah from "@/components/forms/InputFileDaftar/input-file-daftarIjasah";
import InputFileDaftarStr from "@/components/forms/InputFileDaftar/input-file-daftarstr";
import InputFileDaftarSip from "@/components/forms/InputFileDaftar/input-file-daftarsip";
import ErrorMessage from "@/components/error/ErrorMessage";

export default function RegisterDokter() {
   const [index, setIndex] = useState(0);

   const formik = useFormik({
      initialValues: {
        email: "",
        namaLengkap: "",
        nik: "",
        jenisKelamin: "",
        tempatLahir: "",
        tanggalLahir: "",
        agama: "",
        asalUniversitas1: "",
        jurusan1: "",
        tahunLulus1: "",
        asalUniversitas2: "",
        jurusan2: "",
        tahunLulus2: "",
        tempatPraktikSekarang: "",
        cv:"",
        ijasah:"",
        strAktif:"",
        sip:"",
      },
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
      validate: values => {
         let errors = {}

         if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Format email Anda tidak sesuai';
          }
          if (!values.namaLengkap) {
            errors.namaLengkap = 'Pastikan format penulisan nama lengkap sudah benar';
          }
          if (!values.nik) {
            errors.nik = 'Pastikan format penulisan NIK sudah benar';
          }
          if (!values.jenisKelamin) {
            errors.jenisKelamin = 'Pastikan format penulisan Jenis Kelamin sudah benar';
          }
          if (!values.tempatLahir) {
            errors.tempatLahir = 'Pastikan format penulisan Tempat Lahir sudah benar';
          }
          if (!values.tanggalLahir) {
            errors.tanggalLahir = 'Pastikan format penulisan Tanggal Lahir sudah benar';
          }
          if (!values.agama) {
            errors.agama = 'Pastikan format penulisan Agama sudah benar';
          }
          if (!values.asalUniversitas1) {
            errors.asalUniversitas1 = 'Pastikan format penulisan Asala Universitas 1 sudah benar';
          }
          if (!values.jurusan1) {
            errors.jurusan1 = 'Pastikan format penulisan Jurusan 1 sudah benar';
          }
          if (!values.tahunLulus1) {
            errors.tahunLulus1 = 'Pastikan format penulisan Tahun Lulus 1 sudah benar';
          }
          if (!values.asalUniversitas2) {
            errors.asalUniversitas1 = 'Pastikan format penulisan Asala Universitas 2 sudah benar';
          }
          if (!values.jurusan2) {
            errors.jurusan1 = 'Pastikan format penulisan Jurusan 2 sudah benar';
          }
          if (!values.tahunLulus2) {
            errors.tahunLulus2 = 'Pastikan format penulisan Tahun Lulus 2 sudah benar';
          }
          if (!values.tempatPraktikSekarang) {
            errors.tahunLulus2 = 'Pastikan format penulisan Tahun Lulus 2 sudah benar';
          }
          if (!values.cv) {
            errors.cv = 'Pastikan format penulisan CV sudah benar';
          }
          if (!values.ijasah) {
            errors.ijasah = 'Pastikan format penulisan Ijasah sudah benar';
          }
          if (!values.strAktif) {
            errors.strAktif = 'Pastikan format penulisan STR Aktif sudah benar';
          }
          if (!values.sip) {
            errors.sip = 'Pastikan format penulisan SIP sudah benar';
          }
         return errors
      }
    });
   
   const handleFormSubmit = (e) => {
      e.preventDefault();

      Swal.fire("Maaf Pendaftaran Gagal", "Pastikan data pendaftaran sesuai dengan ketentuan.", "error");

      Swal.fire("Pendaftaran Berhasil", "Informasi pendaftaran anda akan kami informasikan melalui email.", "success");
   };

   const handleBack = () => {
      setIndex(index - 1);
   };
   return (
      <>
         <section className="flex bg-gray-500 ">
            <HeroLogin />
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
               <div className="flex mt-5">
                  {index > 0 && (
                     <a href="#" className="absolute ml-5" onClick={handleBack}>
                        <ArrowBackIcon2 width="60" height="60" />
                     </a>
                  )}
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-12 text-center mx-auto">Daftar Sebagai Dokter</p>
               </div>

               <div className="w-[480px] flex flex-col gap-8 mx-auto text-center">
                  <p className="font-poppins font-normal text-xs text-[#7CA153] mb-12">Mari bergabung sebagai mitra dokter di Prevent dan bantu kami untuk memberikan pelayanan kesehatan mental di Indonesia</p>
                  <div className="mb-12">
                     <div className="flex justify-center items-center">
                        <div className="bg-[#BDDA9F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white">1</div>
                        <div className="border border-solid border-3 bg-[#63863E] w-[113px] h-2"></div>
                        <div
                           className="bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]"
                           style={{
                              backgroundColor: index >= 1 ? "#BDDA9F" : "white",
                              color: index >= 1 ? "white" : "#63863E",
                              position: index >= 1 ? "relative" : "static",
                              zIndex: index >= 1 ? 1 : "auto",
                           }}
                        >
                           2
                        </div>
                        <div className="border border-solid border-3 bg-[#63863E] w-[113px] h-2"></div>
                        <div
                           className="bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]"
                           style={{
                              backgroundColor: index >= 2 ? "#BDDA9F" : "white",
                              color: index >= 2 ? "white" : "#63863E",
                           }}
                        >
                           3
                        </div>
                     </div>
                     <div className="flex gap-11 justify-center items-center">
                        <p className="text-[12px]">Informasi Pribadi</p>
                        <p className="text-[12px]">Informasi Akademik</p>
                        <p className="text-[12px]">Informasi Dokumen</p>
                     </div>
                  </div>
                  {index === 0 && (
                     <form onSubmit={() => {
                        formik.handleSubmit()
                        setIndex(1)
                     }} className="flex flex-col gap-8">
                           <Input
                              type="email"
                              name="email"
                              placeholder="Alamat Email"
                              className={input_variants({ variant: "dokter_login" })}
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.email && formik.errors.email}
                           />
                           {formik.touched.email && formik.errors.email ? <ErrorMessage errorMessage={formik.errors.email} /> : null}
                           <Input
                              type="text"
                              placeholder="Nama Lengkap"
                              className={input_variants({ variant: "dokter_login" })}
                              name="namaLengkap"
                              value={formik.values.namaLengkap}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.namaLengkap && formik.errors.namaLengkap}
                           />
                           {formik.errors.namaLengkap ? <ErrorMessage errorMessage={formik.errors.namaLengkap} /> : null}
                           <Input
                              type="number"
                              placeholder="NIK"
                              className={input_variants({ variant: "dokter_login" })}
                              name="nik"
                              value={formik.values.nik}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.nik && formik.errors.nik}
                           />
                           {formik.errors.nik ? <ErrorMessage errorMessage={formik.errors.nik} /> : null}
                           <Input
                              type="text"
                              placeholder="Jenis Kelamin"
                              className={input_variants({ variant: "dokter_login" })}
                              name="jenisKelamin"
                              value={formik.values.jenisKelamin}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.jenisKelamin && formik.errors.jenisKelamin}
                           />
                            {formik.errors.jenisKelamin ? <ErrorMessage errorMessage={formik.errors.jenisKelamin} /> : null}
                           <Input
                              type="text"
                              placeholder="Tempat Lahir"
                              className={input_variants({ variant: "dokter_login" })}
                              name="tempatLahir"
                              value={formik.values.tempatLahir}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.tempatLahir && formik.errors.tempatLahir}
                           />
                            {formik.errors.tempatLahir ? <ErrorMessage errorMessage={formik.errors.tempatLahir} /> : null}
                           <Input
                              type="date"
                              placeholder="Tanggal Lahir"
                              className={input_variants({ variant: "dokter_login" })}
                              name="tanggalLahir"
                              value={formik.values.tanggalLahir}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.tanggalLahir && formik.errors.tanggalLahir}
                           />
                            {formik.errors.tanggalLahir ? <ErrorMessage errorMessage={formik.errors.tanggalLahir} /> : null}
                           <Input
                              type="text"
                              placeholder="Agama"
                              className={input_variants({ variant: "dokter_login" })}
                              name="agama"
                              value={formik.values.agama}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.agama && formik.errors.agama}
                           />
                           {formik.errors.agama ? <ErrorMessage errorMessage={formik.errors.agama} /> : null}
                        <RegisterDokterButton>Lanjut</RegisterDokterButton>
                     </form>
                  )}
                  {index === 1 && (
                     <form onSubmit={() => {
                        formik.handleSubmit()
                        setIndex(2)
                     }} className="flex flex-col gap-8">
                        <Input
                           type="text"
                           placeholder="Asal Universitas 1*"
                           className={input_variants({ variant: "dokter_login" })}
                           name="asalUniversitas1"
                           value={formik.values.asalUniversitas1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {formik.errors.asalUniversitas1 ? <ErrorMessage errorMessage={formik.errors.asalUniversitas1} /> : null}
                        <Input
                           type="text"
                           placeholder="Jurusan*"
                           className={input_variants({ variant: "dokter_login" })}
                           name="jurusan1"
                           value={formik.values.jurusan1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {formik.errors.jurusan1 ? <ErrorMessage errorMessage={formik.errors.jurusan1} /> : null}
                        <Input
                           type="number"
                           placeholder="Tahun Lulus*"
                           className={input_variants({ variant: "dokter_login" })}
                           name="tahunLulus1"
                           value={formik.values.tahunLulus1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {formik.errors.tahunLulus1 ? <ErrorMessage errorMessage={formik.errors.tahunLulus1} /> : null}
                        <Input
                           type="text"
                           placeholder="Asal Universitas 2"
                           className={input_variants({ variant: "dokter_login" })}
                           name="asalUniversitas2"
                           value={formik.values.asalUniversitas2}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        <Input
                           type="text"
                           placeholder="Jurusan"
                           className={input_variants({ variant: "dokter_login" })}
                           name="jurusan2"
                           value={formik.values.jurusan2}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        <Input
                           type="number"
                           placeholder="Tahun Lulus"
                           className={input_variants({ variant: "dokter_login" })}
                           name="tahunLulus2"
                           value={formik.values.tahunLulus2}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        <Input
                           type="text"
                           placeholder="Tempat Praktik Sekarang"
                           className={input_variants({ variant: "dokter_login" })}
                           name="tempatPraktikSekarang"
                           value={formik.values.tempatPraktikSekarang}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {formik.errors.tahunLulus1 ? <ErrorMessage errorMessage={formik.errors.tahunLulus1} /> : null}
                        <RegisterDokterButton>Lanjut</RegisterDokterButton>
                     </form>
                  )}
                  {index === 2 && (
                     <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Curriculum Vitae (CV)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah CV dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarCv 
                              value={formik.values.cv}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                           />
                           {formik.errors.cv ? <ErrorMessage errorMessage={formik.errors.cv} /> : null}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Ijazah</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Jadikan satu file dan unggah ijazah dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarIjasah 
                              value={formik.values.ijasah}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                           />
                           {formik.errors.ijasah ? <ErrorMessage errorMessage={formik.errors.ijasah} /> : null}
                        </div>
                        <div>
                           <div className="max-w-sm">
                              <p className="text-[18px] font-semibold font-poppins float-left">STR Aktif</p>
                              <p className="text-[12px] font-normal text-gray-500 float-left">Unggah STR dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           </div>
                           <InputFileDaftarStr 
                              value={formik.values.strAktif}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                           />
                           {formik.errors.strAktif ? <ErrorMessage errorMessage={formik.errors.strAktif} /> : null}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">SIP (Surat Izin Praktek)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah SIP dalam bentuk pdf dengan ukuranmaksimal 2 MB</p>
                           <InputFileDaftarSip 
                              value={formik.values.sip}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                           />
                           {formik.errors.sip ? <ErrorMessage errorMessage={formik.errors.sip} /> : null}
                        </div>
                        <div className="mt-4 w-full flex flex-col justify-center">
                           <RegisterDokterButton onClick={handleFormSubmit}>Daftar</RegisterDokterButton>
                        </div>
                     </form>
                  )}
               </div>
            </div>
         </section>
      </>
   );
}
