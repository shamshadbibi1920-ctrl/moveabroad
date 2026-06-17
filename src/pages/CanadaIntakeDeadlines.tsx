import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, AlertTriangle, ArrowRight, Clock, Target , ArrowLeft, Globe} from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function CanadaIntakeDeadlines() {
  const data = getCountryData('canada');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Canada
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intakes & Deadlines 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Plan your application timeline ahead. See the three major academic intakes and the step-by-step preparation schedule.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-6 mb-12 flex items-start shadow-sm">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-1">Deadlines Change Every Year</h4>
            <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
              The deadlines provided below are general windows. Always verify the exact deadline down to the specific day on the official university portal. Some highly competitive programs close months earlier.
            </p>
          </div>
        </motion.div>

        {/* Intakes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition"></div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Fall Intake</h3>
            <span className="inline-block px-3 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-sm font-semibold rounded-md mb-4">Begins: September</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">The primary intake for Canada. It offers the maximum number of programs, largest scholarship pool, and the best weather for arrival.</p>
            <div className="mt-auto">
              <strong className="block text-slate-800 dark:text-slate-200 text-sm mb-1">Application Period:</strong>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">January — March</span>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition"></div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Winter Intake</h3>
            <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-md mb-4">Begins: January</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Secondary intake. A limited selection of degree programs are offered. Good if you missed the Fall deadline.</p>
            <div className="mt-auto">
              <strong className="block text-slate-800 dark:text-slate-200 text-sm mb-1">Application Period:</strong>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">September — October (Previous year)</span>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition"></div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Summer Intake</h3>
            <span className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-semibold rounded-md mb-4">Begins: May</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Very limited. Usually only offers language short courses, specific diplomas, or specific continued degree courses.</p>
            <div className="mt-auto">
              <strong className="block text-slate-800 dark:text-slate-200 text-sm mb-1">Application Period:</strong>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">January — February</span>
            </div>
          </motion.section>
        </div>

        {/* Ideal Timeline */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center">
            <Target className="w-8 h-8 mr-4 text-rose-500" /> Ideal Timeline for Pakistani Students
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Assuming targeting a <strong>Fall (September) Intake</strong>.</p>
          
          <div className="space-y-4">
            {[
              { time: '12 Months Before (Sept)', task: 'Research universities, programs, and scholarship eligibility. Narrow down to 5-6 target institutions.' },
              { time: '10 Months Before (Nov)', task: 'Book and take IELTS/TOEFL exam. Arrange HEC attestations if required.' },
              { time: '8 Months Before (Jan-Feb)', task: 'Submit admission and scholarship applications via portal/OUAC.' },
              { time: '6 Months Before (Mar-Apr)', task: 'Receive admit letter. Accept offer, pay GIC (CAD $20,635), and secure initial tuition deposit.' },
              { time: '4 Months Before (May)', task: 'Lodge your Canadian Study Permit visa via the fast-tracked SDS stream.' },
              { time: '2 Months Before (July)', task: 'Complete Upfront Medical Exam and Biometrics at VFS.' },
              { time: '1 Month Before (August)', task: 'Receive visa TRV stamping. Book flights, finalize accommodation, pack.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 font-bold text-rose-600 dark:text-rose-400 mb-2 md:mb-0 shrink-0">
                  {step.time}
                </div>
                <div className="md:w-3/4 text-slate-700 dark:text-slate-300 text-sm md:pl-6 md:border-l border-slate-200 dark:border-slate-700">
                  {step.task}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Scholarships Deadlines */}
        <div className="bg-rose-50 dark:bg-rose-900/10 rounded-2xl p-6 border border-rose-100 dark:border-rose-900/40">
           <h3 className="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center">
             <Clock className="w-5 h-5 mr-2" /> Note on Scholarship Deadlines
           </h3>
           <p className="text-rose-800 dark:text-rose-400 text-sm leading-relaxed">
             Scholarship applications close <strong>significantly earlier</strong> than general admission applications. Major awards like the Vanier Scholarship require applications to be submitted between September and November of the previous year. Always plan based on your funding deadline, not admission deadlines.
           </p>
        </div>

      </div>
    </div>
  );
}
