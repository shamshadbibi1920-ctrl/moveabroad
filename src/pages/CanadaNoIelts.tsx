import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function CanadaNoIelts() {
  const data = getCountryData('canada');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt="Canada" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="w-full h-full bg-amber-900"></div>
          )}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/study/canada" className="inline-flex items-center text-amber-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Canada
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              No IELTS Options for Canada
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-amber-100 mb-8 leading-relaxed">
              Understand the alternatives to IELTS for Canadian university admissions and visa requirements.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800/50 rounded-2xl p-6 mb-12 flex items-start shadow-md">
          <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">Important Disclaimer for Canada</h3>
            <p className="text-red-700 dark:text-red-400 text-lg leading-relaxed mb-4">
              <strong>Unlike Germany, Canada always requires proof of English proficiency.</strong> To process your student visa safely, IRCC evaluates your language skills.
            </p>
            <p className="text-red-700 dark:text-red-400 text-lg leading-relaxed">
              However, IELTS is <strong>NOT the only option</strong>. Alternative English tests are widely accepted by universities. Ensure you meet both university admission conditions and visa conditions. Even without IELTS, you must prove English proficiency through an alternative test or MOI certificate. Having IELTS significantly increases your visa approval chances for Canada, especially under the fast-track SDS program.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
              <CheckCircle2 className="w-8 h-8 mr-4 text-emerald-500" /> Acceptable Alternative Tests
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
               <ul className="space-y-4">
                 {[
                   { name: 'TOEFL iBT', desc: 'Accepted by 100% of Canadian universities.' },
                   { name: 'PTE Academic', desc: 'Accepted for both admission and SDS visa stream.' },
                   { name: 'CAEL (Canadian Academic English Language)', desc: 'Designed specifically for Canadian context.' },
                   { name: 'Duolingo English Test (DET)', desc: 'Accepted by select universities (verify carefully as acceptance changes).' },
                   { name: 'Cambridge English (C1 Advanced)', desc: 'Accepted by most major universities.' }
                 ].map((test, idx) => (
                   <li key={idx} className="flex flex-col border-b border-slate-100 dark:border-slate-700 pb-4 last:border-0 last:pb-0">
                     <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">{test.name}</span>
                     <span className="text-slate-600 dark:text-slate-400 text-sm mt-1">{test.desc}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
              <Globe className="w-8 h-8 mr-4 text-amber-500" /> MOI Acceptance
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 h-full">
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Some universities conditionally accept a <strong>Medium of Instruction (MOI)</strong> certificate from Pakistani universities where the entire degree was taught in English.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
                <strong className="block text-slate-800 dark:text-slate-200 mb-3">Conditions that must be met:</strong>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                  <li>Your degree must be completely verified by HEC.</li>
                  <li>The MOI letter must be officially stamped by your university registrar.</li>
                  <li>Sometimes the university conducts an online Skype/Zoom interview to evaluate your spoken English.</li>
                </ul>
              </div>
              
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-auto border-l-4 border-amber-300 pl-4 py-2">
                <strong>Note:</strong> Applying via MOI makes you ineligible for the SDS visa stream. You must apply in the regular processing stream.
              </div>
            </div>
          </motion.section>
        </div>

        {/* Selected Universities */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Universities known for flexible English alternative acceptances</h2>
          <div className="flex flex-wrap gap-3">
             {['University of Winnipeg', 'Thompson Rivers University', 'Lakehead University', 'Cape Breton University', 'Algoma University', 'Brandon University', 'University of Regina', 'Memorial University of Newfoundland', 'Nipissing University', 'University of Northern British Columbia'].map((uni, idx) => (
               <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-full text-sm">
                 {uni}
               </span>
             ))}
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-6 text-sm">* Always verify current intake requirements on the official university portal, as Duolingo and MOI policies update every semester.</p>
        </motion.section>

      </div>
    </div>
  );
}
