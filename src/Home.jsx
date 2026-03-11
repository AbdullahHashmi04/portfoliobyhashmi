import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import profileImage from "./Image/image.jpeg";
import { Link } from "react-router-dom";
import {
  Mail, Phone, MapPin, ExternalLink, ArrowRight, Download,
  Code2, Database, Server, Palette, GitBranch, Terminal,
  Briefcase, GraduationCap, ChevronRight, Send,
  Linkedin, Github, Twitter
} from "lucide-react";

/* ================================
   TYPING ANIMATION HOOK
================================ */
const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

/* ================================
   ANIMATED SECTION WRAPPER
================================ */
const Section = ({ children, className = "", id }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/* ================================
   SECTION HEADING
================================ */
const SectionHeading = ({ label, title }) => (
  <div className="text-center mb-16">
    <motion.span
      className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
      style={{
        background: "rgba(139,92,246,0.1)",
        color: "#8b5cf6",
        border: "1px solid rgba(139,92,246,0.2)",
      }}
    >
      {label}
    </motion.span>
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
  </div>
);

/* ================================
   SKILLS DATA
================================ */
const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette size={22} />,
    color: "#8b5cf6",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={22} />,
    color: "#06b6d4",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  {
    title: "Database",
    icon: <Database size={22} />,
    color: "#10b981",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "JPA / Hibernate"],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal size={22} />,
    color: "#ec4899",
    skills: ["Git", "Docker", "Postman", "Linux", "CI/CD", "AWS Basics"],
  },
];

/* ================================
   EXPERIENCE DATA
================================ */
const experiences = [
  {
    type: "work",
    icon: <Briefcase size={18} />,
    title: "Full Stack Developer",
    org: "Freelance & Personal Projects",
    period: "2024 — Present",
    description: "Building production-grade web apps using React, Spring Boot, and cloud services. Delivered multiple client projects end-to-end.",
  },
  {
    type: "education",
    icon: <GraduationCap size={18} />,
    title: "BS Computer Science",
    org: "University",
    period: "2021 — Present",
    description: "Studying core CS fundamentals including data structures, algorithms, OOP, databases, and software engineering.",
  },
];

