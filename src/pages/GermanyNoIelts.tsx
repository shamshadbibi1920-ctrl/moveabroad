import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { getCountryData } from '../data/countries';

const noIeltsUniversities = [
  { name: 'TU Berlin', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'RWTH Aachen', alternative: 'MOI + Interview / Internal English Test' },
  { name: 'TU Dresden', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'University of Hamburg', alternative: 'MOI / Duolingo (depends on program)' },
  { name: 'Hochschule München', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'HAW Hamburg', alternative: 'MOI + Internal Assessment' },
  { name: 'TU Darmstadt', alternative: 'MOI / Internal English Test' },
  { name: 'University of Duisburg-Essen', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'Hochschule Bremen', alternative: 'Duolingo / MOI' },
  { name: 'OTH Regensburg', alternative: 'MOI Certificate' }
];

const noIeltsProcess = [
  "Check University Requirements: Confirm on the official university portal if your target program explicitly accepts MOI (Medium of Instruction) from Pakistani universities.",
  "Obtain MOI Certificate: Get an official letter from your previous university in Pakistan stating that your entire degree was taught and examined in English.",
  "Prepare Additional Documents: Gather strong academic transcripts, SOP, LORs, and sometimes GRE/GMAT if required to strengthen your profile.",
  "Submit Application: Apply through Uni-Assist or the university's direct portal, uploading the MOI certificate in place of IELTS.",
  "Prepare for Interview: Some universities or the German embassy may conduct an interview to verify your English communication skills.",
  "Embassy Visa Interview: Be prepared to speak fluently in English during your visa interview at the German consulate in Pakistan, as they will evaluate your language proficiency."
];

export default function GermanyNoIelts() {
  const data = getCountryData('germany');
  const countryName = 'Germany';

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
              alt={`${countryName} skyline`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-900"></div>
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/study/germany" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Germany
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study without IELTS in {countryName}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Find out how to apply using medium of instruction alternatives.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
              <Globe className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">Study in Germany Without IELTS</h2>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
            For Pakistani students, many top German universities and Fachhochschulen (UAS) accept alternative English proficiency evidence. If your previous degree was taught entirely in English, you may be eligible to apply using a Medium of Instruction (MOI) Certificate instead of an IELTS score.
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5 mb-8 flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-1">⚠️ Important Disclaimer</h4>
              <p className="text-amber-700 dark:text-amber-400 text-sm">
                While Medium of Instruction (MOI) certificate is accepted as an alternative to IELTS, having an IELTS score is strongly recommended. It significantly increases admission acceptance and German student visa approval rate. Always verify directly with the university as requirements can change.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Universities Accepting MOI / Alternatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {noIeltsUniversities.map((uni, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{uni.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1.5" /> {uni.alternative}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Application Process Without IELTS</h3>
          <div className="space-y-4">
            {noIeltsProcess.map((step, idx) => {
              const [stepTitle, ...stepDescParts] = step.split(': ');
              const stepDesc = stepDescParts.join(': ');
              return (
                <div key={idx} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center flex-shrink-0 mr-4">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block mb-1">{stepTitle}</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{stepDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
