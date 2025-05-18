import Container from "../../components/ui/container";
import Header from "../../components/ui/header";
import { skills } from "../../constants";
import SkillCard from "./skill-card";

const Skills = () => {
  return (
    <Container
      className="pt-10 mb-40 min-h-screen scroll-mt-10"
      id="skills-section"
      section
    >
      <Header animation>Skills</Header>
      <ul className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </ul>
    </Container>
  );
};

export default Skills;
