"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
  
    const socket = useRef(null);
  
    useEffect(() => {
      const createSocket = () => {
        const socket = new WebSocket("ws://localhost:8080");
  
        // Event listener for WebSocket connection establishment
        socket.addEventListener("open", () => {
          console.log("WebSocket connection established");
        });
  
        // Event listener for receiving messages from the server
        socket.addEventListener("message", (event) => {
          const receivedMessage = JSON.parse(event.data);
          setResponse(receivedMessage);
        });
  
        // Event listener for WebSocket disconnections
        socket.addEventListener("close", () => {
          console.log("WebSocket connection closed");
        });
  
        return socket;
      };
  
      // Only create a new socket if the previous one is not defined
      if (!socket.current) {
        socket.current = createSocket();
      }
  
      return () => {
        // Close the WebSocket connection when the component is unmounted
        if (socket.current) {
          socket.current.close();
        }
      };
    }, []);
  
    const sendMessage = () => {
      if (message.trim() === "") return;
  
      // Send the message to the WebSocket server
      const messageToSend = {
        senderName: "Kevin Kaslana",
        sentMessage: message,
        senderUserType: "doctor",
        sentImage:
          "https://cdn.discordapp.com/attachments/864895809379106837/1120981059169955911/image.png",
      };
      socket.current.send(JSON.stringify(messageToSend));
    };
  
    return (
      <div>
        <input
          type="text"
          className="border-[#8EBF59] w-full h-12 px-4 text-sm peer bg-white outline-none rounded-lg focus:border-none valid:bg-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="hover:text-[#7CA153] transition-colors text-left font-poppins font-[700] text-[12px] text-web-green-500"
          onClick={sendMessage}
        >
          Send
        </button>
        <p>Response: </p>
        <div>
          <p>Sender Name: {response.senderName}</p>
          <p>Sender Message:{response.sentMessage}</p>
          <p>Sender User: {response.senderUserType}</p>
        </div>
        {response && response.sentImage !== "" ? (
          <Image
            src={response.sentImage}
            height={500}
            width={500}
            alt="image"
          />
        ) : (
          <></>
        )}
      </div>
    );
  }