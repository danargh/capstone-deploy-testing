import React from "react";
import { FilterIcon } from "@/public/assets/icons/icons";

import { button_variants, text_variants_inter, text_variants_poppins } from "../custom/custom";

export const DetailDokterButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "xs" })}>{children}</p>
      </button>
   );
};

export const DaftarWhatsAppButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "outline_primary", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "lg" })}>{children}</p>
      </button>
   );
};
export const DaftarEmailButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "lg" })}>{children}</p>
      </button>
   );
};
export const KirimKomentarButton = ({ onClick, children }) => {
   return (
      <button className={` w-[150px] flex items-center py-[16px] ${button_variants({ variant: "default", size: "default" })}`} onClick={onClick}>
         <p className="font-poppins font-[600] text-[14px] leading-4">{children}</p>
      </button>
   );
};

export const LoginDokterButton = ({ onClick, children }) => {
    return (
        <button className={button_variants({ variant: "default", size: "full" })} onClick={onClick}>
            <p className={text_variants_inter({ variant: "inter_20_reguler" })}>{children}</p>
        </button>
    );
};

export const TransferSaldo = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>{children}</p>
      </button>
   );
};
export const FilterButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "ic_black", size: "default" })} onClick={onClick}>
         <div style={{ display: "flex", alignItems: "center" }}>
            <p className={text_variants_inter({ variant: "inter_24_reguler" })}>{children}</p>
         </div>
      </button>
   );
};

export const KirimPesanButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "green_bg", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_20_reguler" })}>{children}</p>
      </button>
   );
};
export const AddObatButton = ({ onClick }) => {
   return (
      <button className={button_variants({ variant: "green_bg", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "xs" })}>{children}</p>
      </button>
   );
};

export const SendObatButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "green_bg", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_24_reguler" })}>{children}</p>
      </button>
   );
};
export const KirimArtikelButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "xs" })}>{children}</p>
      </button>
   );
};

export const SimpanArtikelButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "xs" })}>{children}</p>
      </button>
   );
};

export const LanjutkanProfileButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>{children}</p>
      </button>
   );
};
export const SimpanProfileButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>{children}</p>
      </button>
   );
};

export const BatalHapusArtikelButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "outline_danger", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "xl" })}>{children}</p>
      </button>
   );
};

export const HapusArtikelButton = ({ onClick, children }) => {
    return (
        <button className={button_variants({ variant: "danger", size: "default" })} onClick={onClick}>
            <p className={text_variants_poppins({ size: "xl" })}>{children}</p>
        </button>
    );
};

export const ContinueWithdrawButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_24_reguler" })}>{children}</p>
      </button>
   );
};

export const LanjutkanWithdrawButton = ({ onClick, children }) => {
    return (
        <button className={button_variants({ variant: "default", size: "full" })} onClick={onClick}>
            <p className={text_variants_inter({ variant: "inter_20_reguler" })}>{children}</p>
        </button>
    );
};
export const TutupWithdrawButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "default", size: "default" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>{children}</p>
      </button>
   );
};

export const SignInButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "green_bg", size: "default" })} onClick={onClick}>
         <p className={text_variants_poppins({ size: "sm" })}>{children}</p>
      </button>
   );
};

export const RegisterButton = ({ onClick, children }) => {
   return (
      <button className={button_variants({ variant: "green_bg", size: "default" })} onClick={onClick}>
         <div style={{ display: "flex", alignItems: "center" }}>
            <p className={text_variants_poppins({ size: "sm" })}>{children}</p>
         </div>
      </button>
   );

};

export const LoginUserButton = ({ onClick, children }) => {
    return (
        <button className={button_variants({ variant: "green_bg", size: "full" })} onClick={onClick}>
            <p className={text_variants_inter({ variant: "inter_20_reguler" })}>{children}</p>
        </button>
    );
};
