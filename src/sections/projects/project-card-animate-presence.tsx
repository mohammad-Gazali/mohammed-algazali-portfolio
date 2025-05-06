import { AnimatePresence, motion } from "motion/react";
import { FC } from "react";
import { Project } from "../../types/app";
import ProjectCardImageSlider from "./project-card-image-slider";
import ProjectTechnologyCard from "./project-technology-card";
import Button from "../../components/ui/button";

interface ProjectCardAnimatePresenceProps {
  selectedId: string | null;
  selectedProject: Project | undefined;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectCardAnimatePresence: FC<ProjectCardAnimatePresenceProps> = ({
  selectedId,
  selectedProject,
  setSelectedId,
}) => {
  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-primary-light text-primary-light-foreground fixed inset-0 overflow-y-auto custom-scrollbar flex flex-col items-center sm:gap-3 gap-2 z-50 pb-10 animate-presence"
          layoutId={selectedId}
        >
          <button
            tabIndex={0}
            className="absolute sm:end-6 sm:top-6 end-2 top-2 sm:bg-primary-light-foreground/20 sm:hover:bg-primary-light-foreground/40 transition-all sm:p-2 rounded-full"
            onClick={() => setSelectedId(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="sm:text-3xl text-2xl mx-6 font-bold mt-12">
            {selectedProject?.name}
          </h2>
          <div className="flex flex-col justify-center w-full mt-10 lg:px-10 gap-6">
            <ProjectCardImageSlider
              images={selectedProject?.images as string[]}
            />
            <h3 className="sm:text-3xl text-2xl font-medium mt-10 max-w-4xl w-full mx-auto px-6">
              About The Project
            </h3>
            <div className="leading-7 max-w-4xl w-full mx-auto px-6">
              {selectedProject?.description}
            </div>
          </div>
          <h3 className="sm:text-3xl text-2xl font-medium mt-10 max-w-4xl w-full mx-auto px-6">
            Used Technologies
          </h3>
          <ul className="flex flex-wrap gap-4 mt-4 max-w-4xl w-full mx-auto px-6">
            {selectedProject?.technologies.map((technology) => (
              <ProjectTechnologyCard
                key={technology.name}
                technology={technology}
              />
            ))}
          </ul>
          <Button
            tabIndex={0}
            target="_blank"
            className="mt-10 lg:py-6 sm:py-6 py-6 sm:w-full max-w-md"
            size="lg"
            href={selectedProject?.repository}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>{" "}
            Github Source
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCardAnimatePresence;
