import { motion } from "framer-motion";
import { FC } from "react";
import { Container } from "./common";

// TODO: continue the navlink href


const Navbar = () => {

	return (
		<motion.nav
			initial={{ y: -64 }}
			animate={{ y: 0 }}
			transition={{
				delay: 3,
			}}
			className="absolute inset-x-0 top-0 h-16 transition-colors ease-in-out z-50"
		>
			<Container className="flex sm:justify-end justify-center items-center">
				<ul className="flex items-center gap-4">
					<NavLink href="#about-section" content="About" />
					<NavLink href="#" content="Portfolio" />
					<NavLink href="#" content="Contact" />
				</ul>
			</Container>
		</motion.nav>
	);
};

interface NavLinkProps {
	href: string;
	content: string;
	active?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, content, active = false }) => {
	return (
		<li className={`${active ? "bg-secondary-light" : ""} p-2 rounded-lg`}>
			<a
				className={`relative transition-all text-secondary-light-foreground before:absolute before:inset-x-0 before:bottom-0 before:w-0 before:h-[2px] before:transition-all before:bg-secondary-light-foreground hover:before:w-full`}
				href={href}
			>
				{content}
			</a>
		</li>
	);
};

export default Navbar;
