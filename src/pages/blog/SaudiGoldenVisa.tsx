import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';

export default function SaudiGoldenVisa() {
  return (
    <>
      <SEO title="Saudi Golden Visa | MoveAbroad.pk" description="Comprehensive guide to saudi golden visa for Pakistani students and professionals moving abroad." />
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
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">Saudi Arabia</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Saudi Arabia Golden Visa for Pakistani Professionals: Requirements
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Fatima Noor</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Sep 28, 2026</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
            <p className="lead text-xl text-slate-700 dark:text-slate-200 font-medium">
              Learn about the eligibility criteria for the Premium Residency program in Saudi Arabia for expats, and how a Pakistani professional can secure long-term stability in the Kingdom.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">What is Saudi Premium Residency?</h2>
            <p>
              Often referred to as the "Saudi Golden Visa," the Premium Residency allows expats to live, work, and own business/property in Saudi Arabia without needing an active sponsor (Kafeel). For Pakistani professionals who have historically lived under the strict sponsorship system, this is a path to unparalleled independence in the Middle East's largest economy.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The New Categories</h2>
            <p>
              In a bid to attract top global talent under Vision 2030, Saudi Arabia introduced multiple new categories for Premium Residency. The most relevant for Pakistani professionals are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Special Talent:</strong> Targeted at healthcare and scientific researchers (requires drawing a salary of SAR 35,000+) and executives (requires a salary of SAR 80,000+).</li>
              <li><strong>Gifted:</strong> For individuals who have won leading international awards or meet specific criteria set by the Ministries of Culture or Sports.</li>
              <li><strong>Investor:</strong> For businessmen ready to inject SAR 7 million into economic activities.</li>
              <li><strong>Entrepreneur:</strong> For founders of startups that have raised at least SAR 400,000 from recognized venture capital firms.</li>
              <li><strong>Real Estate Owner:</strong> Owning real estate worth at least SAR 4 million.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Why the Special Talent Route matters to Pakistanis</h2>
            <p>
              Many Pakistani doctors, IT executives, and financial experts hold high-paying positions in the Kingdom. If you reach the salary threshold (SAR 35,000 for specialists or SAR 80,000 for top executives), you can bypass the traditional Iqama requirements. You gain the right to change jobs freely, leave and enter the country without an exit/re-entry visa, and sponsor family members with ease.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Application Process and Costs</h2>
            <p>
              The application is entirely digital via the Premium Residency Center's portal. You will need to upload authenticated degree certificates, proof of salary (GOSI), bank statements, a clean criminal record from Pakistan and any current residence, and medical reports.
            </p>
            <p>
              <strong>Cost:</strong> Previously, it required a flat fee of SAR 800,000 for permanent residency. The newer talent visas generally require a one-time processing fee (approx. SAR 4,000), making it highly accessible for qualifying professionals.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Conclusion</h2>
            <p>
              Saudi Arabia is rapidly transforming, and the reliance on traditional visa sponsorship is shifting for top-tier talent. Determine which category fits your professional profile, gather your authenticated documents, and apply to secure a golden ticket to the Kingdom's booming economy.
            </p>
          </div>
        </motion.article>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/dha-licensing-exam-pakistani-doctors" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">DHA Licensing Exam Guide</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
