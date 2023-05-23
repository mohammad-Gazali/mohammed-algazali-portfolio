import { Project } from "../../types/app";
import { FC } from "react";
import { motion } from "framer-motion";



interface ProjectCardProps {
    project: Project;
    setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, setSelectedId }) => {

	const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			setSelectedId(project.name)
		}
	}

	return (
        <motion.li
			tabIndex={0}
			onKeyDown={handleKeyDown}
			layoutId={project.name}
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
			viewport={{ once: true }}
			onClick={() => setSelectedId(project.name)}
			className="bg-primary-light focus-visible:ring-4 focus-visible:ring-secondary focus-visible:outline-none hover:bg-secondary-light transition-colors hover:shadow-lg hover:shadow-secondary-light-foreground/20 max-w-xs rounded-lg cursor-pointer"
			key={project.name}
		>
			<img
				className="rounded-t-lg"
				src={project.images[0]}
				alt={project.name}
			/>
            <div className="py-4">
                <h3 className="text-center sm:text-2xl text-xl font-medium w-full">
                    {project.name}
                </h3>
            </div>
		</motion.li>
    )
};

export default ProjectCard;