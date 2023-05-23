import { FC, ReactNode, HTMLAttributeAnchorTarget } from "react";
import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import cn from "../../utils/cn";
import { buttonVariants } from "../../utils/button-variants";



export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children?: ReactNode;
    className?: string | undefined;
    asLink?: boolean | undefined;
    href?: string | undefined;
    order?: number | undefined;
    initialDelay?: number | undefined;
    delay?: number;
    target?: HTMLAttributeAnchorTarget;
    download?: string | undefined;
    tabIndex?: number | undefined;
}

const Button: FC<ButtonProps> = ({ variant, size, className, children, asLink = false, href, order, initialDelay, delay = 0.6, target, download, tabIndex }) => {

    if (asLink) {
        return (<motion.a
        download={download}
        tabIndex={tabIndex}
        href={href}
        target={target}
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
    tabIndex={tabIndex}
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