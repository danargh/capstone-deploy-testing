
import { cva, VariantProps } from 'class-variance-authority'

//The naming convention and variants are temporary, feel free to edit or give suggestion
const button_variants = cva(['font-normal', 'rounded-lg', 'gap-3', 'flex', 'justify-center']
  ,
  {
    variants: {
      variant: {
        default:
          ['bg-[#8EBF59]', 'hover:bg-[#63863E] hover:drop-shadow-md', 'text-white'],
        danger:
          ['bg-[#B1514D]', 'hover:bg-[#A12D28] hover:drop-shadow-md', 'text-white'],
        success:
          ['bg-[#517D67]', 'hover:bg-[#2D6248] hover:drop-shadow-md', 'text-white'],
        warning:
          ['bg-[#FEDE2D]', 'hover:bg-[#B29701] hover:drop-shadow-md', 'text-white'],
        outline_primary:
          ['bg-none', 'border-[#8EBF59]', 'text-[#8EBF59]', 'border', 'hover:bg-[#EBEBEB]'],
        outline_danger:
          ['bg-none', 'border-[#B1514D]', 'text-[#B1514D]', 'border', 'hover:bg-[#EBEBEB]'],
        disable:
          ['bg-[#DEDEDE]', 'text-[#858585] cursor-not-allowed'],

      },

      size: {
        default: ['py-3', 'px-4'],
        full: ['w-full', 'py-3']

      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const text_variants = cva(
  '',
  {
    variants: {
      variant: {
        default:
          '',
        x:
          '',
        y:
          '',
        z:
          '',
      },
      size: {
        default: '',
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export { button_variants, text_variants }