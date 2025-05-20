import { motion } from "motion/react";
import { Technology } from "../../types/app";
import { FC } from "react";

interface TechnologyCardProps {
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  technology: Technology;
}

const TechnologyCard: FC<TechnologyCardProps> = ({
  technology,
  setSelectedId,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setSelectedId(technology.name);
    }
  };

  return (
    <motion.li
      tabIndex={0}
      onKeyDown={handleKeyDown}
      layoutId={technology.name}
      initial={{ opacity: 0, rotate: 90 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      onClick={() => setSelectedId(technology.name)}
      className="bg-background-foreground/5 ring-0 focus-visible:ring-4 focus-visible:ring-primary-400 focus-visible:outline-none hover:ring-4 hover:ring-secondary grow max-w-[170px] sm:w-44 w-32 sm:aspect-square p-4 shadow-inner shadow-background-foreground/10 rounded-lg cursor-pointer flex flex-col items-center sm:gap-3 gap-2 transition-shadow"
      key={technology.name}
    >
      <h3 className="text-center sm:text-xl text-base font-medium w-full whitespace-nowrap">
        {technology.name}
      </h3>
      <img
        className="sm:w-24 w-20 aspect-square"
        src={technology.image}
        alt={technology.name}
      />
    </motion.li>
  );
};

export default TechnologyCard;
