import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, Activity, Building2, BadgeDollarSign, MapPin, ExternalLink, ActivitySquare } from 'lucide-react';

export default function CanadaPhysioContent() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-12">
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <ActivitySquare className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Overview
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="mb-4">
            Physiotherapy is an in-demand profession in Canada, driven by an aging population and focus on rehabilitation. The average salary for physiotherapists ranges from <strong>CAD $75,000 to $100,000/year</strong>.
          </p>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
              IMPORTANT 2026 EXAM CHANGE 
            </h4>
            <p className="text-amber-800 dark:text-amber-200">
              Starting January 2026, the old two-part exam system (PCE written + separate provincial clinical exam) is being REPLACED by a single new exam called the <strong>CPTE (Canadian Physiotherapy Examination)</strong> — a fully virtual, same-day written and clinical exam.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl flex-1 border border-teal-100 dark:border-teal-800/30">
              <BadgeDollarSign className="w-8 h-8 text-teal-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Average Salary</h4>
              <p className="text-teal-700 dark:text-teal-300">CAD $75,000 - $100,000/year</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl flex-1 border border-blue-100 dark:border-blue-800/30">
              <Building2 className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Workplaces</h4>
              <p className="text-blue-700 dark:text-blue-300">Private Clinics, Hospitals, Sports</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative z-10">
          <FileText className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Step-by-Step Licensing Process (updated for CPTE)
        </h2>
        
        <div className="space-y-6 relative z-10">
          {[
            { step: "1", title: "Credential Review", desc: "Apply for credential review through the Canadian Alliance of Physiotherapy Regulators (CAPR) to confirm your education meets Canadian standards." },
            { step: "2", title: "Language Proficiency", desc: "Prove English or French language proficiency (unless your PT education was entirely in English/French in a CAPR-recognized exempt country)." },
            { step: "3", title: "Pass the CPTE Exam", desc: "Once credentials are approved, register for and pass the CPTE (Canadian Physiotherapy Examination) — a combined written and clinical/scenario-based exam, administered virtually." },
            { step: "4", title: "Consider Bridging Programs", desc: "Note: Candidates get a maximum of 3 attempts to pass the CPTE. Because first-attempt fail rates for internationally educated PTs have historically been high, many enroll in bridging programs (e.g., Ontario Internationally Educated Physical Therapy Bridging Program at University of Toronto)." },
            { step: "5", title: "Provincial Application", desc: "Apply for registration with your provincial physiotherapy college (e.g., College of Physiotherapists of Ontario)." },
            { step: "6", title: "Provincial Requirements", desc: "Complete any additional province-specific requirements, such as a jurisprudence exam covering legal frameworks and securing professional liability insurance." },
            { step: "7", title: "Independent Licensure", desc: "Receive your independent practice license and start working." }
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
              "DPT degree attested by HEC",
              "Local PT council registration certificate",
              "Original academic transcripts (sent to CAPR)",
              "English language test results (IELTS Academic)",
              "Course syllabi/descriptions (may be required)"
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
              Salary & Benefits
            </h3>
            <div className="space-y-4 text-white">
              <div className="border-b border-slate-700 pb-4">
                <h4 className="text-slate-400 mb-1">Junior Physiotherapist</h4>
                <p className="text-2xl font-bold text-white">CAD $70,000 - $80,000</p>
              </div>
              <div className="border-b border-slate-700 pb-4">
                <h4 className="text-slate-400 mb-1">Experienced / Private Practice</h4>
                <p className="text-2xl font-bold text-white">CAD $80,000 - $110,000+</p>
              </div>
              <div className="pt-2">
                <p className="text-sm text-teal-300">
                  <strong>Bonus:</strong> Internationally educated PTs get 50% off Canadian Physiotherapy Association (CPA) membership and liability insurance in their first year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "CAPR", url: "https://www.alliancept.org/", desc: "Canadian Alliance of Physiotherapy Regulators" },
            { title: "Canadian Physiotherapy Association", url: "https://physiotherapy.ca/", desc: "CPA - National Association" },
            { title: "College of Physiotherapists of Ontario", url: "https://www.collegept.org/", desc: "CPO - Regulation in Ontario" },
            { title: "College of Physical Therapists of BC", url: "https://cptbc.org/", desc: "CPTBC - Regulation in British Columbia" }
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
