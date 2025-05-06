import { Skill } from "../../types/app";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <li
      className="flex flex-col items-center gap-4 py-8 border-4 border-background-foreground/20 bg-linear-to-r from-background-foreground/5 via-transparent to-background-foreground/5 rounded-lg transition-all duration-500"
    >
      {skill.icon}
      <h3 className="px-3 font-medium text-center text-2xl transition-all">
        {skill.title}
      </h3>
      <p className="lg:px-10 px-4 text-center opacity-70 transition-all">
        {skill.description}
      </p>
    </li>
  );
};

export default SkillCard;
