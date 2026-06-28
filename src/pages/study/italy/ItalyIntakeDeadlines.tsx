import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, AlertTriangle, Clock, CheckCircle2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function ItalyIntakeDeadlines() {
  return (
    <>
      <SEO title="Study in Italy: Intake Deadlines | MoveAbroad.pk" description="Comprehensive guide to italy intake deadlines for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1400&q=80" 
            alt="Italy Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.35]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/italy" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Italy
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              🇮🇹 Study in Italy
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intakes & Deadlines 🇮🇹
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Italy primarily has one major intake. Missing these deadlines means waiting an entire year.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm mb-12">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" /> The "September Intake" Reality
          </h4>
          <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
            Almost all Italian universities have only ONE main intake per year: <strong>September / October</strong>. While a very small handful of programs offer a Spring (February) intake, it is extremely rare for English-taught degrees. Plan your entire application cycle around starting in September.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">The Ultimate Timeline for Pakistani Students</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Example timeline for a student targeting the <strong>September 2027</strong> intake.
          </p>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all">
                <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <Clock className="w-4 h-4 mr-1" /> November 2026 - February 2027
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">University Applications Open</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  First calls for application open for major universities (PoliMi, Padua, Sapienza). This is the best time to apply to secure admission early.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all">
                <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <Clock className="w-4 h-4 mr-1" /> February - April 2027
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Start Legalizations</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Once admitted, immediately start HEC and MOFA attestation of your degrees. Book appointments for DOV at the Italian Embassy OR apply for CIMEA online. Also, begin gathering family financial documents for the ISEE (scholarship).
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-amber-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all border-amber-200 dark:border-amber-800">
                <div className="flex items-center text-sm font-bold text-amber-600 dark:text-amber-400 mb-2">
                  <Clock className="w-4 h-4 mr-1" /> March - July 2027
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Universitaly Portal Opens</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  The Ministry of Education opens the Universitaly portal for pre-enrollment. Submit your application ASAP so the university can validate it.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-purple-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all">
                <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <Clock className="w-4 h-4 mr-1" /> July - August 2027
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">DSU Scholarship Deadlines & Visa Apps</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  <strong>CRITICAL:</strong> Regional scholarship (DSU) applications usually close in August. DO NOT MISS THIS. Meanwhile, submit your visa application at VFS Global.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all">
                <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <Clock className="w-4 h-4 mr-1" /> September 2027
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Arrival in Italy</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Fly to Italy. Apply for your Permesso di Soggiorno within 8 days. Classes begin!
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
    </>
  );
}
