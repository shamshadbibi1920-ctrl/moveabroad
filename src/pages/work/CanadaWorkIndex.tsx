import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, Target, ListTodo, DollarSign, MapPin, Languages, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaWorkIndex() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    { title: 'Job Opportunities', icon: <Briefcase className="w-8 h-8" />, desc: 'Most in-demand jobs and platforms', link: '/work/canada/jobs' },
    { title: 'Work Permit Guide', icon: <FilePlus className="w-8 h-8" />, desc: 'Types of permits and requirements', link: '/work/canada/work-permit' },
    { title: 'LMIA Explained', icon: <Target className="w-8 h-8" />, desc: 'Understanding the LMIA process', link: '/work/canada/lmia' },
    { title: 'Application Process', icon: <ListTodo className="w-8 h-8" />, desc: 'Step-by-step guide from Pakistan', link: '/work/canada/application-process' },
    { title: 'Salary & Benefits', icon: <DollarSign className="w-8 h-8" />, desc: 'Wages, taxes, and social benefits', link: '/work/canada/salary' },
    { title: 'Relocation Guide', icon: <MapPin className="w-8 h-8" />, desc: 'Checklists and community info', link: '/work/canada/relocation' },
    { title: 'Language Requirements', icon: <Languages className="w-8 h-8" />, desc: 'English & French requirements', link: '/work/canada/language' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Work in Canada for Pakistanis | Jobs, LMIA, Work Permits 2026"
        description="Comprehensive guide for Pakistani professionals to work in Canada on temporary work permits. Discover in-demand jobs, LMIA requirements, and application process."
        canonicalPath="/work/canada"
      />
      {/* Hero Section */}
      <div className="relative bg-rose-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547900746-86c061beae07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Toronto Skyline Canada" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-10 text-center md:text-left">
          <Link to="/work-abroad" className="inline-flex items-center text-rose-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work Destinations
          </Link>
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-display">
              Work in Canada
            </h1>
            <p className="text-xl text-rose-100 max-w-3xl leading-relaxed md:text-2xl font-light">
              Canada is actively seeking skilled professionals from around the world. Whether you are an IT expert, a healthcare worker, or a skilled tradesperson, Canada offers excellent opportunities for Pakistani professionals to build a career on a temporary work permit.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Work permit requirements and immigration policies change frequently. Always verify the latest information with official IRCC sources before applying.
          </p>
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
                className="block h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-rose-500 dark:hover:border-rose-500 transition-all duration-300 group"
              >
                <div className="text-rose-600 dark:text-rose-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                  {section.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
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
