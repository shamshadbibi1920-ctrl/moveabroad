import React from 'react';
import { 
  CheckCircle2, AlertTriangle, ExternalLink, Calendar, Banknote, 
  Briefcase, Globe, Settings, ChevronRight, UserCheck, Activity, 
  BookOpen, Languages, ShieldCheck, ArrowRight, Sparkles, Building2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function GermanyPhysioContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-12 space-y-12">
      
      {/* Featured Editorial Guide Referral Banner */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-teal-600 to-blue-700 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider">
            Featured Editorial Guide by Dr M.Haleem
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            Moving from Pakistan to Germany as a Physiotherapist in 2026: Complete Step-by-Step Guide
          </h3>
          <p className="text-teal-100 text-sm max-w-2xl">
            Explore our complete 43-phase manual detailing state recognition (Anerkennung), Defizitbescheid adaptation measures, B2 medical German, and official labour market salary data.
          </p>
        </div>
        <Link 
          to="/blog/moving-to-germany-physiotherapist-pakistan-2026"
          className="px-6 py-3.5 bg-white text-teal-800 hover:bg-teal-50 font-bold rounded-xl text-sm transition-all shadow-sm shrink-0 inline-flex items-center gap-2"
        >
          Read Full Article <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Critical 2026 Advisory Box */}
      <motion.div variants={itemVariants} className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-7 h-7 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-amber-900 dark:text-amber-200">
            <h4 className="font-bold text-base">Regulated Profession: Title Protection in Germany</h4>
            <p className="leading-relaxed">
              In Germany, <strong>Physiotherapeut / Physiotherapeutin</strong> is a legally protected professional title. A 5-year DPT from Pakistan does not grant automatic licensing. You must undergo a state equivalence assessment (<em>Gleichwertigkeitsprüfung</em>) and achieve <strong>German B2 proficiency</strong> before receiving your independent professional authorization (<em>Berufserlaubnis</em>).
            </p>
          </div>
        </div>
      </motion.div>

      {/* 1. Extended Overview & Shortage Reality */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Activity className="w-8 h-8 mr-3 text-teal-600 dark:text-teal-400" /> 
          High Demand: Official Labour Market Statistics (2025/2026)
        </h2>
        
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Germany's Federal Employment Agency (<em>Bundesagentur für Arbeit</em>) officially classifies physiotherapy as a nationwide shortage occupation. Due to an aging demographic and specialized rehabilitation demand, registered vacancies consistently outpace qualified domestic jobseekers:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 uppercase font-semibold">Active Professionals</div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">143,550</div>
            <div className="text-[10px] text-slate-400">Socially insured in PT</div>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 uppercase font-semibold">Registered Vacancies</div>
            <div className="text-lg sm:text-xl font-bold text-teal-600 dark:text-teal-400 mt-1">5,563</div>
            <div className="text-[10px] text-slate-400">Bundesagentur database</div>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 uppercase font-semibold">Jobseeker Ratio</div>
            <div className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">0.8</div>
            <div className="text-[10px] text-slate-400">More jobs than seekers</div>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 uppercase font-semibold">Official Median Salary</div>
            <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-1">€3,248</div>
            <div className="text-[10px] text-slate-400">Gross / Month</div>
          </div>
        </div>
      </motion.section>

      {/* 2. License Recognition Process (Anerkennung) */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Settings className="w-8 h-8 mr-3 text-teal-600 dark:text-teal-400" /> 
          The 4-Phase Recognition &amp; Visa Progression
        </h2>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 dark:before:via-teal-800 before:to-transparent">
          {[
            { 
              step: '1', 
              title: 'German Language Mastery (Target B2)', 
              desc: 'Learn general German up to B2 (Goethe-Zertifikat, telc, or ÖSD). B2 is required for professional practice authorization and patient communication.' 
            },
            { 
              step: '2', 
              title: 'Identify State Authority & Document Verification', 
              desc: 'Select your target German federal state and find the responsible health authority (e.g. Regierungspräsidium) using the official Recognition Finder tool. Attest DPT degrees through HEC & MOFA.' 
            },
            { 
              step: '3', 
              title: 'Lodge Equivalence Assessment (Anerkennung)', 
              desc: 'Submit sworn German translations of your curriculum, transcripts, and clinical training hours. Authority processing takes 3–4 months. Typical fee: €25–€430.' 
            },
            { 
              step: '4', 
              title: 'Receive Assessment Outcome (Full vs Defizitbescheid)', 
              desc: 'Full recognition grants direct licensing. If substantial differences are found, you receive a Defizitbescheid detailing missing hours to compensate in Germany.' 
            },
            { 
              step: '5', 
              title: 'Recognition / Qualification Visa (Section 16d AufenthG)', 
              desc: 'Apply at the German Embassy Islamabad or Consulate Karachi to enter Germany for adaptation training. Financial proof: €1,200 gross/mo (company-tied) or €1,091 net/mo (blocked account).' 
            },
            { 
              step: '6', 
              title: 'Adaptation Course (Anpassungslehrgang) or Knowledge Test', 
              desc: 'Complete supervised clinical training in a German clinic or sit the oral/practical Kenntnisprüfung to bridge identified curricular gaps.' 
            },
            { 
              step: '7', 
              title: 'Professional Authorization & Skilled Worker Visa (18a/18b)', 
              desc: 'Obtain full professional permission (Berufserlaubnis). Convert your residence permit to skilled employment with long-term permanent residency pathways.' 
            }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xs">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. German Language Benchmark & Clinical Vocabulary */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Languages className="w-8 h-8 mr-3 text-teal-600 dark:text-teal-400" /> 
          German Language Requirements: The Clinical B2 Imperative
        </h2>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          While an A2 certificate may satisfy initial entry for certain recognition visa measures, <strong>B2 German is legally mandatory</strong> for issuing your professional licence. Physiotherapists communicate independently with patients describing symptoms, joint mobility limitations, and pain levels.
        </p>

        <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" /> Essential Clinical Terms for Practice
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Schmerz:</strong> Pain</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Bewegung:</strong> Movement</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Gleichgewicht:</strong> Balance</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Befund:</strong> Findings / Diagnosis</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Kraft:</strong> Muscle Strength</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Übung:</strong> Exercise</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Behandlung:</strong> Treatment</div>
            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Reha:</strong> Rehabilitation</div>
          </div>
        </div>
      </motion.section>

      {/* 4. Required Documents Checklist */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <UserCheck className="w-8 h-8 mr-3 text-teal-600 dark:text-teal-400" /> Required Documents Checklist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {[
            'DPT Degree Certificate (attested by HEC Islamabad & MOFA)',
            'Consolidated official semester transcripts (HEC attested)',
            'Detailed course curriculum & syllabus hours breakdown',
            'Supervised university hospital clinical placement certificates',
            'Pakistani physical therapy council or practice authorization proof',
            'Certified sworn German translations (vereidigter Übersetzer)',
            'German Language Certificate (Goethe, telc, or ÖSD B2)',
            'Curriculum Vitae in German tabular format (Lebenslauf)',
            'Valid Pakistani passport (minimum 18 months validity)',
            'Police Character Certificate from Pakistan (under 3 months old)',
            'Medical fitness certificate (ärztliches Attest) from recognized doctor'
          ].map((doc, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2.5 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{doc}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. Salary Realities & Career Growth */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Banknote className="w-8 h-8 mr-3 text-teal-600 dark:text-teal-400" /> Salary &amp; Financial Reality
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-3">
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold uppercase">Official National Median</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">€3,248 gross / month (~€39,000 / yr)</span>
                <span className="text-xs text-slate-400">Federal Employment Agency benchmark</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold uppercase">Experienced Hospital / Reha Clinic</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">€3,700 - €4,200 gross / month</span>
                <span className="text-xs text-slate-400">Subject to TVöD public healthcare collective agreements</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="text-xs text-slate-500 font-semibold uppercase">Specialized Private Practice / Lead Therapist</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">€4,500 - €5,000+ gross / month</span>
                <span className="text-xs text-slate-400">With Manual Therapy or Lymphatic Drainage credentials</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base mb-2">Statutory Social Benefits</h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                <span><strong>Statutory Health Insurance (GKV):</strong> Full coverage for employee and non-working family members.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                <span><strong>Statutory Pension (Rentenversicherung):</strong> Contributions count toward retirement and permanent residency.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                <span><strong>Generous Paid Leave:</strong> Minimum 24 to 30 days of paid vacation annually plus public holidays.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 6. Specializations & In-Demand Clinical Skills */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
            <Sparkles className="w-6 h-6 mr-3 text-teal-600 dark:text-teal-400" /> In-Demand Clinical Skills
          </h2>
          <p className="text-xs text-slate-500">Developing these certifications substantially increases your German hiring prospects:</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'Manuelle Therapie (Manual Therapy)', 
              'Manuelle Lymphdrainage (MLD)', 
              'Neurologische Reha (Bobath / PNF)', 
              'Orthopädische Reha', 
              'Krankengymnastik am Gerät (KGG)',
              'Geriatrische Rehabilitation'
            ].map(spec => (
              <span key={spec} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg font-medium">
                {spec}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-teal-700 dark:bg-teal-900 rounded-[2rem] p-8 text-white shadow-sm space-y-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold flex items-center">
            <Briefcase className="w-6 h-6 mr-3" /> Job Search Platforms
          </h2>
          <p className="text-xs text-teal-100">Search using German occupational keywords like <em>Physiotherapeut Anerkennung</em>:</p>
          <ul className="text-xs sm:text-sm space-y-2 text-teal-50">
            <li><strong>Bundesagentur für Arbeit:</strong> jobboerse.arbeitsagentur.de</li>
            <li><strong>Make it in Germany:</strong> make-it-in-germany.com/en/jobs</li>
            <li><strong>Physio-Jobs Portal:</strong> physio-jobs.de</li>
            <li><strong>Medi-Jobs Germany:</strong> medi-jobs.de</li>
          </ul>
        </div>
      </motion.div>

      {/* 7. Official Links & Resources */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links &amp; Government Portals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Anerkennung in Deutschland (Recognition Finder)", url: "https://www.anerkennung-in-deutschland.de" },
            { title: "Make it in Germany (Official Portal)", url: "https://www.make-it-in-germany.com" },
            { title: "German Missions in Pakistan (Visa Portal)", url: "https://pakistan.diplo.de" },
            { title: "Federal Employment Agency (Jobsuche)", url: "https://jobboerse.arbeitsagentur.de" }
          ].map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-colors group">
              <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 text-sm">{link.title}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-500" />
            </a>
          ))}
        </div>
      </motion.section>

      {/* Navigation Footer */}
      <motion.div variants={itemVariants} className="pt-8">
        <Link to="/healthcare-abroad" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm">
          <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
          Back to Healthcare Overview
        </Link>
      </motion.div>

    </motion.div>
  );
}
