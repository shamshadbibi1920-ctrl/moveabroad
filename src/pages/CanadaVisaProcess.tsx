import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, Clock, Globe, ArrowRight, BookOpen, AlertTriangle, HelpCircle } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function CanadaVisaProcess() {
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
              alt="Canada Visa" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-indigo-900"></div>
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/study/canada" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Canada
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Canada Student Visa (Study Permit) Guide
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Complete guide for Pakistani students applying for the Canadian Study Permit via the fast-tracked SDS route or Regular Stream.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Visa Types */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-16 bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center">
            <Globe className="w-8 h-8 mr-4 text-indigo-600 dark:text-indigo-400" /> Types of Canadian Student Visas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 text-indigo-600 dark:text-indigo-400">Study Permit (Main)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                The primary document allowing foreign nationals to study at a DLI (Designated Learning Institution) in Canada. It usually comes with a TRV automatically.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-3 text-emerald-600 dark:text-emerald-400">Student Direct Stream (SDS)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                An expedited study permit processing program. Pakistani citizens are eligible. It requires upfront GIC, IELTS 6.0, and payment of first-year tuition.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 text-amber-600 dark:text-amber-400">Temporary Resident Visa (TRV)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Required for Pakistani citizens to physically enter Canada. It is issued automatically with your approved Study Permit.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SDS Focus */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-16 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] p-8 shadow-sm border border-emerald-100 dark:border-emerald-800/30">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
            <CheckCircle2 className="w-8 h-8 mr-4 text-emerald-600 dark:text-emerald-400" /> The SDS Program for Pakistani Students
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">
            We highly recommend applying through the <strong>Student Direct Stream (SDS)</strong> for faster processing times (often within 20 days). To be eligible for SDS, you must:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">1</span>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">IELTS Requirement</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">Overall score of 6.0 or higher in IELTS Academic or General.</span>
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">2</span>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">Proof of Funds (GIC)</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">Provide a Guaranteed Investment Certificate (GIC) of CAD $20,635.</span>
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">3</span>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">Tuition Payment</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">Provide proof that you have paid the tuition fees for your first year of study.</span>
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">4</span>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">Upfront Medical & Police</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">Complete upfront medical exam and provide police clearance certificates.</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step-by-Step */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center">
            <Clock className="w-8 h-8 mr-4 text-indigo-600 dark:text-indigo-400" /> Step-by-Step Visa Process
          </h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-blue-500 before:to-indigo-500">
            {[
              { title: 'Step 1: Get acceptance from DLI', desc: 'Secure an official Letter of Acceptance from a Designated Learning Institution in Canada. Also acquire the Provincial Attestation Letter (if applicable).' },
              { title: 'Step 2: Pay GIC (Guaranteed Investment Certificate)', desc: 'Open a GIC account (e.g. via Scotiabank or CIBC online from Pakistan) and wire transfer CAD $20,635 to show proof of living expenses.' },
              { title: 'Step 3: Get medical exam done', desc: 'Book an upfront medical examination with an IRCC panel physician in Pakistan (e.g. IOM or local designated hospitals).' },
              { title: 'Step 4: Get police clearance', desc: 'Obtain Police Clearance Certificates from any country you have lived in for more than 6 months over the age of 18.' },
              { title: 'Step 5: Gather all documents', desc: 'Compile passport, LOA, GIC receipt, upfront medical, IELTS TRF, HEC attested degree docs, and family registration certificate (FRC).' },
              { title: 'Step 6: Apply online via IRCC portal', desc: 'Create an IRCC secure account, fill the forms, upload merged PDF document files, and pay the CAD $150 application fee + $85 biometrics fee.' },
              { title: 'Step 7: Give biometrics', desc: 'Once you receive the Biometrics Instruction Letter (BIL), schedule an appointment at VFS Global in Islamabad, Lahore, or Karachi.' },
              { title: 'Step 8: Wait for decision', desc: 'If applying under SDS, wait times can be as low as 20 days. Regular stream might take 8-12 weeks.' },
              { title: 'Step 9: Receive study permit and travel', desc: 'Receive passport request for TRV stamping. Upon arriving in Canada, the actual Study Permit will be printed and handed to you at the border.' }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Links */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 text-white shadow-xl">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-indigo-400" /> Official Visa Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 dark:bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
              <span className="font-medium mr-auto">IRCC Official Study Portal</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/student-direct-stream.html" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 dark:bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
              <span className="font-medium mr-auto">SDS Program Details</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a href="https://visa.vfsglobal.com/pak/en/can/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 dark:bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
              <span className="font-medium mr-auto">VFS Global Pakistan</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a href="https://www.international.gc.ca/country-pays/pakistan/islamabad.aspx?lang=eng" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-800 dark:bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
              <span className="font-medium mr-auto">Canadian High Commission Islamabad</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
