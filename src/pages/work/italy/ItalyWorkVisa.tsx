import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FilePlus, Calendar, CheckCircle2, Globe, AlertTriangle } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyWorkVisa() {
  return (
    <>
      <SEO title="Work in Italy: Decreto Flussi Visa | MoveAbroad.pk" description="Learn about Italy's Decreto Flussi visa process, Click Days, quotas, and how Italian employers sponsor non-EU workers." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        {/* Hero Banner */}
        <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=1400&q=80" 
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
                Decreto Flussi Visa Process 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Understand the annual quota system, Click Days, and the employer-driven application process.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What is Decreto Flussi?</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Decreto Flussi is Italy's annual government decree setting quotas for non-EU workers. It covers 2026-2028 with nearly 500,000 total work entries planned, including <strong>164,850 slots specifically for 2026</strong> (88,000 seasonal in agriculture/tourism, 76,850 non-seasonal including skilled trades and self-employment).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Seasonal Work</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lavoro stagionale (e.g., agriculture, tourism).</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Non-Seasonal</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lavoro subordinato non stagionale (e.g., construction, manufacturing).</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Self-Employed</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lavoro autonomo for entrepreneurs and freelancers.</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-blue-800 dark:text-blue-300 font-bold mb-2 text-lg">Process is EMPLOYER-DRIVEN</h3>
              <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                You cannot apply for this visa independently. An Italian employer must first secure your Nulla Osta (work authorization) on your behalf during designated "Click Days" when the online portal opens.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Step-by-Step Process</h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Secure Job Offer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Get a job offer from a registered Italian employer participating in Decreto Flussi.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Employer Submits Application</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Via Ministry of Interior portal during Click Days (pre-filing in Oct, main days early Feb 2026).</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Receive Nulla Osta</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Work authorization is issued to the employer, typically valid for 6 months. Processing takes 4-8 weeks.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Apply for Visa</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Apply for Type D work visa at Italian Embassy/Consulate in Pakistan using the Nulla Osta.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  5
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Travel & Register</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Travel to Italy, and within 8 days apply for Permesso di Soggiorno (residence permit).</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8 flex items-start">
             <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
             <div>
                <h3 className="text-amber-800 dark:text-amber-400 font-bold mb-2">IMPORTANT 2026 RULE</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  If a Nulla Osta is issued but you fail to obtain your visa within 6 months, the authorization is automatically canceled — this rule was introduced to free up unused quota slots.
                </p>
             </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Official Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="https://portaleservizi.dlci.interno.it/AliSportello/ali/home.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Ministry of Interior Services Portal (Sportello Unico)
              </a>
              <a href="https://visa.vfsglobal.com/pak/en/ita/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                VFS Global Italy - Pakistan
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
