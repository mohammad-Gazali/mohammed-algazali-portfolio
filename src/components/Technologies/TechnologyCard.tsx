import { Technology } from "../../types/app";
import { motion } from "framer-motion";
import { FC } from "react";



interface TechnologyCardProps {
    setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
    technology: Technology;    
}

const TechnologyCard: FC<TechnologyCardProps> = ({ technology, setSelectedId }) => {
	return (
		<motion.li
			layoutId={technology.name}
			initial={{ opacity: 0, rotate: 360 }}
			whileInView={{ opacity: 1, rotate: 0 }}
			viewport={{ once: true }}
			onClick={() => setSelectedId(technology.name)}
			className="bg-primary-light ring-0 hover:ring-4 hover:ring-secondary grow max-w-[170px] sm:w-44 w-32 sm:aspect-square p-4 shadow-inner shadow-primary-light-foreground/30 rounded-lg cursor-pointer flex flex-col items-center sm:gap-3 gap-2 transition-shadow"
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
