import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              
              // ลูกเล่น Hover แสงฟุ้งสีฟ้า
              whileHover={{ 
                y: -10,
                boxShadow: "0px 10px 25px -5px rgba(59, 130, 246, 0.4)", // แสง Glow
                borderColor: "#3b82f6" 
              }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300 group"
            >
              {/* แสดงโลโก้โดยดึงมาจาก skill.icon */}
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" 
              />
              
              {/* แสดงชื่อโดยดึงมาจาก skill.name */}
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;