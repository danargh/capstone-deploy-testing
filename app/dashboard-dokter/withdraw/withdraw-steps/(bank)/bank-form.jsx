import React from "react";
import Image from "next/image";
import { bankLists } from "@/components/ui/BankCardList";
import { useAtom } from "jotai";
import useWithdrawal, {
   WithdrawalMethodAtom,
} from "@/components/atoms/useWithdrawal";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function BankForm() {
   const { handleWithdrawalSteps, handleWithdrawalData } = useWithdrawal();
   const [withdrawalMethod] = useAtom(WithdrawalMethodAtom);

   console.log(withdrawalMethod)
   const validationSchema = Yup.object().shape({
      accountNumber: Yup.string().required("Nomor Rekening harus diisi"),
      amount: Yup.number()
         .typeError("Nominal harus berupa angka")
         .min(100000, "Minimal Transfer Rp.100.000")
         .required("Nominal harus diisi"),
   });
   const formik = useFormik({
      initialValues: {
         accountNumber: "",
         amount: "",
         message: "",
      },
      validationSchema,
      onSubmit: (values) => {
         //  handleWithdrawalSteps();
         handleWithdrawalSteps();
         handleWithdrawalData(values);
         console.log(withdrawalData);
      },
   });

   function SelectedBankCard({ selectedBank }) {
        const selectedBankData = bankLists.find((bank) => bank.bankName === selectedBank);
    return (
         <div className="flex flex-row gap-[11px] items-center justify-start self-stretch shrink-0 relative">
            <Image src={selectedBankData.bankLogo} alt="bank" width={selectedBankData.width} height={selectedBankData.height} />

            <div className="font-inter font-medium text-xs/[130%] text-[rgba(0,0,0,0.47)] text-left relative w-[107px]">
               {selectedBankData.bankName}
            </div>
         </div>
      )
   }

   return (
      <form onSubmit={formik.handleSubmit}>
         <div className="flex flex-col gap-[19px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
               <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
                  <div className="border-solid border-[#d9d9d9] border-[3px] pt-3 pr-5 pb-3 pl-5 flex flex-col gap-2.5 items-start justify-start shrink-0 w-[474px] relative overflow-hidden">
                     <SelectedBankCard selectedBank={withdrawalMethod} />
                  </div>

                  <div className="flex flex-col gap-[19px] items-center justify-start shrink-0 relative">
                     <div className="flex flex-col gap-[19px] items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                           <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                              <div className="font-inter font-medium font-md text-neutral-900 text-center relative">
                                 Nomor Rekening
                              </div>
                           </div>
                           <input
                              type="text"
                              className="font-inter font-normal text-[18px]/[150%] placeholder:text-[#b9b4b4] text-left bg-neutral-0 rounded-lg border-solid border-[#acacac] border p-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 w-[474px] relative"
                              placeholder="Masukkan Nomor Rekening"
                              name="accountNumber"
                              value={formik.values.accountNumber}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                           />
                           {formik.touched.accountNumber &&
                           formik.errors.accountNumber ? (
                              <div className="font-inter font-light text-[15px]/[150%] text-[#ff0000] text-left relative w-[453px] flex items-center justify-start">
                                 {formik.errors.accountNumber}
                              </div>
                           ) : null}
                        </div>

                        <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                           <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                              <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                                 <div className="font-inter font-medium text-md text-neutral-900 text-center relative">
                                    Nominal
                                 </div>
                              </div>
                              <input
                                 type="text"
                                 className="font-inter font-normal text-[18px]/[150%] placeholder:text-[#b9b4b4] bg-neutral-0 rounded-lg border-solid border-[#acacac] border p-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 w-[474px] relative"
                                 placeholder="Rp.0"
                                 name="amount"
                                 value={formik.values.amount}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                              />
                              {formik.touched.amount && formik.errors.amount ? (
                                 <div className="font-inter font-light text-[15px]/[150%] text-[#ff0000] text-left relative w-[453px] flex items-center justify-start">
                                    {formik.errors.amount}
                                 </div>
                              ) : null}
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                        <div className="pt-2.5 pr-0 pb-2.5 pl-0 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                           <div className="font-inter font-medium text-md text-neutral-900 text-center relative">
                              Pesan (Opsional)
                           </div>
                        </div>

                        <input
                           type="text"
                           className="bg-neutral-0 rounded-lg border-solid border-[#acacac] border p-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 w-[474px] h-[47px] relative"
                           name="message"
                           value={formik.values.message}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                     </div>
                  </div>
               </div>
               <button
                  type="submit"
                  className="font-poppins font-medium text-lg text-neutral-0 text-left bg-web-green-300 rounded-xl pt-4 pr-3 pb-4 pl-3 flex gap-2.5 items-center justify-center w-[168px] h-[75px] relative"
               >
                  Lanjutkan
               </button>
            </div>
         </div>
      </form>
   );
}
