import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Heart, Users, AlertTriangle, Clock } from 'lucide-react';

export default function AustraliaFamilyStream() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate/australia" className="inline-flex items-center text-rose-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Australia Migration
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Family Stream Visas</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Partner, Parent, and Child visas to reunite with family in Australia.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Warning regarding Parent Visas
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               Non-contributory Parent visas can take up to <strong>15 - 30 years</strong> to process. Contributory Parent Visas cost upwards of <strong>$48,000 AUD per parent</strong> and still take 12 years. Always consult a registered migration agent before lodging a parent visa.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
             <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Heart className="w-8 h-8 mr-3 text-rose-500" /> Partner Visas
             </h2>
             <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
               If you are married to, or in a de facto relationship with, an Australian citizen, permanent resident, or eligible New Zealand citizen, they can sponsor you for a Partner visa.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800">
                 <h3 className="font-bold text-xl text-rose-800 dark:text-rose-400 mb-3">Onshore: Subclass 820 / 801</h3>
                 <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                   You apply while you are inside Australia (e.g., on a student or tourist visa). You get a bridging visa allowing you to stay, work, and get Medicare while waiting.
                 </p>
                 <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
                   <li>Stage 1: 820 (Temporary)</li>
                   <li>Stage 2: 801 (Permanent)</li>
                 </ul>
               </div>
               
               <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                 <h3 className="font-bold text-xl text-blue-800 dark:text-blue-400 mb-3">Offshore: Subclass 309 / 100</h3>
                 <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                   You apply while you are outside Australia (e.g., in Pakistan). You must remain outside Australia while the 309 visa is processed (unless you get a visitor visa).
                 </p>
                 <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
                   <li>Stage 1: 309 (Temporary)</li>
                   <li>Stage 2: 100 (Permanent)</li>
                 </ul>
               </div>
             </div>

             <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
               <h4 className="font-bold text-slate-900 dark:text-white mb-3">Proof of Relationship (Pakistan context)</h4>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">You need significant evidence across four categories: Financial, Social, Household, and Commitment.</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                 <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> NADRA Marriage Certificate (MRC) and translated Nikah Nama.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Photos of Valima / Mehndi ceremonies.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Bank transfers, shared finances, or remittance slips.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Call logs, WhatsApp chat histories, showing daily contact if applying offshore.</li>
               </ul>
             </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-emerald-500" /> Parent Visas
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                 Sponsoring parents from Pakistan to Australia is notoriously difficult and expensive. You must meet the "Balance of Family Test" (meaning at least half of your parents' children live in Australia).
              </p>
              <div className="space-y-4 mt-6">
                 <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 dark:text-white">Contributory Parent (Subclass 143/864)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Extremely high application cost (~$48,000 AUD per parent). Wait time is currently 12+ years. Grants Permanent Residency.</p>
                 </div>
                 <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 dark:text-white">Non-Contributory Parent (Subclass 103/804)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Lower application cost. Wait time is 15 to 30 years. Effectively impractical for most.</p>
                 </div>
                 <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400">Alternative: Sponsored Parent (Temp) (Subclass 870)</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-300 mt-1">Allows parents to visit for 3 to 5 years at a time. No balance of family test. Costs $5k-$10k. No work rights and NO pathway to PR.</p>
                 </div>
              </div>
           </div>
           
           <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-500" /> Processing Times (Average)
              </h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                   <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Partner Offshore (309)</span>
                   <span className="text-sm text-slate-500 dark:text-slate-400">12 - 24 Months</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                   <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Partner Onshore (820)</span>
                   <span className="text-sm text-slate-500 dark:text-slate-400">6 - 18 Months</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                   <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Child Visa (101)</span>
                   <span className="text-sm text-slate-500 dark:text-slate-400">10 - 20 Months</span>
                </li>
                <li className="flex justify-between items-center pb-3">
                   <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Visitor Visa (Pakistan to Aus)</span>
                   <span className="text-sm text-slate-500 dark:text-slate-400">30 - 60 Days</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-6 mt-4">
                Note: Partner visas involving marriages in Pakistan often trigger extensive background and security checks, extending the processing time.
              </p>
           </div>
        </section>

        <section>
          <div className="space-y-3">
             <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-offshore" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Official Partner Visa Guide (Home Affairs)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Temporary Parent Visa (870)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
