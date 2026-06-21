import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, HeartPulse, Building2, BadgeDollarSign, MapPin, ExternalLink } from 'lucide-react';

export default function CanadaNurseContent() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-12">
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <HeartPulse className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Overview
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="mb-4">
            Canada faces a critical nursing shortage, with a projected demand of over <strong>100,000 open nursing positions by 2031</strong>. To address this, nurses fall under high-demand Express Entry categories (NOC 31301 for Registered Nurses, NOC 32101 for Licensed Practical Nurses) with dedicated category-based draws for healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl flex-1 border border-teal-100 dark:border-teal-800/30">
              <BadgeDollarSign className="w-8 h-8 text-teal-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Average Salary</h4>
              <p className="text-teal-700 dark:text-teal-300">CAD $70,000 - $95,000/year</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl flex-1 border border-blue-100 dark:border-blue-800/30">
              <Building2 className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Workplaces</h4>
              <p className="text-blue-700 dark:text-blue-300">Hospitals, Clinics, Long-term Care</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative z-10">
          <FileText className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Step-by-Step Licensing Process
        </h2>
        
        <div className="space-y-6 relative z-10">
          {[
            { step: "1", title: "Create an NNAS Account", desc: "Mandatory first step for all provinces except Quebec. Create a National Nursing Assessment Service (NNAS) profile online." },
            { step: "2", title: "Submit Education & Registration", desc: "Send your degree, transcripts, and registration directly from your nursing school in Pakistan and the PNC." },
            { step: "3", title: "NNAS Advisory Report", desc: "NNAS compares your education to Canadian standards. Can take 6-18 months. Note: NNAS now offers an Expedited 5-Day Advisory Report accepted by CNO Ontario and CRNA Alberta." },
            { step: "4", title: "Apply to Provincial Body", desc: "Apply to your chosen provincial regulatory college (e.g., CNO in Ontario, BCCNM in British Columbia)." },
            { step: "5", title: "Competency Assessment & Bridging", desc: "The provincial body identifies any competency gaps. If found, you must complete a bridging or refresher program (usually 12-18 months)." },
            { step: "6", title: "Language Proficiency", desc: "Prove English or French proficiency (e.g., IELTS Academic 7.0+ or CELBAN)." },
            { step: "7", title: "Pass the National Exam", desc: "Pass the NCLEX-RN (Next Generation NCLEX format with a strong focus on clinical judgment) for RNs, or REx-PN/CPNRE for Practical Nurses." },
            { step: "8", title: "Jurisprudence Exam", desc: "Complete a province-specific online open-book exam testing your knowledge of local nursing law and ethics." },
            { step: "9", title: "Full Licensure", desc: "Receive your independent licensure and registration to practice in the province." }
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
          <ul className="space-y-3">
            {[
              "Valid passport & ID",
              "Nursing degree attested by HEC",
              "Pakistan Nursing Council (PNC) registration",
              "Academic transcripts (sent directly to NNAS)",
              "Work experience/employment letters",
              "English language test results (IELTS/CELBAN)",
              "Police clearance certificates"
            ].map((doc, idx) => (
              <li key={idx} className="flex items-start text-amber-800 dark:text-amber-200">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
                {doc}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-[2rem] border border-blue-200 dark:border-blue-800/30">
          <h3 className="font-bold text-blue-900 dark:text-blue-300 text-xl mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Key Insights & Timeline
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start text-blue-800 dark:text-blue-200">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Provincial Regulation:</strong> Nursing is regulated provincially, not federally. Each province has its own college, fee structure, and specific timelines.</span>
            </li>
            <li className="flex items-start text-blue-800 dark:text-blue-200">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Timeline:</strong> The total licensing process typically takes 8 to 18 months, depending on your document preparation and bridging requirements.</span>
            </li>
            <li className="flex items-start text-blue-800 dark:text-blue-200">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
              <span><strong>Provisional Licensure:</strong> Some provinces offer a provisional or conditional license, allowing you to practice under supervision while completing final exams.</span>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">Salary & Compensation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 border-t-4 border-t-teal-500">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">New Grad / Junior</h4>
            <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">CAD $65k - $75k</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 border-t-4 border-t-blue-500">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Experienced RN</h4>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">CAD $75k - $95k+</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 border-t-4 border-t-indigo-500">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Nurse Practitioner</h4>
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">CAD $95k - $120k+</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "National Nursing Assessment Service", url: "https://www.nnas.ca/", desc: "NNAS - Centralized portal for document evaluation" },
            { title: "College of Nurses of Ontario", url: "https://www.cno.org/", desc: "CNO - Nursing regulation in Ontario" },
            { title: "BC College of Nurses & Midwives", url: "https://www.bccnm.ca/", desc: "BCCNM - Nursing regulation in BC" },
            { title: "College of Registered Nurses of Alberta", url: "https://nurses.ab.ca/", desc: "CRNA - Nursing regulation in Alberta" }
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
