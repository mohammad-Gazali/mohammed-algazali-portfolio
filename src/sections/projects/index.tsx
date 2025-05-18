import { basic, projects } from "../../constants";
import ProjectCard from "./project-card";
import ProjectCardAnimatePresence from "./project-card-animate-presence";
import { FC } from "react";
import { buttonVariants } from "../../components/ui/button";
import Container from "../../components/ui/container";
import Header from "../../components/ui/header";
import { motion } from "motion/react";

interface ProjectsProps {
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

const Projects: FC<ProjectsProps> = ({ selectedId, setSelectedId }) => {
  const selectedProject = projects.find(
    (project) => project.name === selectedId
  );

  return (
    <Container
      id="projects-section"
      className="pt-10 mb-40 min-h-screen scroll-mt-10"
      section
    >
      <Header animation>Projects</Header>
      <motion.p
			className="w-fit sm:text-lg/8 text-base/8 mt-4"
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			viewport={{ once: true }}
			>
				All these projects are built by myself from A to Z 😁
			</motion.p>
      <ul className="mt-4 flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            setSelectedId={setSelectedId}
            project={project}
          />
        ))}
      </ul>
      <ProjectCardAnimatePresence
        selectedId={selectedId}
        selectedProject={selectedProject}
        setSelectedId={setSelectedId}
      />
      <motion.a
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			viewport={{ once: true }}
			className={buttonVariants({ size: "lg", className: "grow lg:w-fit mt-16 mx-auto text-center cursor-pointer" })}
			href={basic.github}
			target="_blank"
			>
				Check My Github Account For More Projects
			</motion.a>
    </Container>
  );
};

export default Projects;
