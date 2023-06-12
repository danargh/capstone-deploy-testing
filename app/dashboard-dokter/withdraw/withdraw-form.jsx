"use client";

import { useAtom } from "jotai";
import { WithdrawalStepAtom } from "@/components/atoms/useWithdrawal";
import PaymentForm from "./(bank)/bank-form";
import PaymentFinale from "./(bank)/payment-confirm";
import WithdrawMethodControl from "./withdraw-method-control";

export default function WithdrawForm() {
   const [WithdrawalStep] = useAtom(WithdrawalStepAtom);

   function RenderStep() {
      // Switch based on current step
      switch (WithdrawalStep) {
         case 1:
            return <WithdrawMethodControl />;
         case 2:
            return <PaymentForm />;
         case 3:
            return <PaymentFinale />;
         default:
            return <WithdrawMethodControl />;
      }
   }

   return (
      <>
         <RenderStep />
      </>
   );
}
