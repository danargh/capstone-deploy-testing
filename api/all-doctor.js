import React from "react";
import useSWR, { mutate } from "swr";
import AWSLink from "./awslink";


const https = require('https');
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
const fetcher = async (url) =>
   fetch(url, {
      headers: {},
      agent: httpsAgent,
   }).then((res) => res.json());

export default function FetchAllDoctor() {
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
      revalidateOnReconnect: false,

   });

   const doctorData = fetchedDoctorData ? fetchedDoctorData.doctors : [];
   console.log(fetchedDoctorData);
   console.log(doctorError);
   return { doctorData, doctorError };
}
