import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO';

export default function AustraliaSkilledIndependent() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Australia Subclass 189 Skilled Independent Visa for Pakistanis"
        description="Complete guide to Australian 189 visa. Points calculator, occupation list, skills assessment from Pakistan, and step by step process."
        canonicalPath="/migrate/australia/189"
      />
      <div className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/migrate/australia" className="inline-flex items-center text-blue-400 hover:text-white mb-6 transition-colors font-medium">
             &larr; Back to Australia Migration
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Skilled Independent Visa (Subclass 189)</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Live and work anywhere in Australia as a permanent resident.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex items-start shadow-sm">
          <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-medium">
            Immigration laws change frequently. Always consult an authorized immigration consultant and verify with official government sources before making any decisions. We are an informational platform, not an immigration agency.
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">What is the 189 Visa?</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            The Skilled Independent visa (subclass 189) is a permanent visa for invited workers with skills the Australian government needs. You do not need a sponsor or nominator.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
             <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-300">Minimum Points Required</h3>
             <p className="text-slate-700 dark:text-slate-300">You must score at least <strong>65 points</strong>, but because it is highly competitive, invitations usually go to those with 85-90+ points.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Points Breakdown</h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
             <ul className="space-y-4">
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Age:</strong> Maximum 30 points (best age is 25-32 years). No points for 45+.
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">English Language:</strong> Competent English (IELTS 6) gives 0 points. Proficient (IELTS 7) gives 10. Superior (IELTS 8) gives 20 points.
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Skilled Employment:</strong> Max 15 points for overseas experience (8+ years).
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Educational Qualifications:</strong> PhD (20 pts), Bachelor/Master Degree (15 pts).
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Partner Skills:</strong> Single applicants or applicants with a skilled partner get 10 points. 
                  </div>
                </li>
             </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Skills Assessment</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">You must have a positive skills assessment for your occupation. Your occupation MUST be on the Medium and Long-term Strategic Skills List (MLTSSL).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Engineers</h4>
                <p className="text-sm text-slate-500">Engineers Australia</p>
             </div>
             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">IT Professionals</h4>
                <p className="text-sm text-slate-500">ACS</p>
             </div>
             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Healthcare</h4>
                <p className="text-sm text-slate-500">AHPRA / MedBA</p>
             </div>
             <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Accountants</h4>
                <p className="text-sm text-slate-500">CPAA / CA ANZ</p>
             </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Process & Timeline</h2>
          <ul className="space-y-4">
             {[
               'Check MLTSSL for your occupation.',
               'Complete Skills Assessment & IELTS/PTE.',
               'Submit Expression of Interest (EOI) via SkillSelect (must have 65+ points).',
               'Wait for Invitation to Apply (ITA).',
               'Apply for visa (Processing time: 8-14 months).'
             ].map((item, index) => (
                <li key={item} className="flex items-start">
                   <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200"><strong className="mr-1">Step {index + 1}:</strong>{item}</span>
                </li>
             ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Links</h2>
          <div className="space-y-3">
             <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Subclass 189 Visa Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://skillselect.gov.au/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">SkillSelect (Submit EOI)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}
