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
      "Made this website for Sanad, an initiative I founded to help students in our university.",
    image: SanadLogo,
    tags: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://coruscating-snickerdoodle-cc3be2.netlify.app/",
  },
  {
    id: 2,
    title: "FastHacks Website",
    description:
      "I made this website for a hackathon called FastHacks that we organized in our university.",
    image: FastHacksImage,
    tags: ["All", "Web"],
    gitUrl: "https://github.com/Mamdouh66/Hackathon-website",
    previewUrl: "https://fasthacks-iau.com/",
  },
  {
    id: 3,
    title: "Emails Summarizer",
    description: "Email Summarizer with GPT and Gmail API.",
    image: "",
    tags: ["All", "Ai"],
    gitUrl: "Email Summarizer with GPT and Gmail API",
    previewUrl: "",
  },
  {
    id: 4,
    title: "StorytellerAI",
    description:
      "Writing good stories with GPT based on the idea of repititive feedback.",
    image: "",
    tags: ["All", "Ai"],
    gitUrl: "https://github.com/Mamdouh66/StorytellerAI",
    previewUrl: "",
  },
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
        <ProjectTag
          onClick={handleTagChange}
          name="Random"
          isSelected={tag === "Random"}
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
