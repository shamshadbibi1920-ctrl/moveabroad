import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, MapPin, Search , ArrowLeft, Globe} from 'lucide-react';
import SEO from '../../components/SEO';

export default function AustraliaSkilledNominated() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Australia Subclass 190 Skilled Nominated Visa from Pakistan"
        description="A complete guide to the Australia Subclass 190 PR visa. Learn about state nomination, required points, process and eligibility."
        canonicalPath="/migrate/australia/skilled-nominated"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1400&q=80" 
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
              Skilled Nominated Visa (Subclass 190) 🇦🇺
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The Subclass 190 visa is a points-tested permanent visa for skilled workers nominated by an Australian state or territory government.
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
               State Allocations & Requirements
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               Each Australian State and Territory has its own nomination criteria, occupation lists, and quotas. These change frequently. Always verify current openings directly on the state's official migration website.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">What is the Subclass 190 Visa?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The Subclass 190 is a points-tested permanent residency visa. The key difference from the 189 visa is that you must be nominated by a state or territory government. Because you are nominated, you receive an extra <strong>5 points</strong> towards your total score.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Key Benefits
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li>It is a Permanent Residency (PR) visa.</li>
                  <li>Receive free Medicare (healthcare) immediately.</li>
                  <li>Can sponsor eligible family members.</li>
                  <li>Pathway to Australian citizenship.</li>
                  <li>Get an automatic 5 points for state nomination.</li>
                </ul>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800">
                <h3 className="text-xl font-bold text-rose-800 dark:text-rose-400 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> The Condition
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  When you accept a state nomination, you sign a moral obligation to live and work in that specific state or territory for your first <strong>2 years</strong> after the visa is granted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Eligibility Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">1. Valid Skills Assessment</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">Your occupation must be on the relevant state skills list (typically derived from STSOL or MLTSSL). You must have a positive skills assessment from the relevant Australian body.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">2. Minimum Points</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">You must score at least 65 points on the points test (inclusive of the 5 points from the state nomination).</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">3. English Language</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">Minimum requirements are 'Competent English' (IELTS 6.0 in each band or PTE 50 in each band). Most competitive states require 'Proficient' or 'Superior' English.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">4. Age Limit</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400">You must be under 45 years of age when invited to apply for the visa.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <h2 className="text-2xl font-bold mb-8">State Selection Process</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 1</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Submit Expression of Interest (EOI)</h4>
                  <p className="text-slate-400">Submit an EOI through SkillSelect. Select either a specific state you want to be considered for, or select 'Any' if you are open to all states.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 2</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">State Registration Submission (ROI)</h4>
                  <p className="text-slate-400">Many states (like Victoria and Western Australia) require you to submit a separate Registration of Interest (ROI) directly with them after your EOI.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 3</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Receive State Nomination</h4>
                  <p className="text-slate-400">If the state likes your profile, they will invite you to apply for state nomination. Provide supporting documents (proof of funds, commitment letters, etc).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 4</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Receive Invitation To Apply (ITA)</h4>
                  <p className="text-slate-400">Once the state approves your nomination, SkillSelect will automatically issue an ITA for the 190 visa. You then have 60 days to submit the final visa application to Home Affairs.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">State and Territory Migration Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://liveinmelbourne.vic.gov.au/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Victoria (VIC) - Melbourne</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://migration.wa.gov.au/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Western Australia (WA) - Perth</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.nsw.gov.au/visas-and-migration/skilled-visas" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">New South Wales (NSW) - Sydney</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://migration.qld.gov.au/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Queensland (QLD) - Brisbane</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.migration.sa.gov.au/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">South Australia (SA) - Adelaide</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://theterritory.com.au/migrate" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Northern Territory (NT) - Darwin</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.act.gov.au/migration" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Australian Capital Territory (ACT)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition">
               <span className="font-semibold text-emerald-800 dark:text-emerald-400">Official Home Affairs 190 Page</span>
               <ChevronRight className="text-emerald-600 dark:text-emerald-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
