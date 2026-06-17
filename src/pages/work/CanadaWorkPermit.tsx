import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FilePlus, ExternalLink, CheckCircle2, ShieldAlert, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaWorkPermit() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Canada Work Permit Guide for Pakistanis 2026 | Types & Requirements"
        description="Comprehensive guide on Canadian Work Permits for Pakistanis. Learn about Employer-Specific closed permits, Open Work Permits, IMP, TFWP, and documentation."
        canonicalPath="/work/canada/work-permit"
      />
      
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561134643-668f2b97d4f9?w=1400&q=80" 
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
              Canada Work Permit Guide 🇨🇦
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
            <strong>Disclaimer:</strong> Policies change frequently. Always verify the latest information with official IRCC sources before applying.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <FilePlus className="w-6 h-6 mr-3 text-rose-600" />
                Types of Canadian Work Permits
              </h2>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Employer-Specific Work Permit (Closed Permit)</h3>
                  <p>This allows you to work according to the conditions on your work permit, which include:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>The name of the specific employer you can work for.</li>
                    <li>How long you can work.</li>
                    <li>The location where you can work.</li>
                  </ul>
                  <p className="mt-2"><strong>Target Audience:</strong> Most Pakistani applicants who secure a job offer requiring an LMIA.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Open Work Permit</h3>
                  <p>Allows you to work for any employer in Canada, except for those blacklisted. An LMIA or proof of job offer is <strong>not</strong> needed.</p>
                  <p className="mt-2"><strong>Target Audience:</strong> Spouses of skilled workers or international students, participants in special public policies.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Post-Graduation Work Permit (PGWP)</h3>
                  <p>An open work permit available to international students who have graduated from a designated learning institution (DLI) in Canada.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Key Programs:</h3>
                  <ul className="space-y-3">
                    <li><strong>Temporary Foreign Worker Program (TFWP):</strong> For employers who need to hire foreign workers to fill temporary labour and skill shortages. <em>Requires an LMIA.</em></li>
                    <li><strong>International Mobility Program (IMP):</strong> Allows employers to hire temporary workers without an LMIA, advancing Canada's broad economic and cultural national interest.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <CheckCircle2 className="w-6 h-6 mr-3 text-emerald-600" />
                Required Documents Checklist
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-slate-600 dark:text-slate-400">
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Valid Pakistani passport</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Official Job Offer Letter</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> LMIA (if required for TFWP)</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Educational credentials (HEC attested)</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Experience certificates/letters</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Police Clearance Certificate</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Upfront Medical Exam (if required)</div>
                <div className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Proof of sufficient funds</div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Key Facts</h2>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li>
                  <strong className="text-slate-900 dark:text-white block">Processing Time</strong>
                  Typically 8 to 20 weeks from Pakistan (varies).
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white block">Base Application Fee</strong>
                  CAD $155
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white block">Biometrics Fee</strong>
                  CAD $85
                </li>
              </ul>
            </section>

            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Official Links</h2>
              <div className="space-y-3">
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">IRCC Work Permits</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://visa.vfsglobal.com/pak/en/can/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">VFS Global Pakistan</span>
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
