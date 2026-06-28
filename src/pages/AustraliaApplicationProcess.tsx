import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, BookOpen, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaApplicationProcess() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Australia University Application Process for Pakistani Students | MoveAbroad.pk"
        description="Learn how to apply to Australian universities from Pakistan. Master the new Genuine Student (GS) statement, gather documents, and secure your CoE."
        canonicalPath="/study/australia/application-process"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Great Barrier Reef" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">University Application Process</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A step-by-step guide for Pakistani students applying for undergraduate and postgraduate programs in Australia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-indigo-900 dark:text-indigo-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-indigo-600" /> New Genuine Student (GS) Requirement
          </h4>
          <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
            As of March 2024, the GTE requirement is gone. You must now focus on the Genuine Student (GS) assessment. Universities will evaluate your intent to study before issuing a CoE. You must clearly articulate how the course aligns with your background and future career plans in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl mr-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Undergraduate (Bachelor's)</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Direct application through the university's online portal or via an authorized education agent.
            </p>
            
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Required Documents:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">FSc / A-Level / IB transcripts and certificates (HEC/IBCC attested)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">English Language Test (IELTS/PTE/TOEFL)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">Valid Passport</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">GS Statement or Answers (explaining course choice)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl mr-4">
                <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Postgraduate (Master's/PhD)</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Apply directly to the university. PhD applicants must secure a supervisor before applying.
            </p>
            
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Required Documents:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">Bachelor's/Master's Degree & Transcripts (HEC attested)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">Detailed CV / Resume</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">2 Academic/Professional Reference Letters</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">Research Proposal (for PhD/MPhil)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">Comprehensive GS Statement</span>
              </li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Mastering the GS Statement</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              The Genuine Student (GS) assessment is the most critical part of your application. Universities and the Department of Home Affairs use it to determine if you are genuinely intending to study and return, or if you are using the student visa primarily for work or migration.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-500" /> 1. Course Relevance
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Explain exactly why you chose this specific course and institution. How does it build on your previous studies or work experience? Avoid generic statements; mention specific modules or academic facilities.
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-emerald-500" /> 2. Career Outcomes
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Detail your future career plans in Pakistan. Mention specific job titles, target companies, and expected salary increases in Pakistan as a result of an Australian degree.
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-purple-500" /> 3. Ties to Pakistan
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Provide evidence of strong economic, family, and community ties to Pakistan that incentivize you to return home after completing your studies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://eservices.hec.gov.pk/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-5 h-5 text-emerald-600 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">HEC Attestation Portal</h3>
                <p className="text-sm text-slate-500">Attest your degrees before applying</p>
              </div>
            </a>
            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/genuine-student-requirement" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-5 h-5 text-emerald-600 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">GS Requirement Info</h3>
                <p className="text-sm text-slate-500">Department of Home Affairs</p>
              </div>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
