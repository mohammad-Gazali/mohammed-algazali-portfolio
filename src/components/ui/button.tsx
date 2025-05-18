import { FC, ReactNode, HTMLAttributeAnchorTarget } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "../../utils/cn";
import { motion } from "motion/react";

export const buttonVariants = cva(
  "relative gap-2 flex justify-center items-center uppercase transition-all duration-300 overflow-hidden bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-900 dark:text-primary-300 border border-primary-300 dark:border-primary-700 focus:shadow-lg focus:ring-2 focus:outline-none ring-primary-400 hover:shadow-lg shadow-primary-700/20",
  {
    variants: {
      size: {
        lg: "sm:py-3 py-2 px-6 sm:text-xl text-lg rounded-xl",
        md: "py-2 px-4 sm:text-lg text-base rounded-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  className?: string | undefined;
  href?: string | undefined;
  target?: HTMLAttributeAnchorTarget;
  download?: string | undefined;
  tabIndex?: number | undefined;
  order?: number | undefined;
  initialDelay?: number | undefined;
}

const Button: FC<ButtonProps> = ({
  size,
  className,
  children,
  href,
  target,
  download,
  tabIndex,
  order,
  initialDelay,
}) => {
  const delay = 0.6;

  if (href) {
    return (
      <motion.a
        download={download}
        tabIndex={tabIndex}
        href={href}
        target={target}
        initial={order ? { scale: 0 } : undefined}
        animate={order ? { scale: 1 } : undefined}
        transition={
          order
            ? {
                delay: initialDelay
                  ? delay * order + initialDelay
                  : delay * order,
                duration: 0.1,
                type: "linear",
              }
            : undefined
        }
        className={cn(
          buttonVariants({
            size,
            className: `cursor-pointer ${className}`,
          })
        )}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      initial={order ? { scale: 0 } : undefined}
      animate={order ? { scale: 1 } : undefined}
      tabIndex={tabIndex}
      transition={
        order
          ? {
              delay: initialDelay
                ? delay * order + initialDelay
                : delay * order,
              duration: 0.1,
              type: "linear",
            }
          : undefined
      }
      className={cn(buttonVariants({ size, className }))}
    >
      {children}
    </motion.button>
  );
};

export default Button;
