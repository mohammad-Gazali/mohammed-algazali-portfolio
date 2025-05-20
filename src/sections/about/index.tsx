import { basic } from "../../constants";
import { buttonVariants } from "../../components/ui/button";
import Header from "../../components/ui/header";
import Container from "../../components/ui/container";
import { motion } from "motion/react";

const About = () => {
  return (
    <Container section id="about-section" className="pt-10 mb-20 scroll-mt-10">
      <div className="flex lg:justify-between items-start gap-5">
        <div className="lg:w-2/3">
          <Header animation>About me</Header>
          <motion.p
            className="sm:text-lg/8 text-base/8 mt-4"
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
            }}
          >
            {basic.about}
          </motion.p>
          <div className="flex gap-4 flex-wrap my-4">
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className={buttonVariants({
                size: "lg",
                className: "grow lg:w-fit",
              })}
              href="#skills-section"
            >
              My Skills
            </motion.a>
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className={buttonVariants({
                size: "lg",
                className: "grow lg:w-fit",
              })}
              href="#projects-section"
            >
              My Projects
            </motion.a>
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className={buttonVariants({
                size: "lg",
                className: "grow lg:w-fit",
              })}
              href="#achievements-section"
            >
              My Achievements
            </motion.a>
          </div>
        </div>
        <figure className="lg:block hidden">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
            }}
            src="assets/developer.svg"
            alt="developer"
          />
          <motion.figcaption
            className="text-sm text-center text-background-foreground/60 underline"
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 0.6, translateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
            }}
          >
            <a
              href="https://iconscout.com/illustrations/working-with-laptop"
              target="_blank"
            >
              Free Working With Laptop Illustration
            </a>{" "}
            by{" "}
            <a
              href="https://iconscout.com/contributors/manypixels-gallery"
              target="_blank"
            >
              Manypixels Gallery
            </a>{" "}
            on{" "}
            <a href="https://iconscout.com" target="_blank">
              IconScout
            </a>
          </motion.figcaption>
        </figure>
      </div>
    </Container>
  );
};

export default About;
