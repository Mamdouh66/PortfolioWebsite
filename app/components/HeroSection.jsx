"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import bayanplus from "bayanplus-js";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-32 font-code">
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-7 place-self-center text-left ml-0 sm:ml-12"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-pink-400">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mamdouh",
                1000,
                "AI Engineer",
                1000,
                "Backend Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl mt-12">
            I &apos;m an enthusiastic developer who loves to build solutions for
            real-world challenges.
          </p>
          <div className="mt-12">
            <button
              onClick={bayanplus.event("Contact Me Clicked")}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 via-rose-500 to-pink-400 hover:bg-slate-200 text-white"
            >
              <Link href="#contact">Contact Me</Link>
            </button>
            <button
              onClick={bayanplus.event("Download CV Clicked")}
              className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-600 via-rose-500 to-pink-400  bg-transparent hover:bg-[#343434] text-white mt-4"
            >
              <span className="block bg-[#252525] hover:bg-[#444242] rounded-full px-5 py-2">
                <Link href="https://flowcv.com/resume/irowlj32du">
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-5 place-self-center mt-0 lg:mt-0"
        >
          <div className="rounded-full bg-black bg-gradient-to-br from-black via-stone-800 to-neutral-800 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/MyMemoji.png"
              alt="Mamdouh's Memoji"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded"
              width={400}
              height={400}
            ></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
