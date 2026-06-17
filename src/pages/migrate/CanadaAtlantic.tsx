import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, MapPin, Briefcase, FileSignature, CheckCircle2, Building, Ship , ArrowLeft, Globe} from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaAtlantic() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Atlantic Immigration Program (AIP) Canada for Pakistanis | Guide 2026"
        description="Move to Atlantic Canada (Nova Scotia, NB, PEI, NL). AIP requirements, designated employers list, and how to apply from Pakistan."
        canonicalPath="/migrate/canada/aip"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Canada Migration
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Atlantic Immigration Program (AIP) 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A pathway to permanent residence for skilled foreign workers and international graduates who want to work and live in 1 of Canada's 4 Atlantic provinces.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex items-start shadow-sm flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Disclaimer & Warning
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               The Atlantic Immigration Program REQUIRES a valid job offer from a designated employer. Beware of fraudulent "consultants" offering to sell you fake job offers for money. Buying a job offer is illegal and will ban you from Canada.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">What is the AIP?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The Atlantic Immigration Program (AIP) is an employer-driven immigration program aimed at helping employers in Atlantic Canada hire foreign skilled workers and international graduates to fill local labor shortages.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              It is a fast-tracked path to Permanent Residency. Once you have a valid job offer, your employer helps you get an <strong>Endorsement Certificate</strong>, after which you apply directly to IRCC for PR.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-rose-500" /> The 4 Atlantic Provinces
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white text-center">New Brunswick</div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white text-center">Nova Scotia</div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white text-center">Prince Edward Island</div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white text-center">Newfoundland & Labrador</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">The 3 Programs under AIP</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
              <div className="bg-rose-100 dark:bg-rose-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                 <Briefcase className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Atlantic High-Skilled Program</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow mb-4">For workers who have worked in management, professional, or technical/skilled jobs for at least one year.</p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>• Need 1 year continuous paid work</li>
                <li>• High school diploma or higher</li>
                <li>• CLB 5 minimum language</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                 <Ship className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Atlantic Intermediate-Skilled Program</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow mb-4">For workers in jobs requiring a high school education or job-specific training (e.g., long-haul truck drivers, nurses' aides, food/beverage servers).</p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>• Need 1 year continuous paid work</li>
                <li>• High school education</li>
                <li>• CLB 4 minimum language</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                 <Building className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Atlantic International Graduate Program</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow mb-4">For students who have graduated from a publicly funded institution in Atlantic Canada.</p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>• No prior work experience needed!</li>
                <li>• Lived in Atlantic province for 16 months before graduating</li>
                <li>• Has a 2-year degree/diploma</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
           <h2 className="text-2xl font-bold mb-6 flex items-center">
             <FileSignature className="w-6 h-6 mr-3 text-emerald-400" />
             The Employer Endorsement Process
           </h2>
           <p className="text-slate-300 mb-8 max-w-3xl">
             You cannot just apply for AIP on your own. You must follow this strict sequence.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 relative">
               <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">1</div>
               <h4 className="font-bold mb-2">Find an Employer</h4>
               <p className="text-xs text-slate-400">Employer MUST be officially "Designated" by the provincial government to hire via AIP.</p>
             </div>
             <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 relative">
               <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">2</div>
               <h4 className="font-bold mb-2">Get Settlement Plan</h4>
               <p className="text-xs text-slate-400">You must contact a settlement service provider to get a customized settlement plan for you and your family.</p>
             </div>
             <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 relative">
               <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">3</div>
               <h4 className="font-bold mb-2">Endorsement</h4>
               <p className="text-xs text-slate-400">The employer sends your job offer + settlement plan to the province. Province issues an Endorsement Certificate.</p>
             </div>
             <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 relative">
               <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">4</div>
               <h4 className="font-bold mb-2">Apply for PR</h4>
               <p className="text-xs text-slate-400">Submit your PR application to IRCC with the Endorsement Certificate and all other documents.</p>
             </div>
           </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/30">
           <h3 className="font-bold text-2xl mb-4 text-blue-900 dark:text-blue-400">Why AIP is Good for Pakistani Applicants</h3>
           <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-sm md:text-base">
             <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <div>
                   <strong className="block text-slate-900 dark:text-white">Lower Language Requirements</strong>
                   Many streams only require CLB 4 or 5 (IELTS 4.0 - 5.0), compared to the aggressive CLB 9 required for Express Entry.
                </div>
             </li>
             <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <div>
                   <strong className="block text-slate-900 dark:text-white">Easier to Secure Work Permits Quickly</strong>
                   Once endorsed, you can apply for a temporary work permit to travel to Canada and begin working while your PR application processes.
                </div>
             </li>
             <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <div>
                   <strong className="block text-slate-900 dark:text-white">No LMIA Required!</strong>
                   The biggest hurdle for foreign workers in Canada is getting an LMIA. AIP bypasses this completely. If the employer is designated, they do not need an LMIA.
                </div>
             </li>
           </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Designated Employer Lists & Links</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
             Each province maintains a list of companies "designated" to hire foreign workers through AIP. <strong>Never pay an agent to access this list. It is public and free.</strong>
          </p>
          <div className="space-y-3">
             <a href="https://welcomenb.ca/content/wel-bien/en/immigrating.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">New Brunswick Employers</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://novascotiaimmigration.com/help-for-employers/atlantic-immigration-pilot/designated-employers/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Nova Scotia Employers</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.princeedwardisland.ca/en/information/office-of-immigration/atlantic-immigration-program" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">PEI AIP Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/atlantic-immigration-program/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Newfoundland & Labrador Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Central AIP Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
