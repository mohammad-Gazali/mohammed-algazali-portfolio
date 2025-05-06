import { basic } from "../../constants";
import Button from "../../components/ui/button";
import Header from "../../components/ui/header";
import Container from "../../components/ui/container";

const About = () => {
  return (
    <Container
      section
      id="about-section"
      className="pt-10 mb-20 scroll-mt-10"
    >
      <div className="flex lg:justify-between items-start gap-5">
        <div className="lg:w-2/3">
          <Header>About me</Header>
          <p
            className="sm:text-lg/8 text-base/8 mt-4"
          >
            {basic.about}
          </p>
          <div className="flex gap-4 flex-wrap my-4">
            <Button
              size="lg"
              className="grow lg:w-fit"
              href="#skills-section"
            >
              My Skills
            </Button>
            <Button
              size="lg"
              className="grow lg:w-fit"
              href="#projects-section"
            >
              My Projects
            </Button>
            <Button
              size="lg"
              className="grow lg:w-fit"
              href="#technologies-sections"
            >
              My Technologies
            </Button>
          </div>
        </div>
        <figure className="lg:block hidden">
          <img
            src="assets/developer.svg"
            alt="developer"
          />
          <figcaption
            className="text-sm text-center text-background-foreground/60 underline"
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
          </figcaption>
        </figure>
      </div>
    </Container>
  );
};

export default About;
