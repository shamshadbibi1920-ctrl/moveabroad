import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, CalendarClock, Briefcase, FileCheck2, Plane, Landmark } from 'lucide-react';
import GoldenVisaComparison from '../../components/GoldenVisaComparison';

export default function SpainGoldenVisa() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover" alt="Spain" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-amber-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Spain Golden Visa 🇪🇸</h1>
          <p className="text-xl text-slate-300 max-w-3xl">The "Visa de Oro" - premium EU residency for investors with extensive travel benefits and zero maintenance stay required.</p>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <GoldenVisaComparison />

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5" />
          </div>
          <div>
            <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed font-bold mb-1">
               CRITICAL UPDATE (2024): Pending Legislation on Real Estate Option
            </p>
            <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed">
               In mid-2024, the Spanish government announced explicit plans to abolish the €500,000 real estate investment route. While the law has not taken full effect yet across all jurisdictions, it is actively being phased out. The Financial Investment routes (businesses, bonds, deposits) remain fully open. Always verify the current status with a legal professional before proceeding.
            </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> Investment Options (Visa de Oro)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30 opacity-70">
                 <h3 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Real Estate (Ending)</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€500,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Purchase of unencumbered real estate. Currently being phased out by the Spanish Parliament.</p>
               </div>
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                 <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Business Investment</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€1,000,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Shares in Spanish companies, or bank deposits in Spanish financial institutions.</p>
               </div>
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Government Bonds</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€2,000,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Investment in Spanish public debt securities.</p>
               </div>
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-900/30 lg:col-span-3">
                 <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-2">Business Project of General Interest</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">No fixed minimum capital, but the project must create significant employment, have relevant socio-economic impact in the geographic area, or represent a major scientific/technological innovation.</p>
               </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 text-center relative overflow-hidden">
             <Plane className="absolute -top-4 -right-4 w-32 h-32 text-emerald-500 opacity-10" />
             <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">🌟 Best for Pakistanis</h2>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
               Spain is home to one of the largest Pakistani communities in Europe (particularly in Barcelona and Madrid), making integration extremely easy while holding a powerful residency permit.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">No Minimum Stay Required</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">To maintain your Golden Visa, you only need to visit Spain once during each residency period. You do not need to become a tax resident.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Family Inclusion</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Includes your spouse, children under 18 (and financially dependent adult children), plus dependent parents.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Beckham Law (Tax Benefit)</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">If you do move to Spain, new residents can apply for a special tax regime paying a flat 24% on Spanish income only, shielding global wealth for 6 years.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Path to Citizenship</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">For Pakistani nationals, Spanish citizenship requires 10 years of actual permanent residence in Spain (unlike the 2-year fast track for Latin Americans).</span>
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
             Step-by-Step Application Process
           </h2>
           <div className="space-y-6 relative z-10 max-w-3xl">
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 1</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Make Qualifying Investment</h4>
                 <p className="text-slate-400 text-sm">Obtain a Spanish NIE (tax number), open a bank account, and transfer funds to execute the chosen investment.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 2</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Apply at Consulate (Pakistan)</h4>
                 <p className="text-slate-400 text-sm">Apply for the 1-year Investor Visa at the Spanish Consulate in Islamabad or Embassy in Karachi. Processing usually takes just 10-20 days.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 3</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Travel to Spain</h4>
                 <p className="text-slate-400 text-sm">Travel to Spain within the 1-year validity of the visa to register your biometrics and apply for the full residence permit.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 4</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Receive 2-Year Residency Card</h4>
                 <p className="text-slate-400 text-sm">Once in Spain, the UGE (Large Business and Strategic Sectors Unit) processes the permit. You receive a Residency Card (TIE) valid for 2 years.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 5</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg mb-1 text-white">Renewal (Years 3+)</h4>
                 <p className="text-slate-400 text-sm">Renew the permit every 2 years from outside Spain, provided you still hold the original investment.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Landmark className="w-6 h-6 mr-3 text-amber-500" /> Costs Breakdown
             </h2>
             <div className="space-y-4 max-w-2xl">
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Capital Investment</span>
                 <span className="font-semibold text-slate-900 dark:text-white">€1,000,000+ (for non-real estate routes)</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Legal & Agent Fees</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~€10,000 - €15,000</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Consulate Application Fee</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~€80 per person</span>
               </div>
               <div className="flex justify-between items-center pb-2">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Residency Permit Card (TIE) Fee</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~€73 per person</span>
               </div>
             </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.exteriores.gob.es/Embajadas/islamabad/en/Paginas/index.aspx" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Spanish Embassy in Pakistan</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.investinspain.org/en/invest/entrepreneurs-visa" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Invest in Spain Official Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}
