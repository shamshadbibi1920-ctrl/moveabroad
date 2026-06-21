import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, AlertTriangle, FileText, ArrowLeft, ArrowRight, UserCheck, BookOpen, Languages, MapPin, Building2, ExternalLink } from 'lucide-react';
import { getCountryData } from '../../data/countries';

export default function CanadaDoctorFellowship() {
  const data = getCountryData('canada');
  const countryName = "Canada";
  const professionName = "Doctor (Fellowship Pathway)";

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
              Clinical Fellowship Pathway {data?.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              Temporary 1-3 year advanced training for board-certified specialists (FCPS / MD) seeking sub-specialized exposure.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="space-y-12">
          
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pathway Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Medical fellowships in Canada offer foreign specialists the opportunity to gain advanced clinical or research experience at major Canadian academic hospitals. This pathway is intended to be temporary — you come, you train, and you leave. It is highly sought after by FCPS graduates looking to enhance their CVs or subspecialize.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30 flex items-start">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 mr-4 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-100">Crucial Limitation: No Permanent License</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
                  A clinical fellowship does <strong>not</strong> lead to a permanent independent license to practice in Canada. Upon completion, you are generally expected to return to your home country. While some provinces have experimental pathways converting fellows to full licenses (e.g., Ontario), these are extremely rare and highly restricted.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Eligibility & Process</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Local Board Certification", desc: "You must hold an independent specialist certificate in your home country (e.g., FCPS, MD, MS, Diplomat).", icon: <CheckCircle2 /> },
                { step: "2", title: "Secure a Fellowship Offer", desc: "You must apply directly to Canadian University Hospital systems (e.g., University of Toronto, McGill, UBC) for vacant fellowship spots.", icon: <Building2 /> },
                { step: "3", title: "Funding", desc: "Fellowships are either funded by the hospital (~$60k-$90k CAD/year) or require you to secure funding from a home institution/government.", icon: <FileText /> },
                { step: "4", title: "College Registration", desc: "The provincial medical college will grant you an 'Educational/Restricted License' strictly limited to your fellowship hospital.", icon: <MapPin /> },
              ].map((item, i) => (
                <div key={i} className="flex bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold flex-shrink-0 mr-6">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Exams & Work Permit</h2>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>No MCC Exams Required:</strong> Most provinces do not require MCCQE Part 1 or NAC OSCE for clinical fellowship positions.</span>
              </li>
              <li className="flex items-start text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Language Test:</strong> IELTS or OET may be requested by the hospital or the provincial college.</span>
              </li>
              <li className="flex items-start text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Work Permit:</strong> You will be issued an LMIA-exempt Employer-Specific Work Permit. Your spouse is eligible for an Open Work Permit.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Find Fellowship Positions — Official Portals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "University of Toronto", url: "https://pgme.utoronto.ca/programs/fellowships/", desc: "Fellowship Opportunities" },
                { title: "UBC Postgraduate Medical Education", url: "https://pgme.ubc.ca/programs/fellowships/", desc: "Fellowship Programs" },
                { title: "McGill University Health Centre", url: "https://www.mcgill.ca/pgme/programs", desc: "Fellowships" },
                { title: "University of Alberta", url: "https://www.ualberta.ca/medicine/programs/graduate/fellowships/index.html", desc: "Fellowship Programs" },
                { title: "McMaster University", url: "https://pgme.mcmaster.ca/apply/fellowships-application/", desc: "Clinical Fellowships" },
                { title: "Dalhousie University", url: "https://medicine.dal.ca/departments/core-units/pgme/programs.html", desc: "Fellowships" },
                { title: "PhysiciansApply.ca", url: "https://physiciansapply.ca", desc: "Credential Verification" },
                { title: "CPSO Pre-Entry Assessment Program", url: "https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Postgraduate-Medical-Education", desc: "Ontario PEAP Policy" },
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
