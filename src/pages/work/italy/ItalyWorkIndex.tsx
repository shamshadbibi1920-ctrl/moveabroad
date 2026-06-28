import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, Users, ListTodo, DollarSign, MapPin, Languages, ArrowLeft, Globe, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyWorkIndex() {
  const [openSection, setOpenSection] = useState<string | null>('updates');

  const sections = [
    { title: 'Job Opportunities', icon: <Briefcase className="w-8 h-8" />, desc: 'In-demand sectors and legitimate employers', link: '/work/italy/jobs' },
    { title: 'Decreto Flussi Visa Process', icon: <FilePlus className="w-8 h-8" />, desc: 'Quota system and Click Days explained', link: '/work/italy/visa' },
    { title: 'Pakistan-Specific Quota', icon: <Users className="w-8 h-8" />, desc: '3,500 dedicated slots for Pakistanis in 2026', link: '/work/italy/pakistan-quota' },
    { title: 'Application Process', icon: <ListTodo className="w-8 h-8" />, desc: 'Step-by-step from job offer to residence permit', link: '/work/italy/application-process' },
    { title: 'Salary & Benefits', icon: <DollarSign className="w-8 h-8" />, desc: 'Wages by sector and CCNL agreements', link: '/work/italy/salary' },
    { title: 'Relocation Guide', icon: <MapPin className="w-8 h-8" />, desc: 'First weeks in Italy and community hubs', link: '/work/italy/relocation' },
    { title: 'Language Requirements', icon: <Languages className="w-8 h-8" />, desc: 'Italian language skills and integration', link: '/work/italy/language' },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <>
      <SEO title="Work in Italy: Work Index | MoveAbroad.pk" description="Comprehensive guide to working in Italy for Pakistani professionals. Explore the Decreto Flussi visa, Pakistan-specific quota, and job opportunities." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80" 
            alt="Italy Work Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work-abroad" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work Destinations
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Italy Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Work in Italy 🇮🇹
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Italy offers incredible opportunities across technical trades, agriculture, and healthcare. Learn how to secure a job offer and navigate the Decreto Flussi quota system.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 pb-20">
        
        {/* HIGHLIGHT BOX */}
        <div className="bg-emerald-50 dark:bg-emerald-900/40 border-l-4 border-emerald-600 rounded-r-2xl p-6 mb-12 shadow-sm border border-emerald-200 dark:border-emerald-800">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <span className="text-2xl">🇵🇰</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-2">Special Pakistan Quota</h3>
              <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">
                Italy has reserved <strong>3,500 work visa slots exclusively for Pakistani nationals in 2026</strong> (part of 10,500 total slots over 2026-2028), under a dedicated bilateral agreement separate from the general Decreto Flussi quota — making Italy one of the most accessible legal work pathways to Europe for Pakistanis right now.
              </p>
            </div>
          </div>
        </div>

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
                      <strong>Decreto Flussi quotas, Click Day dates, and eligibility requirements change annually</strong> and are announced by the Italian Ministry of Interior.
                    </p>
                    <p className="text-red-600 dark:text-red-400 font-semibold">
                      Never pay an agent claiming to offer guaranteed jobs or "free visas" — always verify through official government sources and licensed employers only. The Italian government does NOT issue free work visas. You must have a genuine job offer from a real, quota-registered Italian employer.
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
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
