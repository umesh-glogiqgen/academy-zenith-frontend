import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-mint",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // NEW TEAL/MINT VARIANTS
        hero: "bg-white text-professional-primary hover:bg-white/90 shadow-teal glow-effect font-semibold border border-teal-200/30 hover:shadow-card-hover transition-all duration-300",
        
        "outline-hero": "border-2 border-white/40 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm hover:border-white/60 transition-all duration-300",
        
        teal: "bg-gradient-teal text-white hover:shadow-teal hover:scale-105 transition-all duration-300 font-medium",
        
        mint: "bg-gradient-mint text-professional-primary hover:shadow-soft hover:scale-105 transition-all duration-300 font-medium",
        
        course: "bg-professional-primary text-white hover:bg-professional-secondary shadow-mint hover:shadow-teal transition-all duration-300",
        
        "teal-outline": "border-2 border-professional-primary bg-transparent text-professional-primary hover:bg-professional-primary hover:text-white transition-all duration-300",
        
        "mint-soft": "bg-mint-100 text-professional-primary hover:bg-mint-200 border border-mint-300/50 hover:border-mint-400/60 transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }