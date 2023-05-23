import { motion, AnimatePresence } from "framer-motion";
import { Technology } from "../../types/app";
import { FC } from "react";



interface TechnologyCardAnimatePresenceProps {
    selectedId: string | null;
    selectedTech: Technology | undefined;
    setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

const TechnologyCardAnimatePresence: FC<TechnologyCardAnimatePresenceProps> = ({
        selectedId, selectedTech, setSelectedId 
    }) => {

	return (
		<AnimatePresence>
			{selectedId && (
				<motion.div
					tabIndex={1}
					className="fixed inset-0 flex justify-center items-center bg-black/40 z-50 animate-presence"
					onClick={() => setSelectedId(null)}
				>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						className="bg-primary-light text-primary-light-foreground w-96 max-h-[90vh] overflow-y-auto sm:p-4 p-2 shadow-inner shadow-primary-light-foreground/30 rounded-lg flex flex-col items-center sm:gap-3 gap-2 relative mx-4"
						layoutId={selectedId}
					>
						<button
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
						<h3 className="text-3xl font-bold sm:mt-2 mt-4">
							{selectedTech?.name}
						</h3>
						<p className="leading-7 sm:mt-4 sm:mx-0 mx-2">
							{selectedTech?.description}
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TechnologyCardAnimatePresence;
