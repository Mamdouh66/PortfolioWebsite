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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};
    if (!data.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      errors.email = "Email is invalid";
    if (!data.subject) errors.subject = "Subject is required";
    if (!data.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.ok) {
        console.log("Message sent successfully");
        setEmailSubmitted(true);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setIsSubmitting(false);
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
          <Link href="https://www.github.com/mamdouh66" legacyBehavior>
            <a
              onClick={() => bayanplus.event("Github got clicked")}
              target="_blank"
            >
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width="40"
                height="40"
              />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mamdouh-aldhafeeri/"
            legacyBehavior
          >
            <a
              onClick={() => bayanplus.event("Linkedin got clicked")}
              target="_blank"
            >
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width="40"
                height="40"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/MamdouhAI" legacyBehavior>
            <a
              onClick={() => bayanplus.event("Twitter got clicked")}
              target="_blank"
            >
              <Image
                src={TwitterIcon}
                alt="Twitter Icon"
                width="40"
                height="40"
              />
            </a>
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
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] placeholder:italic focus:outline-none focus:border-red-600 text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2"
              placeholder="JonSnow@winterfell.westros"
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] placeholder:italic focus:outline-none focus:border-red-600 text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2"
              placeholder="Winter is coming"
            />
            {formErrors.subject && (
              <p className="text-red-500 text-xs">{formErrors.subject}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] placeholder:italic focus:outline-none focus:border-red-600 text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2"
              placeholder="Winter is coming, we need the best Engineer to help us beat the white walkers. Are you up for the challenge?"
              rows="5"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-xs">{formErrors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-600 hover:bg-red-400 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            onClick={() => bayanplus.event("Send Message Clicked")}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
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
