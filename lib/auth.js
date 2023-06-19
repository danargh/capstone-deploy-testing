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
   const { trigger, isMutating, data, error } = useSWRMutation("https://capstone-project.duckdns.org:8080/doctor/login", sendLoginRequest);

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
