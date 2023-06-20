import { io } from "socket.io-client";
import AWSLink from "./awslink";

// Set the variables
const { awslink, token } = AWSLink();
const endpoint = "ws://https://" + awslink + "/doctor/chat";

// Define the socket
const socket = io(endpoint, {
   auth: {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   },
});
export default socket;
