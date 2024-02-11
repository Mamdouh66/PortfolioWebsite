"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

import SanadLogo from "../../public/logos/Sanad-website.png";
import FastHacksImage from "../../public/logos/fasthacks.png";

const projectsData = [
  {
    id: 1,
    title: "Sanad's Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: SanadLogo,
    tags: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "FastHacks Website",
    description:
      "I made this website for a hackathon called FastHacks that we organized in our university.",
    image: FastHacksImage,
    tags: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  // {
  //   id: 3,
  //   title: "Project 3",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   image: "https://random.imagecdn.app/500/140",
  //   tags: ["All", "Ai"],
  //   gitUrl: "https://github.com",
  //   previewUrl: "https://github.com",
  // },
  // {
  //   id: 4,
  //   title: "Project 4",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   image: "https://random.imagecdn.app/500/150",
  //   tags: ["All", "Ai"],
  //   gitUrl: "https://github.com",
  //   previewUrl: "https://github.com",
  // },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag) => {
    setTag(tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="font-code text-3xl font-extrabold mt-12 ">Projects</h2>
      <div className="text-white font-code flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Ai"
          isSelected={tag === "Ai"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ProjectSection;
