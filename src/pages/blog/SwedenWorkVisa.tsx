import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar } from 'lucide-react';

export default function SwedenWorkVisa() {
  return (
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
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">Sweden</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Sweden Work Visa Processing Time for Pakistanis (2026 Update)
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Usman Raza</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Oct 05, 2026</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
            <p className="lead text-xl text-slate-700 dark:text-slate-200 font-medium">
              Everything you need to know about the current visa processing times and requirements for moving to Sweden as a skilled professional from Pakistan.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Swedish Job Market for Pakistanis</h2>
            <p>
              Sweden is famous for its innovation-driven economy, excellent work-life balance, and English-friendly environment. For Pakistani software engineers, data scientists, engineers, and healthcare professionals, Sweden offers a lucrative and peaceful lifestyle. However, navigating the Swedish Migration Agency (Migrationsverket) can be testing.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Current Processing Times in 2026</h2>
            <p>
              As of 2026, the processing times have seen significant changes to prioritize highly qualified workers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Highly Qualified Workers (Certified Employers):</strong> If your employer in Sweden is certified by the Migration Agency, processing can be incredibly fast—often between 2 to 4 weeks.</li>
              <li><strong>Standard Work Permits:</strong> If your employer is not certified, processing times can range from 3 to 6 months, and sometimes longer depending on the completeness of your application.</li>
              <li><strong>Dependents (Family Members):</strong> Luckily, applying for your spouse and children simultaneously usually links their applications to yours, meaning they are processed within roughly the same timeframe.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Key Requirements for the Work Visa</h2>
            <p>
              To secure a Swedish work permit, the offer must meet strict union standards:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Valid Passport:</strong> Ensure your Pakistani passport has sufficient validity.</li>
              <li><strong>Job Offer:</strong> You must have a signed employment contract from a Swedish employer.</li>
              <li><strong>Salary Threshold:</strong> From late 2023 onwards, Sweden significantly increased its salary threshold. You must be paid a salary that corresponds to at least 80% of the median salary in Sweden (approx. 27,360 SEK/month).</li>
              <li><strong>Insurance:</strong> Your employer must cover health, life, and occupational injury insurance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Steps to Apply</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Your employer initiates the application online via the Swedish Migration Agency.</li>
              <li>You receive an email to complete your part of the application, upload documents, and pay the visa fee.</li>
              <li>Wait for processing. Provide additional information promptly if requested.</li>
              <li>Once approved, you must visit the Swedish Embassy in Islamabad to submit biometric data to obtain your Residence Permit Card (UT Card).</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Overcoming Common Delays</h2>
            <p>
              A huge percentage of delays for Pakistani applicants involve missing documents or incorrect passport details. Always ensure that the name on your job offer perfectly matches your passport. Be proactive by ensuring your employer has consulted the relevant trade union regarding your employment terms before submitting the application.
            </p>
          </div>
        </motion.article>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/swedish-institute-scholarships-pakistan" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Swedish Institute Scholarships</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
            <Link to="/blog/germany-opportunity-card-pakistan-2026" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Germany Opportunity Card</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
