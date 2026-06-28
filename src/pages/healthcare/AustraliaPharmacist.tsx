import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Stethoscope, Briefcase, CheckCircle2, Clock, AlertTriangle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AustraliaPharmacist() {
  return (
    <>
      <SEO title="Australia Pharmacist | MoveAbroad.pk" description="Comprehensive guide to australia pharmacist for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80" 
            alt="Sydney Opera House" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/healthcare-abroad" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Healthcare
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <Stethoscope className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Pharmacy in Australia</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            A comprehensive guide to the new OPRA pathway for overseas-trained pharmacists seeking registration in Australia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-indigo-600" /> IMPORTANT 2026 UPDATE: OPRA Replaces KAPS
            </h4>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
              <strong>OPRA (Overseas Pharmacist Readiness Assessment)</strong> officially replaced the older KAPS exam, with the final KAPS session held in November 2024. From 2025 onward, OPRA is now the ONLY recognised exam for overseas pharmacists seeking provisional registration in Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Australia maintains a steady demand for pharmacists, particularly in community pharmacy settings and hospital environments across regional areas.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-900 dark:text-white font-bold mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" /> Average Salaries
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-slate-700 dark:text-slate-300">Intern/Junior Pharmacist:</strong> AUD $65,000 - $75,000/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Staff Pharmacist:</strong> AUD $75,000 - $95,000/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Pharmacy Manager:</strong> AUD $95,000 - $115,000+/year</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3 text-blue-500" /> Required Documents
              </h2>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Valid Passport</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Pharm-D Degree (Attested by HEC)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Pharmacy Council of Pakistan Registration</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Academic Transcripts</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> English Test Results (IELTS, OET, or PTE)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step OPRA Pathway</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            {[
              { title: "Initial Assessment", desc: "Submit your qualifications for initial assessment by AHPRA and the Pharmacy Board of Australia to ensure you are eligible for the OPRA exam." },
              { title: "Pass OPRA Exam", desc: "Register for and pass the OPRA exam. This is a fully computer-based, multiple-choice exam assessing whether your pharmacy knowledge matches Australian standards, with a particular focus on patient safety and clinical decision-making." },
              { title: "Provisional Registration", desc: "Apply for provisional registration with AHPRA once you have successfully passed OPRA." },
              { title: "Structured Internship", desc: "Complete a structured internship period (supervised practice hours) while holding provisional registration." },
              { title: "Intern Exams", desc: "Pass the Intern Written Exam and Intern Oral Exam to prove clinical competence." },
              { title: "General Registration Application", desc: "Apply for general registration with the Pharmacy Board of Australia via AHPRA." },
              { title: "Independent Practice", desc: "Receive general registration and begin independent practice as a pharmacist in Australia!" }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
             <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://www.pharmacyboard.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">Pharmacy Board of Australia</a></li>
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://www.ahpra.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">AHPRA</a></li>
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://www.pharmacycouncil.org.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">Australian Pharmacy Council (OPRA info)</a></li>
             </ul>
          </div>
        </section>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mt-8">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Disclaimer
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            AHPRA registration pathways, exam formats, and fees change frequently — for example, OPRA replaced KAPS for pharmacists in 2025. Always verify current requirements and fees directly with AHPRA and the relevant professional council before starting the process.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
