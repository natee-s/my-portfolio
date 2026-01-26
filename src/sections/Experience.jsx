import React from 'react';
import { motion } from 'framer-motion';
import { experienceCard } from '../data/portfolio';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-800 transform-colors duration-300"
      >
        {/* title section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl front-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* ส่วนเนื้อหาแบบ 3 คอลัมน์ */}
        <div className="grid gride-cols-1 md:grid-cols-3 gap-8 mx-5">
          {experienceCard.map((card,index) => (
            <motion.div
              key={index}
              initial={{opacity:0, y:20}}
              whileInView={{opacity: 1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.5, deley: index*0.2}}
              // ลูกเล่นเวลา hover//ฟ
              whileHover={{y:-10}}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl shawdow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* picture */}
              <div className='w-full h-48 mb-6 overflow-hidden round-xl bg-white flex items-center justify-center'>
                <img 
                  src={card.image}
                  alt={card.title}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* title */}
              <h3 className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center'>
                {card.title}
              </h3>

              {/* context */}
              <p className='text-slate-600 dark:text-slate-300 leading-relaxed text-left whitespace-pre-line text-sm md:text-base'>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Experience;