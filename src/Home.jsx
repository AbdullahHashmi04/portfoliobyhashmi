import React from "react";
import { motion } from "framer-motion";
import profileImage from "./Image/image.jpeg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center 
      py-24 md:py-48 bg-gradient-to-br from-slate-50 to-pink-50 
      px-6 md:px-30">

      {/* LEFT CONTENT */}
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Hi, I'm <span className="text-purple-600">Abdullah Hashmi</span>
        </h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          MERN Stack Developer & UI Enthusiast
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build modern, responsive, and user-friendly web applications using
          React, Node.js, Express, and MongoDB. Passionate about clean UI,
          performance, and writing maintainable code.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border border-purple-600 text-purple-600 
              font-semibold shadow-lg hover:bg-purple-700 hover:text-white transition"
          >
            Hire Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border border-purple-600 text-purple-600 
              font-semibold hover:bg-purple-600 hover:text-white transition"
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 
          rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-200">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Home;
