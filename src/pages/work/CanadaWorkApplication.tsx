import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ListTodo, ExternalLink, CalendarClock, Briefcase, FileCheck2, Info } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaWorkApplication() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const steps = [
    { title: 'Prepare Your Documents', desc: 'Get your degrees attested by HEC and prepare detailed experience letters. Convert your resume to Canadian format.' },
    { title: 'Search for Jobs', desc: 'Apply to employers willing to process an LMIA, or positions that are LMIA exempt.' },
    { title: 'Receive Job Offer', desc: 'Sign an official employment contract with the Canadian employer.' },
    { title: 'Employer Applies for LMIA', desc: 'If required, the employer submits to ESDC. This takes several weeks to months.' },
    { title: 'Apply for Work Permit', desc: 'Submit the application online via IRCC, attaching the job offer and positive LMIA.' },
    { title: 'Biometrics & Medical', desc: 'Provide biometrics at VFS Global Pakistan and complete an upfront medical exam if entering healthcare or childcare.' },
    { title: 'Receive Approval', desc: 'Send your passport for stamping once approved.' },
    { title: 'Travel to Canada', desc: 'Present your documents at the border to receive the actual physical Work Permit from the CBSA officer.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Canada Work Permit Application Process | Guide for Pakistanis"
        description="Step by step guide to applying for a Canadian Work Permit from Pakistan. Understand timelines, HEC attestation, and document checklists."
        canonicalPath="/work/canada/application-process"
      />
      
      {/* Hero Section */}
      <div className="bg-rose-900 py-16 border-b border-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/canada" className="inline-flex items-center text-rose-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Canada
          </Link>
          <motion.h1 initial="initial" animate="animate" variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Application Process
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-rose-100 max-w-3xl font-light">
            A practical step-by-step roadmap to navigate moving from Pakistan to working in Canada on a temporary permit.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Policies change frequently. Always verify the latest information with official IRCC sources before applying.
          </p>
        </div>

        {/* Note on PR */}
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8 flex items-start">
           <Info className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-1" />
           <div>
             <h3 className="font-bold text-slate-900 dark:text-white mb-2">Looking for Permanent Residency?</h3>
             <p className="text-slate-600 dark:text-slate-400">This guide covers temporary work permits. If you are aiming for immediate Permanent Residency (PR) via Express Entry or PNP, please visit our <Link to="/migrate/canada" className="text-blue-600 hover:underline">Migrate to Canada section</Link>.</p>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center font-display">
                <ListTodo className="w-6 h-6 mr-3 text-rose-600" />
                Step-by-Step Guide
              </h2>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display flex items-center">
                <CalendarClock className="w-5 h-5 mr-2 text-slate-500" /> Timeline Overview
              </h2>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li>
                  <strong className="text-slate-900 dark:text-white block">Job Search</strong>
                  1 to 6+ months (highly variable)
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white block">LMIA Processing</strong>
                  1 to 3 months (depends on ESDC backlog)
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white block">Work Permit Processing</strong>
                  2 to 5 months (check IRCC times for Pakistan)
                </li>
                <li className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <strong className="text-rose-700 dark:text-rose-400 block">Total Estimated Time</strong>
                  4 to 12 months minimum.
                </li>
              </ul>
            </section>

            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Useful Links</h2>
              <div className="space-y-3">
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/apply.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">IRCC Apply Online</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://hec.gov.pk/english/services/students/Degree-Attestation-System/Pages/default.aspx" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">HEC Attestation</span>
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
