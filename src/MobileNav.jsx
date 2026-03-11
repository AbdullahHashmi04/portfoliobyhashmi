import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Github, Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Projects", label: "Projects" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/abdullah-hashmi-aa5706290/", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "https://github.com/AbdullahHashmi04", icon: <Github size={18} />, label: "GitHub" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl bg-[#0a0a1a]/80 border-b border-[rgba(139,92,246,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-10 h-10 rounded-xl flex justify-center items-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
          >
            <Code2 size={20} className="text-white relative z-10" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          <span className="text-xl font-bold text-white tracking-tight">
            Abdullah<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}>.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                    ? "bg-[rgba(139,92,246,0.15)] text-[#8b5cf6]"
                    : "text-[#a0a0c0] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  }`}
              >
                {link.label}
              </motion.div>
            </Link>
          ))}

          <div className="w-px h-6 bg-[rgba(139,92,246,0.2)] mx-3" />

          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2.5 rounded-xl text-[#a0a0c0] hover:text-[#8b5cf6] hover:bg-[rgba(139,92,246,0.1)] transition-all"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}

          <motion.a
            href="https://wa.me/923305495158"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-3 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
          >
            Contact Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-[#a0a0c0] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-[#0a0a1a]/95 border-t border-[rgba(139,92,246,0.15)]"
          >
            <div className="flex flex-col items-center gap-2 py-6 px-6">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="w-full" onClick={() => setOpen(false)}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`w-full text-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${location.pathname === link.path
                        ? "bg-[rgba(139,92,246,0.15)] text-[#8b5cf6]"
                        : "text-[#a0a0c0] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                      }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}

              <div className="w-full h-px bg-[rgba(139,92,246,0.1)] my-2" />

              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-[#a0a0c0] hover:text-[#8b5cf6] hover:bg-[rgba(139,92,246,0.1)] transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <motion.a
                href="https://wa.me/923305495158"
                whileTap={{ scale: 0.95 }}
                className="mt-2 w-full text-center px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                onClick={() => setOpen(false)}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
