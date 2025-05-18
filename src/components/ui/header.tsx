import { FC } from "react";
import cn from "../../utils/cn";
import { motion } from "motion/react";

interface HeaderProps {
  children: string;
  className?: string;
  animation?: boolean;
}

const Header: FC<HeaderProps> = ({ children, className, animation }) => {
  return (
    <motion.h2
      className={cn(
        "uppercase font-medium sm:text-4xl text-2xl w-fit",
        className
      )}
      initial={animation ? { scale: 0 } : undefined}
      whileInView={animation ? { scale: 1 } : undefined}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

export default Header;
