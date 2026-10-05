import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Stethoscope, Briefcase, CheckCircle2, Clock, 
  AlertTriangle, Globe, Activity, Award, ShieldCheck, DollarSign, 
  BookOpen, ExternalLink, ArrowRight, Plane, Languages, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function DenmarkPhysiotherapist() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stpsStages = [
    {
      title: "Stage 1: Verify Suspension Eligibility & Legal Route",
      fee: "Free initial assessment",
      desc: "CRITICAL 2026 CHECK: Confirm whether you are already legally residing in Denmark (with Danish CPR number) or eligible under the Special Process for Specifically Requested Healthcare Professionals."
    },
    {
      title: "Stage 2: Non-EU Qualification Assessment (STPS)",
      fee: "DKK 1,362 (~€182)",
      desc: "Submit your Pakistani DPT degree, sealed university transcript, clinical hours syllabus, and HEC/MOFA attestations directly to the Danish Patient Safety Authority (Styrelsen for Patientsikkerhed)."
    },
    {
      title: "Stage 3: Danish Language Exam (Prøve i Dansk 3)",
      fee: "Exam fee varies (~DKK 1,500 - 2,500)",
      highlight: true,
      desc: "Mandatory state Danish exam. You must score at least 10 in Oral Communication, 7 in Reading Comprehension, and 7 in Written Communication on the Danish 7-point scale."
    },
    {
      title: "Stage 4: Find 6-Month Evaluation Employment",
      fee: "Applicant-driven job search",
      desc: "Apply to Danish regional hospitals, municipal rehabilitation centres, or private clinics for a 6-month supervised clinical evaluation employment (Evalueringsansættelse)."
    },
    {
      title: "Stage 5: Evaluation Authorisation & SIRI Permit",
      fee: "DKK 6,810 (SIRI work permit fee)",
      highlight: true,
      desc: "STPS issues a temporary Evaluation Authorisation, allowing SIRI to grant a Danish residence and work permit. Single applicants must show DKK 79,920 in maintenance funds."
    },
    {
      title: "Stage 6: Clinical Assessment & Legislation Course",
      fee: "Included in employment programme",
      desc: "Complete 6 months of supervised clinical practice evaluated by your senior physiotherapist, plus the mandatory Danish healthcare legislation course."
    },
    {
      title: "Stage 7: Permanent Authorisation Conferred",
      fee: "Final STPS registration",
      highlight: true,
      desc: "Receive permanent Danish Physiotherapist Authorisation (Autorisation) and Permission to Work Independently (Tilladelse til selvstændigt virke) across the Danish healthcare system."
    }
  ];

  const danish3Grades = [
    { component: "Oral Communication (Mundtlig kommunikation)", minGrade: "10 (Grade B equivalent)", note: "Demanding benchmark for clinical communication and patient dialogue" },
    { component: "Reading Comprehension (Læseforståelse)", minGrade: "7 (Grade C equivalent)", note: "Required to understand patient charts, physician orders, and medical journals" },
    { component: "Written Communication (Skriftlig fremstilling)", minGrade: "7 (Grade C equivalent)", note: "Required to write daily electronic health records and discharge notes" },
  ];

  const faqs = [
    {
      q: "Are physiotherapy degrees from Pakistan being assessed by Denmark in 2026?",
      a: "As of 30 June 2026, the Danish Patient Safety Authority (STPS) maintained its temporary suspension on processing qualifications from Pakistan, Nepal, and Bangladesh due to document authenticity concerns. However, applications can still be processed if the applicant is already legally residing in Denmark (with a Danish CPR number) or qualifies under the Special Process for Specifically Requested Healthcare Professionals with an approved Danish employer."
    },
    {
      q: "What is the Special Process for Specifically Requested Healthcare Professionals?",
      a: "This route is designed for Danish healthcare institutions with critical staffing shortages. If an approved Danish employer offers you a binding clinical employment contract (minimum 6 months full-time) with a formal supervision plan, STPS grants up to a 3-year period to complete your language tests and adaptation measures while in employment."
    },
    {
      q: "Is Physiotherapy on Denmark's 2026 Positive List for Higher Education?",
      a: "No. The revised Positive List for Higher Education that took effect on 1 July 2026 does NOT include Physiotherapist (DISCO 226410). International applicants cannot use the fast-track Positive List scheme and must use the Special Authorisation Permit or Pay Limit Scheme."
    },
    {
      q: "What are the passing scores for the Danish 3 examination (Prøve i Dansk 3)?",
      a: "STPS requires a minimum score of 10 in Oral Communication, 7 in Reading Comprehension, and 7 in Written Communication on the Danish 7-point scale. Passing grades can be accumulated across multiple examination sessions."
    },
    {
      q: "How much does the Danish authorisation and visa process cost?",
      a: "The STPS non-EU educational evaluation fee is DKK 1,362. The SIRI healthcare residence/work permit application fee for 2026 is DKK 6,810. In addition, single applicants must demonstrate DKK 79,920 in unencumbered personal maintenance funds."
    }
  ];

  return (
    <>
      <SEO 
        title="Denmark Physiotherapist Registration 2026: STPS Guide for Pakistani DPT | MoveAbroad.pk"
        description="Complete 2026 guide for Pakistani DPT physiotherapists moving to Denmark. Covers Danish Patient Safety Authority authorisation, 2026 Pakistan suspension updates, Danish 3 exam, and evaluation employment."
      />

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <Link 
            to="/healthcare-abroad" 
            className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors mb-6 font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Healthcare Abroad
          </Link>

          {/* Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 dark:border-slate-700 mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> STPS Authorisation Pathway
              </span>
              <span className="px-3.5 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 rounded-full text-xs font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> 2026 Pakistan Suspension Notice
              </span>
              <span className="px-3.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                Updated October 2026
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              Moving from Pakistan to Denmark as a Physiotherapist
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              A comprehensive regulatory, language, and clinical roadmap for Pakistani physical therapy (DPT) graduates seeking Danish state authorisation through the <strong>Danish Patient Safety Authority (Styrelsen for Patientsikkerhed - STPS)</strong>.
            </p>

            {/* Author Attribution */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-amber-600 text-white flex items-center justify-center font-bold text-xs">
                DH
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-slate-200">Authored by Dr Haleem</span>
                <span className="block text-xs text-slate-400">Physical Therapy &amp; European Licensure Specialist</span>
              </div>
            </div>
          </motion.div>

          {/* Critical 2026 Alert Box */}
          <div className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-3xl border border-red-200 dark:border-slate-700 mb-10 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="p-2 bg-red-600 text-white rounded-xl inline-flex">
                <AlertTriangle className="w-5 h-5" />
              </span>
              <h2 className="font-display font-bold text-red-950 dark:text-red-200 text-xl sm:text-2xl">
                Critical 2026 Advisory: Pakistan Qualification Assessment Status
              </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              The Danish Patient Safety Authority (STPS) has temporarily paused processing applications involving educational qualifications from <strong>Pakistan, Nepal, and Bangladesh</strong>. On <strong>30 June 2026</strong>, STPS formally decided to maintain this suspension pending ongoing verification improvements.
            </p>
            <div className="bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-red-100 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-2">
              <p className="font-bold text-red-700 dark:text-red-300">Active Legal Exceptions:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                <li>Pakistani DPT graduates who are <strong>already legally resident in Denmark</strong> (holding a Danish Civil Registration CPR number).</li>
                <li>Candidates qualifying under the <strong>Special Process for Specifically Requested Healthcare Professionals</strong> with an approved Danish hospital/clinic employment and supervision contract.</li>
              </ul>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-red-600 dark:text-red-400">DKK 1,362</span>
              <span className="block text-xs font-semibold text-slate-900 dark:text-white mt-1">STPS Fee</span>
              <span className="block text-[11px] text-slate-400">Educational assessment</span>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">Oral 10</span>
              <span className="block text-xs font-semibold text-slate-900 dark:text-white mt-1">Prøve i Dansk 3</span>
              <span className="block text-[11px] text-slate-400">Read: 7 / Write: 7</span>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">6 Months</span>
              <span className="block text-xs font-semibold text-slate-900 dark:text-white mt-1">Evaluation Work</span>
              <span className="block text-[11px] text-slate-400">Supervised placement</span>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">3 Years</span>
              <span className="block text-xs font-semibold text-slate-900 dark:text-white mt-1">Special Route</span>
              <span className="block text-[11px] text-slate-400">Parallel qualification</span>
            </div>
          </div>

          {/* Detailed Stages */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 dark:border-slate-700 mb-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-red-600 dark:text-red-400" />
              The 7-Stage Danish Authorisation Procedure
            </h2>

            <div className="space-y-4">
              {stpsStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    stage.highlight 
                      ? 'bg-red-50/60 dark:bg-red-950/20 border-red-200 dark:border-red-900/40' 
                      : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {stage.title}
                    </h3>
                    <span className="px-3 py-1 bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 rounded-full text-xs font-bold border border-red-100 dark:border-slate-700 self-start sm:self-auto">
                      {stage.fee}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Language Benchmark Table */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 dark:border-slate-700 mb-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Prøve i Dansk 3 Minimum Grade Requirements
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              STPS requires high clinical communication standards on the Danish 7-point scale (-3, 00, 02, 4, 7, 10, 12):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold bg-slate-50 dark:bg-slate-900/60">
                    <th className="py-3 px-4">Exam Component</th>
                    <th className="py-3 px-4">Minimum Grade</th>
                    <th className="py-3 px-4">Clinical Relevance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {danish3Grades.map((g, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">{g.component}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-red-600 dark:text-red-400">{g.minGrade}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">{g.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 dark:border-slate-700 mb-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions (Denmark Physiotherapy)
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white flex justify-between items-center text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-red-600 text-xl ml-2">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive Blog Link CTA */}
          <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-3xl p-8 text-white shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                Long-Form Analysis by Dr Haleem
              </span>
              <h3 className="font-display text-2xl font-bold mb-2">
                Read the Complete 2026 Step-by-Step Editorial Guide
              </h3>
              <p className="text-red-100 text-sm max-w-xl">
                Detailed 18-minute breakdown with university verification requirements, SIRI financial maintenance proof, Denmark vs Germany comparison, and 8 mistakes to avoid.
              </p>
            </div>
            <Link 
              to="/blog/moving-to-denmark-physiotherapist-pakistan-2026"
              className="px-6 py-3.5 bg-white text-red-800 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors whitespace-nowrap shadow-md inline-flex items-center gap-2 flex-shrink-0"
            >
              Read Full Editorial Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
