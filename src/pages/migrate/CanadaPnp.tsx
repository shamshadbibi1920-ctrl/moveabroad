import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, MapPin, AlertCircle, FileText, CalendarClock } from 'lucide-react';
import ProvinceSelector from '../../components/ProvinceSelector';
import SEO from '../../components/SEO';

export default function CanadaPnp() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Canada Provincial Nominee Program (PNP) for Pakistanis 2026"
        description="Which Canadian province is best for Pakistani applicants? OINP, BC PNP, Alberta, Saskatchewan streams explained."
        canonicalPath="/migrate/canada/pnp"
      />
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate/canada" className="inline-flex items-center text-rose-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Canada Migration
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Provincial Nominee Program (PNP)</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Secure your PR by getting nominated by a specific Canadian province.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="flex-shrink-0">
             <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
          </div>
          <div>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-bold mb-1">
               Disclaimer & Warning
             </p>
             <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
               Immigration laws change frequently. PNP streams open and close frequently without notice. Always check official provincial websites for current availability. We are an informational platform, not an immigration agency.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">What is the Provincial Nominee Program?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The PNP allows Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and who are interested in settling in a particular province. Because each province has its own economic needs, they select immigrants who can fill local labor shortages.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              For Pakistani applicants with lower CRS scores (under 470), a PNP is often the best and sometimes only viable pathway to Canadian Permanent Residency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800">
                 <h3 className="font-bold text-xl text-rose-800 dark:text-rose-400 mb-3 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" /> Enhanced PNP (Express Entry Linked)
                 </h3>
                 <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                   These streams are aligned with the federal Express Entry system. You must have an active Express Entry profile.
                 </p>
                 <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-sm font-semibold text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-700">
                   Advantage: Adds exactly 600 points to your CRS score, guaranteeing an ITA in the next draw. Faster processing (approx. 6 months).
                 </div>
               </div>
               <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                 <h3 className="font-bold text-xl text-blue-800 dark:text-blue-400 mb-3 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" /> Base PNP (Direct to Province)
                 </h3>
                 <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                   These streams are not linked to Express Entry. You apply directly to the province first, then to IRCC manually (paper-based or separate portal).
                 </p>
                 <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-700">
                   Advantage: Often have lower language or education requirements. Processing is slower (12-18 months).
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section>
           <ProvinceSelector />
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Detailed Province Guide</h2>

          {/* OINP */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
             <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
                  <MapPin className="w-6 h-6 text-rose-500 mr-2" /> Ontario Immigrant Nominee Program (OINP)
                </h3>
             </div>
             <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">The most popular province for Pakistanis due to Toronto and Ottawa being major tech, finance, and business hubs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Available Streams:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li><strong>Human Capital Priorities Stream</strong> (Express Entry linked, highly popular)</li>
                       <li>Employer Job Offer Stream (Foreign worker)</li>
                       <li>International Student Stream</li>
                       <li>In-Demand Skills Stream</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Highlights:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li><strong>In-demand for:</strong> IT professionals, Finance, Engineering, Healthcare.</li>
                       <li><strong>Requirements:</strong> CRS score usually needs to be 460+ for Human Capital.</li>
                       <li><strong>Processing time:</strong> 60-90 days for nomination.</li>
                     </ul>
                   </div>
                </div>
                <a href="https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp" target="_blank" rel="noreferrer" className="text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline">Official OINP Portal &rarr;</a>
             </div>
          </div>

          {/* BC PNP */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
             <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
                  <MapPin className="w-6 h-6 text-rose-500 mr-2" /> British Columbia PNP (BC PNP)
                </h3>
             </div>
             <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">Excellent for tech workers and healthcare professionals targeting Vancouver and surrounding areas.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Available Streams:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li>Skills Immigration (Express Entry BC)</li>
                       <li>Entrepreneur Immigration</li>
                       <li>International Graduate Stream</li>
                       <li>Health Authority Stream</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Highlights:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li><strong>BC Tech Pilot:</strong> Extremely popular and fast-tracked for IT professionals. Requires a valid job offer in BC.</li>
                       <li><strong>Scoring:</strong> Uses its own point system (SIRS) before nomination.</li>
                     </ul>
                   </div>
                </div>
                <a href="https://www.welcomebc.ca/Immigrate-to-B-C/B-C-Provincial-Nominee-Program" target="_blank" rel="noreferrer" className="text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline">Official BC PNP Portal &rarr;</a>
             </div>
          </div>

          {/* AINP */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
             <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
                  <MapPin className="w-6 h-6 text-rose-500 mr-2" /> Alberta Advantage Immigration Program (AAIP)
                </h3>
             </div>
             <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">Known for lower cost of living and strong oil, gas, and agriculture sectors.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Available Streams:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li>Alberta Opportunity Stream</li>
                       <li>Alberta Express Entry Stream</li>
                       <li>Rural Renewal Stream</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Highlights:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li><strong>In-demand for:</strong> Engineers (oil/gas), healthcare workers, IT, skilled trades.</li>
                       <li><strong>Requirements:</strong> Sometimes selects candidates from Express Entry pool with scores as low as 300, provided they have family or a job offer in Alberta.</li>
                     </ul>
                   </div>
                </div>
                <a href="https://www.alberta.ca/alberta-advantage-immigration-program" target="_blank" rel="noreferrer" className="text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline">Official AAIP Portal &rarr;</a>
             </div>
          </div>

          {/* SINP */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
             <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
                  <MapPin className="w-6 h-6 text-rose-500 mr-2" /> Saskatchewan Immigrant Nominee Program (SINP)
                </h3>
             </div>
             <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">One of the most accessible PNPs for candidates with lower language scores or older age.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Available Streams:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li>International Skilled Worker (Express Entry & Occupation In-Demand)</li>
                       <li>Saskatchewan Experience Category</li>
                       <li>Entrepreneur and Farm Category</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Highlights:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li><strong>Advantage:</strong> The Occupation In-Demand stream sometimes does not require a job offer or an Express Entry profile.</li>
                       <li><strong>Occupations:</strong> Has a specific list of excluded occupations; if yours is not on the excluded list, you may apply.</li>
                     </ul>
                   </div>
                </div>
                <a href="https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program" target="_blank" rel="noreferrer" className="text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline">Official SINP Portal &rarr;</a>
             </div>
          </div>

          {/* MPNP */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
             <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
                  <MapPin className="w-6 h-6 text-rose-500 mr-2" /> Manitoba Provincial Nominee Program (MPNP)
                </h3>
             </div>
             <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">Very popular for applicants who have friends or distant relatives already established in Manitoba.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Available Streams:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li>Skilled Workers in Manitoba</li>
                       <li>Skilled Workers Overseas</li>
                       <li>International Education Stream</li>
                       <li>Business Investor Stream</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Highlights:</h4>
                     <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                       <li><strong>Advantage:</strong> Lower CRS requirements. Having a strong connection to Manitoba (friends, family, past work) gives massive points.</li>
                       <li><strong>Community:</strong> Large Pakistani community in Winnipeg.</li>
                     </ul>
                   </div>
                </div>
                <a href="https://immigratemanitoba.com/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline">Official MPNP Portal &rarr;</a>
             </div>
          </div>

          {/* Grid for Smaller Provinces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
               <h3 className="text-xl font-bold flex items-center text-slate-900 dark:text-white mb-3">
                 <MapPin className="w-5 h-5 text-rose-500 mr-2" /> Nova Scotia
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Labour Market Priorities, Skilled Worker, and Physician streams. Great Atlantic advantage with lower competition. Often targets nurses and early childhood educators.</p>
               <a href="https://novascotiaimmigration.com/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-rose-600 hover:underline">Nova Scotia Portal &rarr;</a>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
               <h3 className="text-xl font-bold flex items-center text-slate-900 dark:text-white mb-3">
                 <MapPin className="w-5 h-5 text-rose-500 mr-2" /> New Brunswick
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Express Entry Labour Market and Skilled Workers streams. Often hosts international recruitment events overseas to issue ITAs directly.</p>
               <a href="https://www.welcomenb.ca/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-rose-600 hover:underline">New Brunswick Portal &rarr;</a>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
               <h3 className="text-xl font-bold flex items-center text-slate-900 dark:text-white mb-3">
                 <MapPin className="w-5 h-5 text-rose-500 mr-2" /> Prince Edward Island
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Expression of Interest system. Smaller province, meaning a much more personalized immigration approach, but smaller job market.</p>
               <a href="https://www.princeedwardisland.ca/en/topic/immigrate" target="_blank" rel="noreferrer" className="text-xs font-semibold text-rose-600 hover:underline">PEI PNP Portal &rarr;</a>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
               <h3 className="text-xl font-bold flex items-center text-slate-900 dark:text-white mb-3">
                 <MapPin className="w-5 h-5 text-rose-500 mr-2" /> Newfoundland & Labrador
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Skilled Worker category requires a guaranteed job offer from a local employer or current employment in the province.</p>
               <a href="https://www.gov.nl.ca/immigration/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-rose-600 hover:underline">Newfoundland Portal &rarr;</a>
            </div>
          </div>

        </section>

        {/* Comparison Table */}
        <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-x-auto">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Province Comparison at a Glance</h2>
           <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                 <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                    <th className="p-3 text-slate-900 dark:text-white font-semibold">Province</th>
                    <th className="p-3 text-slate-900 dark:text-white font-semibold">Best For</th>
                    <th className="p-3 text-slate-900 dark:text-white font-semibold">Ease of Entry (from outside)</th>
                    <th className="p-3 text-slate-900 dark:text-white font-semibold">Cost of Living</th>
                    <th className="p-3 text-slate-900 dark:text-white font-semibold">Pakistani Community</th>
                 </tr>
              </thead>
              <tbody className="text-sm text-slate-700 dark:text-slate-300">
                 <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-semibold">Ontario</td>
                    <td className="p-3">IT, Finance, High CRS scorers</td>
                    <td className="p-3 text-amber-600 dark:text-amber-400">Hard (Needs High CRS)</td>
                    <td className="p-3">Very High</td>
                    <td className="p-3">Very Large</td>
                 </tr>
                 <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-semibold">British Columbia</td>
                    <td className="p-3">Tech workers, Healthcare</td>
                    <td className="p-3 text-amber-600 dark:text-amber-400">Hard (Often needs Job Offer)</td>
                    <td className="p-3">Very High</td>
                    <td className="p-3">Large</td>
                 </tr>
                 <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-semibold">Alberta</td>
                    <td className="p-3">Engineers, Trades</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">Medium (Random EE draws)</td>
                    <td className="p-3">Medium</td>
                    <td className="p-3">Medium/Large</td>
                 </tr>
                 <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-semibold">Saskatchewan</td>
                    <td className="p-3">Lower age/language scores</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">Easier (No job offer needed often)</td>
                    <td className="p-3">Low</td>
                    <td className="p-3">Small/Medium</td>
                 </tr>
                 <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-semibold">Manitoba</td>
                    <td className="p-3">Those with friends/family there</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">Easier (If connections exist)</td>
                    <td className="p-3">Low</td>
                    <td className="p-3">Medium</td>
                 </tr>
                 <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-semibold">Atlantic Provinces</td>
                    <td className="p-3">Nurses, Hospitality, Trades</td>
                    <td className="p-3 text-blue-600 dark:text-blue-400">Requires specific targeted skills</td>
                    <td className="p-3">Low</td>
                    <td className="p-3">Small</td>
                 </tr>
              </tbody>
           </table>
        </section>

        {/* Step by Step & Tips */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <CalendarClock className="w-48 h-48" />
              </div>
              <h2 className="text-2xl font-bold mb-8 relative z-10">Step-by-Step PNP Process</h2>
              <div className="space-y-4 relative z-10 text-sm">
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 1:</span><p className="text-slate-300">Check eligibility for target province.</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 2:</span><p className="text-slate-300">Create Express Entry profile (for enhanced streams).</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 3:</span><p className="text-slate-300">Submit Expression of Interest (EOI) to specific province portal.</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 4:</span><p className="text-slate-300">Receive an invitation from the province & submit full provincial application.</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 5:</span><p className="text-slate-300">Receive provincial nomination certificate.</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 6:</span><p className="text-slate-300">Accept nomination in Express Entry (600 CRS points added automatically).</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 7:</span><p className="text-slate-300">Receive ITA from IRCC in the next draw.</p></div>
                <div className="flex"><span className="text-emerald-400 font-bold w-16 shrink-0">Step 8:</span><p className="text-slate-300">Submit full PR application within 60 days. Wait 6 months for PR approval.</p></div>
              </div>
              <p className="text-emerald-400 font-semibold mt-6 text-sm relative z-10">Total Timeline: Approx 12 - 18 months.</p>
           </div>

           <div className="space-y-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                 <h3 className="font-bold text-lg mb-3 text-emerald-800 dark:text-emerald-400">Tips for Pakistani Applicants</h3>
                 <ul className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300 list-disc pl-5">
                   <li><strong>Research the local job market:</strong> Don't just apply anywhere. If you are an IT worker, moving to a rural farming province will hurt your long-term career.</li>
                   <li><strong>Apply to multiple:</strong> You can submit EOIs to multiple provinces simultaneously to increase your chances.</li>
                   <li><strong>Network:</strong> Join Pakistani community Facebook groups (e.g., "Pakistanis in Calgary", "Winnipeg Pakistanis"). They often have accurate on-the-ground job market info.</li>
                   <li><strong>Beware of scams:</strong> No consultant can "guarantee" a job offer for a PNP. Always verify LMIA documents.</li>
                 </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                 <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white flex items-center">
                   <FileText className="w-5 h-5 mr-2 text-rose-500" /> Required Documents
                 </h3>
                 <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                   <li>• Valid passport</li>
                   <li>• Express Entry profile number / Job Seeker Validation Code</li>
                   <li>• Educational credentials (WES evaluated)</li>
                   <li>• Detailed work experience letters</li>
                   <li>• Valid IELTS/CELPIP results</li>
                   <li>• Job offer letter (if applying under an employer stream)</li>
                   <li>• Proof of settlement funds (bank statements)</li>
                   <li>• Police clearance certificates</li>
                   <li className="text-xs italic mt-2">Note: Each province may require additional specific forms (e.g., settlement plans).</li>
                 </ul>
              </div>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Central Resources</h2>
          <div className="space-y-3">
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Central PNP Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">How the PNP system works (IRCC)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
