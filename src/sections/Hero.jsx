import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">

      {/*  Container หลักของวงโคจร */}
      <div className='ralative mb-16 flex items-center justify-center'>
      <motion.div
        animate={{rotate:360}}
        transition={{duration:15, repeat: Infinity, ease:"linear"}}
        className='absolute w-50 h-50 border border-slate-200/50 dark:border-slate-700/30 rounded-full'
      >
        {/* ดวงกนอก 1 */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-xl shadow-purple-500/60'></div>

        {/* ดวงกนอก 2*/}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50'></div>
      </motion.div>
      
      {/* วงโคจรรอบใน - หมุนเร็ว */}
      <motion.div
        animate={{rotate:-360}} //สวนทางกันกับวงนอก
        transition={{duration:8, repeat: Infinity, ease:"linear"}}
        className='absolute w-55 h-55 border border-slate-200/50 dark:border-slate-700/30 rounded-full'
      >
        {/* ดวงใน */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-xl shadow-purple-500/60'></div>
        </motion.div>

      {/*Profile Picture*/}
        <motion.div
          initial={{opacity:0, scale:0.5}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1}}
          className="relative w-44 h-44 z-10"
        >
          <div className='w-full h-full rounded-full border-8 border-white  dark:border-slate-800 shadow-2xl overflow-hidden'>
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className='w-full h-full object-cover'
              />
          </div>

          {/* แสงเรืองรองด้านหลังรูป */}
          <div className='absolute insert-0 rounded-full bg-blue-500/20 blur-3xl -z-10'></div>
          </motion.div>
      </div>

      {/* แอนิเมชันข้อความทักทาย */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ dduration: 0.8, delay: 0.5 }}
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