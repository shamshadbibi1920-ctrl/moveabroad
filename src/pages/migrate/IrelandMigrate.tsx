import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Briefcase, FileCheck2, Globe2, AlertTriangle, Building, HeartPulse } from 'lucide-react';

export default function IrelandMigrate() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate" className="inline-flex items-center text-rose-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Migrate to Ireland</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Comprehensive guide to Critical Skills, General Employment Permits, and Irish permanent residency.</p>
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
               Work permits in Ireland are strictly regulated. Always consult the Department of Enterprise, Trade and Employment (DETE) website for updated lists of eligible and ineligible occupations.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> Critical Skills Employment Permit
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The premier work permit for non-EEA nationals. It is designed to attract highly skilled professionals (tech, engineering, healthcare) and offers massive advantages, including immediate family reunification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Key Benefits & Criteria
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li><strong>Fast-track to Stamp 4:</strong> After just 2 years, upgrade to a Stamp 4 (unrestricted right to work/reside without employer bondage).</li>
                  <li><strong>Family Members:</strong> Spouses/partners can join immediately and get a Stamp 1G (full right to work).</li>
                  <li>No Labour Market Needs Test (LMNT) required by the employer.</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-3 flex items-center">
                  <Building className="w-5 h-5 mr-2" /> Salary Thresholds
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li><strong>€38,000+:</strong> If occupation is on the Critical Skills Occupations List (e.g., IT, Engineering, Scientists, Doctors). Degree required.</li>
                  <li><strong>€64,000+:</strong> For any other eligible occupation not on the ineligible list. Degree or relevant experience required.</li>
                  <li>No IELTS required for the permit itself (though regulated professions may demand it).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Other Pathways & Quality of Life</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                 <Briefcase className="w-6 h-6 mr-3 text-rose-500" /> General Employment Permit
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">For occupations not on the Critical Skills list.</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-2">
                 <li>Subject to a Labour Market Needs Test (employer must prove they couldn't find an EU worker).</li>
                 <li>Minimum salary generally €34,000 (with certain exceptions for meat processors/care workers).</li>
                 <li>Takes 5 years to be eligible for Stamp 4 PR.</li>
                 <li>Spousal reunification rights are delayed (often 12 months minimum wait).</li>
               </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                 <HeartPulse className="w-6 h-6 mr-3 text-rose-500" /> IT & Healthcare Hub
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Why Ireland is highly popular for Pakistani professionals.</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-2">
                 <li><strong>Silicon Valley of Europe:</strong> HQ for Google, Meta, Apple, Microsoft in Dublin.</li>
                 <li><strong>Language Advantage:</strong> English speaking country, yet inside the EU.</li>
                 <li><strong>Healthcare:</strong> Fast-scaling demand; doctors usually need IMC registration (e.g. PRES exams).</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <Globe2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10">Pathway to Irish Naturalisation (Citizenship)</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">0 Years</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Arrive on Work Permit</h4>
                  <p className="text-slate-400">Arrive via Critical Skills (Stamp 1). Work and build your life securely.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">2 Years</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Stamp 4 (PR equivalent)</h4>
                  <p className="text-slate-400">If on Critical Skills, transition to Stamp 4. You can now work for any employer unconditionally or start a business.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">5 Years</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Apply for Naturalisation</h4>
                  <p className="text-slate-400">After 60 months of reckonable residence (time spent legally working), apply for an Irish Passport (EU Citizenship). Irish passports allow free movement across EU.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Job Hunting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">DETE Permits Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.citizensinformation.ie/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Citizens Information Ireland</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.irishjobs.ie/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IrishJobs.ie</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.idaireland.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IDA Ireland (Company Insights)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
