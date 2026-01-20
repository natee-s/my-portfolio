import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* หัวข้อ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {aboutData.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* เนื้อหาประวัติ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center"
        >
          <p>
            {aboutData.bio}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;