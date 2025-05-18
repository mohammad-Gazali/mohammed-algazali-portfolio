import { FC } from "react";
import { Technology } from "../../types/app";

interface ProjectTechnologyCardProps {
  technology: Technology;
}

const ProjectTechnologyCard: FC<ProjectTechnologyCardProps> = ({
  technology,
}) => {
  return (
    <li className="bg-background px-2 py-4 rounded-lg sm:w-40 w-32 aspect-square flex flex-col items-center sm:gap-3 gap-2">
      <h3 className="text-center sm:text-xl text-base font-medium w-full whitespace-nowrap">
        {technology.name}
      </h3>
      <img
        className="sm:w-20 w-16 aspect-square"
        src={technology.image}
        alt={technology.name}
      />
    </li>
  );
};

export default ProjectTechnologyCard;
