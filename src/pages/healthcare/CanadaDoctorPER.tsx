import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, FileText, ArrowLeft, ArrowRight, UserCheck, BookOpen, Languages, MapPin, Scale, Award, ExternalLink } from 'lucide-react';
import { getCountryData } from '../../data/countries';
import SEO from '../../components/SEO';

export default function CanadaDoctorPER() {
  const data = getCountryData('canada');
  const countryName = "Canada";
  const professionName = "Doctor (PER Pathway)";

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
      <SEO title="Canada Doctor P E R | MoveAbroad.pk" description="Comprehensive guide to canada doctor p e r for Pakistani students and professionals moving abroad." />
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
              Practice Eligibility Route (PER) {data?.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              The Royal College examination-challenge route for highly experienced specialists whose training directly maps to Canadian standards.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="space-y-12">
          
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pathway Overview</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              The Practice Eligibility Route (PER) is governed by the Royal College of Physicians and Surgeons of Canada (RCPSC). It is meant for internationally trained specialists whose training program durations and curriculum identically match Canadian residency requirements. If the Royal College approves your file, you may bypass Canadian residency completely and sit directly for the Canadian board certification exams.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 flex items-start">
              <Scale className="w-6 h-6 text-blue-600 dark:text-blue-500 mr-4 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Highly Rigorous Review</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                  Unlike PRA (which assesses you clinically), the PER assesses you entirely on paper first. You must compile encyclopedic evidence of your local specialist training (FCPS/MD) logs, rotational durations, and independent practice volume. The Royal College rejects files that lack precise matching equivalents to Canadian rotations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Process & Conditions</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Practice Verification", desc: "You must have actively practiced as a specialist for a minimum number of years in your home country.", icon: <UserCheck /> },
                { step: "2", title: "Submit Credentials for Ruling", desc: "Pay the massive review fee to the Royal College and submit syllabi, training logs, and surgical records.", icon: <FileText /> },
                { step: "3", title: "The Assessment Ruling", desc: "If approved, you are granted 'eligibility'. If lacking, you are rejected or told to do a few years of clinical fellowship in Canada first to bridge the gap.", icon: <Scale /> },
                { step: "4", title: "Sit the Royal College Exams", desc: "Take the famously difficult specialist written and oral exams in Canada.", icon: <Award /> },
              ].map((item, i) => (
                <div key={i} className="flex bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0 mr-6">
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

          <section className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800/30">
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6 flex items-center">
              <AlertTriangle className="mr-3 w-6 h-6" /> Truth About the PER for FCPS
            </h2>
            <p className="text-amber-800 dark:text-amber-200 leading-relaxed mb-4">
              Many Pakistani doctors attempt the PER route with an FCPS. Be aware: Canadian residencies are generally 4-6 years of pure protected training time. If your FCPS program only included 3 years of actual training followed by independent work that you classified as "training," the RCPSC will reject your application for falling short.
            </p>
            <p className="text-amber-800 dark:text-amber-200 leading-relaxed font-bold">
              It is heavily advised to secure a Canadian physician immigration consultant to vet your logs before paying the $3,000+ CAD non-refundable assessment fee.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links — Royal College & Licensing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Royal College PER", url: "https://royalcollege.ca/en/eligibility-and-exams/exam-eligibility/practice-eligibility-route", desc: "Practice Eligibility Route" },
                { title: "Royal College Exam Eligibility", url: "https://royalcollege.ca/content/rcpsc-site-v2/ca/en/eligibility-and-exams/exam-eligibility.html", desc: "Exam Eligibility Overview" },
                { title: "Royal College PER FAQ (PDF)", url: "https://royalcollege.ca/content/dam/document/eligibility-and-exams/per-faq-2025-e.pdf", desc: "Frequently Asked Questions" },
                { title: "Royal College eBooking", url: "https://login.royalcollege.ca", desc: "Application Portal" },
                { title: "PhysiciansApply.ca", url: "https://physiciansapply.ca", desc: "Credential Verification" },
                { title: "CPSO — PER Supervised Practice Pathway", url: "https://dialogue.cpso.on.ca/articles/new-pathway-to-supervised-practice-for-internationally-trained-specialists-", desc: "Ontario Supervised Practice" },
                { title: "Medical Council of Canada (MCCQE1)", url: "https://mcc.ca/examinations-assessments/mccqe/", desc: "Medical Council of Canada Qualifying Exam Part 1" },
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
