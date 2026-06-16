import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, MapPin, Search, GraduationCap, Briefcase, FileCheck2, Globe2, AlertTriangle, Building2, DollarSign } from 'lucide-react';
import SEO from '../../components/SEO';

export default function GermanyMigrate() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Move to Germany from Pakistan 2026 — EU Blue Card, Opportunity Card"
        description="How to migrate to Germany from Pakistan. EU Blue Card, Chancenkarte, Job Seeker Visa, salary requirements and step by step process."
        canonicalPath="/migrate/germany"
      />
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate" className="inline-flex items-center text-rose-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Migrate
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Migrate to Germany</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Comprehensive guide to the EU Blue Card, Opportunity Card, and Skilled Immigration Act for Pakistani professionals.</p>
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
               Immigration laws and salary thresholds change frequently. The information below is for educational purposes. Always verify the latest requirements via the German Embassy in Pakistan and the official "Make it in Germany" portal.
             </p>
          </div>
        </div>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> EU Blue Card (Blaue Karte EU)
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The EU Blue Card is the premier residence title for highly qualified academics from outside the EU who wish to work in Germany.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Eligibility & Benefits
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li>Must have a recognized university degree (check anabin database).</li>
                  <li>Must have a concrete job offer in Germany.</li>
                  <li>Fast track to Permanent Settlement Permit (Niederlassungserlaubnis) in 21-33 months.</li>
                  <li>Spouses can join immediately with full work rights (no A1 German required initially).</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-3 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" /> Salary Thresholds (2024 updates)
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                  <li><strong>Standard Occupations:</strong> Minimum annual gross salary of approx. €45,300 (lowered significantly under new rules).</li>
                  <li><strong>In-Demand Professions (MINT):</strong> Mathematics, IT, Natural Sciences, Engineering, and Healthcare. Lower salary threshold of approx. €41,041.</li>
                  <li>IT Specialists without a degree but with 3 years of experience are now eligible.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Skilled Immigration Act & Opportunity Card</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                 <Search className="w-6 h-6 mr-3 text-rose-500" /> Chancenkarte (Opportunity Card)
               </h3>
               <p className="text-slate-700 dark:text-slate-300 mb-6">
                 Introduced in June 2024, the Chancenkarte is a points-based job seeker visa that allows you to move to Germany for up to 1 year to look for a job. You can work part-time (up to 20 hrs/week) while searching.
               </p>
               <h4 className="font-bold text-lg mb-3 dark:text-slate-200">How to qualify (Points System)</h4>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">You need at least 6 points. Points are awarded for:</p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Partial recognition of foreign qualifications (4 points)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> 5 years of professional experience (3 points)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> German language skills B1 (2 points), A2 (1 point)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> English language C1 or higher (1 point)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Under 35 years of age (2 points), 35-40 years (1 point)</li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Previous legal stay in Germany for 6 months (1 point)</li>
               </ul>
               <p className="text-xs text-slate-500 mt-4 italic">Note: You must also prove you can support yourself financially via a Blocked Account (Sperrkonto) with approx. €1,027 per month.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                 <GraduationCap className="w-5 h-5 mr-2 text-blue-500" /> Recognition of Qualifications
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Your Pakistani degree must be recognized in Germany. The primary tool is the <strong>anabin</strong> database.</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                 <li>Your institution must be H+</li>
                 <li>If degree isn't listed, apply to ZAB for a Statement of Comparability.</li>
                 <li>Regulated professions (Doctors, Nurses) need formal approbation (Anerkennung).</li>
               </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                 <Globe2 className="w-5 h-5 mr-2 text-blue-500" /> German Language Requirements
               </h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">While not always strictly required for IT, German is essential for daily life.</p>
               <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-4 space-y-1">
                 <li><strong>IT / Corporates:</strong> Often working in English is fine. No German certificate needed for Blue Card.</li>
                 <li><strong>Healthcare:</strong> B2 German mandatory for nurses and doctors (Fachsprachenprüfung).</li>
                 <li><strong>PR Pathway:</strong> B1 German speeds up PR to 21 months under Blue Card.</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <FileCheck2 className="w-64 h-64" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10">Step-by-Step Application Process (from Pakistan)</h2>
           <div className="space-y-6 text-sm max-w-3xl relative z-10">
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 1</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Degree Recognition & Translation</h4>
                  <p className="text-slate-400">Check anabin, or send documents to ZAB. Translate Nikah Nama and academic docs via sworn translator and attest from German Embassy.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 2</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Land a Job or Apply for Chancenkarte</h4>
                  <p className="text-slate-400">Secure an employment contract meeting standard thresholds, OR open a Blocked Account (Sperrkonto, e.g., Expatrio, Coracle) if applying for the job seeker path.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 3</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Book Embassy Appointment</h4>
                  <p className="text-slate-400">Book national visa (D-Visa) appointment via VFS Global or German Embassy Islamabad/Consulate Karachi. Wait times can vary.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-16 shrink-0 font-bold text-emerald-400">Step 4</div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Arrival & Ausländerbehörde</h4>
                  <p className="text-slate-400">Arrive in Germany, do mandatory city registration (Anmeldung), and convert your entry visa into a residence permit at the local immigration office (Ausländerbehörde).</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://www.make-it-in-germany.com/en/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Make it in Germany (Official Portal)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://pakistan.diplo.de/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">German Embassy Islamabad</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://anabin.kmk.org/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Anabin Database (Degree Check)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.kmk.org/zab/central-office-for-foreign-education.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">ZAB (Statement of Comparability)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
