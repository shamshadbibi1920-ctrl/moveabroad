import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Clock, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AustraliaDoctorCompetent() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=80" 
            alt="Modern Australian Hospital Building" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/healthcare/australia/doctor" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Doctors in Australia
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <Star className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Competent Authority Pathway</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            A fast-track route for doctors holding registration or qualifications recognized via a "Competent Authority".
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who is this for?</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Doctors who hold registration/qualification recognized via a "Competent Authority". This primarily benefits doctors who have ALREADY become registered or licensed in the UK (GMC), Ireland, USA, Canada, or New Zealand.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                <strong>Important Note:</strong> This pathway does not apply directly to Pakistan-trained doctors with no other registration. However, it is highly relevant if you have already obtained GMC registration in the UK (e.g., via PLAB) or licensure in the US, Canada, Ireland, or NZ — in that case, this becomes your FASTEST route into Australia, skipping the AMC CAT and Clinical Exam entirely.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step Process</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            {[
              { title: "Confirm Category Eligibility", desc: "Confirm your current registration qualifies under one of the Competent Authority categories. For example, Category A typically covers UK GMC-registered specialists with a Certificate of Completion of Training or those who passed PLAB and completed foundation training." },
              { title: "Apply for Provisional Registration", desc: "Apply for provisional registration via the AHPRA portal under the Competent Authority pathway." },
              { title: "Provide Evidence of Experience", desc: "Provide evidence of 'internship equivalent' experience. Specific information sheets exist for UK-trained applicants and other categories to demonstrate this." },
              { title: "Secure Supervised Position", desc: "Secure an approved supervised practice position in an Australian hospital or clinic." },
              { title: "Complete Supervised Practice", desc: "Complete 12 months of supervised practice (minimum 47 weeks full-time equivalent) in the approved position." },
              { title: "Apply for General Registration", desc: "Apply for general registration with the Medical Board of Australia." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-amber-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
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
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center mb-2">
              <Lightbulb className="w-5 h-5 mr-2 text-blue-600" /> Strategic Advice
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              A common and effective strategy for Pakistani doctors is to first complete PLAB and obtain UK GMC registration, gain some NHS experience, and THEN use this faster Competent Authority pathway into Australia — skipping the AMC exams entirely.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-amber-500" /> Realistic Timeline
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Since you bypass the AMC CAT and Clinical examinations, the timeline is significantly reduced compared to the Standard Pathway.
              </p>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                <strong className="text-amber-800 dark:text-amber-300">Total Realistic Timeline:</strong><br />
                <span className="text-amber-600 dark:text-amber-400">12-18 months once you already hold Competent Authority registration.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Requirements</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Competent Authority licensure documentation</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Proof of identity (Valid Passport)</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Primary Source Verification</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> English Language Test (if not exempt via Category)</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Certificates of Good Standing</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">CPD Requirement</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Same as the Standard pathway: 50 hours per calendar year once registered, through an AMC-accredited CPD home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mt-8">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Disclaimer
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            AHPRA registration pathways, exam fees, and college assessment requirements change frequently and vary by specialty. Always verify current requirements directly with AHPRA, the Medical Board of Australia, and the relevant specialist college before starting the process.
          </p>
        </div>
      </div>
    </div>
  );
}
