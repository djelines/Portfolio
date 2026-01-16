import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Github, Medal, Crown, Code2 } from 'lucide-react';

const RANK_ICONS = [
  { icon: <Medal className="text-amber-600" size={22} />, label: "02", color: "from-slate-200 to-slate-400" },
  { icon: <Crown className="text-yellow-500" size={32} />, label: "01", color: "from-amber-300 to-yellow-500" },
  { icon: <Medal className="text-orange-700" size={22} />, label: "03", color: "from-orange-200 to-orange-400" },
];

const FeaturedProjects = ({ onSeeMore }) => {
  const rawFeatured = PROJECTS.slice(0, 3);
  const featured = [rawFeatured[1], rawFeatured[0], rawFeatured[2]].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-16 lg:mb-24 relative">
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div className="w-72 h-72 lg:w-96 lg:h-96 bg-latte-400/10 blur-[120px] rounded-full animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-latte-900 dark:text-latte-100">Le </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-latte-400 via-latte-600 to-latte-400">
              Podium Digital
            </span>
          </h2>

          <div className="w-24 lg:w-32 h-1.5 lg:h-2 bg-gradient-to-r from-latte-200 via-latte-500 to-latte-200 mx-auto rounded-full mb-6 lg:mb-8"></div>

          <p className="text-latte-700 dark:text-latte-400 max-w-2xl mx-auto text-base lg:text-xl font-medium">
            Voici les piliers de mon portfolio. Des projets conçus avec précision, passion et obsession du détail.
          </p>
        </motion.div>
      </div>

      {/* ================= PODIUM ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start lg:items-end pb-12">

        {featured.map((project, index) => {
          const isTop1 = index === 1;
          const rank = isTop1 ? RANK_ICONS[1] : index === 0 ? RANK_ICONS[0] : RANK_ICONS[2];

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.9, type: "spring" }}
              className={`relative flex flex-col ${isTop1 ? 'lg:mb-12 lg:z-20' : 'z-10'}`}
            >

              {/* shadow podium (desktop) */}
              <div className="
                hidden lg:block
                absolute -bottom-6 left-1/2 -translate-x-1/2
                w-[90%] h-12
                bg-latte-900/10 dark:bg-black/40
                blur-2xl rounded-full
                transition-transform duration-500
                group-hover:scale-110
                -z-10
              " />

              {/* ================= RANK ================= */}
              <div className="flex flex-col items-center mb-4 lg:mb-6">
                <motion.div
                  className="p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-white dark:bg-latte-800 shadow-xl border border-latte-100 dark:border-latte-700 mb-1"
                  animate={isTop1 ? { y: [0, -10, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  {rank.icon}
                </motion.div>

                <span className="text-2xl lg:text-4xl font-black text-latte-300 dark:text-latte-700 tracking-tight select-none">
                  {rank.label}
                </span>
              </div>

              {/* ================= CARD ================= */}
              <div
                className={`
                  group
                  relative
                  bg-white dark:bg-latte-800
                  rounded-3xl lg:rounded-[3rem]
                  overflow-hidden
                  border-2
                  shadow-xl lg:shadow-2xl
                  transition-all duration-500
                  lg:hover:scale-[1.03]
                  lg:hover:-translate-y-2
                  ${isTop1
                    ? 'lg:border-latte-400 lg:ring-4 lg:ring-latte-400/10'
                    : 'border-latte-100 dark:border-latte-700'}
                `}
              >

                {/* ===== HEADER CARD ===== */}
                <div className={`h-28 lg:h-40 bg-gradient-to-br ${rank.color} p-4 lg:p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[size:20px_20px]" />

                  {/* code icon anim */}
                  <div className="
                    hidden lg:block
                    absolute top-4 right-4
                    text-white/40
                    rotate-12
                    group-hover:rotate-45
                    transition-transform duration-700
                  ">
                    <Code2 size={100} />
                  </div>

                  <span className="relative z-10 px-3 py-1 bg-white/90 dark:bg-black/50 rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
                    {project.type}
                  </span>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="p-6 lg:p-10 flex flex-col h-full">
                  <h3 className="text-xl lg:text-2xl font-black mb-3 text-latte-900 dark:text-latte-100 group-hover:text-latte-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm lg:text-base text-latte-700 dark:text-latte-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-bold rounded-lg bg-latte-50 dark:bg-latte-900 border border-latte-200 dark:border-latte-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-latte-100 dark:border-latte-700 flex justify-between items-center">
                    <span className="text-xs font-bold text-latte-400 uppercase tracking-widest">
                      {project.date}
                    </span>

                    <div className="flex gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-latte-50 dark:bg-latte-700 hover:bg-latte-900 hover:text-white transition-all"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all ${
                            isTop1
                              ? 'bg-latte-900 text-white shadow-lg scale-105'
                              : 'bg-latte-100 dark:bg-latte-700 text-latte-800 dark:text-latte-100'
                          }`}
                        >
                          EXPLORER <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= CTA ================= */}
      <div className="mt-16 lg:mt-20 text-center">
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSeeMore}
          className="
            inline-flex items-center gap-3
            px-8 py-4 lg:px-14 lg:py-6
            text-lg lg:text-2xl
            font-black
            rounded-2xl lg:rounded-3xl
            bg-latte-900 text-white
            dark:bg-latte-100 dark:text-latte-900
            shadow-2xl
          "
        >
          Voir toute la collection
          <ArrowRight size={26} />
        </motion.button>
      </div>

    </div>
  );
};

export default FeaturedProjects;
