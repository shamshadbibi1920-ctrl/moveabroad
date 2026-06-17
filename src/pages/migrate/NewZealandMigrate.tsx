import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Briefcase, FileCheck2, Globe2, AlertTriangle, Compass, LineChart, ArrowLeft, Globe } from 'lucide-react';

export default function NewZealandMigrate() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
            {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Migrate
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> New Zealand Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Migrate to New Zealand 🇳🇿
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive guide to Skilled Migrant Category, Accredited Employer Work Visa (AEWV) and Green Lists.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Disclaimer: Always verify with official government sources
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               New Zealand recently overhauled its Skilled Migrant Category and points system. Always double-check current requirements via the official Immigration New Zealand (INZ) website before planning.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> Accredited Employer Work Visa (AEWV)
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The AEWV is now the main temporary work visa in New Zealand. It relies on a 3-check system to ensure employers are properly accredited and jobs are viable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Key Steps
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li><strong>Employer Check:</strong> Must be accredited by INZ.</li>
                  <li><strong>Job Check:</strong> Must pay at least median wage and pass labour market testing (unless exempt/on Green List).</li>
                  <li><strong>Migrant Check:</strong> You must prove you have the required skills, experience, health and character standards.</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-3 flex items-center">
                  <LineChart className="w-5 h-5 mr-2" /> Green List
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li><strong>Tier 1:</strong> Highly in demand (Doctors, IT, Engineers, Construction). Fast track Straight to Residence.</li>
                  <li><strong>Tier 2:</strong> Work to Residence route (after 2 years of working in NZ). E.g., Teachers, Trades.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Skilled Migrant Category (SMC) Resident Visa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                 <Compass className="w-6 h-6 mr-3 text-rose-500" /> New 6-Point System
               </h3>
               <p className="text-slate-700 dark:text-slate-300 mb-6">
                 New Zealand simplified its points system. You now need exactly <strong>6 points</strong> to apply, PLUS a skilled job offer in New Zealand.
               </p>
               <h4 className="font-bold text-lg mb-3 dark:text-slate-200">How to claim 6 points:</h4>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">You can claim from your PRIMARY skill (choose one max):</p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Doctorate degree (6 pts)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Masters degree (5 pts)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Bachelors degree / Post-grad diploma (3 pts)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Occupational registration (varies 3-6 pts)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Very high income (varies 3-6 pts)</li>
               </ul>
               <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 mb-2">PLUS, you can add points for NZ Work Experience:</p>
               <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
                 <li>1 year in NZ = 1 pt</li>
                 <li>2 years in NZ = 2 pts</li>
                 <li>3 years in NZ = 3 pts</li>
               </ul>
               <p className="text-xs text-slate-500 mt-4 italic">Age limits (under 56) and strict IELTS requirements (typically 6.5) apply.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <FileCheck2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10">Pathway Overview for Pakistani Applicants</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 1</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">NZQA Assessment & English</h4>
                  <p className="text-slate-400">Get Pakistani degrees assessed by New Zealand Qualifications Authority (NZQA) and clear IELTS (6.5 academic/general usually needed).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 2</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Land an AEWV Job</h4>
                  <p className="text-slate-400">Apply jobs on Seek or Trademe. The employer must be an Accredited Employer in NZ to sponsor your visa.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 3</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Transition to Residency</h4>
                  <p className="text-slate-400">If your job is on Green List Tier 1, apply for Straight-to-Residence instantly. If Tier 2, wait 2 years. Or if you have 6 points, apply via SMC.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.immigration.govt.nz/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Immigration New Zealand (INZ)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/working-in-nz/qualifications-for-work/green-list-occupations" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">NZ Green List Checker</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.seek.co.nz/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">SEEK New Zealand Jobs</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.trademe.co.nz/a/jobs" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">TradeMe Jobs</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
