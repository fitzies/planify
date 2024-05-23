import { Project } from "@prisma/client";
import ProjectCard from "./project-card";

const ProjectCardDisplay = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-6">
        {projects
          // .filter((project) =>
          //   searchQuery === ""
          //     ? true
          //     : project.name.toLowerCase().includes(searchQuery.toLowerCase())
          // )
          .map((project) => {
            {
              return (
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  key={project.id}
                />
              );
            }
          })}
      </div>
    </>
  );
};

export default ProjectCardDisplay;
