import { FC, ReactNode } from "react";
import cn from "../../utils/cn";

interface ContainerProps {
  section?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
}

const Container: FC<ContainerProps> = ({
  section = false,
  children,
  className,
  id,
}) => {
  const containerClassName = "max-w-5xl mx-auto h-full px-4";

  if (section)
    return (
      <section id={id} className={cn(containerClassName, className)}>
        {children}
      </section>
    );

  return (
    <div id={id} className={cn(containerClassName, className)}>
      {children}
    </div>
  );
};

export default Container;
