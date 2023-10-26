import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="align-element py-16" id="projects">
      <SectionTitle text="Web Creations" />
      <div className="grid gap-8 py-8 items-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
