import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyPakistanQuota() {
  return (
    <>
      <SEO title="Work in Italy: Pakistan-Specific Quota | MoveAbroad.pk" description="Learn about the special bilateral agreement reserving 3,500 work visa slots in Italy exclusively for Pakistani nationals in 2026." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        {/* Hero Banner */}
        <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80" 
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
                🇮🇹 Italy Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pakistan-Specific Quota 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Details on the bilateral labor agreement reserving 10,500 slots over 2026-2028.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Understanding the Bilateral Agreement</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg">
                Italy and Pakistan signed a bilateral labor agreement reserving <strong>10,500 work visa slots exclusively for Pakistani nationals over 2026-2028</strong>, with <strong>3,500 slots specifically allocated for 2026</strong>.
              </p>
              <p>
                This is separate from and in addition to Pakistan's share of the general Decreto Flussi global quota. It was finalized through diplomatic efforts by Pakistan's Ministry of Overseas Pakistanis and Human Resource Development, aimed at providing a legal, secure migration pathway while curbing irregular migration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <FileCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Valid CNIC and Passport</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Confirmed job offer from registered Italian employer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Clean criminal record (Pakistan + any other residence)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">International polio vaccination certificate (mandatory)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Relevant trade experience or diplomas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Covered Sectors
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Technical Trades</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Hospitality</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Construction</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Logistics</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Healthcare / Caregiving</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-blue-800 dark:text-blue-300 font-bold mb-2 text-lg">Important Note</h3>
            <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
              This quota does not mean automatic approval — you still need a genuine employer-sponsored job offer and must go through the same Nulla Osta and visa process. The benefit is a higher number of dedicated slots specifically for Pakistani applicants, improving your chances compared to the general global quota.
            </p>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Where to find updates:</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Follow the Pakistan Ministry of Overseas Pakistanis and Human Resource Development official announcements and the Italian Embassy Islamabad for Click Day schedules.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
