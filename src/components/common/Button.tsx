import { FC, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import cn from "../../utils/cn";



export const buttonVariants = cva(
    "gap-2 flex justify-center items-center uppercase transition-colors",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                "primary-light": "bg-primary-light text-primary-light-foreground",
                "secondary-light": "bg-secondary-light text-secondary-light-foreground",
            },
            size: {
                lg: "py-3 px-6 text-xl rounded-xl",
                md: "py-2 px-4 text-lg rounded-xl",
                sm: "py-1 px-3 text-base rounded-lg"
            }
        },
        defaultVariants: {
            variant: "secondary",
            size: "md"
        },

    }
)

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children?: ReactNode;
    className?: string | undefined;
    asLink?: boolean | undefined;
    href?: string | undefined;
};

const Button: FC<ButtonProps> = ({ variant, size, className, children, asLink = false, href }) => {

    if (asLink) {
        return (<motion.a
        href={href}
        className={cn(buttonVariants({ variant, size, className: `cursor-pointer ${className}` }))}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 17,
        }}
        >
            {children}
        </motion.a>
        )
    }

  return (
    <motion.button
    className={cn(buttonVariants({ variant, size, className }))}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 17,
    }}
    >
        {children}
    </motion.button>
  )
};

export default Button