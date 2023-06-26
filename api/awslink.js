"use client";

import Cookies from "js-cookie";

// const awsLinkAtom = atom(
//    "https://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080"
// );

// const authToken = atom(
//    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MSwiYXV0aG9yaXplZCI6dHJ1ZSwiZXhwIjoxNjg3NDEwMTAzfQ.0ZCsPav8XwTRfsjuSiwaNGe5YkKy-BlgIi5wM_zfAOM"
// );

export default function AWSLink() {
   const token = Cookies.get("adminToken") || "";
   const doctortoken = Cookies.get("doctorToken") || "";
   //yeah not gonna bother changing the entire project endpoint
   const awslink = "https://capstone-project.duckdns.org:8080";
   //    const [token] = useAtom(authToken);
   return { awslink, token, doctortoken };
}