/* ================================
   HOME COMPONENT
================================ */
const Home = () => {
  const typedRole = useTypingEffect([
    "Full Stack Developer",
    "Spring Boot Expert",
    "React Developer",
    "UI/UX Enthusiast",
  ]);

  return (
    <div className="bg-[#0a0a1a] min-h-screen">
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Gradient Orbs */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ background: "#8b5cf6", top: "-10%", right: "-5%" }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: "#06b6d4", bottom: "0%", left: "-5%" }}
          />
        </div>

        <div className="section-container w-full relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-sm text-[#a0a0c0]">Available for opportunities</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Hi, I'm{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    backgroundSize: "200% auto",
                  }}
                >
                  Abdullah
                </span>
              </h1>

              <div className="h-10 sm:h-12 mb-6 flex items-center justify-center lg:justify-start">
                <span
                  className="text-xl sm:text-2xl font-medium"
                  style={{ color: "#a0a0c0", fontFamily: "'Fira Code', monospace" }}
                >
                  {typedRole}
                </span>
                <span
                  className="inline-block w-0.5 h-6 sm:h-7 ml-1"
                  style={{
                    backgroundColor: "#06b6d4",
                    animation: "typing-cursor 1s step-end infinite",
                  }}
                />
              </div>

              <p className="text-[#a0a0c0] text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                I craft high-performance web applications using{" "}
                <span className="text-[#8b5cf6] font-medium">Java Spring Boot</span> and{" "}
                <span className="text-[#06b6d4] font-medium">React</span>. Passionate about
                clean architecture, responsive design, and delivering exceptional user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://wa.me/923305495158"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-shadow"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                >
                  Contact Me
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <Link to="/Projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[#a0a0c0] font-semibold text-sm transition-all hover:text-white"
                    style={{
                      border: "1px solid rgba(139,92,246,0.3)",
                      background: "rgba(139,92,246,0.05)",
                    }}
                  >
                    <ExternalLink size={16} />
                    View Projects
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-8 mt-12 justify-center lg:justify-start"
              >
                {[
                  { value: "10+", label: "Projects" },
                  { value: "2+", label: "Years Exp." },
                  { value: "5+", label: "Technologies" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-[#6b6b8a] mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute -inset-4 rounded-full opacity-50 blur-xl"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                  style={{
                    border: "3px solid rgba(139,92,246,0.4)",
                    boxShadow: "0 0 40px rgba(139,92,246,0.2)",
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Abdullah Hashmi"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating tech badges */}
                {[
                  { label: "React", top: "5%", left: "-15%", delay: 0 },
                  { label: "Spring", top: "70%", left: "-20%", delay: 1.5 },
                  { label: "Java", top: "15%", right: "-15%", delay: 3 },
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                    className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white"
                    style={{
                      top: badge.top,
                      left: badge.left,
                      right: badge.right,
                      background: "rgba(15,15,42,0.8)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Code2 size={12} className="text-[#8b5cf6]" />
                    {badge.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <Section id="about" className="relative">
        <div className="section-container">
          <SectionHeading label="About Me" title="Who I Am" />
          <div className="max-w-3xl mx-auto">
            <div
              className="p-8 md:p-10 rounded-2xl"
              style={{
                background: "rgba(15,15,42,0.5)",
                border: "1px solid rgba(139,92,246,0.15)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p className="text-[#a0a0c0] text-lg leading-relaxed mb-6">
                I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with
                hands-on experience building end-to-end web applications. I specialize in{" "}
                <span className="text-[#8b5cf6] font-medium">Java Spring Boot</span> for robust backend
                services and <span className="text-[#06b6d4] font-medium">React</span> for dynamic,
                responsive frontends.
              </p>
              <p className="text-[#a0a0c0] text-lg leading-relaxed mb-6">
                From designing RESTful APIs and microservices architecture to crafting intuitive user
                interfaces, I love turning ideas into production-ready software. I'm always exploring
                new technologies and best practices to write cleaner, more efficient code.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-[#a0a0c0]"
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.15)",
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== SKILLS ========== */}
      <Section id="skills" className="relative">
        <div className="section-container">
          <SectionHeading label="Tech Stack" title="Skills & Technologies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(139,92,246,0.15)" }}
                className="p-6 rounded-2xl transition-all"
                style={{
                  background: "rgba(15,15,42,0.5)",
                  border: "1px solid rgba(139,92,246,0.15)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${cat.color}15`,
                    color: cat.color,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#a0a0c0] hover:text-white transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== EXPERIENCE ========== */}
      <Section id="experience" className="relative">
        <div className="section-container">
          <SectionHeading label="Journey" title="Experience & Education" />
          <div className="max-w-2xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="relative pl-8 group"
              >
                {/* Timeline line */}
                {i < experiences.length - 1 && (
                  <div
                    className="absolute left-[15px] top-[48px] w-px h-[calc(100%+24px)]"
                    style={{ background: "rgba(139,92,246,0.2)" }}
                  />
                )}
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{
                    background: exp.type === "work" ? "rgba(139,92,246,0.15)" : "rgba(6,182,212,0.15)",
                    color: exp.type === "work" ? "#8b5cf6" : "#06b6d4",
                    border: `1px solid ${exp.type === "work" ? "rgba(139,92,246,0.3)" : "rgba(6,182,212,0.3)"}`,
                  }}
                >
                  {exp.icon}
                </div>

                <div
                  className="p-6 rounded-2xl transition-all ml-4"
                  style={{
                    background: "rgba(15,15,42,0.5)",
                    border: "1px solid rgba(139,92,246,0.12)",
                  }}
                >
                  <span className="text-xs font-medium text-[#6b6b8a] uppercase tracking-wider">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">{exp.title}</h3>
                  <p className="text-sm text-[#8b5cf6] font-medium mb-2">{exp.org}</p>
                  <p className="text-sm text-[#a0a0c0] leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== CONTACT ========== */}
      <Section id="contact" className="relative">
        <div className="section-container">
          <SectionHeading label="Get In Touch" title="Let's Work Together" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-[#a0a0c0] text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Let's connect!
              </p>
              {[
                { icon: <Mail size={20} />, label: "Email", value: "abdullahhashmi@email.com", href: "mailto:abdullahhashmi@email.com" },
                { icon: <Phone size={20} />, label: "WhatsApp", value: "+92 330 5495158", href: "https://wa.me/923305495158" },
                { icon: <MapPin size={20} />, label: "Location", value: "Pakistan", href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(139,92,246,0.1)",
                      color: "#8b5cf6",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#6b6b8a] uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-[#a0a0c0] hover:text-[#8b5cf6] transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#a0a0c0] font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/AbdullahHashmi04" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abdullah-hashmi-aa5706290/" },
                  { icon: <Twitter size={20} />, href: "https://x.com/hashmi486" },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[#a0a0c0] hover:text-white transition-all"
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.15)",
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(15,15,42,0.5)",
                border: "1px solid rgba(139,92,246,0.15)",
                backdropFilter: "blur(16px)",
              }}
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-[#a0a0c0] mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#6b6b8a] outline-none transition-all focus:ring-2 focus:ring-[#8b5cf6]/30"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(139,92,246,0.15)",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-[#a0a0c0] mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#6b6b8a] outline-none resize-none transition-all focus:ring-2 focus:ring-[#8b5cf6]/30"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(139,92,246,0.15)",
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== FOOTER ========== */}
      <footer
        className="relative py-12 mt-12"
        style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
            >
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">Abdullah.dev</span>
          </div>
          <div className="flex gap-6 justify-center mb-6">
            {[
              { label: "Home", to: "/" },
              { label: "Projects", to: "/Projects" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-[#6b6b8a] hover:text-[#8b5cf6] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/923305495158" className="text-sm text-[#6b6b8a] hover:text-[#8b5cf6] transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-[#6b6b8a]">
            © {new Date().getFullYear()} Abdullah Hashmi. Built with React & ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
