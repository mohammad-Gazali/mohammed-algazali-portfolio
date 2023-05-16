import { About, Navbar, Projects, Skills, Welcome } from "./components";



const App = () => {

	return (
		<main className="bg-primary text-primary-foreground w-full min-h-screen overflow-x-hidden">
			<Navbar />
			<Welcome />
			<About />
			<Skills />
			<Projects />
		</main>
	);
};

export default App;
