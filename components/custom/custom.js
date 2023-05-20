
import { cva, VariantProps } from 'class-variance-authority'

//The naming convention and variants are temporary, feel free to edit or give suggestion
const button_variants = cva(
    '',
    {
      variants: {
        variant: {
          default:
            '',
            // destructive : deletion, cancel, etc.
          destructive: 
            '',
            // acceptance : OK , Submit, etc.
          acceptance:
            '',
            // info : like details, etc.
          info:
            '',
            // warning
          warning:
            '',
            // clear enough  
          disabled: '',
            //To highlight a button
          highlight: '',
        },
        size: {
          default: 'rounded-md',
          sm: 'rounded-md',
          md: 'rounded-md',
          lg: 'rounded-md',
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