import { atom, useAtom } from "jotai";

export const WithdrawalDataAtom = atom([]);
export const WithdrawalStepAtom = atom(1);

const useWithdrawal = () => {
   const [withdrawalData, setWithdrawalData] = useAtom(WithdrawalDataAtom);
   const [withdrawalStep, setWithdrawalStep] = useAtom(WithdrawalStepAtom);

   const handleWithdrawalData = (data) => {
      setWithdrawalData(data);
   };

   const handleWithdrawalSteps = (step) => {
      setWithdrawalStep(step);
   };

   return {
      withdrawalData,
      withdrawalStep,
      handleWithdrawalData,
      handleWithdrawalSteps,
   };
};

export default useWithdrawal;
