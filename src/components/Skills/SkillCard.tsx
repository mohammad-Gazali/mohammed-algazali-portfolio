import { Skill } from "../../types/app";
import { motion } from "framer-motion";



const SkillCard = ({ skill }: { skill: Skill }) => {
	return (
		<motion.li
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			viewport={{ once: true }}
			className="flex flex-col items-center gap-4 py-8 border-4 border-primary-light-foreground/20 bg-gradient-to-r from-primary-light via-transparent to-primary-light rounded-lg transition-all duration-500"
		>
			{skill.icon}
			<h3 className="px-3 font-medium text-center text-2xl transition-all">
				{skill.title}
			</h3>
			<p className="lg:px-10 px-4 lg:text-center opacity-70 transition-all">
				{skill.description}
			</p>
		</motion.li>
	);
};


export default SkillCard;