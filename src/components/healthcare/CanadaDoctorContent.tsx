import React from 'react';
import { Target, CheckCircle2, AlertTriangle, GraduationCap, Clock, Banknote, Briefcase, Globe, HeartPulse, Building2, Calendar, FileText, ExternalLink, Users, ArrowRight, Award, Scale, MapPin, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CanadaDoctorContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
      
      {/* Overview Section */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Canada Medical Landscape</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Canada is experiencing a severe national physician shortage, with an estimated over 6 million Canadians without a regular family doctor. Consequently, provinces are aggressively reforming licensing pathways to recruit International Medical Graduates (IMGs).
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">~30%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Of doctors are IMGs</div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
              <Banknote className="w-8 h-8 text-emerald-600 mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">$250k+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Base Starting Salary</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Find Your Pathway Cards */}
      <motion.section variants={itemVariants}>
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Find Your Pathway</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/healthcare/canada/doctor/carms-pathway" className="block group">
            <div className="h-full bg-white dark:bg-slate-800 border-2 border-teal-500/20 hover:border-teal-500 transition-all rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-sm hover:shadow-lg">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24 text-teal-600" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block px-4 py-1.5 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm font-bold">
                  MBBS Graduates
                </div>
                <ArrowRight className="w-6 h-6 text-teal-500 transform group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">CaRMS Residency</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-auto">
                For fresh graduates seeking full Canadian residency training from PGY-1. Permanent Residency is strictly required before applying.
              </p>
            </div>
          </Link>

          <Link to="/healthcare/canada/doctor/fellowship-pathway" className="block group">
            <div className="h-full bg-white dark:bg-slate-800 border-2 border-purple-500/20 hover:border-purple-500 transition-all rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-sm hover:shadow-lg">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-24 h-24 text-purple-600" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-bold">
                  Clinical Fellowship
                </div>
                <ArrowRight className="w-6 h-6 text-purple-500 transform group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Fellowship Pathway</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-auto">
                Temporary 1-3 year advanced training for board-certified specialists (FCPS) seeking highly specialized exposure.
              </p>
            </div>
          </Link>

          <Link to="/healthcare/canada/doctor/pra-pathway" className="block group">
            <div className="h-full bg-white dark:bg-slate-800 border-2 border-emerald-500/20 hover:border-emerald-500 transition-all rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-sm hover:shadow-lg">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-24 h-24 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-bold">
                  Experienced Physicians
                </div>
                <ArrowRight className="w-6 h-6 text-emerald-500 transform group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Practice Ready Assessment</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-auto">
                Direct route for doctors with 48+ months of independent clinical practice. Complete a 12-week assessment without redoing residency.
              </p>
            </div>
          </Link>

          <Link to="/healthcare/canada/doctor/per-pathway" className="block group">
            <div className="h-full bg-white dark:bg-slate-800 border-2 border-blue-500/20 hover:border-blue-500 transition-all rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-sm hover:shadow-lg">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scale className="w-24 h-24 text-blue-600" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-bold">
                  Senior Specialists
                </div>
                <ArrowRight className="w-6 h-6 text-blue-500 transform group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">PER / Royal College Route</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-auto">
                Credential review process for specialists whose global training matches Canadian standards, allowing direct board exams challenge.
              </p>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* Required National Exams Reference Table */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8">Required National Exams</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="p-4 rounded-tl-xl font-bold text-slate-800 dark:text-slate-200">Examination</th>
                <th className="p-4 font-bold text-slate-800 dark:text-slate-200">Purpose</th>
                <th className="p-4 font-bold text-slate-800 dark:text-slate-200">Required For</th>
                <th className="p-4 rounded-tr-xl font-bold text-slate-800 dark:text-slate-200">Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-medium text-slate-900 dark:text-white">MCCQE Part I</td>
                <td className="p-4">Assesses critical medical knowledge and clinical decision-making.</td>
                <td className="p-4">CaRMS, PRA, most full licenses</td>
                <td className="p-4">Computer-based multiple choice</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900 dark:text-white">NAC OSCE</td>
                <td className="p-4">Evaluates clinical skills precisely in a Canadian context.</td>
                <td className="p-4">CaRMS, some PRA programs</td>
                <td className="p-4">Objective Structured Clinical Examination</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900 dark:text-white">TDM</td>
                <td className="p-4">Therapeutics Decision-Making for independent family practice.</td>
                <td className="p-4">PRA (Family Medicine only)</td>
                <td className="p-4">Computer-based short answer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Salary & Benefits */}
      <motion.section variants={itemVariants} className="bg-emerald-50 dark:bg-emerald-900/20 rounded-[2rem] p-8 md:p-12 shadow-sm border border-emerald-100 dark:border-emerald-800/30">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-emerald-50 mb-8">Salary & Financial Prospects</h2>
        <p className="text-slate-700 dark:text-emerald-200/80 mb-8">
          Canadian doctors operate mostly under a fee-for-service model. Typical gross annual billings in CAD before overhead/taxes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { spec: "Family Medicine", amount: "$250k - $300k" },
            { spec: "Pediatrics", amount: "$250k - $350k" },
            { spec: "Internal Medicine", amount: "$300k - $400k" },
            { spec: "Surgical / Sub-Spec", amount: "$450k - $600k+" }
          ].map((s, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-500 transition-colors">
              <h4 className="font-medium text-slate-500 dark:text-slate-400 mb-2">{s.spec}</h4>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.amount}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Job Search & Resources */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8">Resources & Official Portals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://employers.physiciansapply.ca/en/" target="_blank" rel="noopener noreferrer" className="flex items-start p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <ExternalLink className="w-6 h-6 text-teal-600 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">PhysiciansApply.ca</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Central portal for medical credentials verification taking physicians through the steps from applying for exams to Canadian medical registration.</p>
            </div>
          </a>
          <a href="https://www.carms.ca/" target="_blank" rel="noopener noreferrer" className="flex items-start p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <ExternalLink className="w-6 h-6 text-teal-600 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">CaRMS</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">The Canadian Resident Matching Service matching IMGs with residency programs.</p>
            </div>
          </a>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section variants={itemVariants} className="bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-8 md:p-12 border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center md:justify-start">
          <FileText className="w-8 h-8 text-teal-600 mr-4" /> Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          {[
            {
              q: "Can FCPS doctors work in Canada?",
              a: "Yes, but your FCPS alone does not grant an automatic license. You must either apply for the Practice Ready Assessment (PRA) if you have extensive independent experience, or undergo a rigorous credential review by the Royal College (PER route). Both pathways require you to physically relocate and pass Canadian examinations."
            },
            {
              q: "Is residency mandatory for IMGs?",
              a: "Yes, for fresh MBBS graduates and junior doctors. No, for experienced specialists (FCPS/MD) who can qualify for PRA or PER pathways. However, matching into a standard residency via CaRMS requires Permanent Residency (PR) or Citizenship first."
            },
            {
              q: "Which province is easiest for IMGs?",
              a: "Saskatchewan, Manitoba, and Nova Scotia are generally considered more accessible because they have robust Practice Ready Assessment (PRA) programs and aggressive provincial nominee pathways (PNPs) aimed specifically at recruiting international doctors."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section variants={itemVariants} className="relative overflow-hidden bg-teal-600 rounded-[2rem] p-10 md:p-16 text-center shadow-xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Ready To Explore Your Canadian Medical Career?</h2>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto mb-10">
            Let our experts map your medical credentials against Canadian pathways and determine your best route to licensure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/healthcare/canada/doctor" className="w-full sm:w-auto bg-white text-teal-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg flex justify-center items-center">
              Check Eligibility
            </Link>
            <a href="https://wa.me/923002134708" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-teal-800 text-white hover:bg-teal-900 px-8 py-4 rounded-xl font-bold text-lg border border-teal-500 transition-colors shadow-lg flex justify-center items-center">
              Book Consultation
            </a>
          </div>
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.section variants={itemVariants}>
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 mr-4 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-1">Important Disclaimer</h3>
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                Provincial regulations in Canada change frequently. This hub is for informational purposes only. You must verify all requirements with the specific provincial College of Physicians and Surgeons before making life decisions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}
