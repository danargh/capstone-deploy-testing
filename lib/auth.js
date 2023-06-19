// login function with swr
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import Cookies from "js-cookie";

async function sendLoginRequest(url, { arg }) {
   return fetch(url, {
      headers: {
         "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(arg),
   }).then((res) => res.json());
}

export function login() {
   const { trigger, isMutating, data, error } = useSWRMutation("http://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080/doctor/login", sendLoginRequest);

   return {
      data,
      error,
      isLoginLoading: isMutating,
      triggerLogin: ({ email, password }) => trigger({ email: email, password: password }),
   };
}

export function logout() {
   Cookies.remove("doctorToken");
}
