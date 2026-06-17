import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, Target, ListTodo, Euro, MapPin, Languages, Link as LinkIcon, ArrowLeft , Globe} from 'lucide-react';

export default function GermanyWorkIndex() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    { title: 'Job Opportunities', icon: <Briefcase className="w-8 h-8" />, desc: 'Most in-demand jobs and platforms', link: '/work/germany/jobs' },
    { title: 'Work Visa Guide', icon: <FilePlus className="w-8 h-8" />, desc: 'Types of visas and requirements', link: '/work/germany/visa' },
    { title: 'Opportunity Card', icon: <Target className="w-8 h-8" />, desc: 'Points-based system explained', link: '/work/germany/opportunity-card' },
    { title: 'Application Process', icon: <ListTodo className="w-8 h-8" />, desc: 'Step-by-step guide from Pakistan', link: '/work/germany/application-process' },
    { title: 'Salary & Benefits', icon: <Euro className="w-8 h-8" />, desc: 'Wages, taxes, and social benefits', link: '/work/germany/salary' },
    { title: 'Relocation Guide', icon: <MapPin className="w-8 h-8" />, desc: 'Checklists and community info', link: '/work/germany/relocation' },
    { title: 'Language Requirements', icon: <Languages className="w-8 h-8" />, desc: 'German exams and learning centers', link: '/work/germany/language' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work-abroad" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work Destinations
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Germany Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Work in Germany 🇩🇪
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Germany offers one of the strongest economies in the world. With the new skilled immigration act and Opportunity Card, it has never been easier for ambitious Pakistani professionals in IT, engineering, and healthcare to relocate and build a career in Europe's economic powerhouse.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
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
                <p className="text-slate-600 dark:text-slate-400">
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
