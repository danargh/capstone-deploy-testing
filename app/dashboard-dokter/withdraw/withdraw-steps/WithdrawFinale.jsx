"use client";

import React from "react";
import { useAtom } from "jotai";
import { selectedDropdownAtom } from "@/components/atoms/useWithdrawal";
import Error from "../error";
import BankFinale from "./(bank)/bank-finale";
import VWalletFinale from "./(vwallet)/vwallet-finale";

export default function WithdrawFinale() {
   const [selectedDropdown] = useAtom(selectedDropdownAtom);

   function RenderFinalForm() {
      // Switch the thing
      switch (selectedDropdown) {
         case "Bank":
            return <BankFinale />;
         case "VWallet":
            return <VWalletFinale />;
         default:
            return <Error />; // Fail-safe
      }
   }

   return (
      <>
         <RenderFinalForm />
      </>
   );
}
