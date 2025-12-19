import React, { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const actions = [
    { path: "/", goTo: "Home" },
    {
      path: "https://www.linkedin.com/in/abdullah-hashmi-aa5706290/",
      goTo: "LinkedIn",
      logo: <Linkedin size={18} />,
    },
    {
      path: "https://github.com/AbdullahHashmi04",
      goTo: "Github",
      logo: <Github size={18} />,
    },
    {
      path: "https://x.com/hashmi486",
      goTo: "Twitter",
      logo: <Twitter size={18} />,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b"
    >
      {/* Main Navbar */}
      <div className="h-20 flex items-center justify-between px-6 md:px-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-purple-600 w-9 h-9 rounded-2xl flex justify-center items-center shadow-md"
          >
            <span className="font-bold text-white">A</span>
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {actions.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-purple-600 hover:text-white transition"
            >
              {link.logo}
              {link.goTo}
            </motion.a>
          ))}

          <motion.a
            href="https://wa.me/923305495158"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="flex flex-col items-center gap-4 py-6">
            {actions.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="flex items-center gap-2 w-full justify-center px-4 py-2 text-gray-700 font-medium hover:bg-purple-600 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {link.logo}
                {link.goTo}
              </a>
            ))}

            <a
              href="https://wa.me/923305495158"
              className="mt-2 px-6 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
