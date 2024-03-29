import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"


const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-primary-50 text-primary-foreground dark:bg-primary-700 hover:bg-primary-600/90",
        default_light: "bg-primary-100 text-primary-950 hover:bg-primary-100/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary-300 dark:border-primary-100/40 bg-background dark:text-primary-50/80 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-primary-100 dark:bg-primary-800 dark:text-primary-100/80 text-secondary-foreground hover:bg-bg-primary-100/80",
        ghost: "bg-white hover:bg-accent hover:text-accent-foreground dark:text-white dark:bg-primary-900 dark:hover:bg-primary-800/80",
        link: "text-primary dark:text-primary-100 dark:hover:text-primary-100/80 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
