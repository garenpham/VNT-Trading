import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority' //create css variants
import * as React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const buttonVariants = cva(
  'border shrink-0 rounded-[8px] inline-flex items-center justify-center disabled:pointer-events-none disabled:text-gray_3 disabled:border-gray_2 disabled:bg-white disabled:border transform transition duration-100 ease-in', //these are the base styles
  {
    variants: {
      variant: {
        primary: 'bg-orange text-white border-transparent',
        alternate: 'text-orange border-orange border-orange',
      },
      size: {
        lg: 'h-[56px] w-[358px] lg:w-[485px]',
        sm: 'h-[56px] w-[358px] lg:w-[485px]',
        none: '',
      },
      animation: {
        default: `hover:scale-105 active:scale-100`,
        none: ``,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
      animation: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  error?: boolean
  errorMessage?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      error = false,
      errorMessage = 'There was an error, please try again.',
      size,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={isLoading}
          {...props}>
          {isLoading ? (
            <ImSpinner8 className='mr-2 h-4 w-4 animate-spin' />
          ) : null}
          {children}
        </button>

        {error && (
          <div className='text-red-700 text-[12px] m-1 w-full text-center'>
            {errorMessage}
          </div>
        )}
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button }

