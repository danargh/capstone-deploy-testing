import React from "react";
import useSWR, { mutate } from "swr";
import AWSLink from "./awslink";

const fetcher = async (url, token) =>
   fetch(url, {
      headers: {},
   }).then((res) => res.json());

export default async function FetchAllDoctor() {
   // Endpoint
   const { awslink } = AWSLink();
   const doctorEndpoint = `${awslink}/doctors`;

   //Fetch the datas
   const {
      data: fetchedDoctorData,
      error: doctorError,
      mutate: doctorMutate,
   } = useSWR(doctorEndpoint, fetcher, {
      revalidateOnFocus: false,
   });

   const doctorData = fetchedDoctorData ? fetchedDoctorData.doctors : [];
   console.log(fetchedDoctorData);
   console.log(doctorError);
   return { doctorData, doctorError };
}
