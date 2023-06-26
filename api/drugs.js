import useSWR, { mutate } from "swr";
import AWSLink from "./awslink";
import Cookies from "js-cookie";

// Fix Later
const fetcher = async (url, token) =>
    fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => res.json());

export default function drugsDoctorAPI() {

    const token = Cookies.get("doctorToken") || "";
    const drugsEndpoint = `https://capstone-project.duckdns.org:8080/doctor/drugs`;

    const {
        data: doctordrugs,
    } = useSWR(drugsEndpoint, () => fetcher(drugsEndpoint, token), {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        doctordrugs,
        drugsEndpoint,
        token,
    };
}
