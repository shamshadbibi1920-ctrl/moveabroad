import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, FileCheck, FileText, Globe, DollarSign, Home, Calendar, ArrowLeft, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

export default function ItalyStudyIndex() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    { title: 'Universities', icon: <GraduationCap className="w-8 h-8" />, desc: 'Top public & private institutions', link: '/study/italy/universities' },
    { title: 'Scholarships', icon: <Award className="w-8 h-8" />, desc: 'DSU, MAECI & merit-based funding', link: '/study/italy/scholarships' },
    { title: 'Visa Process', icon: <FileCheck className="w-8 h-8" />, desc: 'Type D visa and Permesso di Soggiorno', link: '/study/italy/visa-process' },
    { title: 'Application Process', icon: <FileText className="w-8 h-8" />, desc: 'Universitaly, CIMEA & DOV steps', link: '/study/italy/application-process' },
    { title: 'No IELTS Options', icon: <Globe className="w-8 h-8" />, desc: 'MOI pathways & Italian language routes', link: '/study/italy/no-ielts' },
    { title: 'Cost of Living', icon: <DollarSign className="w-8 h-8" />, desc: 'Budgeting for students & part-time jobs', link: '/study/italy/cost-of-living' },
    { title: 'Accommodation', icon: <Home className="w-8 h-8" />, desc: 'Student residences and private rentals', link: '/study/italy/accommodation' },
    { title: 'Intake Deadlines', icon: <Calendar className="w-8 h-8" />, desc: 'Important dates for Pakistani students', link: '/study/italy/intake-deadlines' },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80" 
            alt="Study in Italy Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study Destinations
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Study Abroad Destination
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study in Italy 🇮🇹
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Italy offers world-class education, rich culture, and some of the lowest tuition fees in Western Europe. Discover pathways, regional scholarships, and everything Pakistani students need to know.
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
                <AlertTriangle className="w-5 h-5 mr-3 text-amber-500" /> Latest Updates for Pakistani Students
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
                      <strong>Pre-enrollment requirement:</strong> All non-EU students must pre-enroll via the official <strong>Universitaly portal</strong>. This is a mandatory step before applying for a visa at the Italian Embassy/Consulate in Pakistan.
                    </p>
                    <p>
                      <strong>CIMEA / DOV updates:</strong> Italian universities increasingly accept the CIMEA Statement of Comparability instead of the traditional Declaration of Value (DOV) from the Embassy. Always check your university\'s specific requirements.
                    </p>
                    <p>
                      <strong>DSU Scholarships:</strong> The ISEE Parificato process (calculating family income) is essential for accessing massive tuition reductions and regional stipends. Start gathering family financial documents early!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}
