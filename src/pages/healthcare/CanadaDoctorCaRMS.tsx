import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, AlertTriangle, FileText, ArrowLeft, ArrowRight, UserCheck, BookOpen, Languages, Globe, Target, ExternalLink } from 'lucide-react';
import { getCountryData } from '../../data/countries';

export default function CanadaDoctorCaRMS() {
  const data = getCountryData('canada');
  const countryName = "Canada";
  const professionName = "Doctor (CaRMS Pathway)";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              loading="eager"
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="w-full h-full bg-teal-900"></div>
          )}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/healthcare/canada/doctor" className="inline-flex items-center text-teal-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Canada Doctor Pathways
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              CaRMS Residency Pathway {data?.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              Complete retraining for fresh MBBS graduates seeking full Canadian residency training from PGY-1.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="space-y-12">
          
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pathway Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              The Canadian Resident Matching Service (CaRMS) is the only route into medical residency in Canada. This pathway is designed for fresh graduates or extremely junior doctors who wish to undergo comprehensive specialty training in Canada from the ground up (PGY-1). It is arguably the most competitive route, as International Medical Graduates (IMGs) compete for a very limited pool of residency quotas designated specifically for IMGs.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800/30 flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-900 dark:text-red-100">Critical Prerequisite: Permanent Residency</h4>
                <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                  You CANNOT apply for CaRMS from Pakistan on a visitor or study visa. You must already be a Canadian Citizen or Permanent Resident (PR) by the time you submit your application. Most doctors achieve this first by immigrating through Express Entry as skilled workers before attempting the match.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step CaRMS Process</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Immigration First", desc: "Obtain Canadian Permanent Residency (PR) through Federal Express Entry or a Provincial Nominee Program (PNP).", icon: <Globe /> },
                { step: "2", title: "Source Verification", desc: "Create a PhysiciansApply.ca account and verify your MBBS degree via EPIC.", icon: <UserCheck /> },
                { step: "3", title: "Pass MCCQE Part 1", desc: "Clear the Medical Council of Canada Qualifying Examination Part 1. High scores are crucial for IMGs.", icon: <BookOpen /> },
                { step: "4", title: "Pass NAC OSCE", desc: "Clear the National Assessment Collaboration (NAC) Objective Structured Clinical Exam. This assesses your clinical skills in a Canadian context.", icon: <HeartPulse /> },
                { step: "5", title: "Language Testing", desc: "Achieve required bands in IELTS Academic or OET Medicine.", icon: <Languages /> },
                { step: "6", title: "CaRMS Match", desc: "Apply to programs through CaRMS, attend interviews, and formally match into a residency program.", icon: <Target /> }
              ].map((item, i) => (
                <div key={i} className="flex bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold flex-shrink-0 mr-6">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Step {item.step}: {item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cost Breakdown (Estimates)</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2">
                <span>PhysiciansApply Account & Verification</span>
                <span className="font-bold">$500 CAD</span>
              </li>
              <li className="flex justify-between items-center text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2">
                <span>MCCQE Part 1 Exam</span>
                <span className="font-bold">$1,500 CAD</span>
              </li>
              <li className="flex justify-between items-center text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2">
                <span>NAC OSCE Exam</span>
                <span className="font-bold">$3,000 CAD</span>
              </li>
              <li className="flex justify-between items-center text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2">
                <span>CaRMS Application Fees</span>
                <span className="font-bold">$300 - $800+ CAD</span>
              </li>
              <li className="flex justify-between items-center text-slate-900 dark:text-white pt-2 text-lg">
                <span className="font-bold">Total Estimated Cost</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">~$5,500 CAD</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "PhysiciansApply.ca", url: "https://physiciansapply.ca", desc: "Credential source verification portal" },
                { title: "MCCQE1 Information (MCC)", url: "https://mcc.ca/examinations-assessments/mccqe/", desc: "Medical Council of Canada Qualifying Exam Part 1" },
                { title: "NAC Examination (MCC)", url: "https://mcc.ca/examinations-assessments/nac-examination/", desc: "National Assessment Collaboration exam" },
                { title: "CaRMS", url: "https://www.carms.ca", desc: "Canadian Resident Matching Service" },
                { title: "CaRMS IMG Eligibility", url: "https://www.carms.ca/match/r-1-main-residency-match/eligibility-criteria/", desc: "Detailed eligibility criteria for IMGs" },
                { title: "Alberta IMG Program (AIMG)", url: "https://www.aimg.ca", desc: "Alberta's IMG specific assessment program" },
                { title: "UBC IMG Clinical Assessment", url: "https://imgbc.med.ubc.ca", desc: "British Columbia's IMG clinical assessment" },
                { title: "IRCC Express Entry", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html", desc: "Immigration options for skilled workers" },
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
          </section>

          <div className="flex justify-center pt-8">
            <Link to="/healthcare/canada/doctor" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Explore Alternative Pathways
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
