import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, AlertTriangle, Briefcase, CheckCircle, FileCheck2, Clock, Banknote } from 'lucide-react';

export default function UsaEb3() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate" className="inline-flex items-center text-red-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">USA EB-3 Visa</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Employment-based permanent residency via employer sponsorship.</p>
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
               Immigration laws change frequently. Always consult an authorized US immigration attorney and verify with official government sources before making any decisions. We are an informational platform, not an immigration agency.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-red-500" /> What is the EB-3 Visa?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The EB-3 is an employment-based US green card category requiring a full-time job offer and a <strong>PERM labor certification</strong> from the Department of Labor. The employer must prove there are no qualified, willing, and available US workers for the position.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
               <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
                 <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">1. Skilled Workers</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Jobs requiring a minimum of 2 years of training or experience. Must meet the requirements on the labor certification.</p>
               </div>
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                 <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">2. Professionals</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Jobs requiring at least a US bachelor's degree or its foreign equivalent (like HEC recognized degrees in Pakistan).</p>
               </div>
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">3. Unskilled Workers</h3>
                 <p className="text-slate-700 dark:text-slate-400 text-sm">Jobs requiring less than 2 years of training or experience. (Sometimes used by international students or manual labor).</p>
               </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why EB-3 Matters for Pakistanis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Healthcare Professionals</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Nurses and Physical Therapists are considered <strong>Schedule A</strong> occupations. This means they can completely skip the lengthy PERM labor certification process, saving 12-18 months of waiting time and thousands of dollars.</p>
                <p className="text-xs text-slate-500 font-bold">Pakistani Nurses need: NCLEX exam, CGFNS certification, IELTS/TOEFL, and a Visa Screen Certificate.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> IT & Engineering</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Software Engineers, Civil/Structural Engineers, and IT specialists working for US multinationals or securing direct sponsorship can use EB-3 to gain permanent residency, albeit subject to the full PERM process.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <FileCheck2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10">The Step-by-Step PERM Process</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 1</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Employer Files PERM (6-18 months)</h4>
                  <p className="text-slate-400">Employer tests the US labor market through specific advertising, then files ETA Form 9089 with the Department of Labor. <br/><span className="text-emerald-300 italic">*Schedule A Nurses bypass this step entirely.</span></p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 2</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">I-140 Petition Filing</h4>
                  <p className="text-slate-400">Once PERM is approved, the employer files the I-140 petition with USCIS. Premium Processing (15 days) is available.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 3</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Wait for Priority Date</h4>
                  <p className="text-slate-400">Your priority date (date PERM was filed) must be current on the Visa Bulletin before taking the next step. This is where backlogs occur.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 4</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Consular Processing or I-485</h4>
                  <p className="text-slate-400">Wait in Pakistan and apply via Consular Processing (DS-260) or apply for an Adjustment of Status (I-485) if legally residing in the USA.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 5</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Green Card Issued</h4>
                  <p className="text-slate-400">After biometrics, medicals, and interview, the green card is issued.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3" /> Priority Date Backlog Warning
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                The EB-3 category can face severe priority date backlogs. For Pakistani nationals ("Rest of World" category), the wait time from filing to getting a green card can be anywhere from <strong>3 to 7 years</strong> realistically. While your employer's I-140 may be approved quickly using premium processing, you must simply wait out the backlog until your priority date becomes "current" on the monthly Visa Bulletin.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <Banknote className="w-6 h-6 mr-3 text-emerald-500" /> Costs Breakdown
               </h2>
               <div className="space-y-4">
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">PERM Labor Cert Cost</span>
                   <span className="font-semibold text-slate-900 dark:text-white">Employer Must Pay</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">I-140 Filing Fee</span>
                   <span className="font-semibold text-slate-900 dark:text-white">$715</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Premium Processing (Optional)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">$2,805</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Consular Processing / Green Card</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~$845+</span>
                 </div>
                 <p className="text-xs text-slate-500 mt-2 italic">Note: By law, employers must pay all costs associated with the PERM labor certification process, including attorney fees for that portion.</p>
               </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 text-center">
            <h2 className="text-2xl font-bold mb-6">EB-2 NIW vs EB-3 Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-300">
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6 text-red-400 font-bold">EB-2 NIW</th>
                    <th className="py-4 px-6 text-emerald-400 font-bold">EB-3</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 text-white font-medium">Job Offer Required?</td>
                    <td className="py-4 px-6">No (Self-Petition)</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 text-white font-medium">PERM Labor Certification?</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">Yes (takes 6-18 months)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 text-white font-medium">Requirements</td>
                    <td className="py-4 px-6">Adv. Degree / Exceptional Ability & impact</td>
                    <td className="py-4 px-6">Bachelor's / Skilled / Unskilled experience</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 text-white font-medium">Who it suits</td>
                    <td className="py-4 px-6">Scholars, Experts, Entrepreneurs, Specialists</td>
                    <td className="py-4 px-6">Nurses (Schedule A), corporate employees</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-white font-medium">Cost bearer</td>
                    <td className="py-4 px-6">Applicant pays all fees</td>
                    <td className="py-4 px-6">Employer must pay PERM costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-third-preference-eb-3" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">USCIS EB-3 Overview</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.dol.gov/agencies/eta/foreign-labor/programs/permanent" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">DOL PERM Labor Cert</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">State Department Visa Bulletin</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.cgfns.org/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">CGFNS (Nurses)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
