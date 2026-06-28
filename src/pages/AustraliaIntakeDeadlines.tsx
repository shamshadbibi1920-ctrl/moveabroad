import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, AlertTriangle, Clock, Target, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaIntakeDeadlines() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Australia University Intakes & Deadlines | MoveAbroad.pk"
        description="Learn about Semester 1 (Feb/Mar) and Semester 2 (July) intakes in Australia, application deadlines, and 2026 NPL cap implications."
        canonicalPath="/study/australia/intake-deadlines"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Clock Tower" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intake Deadlines</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Plan your application timeline for Australian universities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> 2026 NPL Cap Warning
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            Australia has introduced a National Planning Level (NPL) capping international student enrolments to 295,000 for 2026. This cap is distributed per institution. <strong>Apply as early as possible</strong> — if a university reaches its cap for the semester, they will defer offers to the following year. Do not wait until the application deadline to apply.
          </p>
        </div>

        {/* Main Intakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Semester 1 (Main Intake)</h2>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6 flex items-center">
              <Target className="w-4 h-4 mr-2" /> February / March
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 relative z-10 text-sm leading-relaxed">
              This is the primary intake for Australian universities. All programs, including specialized and competitive degrees (like Medicine, Dentistry, Engineering, Architecture), are open. Maximum scholarship opportunities are available.
            </p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <Clock className="w-5 h-5 text-blue-500 mr-4" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Application Opens</div>
                  <div className="text-sm text-slate-500">August - September (Previous Year)</div>
                </div>
              </div>
              <div className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <Clock className="w-5 h-5 text-red-500 mr-4" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">General Deadline</div>
                  <div className="text-sm text-slate-500">Late November - Early December</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Semester 2</h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-6 flex items-center">
              <Target className="w-4 h-4 mr-2" /> July / August
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 relative z-10 text-sm leading-relaxed">
              The second major intake. Most Business, IT, and Arts programs are available, though some highly sequential programs (like Nursing or Medicine) may only commence in Semester 1. Excellent option if you miss Semester 1 deadlines.
            </p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <Clock className="w-5 h-5 text-blue-500 mr-4" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Application Opens</div>
                  <div className="text-sm text-slate-500">February - March (Same Year)</div>
                </div>
              </div>
              <div className="flex items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <Clock className="w-5 h-5 text-red-500 mr-4" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">General Deadline</div>
                  <div className="text-sm text-slate-500">May - Early June (Same Year)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Planner */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Ideal Application Timeline (Semester 1 / Feb Intake)</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            {[
              {
                month: "July - August",
                title: "Research & English Test",
                desc: "Shortlist 3-5 universities. Take your IELTS/PTE exam (if not applying via MOI). Gather academic transcripts."
              },
              {
                month: "September - October",
                title: "Submit Applications",
                desc: "Apply to universities. Aim to submit right as portals open to beat the NPL caps and secure early conditional offers."
              },
              {
                month: "November",
                title: "Accept Offer & Pay Deposit",
                desc: "Receive unconditional offer. Accept it and pay the first semester tuition fee to receive your Confirmation of Enrolment (CoE)."
              },
              {
                month: "December",
                title: "Lodge Visa Application",
                desc: "Book your medical exam, arrange OSHC health insurance, and lodge your Subclass 500 visa application with Home Affairs."
              },
              {
                month: "January - February",
                title: "Visa Approval & Travel",
                desc: "Receive visa grant. Book flights, arrange accommodation, and travel to Australia 2-3 weeks before orientation week (O-Week) begins."
              }
            ].map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-emerald-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">{step.month}</span>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-indigo-500" /> Scholarship Deadlines
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              If you are aiming for prestigious government scholarships (like the Australia Awards) or competitive full-tuition university scholarships, deadlines are much earlier than general admission:
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-3 shrink-0"></div>
                <div><strong>Australia Awards:</strong> Applications typically open February and close late April for study commencing the following year.</div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-3 shrink-0"></div>
                <div><strong>University Merit Scholarships:</strong> Often close in October/November for Semester 1 (e.g., Melbourne International Undergraduate Scholarship).</div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-3 shrink-0"></div>
                <div><strong>Automatic Bursaries:</strong> No separate deadline; assessed automatically when you submit your main application.</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-500" /> Trimester Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              Several major universities (including UNSW, Deakin, Griffith, and Bond) operate on a Trimester system, offering three intakes per year. This offers more flexibility and potentially allows you to fast-track a 3-year degree into 2 years.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">Trimester 1</span>
                <span className="text-slate-600 dark:text-slate-400">Starts February/March</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">Trimester 2</span>
                <span className="text-slate-600 dark:text-slate-400">Starts June/July</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">Trimester 3</span>
                <span className="text-slate-600 dark:text-slate-400">Starts September/October</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
