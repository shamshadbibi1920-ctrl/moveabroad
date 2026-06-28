import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronRight, Info, ArrowLeft, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

export default function AustraliaPointsCalculator() {
  const [age, setAge] = useState(0);
  const [english, setEnglish] = useState(0);
  const [experienceOutside, setExperienceOutside] = useState(0);
  const [experienceInside, setExperienceInside] = useState(0);
  const [education, setEducation] = useState(0);
  const [specialistEducation, setSpecialistEducation] = useState(0);
  const [australianStudy, setAustralianStudy] = useState(0);
  const [regionalStudy, setRegionalStudy] = useState(0);
  const [credentialledCommunityLanguage, setCredentialledCommunityLanguage] = useState(0);
  const [professionalYear, setProfessionalYear] = useState(0);
  const [partnerSkills, setPartnerSkills] = useState(0);
  const [nomination, setNomination] = useState(0);

  const totalPoints = age + english + experienceOutside + experienceInside + education + specialistEducation + australianStudy + regionalStudy + credentialledCommunityLanguage + professionalYear + partnerSkills + nomination;
  
  const isEligible = totalPoints >= 65;

  return (
    <>
      <SEO title="Migrate to Australia Points Calculator | MoveAbroad.pk" description="Comprehensive guide to australia points calculator for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate/australia" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Australia Migration
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Australia Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Points Calculator 🇦🇺
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Calculate your estimated points for Australian skilled migration visas (Subclass 189, 190, and 491) to check your eligibility.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
             <Calculator className="w-8 h-8 mr-3 text-emerald-500" />
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">General Skilled Migration Points Test</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             <div className="lg:col-span-2 space-y-6">
                
                {/* Age */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Age</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setAge(Number(e.target.value))}>
                     <option value={0}>Under 18 or over 44 (0 points)</option>
                     <option value={25}>18 to 24 (25 points)</option>
                     <option value={30}>25 to 32 (30 points)</option>
                     <option value={25}>33 to 39 (25 points)</option>
                     <option value={15}>40 to 44 (15 points)</option>
                   </select>
                </div>

                {/* English */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">English Language Skills</label>
                   <p className="text-xs text-slate-500 mb-2">Competent is IELTS 6.0 | Proficient is IELTS 7.0 | Superior is IELTS 8.0</p>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setEnglish(Number(e.target.value))}>
                     <option value={0}>Competent English (0 points)</option>
                     <option value={10}>Proficient English (10 points)</option>
                     <option value={20}>Superior English (20 points)</option>
                   </select>
                </div>

                {/* Experience Outside */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Overseas Work Experience (Last 10 Years)</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setExperienceOutside(Number(e.target.value))}>
                     <option value={0}>Less than 3 years (0 points)</option>
                     <option value={5}>3 to 4 years (5 points)</option>
                     <option value={10}>5 to 7 years (10 points)</option>
                     <option value={15}>8 to 10 years (15 points)</option>
                   </select>
                </div>

                {/* Experience Inside */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Australian Work Experience (Last 10 Years)</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setExperienceInside(Number(e.target.value))}>
                     <option value={0}>Less than 1 year (0 points)</option>
                     <option value={5}>1 to 2 years (5 points)</option>
                     <option value={10}>3 to 4 years (10 points)</option>
                     <option value={15}>5 to 7 years (15 points)</option>
                     <option value={20}>8 to 10 years (20 points)</option>
                   </select>
                </div>

                {/* Education */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Educational Qualifications</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setEducation(Number(e.target.value))}>
                     <option value={0}>No recognized qualification (0 points)</option>
                     <option value={10}>Trade qualification / Diploma / Relevant assessing authority qualification (10 points)</option>
                     <option value={15}>Bachelor Degree from recognized institution (15 points)</option>
                     <option value={20}>Doctorate Degree from recognized institution (20 points)</option>
                   </select>
                </div>

                {/* Partner Skills */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Partner Qualifications</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setPartnerSkills(Number(e.target.value))}>
                     <option value={0}>No Partner OR Partner without competent English/assessment (0 points)</option>
                     <option value={5}>Partner has Competent English only (5 points)</option>
                     <option value={10}>Single / No partner (10 points)</option>
                     <option value={10}>Partner has Skills Assessment AND Competent English AND under 45 (10 points)</option>
                   </select>
                </div>
                
                {/* Nomination */}
                <div>
                   <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">State/Territory Nomination</label>
                   <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white" onChange={(e) => setNomination(Number(e.target.value))}>
                     <option value={0}>No nomination / Subclass 189 (0 points)</option>
                     <option value={5}>Subclass 190 State/Territory Nomination (5 points)</option>
                     <option value={15}>Subclass 491 Regional State Nomination / Family Sponsorship (15 points)</option>
                   </select>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                   <h4 className="font-bold text-slate-900 dark:text-white mb-4">Additional Modifiers</h4>
                   <div className="space-y-4">
                     <label className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                       <input type="checkbox" className="mr-3 w-5 h-5" onChange={(e) => setAustralianStudy(e.target.checked ? 5 : 0)} />
                       Met the Australian study requirement (5 points)
                     </label>
                     <label className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                       <input type="checkbox" className="mr-3 w-5 h-5" onChange={(e) => setSpecialistEducation(e.target.checked ? 10 : 0)} />
                       Specialist Educational qualification (Masters by research/PhD in STEM in Australia) (10 points)
                     </label>
                     <label className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                       <input type="checkbox" className="mr-3 w-5 h-5" onChange={(e) => setRegionalStudy(e.target.checked ? 5 : 0)} />
                       Studied in regional Australia (5 points)
                     </label>
                     <label className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                       <input type="checkbox" className="mr-3 w-5 h-5" onChange={(e) => setCredentialledCommunityLanguage(e.target.checked ? 5 : 0)} />
                       Credentialled community language (NAATI) (5 points)
                     </label>
                     <label className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                       <input type="checkbox" className="mr-3 w-5 h-5" onChange={(e) => setProfessionalYear(e.target.checked ? 5 : 0)} />
                       Professional Year in Australia (5 points)
                     </label>
                   </div>
                </div>

             </div>
             
             {/* Score Summary Fixed Panel */}
             <div className="lg:sticky lg:top-8 h-fit">
               <div className={`p-8 rounded-2xl border-2 transition-colors ${isEligible ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                 <div className="text-center mb-6">
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Total Points Base</p>
                    <div className={`text-6xl font-display font-bold ${isEligible ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                       {totalPoints}
                    </div>
                 </div>
                 
                 <div className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center border border-slate-100 dark:border-slate-700">
                    <p className={`font-bold text-lg ${isEligible ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                      {isEligible ? 'Meets Minimum Pass Mark' : 'Below Minimum Requirement'}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">You need at least 65 points to submit an EOI.</p>
                 </div>

                 <div className="mt-6 flex items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                    <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                      While 65 is the minimum to submit an EOI, actual invitation cut-offs are much higher (often 85-95+ for IT and Accounting, 75+ for Engineering).
                    </p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <section>
          <div className="space-y-3">
             <a href="https://immi.homeaffairs.gov.au/help-support/tools/points-calculator" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Official Home Affairs Points Calculator</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
    </>
  );
}
