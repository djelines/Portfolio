
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-latte-900 dark:bg-black text-latte-100 py-10 border-t border-latte-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2 font-bold text-xl">
           <Code size={20} className="text-latte-400" />
           <span>Inès<span className="text-latte-400">Charfi</span></span>
        </div>

        <div className="text-sm flex items-center gap-1 font-medium">
          <Heart size={14} className="text-latte-400 fill-current animate-pulse" />
        </div>

        <div className="text-sm text-latte-300">
          &copy; {new Date().getFullYear()} Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
