import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, ChevronRight, AlertCircle, Activity, Search, Compass } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaProcessingTimes() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Canada Visa Processing Times 2026 in Pakistan | Express Entry & PR"
        description="Current IRCC processing times for Pakistani applicants. Express Entry, PNP, Spousal Sponsorship, and Visit Visas."
        canonicalPath="/migrate/canada/processing-times"
      />
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate/canada" className="inline-flex items-center text-rose-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Canada Migration
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Processing Times</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Estimated wait times for common Canadian PR applications from Pakistan, tracking methods, and delay protocols.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Disclaimer & Dynamic Timelines
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               The times below are historical averages. IRCC updates processing times weekly based on their current backlog. The time starts on the day IRCC receives your complete application and ends when they make a final decision.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Current Estimated Timelines</h2>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                     <tr className="border-b-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                        <th className="p-4 text-slate-900 dark:text-white font-semibold rounded-tl-xl">Immigration Stream</th>
                        <th className="p-4 text-slate-900 dark:text-white font-semibold">Estimated Time</th>
                        <th className="p-4 text-slate-900 dark:text-white font-semibold rounded-tr-xl">Notes</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-slate-700 dark:text-slate-300">
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-white">Express Entry (Federal Skilled Worker)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-3 py-1 rounded-full font-semibold">
                            <Clock className="w-4 h-4 mr-1" /> ~5 to 6 Months
                          </span>
                        </td>
                        <td className="p-4">Fastest pathway. Most applications finalized within 6 months.</td>
                     </tr>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-white">Provincial Nominee Program (Express Entry Linked)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-3 py-1 rounded-full font-semibold">
                            <Clock className="w-4 h-4 mr-1" /> ~6 Months
                          </span>
                        </td>
                        <td className="p-4">Starts AFTER receiving the provincial nomination (which takes 2-4 months itself).</td>
                     </tr>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-white">Provincial Nominee Program (Base/Paper)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 px-3 py-1 rounded-full font-semibold">
                            <Clock className="w-4 h-4 mr-1" /> 11 to 14 Months
                          </span>
                        </td>
                        <td className="p-4">Much slower as it is processed manually directly by IRCC.</td>
                     </tr>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-white">Family Sponsorship (Spouse outside Canada)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 px-3 py-1 rounded-full font-semibold">
                            <Clock className="w-4 h-4 mr-1" /> 10 to 14 Months
                          </span>
                        </td>
                        <td className="p-4">Applications from Pakistan routed to local visa offices (e.g., London or Abu Dhabi) based on volume.</td>
                     </tr>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-white">Atlantic Immigration Program (AIP)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full font-semibold">
                            <Clock className="w-4 h-4 mr-1" /> 6 to 12 Months
                          </span>
                        </td>
                        <td className="p-4">Processing happens after Employer Endorsement is secured.</td>
                     </tr>
                     <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-white">Visitor Visa (from Pakistan)</td>
                        <td className="p-4">
                          <span className="inline-flex items-center bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-400 px-3 py-1 rounded-full font-semibold">
                            <Clock className="w-4 h-4 mr-1" /> 30 to 90 Days
                          </span>
                        </td>
                        <td className="p-4">Highly variable. Often delayed based on summer peak volume.</td>
                     </tr>
                  </tbody>
               </table>
             </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <Activity className="w-64 h-64 text-rose-500" />
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div>
                 <h2 className="text-3xl font-display font-bold mb-6 flex items-center">
                   <AlertCircle className="w-8 h-8 mr-3 text-rose-500" /> Security Screenings
                 </h2>
                 <p className="text-slate-300 leading-relaxed mb-4">
                   Many applicants applying from Pakistan (especially males in STEM, military, or government sectors) may encounter extended, unexplained delays in their application processing. This is commonly known as <strong>Comprehensive Security Screening</strong> (often referred to under Section 34 of the IRPA).
                 </p>
                 <p className="text-slate-300 leading-relaxed">
                   During this time, the application appears "stuck" at the background check stage. These screenings are conducted by the CBSA and CSIS. Unfortunately, IRCC cannot speed up this process, and applications can sometimes be delayed for 6 to 18 additional months.
                 </p>
              </div>

              <div>
                 <h2 className="text-2xl font-bold mb-6">Factors Affecting Timelines</h2>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <span className="bg-rose-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">1</span>
                     <p className="text-slate-300 text-sm">Incomplete applications or poor quality scans causing officers to request additional documents (ADR).</p>
                   </li>
                   <li className="flex items-start">
                     <span className="bg-rose-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">2</span>
                     <p className="text-slate-300 text-sm">You have lived in many different countries, making background checks take considerably longer.</p>
                   </li>
                   <li className="flex items-start">
                     <span className="bg-rose-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">3</span>
                     <p className="text-slate-300 text-sm">Volume of applications currently assigned to the local visa office (like the London, Abu Dhabi, or Ankara VO).</p>
                   </li>
                 </ul>
              </div>
           </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold flex items-center text-slate-900 dark:text-white mb-4">
                <Search className="w-5 h-5 text-emerald-500 mr-2" /> How to Track Application
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 list-disc pl-5">
                <li><strong>IRCC Secure Account:</strong> Check the online portal where you submitted your documents. It shows stages like Medical Passed, Biometrics Completed, etc.</li>
                <li><strong>Application Status Tracker:</strong> For family sponsorship and some Express Entry applications, there is a dedicated modern web tracker available.</li>
                <li><strong>GCMS Notes:</strong> If your application is delayed significantly, you can apply under the Access to Information Act for GCMS notes. These are the detailed officer notes on your file. Cost is $5 CAD but requires a person inside Canada to request them.</li>
              </ul>
           </div>
           
           <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold flex items-center text-slate-900 dark:text-white mb-4">
                <Compass className="w-5 h-5 text-blue-500 mr-2" /> What to do if Delayed
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 list-disc pl-5">
                <li><strong>IRCC Webform:</strong> Submit an official inquiry through the IRCC Webform if your application has exceeded the standard processing time.</li>
                <li><strong>Update Documents:</strong> If a document expires (like a passport) during a long delay, proactively upload the new one via Webform.</li>
                <li><strong>MP Contact:</strong> If your sponsor is in Canada, their local Member of Parliament (MP) can contact IRCC on their behalf to inquire about the delay.</li>
              </ul>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Tracking Links</h2>
          <div className="space-y-3">
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Official Processing Times Tool</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://ircc-tracker-suivi.apps.cic.gc.ca/en" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Application Tracker Sign-in</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Webform Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
