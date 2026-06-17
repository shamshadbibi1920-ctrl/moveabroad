import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, CalendarClock, Briefcase, FileCheck2, Building, Landmark, Plane } from 'lucide-react';
import GoldenVisaComparison from '../../components/GoldenVisaComparison';

export default function UaeGoldenVisa() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover" alt="UAE" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-amber-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">UAE Golden Visa 🇦🇪</h1>
          <p className="text-xl text-slate-300 max-w-3xl">A long-term 10-year residency for investors, entrepreneurs, and outstanding talents.</p>
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
               Immigration laws change frequently. Rules may vary slightly between Emirates (e.g., Dubai vs. Abu Dhabi). Always verify current requirements with the Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) or Dubai's GDRFA.
            </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> Eligibility Categories (10-Year Visa)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30">
                 <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-2">Real Estate Investors</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AED 2,000,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Purchase a property (or multiple properties) worth at least 2 million Dirhams. Can be off-plan or mortgaged through specific local banks (subject to equity rules).</p>
               </div>
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                 <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Public Investment</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AED 2,000,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Deposit AED 2M in a UAE investment fund, or establish a company/partner in a company with a share capital of AED 2M.</p>
               </div>
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Entrepreneurs</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Approved Project</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Own or partner in a startup registered in the UAE that is innovative and approved by a Ministry/competent authority. (Or previously sold an entrepreneurial project for AED 7M+).</p>
               </div>
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30">
                 <h3 className="font-bold text-rose-700 dark:text-rose-400 mb-2">Outstanding Specialized Talents</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Doctors, scientists, creative people in culture/art, inventors, executives, athletes, and specialized academics. Requires approval from relevant UAE ministries (e.g., Ministry of Culture, Emirates Scientists Council).</p>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                 <h3 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">Highly Skilled Professionals</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AED 30,000/month</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Must have a valid UAE employment contract, classified in the first or second occupational level by MOHRE, hold a bachelor's degree, and earn a monthly salary of at least AED 30,000.</p>
               </div>
               <div className="bg-cyan-50 dark:bg-cyan-900/10 p-6 rounded-xl border border-cyan-100 dark:border-cyan-900/30">
                 <h3 className="font-bold text-cyan-700 dark:text-cyan-400 mb-2">Outstanding Students</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">High school top performers (min 95% average) or outstanding university graduates (min GPA 3.8) from UAE universities or top 100 global universities.</p>
               </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 text-center relative overflow-hidden">
             <Building className="absolute -top-4 -right-4 w-32 h-32 text-emerald-500 opacity-10" />
             <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">🌟 Best for Pakistanis</h2>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
               The UAE is a top destination for Pakistani expatriates due to proximity, cultural affinity, religious freedom, and an entirely tax-free income environment. The Golden Visa provides ultimate stability without needing a local sponsor.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">No 6-Month Entry Rule</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Unlike standard UAE visas, Golden Visa holders can stay outside the UAE for more than 6 months without the visa being cancelled.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Self-Sponsored</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">You are your own sponsor. You don't need a UAE employer or local partner to maintain your status.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Family Sponsorship</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Sponsor spouse and children of any age. Uniquely, family members can stay in the UAE until the end of their permit duration even if the primary visa holder passes away.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Domestic Workers</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Ability to sponsor an unlimited number of domestic helpers (maids, drivers, etc.).</span>
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
             Step-by-Step Application Process (Dubai/GDRFA)
           </h2>
           <div className="space-y-6 relative z-10 max-w-3xl">
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 1</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Meet Eligibility/Investment</h4>
                 <p className="text-slate-400 text-sm">Purchase the property (get title deed) OR obtain required approvals from relevant ministries (e.g., MOHRE for professionals, DLD for Dubai real estate).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 2</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Apply for Nomination</h4>
                 <p className="text-slate-400 text-sm">Submit your initial application through the GDRFA portal (Dubai) or ICP system (other Emirates). Receive an initial approval/nomination.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 3</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Entry Permit & Biometrics</h4>
                 <p className="text-slate-400 text-sm">If outside UAE, get a multiple-entry 6-month visa to travel to the UAE. Complete medical fitness tests and Emirates ID biometrics in the UAE.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 4</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Cancel Old Visa (If Applicable)</h4>
                 <p className="text-slate-400 text-sm">If you are already living in the UAE on an employment visa, your current employer must cancel your existing visa.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 5</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg mb-1 text-white">Receive Golden Visa</h4>
                 <p className="text-slate-400 text-sm">The 10-year residency is stamped on your passport (or linked digitally to your Emirates ID). You can now sponsor your family.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Landmark className="w-6 h-6 mr-3 text-amber-500" /> Processing Fees
             </h2>
             <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Note: These are administrative processing fees, separate from the AED 2M capital investment requirement.</p>
             <div className="space-y-4 max-w-2xl">
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Initial Residency Application/Issuance</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~AED 2,800 - AED 3,800</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Medical Fitness Test</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~AED 300 - AED 800</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">Emirates ID (10 Years)</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~AED 1,000</span>
               </div>
               <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                 <span className="text-slate-600 dark:text-slate-400 text-sm">DLD Golden Visa Fees (Dubai Real Estate only)</span>
                 <span className="font-semibold text-slate-900 dark:text-white">~AED 4,000</span>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                 <p className="text-sm text-slate-500">Total admin fees usually range from <strong>AED 4,000 to AED 10,000</strong> depending on the Emirate, category, and whether you apply from inside or outside the UAE.</p>
               </div>
             </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Official UAE Govt Portal (u.ae)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.gdrfad.gov.ae/en/services/26124a2e-4cb0-11ea-0320-0050569629e8" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">GDRFA Dubai (Apply Here)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}
