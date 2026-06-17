import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, CheckCircle2, AlertTriangle, ExternalLink, GraduationCap, Briefcase, Info, List as ListIcon, ShieldAlert } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function GermanyApplicationProcess() {
  const germanyData = getCountryData('germany');
  const heroImage = germanyData?.heroImage || 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80';

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Germany" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl">
            <Link to="/study/germany" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Germany
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How to Apply to German Universities
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Complete Guide for Pakistani Students — Bachelor & Master Applications
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            {/* MANDATORY APS BOX */}
            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-amber-50 dark:bg-amber-900/20 rounded-[2rem] p-8 md:p-10 shadow-sm border border-amber-200 dark:border-amber-800/50">
              <div className="flex items-center mb-6">
                <ShieldAlert className="w-8 h-8 text-amber-600 dark:text-amber-400 mr-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-900 dark:text-amber-100">Mandatory APS Certificate</h2>
              </div>
              <p className="text-amber-800 dark:text-amber-200 text-lg leading-relaxed mb-6">
                The Academic Evaluation Centre (Akademische Prüfstelle or APS) certificate is <strong>mandatory</strong> for all Pakistani students applying to German universities and for the student visa. It verifies the authenticity of your Pakistani educational documents.
              </p>
              <ul className="space-y-3 mb-6 text-amber-800 dark:text-amber-200">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" /> Apply online on the official APS Pakistan website.</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" /> Print and sign the form, and physically mail it along with certified copies of your documents via courier to the APS office in Islamabad.</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" /> <strong>Processing Time:</strong> Typically 4 to 8 weeks, but can take longer during peak season. Apply as early as possible.</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" /> <strong>Cost:</strong> Approx. 25,000 PKR to 35,000 PKR (verify exact current fee on their official website).</li>
              </ul>
            </motion.section>

            {/* BACHELOR STUDENTS */}
            <motion.section id="bachelor" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <GraduationCap className="w-8 h-8 mr-4 text-blue-600 border-b dark:text-blue-400" /> For Bachelor Students
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center"><FileText className="w-5 h-5 mr-2 text-blue-500" /> Required Documents</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Matric Certificate (SSC)", "FSc Certificate (HSSC)", "IBCC Equivalency", "Transcripts (if any university credits)", "Valid Passport copy", "Passport-size photographs", "Blocked Bank Account confirmation", "Motivation Letter (SOP)", "Language Proof (IELTS / MOI / Goethe-Zertifikat)", "APS Certificate"].map((doc, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                        <ListIcon className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-slate-400" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 block">IBCC Equivalency Process</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">Before applying for the APS, you must get your Matric and FSc certificates attested by the relevant BISE (Board of Intermediate and Secondary Education) and then obtain an equivalency/attestation from IBCC (Inter Board Committee of Chairmen).</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic">Takes approx. 1-3 weeks depending on the board and IBCC queue.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 block">How to apply via Uni-Assist</h3>
                  <p className="text-slate-600 dark:text-slate-400">Most German universities use Uni-Assist to pre-evaluate international qualifications. You must create an account, upload notarized/attested documents, pay the handling fee (around €75 for the first uni, €30 for subsequent), and submit your application online. Uni-Assist converts your Pakistani GPA to the German grading system (Bavarian formula).</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900/50">
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Tips for Pakistani Bachelor Applicants:</h4>
                  <ul className="list-disc list-inside text-blue-700 dark:text-blue-400 space-y-1 text-sm">
                    <li>Pakistan's 12-year education (FSc) is often not considered direct equivalent to the German Abitur (13 years).</li>
                    <li>You will likely need to attend a <strong>Studienkolleg</strong> (1-year foundation course) and pass the Feststellungsprüfung (FSP) unless you have completed 1-2 years of a Bachelor's degree in Pakistan.</li>
                    <li>Studienkolleg usually requires B1 or B2 level German proficiency, even if you plan to study in English later.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* MASTER STUDENTS */}
            <motion.section id="master" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <Briefcase className="w-8 h-8 mr-4 text-indigo-600 border-b dark:text-indigo-400" /> For Master Students
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center"><FileText className="w-5 h-5 mr-2 text-indigo-500" /> Required Documents</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Bachelor Degree (HEC Attested)", "Bachelor Transcripts (HEC Attested)", "Professional CV (Europass format)", "Work Experience letters (if any)", "Valid Passport copy", "Motivation Letter (SOP)", "2-3 Reference Letters (Academic/Professional)", "APS Certificate", "Language Proof (IELTS / MOI / German)", "Blocked Account confirmation"].map((doc, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                        <ListIcon className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-slate-400" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 block">HEC Degree Attestation</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">Before APS processing, your Bachelor's degree and transcripts must be attested by the Higher Education Commission (HEC) of Pakistan. Create a profile on the HEC portal, upload your documents for initial scrutiny, and book a courier or walk-in appointment.</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic">Processing time depends on scrutiny and appointment availability (often 2-4 weeks).</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 block">Uni-Assist for Masters</h3>
                  <p className="text-slate-600 dark:text-slate-400">Like Bachelors, many Master's applications run through Uni-Assist. Ensure your uploaded HEC-attested documents and APS certificate are high-quality scans. Uni-Assist evaluates if your Pakistani Bachelor's meets the ECTS credit requirements for your chosen German Master's program.</p>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                  <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Tips for Pakistani Master Applicants:</h4>
                  <ul className="list-disc list-inside text-indigo-700 dark:text-indigo-400 space-y-1 text-sm">
                    <li>German universities strictly map your Bachelor subjects to their Master requirements. Ensure you meet the specific ECT (credit) prerequisites.</li>
                    <li>If you have a 2.5 or better German GPA equivalent, you have a solid chance at top public universities.</li>
                    <li>Draft a highly specific Motivation Letter. German universities value academic alignment over general emotional narratives.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            
            {/* Visual Checklist Box */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Milestone Checklist
              </h3>
              <div className="space-y-4">
                {[
                  "Attest documents (IBCC/HEC)",
                  "Apply for APS Certificate early",
                  "Prepare IELTS/Language proof",
                  "Open Blocked Bank Account",
                  "Submit via Uni-Assist or Portal",
                  "Receive Admission Letter",
                  "Apply for Student Visa"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                    <div className="w-6 h-6 rounded border border-slate-300 dark:border-slate-600 mr-3 flex-shrink-0 flex items-center justify-center"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deadlines Calendar */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-800 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" /> Important Deadlines
              </h3>
              <div className="space-y-4">
                <div className="border-b border-slate-700 pb-3">
                  <h4 className="font-semibold text-blue-300 mb-1">Winter Semester (Starts Oct)</h4>
                  <p className="text-slate-300 text-sm">Application Period: Early May — July 15</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-1">Summer Semester (Starts Apr)</h4>
                  <p className="text-slate-300 text-sm">Application Period: Early Dec — Jan 15</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg mt-2">
                  <p className="text-xs text-slate-300">
                    <AlertTriangle className="w-3 h-3 inline mr-1 text-amber-400" /> 
                    Apply 4-6 weeks before these deadlines if using Uni-Assist to allow processing time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/50">
              <h3 className="font-bold text-xl text-red-900 dark:text-red-300 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" /> Common Mistakes
              </h3>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-red-800 dark:text-red-200">
                <li>Applying to APS too late, causing missed application or visa deadlines.</li>
                <li>Failing to match bachelor credits with master program requirements.</li>
                <li>Submitting uncertified or poorly scanned documents to Uni-assist.</li>
                <li>Ignoring specific English or German language requirements.</li>
              </ul>
            </motion.div>

            {/* Official Links */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                <ExternalLink className="w-5 h-5 mr-2 text-slate-500" /> Official Links
              </h3>
              <div className="space-y-3">
                <a href="https://pakistan.diplo.de/pk-en/service/aps" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  APS Pakistan Official Website
                </a>
                <a href="https://www.uni-assist.de/en/" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Uni-Assist Application Portal
                </a>
                <a href="https://www.daad.de/en/study-and-research-in-germany/" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  DAAD (German Academic Exchange)
                </a>
                <a href="https://www.hec.gov.pk/english/services/students/Degree-Attestation-System/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  HEC Degree Attestation
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
