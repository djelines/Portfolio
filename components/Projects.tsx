import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import {
  ExternalLink,
  Search,
  Github,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const GRADIENTS = [
  "from-amber-200 to-orange-400",
  "from-blue-200 to-indigo-400",
  "from-emerald-200 to-teal-400",
  "from-rose-200 to-pink-400",
  "from-violet-200 to-purple-400",
  "from-latte-200 to-latte-400",
];

const CATEGORIES = ["Tous", "Web", "Mobile", "Game"];
const PROJECTS_PER_PAGE = 6;

const Projects = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = PROJECTS.filter((project) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some((t) => t.toLowerCase().includes(term));
    const matchesCategory =
      activeCategory === "Tous" || project.type === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header and Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-8 text-center lg:text-left">
        <div className="w-full lg:w-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-latte-900 dark:text-latte-100 mb-4 transition-colors duration-500 tracking-tight">
            Tous mes <span className="text-latte-400">Projets</span>
          </h2>
          <div className="w-24 h-1.5 bg-latte-400 rounded-full mx-auto lg:mx-0 mb-6"></div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all border-2 ${
                  activeCategory === cat
                    ? "bg-latte-900 text-white border-latte-900 shadow-lg scale-105"
                    : "bg-white dark:bg-latte-800 text-latte-600 dark:text-latte-300 border-latte-100 dark:border-latte-700 hover:border-latte-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto justify-center lg:justify-end">
          <div className="relative w-full sm:w-64 max-w-xs">
            <input
              type="text"
              placeholder="Rechercher (tech, titre...)"
              className="w-full px-4 py-2 pl-10 rounded-full border border-latte-200 dark:border-latte-700 bg-white dark:bg-latte-800 focus:ring-2 focus:ring-latte-400 focus:outline-none text-latte-800 dark:text-latte-100 placeholder-latte-300 shadow-sm transition-all duration-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Search
              className="absolute left-3 top-2.5 text-latte-400"
              size={18}
            />
          </div>

          <a
            href="https://github.com/djelines?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-latte-700 dark:text-latte-300 font-semibold hover:text-latte-500 transition-colors whitespace-nowrap"
          >
            Tout voir sur GitHub <Github size={20} />
          </a>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="min-h-[600px] perspective-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentProjects.map((project, index) => (
              <div
                className="group relative bg-white dark:bg-latte-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-latte-100 dark:border-latte-700 transition-all duration-500 flex flex-col h-full hover-3d-card"
              >
                {/* Header Gradient */}
                <div
                  className={`h-28 w-full bg-gradient-to-br ${
                    GRADIENTS[index % GRADIENTS.length]
                  } relative p-4 flex flex-col justify-end overflow-hidden transition-all duration-500`}
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
                  <div className="absolute left-10 -top-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>

                  <div className="absolute top-0 right-0 p-3 opacity-20 transform rotate-12 text-latte-900 mix-blend-overlay">
                    <Code2 size={80} />
                  </div>
                  <span className="relative z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-latte-900 text-[10px] font-bold uppercase tracking-wider w-max shadow-sm">
                    {project.type}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-latte-900 dark:text-latte-100 mb-2 group-hover:text-latte-600 dark:group-hover:text-latte-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-latte-700 dark:text-latte-300 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-latte-50 dark:bg-latte-700 text-latte-800 dark:text-latte-200 text-[10px] rounded-lg border border-latte-100 dark:border-latte-600 uppercase font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-latte-400 text-[10px]">
                        + {project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-3 border-t border-latte-50 dark:border-latte-700 flex justify-between items-center text-xs text-latte-500 dark:text-latte-400">
                    <span>{project.date}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:text-latte-800 dark:hover:text-latte-200 font-medium px-2 py-1 rounded hover:bg-latte-50 dark:hover:bg-latte-700 transition-colors"
                      >
                        Voir <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="w-full text-center py-24 text-latte-400 dark:text-latte-500">
            <Code2 size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl font-hand">Aucun projet trouvé...</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 mb-20 flex justify-center items-center">
          {/* MOBILE */}
          <div className="flex items-center gap-4 sm:hidden">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-latte-200 dark:border-latte-700 disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-sm font-medium text-latte-700 dark:text-latte-300">
              Page {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-latte-200 dark:border-latte-700 disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* DESKTOP */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border transition-all ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-latte-100 dark:hover:bg-latte-800"
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-latte-400 text-white scale-110"
                      : "bg-white dark:bg-latte-800 hover:bg-latte-50 dark:hover:bg-latte-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border transition-all ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-latte-100 dark:hover:bg-latte-800"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
