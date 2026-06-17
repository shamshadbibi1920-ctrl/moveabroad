import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, ExternalLink, CheckCircle2, Navigation, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaJobs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const jobs = [
    { title: 'Software Engineers / IT', salary: 'CAD $70,000 - $110,000/year', desc: 'High demand across all tech hubs (Toronto, Vancouver, Waterloo).' },
    { title: 'Truck Drivers', salary: 'CAD $50,000 - $75,000/year', desc: 'Extremely high demand across provinces with many LMIA opportunities.' },
    { title: 'Healthcare Workers (Nurses, PSWs)', salary: 'CAD $50,000 - $80,000/year', desc: 'Critical shortages in almost all provinces.' },
    { title: 'Engineers (Mechanical, Civil, Electrical)', salary: 'CAD $65,000 - $95,000/year', desc: 'Consistent demand in infrastructure and energy sectors.' },
    { title: 'Accountants and Finance', salary: 'CAD $55,000 - $85,000/year', desc: 'Strong need for certified professionals.' },
    { title: 'Skilled Trades (Welders, Electricians)', salary: 'CAD $50,000 - $80,000/year', desc: 'Excellent prospects in construction and manufacturing.' },
    { title: 'Food Service and Hospitality', salary: 'CAD $35,000 - $50,000/year', desc: 'Entry-level opportunities, often with LMIA.' },
    { title: 'Construction Workers', salary: 'CAD $45,000 - $70,000/year', desc: 'Huge demand everywhere due to housing needs.' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="In-Demand Jobs in Canada for Pakistanis | 2026 Salary Guide"
        description="Discover the top jobs in Canada for Pakistani professionals including IT, Truck Driving, Healthcare, and Engineering with salary expectations."
        canonicalPath="/work/canada/jobs"
      />
      
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Canada
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Job Opportunities in Canada 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore comprehensive guides and resources for moving abroad.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Job market conditions and salaries change. Always research current trends before applying.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <Briefcase className="w-6 h-6 mr-3 text-rose-600" />
                Most In-Demand Jobs
              </h2>
              <div className="space-y-6">
                {jobs.map((job, idx) => (
                  <div key={idx} className="border-b border-slate-100 dark:border-slate-700 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{job.title}</h3>
                    <p className="text-rose-600 dark:text-rose-400 font-medium my-1">{job.salary}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{job.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <Navigation className="w-6 h-6 mr-3 text-rose-600" />
                Tips for Pakistani Job Seekers
              </h2>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Canadian Style Resume</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> Keep it strictly to 2 pages maximum.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> <strong>NO personal details:</strong> Do not include a photo, age, marital status, gender, or religion. It is illegal for Canadian employers to ask for these.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> Focus on achievements, not just responsibilities (use quantifiable metrics).</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> Tailor the resume for every specific job application using keywords from the job description.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cover Letter Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> Cover letters are still highly valued in Canada. Keep them to one page.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> Explain *why* you want to work for that specific company.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> Highlight soft skills (communication, teamwork) alongside hard skills.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Job Portals</h2>
              <div className="space-y-3">
                <a href="https://www.jobbank.gc.ca/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Job Bank (Government)</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://ca.indeed.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Indeed Canada</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.linkedin.com/jobs/jobs-in-canada/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">LinkedIn Canada</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.workopolis.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Workopolis</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.glassdoor.ca/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Glassdoor Canada</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
