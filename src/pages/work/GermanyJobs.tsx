import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function GermanyJobs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const jobs = [
    { title: 'Software Engineers', salary: '€50,000 - €80,000/year', demand: 'Very High' },
    { title: 'Doctors and Nurses', salary: '€45,000 - €90,000/year', demand: 'Critical Shortage' },
    { title: 'Engineers (Mechanical, Electrical, Civil)', salary: '€45,000 - €70,000/year', demand: 'High' },
    { title: 'IT Professionals', salary: '€45,000 - €75,000/year', demand: 'Very High' },
    { title: 'Accountants and Finance', salary: '€40,000 - €65,000/year', demand: 'Medium to High' },
    { title: 'Skilled Tradespeople', salary: '€35,000 - €55,000/year', demand: 'Critical Shortage' }
  ];

  const portals = [
    { name: 'Indeed.de', url: 'https://indeed.de' },
    { name: 'LinkedIn Germany', url: 'https://www.linkedin.com/jobs/jobs-in-germany/' },
    { name: 'Make it in Germany portal', url: 'https://www.make-it-in-germany.com/en/' },
    { name: 'Bundesagentur für Arbeit', url: 'https://www.arbeitsagentur.de/' },
    { name: 'Xing.com', url: 'https://www.xing.com/' },
    { name: 'Stepstone.de', url: 'https://www.stepstone.de/' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Germany" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center md:text-left">
          <Link to="/work/germany" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Job Opportunities in Germany
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed md:text-2xl font-light">
              Explore the most in-demand professions for Pakistani skilled workers, top job portals, and tips for finding employment in the German job market.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  Requirements and job market trends change frequently. Always verify with official sources before applying.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Most In-Demand Jobs for Pakistanis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{job.title}</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                      <span className="text-slate-600 dark:text-slate-400"><strong>Salary:</strong> {job.salary}</span>
                      <span className="text-slate-600 dark:text-slate-400"><strong>Demand:</strong> <span className="text-green-600 dark:text-green-400 font-medium">{job.demand}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tips for Pakistani Job Seekers</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Start Learning German:</strong> Most jobs outside of specialized IT roles require at least B1/B2 level German.</li>
                <li><strong>Get Your Qualifications Recognized:</strong> Ensure your Pakistani degrees/diplomas are recognized via Anabin or ZAB.</li>
                <li><strong>Network:</strong> Utilize LinkedIn heavily to connect with recruiters and fellow Pakistanis already working in Germany.</li>
                <li><strong>Be Patient:</strong> The German hiring process can be slow. It often takes weeks or months to get a response.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How to Write a German-Style CV (Lebenslauf)</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                German CVs are structured, factual, and strictly professional. Include the following:
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Photo:</strong> It is standard practice to include a professional, high-quality headshot.</li>
                <li><strong>Personal Details:</strong> Include date of birth, place of birth, and nationality.</li>
                <li><strong>Reverse Chronological Order:</strong> Start with your most recent experience.</li>
                <li><strong>Format:</strong> Keep it structured, easy to read, max 2 pages. Use clear bullet points.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cover Letter Tips (Anschreiben)</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Direct and Concise:</strong> Maximum one page. Keep introductions very short.</li>
                <li><strong>Focus on Facts:</strong> Highlight exact skills and achievements that apply directly to the job description. Do not use overly emotional language.</li>
                <li><strong>Address the Hiring Manager:</strong> Try to find out the name of the HR person or hiring manager and address them directly (Sehr geehrte/r Frau/Herr [Name]).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Job Portal Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portals.map((portal, idx) => (
                  <a key={idx} href={portal.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">{portal.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
