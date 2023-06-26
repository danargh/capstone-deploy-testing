'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { input_variants } from '@/components/custom/custom';
import { ArrowBackIcon2 } from '@/public/assets/icons/icons';
import { RegisterDokterButton, NextStep2RegisterDokterButton, NextStep1RegisterDokterButton } from '@/components/ui/Button';
import HeroLogin from '@/components/ui/HeroLogin';
import Swal from 'sweetalert2';
import InputFileRegister from '@/components/forms/input-file-register';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function RegisterDokter() {
   const [index, setIndex] = useState(0);
   const router = useRouter();
   const [dataRegister, setDataRegister] = useState({});
   const [dataFileCV, setDataFileCV] = useState(null);
   const [dataFileIjazah, setDataFileIjazah] = useState(null);
   const [dataFileStr, setDataFileStr] = useState(null);
   const [dataFileSip, setDataFileSip] = useState(null);
   const [errorFileInput, setErrorFileInput] = useState([]);

   const form1 = useFormik({
      initialValues: {
         email: '',
         full_name: '',
         nik: '',
         gender: '',
         birth_place: '',
         birth_date: '',
         religion: '',
      },
      validationSchema: Yup.object({
         email: Yup.string().email('Email tidak valid').required('Email tidak boleh kosong'),
         full_name: Yup.string().required('Nama lengkap tidak boleh kosong'),
         nik: Yup.string().length(16, 'Jumlah digit harus 16').required('NIK tidak boleh kosong'),
         gender: Yup.string().required('Jenis kelamin tidak boleh kosong'),
         birth_place: Yup.string().required('Tempat lahir tidak boleh kosong'),
         birth_date: Yup.string().required('Tanggal lahir tidak boleh kosong'),
         religion: Yup.string().required('Agama tidak boleh kosong'),
      }),
      onSubmit: (values) => {
         setDataRegister(values);
         setIndex(index + 1);
      },
   });

   const form2 = useFormik({
      initialValues: {
         alumnus: '',
         jurusan: '',
         grad_year: '',
         alumnus2: '',
         jurusan2: '',
         grad_year2: '',
         practice_address: '',
         str_number: '',
      },
      validationSchema: Yup.object({
         alumnus: Yup.string().required('Asal universitas tidak boleh kosong'),
         jurusan: Yup.string().required('Jurusan tidak boleh kosong'),
         grad_year: Yup.string().required('Tahun lulus tidak boleh kosong'),
         practice_address: Yup.string().required('Tempat praktik tidak boleh kosong'),
         str_number: Yup.string().max(20, 'Maximal nomor STR 20 digit').required('Nomor STR tidak boleh kosong'),
      }),
      onSubmit: (values) => {
         const newValues = { ...dataRegister, ...values };
         setDataRegister(newValues);
         setIndex(index + 1);
      },
   });

   const validateFile = (file) => {
      const allowedExtensions = ['.pdf', '.PDF'];
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      return allowedExtensions.includes('.' + fileExtension);
   };

   const handleFileCV = (e) => {
      const file = e.target.files[0];

      if (validateFile(file) === false) {
         setErrorFileInput([...errorFileInput, 'cv']);
         setDataFileCV(null);
         return;
      }

      if (file?.size > 2000000) {
         setErrorFileInput([...errorFileInput, 'cv']);
         setDataFileCV(null);
         return;
      }
      setErrorFileInput(errorFileInput.filter((item) => item !== 'cv'));
      setDataFileCV(file);
   };

   const handleFileIjazah = (e) => {
      const file = e.target.files[0];

      if (validateFile(file) === false) {
         setErrorFileInput([...errorFileInput, 'ijazah']);
         setDataFileIjazah(null);
         return;
      }

      if (file?.size > 2000000) {
         setErrorFileInput([...errorFileInput, 'ijazah']);
         setDataFileIjazah(null);
         return;
      }
      setErrorFileInput(errorFileInput.filter((item) => item !== 'ijazah'));
      setDataFileIjazah(file);
   };

   const handleFileStr = (e) => {
      const file = e.target.files[0];

      if (validateFile(file) === false) {
         setErrorFileInput([...errorFileInput, 'str']);
         setDataFileStr(null);
         return;
      }

      if (file?.size > 2000000) {
         setErrorFileInput([...errorFileInput, 'str']);
         setDataFileStr(null);
         return;
      }
      setErrorFileInput(errorFileInput.filter((item) => item !== 'str'));
      setDataFileStr(file);
   };

   const handleFileSip = (e) => {
      const file = e.target.files[0];

      if (validateFile(file) === false) {
         setErrorFileInput([...errorFileInput, 'sip']);
         setDataFileSip(null);
         return;
      }

      if (file?.size > 2000000) {
         setErrorFileInput([...errorFileInput, 'sip']);
         setDataFileSip(null);
         return;
      }
      setErrorFileInput(errorFileInput.filter((item) => item !== 'sip'));
      setDataFileSip(file);
   };

   const handleFormSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();

      formData.append('email', dataRegister.email);
      formData.append('full_name', dataRegister.full_name);
      formData.append('nik', dataRegister.nik);
      formData.append('gender', dataRegister.gender);
      formData.append('birth_place', dataRegister.birth_place);
      formData.append('birth_date', dataRegister.birth_date);
      formData.append('religion', dataRegister.religion);
      formData.append('alumnus', dataRegister.alumnus);
      formData.append('jurusan', dataRegister.jurusan);
      formData.append('grad_year', dataRegister.grad_year);
      formData.append('alumnus2', dataRegister.alumnus2);
      formData.append('jurusan2', dataRegister.jurusan2);
      formData.append('grad_year2', dataRegister.grad_year2);
      formData.append('practice_address', dataRegister.practice_address);
      formData.append('str_number', dataRegister.str_number);
      formData.append('cv', dataFileCV);
      formData.append('ijazah', dataFileIjazah);
      formData.append('str', dataFileStr);
      formData.append('sip', dataFileSip);

      try {
         const resp = await fetch('https://capstone-project.duckdns.org:8080/doctor/register', {
            method: 'POST',
            body: formData,
         });

         if ((resp.message = 'success create doctor')) {
            // Pendaftaran berhasil
            Swal.fire('Pendaftaran Berhasil', 'Informasi pendaftaran anda akan kami informasikan melalui email.', 'success');
            router.push('/login');
         } else {
            // Pendaftaran gagal
            Swal.fire('Maaf Pendaftaran Gagal', 'Pastikan data pendaftaran sesuai dengan ketentuan.', 'error');
         }
      } catch (error) {
         // Error saat mengirim permintaan
         console.error(error);
         Swal.fire('Maaf Pendaftaran Gagal', 'Terjadi kesalahan saat mengirim permintaan.', 'error');
      }
   };

   const handleBack = () => {
      setIndex(index - 1);
   };

   return (
      <>
         <section className="min-screen-2xl h-screen flex bg-gray-500 ">
            <HeroLogin />
            <div className="w-1/2 bg-neutral-0 flex flex-col justify-center">
               <motion.div whileInView={{ y: [16, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="flex mt-5">
                  {index > 0 && (
                     <button id="back-step-register" className="absolute ml-5 hover:scale-125 transition-transform" onClick={handleBack}>
                        <ArrowBackIcon2 width="60" height="60" />
                     </button>
                  )}
                  <p className="font-poppins font-[700] text-[36px] text-[#7CA153] mb-6 text-center mx-auto">Daftar Sebagai Dokter</p>
               </motion.div>

               <motion.div whileInView={{ x: [64, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="w-[480px] flex flex-col gap-4 mx-auto text-center">
                  <p className="font-poppins font-normal text-xs text-[#7CA153] mb-4">Mari bergabung sebagai mitra dokter di Prevent dan bantu kami untuk memberikan pelayanan kesehatan mental di Indonesia</p>
                  <div className="mb-6">
                     <div className="flex justify-center items-center">
                        <div className="bg-[#BDDA9F] rounded-full w-[39px] h-[37px] flex justify-center items-center gap-0 text-white">1</div>
                        <div className="border border-solid border-3 bg-[#63863E] w-[113px] h-2"></div>
                        <div
                           className="bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]"
                           style={{
                              backgroundColor: index >= 1 ? '#BDDA9F' : 'white',
                              color: index >= 1 ? 'white' : '#63863E',
                              position: index >= 1 ? 'relative' : 'static',
                              zIndex: index >= 1 ? 1 : 'auto',
                           }}
                        >
                           2
                        </div>
                        <div className="border border-solid border-3 bg-[#63863E] w-[113px] h-2"></div>
                        <div
                           className="bg-white rounded-full w-[39px] h-[37px] flex justify-center items-center border border-3 border-solid border-[#63863E] text-[#63863E]"
                           style={{
                              backgroundColor: index >= 2 ? '#BDDA9F' : 'white',
                              color: index >= 2 ? 'white' : '#63863E',
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
                     <motion.form id="data-diri" whileInView={{ y: [16, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} onSubmit={form1.handleSubmit} className="flex flex-col gap-8">
                        <div>
                           <input
                              id="email-daftar"
                              type="email"
                              name="email"
                              placeholder="Alamat Email"
                              className={input_variants({ variant: 'default' })}
                              value={form1.values.email}
                              onChange={form1.handleChange}
                              onBlur={form1.handleBlur}
                           />
                           {form1.touched.email && form1.errors.email ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.email}</p> : null}
                        </div>
                        <div>
                           <input
                              id="nama-lengkap-daftar"
                              type="text"
                              placeholder="Nama Lengkap"
                              className={input_variants({ variant: 'default' })}
                              name="full_name"
                              value={form1.values.full_name}
                              onChange={form1.handleChange}
                              onBlur={form1.handleBlur}
                           />
                           {form1.touched.full_name && form1.errors.full_name ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.full_name}</p> : null}
                        </div>
                        <div>
                           <input
                              id="nik-daftar"
                              type="text"
                              placeholder="NIK"
                              maxLength={16}
                              className={input_variants({ variant: 'default' })}
                              name="nik"
                              value={form1.values.nik}
                              onChange={form1.handleChange}
                              onBlur={form1.handleBlur}
                              error={form1.touched.nik && form1.errors.nik}
                           />
                           {form1.touched.nik && form1.errors.nik ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.nik}</p> : null}
                        </div>

                        <div>
                           <select id="kelamin-daftar" className={input_variants({ variant: 'default' })} name="gender" value={form1.values.gender} onChange={form1.handleChange} onBlur={form1.handleBlur}>
                              <option value="">Pilih Jenis Kelamin</option>
                              <option value="Laki-Laki">Laki-Laki</option>
                              <option value="Perempuan">Perempuan</option>
                           </select>
                           {form1.touched.gender && form1.errors.gender ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.gender}</p> : null}
                        </div>

                        <div>
                           <input
                              id="tempat-lahir-daftar"
                              type="text"
                              placeholder="Tempat Lahir"
                              className={input_variants({ variant: 'default' })}
                              name="birth_place"
                              value={form1.values.birth_place}
                              onChange={form1.handleChange}
                              onBlur={form1.handleBlur}
                           />
                           {form1.touched.birth_place && form1.errors.birth_place ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.birth_place}</p> : null}
                        </div>

                        <div>
                           <input
                              id="tanggal-lahir-daftar"
                              type="date"
                              max="2005-01-01"
                              placeholder="Tanggal Lahir"
                              className={input_variants({ variant: 'default' })}
                              name="birth_date"
                              value={form1.values.birth_date}
                              onChange={form1.handleChange}
                              onBlur={form1.handleBlur}
                           />
                           {form1.touched.birth_date && form1.errors.birth_date ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.birth_date}</p> : null}
                        </div>

                        <div>
                           <input
                              id="tanggal-lahir-daftar"
                              type="text"
                              placeholder="Agama"
                              className={input_variants({ variant: 'default' })}
                              name="religion"
                              value={form1.values.religion}
                              onChange={form1.handleChange}
                              onBlur={form1.handleBlur}
                           />
                           {form1.touched.religion && form1.errors.religion ? <p className="text-[14px] text-left text-red-600 absolute">{form1.errors.religion}</p> : null}
                        </div>

                        <NextStep1RegisterDokterButton>Lanjut</NextStep1RegisterDokterButton>
                     </motion.form>
                  )}
                  {index === 1 && (
                     <motion.form id="pendidikan-daftar" whileInView={{ y: [16, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} onSubmit={form2.handleSubmit} className="flex flex-col gap-8">
                        <div>
                           <input
                              id="asal-universitas1-daftar"
                              type="text"
                              placeholder="Asal Universitas 1*"
                              className={input_variants({ variant: 'default' })}
                              name="alumnus"
                              value={form2.values.alumnus}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.alumnus && form2.errors.alumnus ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.alumnus}</p> : null}
                        </div>

                        <div>
                           <input
                              id="jurusan1-daftar"
                              type="text"
                              placeholder="Jurusan*"
                              className={input_variants({ variant: 'default' })}
                              name="jurusan"
                              value={form2.values.jurusan}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.jurusan && form2.errors.jurusan ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.jurusan}</p> : null}
                        </div>

                        <div>
                           <input
                              id="tahun-lulus1-daftar"
                              type="text"
                              placeholder="Tahun Lulus*"
                              className={input_variants({ variant: 'default' })}
                              name="grad_year"
                              value={form2.values.grad_year}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.grad_year && form2.errors.grad_year ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.grad_year}</p> : null}
                        </div>

                        <div>
                           <input
                              id="asal-universitas2-daftar"
                              type="text"
                              placeholder="Asal Universitas 2"
                              className={input_variants({ variant: 'default' })}
                              name="alumnus2"
                              value={form2.values.alumnus2}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.alumnus2 && form2.errors.alumnus2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.alumnus2}</p> : null}
                        </div>
                        <div>
                           <input
                              id="jurusan2-daftar"
                              type="text"
                              placeholder="Jurusan"
                              className={input_variants({ variant: 'default' })}
                              name="jurusan2"
                              value={form2.values.jurusan2}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.jurusan2 && form2.errors.jurusan2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.jurusan2}</p> : null}
                        </div>
                        <div>
                           <input
                              id="tahun-lulus2-daftar"
                              type="text"
                              placeholder="Tahun Lulus"
                              className={input_variants({ variant: 'default' })}
                              name="grad_year2"
                              value={form2.values.grad_year2}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.grad_year2 && form2.errors.grad_year2 ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.grad_year2}</p> : null}
                        </div>
                        <div>
                           <input
                              id="tempat-praktik-daftar"
                              type="text"
                              placeholder="Tempat Praktik Sekarang"
                              className={input_variants({ variant: 'default' })}
                              name="practice_address"
                              value={form2.values.practice_address}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.practice_address && form2.errors.practice_address ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.practice_address}</p> : null}
                        </div>
                        <div>
                           <input
                              id="str-daftar"
                              type="text"
                              placeholder="No STR*"
                              className={input_variants({ variant: 'default' })}
                              name="str_number"
                              value={form2.values.str_number}
                              onChange={form2.handleChange}
                              onBlur={form2.handleBlur}
                           />
                           {form2.touched.str_number && form2.errors.str_number ? <p className="text-[14px] text-left text-red-600 absolute">{form2.errors.str_number}</p> : null}
                        </div>

                        <NextStep2RegisterDokterButton type="submit">Lanjut</NextStep2RegisterDokterButton>
                     </motion.form>
                  )}
                  {index === 2 && (
                     <motion.form id="input-file-pedaftaran" whileInView={{ y: [16, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                        <div>
                           <label htmlFor="cv" className="text-[18px] font-semibold font-poppins float-left">
                              Curriculum Vitae (CV)
                           </label>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah CV dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileRegister selectedFile={dataFileCV}>
                              <input
                                 id="input-file-cv"
                                 style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    cursor: 'pointer',
                                 }}
                                 type="file"
                                 onChange={handleFileCV}
                                 required
                              />
                           </InputFileRegister>
                           {errorFileInput.includes('cv') && <p className="text-[14px] text-left text-red-600 absolute">Ukuran file lebih dari 2 MB atau Format file salah.</p>}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">Ijazah</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Jadikan satu file dan unggah ijazah dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           <InputFileRegister selectedFile={dataFileIjazah}>
                              <input
                                 id="input-file-ijazah"
                                 style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    cursor: 'pointer',
                                 }}
                                 type="file"
                                 onChange={handleFileIjazah}
                                 required
                              />
                           </InputFileRegister>
                           {errorFileInput.includes('ijazah') && <p className="text-[14px] text-left text-red-600 absolute">Ukuran file lebih dari 2 MB atau Format file salah.</p>}
                        </div>
                        <div>
                           <div className="max-w-sm">
                              <p className="text-[18px] font-semibold font-poppins float-left">STR Aktif</p>
                              <p className="text-[12px] font-normal text-gray-500 float-left">Unggah STR dalam bentuk pdf dengan ukuran maksimal 2 MB</p>
                           </div>
                           <InputFileRegister selectedFile={dataFileStr}>
                              <input
                                 id="input-file-str"
                                 style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    cursor: 'pointer',
                                 }}
                                 type="file"
                                 onChange={handleFileStr}
                                 required
                              />
                           </InputFileRegister>
                           {errorFileInput.includes('str') && <p className="text-[14px] text-left text-red-600 absolute">Ukuran file lebih dari 2 MB atau Format file salah.</p>}
                        </div>
                        <div>
                           <p className="text-[18px] font-semibold font-poppins float-left">SIP (Surat Izin Praktek)</p>
                           <p className="text-[12px] font-normal text-gray-500 float-left">Unggah SIP dalam bentuk pdf dengan ukuranmaksimal 2 MB</p>
                           <InputFileRegister selectedFile={dataFileSip}>
                              <input
                                 id="input-file-sip"
                                 style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    cursor: 'pointer',
                                 }}
                                 type="file"
                                 onChange={handleFileSip}
                                 required
                              />
                           </InputFileRegister>
                           {errorFileInput.includes('sip') && <p className="text-[14px] text-left text-red-600 absolute">Ukuran file lebih dari 2 MB atau Format file salah.</p>}
                        </div>
                        <div className="mt-4 w-full flex flex-col justify-center">
                           <RegisterDokterButton type="submit">Daftar</RegisterDokterButton>
                        </div>
                     </motion.form>
                  )}
               </motion.div>
            </div>
         </section>
      </>
   );
}
