import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Languages, CheckCircle2, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AustraliaLanguage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="bg-blue-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/australia" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Australia
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-800 dark:bg-slate-800 rounded-xl">
              <Languages className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Language Requirements</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            English language tests and scores required for the Subclass 482 visa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Subclass 482 English Requirements</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Unless you hold a passport from an exempt country (e.g., UK, USA, Canada, NZ), Pakistani applicants must prove their English proficiency by taking an approved language test. The test must have been taken within <strong>3 years</strong> before the date you lodge your visa application.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Minimum Required Scores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">IELTS (General or Academic)</h4>
                <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">5.0 <span className="text-sm font-normal text-slate-500">overall</span></div>
                <p className="text-sm text-slate-600 dark:text-slate-400">With no single band score (reading, writing, speaking, listening) lower than <strong>4.5</strong>.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">PTE Academic</h4>
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-2">36 <span className="text-sm font-normal text-slate-500">overall</span></div>
                <p className="text-sm text-slate-600 dark:text-slate-400">With no communicative skill score lower than <strong>30</strong>.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">TOEFL iBT</h4>
                <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">35 <span className="text-sm font-normal text-slate-500">overall</span></div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Minimums: Listening 3, Reading 3, Writing 12, Speaking 12.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-100 dark:border-orange-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Cambridge (CAE)</h4>
                <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">154 <span className="text-sm font-normal text-slate-500">overall</span></div>
                <p className="text-sm text-slate-600 dark:text-slate-400">With no single component score lower than <strong>147</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
            <h3 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Exemptions to the English Test
            </h3>
            <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed mb-4">
              You do not need to provide an English test score if any of the following apply:
            </p>
            <ul className="space-y-3 text-sm text-amber-900 dark:text-amber-100">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 shrink-0" />
                <span>You hold a passport from the UK, USA, Canada, New Zealand, or Republic of Ireland.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 shrink-0" />
                <span>You have completed at least 5 years of full-time study in a secondary or higher education institution where all instruction was in English.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 shrink-0" />
                <span>You are nominated under the <strong>Specialist Skills Stream</strong> (check specific requirements, but high-income earners are often exempt).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 shrink-0" />
                <span>You are nominated by an overseas business to work in Australia and your salary will be at least AUD $96,400.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-indigo-500" /> Preparation in Pakistan
          </h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              The required scores (e.g., IELTS 5.0) are considered "vocational English" and are generally highly achievable for Pakistani professionals who have completed their university degrees in English.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              If you need a faster turnaround for results, <strong>PTE Academic</strong> is highly recommended as testing centers in Islamabad, Lahore, and Karachi often provide results within 48 hours, compared to the 13 days typical for paper-based IELTS.
            </p>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center">
            <ExternalLink className="w-4 h-4 mr-2" /> Official English Requirements (Home Affairs)
          </a>
        </div>
      </div>
    </div>
  );
}
