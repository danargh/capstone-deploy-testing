"use client";

import React from "react";
import { useAtom } from "jotai";
import { selectedDropdownAtom } from "@/components/atoms/useWithdrawal";
import Error from "../error";
import BankForm from "./(bank)/bank-form";
import VWalletForm from "./(vwallet)/vwallet-form";

export default function PaymentForm() {
   const [selectedDropdown] = useAtom(selectedDropdownAtom);

   console.log(selectedDropdown)
   function RenderForm() {
      // Switch the thing
      switch (selectedDropdown) {
         case "Bank":
            return <BankForm />;
         case "VWallet":
            return <VWalletForm />;
         default:
            return <Error />; // Fail-safe
      }
   }

   return (
      <>
         <RenderForm />
      </>
   );
}
