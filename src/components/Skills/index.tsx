import { Container, Header } from "../common";
import { skills } from "../../constants";
import SkillCard from "./SkillCard";



const Skills = () => {
  return (
    <Container className="pt-10 mb-40 min-h-screen scroll-mt-10" id="skills-section" section>
        <Header animation>
            Skills
        </Header>
        <ul className="flex justify-center flex-wrap gap-8 mt-4">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </ul>
    </Container>
  )
}



export default Skills