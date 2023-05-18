import { projects } from "../constants";
import { Project } from "../types/app";
import { Container, Header } from "./common";



const Projects = () => {
  return (
    <Container id="projects-section" className="pt-10 mb-40 min-h-screen scroll-mt-10" section>
        <Header animation>
            Projects
        </Header>
        <ul className="mt-4">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </ul>
    </Container>
  )
}



const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li>ProjectCard</li>
  )
}


export default Projects;