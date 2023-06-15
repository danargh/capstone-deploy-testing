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
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function RegisterDokter() {
   const [index, setIndex] = useState(0);
   const router = useRouter();

   const form1 = useFormik({
      initialValues: {
         email: "",
         namaLengkap: "",
         nik: "",
         jenisKelamin: "",
         tempatLahir: "",
         tanggalLahir: "",
         agama: "",
      },
      validationSchema: Yup.object({
         email: Yup.string().email("Email tidak valid").required("Email tidak boleh kosong"),
         namaLengkap: Yup.string().required("Nama lengkap tidak boleh kosong"),
         nik: Yup.string().min(16, "Jumlah digit harus 16").max(16, "Jumlah digit harus 16").required("NIK tidak boleh kosong"),
         jenisKelamin: Yup.string().required("Jenis kelamin tidak boleh kosong"),
         tempatLahir: Yup.string().required("Tempat lahir tidak boleh kosong"),
         tanggalLahir: Yup.string().required("Tanggal lahir tidak boleh kosong"),
         agama: Yup.string().required("Agama tidak boleh kosong"),
      }),
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
         setIndex(index + 1);
      },
   });

   const form2 = useFormik({
      initialValues: {
         asalUniversitas1: "",
         jurusan1: "",
         tahunLulus1: "",
         asalUniversitas2: "",
         jurusan2: "",
         tahunLulus2: "",
         tempatPraktikSekarang: "",
         noSTR: "",
      },
      validationSchema: Yup.object({
         asalUniversitas1: Yup.string().required("Asal universitas tidak boleh kosong"),
         jurusan1: Yup.string().required("Jurusan tidak boleh kosong"),
         tahunLulus1: Yup.string().required("Tahun lulus tidak boleh kosong"),
         tempatPraktikSekarang: Yup.string().required("Tempat praktik tidak boleh kosong"),
         noSTR: Yup.string().max(20, "Maximal nomor STR 20 digit").required("Nomor STR tidak boleh kosong"),
      }),
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
         setIndex(index + 1);
      },
   });

   const form3 = useFormik({
      initialValues: {
         cv: "",
         ijasah: "",
         strAktif: "",
         sip: "",
      },
      validationSchema: Yup.object({
         cv: Yup.mixed().required("CV tidak boleh kosong"),
         ijasah: Yup.mixed().required("Ijasah tidak boleh kosong"),
         strAktif: Yup.mixed().required("STR tidak boleh kosong"),
         sip: Yup.mixed().required("SIP tidak boleh kosong"),
      }),
      onSubmit: (values) => {
         // alert(JSON.stringify(values, null, 2));
      },
   });

   const handleFormSubmit = (e) => {
      e.preventDefault();
      Swal.fire("Maaf Pendaftaran Gagal", "Pastikan data pendaftaran sesuai dengan ketentuan.", "error");
      Swal.fire("Pendaftaran Berhasil", "Informasi pendaftaran anda akan kami informasikan melalui email.", "success");
      router.push("/login");
   };

   const handleBack = () => {
      setIndex(index - 1);
   };
   return (
      <>
         <section className="min-screen-2xl h-screen flex bg-gray-500 ">
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
                     <form onSubmit={form1.handleSubmit} className="flex flex-col gap-8">
                        <div>
                           <input type="email" name="email" placeholder="Alamat Email" className={input_variants({ variant: "default" })} value={form1.values.email} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.email && form1.errors.email ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.email}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Nama Lengkap" className={input_variants({ variant: "default" })} name="namaLengkap" value={form1.values.namaLengkap} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.namaLengkap && form1.errors.namaLengkap ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.namaLengkap}</p> : null}
                        </div>
                        {/* {form1.errors.namaLengkap ? <ErrorMessage errorMessage={form1.errors.namaLengkap} /> : null} */}
                        <div>
                           <input type="text" placeholder="NIK" className={input_variants({ variant: "default" })} name="nik" value={form1.values.nik} onChange={form1.handleChange} onBlur={form1.handleBlur} error={form1.touched.nik && form1.errors.nik} />
                           {form1.touched.nik && form1.errors.nik ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.nik}</p> : null}
                        </div>
                        {/* {form1.errors.n1 ? <ErrorMessage errorMessage={form1.errors.n1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Jenis Kelamin" className={input_variants({ variant: "default" })} name="jenisKelamin" value={form1.values.jenisKelamin} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.jenisKelamin && form1.errors.jenisKelamin ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.jenisKelamin}</p> : null}
                        </div>
                        {/* {form1.errors.jenisKelamin ? <ErrorMessage errorMessage={form1.errors.jenisKelamin} /> : null} */}
                        <div>
                           <input type="text" placeholder="Tempat Lahir" className={input_variants({ variant: "default" })} name="tempatLahir" value={form1.values.tempatLahir} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.tempatLahir && form1.errors.tempatLahir ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.tempatLahir}</p> : null}
                        </div>
                        {/* {form1.errors.tempatLahir ? <ErrorMessage errorMessage={form1.errors.tempatLahir} /> : null} */}
                        <div>
                           <input type="date" placeholder="Tanggal Lahir" className={input_variants({ variant: "default" })} name="tanggalLahir" value={form1.values.tanggalLahir} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.tanggalLahir && form1.errors.tanggalLahir ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.tanggalLahir}</p> : null}
                        </div>
                        {/* {form1.errors.tanggalLahir ? <ErrorMessage errorMessage={form1.errors.tanggalLahir} /> : null} */}
                        <div>
                           <input type="text" placeholder="Agama" className={input_variants({ variant: "default" })} name="agama" value={form1.values.agama} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.agama && form1.errors.agama ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.agama}</p> : null}
                        </div>
                        {/* {form1.errors.agama ? <ErrorMessage errorMessage={form1.errors.agama} /> : null} */}
                        <RegisterDokterButton type="submit">Lanjut</RegisterDokterButton>
                     </form>
                  )}
                  {index === 1 && (
                     <form onSubmit={form2.handleSubmit} className="flex flex-col gap-8">
                        <div>
                           <input type="text" placeholder="Asal Universitas 1*" className={input_variants({ variant: "default" })} name="asalUniversitas1" value={form2.values.asalUniversitas1} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.asalUniversitas1 && form2.errors.asalUniversitas1 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.asalUniversitas1}</p> : null}
                        </div>
                        {/* {formik.errors.asalUniversitas1 ? <ErrorMessage errorMessage={formik.errors.asalUniversitas1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Jurusan*" className={input_variants({ variant: "default" })} name="jurusan1" value={form2.values.jurusan1} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.jurusan1 && form2.errors.jurusan1 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.jurusan1}</p> : null}
                        </div>
                        {/* {form2.errors.jurusan1 ? <ErrorMessage errorMessage={form2.errors.jurusan1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Tahun Lulus*" className={input_variants({ variant: "default" })} name="tahunLulus1" value={form2.values.tahunLulus1} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.tahunLulus1 && form2.errors.tahunLulus1 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.tahunLulus1}</p> : null}
                        </div>
                        {/* {form2.errors.tahunLulus1 ? <ErrorMessage errorMessage={form2.errors.tahunLulus1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Asal Universitas 2" className={input_variants({ variant: "default" })} name="asalUniversitas2" value={form2.values.asalUniversitas2} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.asalUniversitas2 && form2.errors.tahunLulus2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.tahunLulus2}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Jurusan" className={input_variants({ variant: "default" })} name="jurusan2" value={form2.values.jurusan2} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.jurusan2 && form2.errors.jurusan2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.jurusan2}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Tahun Lulus" className={input_variants({ variant: "default" })} name="tahunLulus2" value={form2.values.tahunLulus2} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.tahunLulus2 && form2.errors.tahunLulus2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.tahunLulus2}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Tempat Praktik Sekarang" className={input_variants({ variant: "default" })} name="tempatPraktikSekarang" value={form2.values.tempatPraktikSekarang} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.tempatPraktikSekarang && form2.errors.tempatPraktikSekarang ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.tempatPraktikSekarang}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="No STR*" className={input_variants({ variant: "default" })} name="noSTR" value={form2.values.noSTR} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.noSTR && form2.errors.noSTR ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.noSTR}</p> : null}
                        </div>
                        {/* {form2.errors.tahunLulus1 ? <ErrorMessage errorMessage={form2.errors.tahunLulus1} /> : null} */}
                        <RegisterDokterButton type="submit">Lanjut</RegisterDokterButton>
                     </form>
                  )}
                  {index === 2 && (
                     <form onSubmit={form3.handleSubmit} className="flex flex-col gap-4">
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Curriculum Vitae (CV)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah CV dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarCv value={form3.values.cv} onChange={form3.handleChange} onBlur={form3.handleBlur} />

                           {/* {form3.errors.cv ? <ErrorMessage errorMessage={form3.errors.cv} /> : null} */}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Ijazah</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Jadikan satu file dan unggah ijazah dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarIjasah value={form3.values.ijasah} onChange={form3.handleChange} onBlur={form3.handleBlur} />
                           {/* {form3.errors.ijasah ? <ErrorMessage errorMessage={form3.errors.ijasah} /> : null} */}
                        </div>
                        <div>
                           <div className="max-w-sm">
                              <p className="text-[18px] font-semibold font-poppins float-left">STR Aktif</p>
                              <p className="text-[12px] font-normal text-gray-500 float-left">Unggah STR dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           </div>
                           <InputFileDaftarStr value={form3.values.strAktif} onChange={form3.handleChange} onBlur={form3.handleBlur} />
                           {/* {form3.errors.strAktif ? <ErrorMessage errorMessage={form3.errors.strAktif} /> : null} */}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">SIP (Surat Izin Praktek)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah SIP dalam bentuk pdf dengan ukuranmaksimal 2 MB</p>
                           <InputFileDaftarSip value={form3.values.sip} onChange={form3.handleChange} onBlur={form3.handleBlur} />
                           {/* {form3.errors.sip ? <ErrorMessage errorMessage={form3.errors.sip} /> : null} */}
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
