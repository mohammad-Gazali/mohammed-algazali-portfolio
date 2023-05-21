import { basic, projects } from "../../constants";
import { Container, Header } from "../common";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectCardAnimatePresence from "./ProjectCardAnimatePresence";
import { useState } from "react";
import { buttonVariants } from "../common/Button";

const Projects = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);

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
