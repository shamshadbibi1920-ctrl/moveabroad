import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, CalendarClock, Briefcase, FileCheck2, Plane, Landmark } from 'lucide-react';
import GoldenVisaComparison from '../../components/GoldenVisaComparison';
import SEO from '../../components/SEO';

export default function PortugalGoldenVisa() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Portugal Golden Visa Guide 2026 | Rules for Pakistani Investors"
        description="Ultimate guide to Portugal Golden Visa. Residency by investment options, investment funds, company creation, and path to EU Passport."
        canonicalPath="/migrate/golden-visa/portugal"
      />
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate" className="inline-flex items-center text-amber-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Portugal Golden Visa 🇵🇹</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Residency by investment and a 5-year path to an EU passport, with only 7 days a year stay requirement.</p>
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
               Investment immigration regulations change frequently. Always verify current requirements with official sources and licensed advisors. Note: As of late 2023, the real estate investment route in Portugal is no longer eligible.
            </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> Investment Options (Updated 2024)
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The Portugal Golden Visa (ARI) allows non-EU citizens to gain residency rights in exchange for a qualifying investment. Real estate is no longer an option, but several attractive pathways remain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30">
                 <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-2">1. Investment & VC Funds</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€500,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Capital transfer into a qualifying Portuguese venture capital or private equity fund. This is now the most popular route since real estate ended.</p>
               </div>
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                 <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">2. Company Creation</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€500,000 + 5 Jobs</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Invest €500k into incorporating a new Portuguese company or increasing share capital of an existing one, creating or maintaining 5 permanent jobs.</p>
               </div>
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">3. Cultural Heritage</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€250,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Donation to support the arts, artistic production, or the restoration/maintenance of national cultural heritage.</p>
               </div>
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30">
                 <h3 className="font-bold text-rose-700 dark:text-rose-400 mb-2">4. Scientific Research</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€500,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Capital transfer towards research activities conducted by authorized public or private scientific institutions.</p>
               </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 text-center relative overflow-hidden">
             <Plane className="absolute -top-4 -right-4 w-32 h-32 text-emerald-500 opacity-10" />
             <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">🌟 Best for Pakistanis</h2>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
               For Pakistani investors and High-Net-Worth Individuals (HNWIs), Portugal offers the ultimate "Plan B" passport with minimal disruption to your current life in Pakistan or the Middle East.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Stunningly Low Stay Req</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Only 7 days per year (or 14 days every 2 years). You do not need to move to Portugal.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">EU Passport in 5 Years</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">After 5 years of holding the residency, apply for citizenship. Visa-free to 188+ countries.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Family Reunification</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Spouse, children (under 18 or dependent students), and dependent parents are all included.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Full Schengen Access</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Travel anywhere in the 27 EU Schengen states without applying for visas.</span>
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
                 <h4 className="font-bold text-lg mb-1">Preparation & Tax Number (NIF)</h4>
                 <p className="text-slate-400 text-sm">Choose investment. Open a Portuguese bank account and obtain a NIF (Tax Number) remotely via a lawyer.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 2</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Make the Investment</h4>
                 <p className="text-slate-400 text-sm">Transfer funds from outside Portugal into your Portuguese bank account, and execute the qualifying investment (e.g., fund subscription).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 3</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Submit ARI Application</h4>
                 <p className="text-slate-400 text-sm">Lawyer submits application to AIMA (Agency for Integration, Migration and Asylum, formerly SEF).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 4</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Biometrics in Portugal</h4>
                 <p className="text-slate-400 text-sm">Once pre-approved, travel to Portugal for a fingerprinting and biometrics appointment. (Current backlog: appointments take several months).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 5</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Receive Golden Visa</h4>
                 <p className="text-slate-400 text-sm">Receive your residency cards (initially valid for 1 year, then renewed for 2 years each). Welcome to Portugal!</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 6</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg mb-1 text-white">Year 5: PR or Citizenship</h4>
                 <p className="text-slate-400 text-sm">After holding the visa for 5 years, passing a basic A2 Portuguese language test, and clear criminal record, apply for Citizenship.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Considerations for Pakistanis</h2>
               <ul className="space-y-4">
                 <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>Source of Funds:</strong> AIMA strictly verifies where the €500,000 originated. You will need clear documentation (tax returns, business audits, property sales) proving the funds are clean and belong to you.</p>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>Backlogs:</strong> The agency (AIMA) currently faces significant processing backlogs. Be prepared for a 12-18+ month wait from investing to getting your card.</p>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300 text-sm"><strong>Language:</strong> English is widely spoken in Portugal, but the Year 5 citizenship application requires passing an 'A2' (basic) Portuguese language test.</p>
                 </li>
               </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <Landmark className="w-6 h-6 mr-3 text-amber-500" /> Additional Costs
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Beyond the core investment (€250k - €500k), budget for:</p>
               <div className="space-y-4">
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Legal & Agent Fees</span>
                   <span className="font-semibold text-slate-900 dark:text-white">€15,000 - €25,000</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">AIMA Application (per person)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~€533</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">AIMA Card Issuance (per person)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~€5,325</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Fund Management Fees (if applicable)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">1% - 2% / year</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links & Resources</h2>
          <div className="grid grid-cols-1 gap-4">
             <a href="https://aima.gov.pt/pt" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">AIMA Portugal (Official Immigration Agency)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}

