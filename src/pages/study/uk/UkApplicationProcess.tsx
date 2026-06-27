import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, CheckCircle2, Link as LinkIcon, FileCheck } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkApplicationProcess() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="How to Apply to UK Universities from Pakistan | MoveAbroad.pk"
        description="Learn the application process for UK universities. Complete guide to UCAS for undergraduates and direct applications for master's programs."
        canonicalPath="/study/uk/application-process"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Study" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              UK University Application Process
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              A comprehensive guide to applying for undergraduate (UCAS) and postgraduate programs.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Undergraduate */}
          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 py-1 px-3 rounded-lg mr-3 text-sm font-bold">1</span>
              Undergraduate (Bachelor's)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              All undergraduate applications to UK universities are processed centrally through the <strong>UCAS</strong> (Universities and Colleges Admissions Service) portal.
            </p>
            
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Key Steps:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Create a UCAS account and fill in your details.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Choose up to 5 university courses.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Write a single Personal Statement (4,000 characters) that goes to all 5 choices.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Provide a reference letter from a teacher.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Pay the UCAS application fee (approx. £27.50).</span>
              </li>
            </ul>

            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Required Documents:</h4>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">• A-Level / FSc Transcripts (FSc may require a foundation year)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">• IELTS / PTE Certificate</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• Passport Copy</p>
            </div>
          </motion.div>

          {/* Postgraduate */}
          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4 flex items-center">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 py-1 px-3 rounded-lg mr-3 text-sm font-bold">2</span>
              Postgraduate (Master's/PhD)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Postgraduate applications are usually made <strong>directly to the university</strong> through their own online application portals, not UCAS.
            </p>
            
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Key Steps:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Find the course on the university website and click "Apply".</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Create an account on the university's application portal.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Write a tailored Statement of Purpose (SOP) for that specific program.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Submit 2 academic/professional references.</span>
              </li>
              <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Track application via the portal (decision takes 2-8 weeks).</span>
              </li>
            </ul>

            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Required Documents:</h4>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">• Bachelor's Degree & Transcripts (HEC Attested)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">• Statement of Purpose (SOP) & Updated CV</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">• 2 Letters of Recommendation (LORs)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• IELTS / PTE / MOI Certificate</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
            <FileCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> HEC Attestation Requirement
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Pakistani students must ensure their Bachelor's/Master's degrees are attested by the Higher Education Commission (HEC) of Pakistan. While some universities accept un-attested copies for conditional offers, you will need HEC attested documents for final unconditional offers and visa processes.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="https://www.ucas.com/" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              UCAS Portal <LinkIcon className="w-4 h-4 ml-2" />
            </a>
            <a href="https://eservices.hec.gov.pk/" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors">
              HEC E-Portal <LinkIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
