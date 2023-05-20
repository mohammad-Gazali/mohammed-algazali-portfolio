import { projects } from "../../constants";
import { Container, Header } from "../common";
import ProjectCard from "./ProjectCard";
import ProjectCardAnimatePresence from "./ProjectCardAnimatePresence";
import { useState } from "react";

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
		</Container>
	);
};

export default Projects;
