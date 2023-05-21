import { cva, VariantProps } from "class-variance-authority";
import search_icon from "../../public/assets/icons/search-icon.svg"
//The naming convention and variants are temporary, feel free to edit or give suggestion
const button_variants = cva(["font-normal", "rounded-lg", "gap-3", "flex", "justify-center"], {
    variants: {
        variant: {
            default: ["bg-[#8EBF59]", "hover:bg-[#63863E] hover:drop-shadow-md", "text-white"],
            danger: ["bg-[#B1514D]", "hover:bg-[#A12D28] hover:drop-shadow-md", "text-white"],
            success: ["bg-[#517D67]", "hover:bg-[#2D6248] hover:drop-shadow-md", "text-white"],
            warning: ["bg-[#FEDE2D]", "hover:bg-[#B29701] hover:drop-shadow-md", "text-white"],
            outline_primary: [
                "bg-none",
                "border-[#8EBF59]",
                "text-[#8EBF59]",
                "border",
                "hover:bg-[#EBEBEB]",
            ],
            outline_danger: [
                "bg-none",
                "border-[#B1514D]",
                "text-[#B1514D]",
                "border",
                "hover:bg-[#EBEBEB]",
            ],
            disable: ["bg-[#DEDEDE]", "text-[#858585] cursor-not-allowed"],
        },

        size: {
            default: ["py-3", "px-4"],
            full: ["w-full", "py-3"],
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

const text_variants_inter = cva("font-inter", {
    variants: {
        variant: {
            inter_32_bold: ["text-xl", "font-bold"],
            inter_24_bold: ["text-lg", "font-bold"],
            inter_22_bold: ["text-md", "font-bold"],
            inter_20_bold: ["text-sm", "font-bold"],
            inter_32_semiBold: ["text-xl", "font-semibold"],
            inter_24_semiBold: ["text-lg", "font-semibold"],
            inter_32_reguler: ["text-xl", "font-reguler"],
            inter_24_reguler: ["text-lg", "font-reguler"],
            inter_22_reguler: ["text-md", "font-reguler"],
        },
    },
});

const text_variants_poppins = cva("font-poppins", {
    variants: {
        variant: {
            poppins_bold: ["font-bold"],
        },
        size: {
            xs: ["text-xs"],
            sm: ["text-sm"],
            md: ["text-md"],
            lg: ["text-lg"],
            xl: ["text-xl"],
        },
    },
});

const input_variants = cva('w-full', {
    variants: {
        variant: {
            default: [" border  rounded-lg border-warning-black-70"],
            search: [" border  rounded-lg border-warning-black-70  bg-[url(" + search_icon + ")]"],
            dokter_login: ["rounded-lg border-none bg-warning-black-40"],
            textarea: ["rounded-lg h-[312px] border-warning-black-70"],
            chat_text: ['rounded-2xl h-[43px] bg-warning-black-40 border-warning-black-900 border-4'],
            chat_textarea: ["rounded-lg h-[222px] border-warning-black-70"],
            image: [" border  rounded-s-lg border-warning-black-70  py-2 ps-2 "],
        },
        defaultVariants: {
            variant: "default",

        },
    }
})

export { button_variants, text_variants_inter, text_variants_poppins, input_variants };
