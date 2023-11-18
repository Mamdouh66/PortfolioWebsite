import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://random.imagecdn.app/500/150",
    tags: ["All", "Web", "Ai"],
  },
  // generate three more projectsData objects here
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://random.imagecdn.app/500/150",
    tags: ["All", "Web"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://random.imagecdn.app/500/150",
    tags: ["All", "Ai"],
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://random.imagecdn.app/500/150",
    tags: ["All", "Ai"],
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
