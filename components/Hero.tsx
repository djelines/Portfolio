import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

// Particle Configuration
const PARTICLE_COUNT = 60;
const PARTICLE_COLORS = [
  "bg-latte-300",
  "bg-latte-400",
  "bg-latte-500",
  "bg-latte-200",
];

// Fix: Destructured onAllProjectsClick from props to resolve TypeScript error:
// Property 'onAllProjectsClick' does not exist on type 'IntrinsicAttributes'.
const Hero = ({ onAllProjectsClick }) => {
  const [particles, setParticles] = useState([]);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Initialize particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: PARTICLE_COUNT }).map(
      (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 12 + 4,
        z: Math.random() * 100 - 50,
        color:
          PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        // Shape: Round or Diamond (Glitter effect)
        shape: Math.random() > 0.5 ? "rounded-full" : "rounded-sm rotate-45",
      })
    );
    setParticles(generatedParticles);
  }, []);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-latte-50 dark:bg-latte-950 perspective-container pt-32 pb-32 transition-colors duration-500">
      {/* 3D Background Particles */}
      <div className="absolute inset-0 preserve-3d pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              z: p.z,
              y: p.z > 0 ? y1 : y2,
            }}
            className={`absolute ${p.color} ${p.shape} opacity-60 animate-twinkle shadow-sm dark:opacity-50`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center preserve-3d flex flex-col items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="transform-style-3d flex flex-col items-center"
        >
          {/* Main Title */}
          <div className="relative mb-6 p-4 flex justify-center max-w-full">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-latte-900 dark:text-latte-100 tracking-tight drop-shadow-sm leading-tight md:leading-snug text-center">
              Développeuse
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-latte-400 to-latte-700 dark:from-latte-300 dark:to-latte-500">
                Full Stack
              </span>
            </h1>
          </div>

          <div className="mb-10 flex items-center justify-center gap-3">
            <h2 className="text-2xl md:text-4xl font-hand font-bold text-latte-600 dark:text-latte-200 tracking-wide transition-colors duration-500 text-center">
              {PERSONAL_INFO.name}
            </h2>
          </div>

          <motion.div
            className="hidden sm:flex bg-white/60 dark:bg-latte-900/60 backdrop-blur-md p-8 rounded-3xl border border-latte-200 dark:border-latte-800 shadow-xl max-w-3xl mx-auto mb-12 hover-3d-card transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-latte-800 dark:text-latte-100 leading-relaxed font-hand font-bold">
              "{PERSONAL_INFO.tagline}"
            </p>
          </motion.div>

          <div className="hidden sm:flex flex-wrap gap-6 justify-center items-center pb-8">
            <button
              onClick={handleScrollTo("contact")}
              className="px-8 py-4 bg-latte-600 text-white rounded-full font-bold text-lg hover:bg-latte-700 transition-all shadow-lg hover:shadow-latte-400/50 dark:hover:shadow-black/50 hover:-translate-y-1 transform hover-3d-card cursor-pointer"
            >
              Me contacter
            </button>
            {/* Added button to use the onAllProjectsClick prop passed from App.tsx */}
            <button
              onClick={onAllProjectsClick}
              className="px-8 py-4 bg-white dark:bg-latte-800 text-latte-900 dark:text-latte-100 border-2 border-latte-200 dark:border-latte-700 rounded-full font-bold text-lg hover:bg-latte-100 dark:hover:bg-latte-700 transition-all shadow-lg hover:-translate-y-1 transform hover-3d-card cursor-pointer flex items-center gap-2"
            >
              <Briefcase size={20} />
              Voir mes projets
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white dark:bg-latte-800 border border-latte-200 dark:border-latte-700 rounded-full text-latte-800 dark:text-latte-200 hover:bg-latte-100 dark:hover:bg-latte-700"
            >
              <Github size={28} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white dark:bg-latte-800 border border-latte-200 dark:border-latte-700 rounded-full text-latte-800 dark:text-latte-200 hover:bg-latte-100 dark:hover:bg-latte-700"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
