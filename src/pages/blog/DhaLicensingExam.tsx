import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';

export default function DhaLicensingExam() {
  return (
    <>
      <SEO title="Dha Licensing Exam | MoveAbroad.pk" description="Comprehensive guide to dha licensing exam for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">UAE</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            DHA Licensing Exam Guide for Pakistani Doctors & Pharmacists
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Dr. Bilal</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Sep 20, 2026</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
            <p className="lead text-xl text-slate-700 dark:text-slate-200 font-medium">
              Want to practice medicine in Dubai? Here is what you need to know about preparing for the Dubai Health Authority (DHA) exam.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Why Take the DHA Exam?</h2>
            <p>
              Dubai remains one of the top destinations for Pakistani healthcare professionals seeking tax-free salaries, world-class facilities, and proximity to home. To legally practice in Dubai, passing the DHA assessment is mandatory. The same structure roughly applies to the MOH (for Northern Emirates) and HAAD (for Abu Dhabi).
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Eligibility for Pakistani Professionals</h2>
            <p>
              Before booking the exam, ensure you meet the basics:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Doctors (General Practitioners):</strong> MBBS degree recognized by WHO/PMDC, completion of 1 year house job, plus a minimum of 2 years of clinical experience post-house job.</li>
              <li><strong>Specialists:</strong> FCPS/MD/MS degrees with a minimum of 3 years of experience post-specialization to act as a Specialist.</li>
              <li><strong>Pharmacists:</strong> Pharm-D degree, registered with the Pharmacy Council of Pakistan, and at least 2 years of retail or clinical pharmacy experience.</li>
              <li><strong>Nurses:</strong> BSN Degree or 3-year Diploma with matching post-qualification clinical experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Dataflow Process (Primary Source Verification)</h2>
            <p>
              Before you can take the exam, Dubai authorities must verify that your degrees and experience certificates are genuine. This is outsourced to a company called Dataflow.
            </p>
            <p>
              You must upload your PMDC registration, degrees, transcripts, and experience letters. Dataflow contacts your university and previous employers in Pakistan directly. This takes between 25 to 45 days. <strong>Do not submit fake or exaggerated experience letters</strong>—Dataflow is incredibly thorough and a negative report leads to a permanent ban across the GCC.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Prometric Exam</h2>
            <p>
              Once Dataflow is initiated and your DHA Sheryan account is approved, you book the computer-based test via Prometric. You can take this exam in test centers located in Islamabad, Lahore, or Karachi.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usually consists of 150 multiple choice questions to be completed in 165 minutes.</li>
              <li>The passing score is generally 60%.</li>
              <li>It focuses heavily on clinical scenarios, patient safety, and current treatment protocols.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Preparation Tips</h2>
            <p>
              Many Pakistani doctors fail the first attempt because they do not grasp the exam's style. Invest in good question banks (e.g., Prometric MCQs, Pastest) and review current international guidelines. Do not rely entirely on local clinical practices, as the DHA tests on broader, international standards of care.
            </p>
          </div>
        </motion.article>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/saudi-arabia-golden-visa-pakistani-professionals" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Saudi Arabia Golden Visa Requirements</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
