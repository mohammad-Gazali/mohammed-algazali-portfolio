import { Container, Header } from "./common";
import constants from "../constants";
import { Skill } from "../types/app";
import { motion } from "framer-motion";



const Skills = () => {
  return (
    <Container className="pt-10 mb-40 min-h-screen scroll-mt-10" id="skills-section" section>
        <Header animation>
            Skills
        </Header>
        <ul className="flex justify-center flex-wrap gap-8 mt-4">
          {constants.skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </ul>
    </Container>
  )
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.li
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }} 
    className=" flex flex-col items-center gap-4 py-8 cursor-pointer border-4 border-primary-light-foreground/20 bg-gradient-to-r from-primary-light via-transparent to-primary-light rounded-lg hover:border-secondary group transition-all duration-500"
    >
      {skill.icon}
      <h3 className="font-medium text-center text-2xl group-hover:text-3xl group-hover:text-secondary transition-all">
        {skill.title}
      </h3>
      <p className="px-10 text-center opacity-70 group-hover:opacity-100 transition-all">
        {skill.description}
      </p>
    </motion.li>
  )
}

export default Skills