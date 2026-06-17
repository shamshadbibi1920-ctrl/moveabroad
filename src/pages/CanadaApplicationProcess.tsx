import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function CanadaApplicationProcess() {
  const data = getCountryData('canada');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt="Canada" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover opacity-80"
            />
          ) : (
             <div className="w-full h-full bg-blue-900 text-opacity-50"></div>
          )}
          <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/study/canada" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Canada
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Application Process
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Find out how to apply for Bachelor and Master programs in Canada, exactly what documents you need, and expert tips on your SOP.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Bachelors vs Masters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-500" /> For Bachelor Students
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Required Documents</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Matriculation / O-Level Certificate</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> FSc / A-Level Certificate & Transcripts</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Passport copy</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> IELTS or alternative test score</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Statement of Purpose (SOP)</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> 1-2 Reference Letters from teachers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">How to Apply</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-2">Most Canadian universities accept direct applications through their portal. For universities in Ontario, you usually apply centrally via the <strong>OUAC</strong> (Ontario Universities' Application Centre).</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">You may also apply via EducationPlannerBC for British Columbia universities.</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-1">Tips for Pakistani Applicants</h4>
                  <p className="text-blue-700 dark:text-blue-400 text-xs">If you graduated from a Federal Board (FBISE), some universities give you direct equivalence without extra foundation years.</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-indigo-500" /> For Master Students
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Required Documents</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Bachelor Degree (16 years minimum)</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" /> HEC Attestation on Degree/Transcripts <span className="ml-1 text-xs opacity-70">(often required later)</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> IELTS or acceptable English test</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Detailed Professional CV</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Strong Statement of Purpose (SOP)</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> 2-3 Professional/Academic Reference Letters</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> GRE/GMAT (Required by some top tier business/engineering programs)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">How to Apply</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">Master's applications are strictly handled directly by the university. You must create an account on their specific graduate studies portal. Finding a supervisor beforehand is crucial for thesis-based programs.</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                  <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm mb-1">Tips for Pakistani Applicants</h4>
                  <p className="text-indigo-700 dark:text-indigo-400 text-xs">Reach out to professors with your research proposal via email 4-6 months before the deadline to secure early research grants.</p>
                </div>
              </div>
            </motion.section>
        </div>

        {/* SOP and Reference Letters */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">Crafting Your Documents</h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-slate-100 dark:border-slate-700 lg:flex items-start gap-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 text-blue-600 dark:text-blue-400">Statement of Purpose (SOP)</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Your SOP is the most critical qualitative factor. It shows Canadian visa/admission officers your intent to study and your career trajectory.</p>
              </div>
              <div className="lg:w-2/3">
                <strong className="block text-slate-800 dark:text-slate-200 text-sm mb-3">What to include:</strong>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                  <li>Your exact academic background and why you chose this particular program.</li>
                  <li>Why you chose Canada and this specific Designated Learning Institution (DLI).</li>
                  <li>Your ties to your home country (Pakistan) and your plan to return after graduation (essential for visa SOP).</li>
                  <li>Relevant work or research experience.</li>
                </ul>
                <div className="p-3 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 text-sm rounded-xl border border-red-100 dark:border-red-900/50 flex items-start">
                  <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> Avoid copying templates off the internet. Plagiarism checks are rigorous and will result in instant rejection.
                </div>
              </div>
            </div>

            <div className="p-8 lg:flex items-start gap-8 bg-slate-50 dark:bg-slate-800/50">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 text-emerald-600 dark:text-emerald-400">Reference Letters</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Most Canadian graduate programs require 2-3 references. At least two should generally be from academic professors.</p>
              </div>
              <div className="lg:w-2/3">
                <strong className="block text-slate-800 dark:text-slate-200 text-sm mb-3">How they work:</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Unlike conventional paper letters, Canadian universities usually require you to enter the professional email addresses (e.g. professor@university.edu.pk) of your referees on their portal. The university will send an auto-generated secure link directly to your referee to upload the letter privately.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 text-sm rounded-xl border border-blue-100 dark:border-blue-900/50 flex items-start">
                   Ensure you inform your referees in advance so they watch out for the university's automated email!
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Links */}
        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://www.ouac.on.ca/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
              <span className="font-medium mr-auto text-sm">OUAC Application Portal</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a href="https://hec.gov.pk/english/services/students/Degree-Attestation-System/Pages/Degree-Attestation.aspx" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
              <span className="font-medium mr-auto text-sm">HEC Attestation Portal</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a href="https://www.educationplannerbc.ca/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
              <span className="font-medium mr-auto text-sm">EducationPlannerBC</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
        </div>

      </div>
    </div>
  );
}
