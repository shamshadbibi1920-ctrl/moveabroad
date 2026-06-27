import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, ExternalLink, AlertTriangle, CheckCircle2, Globe } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkJobs() {
  const jobs = [
    { title: 'IT / Software Engineers', salary: '£35,000 - £65,000/year', demand: 'Very High' },
    { title: 'Doctors and Nurses', salary: '£32,000 - £100,000+/year', demand: 'Critical Shortage' },
    { title: 'Engineers (Civil, Mechanical, Electrical)', salary: '£32,000 - £55,000/year', demand: 'High' },
    { title: 'Care Workers & Senior Care Workers', salary: '£23,000 - £28,000/year', demand: 'Critical Shortage' },
    { title: 'Accountants and Finance', salary: '£30,000 - £55,000/year', demand: 'Medium to High' },
    { title: 'Teachers', salary: '£28,000 - £45,000/year', demand: 'High' }
  ];

  const portals = [
    { name: 'Indeed UK', url: 'https://uk.indeed.com' },
    { name: 'Reed.co.uk', url: 'https://www.reed.co.uk' },
    { name: 'LinkedIn UK', url: 'https://www.linkedin.com/jobs/jobs-in-united-kingdom/' },
    { name: 'NHS Jobs', url: 'https://www.jobs.nhs.uk' },
    { name: 'Totaljobs', url: 'https://www.totaljobs.com' },
    { name: 'CV-Library', url: 'https://www.cv-library.co.uk' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Job Opportunities in the UK for Pakistanis | MoveAbroad.pk"
        description="Explore the most in-demand professions for Pakistani skilled workers, top job portals, and tips for finding employment in the UK job market."
        canonicalPath="/work/uk/jobs"
      />
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
          <Link to="/work/uk" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in the UK
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> UK Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Job Opportunities in the UK 🇬🇧
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore the most in-demand professions for Pakistani skilled workers, top job portals, and tips for finding employment in the UK job market.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  Requirements and job market trends change frequently. Always verify with official UKVI sources before applying.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Most In-Demand Jobs for Pakistanis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Shortage Occupation List (Now Immigration Salary List)</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                The UK government maintains a list of jobs where there is a shortage of domestic workers. If your profession is on this list (such as care workers, specific engineers, or programmers), you benefit from:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Reduced application fees for the Skilled Worker visa.</li>
                <li>A lower minimum salary threshold to qualify for the visa (currently 80% of the going rate).</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm italic">
                Note: In early 2024, the UK replaced the "Shortage Occupation List" with the "Immigration Salary List" (ISL), which is shorter and more targeted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How to Write a UK-Style CV</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                UK employers prefer a specific format for CVs. Unlike in some parts of the world, UK CVs should be concise and strictly professional:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>No photos or personal details:</strong> Do not include your photo, date of birth, marital status, or religion. This is to prevent discrimination.</span>
                </li>
                <li className="flex items-start text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Keep it to 2 pages maximum:</strong> Unless you are an academic or senior executive, stick to two pages.</span>
                </li>
                <li className="flex items-start text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Tailor your Cover Letter:</strong> A generic cover letter won't work. Address the specific requirements of the job description.</span>
                </li>
              </ul>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Top Job Portals in the UK</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portals.map((portal, idx) => (
                  <a key={idx} href={portal.url} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-colors">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{portal.name}</span>
                    <ExternalLink className="w-4 h-4 ml-auto text-slate-400" />
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
