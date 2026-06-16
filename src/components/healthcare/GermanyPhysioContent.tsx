import React from 'react';
import { CheckCircle2, AlertTriangle, ExternalLink, Calendar, Banknote, Briefcase, Globe, Settings, ChevronRight, UserCheck } from 'lucide-react';
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
      
      {/* Warning Box */}
      <motion.div variants={itemVariants} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 flex items-start shadow-sm">
        <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500 mr-4 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">Important Notice</h4>
          <p className="text-amber-800 dark:text-amber-200">
            Requirements vary by German state. Always verify with the relevant state health authority before starting the process.
          </p>
        </div>
      </motion.div>

      {/* 1. Extended Overview */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Globe className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> High Demand Physiotherapy 
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            <strong>Widespread Shortages:</strong> With an aging population focused heavily on rehab clinics, physiotherapy (Physiotherapie) is one of the most in-demand professions across Germany.
          </p>
          <p>
            <strong>Career Paths:</strong> Options include clinics, hospitals, or eventually setting up a private functional practice.
          </p>
          <p>
            <strong>Earning Potential:</strong> Average salaries stretch broadly from €35,000 to €55,000 per year initially, rising drastically for those forming private clinics.
          </p>
        </div>
      </motion.section>

      {/* 2. License Recognition Process */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Settings className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> License Recognition Process
        </h2>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 dark:before:via-teal-800 before:to-transparent">
          {[
            { step: '1', title: 'PT Qualification Certificate', desc: 'Acquire your PT certificate/registration from Pakistan.' },
            { step: '2', title: 'HEC Attestation', desc: 'Secure HEC attestation on your DPT degree.' },
            { step: '3', title: 'Translations', desc: 'Ensure you have certified German translations.' },
            { step: '4', title: 'State Output Application', desc: 'Apply explicitly to the relevant regional state health authority (Regierungspräsidium).' },
            { step: '5', title: 'Equivalence Test', desc: 'The curriculum comparison against German benchmarks happens here.' },
            { step: '6', title: 'Compensation Measures', desc: 'Complete adaptation courses or aptitude checks if needed.' },
            { step: '7', title: 'German Language (B2)', desc: 'Successfully achieve and show certification for B2 German.' },
            { step: '8', title: 'Recognition & Work Permit', desc: 'Gain official work permit to kickstart practice.' }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30">
          <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center">
            <Calendar className="w-4 h-4 mr-2" /> Processing Time
          </h4>
          <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">This overarching progression maps out over 3 to 12 months typically.</p>
        </div>
      </motion.section>

      {/* 3. Required Documents */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <UserCheck className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Required Documents Checklist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            'Valid passport',
            'DPT degree attested by HEC',
            'PT council registration certificate',
            'Academic transcripts',
            'Work experience certificates',
            'German language certificate B2',
            'Police clearance certificate',
            'Health certificate',
            'Certified German translations'
          ].map((doc, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">{doc}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. Salary & Benefits */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Banknote className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Salary & Benefits
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Junior Physiotherapist</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€35,000 - €42,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Experienced Physiotherapist</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€42,000 - €55,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Private Practice</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€55,000 - €100,000 / year</span>
              </li>
            </ul>
          </div>
          <div>
             <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Benefits</h3>
             <ul className="space-y-3">
              {[
                'Comprehensive Health insurance',
                'Pension system',
                'Paid holidays',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 5. Specializations & 6. Job Search */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
            <CheckCircle2 className="w-7 h-7 mr-3 text-teal-600 dark:text-teal-400" /> Specializations
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Sports physiotherapy', 'Neurological rehabilitation', 'Pediatric physiotherapy', 'Orthopedic physiotherapy', 'Geriatric physiotherapy'].map(spec => (
              <span key={spec} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                {spec}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-teal-600 dark:bg-teal-900 rounded-[2rem] p-8 text-white shadow-sm">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="w-7 h-7 mr-3" /> Job Search
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-teal-50">
            <li><strong>Hospitals and rehabilitation centers</strong></li>
            <li><strong>Sports clubs and fitness centers</strong></li>
            <li><strong>Private practices</strong></li>
            <li><strong>Portals:</strong> Physio-Jobs.de, Medi-Jobs.de, Indeed.de</li>
          </ul>
        </div>
      </motion.div>

      {/* Official Links */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "HEC Attestation Portal", url: "https://www.hec.gov.pk/" },
            { title: "Physio-Jobs", url: "https://www.physio-jobs.de/" },
            { title: "Make it in Germany", url: "https://www.make-it-in-germany.com/en/jobs/professions-in-demand/other-health-care-professions" },
            { title: "Goethe Institut Pakistan", url: "https://www.goethe.de/ins/pk/en/index.html" }
          ].map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-colors group">
              <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400">{link.title}</span>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-500" />
            </a>
          ))}
        </div>
      </motion.section>

       <motion.div variants={itemVariants} className="pt-8">
        <Link to="/healthcare-abroad" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
          <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
          Back to Healthcare Overview
        </Link>
      </motion.div>
    </motion.div>
  );
}
