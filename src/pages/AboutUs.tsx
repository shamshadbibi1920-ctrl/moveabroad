import React from 'react';
import { Globe, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">About Us</motion.h1>
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">Empowering Pakistani talent to thrive globally.</motion.p>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-16 border border-slate-100 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose prose-lg prose-blue max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p className="mb-8">
              MoveAbroad.pk was founded with a singular mission: to bridge the gap between talented Pakistani professionals & students, and the vast array of opportunities available around the world.
            </p>
            <p className="mb-12">
              Navigating the complexities of foreign admissions, scholarship applications, and immigration pathways can be daunting. We simplify this process by providing verified, contextualized, and up-to-date information tailored specifically for Pakistani passport holders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 not-prose">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:bg-blue-50 dark:bg-blue-900/30 transition-colors duration-300">
                <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">Global Reach</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Information spanning over 20+ countries.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:bg-blue-50 dark:bg-blue-900/30 transition-colors duration-300">
                <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">Community Driven</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Built by expats, for future expats.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:bg-blue-50 dark:bg-blue-900/30 transition-colors duration-300">
                <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">Verified Data</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">We ensure all pathways are genuine.</p>
              </div>
            </div>

            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mt-12 mb-6">Our Vision</h2>
            <p>
              We envision a future where geographical boundaries do not limit the potential of hardworking Pakistanis. Whether you are a fresh graduate seeking a fully funded PhD or a doctor looking to practice in the UK, we are here to provide the roadmap.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
