import { io } from "socket.io-client";
import AWSLink from "./awslink";

// Set the variables
// yeah, not gonna bother cleaning the code
const { awslink, doctortoken } = AWSLink();
const endpoint = "ws://https://" + awslink + "/doctor/chat";

// Define the socket
const socket = io(endpoint, {
   auth: {
      headers: {
         Authorization: `Bearer ${doctortoken}`,
      },
   },
});
export default socket;
