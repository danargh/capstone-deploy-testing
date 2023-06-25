import { atom, useAtom } from 'jotai';
import useSWR, { mutate } from 'swr';
import Cookies from 'js-cookie';
// Define the Atoms
export const WithdrawalStepAtom = atom(1);
export const selectedDropdownAtom = atom('');
export const WithdrawalMethodAtom = atom('');
export const WithdrawalDataAtom = atom([
   {
      method: '',
      account_number: 0,
      amount: 0,
      bank: '',
      //   message: '',
      //   comment: '',
   },
]);

// Export necessary functions
const useWithdrawal = () => {
   const [withdrawalData, setWithdrawalData] = useAtom(WithdrawalDataAtom);
   const [withdrawalStep, setWithdrawalStep] = useAtom(WithdrawalStepAtom);
   const [withdrawalMethod] = useAtom(WithdrawalMethodAtom);
   const [selectedDropdown] = useAtom(selectedDropdownAtom);

   // Handle form steps
   const handleWithdrawalSteps = () => {
      setWithdrawalStep(withdrawalStep + 1);
   };

   // Save the data from each steps
   const handleWithdrawalData = (data) => {
      const newData = [
         {
            method: selectedDropdown,
            bank: withdrawalMethod,
            account_number: String(data.accountNumber),
            amount: Number(data.amount),
         },
      ];
      setWithdrawalData(newData);
   };

   // Send the data needed THEN reset
   const handleWithdrawalDataSend = async () => {
    console.log(withdrawalData)
    const Data = withdrawalData[0];
    console.log(Data)
    console.log(JSON.stringify(Data))
      const token = Cookies.get('doctorToken');
      try {
         const response = await fetch('https://capstone-project.duckdns.org:8080/doctor/withdraw', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(Data),
         });
         if (!response.ok) {
            throw new Error('Error');
         }
         const responseData = await response.json();
         console.log(responseData);
         mutate('https://capstone-project.duckdns.org:8080/doctor/withdraw');
         setWithdrawalData([]);
         setWithdrawalStep(1);
      } catch (error) {
         console.error(error);
      }
   };

   return {
      withdrawalData,
      withdrawalStep,
      handleWithdrawalData,
      handleWithdrawalSteps,
      handleWithdrawalDataSend,
   };
};

export default useWithdrawal;
