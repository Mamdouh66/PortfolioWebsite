"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import ToolsItem from "./ToolsItem";

import FastApiIcon from "../../public/tools-icons/fastapi-original.svg";
import PyTorchIcon from "../../public/tools-icons/pytorch-original.svg";

const Tools = [
  {
    title: "FastAPI",
    image: FastApiIcon,
    description: "For my backends",
    href: "https://fastapi.tiangolo.com/",
    alt: "FastAPI Icon",
  },
  {
    title: "PyTorch",
    image: PyTorchIcon,
    description: "For my models",
    href: "https://pytorch.org/",
    alt: "PyTorch Icon",
  },
];
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <></>,
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineer at Google</li>
        <li>Software Engineer at Facebook</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: Tools.map((tool) => (
      <ToolsItem
        title={tool.title}
        image={tool.image}
        description={tool.description}
        href={tool.href}
        alt={tool.alt}
      />
    )),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Cloud Professional Cloud Architect</li>
        <li>Google Cloud Professional Data Engineer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white font-code ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-8 py-8 px-4 xl:gap-16 sm:px-16 xl:px-16"
      >
        <div className="w-[120%] mr-2">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Currently, I&apos;m pursuing a bachelor&apos;s degree in Artificial
            Intelligence at Imam Abdulrahman bin Faisal University. I have
            always loved to solve problems and build things,from entrepreneurial
            ventures to software projects. A bonus! I am a history geek.
          </p>
          <div className="flex flex-wrap mt-8 gap-1 lg:gap-0">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              Tools
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
