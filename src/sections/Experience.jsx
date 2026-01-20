import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* ฝั่ง Experience */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8">Experience</h3>
            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-4">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                  <p className="font-medium text-slate-500 dark:text-slate-400 mb-2">{exp.company}</p>
                  <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ฝั่ง Education */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8">Education</h3>
            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{edu.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;