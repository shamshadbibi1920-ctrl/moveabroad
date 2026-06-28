import React from 'react';
import { Briefcase, MapPin, Building2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function WorkAbroad() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const jobs = [
    { title: 'Software Engineer', company: 'TechNova', location: 'Berlin, Germany', visa: 'Blue Card', type: 'Full-time' },
    { title: 'Electrical Engineer', company: 'BuildCorp', location: 'Dubai, UAE', visa: 'Employment Visa', type: 'Full-time' },
    { title: 'Data Scientist', company: 'DataSystems', location: 'Toronto, Canada', visa: 'Express Entry', type: 'Full-time' },
    { title: 'Registered Nurse', company: 'HealthPlus', location: 'London, UK', visa: 'Health & Care Visa', type: 'Full-time' },
    { title: 'Financial Analyst', company: 'Global Finance', location: 'Riyadh, Saudi Arabia', visa: 'Work Visa', type: 'Full-time' },
  ];

  return (
    <>
      <SEO title="Work Abroad | MoveAbroad.pk" description="Comprehensive guide to work abroad for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">Work Abroad Opportunities</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Explore job opportunities requiring skilled professionals from Pakistan.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 sticky top-28">
              <h2 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-4">Filter Jobs</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Industry</h3>
                  <div className="space-y-2">
                     {['IT & Software', 'Engineering', 'Healthcare', 'Finance', 'Construction'].map(opt => (
                       <label key={opt} className="flex items-center">
                         <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500" />
                         <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">{opt}</span>
                       </label>
                     ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Country</h3>
                  <div className="space-y-2">
                     {['Germany', 'Canada', 'UAE', 'Saudi Arabia', 'UK'].map(opt => (
                       <label key={opt} className="flex items-center">
                         <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500" />
                         <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">{opt}</span>
                       </label>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial="initial" animate="animate" variants={staggerContainer}
          >
            {jobs.map((job, idx) => (
              <motion.div 
                variants={fadeIn}
                key={idx} 
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl hover:border-indigo-100 dark:border-indigo-800 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-indigo-600 dark:text-indigo-400 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center font-medium"><Building2 className="h-4 w-4 mr-2 text-indigo-400" />{job.company}</span>
                      <span className="flex items-center font-medium"><MapPin className="h-4 w-4 mr-2 text-indigo-400" />{job.location}</span>
                      <span className="flex items-center font-medium"><Briefcase className="h-4 w-4 mr-2 text-indigo-400" />{job.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800">
                      {job.visa} Eligible
                    </span>
                    <button className="inline-flex items-center px-6 py-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg transition-colors">
                      Apply Now <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
