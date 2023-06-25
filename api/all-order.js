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

export default function ordersDoctorAPI() {

    const token = Cookies.get("doctorToken") || "";
    const ordersEndpoint = `https://capstone-project.duckdns.org:8080/doctor/schedules`;

    const {
        data: doctorOrders,
    } = useSWR(ordersEndpoint, () => fetcher(ordersEndpoint, token), {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        doctorOrders,
        ordersEndpoint,
        token,
    };
}
