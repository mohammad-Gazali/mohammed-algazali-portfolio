import { motion } from "motion/react";
import { Skill } from "../../types/app";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.li
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0)" }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.4,
      }}
      className="flex flex-col items-center last:col-span-full gap-4 py-8 border-4 border-background-foreground/20 bg-linear-to-r from-background-foreground/5 via-transparent to-background-foreground/5 rounded-lg transition-all duration-500"
    >
      {skill.icon}
      <h3 className="px-3 font-medium text-center text-2xl transition-all">
        {skill.title}
      </h3>
      <p className="lg:px-10 px-4 text-center opacity-70 transition-all">
        {skill.description}
      </p>
    </motion.li>
  );
};

export default SkillCard;
