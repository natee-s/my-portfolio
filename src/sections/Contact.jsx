import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactData } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {contactData.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{contactData.subtitle}</p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-xl space-y-8"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
