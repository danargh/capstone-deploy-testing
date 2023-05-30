import { cva, VariantProps } from 'class-variance-authority';
import search_icon from '../../public/assets/icons/search-icon.svg';
//The naming convention and variants are temporary, feel free to edit or give suggestion
const button_variants = cva(['font-normal', 'rounded-lg', 'gap-3', 'flex', 'justify-center'], {
   variants: {
      variant: {
         default: ['bg-[#8EBF59]', 'hover:bg-[#63863E] hover:drop-shadow-md', 'text-white'],
         green_bg: ['bg-[#17A102]', 'hover:bg-[#63863E] hover:drop-shadow-md', 'text-white'],
         ic_black: ['bg-[#8EBF59]', 'hover:bg-[#63863E] hover:drop-shadow-md', 'text-black'],
         danger: ['bg-[#A12D28]', 'hover:bg-[#A12D28] hover:drop-shadow-md', 'text-white'],
         success: ['bg-[#517D67]', 'hover:bg-[#2D6248] hover:drop-shadow-md', 'text-white'],
         warning: ['bg-[#FEDE2D]', 'hover:bg-[#B29701] hover:drop-shadow-md', 'text-white'],
         outline_primary: ['bg-none', 'border-[#8EBF59]', 'text-[#8EBF59]', 'border', 'hover:bg-[#EBEBEB]'],
         outline_danger: ['bg-none', 'border-[#B1514D]', 'text-[#B1514D]', 'border', 'hover:bg-[#EBEBEB]'],
         disable: ['bg-[#DEDEDE]', 'text-[#858585] cursor-not-allowed'],
      },

      size: {
         default: ['py-3', 'px-4'],
         full: ['w-full', 'py-3'],
      },
   },
   defaultVariants: {
      variant: 'default',
      size: 'default',
   },
});

const text_variants_inter = cva('font-inter', {
   variants: {
      variant: {
         inter_32_bold: ['text-xl', 'font-bold'],
         inter_24_bold: ['text-lg', 'font-bold'],
         inter_22_bold: ['text-md', 'font-bold'],
         inter_20_bold: ['text-sm', 'font-bold'],
         inter_32_semiBold: ['text-xl', 'font-semibold'],
         inter_24_semiBold: ['text-lg', 'font-semibold'],
         inter_32_reguler: ['text-xl', 'font-reguler'],
         inter_24_reguler: ['text-lg', 'font-reguler'],
         inter_22_reguler: ['text-md', 'font-reguler'],
         inter_20_reguler: ['text-sm', 'font-reguler'],
         //  xs: ["16px", "24px"],
         //  sm: ["20px", "24px"],
         //  md: ["22px", "27px"],
         //  lg: ["24px", "29px"],
         //  xl: ["32px", "39px"],
         //  "2xl": ["36px", "54px"],
         //  "3xl": ["48px", "58px"],
         //  "4xl": ["64px", "78px"],
      },
   },
});

const text_variants_poppins = cva('font-poppins', {
   variants: {
      variant: {
         poppins_bold: ['font-bold'],
      },
      size: {
         xs: ['text-xs'], //16px
         sm: ['text-sm'], //20px
         md: ['text-md'], //22px
         lg: ['text-lg'], //24px
         xl: ['text-xl'], //32px
         xxl: ['text-2xl'], //36px
      },
   },
});

const input_variants = cva('w-full', {
   variants: {
      variant: {
         default: [' border  rounded-lg border-neutral-70 '],
         search: [' border  rounded-lg border-neutral-70 '],
         detail_artikel: ['border   border-neutral-70'],
         dokter_login: ['rounded-lg border-none bg-neutral-40'],
         contact_us: [
            'font-inter border border-neutral-50 text-neutral-80 bg-[#F0F0F0] hover:bg-neutral-40 focus:ring-2 focus:outline-none focus:ring-neutral-80  font-normal rounded-lg text-sm px-4 py-3  inline-flex items-center justify-between ',
         ],
         textarea: ['rounded-lg h-[312px] border-neutral-70'],
         chat_text: ['rounded-2xl h-[43px] bg-neutral-40 border-neutral-900 border-4 focus:border-neutral-900 '],
         chat_textarea: ['rounded-lg h-[222px] border-neutral-70'],
         image: [' border  rounded-s-lg border-neutral-70  py-2 ps-2 text-neutral-80 '],
      },
   },
   defaultVariants: {
      variant: 'default',
   },
});
export { button_variants, text_variants_inter, input_variants, text_variants_poppins };
