import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Languages, CheckCircle2, Info } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyLanguage() {
  return (
    <>
      <SEO title="Work in Italy: Language Requirements | MoveAbroad.pk" description="Understand language requirements for working in Italy, why basic Italian is crucial, and where to learn." />
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
                🇮🇹 Italy Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Language Requirements 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Do you need IELTS? Should you learn Italian?
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Languages className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Do I need IELTS?
            </h2>
            <div className="flex items-start bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-emerald-900 dark:text-emerald-400 font-bold text-lg mb-2">IELTS is NOT mandatory for most Decreto Flussi visas</h3>
                <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed text-sm">
                  Unlike study visas or skilled migration to English-speaking countries, general work visas under the Decreto Flussi quota system do not legally require an English test like IELTS.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Reality of Italian Language</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              While you may not need an English test, <strong>basic Italian language skills are strongly recommended</strong> for better job success, workplace safety, and integration. Outside of major international corporations in Milan or Rome, the primary working language across all sectors is Italian.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Why learn Italian?</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-2">
                <li>Essential for communicating with employers, landlords, and local authorities.</li>
                <li>Required for long-term permanent residency (EC long-term residence permit requires an A2 Italian language certificate).</li>
                <li>Increases your employability and bargaining power.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Where to learn Italian in Pakistan</h2>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Italian Cultural Institute</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Official language courses</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Dante Alighieri Society</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Recognized language and culture centers</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
             <div className="flex">
                <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-800 dark:text-blue-300 font-bold mb-2">EU Blue Card Exception</h3>
                  <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
                    If you are applying as a highly skilled professional via the EU Blue Card route, requirements may differ. The employer might require English proficiency depending on the corporate environment.
                  </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
}
