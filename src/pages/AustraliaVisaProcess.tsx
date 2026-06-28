import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, BadgeDollarSign, Info, AlertTriangle, ShieldCheck, CheckCircle2, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaVisaProcess() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Australia Student Visa (Subclass 500) from Pakistan | MoveAbroad.pk"
        description="Complete 2026 guide to the Australian Student Visa (Subclass 500) for Pakistani students. Learn about the new Genuine Student (GS) requirement, financial proof of AUD $29,710, and step-by-step application process."
        canonicalPath="/study/australia/visa-process"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia Student Visa (Subclass 500)</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Everything Pakistani students need to know about 2026 requirements, the new Genuine Student (GS) test, and financial proof.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> 2026 CRITICAL POLICY UPDATES
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed mb-4">
            Australian immigration policies, financial capacity requirements, and visa processing times change frequently and were significantly updated in 2026. Always verify current requirements directly on the Department of Home Affairs website before applying.
          </p>
          <ul className="list-disc list-inside text-amber-800 dark:text-amber-200 text-sm space-y-1">
            <li><strong>Genuine Student (GS) Test:</strong> Replaced the old GTE requirement. Requires targeted answers directly in the visa application.</li>
            <li><strong>Financial Proof:</strong> Increased to <strong>AUD $29,710</strong> per year for living costs. Funds must show a 3-month history.</li>
            <li><strong>English Scores:</strong> Increased to IELTS 6.0 overall for direct entry.</li>
            <li><strong>NPL Cap 2026:</strong> Australia has capped international student places at 295,000 for 2026. Apply to well-established providers early.</li>
            <li><strong>Visa Fee:</strong> Increased to <strong>AUD $2,028</strong>.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Requirements</h2>
              <div className="space-y-6">
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl mr-4">
                      <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Confirmation of Enrolment (CoE)</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 ml-16">
                    You must have a valid CoE from a CRICOS-registered Australian education provider. You will receive this after accepting your offer and paying the initial tuition deposit and OSHC.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl mr-4">
                      <BadgeDollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. Financial Capacity (Updated 2026)</h3>
                  </div>
                  <div className="ml-16 space-y-4">
                    <p className="text-slate-600 dark:text-slate-400">
                      You must prove you have enough money to cover your travel, course fees, and living costs.
                    </p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Living costs: <strong>AUD $29,710</strong> for the first year.</li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Tuition fees: First year of your course.</li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Travel costs: ~AUD $2,000 to $2,500.</li>
                    </ul>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      <strong>Important for Pakistani Students:</strong> This typically totals PKR 9 to 13 million. Funds should be held in an acceptable bank for <strong>at least 3 months</strong> prior to application to avoid "sudden deposit" red flags.
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl mr-4">
                      <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. Genuine Student (GS) Requirement</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 ml-16 mb-4">
                    The GS requirement replaced the GTE requirement in March 2024. You must answer targeted questions within the visa application detailing your academic history, ties to Pakistan, and reasons for studying in Australia.
                  </p>
                  <ul className="ml-16 space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2 shrink-0 mt-0.5" /> Detail how the course ties to your career goals in Pakistan.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2 shrink-0 mt-0.5" /> Explain any gaps in your study history.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2 shrink-0 mt-0.5" /> Provide evidence of strong family, community, and economic ties to Pakistan.</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl mr-4">
                      <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. English Proficiency</h3>
                  </div>
                  <ul className="ml-16 space-y-2 text-slate-600 dark:text-slate-400 mb-4">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 shrink-0 mt-0.5" /> <strong>Direct Entry:</strong> IELTS 6.0 overall (no band below 5.5).</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 shrink-0 mt-0.5" /> <strong>Pathway/Foundation:</strong> IELTS 5.5 overall.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 shrink-0 mt-0.5" /> <strong>ELICOS:</strong> IELTS 5.0 overall.</li>
                  </ul>
                  <p className="text-slate-600 dark:text-slate-400 ml-16 text-sm bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                    <strong>IELTS One Skill Retake:</strong> Now fully accepted. Tests must be taken at a physical test centre (online tests are NOT accepted). PTE Academic, TOEFL iBT, and Cambridge CAE are also widely accepted.
                  </p>
                </div>

              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Step-by-Step Visa Application Process</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                {[
                  { step: 1, title: 'Obtain CoE', desc: 'Accept your university offer and pay the initial deposit to receive your Confirmation of Enrolment (CoE).' },
                  { step: 2, title: 'Arrange OSHC', desc: 'Purchase Overseas Student Health Cover (OSHC) for the entire duration of your stay. This is mandatory before applying.' },
                  { step: 3, title: 'Prepare Documents', desc: 'Gather your 3-month financial history, academic transcripts, passport, and prepare answers for the GS questions.' },
                  { step: 4, title: 'Apply Online', desc: 'Create an ImmiAccount and lodge your Subclass 500 visa application online. Pay the AUD $2,028 fee.' },
                  { step: 5, title: 'Biometrics & Medical', desc: 'After lodging, you will receive requests to provide biometrics (at VFS Global) and complete a medical examination.' },
                  { step: 6, title: 'Visa Decision', desc: 'Wait for the Department of Home Affairs to process your application. You will be notified via email.' }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Visa Fee</span>
                  <span className="font-semibold text-slate-900 dark:text-white">AUD $2,028</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Higher Ed Processing</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">4–9 weeks</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                  <span className="text-slate-600 dark:text-slate-400 text-sm">VET Processing</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">4–7 months</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Postgrad Research</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">3–5 months</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Work Rights</span>
                  <div className="text-right">
                    <span className="font-semibold text-slate-900 dark:text-white block">48 hrs / fortnight</span>
                    <span className="text-xs text-slate-500">(Proposed 60 hrs from July 2026)</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-900/50">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" /> Common Rejections
              </h3>
              <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Weak or contradictory Genuine Student (GS) answers
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Insufficient, sudden, or unverifiable financial evidence
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Course does not match previous academic background
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  English test not from an approved physical test centre
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Official Links</h3>
              <div className="space-y-3">
                <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Department of Home Affairs
                </a>
                <a href="https://online.immi.gov.au/lusc/login" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  ImmiAccount Login
                </a>
                <a href="https://visa.vfsglobal.com/pak/en/aus/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  VFS Global Pakistan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
