import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, Activity, Building2, BadgeDollarSign, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CanadaPharmacistContent() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-12">
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <Activity className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Overview
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="mb-4">
            Pharmacists in Canada are highly respected healthcare professionals with expanding clinical roles, including prescribing authority in many provinces. The average salary ranges from <strong>CAD $90,000 to $120,000/year</strong>.
          </p>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
              IMPORTANT 2026 UPDATE
            </h4>
            <p className="text-amber-800 dark:text-amber-200">
              The Pharmacy Examining Board of Canada (PEBC) introduced a streamlined pathway (effective May 2025) that may <strong>exempt eligible international graduates from the Evaluating Examination</strong> entirely, saving significant time and money for those who qualify based on previous licensure and practice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl flex-1 border border-teal-100 dark:border-teal-800/30">
              <BadgeDollarSign className="w-8 h-8 text-teal-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Average Salary</h4>
              <p className="text-teal-700 dark:text-teal-300">CAD $90,000 - $120,000/year</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl flex-1 border border-blue-100 dark:border-blue-800/30">
              <Building2 className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Workplaces</h4>
              <p className="text-blue-700 dark:text-blue-300">Community Pharmacies, Hospitals</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative z-10">
          <ShieldCheck className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Step-by-Step Licensing Process
        </h2>
        
        <div className="space-y-6 relative z-10">
          {[
            { step: "1", title: "Enroll with Pharmacists' Gateway Canada", desc: "Create your national profile on the Gateway, which acts as the central hub for foreign-trained pharmacists." },
            { step: "2", title: "PEBC Document Evaluation", desc: "Submit your credentials to the Pharmacy Examining Board of Canada (PEBC) for foundational evaluation." },
            { step: "3", title: "Check Exemption Eligibility", desc: "You may be exempt from the Evaluating Exam if you graduated from an internationally accredited program (CCAPP/ACPE) OR held a full, unrestricted license and practiced 1+ year in direct patient care in an approved jurisdiction within the last 3 years." },
            { step: "4", title: "PEBC Evaluating Examination", desc: "If you are not exempt, you must pass this comprehensive written exam testing core pharmacy knowledge." },
            { step: "5", title: "PEBC Qualifying Exam Part I (MCQ)", desc: "Pass the written multiple-choice question exam testing application of knowledge. (Cost approx. $1,275 CAD)" },
            { step: "6", title: "PEBC Qualifying Exam Part II (OSCE)", desc: "Pass the Objective Structured Clinical Examination, assessing communication and clinical problem-solving. (Cost approx. $1,885 CAD)" },
            { step: "7", title: "Supervised Practice / Internship", desc: "Complete a structured practical training period mandated by your target province (usually 600 - 1,000 hours in a community or hospital pharmacy)." },
            { step: "8", title: "Jurisprudence Exam", desc: "Pass the province-specific exam covering local pharmacy laws, ethics, and regulations." },
            { step: "9", title: "Apply for Provincial Licensure", desc: "Register formally with your provincial college (e.g., Ontario College of Pharmacists, College of Pharmacists of BC)." },
            { step: "10", title: "Final Registration", desc: "Obtain professional liability insurance and complete your final registration to practice independently." }
          ].map((item, i) => (
            <div key={i} className="flex bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-teal-300 transition-colors">
              <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold flex-shrink-0 mr-6 text-xl">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-[2rem] border border-amber-200 dark:border-amber-800/30">
          <h3 className="font-bold text-amber-900 dark:text-amber-300 text-xl mb-4 flex items-center">
            <CheckCircle2 className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
            Required Documents
          </h3>
          <ul className="space-y-3 gap-2">
            {[
              "Valid passport & ID",
              "Pharm-D degree attested by HEC",
              "Pharmacy Council of Pakistan registration",
              "Original academic transcripts sent directly to PEBC",
              "Criminal record check (local)",
              "Extrajurisdictional criminal record check (if licensed elsewhere)",
              "English/French proficiency proof (e.g. IELTS, for provincial stage)"
            ].map((doc, idx) => (
              <li key={idx} className="flex items-start text-amber-800 dark:text-amber-200">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-teal-500/10"></div>
          <div className="relative z-10">
             <h3 className="font-bold text-white text-xl mb-6 flex items-center">
              <BadgeDollarSign className="w-6 h-6 mr-3 text-teal-400" />
              Salary & Compensation
            </h3>
            <div className="space-y-4">
              <div className="border-b border-slate-700 pb-4">
                <h4 className="text-slate-400 mb-1">Staff Pharmacist</h4>
                <p className="text-2xl font-bold text-white">CAD $90,000 - $105,000</p>
              </div>
              <div className="pt-2">
                <h4 className="text-slate-400 mb-1">Pharmacy Manager</h4>
                <p className="text-2xl font-bold text-white">CAD $105,000 - $130,000+</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Pharmacy Examining Board of Canada", url: "https://www.pebc.ca/", desc: "PEBC - National certification body" },
            { title: "Pharmacists' Gateway Canada", url: "https://www pharmacistsgatewaycanada.ca/", desc: "Centralized start point for IMGs" },
            { title: "Ontario College of Pharmacists", url: "https://www.ocpinfo.com/", desc: "OCP - Regulation in Ontario" },
            { title: "College of Pharmacists of BC", url: "https://www.bcpharmacists.org/", desc: "CPBC - Regulation in British Columbia" }
          ].map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-start p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group">
              <ExternalLink className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5 group-hover:text-teal-500 transition-colors" />
              <div>
                <h4 className="font-bold text-teal-600 dark:text-teal-400 group-hover:text-teal-500 transition-colors">{link.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.section variants={itemVariants}>
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 mr-4 flex-shrink-0" />
            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <strong>Important Disclaimer:</strong> Licensing requirements and exam formats change frequently — for example, physiotherapy licensing is transitioning to a new single exam (CPTE) in 2026. Always verify current requirements with the relevant regulatory body before starting the process.
            </p>
          </div>
        </div>
      </motion.section>

      <div className="flex justify-center pt-8">
        <Link to="/healthcare-abroad" className="inline-flex items-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-bold bg-teal-50 dark:bg-teal-900/20 px-6 py-3 rounded-xl transition-colors">
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Back to Healthcare Overview
        </Link>
      </div>
    </div>
  );
}
