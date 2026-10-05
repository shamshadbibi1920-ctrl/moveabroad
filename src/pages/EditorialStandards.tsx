import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, CheckCircle2, FileText, Users, Award, 
  HelpCircle, ExternalLink, ArrowRight, BookOpen, AlertTriangle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EditorialStandards() {
  const standards = [
    {
      title: "1. Primary Government & Regulatory Sources",
      desc: "Every procedural figure, fee schedule, language benchmark, and visa requirement published on MoveAbroad.pk is cross-referenced directly against official gazettes, competent regulatory councils (e.g. STPS Denmark, Ahpra/APC Australia, German State Health Authorities, UK GMC/NMC), and immigration departments (SIRI, Department of Home Affairs, BAMF)."
    },
    {
      title: "2. Clinician & Expert Contributor Review",
      desc: "All healthcare licensing guides are authored and reviewed by qualified medical and allied health clinicians (MBBS, DPT, BDS). Our contributors have first-hand experience with credential verification (HEC, PMDC, PNC), document attestation, and overseas equivalence exams."
    },
    {
      title: "3. Clear Intake & Date-Stamping Policy",
      desc: "Immigration laws and professional recognition regulations change frequently. All guides display explicit 'Last Updated' timestamps. Outdated rules (such as previous Positive Lists or suspended assessment quotas) are prominently flagged to protect applicants from fraudulent consultancy promises."
    },
    {
      title: "4. Anti-Scam & Independence Discipline",
      desc: "MoveAbroad.pk operates as an independent informational resource. We do not sell visa guarantees or accept compensation to promote unauthorized recruitment agents. Official embassy and regulatory application fees are clearly disclosed in local currencies and Pakistani Rupee equivalents."
    },
    {
      title: "5. Transparent Document Checklists",
      desc: "Our pathway guides provide actionable, step-by-step document assembly instructions tailored specifically to Pakistani applicants, including sealed university transcript requirements, HEC online verification, Ministry of Foreign Affairs (MOFA) stamping, and sworn translations."
    }
  ];

  return (
    <>
      <SEO 
        title="Editorial Standards & Verification Policy | MoveAbroad.pk" 
        description="Learn about MoveAbroad.pk's rigorous editorial standards, clinician peer-review processes, official source grounding, and commitment to accurate international migration guidance."
      />

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="px-3.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Editorial Integrity &amp; Transparency
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Our Editorial Standards
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              How MoveAbroad.pk researches, verifies, and maintains high-integrity licensing, scholarship, and immigration roadmaps for Pakistani students and professionals.
            </p>
          </motion.div>

          {/* Core Principles */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 dark:border-slate-700 mb-10 space-y-8">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              The Five Pillars of Our Editorial Process
            </h2>

            <div className="space-y-6">
              {standards.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Leadership */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 dark:border-slate-700 mb-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Editorial Review Board
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white text-base">Dr. M. Malik</span>
                <span className="block text-xs font-semibold text-blue-600 dark:text-blue-400">Founder &amp; Lead Medical Editor &bull; MBBS (Pakistan)</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                  Oversees medical and dental equivalence guides (PLAB, Approbation, DHA, USMLE, AMC). Ensures accuracy regarding primary source verification, ECFMG/EPIC credentials, and visa compliance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white text-base">Allied Health &amp; Licensure Specialists</span>
                <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400">Dr. Hakeem, Dr. Haleem &bull; DPT Specialists</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                  Conduct comprehensive regulatory research on physiotherapy pathways in Australia (APC APEP), Germany (State Anerkennung), and Denmark (STPS), focusing on curriculum evaluation and clinical adaptation.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-4">
            <Link 
              to="/about"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline gap-1.5"
            >
              Learn more about our mission on the About Us page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
