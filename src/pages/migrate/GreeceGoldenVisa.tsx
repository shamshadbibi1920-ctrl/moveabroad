import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, CalendarClock, Briefcase, FileCheck2, Building2, Landmark } from 'lucide-react';
import GoldenVisaComparison from '../../components/GoldenVisaComparison';

export default function GreeceGoldenVisa() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover" alt="Greece" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-amber-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Greece Golden Visa 🇬🇷</h1>
          <p className="text-xl text-slate-300 max-w-3xl">One of Europe's most popular real estate residency programs, offering an EU gateway with zero minimum stay requirements.</p>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <GoldenVisaComparison />

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
            <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Disclaimer: Always verify with official sources
            </p>
            <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               Immigration laws change frequently. The Greek government significantly increased investment thresholds in September 2024. Always consult an authorized legal expert. We are an informational platform.
            </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> Investment Options (New 2024 Thresholds)
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The Greek Golden Visa is primarily a real-estate investment program. Recently updated, the required investment amount now depends heavily on the geographic location of the property.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30">
                 <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-2">High-Demand Areas</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€800,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Required for properties in the Region of Attica (including Athens), Thessaloniki, Mykonos, Santorini, and islands with a population over 3,100.</p>
               </div>
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                 <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Other Regions</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€400,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Required for real estate in all other regions of Greece (e.g., Crete, Peloponnese, smaller islands).</p>
               </div>
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Conversion / Restoration</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€250,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Special lower threshold if converting a commercial/industrial property to residential, or restoring a listed heritage building.</p>
               </div>
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30">
                 <h3 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Financial Investment</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€400,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Shares in Greek real estate investment companies, Greek government bonds, or mutual funds investing exclusively in Greece.</p>
               </div>
            </div>
            <p className="text-sm text-slate-500 mt-6 italic">Note: Real estate must be a single property (you cannot combine multiple cheaper properties to reach the threshold).</p>
          </div>
        </section>

        <section>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 text-center relative overflow-hidden">
             <Building2 className="absolute -top-4 -right-4 w-32 h-32 text-emerald-500 opacity-10" />
             <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">🌟 Best for Pakistanis</h2>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
               Historically the most affordable EU option, Greece remains highly attractive for Pakistani real estate investors looking for hard asset backing combined with EU travel privileges.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Zero Minimum Stay</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">You do not have to spend a single day in Greece to maintain the residency permit.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Rental Income</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">You can rent out the property (expect ~3-5% yield in Athens suburbs). Note: Short-term (Airbnb) rentals are banned under the new law.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Indefinite Renewal</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">The permit is valid for 5 years and renewable indefinitely as long as you keep the property.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Full Schengen Access</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Seamless travel across 27 European countries without applying for Schengen visas.</span>
               </div>
             </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <CalendarClock className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center">
             <CalendarClock className="w-6 h-6 mr-3 text-amber-400" />
             Step-by-Step Processing Timeline
           </h2>
           <div className="space-y-6 relative z-10 max-w-3xl">
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 1</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Find qualifying property</h4>
                 <p className="text-slate-400 text-sm">Travel to Greece (or do it remotely via Power of Attorney) to view properties and sign a reservation agreement.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 2</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Bank Account & AFM</h4>
                 <p className="text-slate-400 text-sm">Open a Greek bank account and procure a Greek tax registry number (AFM).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 3</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Complete Purchase</h4>
                 <p className="text-slate-400 text-sm">Transfer full funds, pay the property transfer tax (3.09%), and sign the final property purchase contract before a notary.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 4</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Submit Application</h4>
                 <p className="text-slate-400 text-sm">Lawyer submits the Golden Visa application to the decentralized immigration authority. Receive a temporary blue receipt allowing stay in Greece.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 5</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Biometrics in Greece</h4>
                 <p className="text-slate-400 text-sm">You and your family must visit Greece to provide fingerprints. This can be done at the time of application or within 6 months.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 6</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg mb-1 text-white">Receive 5-Year Permit</h4>
                 <p className="text-slate-400 text-sm">Your physical Golden Visa cards are issued. You can renew them indefinitely every 5 years as long as you own the property.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Important Alert on Citizenship</h2>
               <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30">
                 <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                   Unlike Portugal, the Greek Golden Visa does <strong>not</strong> provide an easy path to a European passport if you live abroad. 
                 </p>
                 <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                   While holding the permit temporarily allows you to live in Greece indefinitely, obtaining actual Greek citizenship requires <strong>7 years of physical, permanent residence in Greece</strong>, along with passing a rigorous fluency test in the Greek language. If you just want residency and travel access, Greece is perfect. If a passport is your priority, consider Portugal instead.
                 </p>
               </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <Landmark className="w-6 h-6 mr-3 text-amber-500" /> Additional Costs
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">In addition to the €400k/€800k property price, expect ~8-10% in closing costs:</p>
               <div className="space-y-4">
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Property Transfer Tax</span>
                   <span className="font-semibold text-slate-900 dark:text-white">3.09% of value</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Notary & Land Registry</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~1.5% to 2%</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Legal Fees</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~1.2% + VAT (~€8k-€15k)</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Government Application Fees</span>
                   <span className="font-semibold text-slate-900 dark:text-white">€2,000 per adult</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links & Resources</h2>
          <div className="grid grid-cols-1 gap-4">
             <a href="https://nationalvisas.mfa.gr/golden-visa" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Greek Golden Visa Portal (MFA)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.enterprisegreece.gov.gr/en/invest-in-greece" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Enterprise Greece Official Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}

