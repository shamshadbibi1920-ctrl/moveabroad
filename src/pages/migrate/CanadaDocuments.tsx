import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, FileCheck2, Building2, Globe2, Globe, AlertTriangle , ArrowLeft} from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaDocuments() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Required Documents for Canada PR from Pakistan | Checklist 2026"
        description="Complete document checklist for Canada Express Entry and PNP. NADRA CNIC, HEC attestation, Police Certificate, and ECA guide."
        canonicalPath="/migrate/canada/documents"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Canada Migration
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Document Checklist 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A complete checklist of documents required for Canada immigration from Pakistan, ensuring a smooth application process.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 md:p-8 flex items-start shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 dark:text-amber-300 text-lg mb-2">Crucial Note for Pakistani Documents</h3>
            <p className="text-amber-800 dark:text-amber-300/80 text-sm leading-relaxed mb-4">
              Any document not in English or French (e.g., Urdu Nikah Nama, FRC, birth certificates) MUST be accompanied by an certified English translation and an affidavit from the person who completed the translation. Name spellings MUST exactly match your passport across all documents (degrees, CNIC, letters).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
             <Globe2 className="w-8 h-8 mr-3 text-rose-500" /> General / Pakistan-Specific Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Identity & Family</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>NADRA CNIC / SNIC:</strong> Provide a clear color copy (front and back) of your Smart National Identity Card.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Passport:</strong> Biometric pages, plus all visa/stamp pages to prove travel history.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>FRC / MRC:</strong> NADRA Family Registration Certificate (FRC) and Marriage Registration Certificate (MRC). Traditional Urdu/Arabic Nikah Nama must be translated and notarized.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Digital Photos:</strong> Strict IRCC specifications (50mm x 70mm, dated on back).</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Attestations & Clearances</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>HEC Attestation:</strong> Required for ECA. Degrees and transcripts must be attested by the Higher Education Commission of Pakistan.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Police Clearance Certificate (PCC):</strong> Apply via local Police Khidmat Markaz, IG Office, or MOFA. Must be for any country you lived in for 6+ months consecutively in the last 10 years.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>ECA Guide by Profession:</strong> WES for general. PEBC for Pharmacists. MCC for Doctors. MCC/PEBC processing requires direct university envelope sealing.</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="pt-0.5"><strong>Language Proof:</strong> Valid IELTS General or CELPIP (Results strictly valid for 2 years).</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Checklists by Program</h2>
          
          {/* Express Entry */}
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 md:p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800/30">
             <h3 className="text-2xl font-bold flex items-center text-emerald-900 dark:text-emerald-400 mb-6">
               <FileCheck2 className="w-6 h-6 mr-3 text-emerald-500" /> Express Entry (FSW, CEC)
             </h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Educational Credential Assessment (ECA) report number</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Language test results (TRF number)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Employment Reference Letters (Must include specific NOC duties, salary, hours, company letterhead, signature)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Proof of Funds (Bank statements for past 6 months showing average balance + Official Bank Letter)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Upfront Medical Exam (e-Medical tracking sheet)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">PCC (Police Clearance) from all applicable countries</li>
             </ul>
          </div>

          {/* PNP */}
          <div className="bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-3xl border border-blue-200 dark:border-blue-800/30">
             <h3 className="text-2xl font-bold flex items-center text-blue-900 dark:text-blue-400 mb-6">
               <Building2 className="w-6 h-6 mr-3 text-blue-500" /> Provincial Nominee Program (PNP)
             </h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Requires EVERYTHING from the Express Entry list, PLUS:</p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Provincial Expression of Interest (EOI) confirmation</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Provincial Nomination Certificate (once approved)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Proof of intention to reside (e.g. Settlement plan, local job search proof, communication with local community)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Job Offer Letter & valid LMIA (if applying under an employer stream)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Provincial specific forms (e.g., OINP Application form)</li>
             </ul>
          </div>

          {/* Family Sponsorship */}
          <div className="bg-rose-50 dark:bg-rose-900/10 p-6 md:p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30">
             <h3 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-6">
               <ShieldCheck className="w-6 h-6 mr-3 text-rose-500" /> Family / Spousal Sponsorship
             </h3>
             <ul className="grid grid-cols-1 gap-4 text-sm text-slate-700 dark:text-slate-300">
               <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                 <strong className="block mb-1 text-slate-900 dark:text-white">Forms:</strong> IMM 1344 (Application to Sponsor), IMM 0008 (Generic App), IMM 5532 (Relationship Info/Sponsorship Evaluation), IMM 5669 (Schedule A).
               </li>
               <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                 <strong className="block mb-1 text-slate-900 dark:text-white">Sponsor (in Canada):</strong> CRA Notice of Assessment (NOA) for recent years, employment letter, copy of PR card/Passport, T4 slips.
               </li>
               <li className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                 <strong className="block mb-1 text-slate-900 dark:text-white">Proof of Relationship (Pakistan context):</strong> Translated Nikah Nama + MRC. Wedding invitation cards. Minimum 20 wedding photos. Proof of continuous communication (WhatsApp logs). Remittance slips if providing financial support.
               </li>
             </ul>
          </div>

          {/* AIP */}
          <div className="bg-purple-50 dark:bg-purple-900/10 p-6 md:p-8 rounded-3xl border border-purple-200 dark:border-purple-800/30">
             <h3 className="text-2xl font-bold flex items-center text-purple-900 dark:text-purple-400 mb-6">
               <FileCheck2 className="w-6 h-6 mr-3 text-purple-500" /> Atlantic Immigration Program (AIP)
             </h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Certificate of Endorsement from the Atlantic province</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Offer of Employment to a Foreign National form (IMM 5650)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Individualized Settlement Plan (from approved provider)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Language Test Results (usually CLB 4 or 5 requirement)</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">ECA (WES) proving minimum high school equivalency</li>
               <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Reference letters proving 1 year continuous work</li>
             </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Document Guides</h2>
          <div className="space-y-3">
             <a href="https://www.wes.org/ca/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">WES Canada Portal (ECA)</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://hec.gov.pk/english/services/students/Degree-Attestation-System/Pages/Degree-Attestation.aspx" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">HEC Pakistan Attestation Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Guide: Police Certificate from Pakistan</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>
      </div>
    </div>
  );
}
