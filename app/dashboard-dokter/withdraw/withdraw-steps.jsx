"use client";

import { useAtom } from "jotai";
import { WithdrawalStepAtom } from "@/components/atoms/useWithdrawal";
import WithdrawForm from "./withdraw-steps/WithdrawForm";
import WithdrawFinale from "./withdraw-steps/WithdrawFinale";
import WithdrawMethodControl from "./withdraw-method-control";
import Error from "./error";

export default function WithdrawSteps() {
   const [WithdrawalStep] = useAtom(WithdrawalStepAtom);

   function RenderStep() {
      // Switch based on current step
      switch (WithdrawalStep) {
         case 1:
            return <WithdrawMethodControl />;
         case 2:
            return <WithdrawForm />;
         case 3:
            return <WithdrawFinale />;
         default:
            return <Error />; // Failsafe
      }
   }

   return (
      <>
         <RenderStep />
      </>
   );
}
