import { Toaster } from "react-hot-toast";
import {
  About,
  Projects,
  Skills,
  Achievements,
  Welcome,
  Technologies,
  Contact,
  Footer,
} from "./sections";
import { useEffect, useState } from "react";
import FloatGradiants from "./components/float-gradiants";

const App = () => {
  const [selectedIdTech, setSelectedIdTech] = useState<string | null>(null);
  const [selectedIdProject, setSelectedIdProject] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdTech(null);
        setSelectedIdProject(null);
      }
      if (
        e.key === "Tab" &&
        (selectedIdTech !== null || selectedIdProject !== null)
      ) {
        // Prevent default tab behavior
        e.preventDefault();

        // Move focus to the next focusable element within AnimatePresence
        const focusableElements = document.querySelectorAll<HTMLElement>(
          ".animate-presence [tabindex]:not([tabindex='-1']), .animate-presence button"
        );

        if (focusableElements.length > 0) {
          const currentFocusIndex = Array.from(focusableElements).findIndex(
            (element) => element === document.activeElement
          );

          const nextFocusIndex =
            currentFocusIndex === focusableElements.length - 1
              ? 0
              : currentFocusIndex + 1;

          focusableElements[nextFocusIndex].focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <main className="text-background-foreground w-full min-h-screen overflow-x-hidden relative">
        <Welcome />
        <About />
        <Skills />
        <Achievements />
        <Projects
          selectedId={selectedIdTech}
          setSelectedId={setSelectedIdTech}
        />
        <Technologies
          selectedId={selectedIdProject}
          setSelectedId={setSelectedIdProject}
        />
        <Contact />
        <Footer />

        <Toaster />
        <FloatGradiants />
      </main>
    </>
  );
};

export default App;
