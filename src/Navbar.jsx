import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
const Navbar = () => {
  const actions = [
    { path: "/", goTo: "Home" },
    {
      path: "https://www.linkedin.com/in/abdullah-hashmi-aa5706290/",
      goTo: "LinkedIn",
      logo: <Linkedin />,
    },
    {
      path: "https://github.com/AbdullahHashmi04",
      goTo: "Github",
      logo: <Twitter />,
    },
    { path: "https://x.com/hashmi486", goTo: "Twitter", logo: <Github /> },
  ];
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-20 flex items-center px-30 sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b"
    >
      <div className="flex items-center gap-3 ">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="bg-purple-600 w-9 h-9 rounded-2xl flex justify-center items-center shadow-md"
        >
          <span className="font-bold text-white">A</span>
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
      </div>
      <div className="flex justify-end items-center w-full">
        <div className="flex gap-12 items-center">
          {actions.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 flex items-center font-medium px-4 py-2 rounded-xl hover:bg-purple-600 hover:text-white transition"
            >
              <div className="mr-2">{link.logo}</div> {link.goTo}
            </motion.a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-16 px-3 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition"
        >
          <a href="https://wa.me/923305495158">Contact</a>
        </motion.button>
      </div>
    </motion.nav>
  );
};
export default Navbar;
