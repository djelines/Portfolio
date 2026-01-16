
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, ChevronRight, GripHorizontal } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef(null);
  
  // Reverse the experiences to show chronological order (Oldest -> Newest) on the timeline
  const chronologicalExperiences = [...EXPERIENCES].reverse();

  return (
    <div className="w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-latte-900 dark:text-latte-100 mb-4 transition-colors duration-500">Parcours Professionnel</h2>
          <div className="flex items-center justify-center gap-2 text-latte-500 text-sm">
            <GripHorizontal size={16} />
            <span>Glissez pour explorer la timeline</span>
          </div>
        </div>
      </div>

      {/* Draggable Horizontal Container */}
      <div className="cursor-grab active:cursor-grabbing overflow-hidden py-10" ref={containerRef}>
        <motion.div 
          className="flex gap-8 px-4 md:px-20 min-w-max items-center"
          drag="x"
          dragConstraints={containerRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {/* Start Point */}
          <div className="flex flex-col items-center justify-center gap-2 opacity-50">
             <div className="w-3 h-3 rounded-full bg-latte-400"></div>
             <span className="text-xs uppercase tracking-widest text-latte-500">Début</span>
          </div>

          {/* Timeline Items */}
          {chronologicalExperiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Connection Line segment (Visual) */}
              <div className="absolute top-1/2 left-[-2rem] w-[2rem] h-1 bg-latte-300 dark:bg-latte-700 -z-10 group-first:hidden"></div>

              <div className="relative w-[350px] md:w-[450px]">
                {/* Node on the central line - Integrated into card design */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-latte-800 border-4 border-latte-500 dark:border-latte-400 z-20 shadow-lg transition-transform duration-300 group-hover:scale-125"></div>

                <motion.div 
                  className="bg-white dark:bg-latte-800/90 backdrop-blur-xl p-8 rounded-[2rem] border border-latte-200 dark:border-latte-700 shadow-xl ml-4 hover-3d-card relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                   {/* Background Gradient */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-latte-200/50 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-latte-400/20"></div>

                   <div className="relative z-10">
                     <span className="inline-block px-3 py-1 bg-latte-100 dark:bg-latte-700 text-latte-600 dark:text-latte-200 text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                        {exp.period}
                     </span>
                     
                     <h3 className="text-2xl font-bold text-latte-900 dark:text-latte-100 mb-1">{exp.role}</h3>
                     
                     <div className="flex items-center gap-2 text-latte-600 dark:text-latte-300 mb-4 font-medium">
                       <Briefcase size={16} />
                       <span>{exp.company}</span>
                       <span className="w-1 h-1 bg-latte-400 rounded-full mx-1"></span>
                       <MapPin size={16} />
                       <span className="text-sm">{exp.location}</span>
                     </div>

                     <div className="space-y-2 mb-4">
                       {exp.description.map((item, i) => (
                         <div key={i} className="flex items-start gap-2 text-sm text-latte-700 dark:text-latte-200">
                           <ChevronRight size={14} className="mt-1 text-latte-400 shrink-0" />
                           <p>{item}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                </motion.div>
              </div>
            </div>
          ))}

          {/* End Point Arrow */}
          <div className="flex items-center gap-2 pl-4 opacity-50">
             <div className="h-1 w-12 bg-gradient-to-r from-latte-300 to-transparent"></div>
             <span className="text-xs uppercase tracking-widest text-latte-500">Futur</span>
          </div>

        </motion.div>
      </div>

      {/* Decorative Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-latte-300/50 dark:via-latte-600/50 to-transparent -z-20 pointer-events-none"></div>
    </div>
  );
};

export default Experience;
