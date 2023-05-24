import React from "react";
import { FilterIcon, PersonIcon } from "@/public/assets/icons/icons";
import Image from "next/image";

import { button_variants, text_variants_inter, text_variants_poppins } from "../custom/custom";

// export const DetailDokter = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'default', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'xs' })}>Detail</p>
//       </button>
//    );
// };

// export const DaftarWhatsApp = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'outline_primary', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'lg' })}>WHATSAPP</p>
//       </button>
//    );
// };
// export const DaftarEmail = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'default', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'lg' })}>Email</p>
//       </button>
//    );
// };
export const KirimKomentar = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "green_bg", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_20_reguler" })}>Tulis Komentar</p>
      </button>
   );
};

export const LoginDokter = ({ onClick }) => {
   return (
      <button className={button_variants({ variant: "default", size: "full" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_20_reguler" })}>Login</p>
      </button>
   );
};

export const TransferSaldo = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "default", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>Transfer</p>
      </button>
   );
};
export const Filter = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "ic_black", size: "default" })}
         onClick={onClick}
      >
         <div style={{ display: "flex", alignItems: "center" }}>
            <FilterIcon />
            <p className={text_variants_inter({ variant: "inter_24_reguler" })}>Filter Data</p>
         </div>
      </button>
   );
};

export const KirimPesan = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "green_bg", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_20_reguler" })}>Kirim Pesan</p>
      </button>
   );
};
// export const AddObat = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'green_bg', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'xs' })}>Add</p>
//       </button>
//    );
// };

export const SendObat = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "green_bg", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_24_reguler" })}>Send</p>
      </button>
   );
};
// export const KirimArtikel = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'default', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'xs' })}>Kirim Artikel</p>
//       </button>
//    );
// };

// export const SimpanArtikel = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'default', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'xs' })}>Simpan Artikel</p>
//       </button>
//    );
// };

export const LanjutkanProfile = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "default", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>Lanjutkan</p>
      </button>
   );
};
export const SimpanProfile = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "default", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>Simpan Profile</p>
      </button>
   );
};

// export const BatalHapusArtikel = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'outline_danger', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'xl' })}>Tidak</p>
//       </button>
//    );
// };

// export const HapusArtikel = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'danger', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'xl' })}>Ya</p>
//       </button>
//    );
// };

export const ContinueWithdraw = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "default", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_24_reguler" })}>Continue</p>
      </button>
   );
};

export const LanjutkanWithdraw = ({ onClick }) => {
   return (
      <button className={button_variants({ variant: "default", size: "full" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_20_reguler" })}>Lanjutkan</p>
      </button>
   );
};
export const TutupWithdraw = ({ onClick }) => {
   return (
      <button
         className={button_variants({ variant: "default", size: "default" })}
         onClick={onClick}
      >
         <p className={text_variants_inter({ variant: "inter_32_reguler" })}>Tutup</p>
      </button>
   );
};

// export const SignIn = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'green_bg', size: 'default' })} onClick={onClick}>
//          <p className={text_variants_poppins({ size: 'sm' })}>Sign In</p>
//       </button>
//    );
// };

// export const Register = ({ onClick }) => {
//    return (
//       <button className={button_variants({ variant: 'green_bg', size: 'default' })} onClick={onClick}>
//          <div style={{ display: 'flex', alignItems: 'center' }}>
//             <PersonIcon />
//             <p className={text_variants_poppins({ size: 'sm' })}>Register</p>
//          </div>
//       </button>
//    );
// };

export const LoginUser = ({ onClick }) => {
   return (
      <button className={button_variants({ variant: "green_bg", size: "full" })} onClick={onClick}>
         <p className={text_variants_inter({ variant: "inter_20_reguler" })}>Login</p>
      </button>
   );
};
