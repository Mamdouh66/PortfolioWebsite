"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container p-12 m-2 flex justify-center"
      >
        <p className="text-white font-code text-xl">
          {" "}
          Those who can imagine anything, can create the impossible{" "}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
