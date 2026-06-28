import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, AlertTriangle, FileText, ArrowLeft, ArrowRight, UserCheck, BookOpen, Languages, MapPin, Activity, Stethoscope, ExternalLink } from 'lucide-react';
import { getCountryData } from '../../data/countries';
import SEO from '../../components/SEO';

export default function CanadaDoctorPRA() {
  const data = getCountryData('canada');
  const countryName = "Canada";
  const professionName = "Doctor (PRA Pathway)";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <SEO title="Canada Doctor P R A | MoveAbroad.pk" description="Comprehensive guide to canada doctor p r a for Pakistani students and professionals moving abroad." />
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
              Practice Ready Assessment (PRA) {data?.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              The direct licensing route for experienced family physicians and specialists bypassing full residency retraining.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="space-y-12">
          
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pathway Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              If you have already completed residency training abroad and have been practicing independently, forcing you to repeat a 5-year residency is highly inefficient. To solve this, Canadian provinces introduced the Practice Ready Assessment (PRA). Instead of retraining, your clinical skills are directly observed and evaluated over a 12-week period. Earning a pass grants you a conditional license to practice.
            </p>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800/30 flex items-start">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100">Best For</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mt-1">
                  Experienced FCPS Specialists, General Practitioners with significant independent clinic experience, and IMGs looking to avoid the brutal CaRMS match competition.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Strict Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <Activity className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Currency of Practice</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">You must prove you have acted as the primary, independent physician without supervision. Usually requires showing continuous practice in the last 3-5 years.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <BookOpen className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">MCCQE Part 1</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">You must have completed source verification via PhysiciansApply and passed the MCCQE Part 1 examination unconditionally.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <FileText className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">TDM / NAC OSCE</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Family physicians often require the Therapeutics Decision-Making (TDM) exam. Specialists may require the NAC OSCE depending on the province.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <Languages className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Language</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Valid, high bands in IELTS Academic or OET Medicine are mandatory.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Process & Return of Service (ROS)</h2>
            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300">
                1. Apply to a provincial PRA scheme (e.g., SIPPA in Saskatchewan, PRA-BC in British Columbia).<br/>
                2. Undergo file review and interviews.<br/>
                3. If selected, begin a 12-week supervised clinical assessment in a Canadian health authority clinic.<br/>
                4. Pass the assessment to receive a Provisional License.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-900 dark:text-amber-100">The ROS Contract</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mt-2">
                  To participate in a PRA, you MUST sign a legally binding Return of Service (ROS) contract. This means you agree to work in an "underserved" or rural Canadian community determined by the province for a minimum of 2 to 4 years.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Provincial PRA Program — Official Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Alberta PRA (CPSA)", url: "https://cpsa.ca/physicians/registration/apply-to-practise/independent-practice/pra/", desc: "Practice Ready Assessment Alberta" },
                { title: "British Columbia PRA-BC", url: "https://www.prabc.ca", desc: "Practice Ready Assessment BC" },
                { title: "Ontario Practice Ready (PRO)", url: "https://touchstoneinstitute.ca/assessment/practice-ready-ontario/", desc: "Practice Ready Ontario" },
                { title: "Saskatchewan Health Authority", url: "https://www.saskatoonhealthregion.ca/locations_services/Services/IMG/Pages/default.aspx", desc: "IMG Recruitment (SIPPA)" },
                { title: "Manitoba PRA-MB", url: "https://umanitoba.ca/medicine/student-affairs/img-program", desc: "University of Manitoba IMG Program" },
                { title: "Medical Council of Canada (PRA)", url: "https://mcc.ca/examinations-assessments/practice-ready-assessment/", desc: "PRA Overview" },
                { title: "MCC Therapeutics Decision Making", url: "https://mcc.ca/examinations-assessments/tdm/", desc: "TDM Exam Information" },
                { title: "PhysiciansApply.ca", url: "https://physiciansapply.ca", desc: "Credential Verification" },
                { title: "Alberta Doctor Jobs", url: "https://www.doctorjobsalberta.com", desc: "Sponsorship Portal" },
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
    </>
  );
}
