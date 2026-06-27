import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, HeartPulse, ListTodo, Banknote, MapPin, Languages, ArrowLeft, Globe } from 'lucide-react';

export default function UkWorkIndex() {
  const sections = [
    { title: 'Job Opportunities', icon: <Briefcase className="w-8 h-8" />, desc: 'Most in-demand jobs and platforms', link: '/work/uk/jobs' },
    { title: 'Skilled Worker Visa', icon: <FilePlus className="w-8 h-8" />, desc: 'Requirements and points system', link: '/work/uk/visa' },
    { title: 'Health & Care Visa', icon: <HeartPulse className="w-8 h-8" />, desc: 'Fast-track visa for healthcare', link: '/work/uk/health-care-visa' },
    { title: 'Application Process', icon: <ListTodo className="w-8 h-8" />, desc: 'Step-by-step guide from Pakistan', link: '/work/uk/application-process' },
    { title: 'Salary & Benefits', icon: <Banknote className="w-8 h-8" />, desc: 'Wages, taxes, and social benefits', link: '/work/uk/salary' },
    { title: 'Relocation Guide', icon: <MapPin className="w-8 h-8" />, desc: 'Checklists and community info', link: '/work/uk/relocation' },
    { title: 'Language Requirements', icon: <Languages className="w-8 h-8" />, desc: 'English tests and exemptions', link: '/work/uk/language' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work-abroad" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work Destinations
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> UK Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Work in the UK 🇬🇧
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The United Kingdom offers tremendous opportunities for Pakistani professionals under the points-based immigration system. Whether you are in IT, engineering, or healthcare, the UK provides rewarding careers, a vibrant South Asian diaspora, and excellent working conditions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={section.link} className="block group">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-start hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {section.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
