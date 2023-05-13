import constants from "../constants";
import { Button } from "./common";
import { motion } from "framer-motion";

const Welcome = () => {
	return (
		<section className="h-screen flex flex-col justify-center items-center">
			<motion.h1 
            initial={{ y: -400 }}
            animate={{ y: 0 }}
			transition={{ 
				duration: 0.2,
				type: "spring",
				damping: 17,
				stiffness: 180
			}}
            className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center uppercase px-6"
            >
				Hello, I'm <br className="sm:hidden" />
				<span className="text-secondary font-semibold">{constants.name}</span>
			</motion.h1>
			<motion.p
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				delay: 0.6,
				duration: 0.4
			}}
			className="opacity-90 max-w-3xl xl:text-xl lg:text-lg text-base text-center mt-6 px-6">
				{constants.intro}
			</motion.p>
			<motion.div 
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				delay: 1.4,
				duration: 0.4,
				type: "spring",
				damping: 17,
				stiffness: 180
			}}
			className="mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-3 max-w-2xl w-full px-4">
				<Button href="#" className="grow" size="lg" asLink>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7 h-7"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					About me
				</Button>
				<Button href="#" className="grow" size="lg" asLink>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7 h-7"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
						/>
					</svg>
					portfolio
				</Button>
			</motion.div>
		</section>
	);
};

export default Welcome;
