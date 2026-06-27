import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkIntakeDeadlines() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="UK University Intake Deadlines 2026 | MoveAbroad.pk"
        description="Learn about the main UK university intakes (September and January) and UCAS application deadlines for Pakistani students."
        canonicalPath="/study/uk/intake-deadlines"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Study Deadlines" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              UK Intakes & Deadlines
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Plan your application timeline for the Fall and Spring intakes.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Deadline Warning
          </h4>
          <p className="text-amber-800 dark:text-amber-200">
            For top universities (Russell Group) and competitive courses (Medicine, Dentistry), deadlines are extremely strict. Always start the application process at least 9 months before your intended start date.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Primary Intake</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
               September / October (Fall)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">The main intake for all UK universities. Almost all courses are available.</p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white text-sm">Undergraduate (UCAS) Oxford/Cambridge/Medicine</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">15 October (Year prior)</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white text-sm">Undergraduate (UCAS) General Deadline</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">29 January</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white text-sm">Postgraduate</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Usually rolling, but aim for March/April</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Secondary Intake</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
               January / February (Spring)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Smaller intake. Limited courses available, mostly postgraduate business and engineering.</p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white text-sm">Applications Open</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">July / August</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white text-sm">Application Deadline</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">October / November</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white text-sm">Visa Application</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">November / December</span>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
        
        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center">
           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ready to start your journey?</h3>
           <Link to="/study/uk/universities" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
             Find UK Universities <ArrowRight className="w-5 h-5 ml-2" />
           </Link>
        </motion.div>

      </div>
    </div>
  );
}
