import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, FileText, Banknote, Calendar, ArrowRight, CheckCircle2, Globe, HeartPulse, Activity, ChevronDown } from 'lucide-react';
import { getCountryData } from '../data/countries';
import GermanyDoctorContent from '../components/healthcare/GermanyDoctorContent';
import GermanyNurseContent from '../components/healthcare/GermanyNurseContent';
import GermanyDentistContent from '../components/healthcare/GermanyDentistContent';
import GermanyPharmacistContent from '../components/healthcare/GermanyPharmacistContent';
import GermanyPhysioContent from '../components/healthcare/GermanyPhysioContent';

export default function HealthcareDestination() {
  const { countryId, professionId } = useParams<{ countryId: string, professionId: string }>();
  const safeCountryId = countryId || 'uk';
  const data = getCountryData(safeCountryId);
  const [expandedNewsIndex, setExpandedNewsIndex] = useState<number | null>(null);
  
  const countryName = data?.name || safeCountryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const professionName = professionId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Healthcare Professional';
  
  const professionKey = professionId?.toLowerCase() || 'doctor';
  const professionData = data?.healthcarePathways?.[professionKey];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  if (!data || !professionData) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <Stethoscope className="w-16 h-16 text-teal-500 mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Information Coming Soon</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Detailed healthcare licensing information for {professionName}s in {countryName} is not yet available.
          </p>
          <Link to="/" className="mt-6 inline-block text-teal-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {data.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-teal-900"></div>
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/30 backdrop-blur-md border border-teal-400/30 text-teal-50 text-sm font-semibold mb-6">
              <HeartPulse className="w-4 h-4 mr-2" /> Global Healthcare
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {professionName}s in {countryName} {data.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              Complete licensing pathway, exam preparation, and career guide for Pakistani {professionName.toLowerCase()}s relocating to {countryName}.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <Stethoscope className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Overview
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                {professionData.overview || `The healthcare system in ${countryName} actively recruits international talent. For a ${professionName.toLowerCase()}, the journey typically involves credential verification, specific licensing exams, language proficiency, and board registration.`}
              </p>
              {professionData.registrationBoard && (
                <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800/30 mt-4">
                  <strong className="text-teal-800 dark:text-teal-200 block mb-1">Registration Board:</strong>
                  <span className="text-teal-700 dark:text-teal-300">{professionData.registrationBoard}</span>
                </div>
              )}
            </motion.section>

            {professionData.process && professionData.process.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Step-by-step Process
                </h2>
                <div className="relative border-l-2 border-teal-100 dark:border-teal-900/50 pl-8 space-y-8 ml-4 mt-8">
                  {professionData.process.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[41px] bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white dark:border-slate-800">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-lg">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {professionData.exams && professionData.exams.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <Activity className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Required Exams
                </h2>
                <ul className="space-y-4">
                  {professionData.exams.map((exam, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 text-lg">{exam}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

             <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.costOfLiving && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Banknote className="w-6 h-6 mr-3 text-teal-500" /> Cost of Living
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.costOfLiving}
                    </p>
                  </div>
                )}
                {professionData.languageRequirements ? (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-teal-500" /> Language Req.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {professionData.languageRequirements}
                    </p>
                  </div>
                ) : data.languageRequirements ? (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-teal-500" /> Language Req.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.languageRequirements}
                    </p>
                  </div>
                ) : null}
             </motion.section>

             {safeCountryId === 'germany' && professionKey === 'doctor' && (
                <GermanyDoctorContent />
             )}
             {safeCountryId === 'germany' && professionKey === 'nurse' && (
                <GermanyNurseContent />
             )}
             {safeCountryId === 'germany' && professionKey === 'dentist' && (
                <GermanyDentistContent />
             )}
             {safeCountryId === 'germany' && professionKey === 'pharmacist' && (
                <GermanyPharmacistContent />
             )}
             {safeCountryId === 'germany' && professionKey === 'physiotherapist' && (
                <GermanyPhysioContent />
             )}

          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-[2rem] p-8 border border-teal-100 dark:border-teal-800/50">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">Latest Updates</h3>
              <div className="space-y-4">
                {[
                  { title: `Updates to ${professionName} licensing exam registration fees`, date: '2 days ago',
                    content: `The registration fees for the national licensing exam have been updated. Ensure you check the latest fee schedule on the official board website before submitting your application.` },
                  { title: `New fast-track visa processing for healthcare workers`, date: '1 week ago',
                    content: `A new fast-track visa processing lane has been introduced for foreign-trained ${professionName.toLowerCase()}s. This could reduce visa waiting times by up to 40%.` },
                  { title: `Language scoring requirements slightly relaxed`, date: '2 weeks ago',
                    content: `The required band scores for occupational English and regional languages have been adjusted, providing more flexibility for certain clinical roles.` }
                ].map((news, i) => (
                  <div key={i} className="group cursor-pointer border-b border-teal-200/50 dark:border-teal-800/30 pb-4 last:border-0 last:pb-0" onClick={() => setExpandedNewsIndex(expandedNewsIndex === i ? null : i)}>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <Calendar className="w-4 h-4 mr-2" /> {news.date}
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors pr-2">
                        {news.title}
                      </h4>
                      <div className="mt-1">
                        <motion.div animate={{ rotate: expandedNewsIndex === i ? 180 : 0 }}>
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        </motion.div>
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedNewsIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            {news.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

             <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-4">Exam Prep Services</h3>
              <p className="text-slate-300 mb-6">
                Need help preparing for international medical boards? Connect with mentors who have cleared the path.
              </p>
              <Link to="/contact" className="block w-full text-center bg-teal-600 hover:bg-teal-700 font-semibold py-3 px-4 rounded-xl transition-colors">
                Find a Mentor
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
