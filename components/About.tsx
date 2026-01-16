
import React from 'react';
import { motion } from 'framer-motion';
import { SOFT_SKILLS, EDUCATION } from '../constants';
import { GraduationCap, MapPin, Car } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-latte-900 dark:text-latte-100 mb-4 transition-colors duration-500">À propos de moi</h2>
        <div className="w-24 h-1 bg-latte-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Education */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Added Border here as requested */}
          <div className="bg-white dark:bg-latte-800 p-8 rounded-3xl shadow-xl border-2 border-dashed border-latte-300 dark:border-latte-600 relative overflow-hidden group hover-3d-card transition-all duration-500">
            
            <h3 className="text-2xl font-bold text-latte-800 dark:text-latte-200 mb-6 flex items-center gap-3 transition-colors duration-500">
              <GraduationCap className="text-latte-500" size={28} />
              Formation
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <h4 className="text-xl font-bold text-latte-900 dark:text-latte-100">{edu.degree}</h4>
                <p className="text-latte-600 dark:text-latte-300 font-medium mb-2">{edu.school} • {edu.period}</p>
                <ul className="space-y-2 mt-4">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-latte-700 dark:text-latte-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-latte-400 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pt-6 border-t border-latte-100 dark:border-latte-700 grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3 text-latte-700 dark:text-latte-300">
                  <div className="p-2 bg-latte-100 dark:bg-latte-700 rounded-full">
                    <MapPin size={18} className="text-latte-600 dark:text-latte-300" />
                  </div>
                  <span className="text-sm font-medium">Yvelines (78)</span>
               </div>
               <div className="flex items-center gap-3 text-latte-700 dark:text-latte-300">
                  <div className="p-2 bg-latte-100 dark:bg-latte-700 rounded-full">
                    <Car size={18} className="text-latte-600 dark:text-latte-300" />
                  </div>
                  <span className="text-sm font-medium">Permis B</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Soft Skills (REALISTIC POST-ITS CLEAN) */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative min-h-[400px] flex items-center justify-center perspective-container p-4"
        >
          <div className="grid grid-cols-2 gap-8 w-full max-w-md preserve-3d">
            {SOFT_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                // Removed pseudo-element usage by relying on cleaned .note-shadow class
                className={`
                  ${skill.color} 
                  dark:!bg-[#f5f5f5] 
                  p-4 aspect-square flex items-center justify-center text-center note-shadow 
                  cursor-pointer transition-all duration-500 ease-in-out
                `}
                style={{
                  transform: skill.rotation,
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0, 
                  zIndex: 50,
                  transition: { duration: 0.3, ease: "backOut" }
                }}
              >
                {/* Tape Graphic */}
                <div className="tape"></div>

                {/* Text is always dark because it's ink on paper */}
                <span className="font-hand text-xl md:text-2xl font-bold text-latte-900 leading-tight relative z-10">
                  {skill.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
