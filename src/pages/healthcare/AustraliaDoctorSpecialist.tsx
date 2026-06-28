import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Clock, DollarSign, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AustraliaDoctorSpecialist() {
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
              <ShieldCheck className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Specialist Pathway</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            For experienced specialists and consultants seeking assessment by Australian medical colleges.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who is this for?</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Experienced specialists/consultants with substantial postgraduate qualifications and independent specialist practice (e.g., FCPS holders with years of specialist practice).
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step Process</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            {[
              { title: "Identify Specialist College", desc: "Identify the relevant Australian specialist medical college for your specialty (e.g., RACP for physicians/paediatricians, RACS for surgeons, RANZCOG for obstetrics/gynaecology)." },
              { title: "Submit OTS Application", desc: "Submit an Overseas Trained Specialist (OTS) application for formal Assessment of Comparability. Note: the assessment fee can be substantial (e.g., RACP's 2026 fee is AUD $6,184)." },
              { title: "Provide Required Evidence", desc: "Provide required evidence including Certificate of Good Standing, evidence of recency of practice (within last 2-5 years), at least 3 professional referees (including current supervisor/clinical lead), and English test results if required." },
              { title: "Receive Comparability Outcome", desc: "Receive your comparability outcome. You will be assessed as 'Substantially Comparable', 'Partially Comparable', or 'Not Comparable'." },
              { title: "Top Up Training (If Partially Comparable)", desc: "If assessed as Partially Comparable — complete 'Top Up Training' (typically 6-12 months at an accredited training site in Australia)." },
              { title: "Peer Review Period", desc: "If assessed as Substantially Comparable, or after completing Top Up — complete a 'Peer Review' period under observation." },
              { title: "Apply for Specialist Registration", desc: "Apply for specialist registration with AHPRA once college requirements are met." },
              { title: "Complete Supervised Practice", desc: "Complete a supervised practice period (3-24 months, duration determined by the specialist college)." },
              { title: "Receive Full Registration", desc: "Receive full specialist registration with the Medical Board of Australia." },
              { title: "Join College Fellowship", desc: "Pay Fellowship admission fee to join the relevant college (e.g. RACP 2026 fee AUD $1,575, plus annual membership ~AUD $2,291)." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
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
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 flex items-center mb-2">
              <FileText className="w-5 h-5 mr-2 text-indigo-600" /> Important Timeline Note
            </h4>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
              If found Partially or Substantially Comparable, you have <strong>2 years</strong> from that decision to start your requirements in Australia. It is highly recommended not to apply until you are ready to make the move.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-emerald-500" /> Realistic Timeline
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                The timeline varies significantly based on your comparability outcome and the specific requirements of your specialty college.
              </p>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                <strong className="text-emerald-800 dark:text-emerald-300">Total Realistic Timeline:</strong><br />
                <span className="text-emerald-600 dark:text-emerald-400">2-4 years depending on comparability outcome and specialty.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-amber-500" /> Cost Breakdown
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> OTS assessment fee (~AUD $6,000+)</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Fellowship admission fee</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Annual college membership fees</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> AHPRA registration fees</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Visa and relocation costs</li>
              </ul>
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
