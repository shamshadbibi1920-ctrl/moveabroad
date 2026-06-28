import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, CalendarClock, Briefcase, Plane, Landmark, ArrowLeft, Globe } from 'lucide-react';
import GoldenVisaComparison from '../../components/GoldenVisaComparison';
import SEO from '../../components/SEO';

export default function MaltaGoldenVisa() {
  return (
    <>
      <SEO title="Migrate to Malta Golden Visa | MoveAbroad.pk" description="Comprehensive guide to malta golden visa for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
            {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599394020836-b4870c9f4e6c?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Migrate
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Malta Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Malta Permanent Residence (MPRP) 🇲🇹
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A straightforward, investment-based path to permanent residency in an English-speaking EU nation.
            </p>
          </motion.div>
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
               Immigration policies are subject to strictly enforced quotas and intense due diligence. Always verify current MPRP requirements with the Residency Malta Agency and a licensed agent.
            </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> Investment Requirements
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Unlike other programs where you make one distinct investment, the Malta Permanent Residence Programme (MPRP) requires a combination of three simultaneous financial commitments: Government Contribution, Charitable Donation, and Property (Lease or Purchase).
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Mandatory Prerequisite</h3>
              <p className="text-slate-700 dark:text-slate-300">You must prove possession of at least <strong>€500,000 in total capital</strong>, out of which €150,000 must be in liquid financial assets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30">
                 <div className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-xs font-bold px-2 py-1 rounded w-fit mb-3">Requirement 1</div>
                 <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-2">Government Contribution</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm mb-2">Direct non-refundable fee to the state.</p>
                 <ul className="text-sm text-slate-700 dark:text-slate-300 font-semibold space-y-1 mt-4">
                   <li>• <strong className="text-xl">€98,000</strong> (if leasing property)</li>
                   <li className="text-center text-slate-400">OR</li>
                   <li>• <strong className="text-xl">€68,000</strong> (if purchasing property)</li>
                 </ul>
               </div>
               
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                 <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-bold px-2 py-1 rounded w-fit mb-3">Requirement 2</div>
                 <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Property (Buy or Rent)</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm mb-2">Must hold for at least 5 years.</p>
                 <ul className="text-sm text-slate-700 dark:text-slate-300 font-semibold space-y-1 mt-4">
                   <li>• <strong className="text-base text-blue-800 dark:text-blue-300">Lease:</strong> €10,000 to €12,000 per year</li>
                   <li className="text-center text-slate-400">OR</li>
                   <li>• <strong className="text-base text-blue-800 dark:text-blue-300">Purchase:</strong> €300,000 to €350,000</li>
                 </ul>
               </div>
               
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                 <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-2 py-1 rounded w-fit mb-3">Requirement 3</div>
                 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Charitable Donation</h3>
                 <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">€2,000</p>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Donation to a local registered philanthropic, cultural, sport, scientific, animal welfare or artistic NGO registered with the Commissioner for Voluntary Organisations.</p>
               </div>
            </div>
            
            <p className="text-sm text-slate-500 mt-6 italic bg-slate-100 dark:bg-slate-800 p-4 rounded text-center border border-slate-200 dark:border-slate-700">
               <strong>Most Popular Route Cost:</strong> If you choose to rent property rather than buy, the total upfront out-of-pocket cost starts around <strong>€150,000</strong> (including fees and 5 years rent). This makes Malta one of the cheapest paths to a pure European Permanent Residence.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 text-center relative overflow-hidden">
             <Plane className="absolute -top-4 -right-4 w-32 h-32 text-emerald-500 opacity-10" />
             <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">🌟 Best for Pakistanis</h2>
             <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
               Malta offers a unique proposition: it's a Schengen country where English is an official language, making it highly accessible for Pakistani families.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Immediate Permanent Residence</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Unlike Portugal or Spain which offer temporary residency cards initially, Malta grants Permanent Residence (PR) from day one.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Lower Capital Outlay</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Because you can 'Lease' property instead of buying, you can secure European PR for around €150,000 rather than locking up €500k+.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">English Speaking</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Malta is a former British colony. English is an official language, making schooling for children and daily life very easy.</span>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/30">
                 <strong className="text-slate-900 dark:text-white block">Four Generations</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400">Include your spouse, unmarried dependent children, parents, and even grandparents on a single application.</span>
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
             Step-by-Step Processing Timeline (Process ~6 Months)
           </h2>
           <div className="space-y-6 relative z-10 max-w-3xl">
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 1</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Hire a Licensed Agent</h4>
                 <p className="text-slate-400 text-sm">Applications can ONLY be submitted by an official 'Licensed Agent' approved by the Residency Malta Agency. You cannot apply independently.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 2</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Prepare Documents & Pay Admin Fee</h4>
                 <p className="text-slate-400 text-sm">Collate extensive paperwork (police clearances, source of wealth). Pay the non-refundable €10,000 administrative fee to the government.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 3</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Intense Due Diligence</h4>
                 <p className="text-slate-400 text-sm">Malta conducts extremely rigorous background checks (Tier 4 due diligence). This takes 4 to 6 months.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 4</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Approval in Principle</h4>
                 <p className="text-slate-400 text-sm">Once approved, you receive an 'Approval in Principle' letter.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 5</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Fulfill Investments (Within 8 Months)</h4>
                 <p className="text-slate-400 text-sm">You now have 2 months to pay the government contribution, and 8 months to finalize the property lease/purchase and make the charitable donation.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-amber-400 pt-1">Step 6</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg mb-1 text-white">Biometrics & PR Certificate</h4>
                 <p className="text-slate-400 text-sm">Travel to Malta to capture biometrics. Receive your Certificate of Permanent Residence and residency cards.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Crucial Alert on Citizenship</h2>
               <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30">
                 <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                   The MPRP is a <strong>residency</strong> program, NOT a citizenship program.
                 </p>
                 <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                   While holding MPRP, there is practically <strong>no realistic path to a Maltese passport</strong> simply by holding the residency. Maltese citizenship by naturalization is notoriously difficult, requiring exceptional connections and long-term physical integration. If a passport is your priority, either look at Portugal, or look at Malta's much more expensive direct Citizenship program (MEIN), which costs ~€1 Million.
                 </p>
               </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <Landmark className="w-6 h-6 mr-3 text-amber-500" /> Administrative Costs
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Separate from the investments, expect these fees:</p>
               <div className="space-y-4">
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Govt Admin Fee (Non-refundable)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">€40,000 (covers primary app)</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Additional Dependents (Parents/Grandparents)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">€7,500 per person</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Health Insurance (Annual)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~€300 - €500 per person</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Licensed Agent Fees</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~€20,000 - €30,000+</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links & Resources</h2>
          <div className="grid grid-cols-1 gap-4">
             <a href="https://residencymalta.gov.mt/the-mprp-programme/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Residency Malta Agency (Official Government Body)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
    </>
  );
}
