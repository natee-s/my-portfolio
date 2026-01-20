import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactData } from '../data/portfolio';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // ฟังก์ชันนี้จะทำงานเมื่อกดส่ง (ตอนนี้เราให้มัน Log ดูค่าไปก่อน จนกว่าจะทำ Backend)
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("ขอบคุณที่ติดต่อมา! (ระบบ Backend จะเริ่มทำงานในขั้นตอนถัดไป)");
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {contactData.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{contactData.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* ฝั่งซ้าย: ข้อมูลการติดต่อ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
                <p className="text-slate-600 dark:text-slate-400">{contactData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Phone</h4>
                <p className="text-slate-600 dark:text-slate-400">{contactData.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Address</h4>
                <p className="text-slate-600 dark:text-slate-400">{contactData.address}</p>
              </div>
            </div>
          </motion.div>

          {/* ฝั่งขวา: ฟอร์มส่งข้อความ */}
          <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <input 
                {...register("name", { required: "กรุณากรอกชื่อ" })}
                placeholder="Your Name"
                className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
            </div>

            <div>
              <input 
                {...register("email", { 
                  required: "กรุณากรอกอีเมล", 
                  pattern: { value: /^\S+@\S+$/i, message: "อีเมลไม่ถูกต้อง" } 
                })}
                placeholder="Your Email"
                className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>

            <div>
              <textarea 
                {...register("message", { required: "กรุณากรอกข้อความ" })}
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
              ></textarea>
              {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;