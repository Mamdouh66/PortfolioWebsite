"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import ToolsItem from "./ToolsItem";
import SkillItem from "./SkillItem";
import ExperinceItem from "./ExperinceItem";

import FastApiIcon from "../../public/tools-icons/fastapi-original.svg";
import PyTorchIcon from "../../public/tools-icons/pytorch-original.svg";
import NextJSIcon from "../../public/tools-icons/NextJS-icon.png";
import SupabaseIcon from "../../public/tools-icons/supabase-icon.svg";
import PandasIcon from "../../public/tools-icons/pandas-original.svg";
import PostgresIcon from "../../public/tools-icons/postgresql-original.svg";
import FathomLogo from "../../public/logos/Fathom.webp";

import WebIcon from "../../public/skills-icons/Web-Development-Icon.svg";
import MLIcon from "../../public/skills-icons/Machine-Learning-1.svg";
import LeadershipIcon from "../../public/skills-icons/Leadership.svg";

import bayanplus from "bayanplus-js";

const certifications = [
  {
    title: "CS50x",
    description: "Introduction to Computer Science by Harvard University",
  },
  {
    title: "CS50AI",
    description:
      "Introduction to Artificial Intelligence by Harvard University",
  },
  {
    title: "Competitve Programming Training",
    description:
      "Training on Competitive Programming by CoachAcademy and Ministry of Communications and Information Technology",
  },
  {
    title: "Samsung Innovation Campus - Artificial Intelligence",
    description: "Training on Artificial Intelligence by Samsung and Misk",
  },
];

const skills = [
  {
    title: "Web Development",
    description:
      "Skilled in developing web applications using ReactJS, NextJS, and FastAPI.",
    image: WebIcon,
  },
  {
    title: "Machine Learning",
    description:
      "Skilled in the workflow of developing Machine Learning & Deep Learning models.",
    image: MLIcon,
  },
  {
    title: "Leadership",
    description:
      "Experienced in leading teams and managing projects during my time with Sanad, AI Club, and Programming Club.",
    image: LeadershipIcon,
  },
];

const Tools = [
  {
    title: "FastAPI",
    image: FastApiIcon,
    description: "For my Backends",
    href: "https://fastapi.tiangolo.com/",
    alt: "FastAPI Icon",
  },
  {
    title: "PyTorch",
    image: PyTorchIcon,
    description: "For my Models",
    href: "https://pytorch.org/",
    alt: "PyTorch Icon",
  },
  {
    title: "NextJS",
    image: NextJSIcon,
    description: "For my Frontends",
    href: "https://nextjs.org/",
    alt: "NextJS Icon",
  },
  {
    title: "Supabase",
    image: SupabaseIcon,
    description: "For Auth and Database",
    href: "https://supabase.io/",
    alt: "Supabase Icon",
  },
  {
    title: "Pandas",
    image: PandasIcon,
    description: "Excel is for Boomers",
    href: "https://pandas.pydata.org/",
    alt: "Pandas Icon",
  },
  {
    title: "Postgres",
    image: PostgresIcon,
    description: "My main Database",
    href: "https://www.postgresql.org/",
    alt: "Postgres Icon",
  },
];

const Experinces = [
  {
    title: "Software Engineer",
    image: FathomLogo,
    description:
      "As a Software Engineer in the Data Science team, I work on various projects that involve the whole Machine Learning lifecycle, from data collection to deployment and monitoring. I also work planning, implementing and testing new features for the Fathom platform.",
    duration: "1/2/2024 - present",
    href: "https://fathom.io",
    alt: "Fathom Logo",
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-between max-md:flex-wrap gap-7">
        {skills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.image}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <div className="grid grid-cols lg:grid-cols-3 sm:grid-cols-2 sm:gap-10">
        {Tools.map((tool, index) => (
          <ToolsItem
            key={index}
            title={tool.title}
            image={tool.image}
            description={tool.description}
            href={tool.href}
            alt={tool.alt}
          />
        ))}
      </div>
    ),
  },
  {
    title: "experinces",
    id: "experinces",
    content: (
      <div className="flex flex-col max-w-lg mx-auto lg:max-w-2xl">
        {Experinces.map((experince, index) => (
          <ExperinceItem
            key={index}
            title={experince.title}
            image={experince.image}
            duration={experince.duration}
            description={experince.description}
            href={experince.href}
            alt={experince.alt}
          />
        ))}
      </div>
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
        className="flex items-center gap-8 py-8 xl:gap-16 sm:px-16 xl:px-16"
      >
        <div className="w-[120%] mr-2">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-md lg:text-lg">
            Currently, I&apos;m pursuing a bachelor&apos;s degree in Artificial
            Intelligence at Imam Abdulrahman bin Faisal University. I have
            always loved to solve problems and build things,from entrepreneurial
            ventures to software projects. A bonus! I am a history geek.
          </p>
          <div className="flex flex-wrap mt-8 gap-1 lg:gap-0">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              onClick={() => bayanplus.event("Skills got clicked")}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
              onClick={() => bayanplus.event("Tools got clicked")}
            >
              Tools
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experinces")}
              active={tab === "experinces"}
              onClick={() => bayanplus.event("Experinces got clicked")}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
