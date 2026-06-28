import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Briefcase, ExternalLink, AlertTriangle } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyJobs() {
  return (
    <>
      <SEO title="Work in Italy: Jobs | MoveAbroad.pk" description="Explore the most in-demand sectors for Pakistanis in Italy, salary ranges, and where to find legitimate Italian employers." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        {/* Hero Banner */}
        <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1400&q=80" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.35]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
                <Globe className="w-4 h-4 mr-2" /> Italy Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Job Opportunities in Italy 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Find legitimate employment and understand the most in-demand sectors for Pakistani professionals.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Most In-Demand Sectors for Pakistanis
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Construction and Skilled Trades</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€22,000 - €32,000/year</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Logistics and Warehouse Work</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€20,000 - €28,000/year</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Agriculture and Seasonal Farm Work</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€18,000 - €25,000/year (often seasonal)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Hospitality and Tourism</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€18,000 - €26,000/year (often seasonal)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Manufacturing</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€22,000 - €30,000/year</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 border-l-4 border-l-emerald-500">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Healthcare / Caregiving (Family Assistance)</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€20,000 - €28,000/year</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2 font-medium">Note: 13,600 non-seasonal slots specifically reserved for family assistance and healthcare sector in 2026.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 border-l-4 border-l-blue-500">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">IT & Tech Professionals (EU Blue Card)</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€35,000 - €55,000/year</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 font-medium">Note: Separate from the Decreto Flussi quota system.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Where to find legitimate Italian employers</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Connect through licensed recruitment agencies, EURES (European job mobility portal), or direct employer outreach.</p>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-red-800 dark:text-red-300 font-bold mb-2">Warning: Beware of Scams</h3>
                  <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                    Beware of agents promising guaranteed jobs or "free visas" — the Italian government does NOT issue free work visas. You must have a genuine job offer from a real, quota-registered Italian employer before any visa process can begin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Job Portal Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="https://eures.ec.europa.eu/index_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                EURES Italy <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://www.infojobs.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                InfoJobs.it <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://it.indeed.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                Indeed Italy <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
