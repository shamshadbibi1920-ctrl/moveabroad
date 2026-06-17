import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Briefcase, FileCheck2, Clock, ArrowLeft, Globe } from 'lucide-react';

export default function AustraliaEmployerSponsored() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate/australia" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Australia Migration
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Australia Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Employer Sponsored Visa (Subclass 186) 🇦🇺
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The Employer Nomination Scheme (Subclass 186) visa allows skilled workers to live and work in Australia permanently based on an employer nomination.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Beware of Employer Scams
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               It is illegal for an applicant to pay an employer for sponsorship. Any arrangement where you "buy" a job offer for visa sponsorship will lead to severe penalties and a ban from entering Australia.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Employer Nomination Scheme (ENS)</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The ENS visa (Subclass 186) lets skilled workers, who are nominated by their employer, live and work in Australia permanently. It is one of the most reliable and direct pathways to PR if you have strong employer support.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-8">The Two Main Streams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                   <Clock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="font-bold text-xl text-blue-800 dark:text-blue-400 mb-3">Temporary Residence Transition (TRT)</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  For workers who already hold a temporary work visa (like Subclass 482 TSS) and have worked for their employer full-time for at least 2 years in Australia.
                </p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
                  <li>Usually does not require a formal skills assessment.</li>
                  <li>Needs Competent English.</li>
                  <li>Employer nominates you for PR.</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <div className="bg-emerald-100 dark:bg-emerald-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                   <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-300" />
                </div>
                <h3 className="font-bold text-xl text-emerald-800 dark:text-emerald-400 mb-3">Direct Entry (DE)</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  For applicants who do not have enough prior Australian work experience, or are applying from outside Australia.
                </p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
                  <li><strong>MUST</strong> have a formal Skills Assessment.</li>
                  <li><strong>MUST</strong> have at least 3 years of relevant post-qualification work experience.</li>
                  <li>Needs Competent English.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Key Eligibility Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                 <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> English Language
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">At least "Competent English". This means an IELTS score of 6.0 in all four bands, or PTE Academic score of 50 in each section.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                 <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Age Limit
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">You must be under 45 years of age when you apply. There are very limited exemptions (such as religious workers or highly paid academic/scientific researchers).</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                 <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Valid Occupation
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">For Direct Entry, your occupation must be on the Medium and Long-term Strategic Skills List (MLTSSL).</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                 <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Employer Nomination
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">Your Australian employer must formally lodge a nomination application before you can lodge your visa application.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <FileCheck2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-6 relative z-10">What The Employer Must Do</h2>
           <p className="text-slate-300 text-base mb-6 relative z-10 max-w-3xl">
             Your employer takes on significant responsibilities to sponsor you for the 186 visa. They must demonstrate a genuine need for your role within their business.
           </p>
           
           <ul className="space-y-4 text-sm max-w-3xl relative z-10 text-slate-300">
             <li className="flex items-start">
               <span className="bg-emerald-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">&bull;</span>
               Operate a lawful and active business in Australia.
             </li>
             <li className="flex items-start">
               <span className="bg-emerald-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">&bull;</span>
               Pay the Skilling Australians Fund (SAF) Levy (up to $5,000 AUD depending on turnover).
             </li>
             <li className="flex items-start">
               <span className="bg-emerald-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">&bull;</span>
               Prove they cannot fill the position locally (Labour Market Testing is not strictly required for 186, but they must prove genuine need).
             </li>
             <li className="flex items-start">
               <span className="bg-emerald-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">&bull;</span>
               Offer you a full-time, ongoing position for at least 2 years.
             </li>
             <li className="flex items-start">
               <span className="bg-emerald-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">&bull;</span>
               Pay you the Annual Market Salary Rate (AMSR) - meaning you cannot be paid less than an Australian citizen doing the same job.
             </li>
           </ul>
        </section>

        <section>
          <div className="space-y-3">
             <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Official Home Affairs 186 Page</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
