
import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="hidden sm:block max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-latte-900 dark:text-latte-100 mb-4 transition-colors duration-500">Me contacter</h2>
        <div className="w-24 h-1 bg-latte-400 mx-auto rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-latte-800 rounded-[3rem] shadow-2xl overflow-hidden border border-latte-200 dark:border-latte-700 relative group transition-colors duration-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Main Info Side */}
          <div className="bg-latte-400 dark:bg-latte-600 p-12 text-white relative overflow-hidden transition-colors duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-6">Discutons de votre projet</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-10">
                Je suis actuellement à la recherche d'une alternance. N'hésitez pas à me contacter pour toute opportunité ou collaboration.
              </p>
              
              <div className="space-y-8">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-5 group/item">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md group-hover/item:bg-white/30 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-latte-100 font-medium uppercase tracking-widest">Email</p>
                    <p className="text-xl font-bold">{PERSONAL_INFO.email}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-latte-100 font-medium uppercase tracking-widest">Localisation</p>
                    <p className="text-xl font-bold">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Quote Side */}
          <div className="p-12 flex flex-col justify-center gap-6 bg-white dark:bg-latte-800 transition-colors duration-500">
            <div className="space-y-4">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl bg-latte-50 dark:bg-latte-900 hover:bg-latte-100 dark:hover:bg-latte-700 transition-all group/link border border-latte-100 dark:border-latte-700 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0077b5] text-white rounded-xl">
                    <Linkedin size={24} />
                  </div>
                  <span className="font-bold text-latte-800 dark:text-latte-100">LinkedIn</span>
                </div>
                <ExternalLink size={20} className="text-latte-300 group-hover/link:translate-x-1 transition-transform" />
              </a>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl bg-latte-50 dark:bg-latte-900 hover:bg-latte-100 dark:hover:bg-latte-700 transition-all group/link border border-latte-100 dark:border-latte-700 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-latte-900 dark:bg-black text-white rounded-xl">
                    <Github size={24} />
                  </div>
                  <span className="font-bold text-latte-800 dark:text-latte-100">GitHub</span>
                </div>
                <ExternalLink size={20} className="text-latte-300 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 p-8 bg-latte-50 dark:bg-latte-900/50 rounded-2xl border border-dashed border-latte-200 dark:border-latte-700">
              <p className="text-latte-600 dark:text-latte-400 italic text-center font-hand text-2xl leading-tight">
                "Le code est comme l'humour. Quand il faut l'expliquer, c'est qu'il est mauvais."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
