import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/Utils";


const buttonStyles = cva([
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed"
],
{
    variants : {
        variant: {
           solid:"",
           Outline: "border-2",
           Ghost: "transition-colors duration-300"                     
        },
        size: {
            sm:"px-4 py-2 text-sm",
            md:"px-4 py-2 text-base",
            lg:"px-6 py-2 text-lg"
        },
        colorscheme : {
            primary: "text-white",
        },
    },
        compoundVariants: [
            {
                variant:"solid",
                colorscheme: "primary",
                className: "bg-primary-500 hover:bg-primary-600",
            },
            {
                variant:"Outline",
                colorscheme:"primary",
                className:"text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"
            },
            {
                variant:"Ghost",
                colorscheme:"primary",
                className:"text-primary-600 bg-transparent hover:bg-primary-100"
            },
        ],
        defaultVariants: {
             variant:"solid",
             size:"sm",
             colorscheme: "primary",
        },
    
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);