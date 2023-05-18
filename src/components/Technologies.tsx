import { useState } from "react";
import { technologies } from "../constants";
import { Container, Header } from "./common";
import { AnimatePresence, motion } from "framer-motion";



const Technologies = () => {

    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedTech = technologies.find(tech => tech.name === selectedId);

    return (
        <Container id="technologies-sections" className="pt-10 mb-40 min-h-screen scroll-mt-10" section>
            <Header animation>
                My Technologies
            </Header>
            <ul className="mt-4 flex justify-center flex-wrap gap-6">
                {technologies.map(tech => (
                    <motion.li
                    layoutId={tech.name}
                    onClick={() => setSelectedId(tech.name)}
                    className="bg-primary-light box-border hover:ring-4 hover:ring-secondary grow max-w-[170px] sm:w-44 w-32 sm:aspect-square p-4 shadow-inner shadow-primary-light-foreground/30 rounded-lg cursor-pointer flex flex-col items-center sm:gap-3 gap-2" key={tech.name}
                    >
                        <h3 className="text-center sm:text-xl text-base font-medium w-full whitespace-nowrap">
                            {tech.name}
                        </h3>
                        <img className="sm:w-24 w-20 aspect-square" src={tech.image} alt={tech.name} />
                    </motion.li>
                ))}
            </ul>
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                    className="fixed inset-0 flex justify-center items-center bg-black/40"
                    onClick={() => setSelectedId(null)}
                    >
                        <motion.div onClick={e => e.stopPropagation()} className="bg-primary-light text-primary-light-foreground w-96 max-h-[90vh] overflow-y-auto sm:p-4 p-2 shadow-inner shadow-primary-light-foreground/30 rounded-lg flex flex-col items-center sm:gap-3 gap-2 relative mx-4" layoutId={selectedId}>
                            <button className="absolute sm:end-6 sm:top-6 end-2 top-2 sm:bg-primary-light-foreground/20 sm:hover:bg-primary-light-foreground/40 transition-all sm:p-2 rounded-full" onClick={() => setSelectedId(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
        </Container>
    )
}

export default Technologies