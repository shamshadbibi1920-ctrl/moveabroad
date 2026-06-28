import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ListTodo, FileText, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyWorkApplication() {
  return (
    <>
      <SEO title="Work in Italy: Application Process | MoveAbroad.pk" description="Step-by-step guide to applying for an Italian work visa, document requirements, and common mistakes to avoid." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        {/* Hero Banner */}
        <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1400&q=80" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.35]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
                🇮🇹 Italy Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Application Process & Documents 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Detailed steps to secure your visa and the required document checklist.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Document Checklist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Valid Passport (at least 6 months validity)</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Nulla Osta (Work Authorization document)</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Job Offer / Employment Contract</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Educational/Trade Certificates (HEC Attested)</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Police Clearance Certificate</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">International Polio Vaccination Certificate</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Certified Italian Translation of documents</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Passport sized photos</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Step-by-Step Process</h2>
            <ol className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-8">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Connect & Attest</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Connect with employer/agency. Get HEC attestation of qualifications if required for your field.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Translate Documents</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Get Italian translation of required documents through certified translators.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">3</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Nulla Osta Application</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Employer submits Nulla Osta application during Click Days in Italy.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">4</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Visa Application</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Receive Nulla Osta and apply for Type D visa at Italian Embassy Islamabad or Consulate Karachi.</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">5</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Arrival in Italy</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Travel to Italy and register for Permesso di Soggiorno (Residence Permit) within 8 days.</p>
                </li>
            </ol>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-red-800 dark:text-red-300 font-bold mb-2">Common Mistakes to Avoid</h3>
                <ul className="list-disc list-inside text-red-700 dark:text-red-400 text-sm space-y-1">
                  <li>Applying without a confirmed employer</li>
                  <li>Missing the narrow "Click Day" windows</li>
                  <li>Using unlicensed agents promising "free visas"</li>
                  <li>Incomplete or uncertified document translation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Useful Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="https://www.hec.gov.pk/english/services/students/Degree-Attestation-System/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                HEC Degree Attestation System
              </a>
              <a href="https://ambislamabad.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/traduttori/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                List of Certified Translators (Embassy of Italy in Pakistan)
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
