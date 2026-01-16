
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, Database, Terminal } from 'lucide-react';

// Configuration
const LINE_COUNT = 0;
const CIRCLE_COUNT = 5;
const LINE_COLORS = ['bg-white', 'bg-latte-50', 'bg-latte-100', 'bg-gray-300', 'bg-gray-100'];

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Generate geometry only on mount to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const geometry = useMemo(() => {
    if (!isMounted) return { lines: [], circles: [] };

    const generatedLines = Array.from({ length: LINE_COUNT }).map((_, i) => ({
      id: i,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
      width: Math.random() * 1200 + 600,
      thickness: Math.random() < 0.1 ? 2 : 1,
      opacity: Math.random() * 0.25 + 0.05,
      translateZ: Math.random() * 400,
      color: LINE_COLORS[Math.floor(Math.random() * LINE_COLORS.length)]
    }));

    const generatedCircles = Array.from({ length: CIRCLE_COUNT }).map((_, i) => ({
      id: i,
      size: (i + 1) * 350,
      rotateX: i * 24,
      rotateY: i * 15,
      isThick: i % 3 === 0,
      isSolid: i % 2 === 0
    }));

    return { lines: generatedLines, circles: generatedCircles };
  }, [isMounted]);

  const getIcon = (category) => {
    if (category.includes("Languages")) return <Code size={24} />;
    if (category.includes("données")) return <Database size={24} />;
    return <Terminal size={24} />;
  };

  return (
    // Caramel/Brown background maintained
    <div className="relative py-28 overflow-hidden bg-latte-950 transition-colors duration-500">
      
      {/* 3D Geometric Web Background */}
      <div className="absolute inset-0 perspective-deep pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="relative w-[1400px] h-[1400px] preserve-3d animate-spin-slow">
           
           {isMounted && geometry.lines.map((line) => (
             <div 
               key={`line-${line.id}`}
               className={`absolute top-1/2 left-1/2 ${line.color} origin-center`}
               style={{
                 width: `${line.width}px`,
                 height: `${line.thickness}px`,
                 opacity: line.opacity,
                 transform: `translate(-50%, -50%) rotateX(${line.rotateX}deg) rotateY(${line.rotateY}deg) rotateZ(${line.rotateZ}deg) translateZ(${line.translateZ}px)`,
                 boxShadow: `0 0 2px rgba(255, 255, 255, ${line.opacity})`
               }}
             />
           ))}

           {isMounted && geometry.circles.map((circle) => (
             <div 
               key={`circle-${circle.id}`}
               className="absolute top-1/2 left-1/2 rounded-full border border-latte-100/20 origin-center"
               style={{
                 width: `${circle.size}px`,
                 height: `${circle.size}px`,
                 transform: `translate(-50%, -50%) rotateX(${circle.rotateX}deg) rotateY(${circle.rotateY}deg)`,
                 borderWidth: circle.isThick ? '2px' : '1px',
                 opacity: circle.opacity,
                 borderStyle: circle.isSolid ? 'solid' : 'dotted'
               }}
             />
           ))}

           {/* Central Core */}
           <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_120px_50px_rgba(255,255,255,0.15)] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-latte-50 to-latte-300 mb-6 drop-shadow-lg">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1.5 bg-latte-200/50 mx-auto rounded-full blur-[1px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container">
          {SKILLS.map((skillGroup, index) => (
            <div
              key={index}
              // Glass effect without black box
              className="p-8 rounded-3xl relative group overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:border-white/20 "
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white/10 rounded-2xl text-latte-100 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                    {getIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-2xl font-bold text-latte-50 tracking-wide">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-4 py-2 bg-white/5 text-latte-100 rounded-xl text-sm font-semibold border border-white/10 hover:bg-white/20 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
