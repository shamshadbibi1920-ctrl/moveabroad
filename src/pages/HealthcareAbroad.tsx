import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Stethoscope, HeartPulse, Pill, Baby, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HealthcareAbroad() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const professions = [
    { id: 'doctor', title: 'Doctors', icon: <Stethoscope className="h-8 w-8" />, exams: ['PLAB (UK)', 'USMLE (USA)', 'DHA (UAE)'], desc: 'Pathways, exam resources, and job guides for Pakistani MBBS graduates.' },
    { id: 'nurse', title: 'Nurses', icon: <HeartPulse className="h-8 w-8" />, exams: ['NCLEX (USA/Canada)', 'NMC (UK)', 'DHA/HAAD (UAE)'], desc: 'Registration guides, CBT prep, and relocation advice for Registered Nurses.' },
    { id: 'pharmacist', title: 'Pharmacists', icon: <Pill className="h-8 w-8" />, exams: ['KAPS (Australia)', 'PEBC (Canada)', 'DHA (UAE)'], desc: 'Licensing exams and retail/hospital pharmacy opportunities abroad.' },
    { id: 'dentist', title: 'Dentists', icon: <Baby className="h-8 w-8" />, exams: ['ORE/LDS (UK)', 'INBDE (USA)', 'ADC (Australia)'], desc: 'How to practice dentistry and complete equivalence exams in top countries.' },
    { id: 'physiotherapist', title: 'Physiotherapists', icon: <Activity className="h-8 w-8" />, exams: ['HCPC (UK)', 'PCE (Canada)', 'DHC (UAE)'], desc: 'Registration processes and job hunting for DPT graduates.' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">Healthcare Professionals Abroad</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400">Step-by-step licensing and career guides for medical and allied health professionals from Pakistan.</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          {professions.map((prof, idx) => (
            <motion.div 
              variants={fadeIn}
              key={idx} 
              className="group bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2"
            >
              <div className="p-10 flex-grow">
                <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {prof.icon}
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">{prof.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-sm">{prof.desc}</p>
                
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-50 uppercase tracking-widest mb-4">Top Licensing Exams</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {prof.exams.map((exam, eIdx) => (
                    <span key={eIdx} className="inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
              <Link to={`/healthcare-abroad/${prof.id}`} className="bg-slate-50 dark:bg-slate-800/50 px-10 py-6 border-t border-slate-100 dark:border-slate-700 group-hover:bg-teal-50 dark:bg-teal-900/30 transition-colors block">
                <button className="w-full flex justify-between items-center text-teal-700 dark:text-teal-400 font-bold hover:text-teal-900 transition-colors pointer-events-none">
                  View Complete Guide
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
