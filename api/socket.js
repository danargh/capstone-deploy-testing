import { io } from "socket.io-client";
import AWSLink from "./awslink";

// Legacy code
const { doctortoken } = AWSLink();
const endpoint = "wss://capstone-project.duckdns.org:8080/doctor/chat";

// Define the socket
const socket = io(endpoint, {
   auth: {
      headers: {
         Authorization: `Bearer ${doctortoken}`,
      },
   },
});
export default socket;
