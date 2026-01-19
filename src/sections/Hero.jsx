import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
      {/* แอนิเมชันข้อความทักทาย */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-2">
          Hi, I am 
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
          {profileData.name}
        </h1>
        <h3 className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
          {profileData.role}
        </h3>
      </motion.div>

      {/* แอนิเมชันคำบรรยาย */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed"
      >
        {profileData.description}
      </motion.p>

      {/* ปุ่ม Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex space-x-4"
      >
        <a
          href={profileData.resumeUrl}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;