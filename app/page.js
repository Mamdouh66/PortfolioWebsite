"use client";

import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import bayanplus from "bayanplus-js";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export default function Home() {
  useEffect(() => {
    bayanplus.init({
      projectId: "JoWA0MPD",
      isDev: false,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-black to-stone-900 from overflow-hidden">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
