import { FC } from "react";
import cn from "../../utils/cn";

interface HeaderProps {
  children: string;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "uppercase font-medium sm:text-4xl text-2xl w-fit",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Header;
