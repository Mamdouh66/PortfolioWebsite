"use client";

import React, { useState } from "react";
import GithubIcon from "../../public/logos/Github-logo.svg";
import LinkedinIcon from "../../public/logos/Linkedin-logo.svg";
import TwitterIcon from "../../public/logos/Twitter-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import bayanplus from "bayanplus-js";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative font-code"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#dfdfdf] mb-4 max-w-md">
          Passionate about building solutions for real-world challenges.
          I&apos;m always open to new opportunities, so feel free to reach out
          to me.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://www.github.com/mamdouh66"
            onClick={() => bayanplus.event("Github got clicked")}
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mamdouh-aldhafeeri/"
            onClick={() => bayanplus.event("Linkedin got clicked")}
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            href="https://twitter.com/MamdouhAI"
            onClick={() => bayanplus.event("Twitter got clicked")}
          >
            <Image src={TwitterIcon} alt="Twitter Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className=" bg-[#18191E] border mb-4 border-[#33353F] placholder-[#9CA2A9] placeholder:italic focus:outline-none focus:border-red-600  text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2"
              placeholder="JonSnow@winterfell.westros"
            />
          </div>
          <div className="mb-6">
            <label
              name="subject"
              htmlFor="subject"
              className="text-white block text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border mb-4 border-[#33353F] placholder-[#9CA2A9] placeholder:italic focus:outline-none focus:border-red-600  text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2"
              placeholder="Winter is coming"
            />
          </div>
          <div className="mb-6">
            <label
              name="message"
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border mb-4 border-[#33353F] placholder-[#9CA2A9] placeholder:italic focus:outline-none focus:border-red-600  text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2"
              placeholder="Winter is coming, we need the best Engineer to help us beat the white walkers. Are you up for the challenge?"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-400 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            onClick={() => bayanplus.event("Send Message Clicked")}
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default EmailSection;
