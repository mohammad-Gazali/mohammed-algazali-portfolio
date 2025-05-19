import { basic } from "../../constants";
import { motion } from "motion/react";
import { BeamsBackground } from "./beams-background";
import Button from "../../components/ui/button";
import { ContainerTextFlip } from "./container-text-flip";

const Welcome = () => {
  return (
    <BeamsBackground className="min-h-screen flex flex-col justify-center items-center py-8">
      <motion.h1
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          damping: 17,
          stiffness: 180,
        }}
        className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center uppercase px-6 z-1"
      >
        Hello, I'm <br className="sm:hidden" />
        <span className="text-primary-500 text-shadow-lg text-shadow-primary-600/20 font-semibold">
          {basic.name}
        </span>
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
        }}
      >
        <ContainerTextFlip 
          words={["Web Developer", "Tech Enthusiast", "Software Engineer"]}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.4,
        }}
        className="opacity-90 max-w-3xl xl:text-xl/relaxed lg:text-lg/relaxed text-base text-center mt-4 px-6 z-1"
      >
        {basic.intro}
      </motion.p>
      <motion.div className="mt-10 flex flex-wrap justify-center items-center gap-3 max-w-2xl w-full px-4">
        <Button
          order={1}
          initialDelay={1.2}
          href="#about-section"
          className="grow"
          size="lg"
        >
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
        <Button
          order={2}
          initialDelay={1.2}
          href="#contact-section"
          className="grow"
          size="lg"
        >
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          Contact
        </Button>
        <Button
          order={3}
          initialDelay={1.2}
          href="/assets/CV.pdf"
          download="Mohammed-algazali-cv"
          className="grow"
          target="_blank"
          size="lg"
        >
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
          Download CV
        </Button>
      </motion.div>
    </BeamsBackground>
  );
};

export default Welcome;
