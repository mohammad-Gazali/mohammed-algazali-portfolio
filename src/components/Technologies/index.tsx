import { FC } from "react";
import { technologies } from "../../constants";
import { Container, Header } from "../common";
import TechnologyCard from "./TechnologyCard";
import TechnologyCardAnimatePresence from "./TechnologyCardAnimatePresence";



interface TechnologiesProps {
	selectedId: string | null;
	setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

const Technologies: FC<TechnologiesProps> = ({ selectedId, setSelectedId }) => {


	const selectedTech = technologies.find((tech) => tech.name === selectedId);

	return (
		<Container
			id="technologies-sections"
			className="pt-10 mb-40 min-h-screen scroll-mt-10"
			section
		>
			<Header animation>My Technologies</Header>
			<ul className="mt-4 flex justify-center flex-wrap gap-6">
				{technologies.map((technology) => (
					<TechnologyCard
						key={technology.name}
						technology={technology}
						setSelectedId={setSelectedId}
					/>
				))}
			</ul>
			<TechnologyCardAnimatePresence 
            selectedId={selectedId}
            selectedTech={selectedTech}
            setSelectedId={setSelectedId}
            />
		</Container>
	);
};

export default Technologies;
