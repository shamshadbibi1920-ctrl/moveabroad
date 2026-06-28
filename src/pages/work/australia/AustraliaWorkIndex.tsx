import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, ListTodo, DollarSign, MapPin, Languages, ArrowLeft, Globe, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../../components/SEO';

export default function AustraliaWorkIndex() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    { title: 'Job Opportunities', icon: <Briefcase className="w-8 h-8" />, desc: 'Most in-demand jobs and platforms', link: '/work/australia/jobs' },
    { title: 'Skills in Demand Visa (482)', icon: <FilePlus className="w-8 h-8" />, desc: 'Visa streams and requirements', link: '/work/australia/visa' },
    { title: 'Application Process', icon: <ListTodo className="w-8 h-8" />, desc: 'Step-by-step sponsorship guide', link: '/work/australia/application-process' },
    { title: 'Salary & Benefits', icon: <DollarSign className="w-8 h-8" />, desc: 'Wages, superannuation, and taxes', link: '/work/australia/salary' },
    { title: 'Relocation Guide', icon: <MapPin className="w-8 h-8" />, desc: 'Checklists and Pakistani community', link: '/work/australia/relocation' },
    { title: 'Language Requirements', icon: <Languages className="w-8 h-8" />, desc: 'English tests and exemptions', link: '/work/australia/language' },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <>
      <SEO title="Work in Australia: Work Index | MoveAbroad.pk" description="Comprehensive guide to australia work index for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80" 
            alt="Australia Work Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work-abroad" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work Destinations
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Australia Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Work in Australia 🇦🇺
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Australia offers a fantastic quality of life and high salaries. For Pakistani professionals in IT, Engineering, Healthcare, and skilled trades, the employer-sponsored temporary visas offer a direct route to working down under.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-12">
           <button 
              onClick={() => toggleSection('updates')}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3 text-amber-500" /> Latest Updates
              </h2>
              {openSection === 'updates' ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>
            <AnimatePresence>
              {openSection === 'updates' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm space-y-4">
                    <p>
                      <strong>Temporary vs. Permanent Visas:</strong> This guide covers the <em>temporary</em> employer-sponsored Skills in Demand (subclass 482) visa. If you are seeking independent Points-Based Permanent Residency (Subclass 189, 190) or Employer Sponsored PR (186), please see our <Link to="/migrate/australia" className="text-blue-600 dark:text-blue-400 hover:underline">Migrate to Australia</Link> section.
                    </p>
                    <p>
                      <strong>Visa salary thresholds, occupation lists and sponsorship rules change frequently and increase annually on July 1. Always verify current requirements with official Department of Home Affairs sources before applying.</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={section.link}
                className="block h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                  {section.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {section.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  ;
}
