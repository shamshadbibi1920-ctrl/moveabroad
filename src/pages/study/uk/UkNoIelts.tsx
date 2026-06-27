import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, CheckCircle2, AlertTriangle, FileText, Check } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkNoIelts() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const alternatives = [
    { name: 'Medium of Instruction (MOI)', desc: 'A certificate from your previous Pakistani university stating your degree was entirely taught and assessed in English. Accepted by select UK universities.' },
    { name: 'PTE Academic UKVI', desc: 'Pearson Test of English. Often preferred by students who struggle with IELTS format. Accepted universally across the UK.' },
    { name: 'Duolingo English Test (DET)', desc: 'An online, cheaper, and faster test. Accepted by some UK universities (mostly for pathway or pre-sessional courses, but some accept for direct entry).' },
    { name: 'Oxford ELLT', desc: 'Oxford English Language Level Test. An online test accepted by a growing number of UK universities as a direct alternative to IELTS.' },
    { name: 'O-Level / IGCSE English', desc: 'If you scored a Grade C or above in O-Level/IGCSE English, many universities will waive the IELTS requirement.' }
  ];

  const moiUniversities = [
    'Coventry University',
    'University of Bedfordshire',
    'University of Sunderland',
    'University of South Wales',
    'Northumbria University',
    'Anglia Ruskin University',
    'Teesside University',
    'Staffordshire University'
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="Study in UK Without IELTS for Pakistani Students | MoveAbroad.pk"
        description="Learn how to study in the UK without IELTS using MOI, PTE, or Duolingo. List of UK universities accepting MOI from Pakistani students."
        canonicalPath="/study/uk/no-ielts"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Study No IELTS" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Study in UK Without IELTS
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Explore alternative English proficiency requirements, including MOI and PTE, accepted by UK universities.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6 flex items-start shadow-sm">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Crucial Warning Regarding UKVI Visas</h4>
            <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
              While a university may grant you admission based on an MOI (Medium of Instruction) letter, the UK Visa and Immigration (UKVI) department is very strict. If a university assesses your English internally (via MOI) they must vouch for it on your CAS. However, having a secure English Language Test (SELT) like <strong>IELTS UKVI or PTE UKVI</strong> drastically reduces the risk of visa refusal and interview complications.
            </p>
          </div>
        </motion.div>

        <motion.section variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" /> Acceptable Alternatives
          </h2>
          <div className="space-y-4">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> {alt.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 pl-7">{alt.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-indigo-500" /> Universities Accepting MOI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The following universities frequently accept a Medium of Instruction letter from recognized Pakistani universities (like NUST, LUMS, FAST, COMSATS, UET, Punjab University) for Master's programs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moiUniversities.map((uni, idx) => (
              <div key={idx} className="flex items-center text-slate-700 dark:text-slate-300">
                <Check className="w-5 h-5 text-blue-500 mr-3" />
                <span className="font-medium">{uni}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 italic">
            * Note: Policies change every intake. Always email the university admissions team to confirm if they accept MOI for your specific program and previous university.
          </p>
        </motion.section>

      </div>
    </div>
  );
}
