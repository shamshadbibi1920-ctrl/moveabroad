import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Heart, Users, Calculator, AlertCircle, FileText, CalendarClock } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaFamilySponsorship() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Canada Family Sponsorship 2026 | Sponsor Spouse & Parents from Pakistan"
        description="How to sponsor your spouse, children or parents from Pakistan to Canada. Income requirements, Super Visa, and processing times."
        canonicalPath="/migrate/canada/family-sponsorship"
      />
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate/canada" className="inline-flex items-center text-rose-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Canada Migration
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Family Sponsorship</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Reunite with your loved ones in Canada. A comprehensive guide for Pakistani sponsors and applicants.</p>
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
               Immigration laws change frequently. Family Sponsorship rules, especially income requirements (MNI) and Parent/Grandparent intake procedures, change annually. Always verify with official government sources.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Who Can Be Sponsored?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              If you are a Canadian citizen or permanent resident, you can sponsor specific relatives to come to Canada as permanent residents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800">
                <Heart className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="text-xl font-bold text-rose-800 dark:text-rose-400 mb-3">Spouse & Partner</h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li>Spouse (legally married, requires Nikah Nama / Marriage Certificate)</li>
                  <li>Common-law partner (living together for 12+ consecutive months)</li>
                  <li>Conjugal partner (cannot marry or live together due to exceptional legal/social barriers)</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <Users className="w-8 h-8 text-blue-500 mb-4" />
                 <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-3">Children & Parents</h3>
                 <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                   <li>Dependent children (under 22 years old and unmarried)</li>
                   <li>Adopted children</li>
                   <li>Parents and Grandparents (via the lottery-based PGP program)</li>
                   <li>Orphaned close relatives (under 18 and unmarried) in very specific cases</li>
                 </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">Sponsor Eligibility</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
               <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                 To become a sponsor from Canada, you must meet strict federal requirements. Sponsorship is a legal undertaking where you must financially support your sponsored family members.
               </p>
               <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Must be a Canadian Citizen, Permanent Resident, or registered Indian.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Must be at least 18 years old.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> If you are a PR, you MUST be living in Canada. (Citizens can live outside Canada but must prove they will return when the sponsored person lands).</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Must not be receiving social assistance (welfare) for reasons other than a disability.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Must not be bankrupt, in prison, or under a removal order.</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Must pledge a 3 to 20-year legal undertaking to provide basic needs.</li>
               </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white flex items-center border-b border-slate-200 dark:border-slate-700 pb-3">
                 <Calculator className="w-5 h-5 mr-2 text-rose-500" /> Minimum Necessary Income (MNI)
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                 For spousal sponsorship, there is technically no strict MNI, but you must prove you can support them. For Parents and Grandparents (PGP), you must meet the MNI + 30% for the past 3 consecutive years.
               </p>
               <table className="w-full text-left border-collapse text-sm mb-4">
                  <thead>
                     <tr className="border-b-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                        <th className="p-2 font-semibold">Family Size (incl. sponsored)</th>
                        <th className="p-2 font-semibold">Estimated PGP MNI (+30%)</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="p-2">2 persons</td>
                        <td className="p-2 font-mono text-emerald-600 dark:text-emerald-400">~$44,500 CAD</td>
                     </tr>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="p-2">3 persons</td>
                        <td className="p-2 font-mono text-emerald-600 dark:text-emerald-400">~$54,700 CAD</td>
                     </tr>
                     <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="p-2">4 persons</td>
                        <td className="p-2 font-mono text-emerald-600 dark:text-emerald-400">~$66,400 CAD</td>
                     </tr>
                     <tr className="hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="p-2">5 persons</td>
                        <td className="p-2 font-mono text-emerald-600 dark:text-emerald-400">~$75,300 CAD</td>
                     </tr>
                  </tbody>
               </table>
               <div className="text-xs text-slate-500 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 p-3 rounded-lg">
                 Note: MNI changes every year. You must use the official CRA Notice of Assessment to prove income.
               </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <CalendarClock className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center">
             <CalendarClock className="w-6 h-6 mr-3 text-emerald-400" />
             Step-by-Step Spousal Sponsorship Process
           </h2>
           <div className="space-y-6 relative z-10 max-w-3xl">
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Step 1</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Check Eligibility & Forms</h4>
                 <p className="text-slate-400 text-sm">Download the current application package. Ensure your Pakistani Nikah Nama is translated and securely registered.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Step 2</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Gather the Documents</h4>
                 <p className="text-slate-400 text-sm">Collect proof of relationship: wedding photos from Pakistan, chat logs, call records, joint bank accounts, and letters of support.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Step 3</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Pay the Fees</h4>
                 <p className="text-slate-400 text-sm">Pay the sponsorship fee, principal applicant fee, and Right of Permanent Residence Fee (approx ~$1,080 CAD total).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Step 4</div>
               <div className="pl-6 border-l border-slate-700 pb-4">
                 <h4 className="font-bold text-lg mb-1">Submit Application online</h4>
                 <p className="text-slate-400 text-sm">Submit the complete package via the IRCC Permanent Residence Portal.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Step 5</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg text-white mb-1">Medicals & Biometrics</h4>
                 <p className="text-slate-400 text-sm">IRCC will request the sponsored spouse in Pakistan to give biometrics (at VFS) and do a medical exam via a panel physician.</p>
               </div>
             </div>
           </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white mb-6">
                <AlertCircle className="w-6 h-6 text-rose-500 mr-2" /> Common Refusal Reasons
              </h3>
              <ul className="space-y-4">
                <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-1">Marriages of Convenience</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">The officer believes the marriage was entered into primarily to acquire Canadian PR, not a genuine relationship.</p>
                </li>
                <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-1">Insufficient Proof of Relationship</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Lack of communication history, very few photos, or inability to answer simple questions during an interview.</p>
                </li>
                <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-1">Financial Ineligibility</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">For Parents/Grandparents, failing to meet the strict MNI + 30% requirements via Canada Revenue Agency NOA.</p>
                </li>
              </ul>
           </div>
           
           <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800 shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4">The Super Visa Alternative</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                Because the Parents and Grandparents Program (PGP) runs on a lottery system and invites very few people each year, most Canadians opt for the Super Visa instead.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5 mb-6">
                <li>Valid for up to 10 years (or passport expiry).</li>
                <li>Allows parents/grandparents to stay in Canada for up to <strong>5 years</strong> per visit without leaving.</li>
                <li>Requires the Canadian sponsor to meet minimum income requirements.</li>
                <li>Requires purchasing private Canadian medical insurance of at least $100,000 coverage.</li>
                <li>Applications for Pakistanis usually process much faster than PGP.</li>
              </ul>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html" target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 underline">Read more about the Super Visa</a>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Forms & Links</h2>
          <div className="space-y-3">
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Family Sponsorship Guide</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Sponsor your Spouse, Partner or Child</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Sponsor Parents and Grandparents</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
