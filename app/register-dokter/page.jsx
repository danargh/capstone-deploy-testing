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
import useSWR from "swr";

// const fetcher = (url) =>
//   fetch(url, {
//     body: {
//       email: form1.initialValues.email,
//       full_name: form1.initialValues.full_name,
//       nik: form1.initialValues.nik,
//       gender: form1.initialValues.nik,
//       birth_place: form1.initialValues.birth_place,
//       birth_date: form1.initialValues.birth_date,
//       religion: form1.initialValues.religion,
//       alumnus: form2.initialValues.alumnus,
//       jurusan: form2.initialValues.jurusan,
//       grad_year: form2.initialValues.grad_year,
//       alumnus2: form2.initialValues.alumnus2,
//       jurusan2: form2.initialValues.jurusan2,
//       grad_year2: form2.initialValues.grad_year2,
//       practice_address: form2.initialValues.practice_address,
//       str_number: form2.initialValues.str_number,
//       cv: form3.initialValues.cv,
//       ijazah: form3.initialValues.ijazah,
//       str: form3.initialValues.str,
//       sip: form3.initialValues.sip,
//     },
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   }).then((res) => res.json());

export default function RegisterDokter() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  // Menggunakan SWR untuk mendapatkan data dari API
//   const { data: doctorsData, error: doctorsError } = useSWR(
//     "https://capstone-project.duckdns.org:8080/admin/doctors",
//     fetcher
//   );

  const form1 = useFormik({
    initialValues: {
      email: "",
      full_name: "",
      nik: "",
      gender: "",
      birth_place: "",
      birth_date: "",
      religion: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email tidak valid").required("Email tidak boleh kosong"),
      full_name: Yup.string().required("Nama lengkap tidak boleh kosong"),
      nik: Yup.string().min(16, "Jumlah digit harus 16").max(16, "Jumlah digit harus 16").required("NIK tidak boleh kosong"),
      gender: Yup.string().required("Jenis kelamin tidak boleh kosong"),
      birth_place: Yup.string().required("Tempat lahir tidak boleh kosong"),
      birth_date: Yup.string().required("Tanggal lahir tidak boleh kosong"),
      religion: Yup.string().required("Agama tidak boleh kosong"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIndex(index + 1);
    },
  });

  const form2 = useFormik({
    initialValues: {
      alumnus: "",
      jurusan: "",
      grad_year: "",
      alumnus2: "",
      jurusan2: "",
      grad_year2: "",
      practice_address: "",
      str_number: "",
    },
    validationSchema: Yup.object({
      alumnus: Yup.string().required("Asal universitas tidak boleh kosong"),
      jurusan: Yup.string().required("Jurusan tidak boleh kosong"),
      grad_year: Yup.string().required("Tahun lulus tidak boleh kosong"),
      practice_address: Yup.string().required("Tempat praktik tidak boleh kosong"),
      str_number: Yup.string().max(20, "Maximal nomor STR 20 digit").required("Nomor STR tidak boleh kosong"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIndex(index + 1);
    },
  });

  const form3 = useFormik({
    initialValues: {
      cv: "",
      ijazah: "",
      str: "",
      sip: "",
    },
    validationSchema: Yup.object({
      cv: Yup.mixed().required("CV tidak boleh kosong"),
      ijazah: Yup.mixed().required("Ijasah tidak boleh kosong"),
      str: Yup.mixed().required("STR tidak boleh kosong"),
      sip: Yup.mixed().required("SIP tidak boleh kosong"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("https://capstone-project.duckdns.org:8080/doctor/register", {
      body: {
        email: form1.initialValues.email,
        full_name: form1.initialValues.full_name,
        nik: form1.initialValues.nik,
        gender: form1.initialValues.nik,
        birth_place: form1.initialValues.birth_place,
        birth_date: form1.initialValues.birth_date,
        religion: form1.initialValues.religion,
        alumnus: form2.initialValues.alumnus,
        jurusan: form2.initialValues.jurusan,
        grad_year: form2.initialValues.grad_year,
        alumnus2: form2.initialValues.alumnus2,
        jurusan2: form2.initialValues.jurusan2,
        grad_year2: form2.initialValues.grad_year2,
        practice_address: form2.initialValues.practice_address,
        str_number: form2.initialValues.str_number,
        cv: form3.initialValues.cv,
        ijazah: form3.initialValues.ijazah,
        str: form3.initialValues.str,
        sip: form3.initialValues.sip,
      },
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      mode: "no-cors", 
    })
    console.log(resp)
   //  Swal.fire("Maaf Pendaftaran Gagal", "Pastikan data pendaftaran sesuai dengan ketentuan.", "error");
   //  Swal.fire("Pendaftaran Berhasil", "Informasi pendaftaran anda akan kami informasikan melalui email.", "success");
    router.push("/login");
  };

  const handleBack = () => {
    setIndex(index - 1);
  };

//   if (doctorsError) {
//     return <div>Error loading data</div>;
//   }

//   if (!doctorsData) {
//     return <div>Loading...</div>;
//   }
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
                           <input type="text" placeholder="Nama Lengkap" className={input_variants({ variant: "default" })} name="full_name" value={form1.values.full_name} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.full_name && form1.errors.full_name ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.full_name}</p> : null}
                        </div>
                        {/* {form1.errors.namaLengkap ? <ErrorMessage errorMessage={form1.errors.namaLengkap} /> : null} */}
                        <div>
                           <input type="text" placeholder="NIK" maxLength={16} className={input_variants({ variant: "default" })} name="nik" value={form1.values.nik} onChange={form1.handleChange} onBlur={form1.handleBlur} error={form1.touched.nik && form1.errors.nik} />
                           {form1.touched.nik && form1.errors.nik ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.nik}</p> : null}
                        </div>
                        {/* {form1.errors.n1 ? <ErrorMessage errorMessage={form1.errors.n1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Jenis Kelamin" className={input_variants({ variant: "default" })} name="gender" value={form1.values.gender} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.gender && form1.errors.gender ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.gender}</p> : null}
                        </div>
                        {/* {form1.errors.jenisKelamin ? <ErrorMessage errorMessage={form1.errors.jenisKelamin} /> : null} */}
                        <div>
                           <input type="text" placeholder="Tempat Lahir" className={input_variants({ variant: "default" })} name="birth_place" value={form1.values.birth_place} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.birth_place && form1.errors.birth_place ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.birth_place}</p> : null}
                        </div>
                        {/* {form1.errors.tempatLahir ? <ErrorMessage errorMessage={form1.errors.tempatLahir} /> : null} */}
                        <div>
                           <input type="date" placeholder="Tanggal Lahir" className={input_variants({ variant: "default" })} name="birth_date" value={form1.values.birth_date} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.birth_date && form1.errors.birth_date ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.birth_date}</p> : null}
                        </div>
                        {/* {form1.errors.tanggalLahir ? <ErrorMessage errorMessage={form1.errors.tanggalLahir} /> : null} */}
                        <div>
                           <input type="text" placeholder="Agama" className={input_variants({ variant: "default" })} name="religion" value={form1.values.religion} onChange={form1.handleChange} onBlur={form1.handleBlur} />
                           {form1.touched.religion && form1.errors.religion ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.religion}</p> : null}
                        </div>
                        {/* {form1.errors.agama ? <ErrorMessage errorMessage={form1.errors.agama} /> : null} */}
                        <RegisterDokterButton>Lanjut</RegisterDokterButton>
                     </form>
                  )}
                  {index === 1 && (
                     <form onSubmit={form2.handleSubmit} className="flex flex-col gap-8">
                        <div>
                           <input type="text" placeholder="Asal Universitas 1*" className={input_variants({ variant: "default" })} name="alumnus" value={form2.values.alumnus} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.alumnus && form2.errors.alumnus ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.alumnus}</p> : null}
                        </div>
                        {/* {formik.errors.asalUniversitas1 ? <ErrorMessage errorMessage={formik.errors.asalUniversitas1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Jurusan*" className={input_variants({ variant: "default" })} name="jurusan" value={form2.values.jurusan} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.jurusan && form2.errors.jurusan ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.jurusan}</p> : null}
                        </div>
                        {/* {form2.errors.jurusan1 ? <ErrorMessage errorMessage={form2.errors.jurusan1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Tahun Lulus*" className={input_variants({ variant: "default" })} name="grad_year" value={form2.values.grad_year} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.grad_year && form2.errors.grad_year ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.grad_year}</p> : null}
                        </div>
                        {/* {form2.errors.tahunLulus1 ? <ErrorMessage errorMessage={form2.errors.tahunLulus1} /> : null} */}
                        <div>
                           <input type="text" placeholder="Asal Universitas 2" className={input_variants({ variant: "default" })} name="alumnus2" value={form2.values.alumnus2} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.alumnus2 && form2.errors.alumnus2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.alumnus2}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Jurusan" className={input_variants({ variant: "default" })} name="jurusan2" value={form2.values.jurusan2} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.jurusan2 && form2.errors.jurusan2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.jurusan2}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Tahun Lulus" className={input_variants({ variant: "default" })} name="grad_year2" value={form2.values.grad_year2} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.grad_year2 && form2.errors.grad_year2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.grad_year2}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="Tempat Praktik Sekarang" className={input_variants({ variant: "default" })} name="practice_address" value={form2.values.practice_address} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.practice_address && form2.errors.practice_address ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.practice_address}</p> : null}
                        </div>
                        <div>
                           <input type="text" placeholder="No STR*" className={input_variants({ variant: "default" })} name="str_number" value={form2.values.str_number} onChange={form2.handleChange} onBlur={form2.handleBlur} />
                           {form2.touched.str_number && form2.errors.str_number ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.str_number}</p> : null}
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
                           <InputFileDaftarCv value={form3.values.cv} onChange={form3.handleChange} onBlur={form3.handleBlur} error={form3.touched.cv && form3.errors.cv}/>

                           {/* {form3.errors.cv ? <ErrorMessage errorMessage={form3.errors.cv} /> : null} */}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Ijazah</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Jadikan satu file dan unggah ijazah dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileDaftarIjasah value={form3.values.ijazah} onChange={form3.handleChange} onBlur={form3.handleBlur} />
                           {/* {form3.errors.ijasah ? <ErrorMessage errorMessage={form3.errors.ijasah} /> : null} */}
                        </div>
                        <div>
                           <div className="max-w-sm">
                              <p className="text-[18px] font-semibold font-poppins float-left">STR Aktif</p>
                              <p className="text-[12px] font-normal text-gray-500 float-left">Unggah STR dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           </div>
                           <InputFileDaftarStr value={form3.values.str} onChange={form3.handleChange} onBlur={form3.handleBlur} />
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
