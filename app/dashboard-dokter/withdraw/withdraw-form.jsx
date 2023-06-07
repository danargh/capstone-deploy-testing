"use client";

import React, { useState } from "react";
import WithdrawMethodControl from "./withdraw-method-control";
import PaymentForm from "./(bank)/bank-form";
import PaymentFinale from "./(bank)/payment-confirm";

export default function WithdrawForm() {
   const [currentStep, setCurrentStep] = useState(1);
   const [withdrawMethod, setWithdrawMethod] = useState("");
   const [WithdrawData, setWithdrawData] = useState({});

   // Continue the Withdrawal Steps
//    const continueWithdrawal = () => {
//       setCurrentStep(currentStep + 1);
//    };

//    const handleWithdrawMethodSelect = (method) => {
//       setWithdrawMethod(method);
//       continueWithdrawal();
//    };

//    const handleWithdrawDataChange = (data) => {
//       setPaymentData(data);
//    };
   return (
      <>
            <WithdrawMethodControl
               continueWithdrawal={continueWithdrawal}
               handleWithdrawData={handleWithdrawMethodSelect}
            />
            {/* <PaymentForm
               continueWithdrawal={continueWithdrawal}
               handleWithdrawData={handleWithdrawDataChange}
            /> */}
         {/* <PaymentFinale /> */}
      </>
   );
}
