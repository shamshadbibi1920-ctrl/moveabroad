import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, ChevronRight, AlertTriangle, FileCheck2, Globe2, Clock, Banknote, Briefcase } from 'lucide-react';

export default function UsaEb2Niw() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <img src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=80" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover" alt="USA" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-red-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">USA EB-2 NIW (National Interest Waiver)</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Get a US Green Card without a job offer or labor certification.</p>
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
               <Briefcase className="w-8 h-8 mr-3 text-red-500" /> What is EB-2 NIW?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The EB-2 NIW (National Interest Waiver) allows foreign workers to self-petition for a US Green Card, completely bypassing the standard PERM labor certification and employer sponsorship requirement. This means <strong>no US job offer is needed.</strong>
            </p>
            <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Who Qualifies? (Must meet ONE of below)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-1 rounded mr-3 mt-0.5"><CheckCircle className="w-4 h-4" /></span>
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block">Advanced Degree</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Master's or PhD, OR a Bachelor's degree followed by 5 years of progressive post-degree experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-1 rounded mr-3 mt-0.5"><CheckCircle className="w-4 h-4" /></span>
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block">Exceptional Ability</strong>
                    <p className="text-sm text-slate-600 dark:text-slate-400">A degree of expertise significantly above that ordinarily encountered in the sciences, arts, or business (proven by meeting at least 3 out of 6 USCIS criteria).</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">The Three-Prong Dhanasar Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Globe2 className="w-32 h-32" />
               </div>
               <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4 relative z-10">1. Substantial Merit & National Importance</h3>
               <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed relative z-10">Your proposed endeavor must have substantial merit and national importance to the US. What counts? Fields like healthcare research, STEM technologies, critical infrastructure, entrepreneurship, and education often automatically meet this standard.</p>
             </div>
             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Briefcase className="w-32 h-32" />
               </div>
               <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4 relative z-10">2. Well Positioned</h3>
               <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed relative z-10">You must prove you are well positioned to advance the endeavor. This is shown through your track record: peer-reviewed publications, patents, awards, high citations, notable success in business, and evidence of higher salary compared to peers.</p>
             </div>
             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <ShieldCheck className="w-32 h-32" />
               </div>
               <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4 relative z-10">3. Waiver Benefit</h3>
               <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed relative z-10">It must be beneficial to the USA to waive the standard job offer and PERM process. You must show that your contributions are so significant that the US shouldn't wait for your potential employer to test the local labor market.</p>
             </div>
          </div>
        </section>

        <section>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Best Professions for Pakistani Applicants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Doctors / Physicians</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Can use the special Physician NIW if committing to work 5 years in an underserved US area (USMLE pathway essential).</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">IT Professionals</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Ideal if working on critical tech (AI, cybersecurity). Patents, high salaries, or GitHub open-source impact helps immensely.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Researchers & Academics</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Highly favored. Requires strong citation counts, high h-index, and published peer-reviewed papers globally.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Engineers</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Civil/Structural or Electrical engineers, especially if holding structural licenses and working on significant infrastructure.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Scientists</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Substantial merit easily proven for critical sciences (biotech, chemistry) through strong publication and grant history.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <FileCheck2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10">Step-by-Step Application Process</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-red-500">Step 1</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Build your Evidence Portfolio (6-12 months)</h4>
                  <p className="text-slate-400">Gather degrees, get them evaluated, secure recommendation letters, and organize publications/accolades.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-red-500">Step 2</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Hire Attorney (Optional but Recommended)</h4>
                  <p className="text-slate-400">Hire an experienced US immigration attorney to draft the legal petition and frame your Dhanasar arguments, or self-petition if confident.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-red-500">Step 3</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">File I-140 Petition</h4>
                  <p className="text-slate-400">Submit the I-140 to USCIS. You can use Premium Processing ($2,805) for a decision within 45 days.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-red-500">Step 4</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Wait for Priority Date</h4>
                  <p className="text-slate-400">Once approved, your 'Priority Date' (the date you filed I-140) must become "current" on the Visa Bulletin before you can get the Green Card.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-red-500">Step 5</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Consular Processing or I-485</h4>
                  <p className="text-slate-400">If in Pakistan, you will go through Consular Processing at the US Embassy in Islamabad. If already in the US legally, file I-485 to adjust status.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-red-500">Step 6</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Green Card Issued</h4>
                  <p className="text-slate-400">Attend interview and medical exams, and receive your US Permanent Residency.</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-3" /> Priority Date Backlog Warning for Pakistani Nationals
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              In recent years, the EB-2 category has seen significant backlogs globally. Pakistani applicants fall under the "Rest of the World" (or sometimes grouped with India/China in backlog reports if demand spikes) category. Even if your <strong>I-140 is approved in 45 days</strong> via premium processing, you cannot apply for the actual Green Card until your <strong>Priority Date is current</strong> according to the State Department's Visa Bulletin. This wait can add several months or even years to the timeline. Check the Visa Bulletin monthly.
            </p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Evidence Checklist</h2>
               <ul className="space-y-4">
                 <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">HEC attested degrees evaluated by a US firm (e.g., WES, WES equivalent) for US equivalence.</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Research papers, publications, and citations count (Google Scholar).</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">4-6 targeted reference letters from independent experts (preferably US-based).</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Proof of salary significantly above peers in your region.</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Media coverage or national/international awards.</span>
                 </li>
                 <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Patents or notable projects emphasizing economic impact.</span>
                 </li>
               </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <Banknote className="w-6 h-6 mr-3 text-emerald-500" /> Costs Breakdown
               </h2>
               <div className="space-y-4">
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">I-140 Filing Fee</span>
                   <span className="font-semibold text-slate-900 dark:text-white">$715</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Premium Processing (Optional, 45-days)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">$2,805</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Attorney Fees (Typical)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">$5,000 - $12,000</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Consular Processing (DS-260)</span>
                   <span className="font-semibold text-slate-900 dark:text-white">$345</span>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700">
                   <span className="text-slate-600 dark:text-slate-400 text-sm">Immigrant Fee & Medicals</span>
                   <span className="font-semibold text-slate-900 dark:text-white">~$500+</span>
                 </div>
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
             <a href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">USCIS EB-2 NIW Overview</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">State Department Visa Bulletin</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">USCIS Dhanasar Framework Policy</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}
