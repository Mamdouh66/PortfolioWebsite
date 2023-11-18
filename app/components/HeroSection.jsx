"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left ml-12">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
                "Backend Developer",
                1000,
                "Entrepreneur",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vitae sapiente temporibus, sit debitis laborum!
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 via-rose-500 to-pink-400 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-600 via-rose-500 to-pink-400  bg-transparent hover:bg-[#343434] text-white mt-4">
              <span className="block bg-[#252525] hover:bg-[#444242] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#252525] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/MyMemoji.png"
              alt="Mamdouh's Memoji"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
