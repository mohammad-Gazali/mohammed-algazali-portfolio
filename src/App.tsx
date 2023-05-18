import { About, Projects, Skills, Welcome, Technologies, Contact, Footer } from "./components";




const App = () => {

	return (
		<main className="bg-primary text-primary-foreground w-full min-h-screen overflow-x-hidden">
			<Welcome />
			<About />
			<Skills />
			<Projects />
			<Technologies />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
