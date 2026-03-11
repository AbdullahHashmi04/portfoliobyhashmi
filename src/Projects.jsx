import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink, Github, ChevronLeft, ChevronRight, ArrowLeft,
  Code2, Layers, Sparkles
} from "lucide-react";
import Project1 from "./Image/Project1.png";
import Project2 from "./Image/Project2.png";
import Pizza1 from "./Image/Pizza1.png";

/* ================================
   IMAGE CAROUSEL COMPONENT
================================ */
const ImageCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="aspect-video relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ================================
   PROJECTS DATA
================================ */
const projects = [
  {
    id: 1,
    title: "AI Powered Clothing Platform",
    description:
      "A full-stack fashion platform that leverages AI to recommend personalized outfits. Users can browse trending styles, try virtual styling, and get fashion suggestions based on their preferences.",
    screenshots: [Project1, Project2],
    techStack: ["React", "Node.js", "MongoDB", "Express", "AI/ML"],
    features: ["AI Outfit Recommendations", "Virtual Try-On", "Trend Analytics", "User Profiles"],
    category: "Full Stack",
    color: "#8b5cf6",
  },
  {
    id: 2,
    title: "Pizza Management System",
    description:
      "A comprehensive pizza ordering and management system with real-time order tracking, inventory management, and delivery coordination. Built with a modern stack for high performance.",
    screenshots: [Pizza1],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Order Management", "Inventory Tracking", "Delivery System", "Admin Dashboard"],
    category: "Full Stack",
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "E-Commerce REST API",
    description:
      "A robust, scalable RESTful API for e-commerce operations built with Spring Boot. Features JWT authentication, role-based access, product CRUD, order processing, and payment integration.",
    screenshots: [],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "JWT", "Docker"],
    features: ["JWT Auth & RBAC", "Product Catalog API", "Order Processing", "Payment Integration"],
    category: "Backend",
    color: "#10b981",
  },
  {
    id: 4,
    title: "Task Management Application",
    description:
      "A collaborative task management app with real-time updates. Features project boards, task assignments, due dates, and team collaboration tools — built with React frontend and Spring Boot backend.",
    screenshots: [],
    techStack: ["React", "Spring Boot", "PostgreSQL", "REST API", "Tailwind CSS"],
    features: ["Project Boards", "Task Assignment", "Team Collaboration", "Real-time Updates"],
    category: "Full Stack",
    color: "#ec4899",
  },
];

/* ================================
   VIEW PROJECTS PAGE
================================ */
const ViewProjects = () => {
  return (
    <div className="bg-[#0a0a1a] min-h-screen pt-28 pb-20">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ background: "#8b5cf6", top: "10%", right: "-10%" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
          style={{ background: "#06b6d4", bottom: "10%", left: "-10%" }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#a0a0c0] hover:text-[#8b5cf6] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(139,92,246,0.1)",
                color: "#8b5cf6",
                border: "1px solid rgba(139,92,246,0.2)",
              }}
            >
              Portfolio
            </motion.span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
            >
              Projects
            </span>
          </h1>
          <p className="text-lg text-[#a0a0c0] max-w-2xl">
            A showcase of my work spanning full-stack applications, backend APIs, and modern web experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-2xl overflow-hidden transition-all hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]"
              style={{
                background: "rgba(15,15,42,0.5)",
                border: "1px solid rgba(139,92,246,0.12)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className={`grid ${project.screenshots.length > 0 ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-0`}>
                {/* Image Section */}
                {project.screenshots.length > 0 && (
                  <div className="p-5">
                    <ImageCarousel images={project.screenshots} title={project.title} />
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8b5cf6] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-[#a0a0c0] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-[#6b6b8a] uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-[#a0a0c0]">
                          <Sparkles size={12} style={{ color: project.color }} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-[#6b6b8a] uppercase tracking-wider mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#a0a0c0]"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#a0a0c0] hover:text-white transition-all"
                      style={{
                        border: "1px solid rgba(139,92,246,0.3)",
                        background: "rgba(139,92,246,0.05)",
                      }}
                    >
                      <Github size={14} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;
