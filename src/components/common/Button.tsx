import { FC, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import cn from "../../utils/cn";



export const buttonVariants = cva(
    "relative gap-2 flex justify-center items-center uppercase transition-colors duration-500 z-0 before:absolute before:inset-0 before:-z-10 before:transition-transform before:duration-[400ms] before:-translate-x-[101%] hover:before:translate-x-0 overflow-hidden",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:text-primary before:bg-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:text-secondary before:bg-secondary-foreground",
                "primary-light": "bg-primary-light text-primary-light-foreground hover:text-primary-light before:bg-primary-light-foreground",
                "secondary-light": "bg-secondary-light text-secondary-light-foreground hover:text-secondary-light before:bg-secondary-light-foreground",
            },
            size: {
                lg: "sm:py-3 py-2 px-6 sm:text-xl text-lg rounded-xl",
                md: "py-2 px-4 sm:text-lg text-base rounded-xl",
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
    order?: number | undefined;
    initialDelay?: number | undefined;
    delay?: number;
};

const Button: FC<ButtonProps> = ({ variant, size, className, children, asLink = false, href, order, initialDelay, delay = 0.6 }) => {

    if (asLink) {
        return (<motion.a
        href={href}
        initial={order ? { scale: 0 } : undefined}
        animate={order ? { scale: 1 } : undefined}
        transition={order ? {
            delay: initialDelay ? delay * order + initialDelay : delay * order,
            duration: 0.4,
            type: "spring",
            damping: 17,
            stiffness: 180
        } : undefined}
        className={cn(buttonVariants({ variant, size, className: `cursor-pointer ${className}` }))}
        >
            {children}
        </motion.a>
        )
    }

  return (
    <motion.button
    initial={order ? { scale: 0 } : undefined}
    animate={order ? { scale: 1 } : undefined}
    transition={order ? {
        delay: initialDelay ? delay * order + initialDelay : delay * order,
        duration: 0.4,
        type: "spring",
        damping: 17,
        stiffness: 180
    } : undefined}
    className={cn(buttonVariants({ variant, size, className }))}
    >
        {children}
    </motion.button>
  )
};

export default Button