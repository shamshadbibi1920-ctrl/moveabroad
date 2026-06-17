import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, FileCheck2, AlertTriangle, Building2, Globe2, Globe, ArrowLeft} from 'lucide-react';

export default function AustraliaDocuments() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80" 
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
              Document Checklist 🇦🇺
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive document checklist to prepare your Australian permanent residency application from Pakistan.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 md:p-8 flex items-start shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 dark:text-amber-300 text-lg mb-2">Color Scans Required</h3>
            <p className="text-amber-800 dark:text-amber-300/80 text-sm leading-relaxed mb-4">
              Australia (Home Affairs) prefers high-quality, clear, color scans of your original documents. If a document is scanned in color, it usually does not need to be certified. If it is black & white, it MUST be certified by a Notary Public.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
             <Globe2 className="w-8 h-8 mr-3 text-emerald-500" /> Essential Primary Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Identity & Family</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>NADRA CNIC / SNIC:</strong> Color copy (front and back) of your Smart ID plus English translation if it is an old Urdu card.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Valid Passport:</strong> Bio-data pages for you and all dependents. Must be valid for at least 6 months.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>FRC / MRC:</strong> NADRA Family Registration Certificate (FRC). For married couples, NADRA Marriage Registration Certificate (MRC).</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Birth Certificates:</strong> Union Council / NADRA generated CRC or Birth Certificates for all children.</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Clearances & Exams</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Pakistan PCC:</strong> Police Character Certificate from your local district Police Khidmat Markaz. Must cover the last 10 years.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Form 80 & 1221:</strong> Detailed personal history forms detailing your last 10 years of travel, employment, and education exactly.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Medical Examination:</strong> Completed at an approved Bupa Medical Visa Services panel physician (e.g. IOM or specific hospitals in Pakistan). Do not do this until requested by a case officer (or upfront if generating a HAP ID).</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>English Result:</strong> Valid IELTS/PTE/TOEFL scorecard. Must be valid at time of invitation.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl overflow-hidden text-white relative">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
               <FileCheck2 className="w-64 h-64" />
             </div>
             <h2 className="text-3xl font-display font-bold mb-6 flex items-center relative z-10">
               <Building2 className="w-8 h-8 mr-3 text-emerald-400" /> Skills Assessment Authorities
             </h2>
             <p className="text-slate-300 mb-8 relative z-10 max-w-3xl">
               Unlike Canada's standardized WES process, Australia uses specific authorities for each profession. You must obtain a positive skills assessment BEFORE submitting your Expression of Interest.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
               <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl">
                 <h4 className="font-bold text-emerald-400 mb-2">Engineers Australia (EA)</h4>
                 <p className="text-sm text-slate-300 mb-2">For Civil, Mechanical, Electrical, etc.</p>
                 <p className="text-xs text-slate-400">Requires writing 3 Career Episodes (CDR) and passing a rigorous anti-plagiarism check. Pakistan degrees are Washington Accord post-2007 (but check PEC accreditation).</p>
               </div>
               
               <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl">
                 <h4 className="font-bold text-emerald-400 mb-2">Australian Computer Society (ACS)</h4>
                 <p className="text-sm text-slate-300 mb-2">For IT, Software, Cyber Security.</p>
                 <p className="text-xs text-slate-400">ACS evaluates your degree. They usually deduct 2 to 4 years of your experience to declare you "skilled". You can only claim points for experience after the skilled date.</p>
               </div>
               
               <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl">
                 <h4 className="font-bold text-emerald-400 mb-2">AHPRA / ANMAC</h4>
                 <p className="text-sm text-slate-300 mb-2">For Doctors, Nurses, Healthcare.</p>
                 <p className="text-xs text-slate-400">AHPRA registration is very strict. Pakistan medical degrees are usually accepted, but you may need to clear AMC exams (Part 1 MCQ) prior to applying.</p>
               </div>
               
               <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl">
                 <h4 className="font-bold text-emerald-400 mb-2">CPA / CA / IPA</h4>
                 <p className="text-sm text-slate-300 mb-2">For Accountants and Financial Managers.</p>
                 <p className="text-xs text-slate-400">Must map Pakistani B.Com/M.Com or ACCA to core Australian knowledge areas. Most require IELTS 7.0 academic just to assess skills.</p>
               </div>
               
               <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl">
                 <h4 className="font-bold text-emerald-400 mb-2">VETASSESS</h4>
                 <p className="text-sm text-slate-300 mb-2">For General Professions (HR, Marketing, Scientists).</p>
                 <p className="text-xs text-slate-400">Requires very comprehensive employment evidence, including organizational charts on company letterhead showing your position.</p>
               </div>
             </div>
          </div>
        </section>

        <section>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Employment Proof (Crucial)</h2>
             <p className="text-slate-600 dark:text-slate-400 mb-6">
                Australian authorities are extremely strict about proving your work experience in Pakistan. Cash salaries are heavily scrutinized and often rejected.
             </p>
             <ul className="space-y-4">
               <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                 <strong className="text-slate-900 dark:text-white block mb-1">Detailed Reference Letters</strong>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Must be on company letterhead, clearly state exact dates of employment (DD/MM/YY), full-/part-time status, salary, 5-7 detailed main duties (matching the ANZSCO code), and signed by direct manager or HR.</p>
               </li>
               <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                 <strong className="text-slate-900 dark:text-white block mb-1">Financial Evidence (Must have 2 forms)</strong>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Provide bank statements highlighting the salary deposit (must match the payroll amount exactly), FBR Tax Returns / Wealth Statements, and officially stamped payslips.</p>
               </li>
               <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                 <strong className="text-slate-900 dark:text-white block mb-1">HEC Attestation</strong>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Ensure your Pakistani degrees are attested by the Higher Education Commission (HEC). Many assessing authorities now cross-verify with HEC directly.</p>
               </li>
             </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
