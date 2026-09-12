import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-gold",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all uppercase tracking-[0.09em] text-[0.8125rem] px-7 py-4",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all uppercase tracking-[0.09em] text-[0.8125rem] px-7 py-4",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all uppercase tracking-[0.09em] text-[0.8125rem] px-7 py-4",
        ghost: "btn-ghost",
        link: "text-primary underline-offset-4 hover:underline font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all uppercase tracking-[0.09em] text-[0.8125rem] px-7 py-4",
      },
      size: {
        default: "",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
