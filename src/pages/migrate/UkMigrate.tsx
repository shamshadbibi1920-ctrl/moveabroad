import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Briefcase, FileCheck2, Globe2, AlertTriangle, Cross, Activity, Users, Award, Star, ArrowLeft, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkMigrate() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="UK Skilled Worker Visa & Global Talent Visa for Pakistanis 2026"
        description="Complete UK immigration guide for Pakistanis. Skilled Worker Visa, Health and Care Worker, Global Talent Visa and path to ILR."
        canonicalPath="/migrate/uk"
      />
            {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80" 
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
              <Globe className="w-4 h-4 mr-2" /> UK Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Migrate to the UK 🇬🇧
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive guide to Global Talent, Skilled Worker, and Health & Care Visas.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Disclaimer: Always verify with official government sources
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               Immigration policies and salary thresholds in the UK have undergone numerous changes. Always consult directly with the UK Visas and Immigration (UKVI) website before making life decisions.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Globe2 className="w-64 h-64 text-emerald-500" />
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-6 flex items-center relative z-10">
               <Globe2 className="w-8 h-8 mr-3 text-emerald-500" /> Global Talent Visa
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">
              The most prestigious and flexible visa. Requires <strong>no job offer</strong>, allowing you full freedom to work, start a business, or freelance in the UK. Designed for individuals who show exceptional talent or promise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-amber-500" /> The Two Tracks
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-400 block mb-1">Exceptional Talent</strong>
                    <p className="text-sm text-slate-400">For those who are already established as leading figures in their internationally recognised field. Fast-tracks to ILR in just 3 years.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400 block mb-1">Exceptional Promise</strong>
                    <p className="text-sm text-slate-400">For those in the early stages of their careers (usually within 5 years of starting) who have shown the potential to become leaders. Leads to ILR in 5 years.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-blue-500" /> 6 Eligible Fields & Endorsers
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start"><span className="text-blue-400 font-bold w-1/3">Academia & Research</span> <span className="w-2/3">British Academy, Royal Society, Royal Academy of Engineering</span></li>
                  <li className="flex items-start"><span className="text-blue-400 font-bold w-1/3">Arts & Culture</span> <span className="w-2/3">Arts Council England</span></li>
                  <li className="flex items-start"><span className="text-blue-400 font-bold w-1/3">Digital Technology</span> <span className="w-2/3">Tech Nation</span></li>
                  <li className="flex items-start"><span className="text-blue-400 font-bold w-1/3">Science & Medicine</span> <span className="w-2/3">UK Research and Innovation (UKRI)</span></li>
                  <li className="flex items-start"><span className="text-blue-400 font-bold w-1/3">Humanities</span> <span className="w-2/3">British Academy</span></li>
                  <li className="flex items-start"><span className="text-blue-400 font-bold w-1/3">Social Sciences</span> <span className="w-2/3">British Academy</span></li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                 <h3 className="font-bold text-emerald-400 mb-2">Evidence Needed (Pakistan context)</h3>
                 <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                   <li>Published research papers / citations (Academia).</li>
                   <li>Open source contributions / GitHub profile (Tech).</li>
                   <li>Awards, recognition, media coverage (Arts).</li>
                   <li>Salary history showing exceptional progression.</li>
                   <li>Reference letters from internationally recognised figures.</li>
                 </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                 <h3 className="font-bold text-emerald-400 mb-2">Why It's Great</h3>
                 <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                   <li>No employer sponsor needed — full freedom to work anywhere.</li>
                   <li>Can switch jobs, go freelance, or start a business.</li>
                   <li>Fast track ILR (3 years for Talent, 5 years for Promise).</li>
                   <li>Dependants can work full time with no restrictions.</li>
                 </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                 <h3 className="font-bold text-emerald-400 mb-2">Costs Breakdown</h3>
                 <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                   <li><strong>Endorsement fee:</strong> £524</li>
                   <li><strong>Visa fee:</strong> £167 per year (much cheaper than Skilled Worker).</li>
                   <li>No IHS surcharge for some categories.</li>
                 </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                 <h3 className="font-bold text-white mb-4">Step-by-Step Process</h3>
                 <ul className="space-y-4 text-sm text-slate-400">
                   <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Step 1:</strong> Choose endorsing body for your field.</span></li>
                   <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Step 2:</strong> Prepare endorsement application (portfolio, letters, evidence).</span></li>
                   <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Step 3:</strong> Submit endorsement (8 week decision).</span></li>
                   <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Step 4:</strong> Apply for visa within 3 months of endorsement.</span></li>
                   <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Step 5:</strong> Enter UK and start working.</span></li>
                 </ul>
              </div>
              
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                 <h3 className="font-bold text-white mb-4 flex items-center">
                   Fast Track ILR Timeline <span className="ml-2 text-xs font-normal text-emerald-400 bg-emerald-900/40 px-2 py-1 rounded-full">Exceptional Talent</span>
                 </h3>
                 <div className="space-y-4">
                   <div className="flex">
                     <div className="w-16 shrink-0 font-bold text-emerald-400 text-sm">Year 0</div>
                     <div>
                        <p className="text-slate-300 text-sm">Arrive on Global Talent Visa</p>
                     </div>
                   </div>
                   <div className="flex">
                     <div className="w-16 shrink-0 font-bold text-emerald-400 text-sm">Year 3</div>
                     <div>
                        <p className="text-slate-300 text-sm">Apply for ILR (Exceptional Talent track)</p>
                     </div>
                   </div>
                   <div className="flex">
                     <div className="w-16 shrink-0 font-bold text-emerald-400 text-sm">Year 4</div>
                     <div>
                        <p className="text-slate-300 text-sm">British Citizenship eligible</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> Skilled Worker Visa
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The primary route for most Pakistani professionals. It requires a job offer from an approved UK employer and operates on a points-based system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Requirements</h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li><strong>Certificate of Sponsorship (CoS)</strong> from an approved employer.</li>
                  <li>Job must be on the list of eligible occupations.</li>
                  <li><strong>IELTS or UKVI SELT</strong> (usually B1 level minimum).</li>
                  <li>Must score 70 points (50 mandatory points for job offer, skill level, and English + 20 tradeable points like salary).</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-100 dark:border-orange-800">
                <h3 className="text-xl font-bold text-orange-800 dark:text-orange-400 mb-3">Salary & Costs</h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li>General salary threshold has increased to £38,700 (unless relying on new entrant discounts or PhD points).</li>
                  <li>Must pay the Immigration Health Surcharge (IHS) of £1,035 per year (waived for Health & Care visas).</li>
                  <li>Visa application fees and proof of maintenance funds required.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Other Specialized Pathways</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                 <Activity className="w-6 h-6 mr-3 text-rose-500" /> Health and Care Worker Visa
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Fast-track, cheaper visa for medical professionals (Doctors, Nurses, Allied Health).</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-2">
                 <li>Exempt from the IHS (saving over £1,000/year).</li>
                 <li>Lower general salary threshold (£29,000 minimum).</li>
                 <li>Pakistani doctors often pursue PLAB and register with GMC.</li>
                 <li>Nurses require CBT/OSCE and NMC registration.</li>
                 <li>Care workers face recent restrictions on bringing dependents.</li>
               </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                 <Users className="w-6 h-6 mr-3 text-emerald-500" /> Graduate Route Visa
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">For international students who successfully complete a degree in the UK.</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-2">
                 <li>Stay for 2 years (3 years for PhD graduates) to work or look for work at any skill level.</li>
                 <li>Does NOT count towards the 5-year ILR route (but can transition to Skilled Worker Visa later).</li>
                 <li>Recent tightening restricts dependent visas for most masters students.</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <FileCheck2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10">Standard Pathway to Permanent Residency (ILR)</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">0 Years</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Arrive on Skilled Worker Visa</h4>
                  <p className="text-slate-400">Obtain CoS, apply for visa, pass TB test, move to UK.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">5 Years</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Indefinite Leave to Remain (ILR)</h4>
                  <p className="text-slate-400">After 5 continuous years on an eligible work visa, apply for ILR. Requires passing "Life in the UK" test.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">6 Years</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">British Citizenship</h4>
                  <p className="text-slate-400">Usually accessible 12 months after attaining ILR (or immediately if married to a British citizen).</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.gov.uk/global-talent" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition col-span-1 md:col-span-2">
               <span className="font-semibold text-emerald-800 dark:text-emerald-400">UKVI Global Talent Visa Page</span>
               <ChevronRight className="text-emerald-600 dark:text-emerald-400" />
             </a>
             <a href="https://technation.io/visa/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Tech Nation Endorsement</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.ukri.org/councils/research-england/guidance-for-global-talent-visa-applicants/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">UKRI Endorsement</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.artscouncil.org.uk/global-talent-visa" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Arts Council Endorsement</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.gov.uk/skilled-worker-visa" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">UKVI Skilled Worker Visa</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.gov.uk/health-care-worker-visa" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Health and Care Worker Visa</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
