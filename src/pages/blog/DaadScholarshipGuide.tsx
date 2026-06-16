import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';

export default function DaadScholarshipGuide() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 transition-colors duration-300">
      <SEO 
        title="DAAD Scholarship 2026 for Pakistani Students — Complete Guide"
        description="How to apply for DAAD scholarship from Pakistan. Eligibility, required documents, deadlines and tips to win."
        canonicalPath="/blog/daad-scholarships-germany-pakistan"
      />
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
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">Scholarships</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Fully Funded DAAD Scholarships for Pakistani Students: Complete Guide
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Sara Ahmed</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Oct 12, 2026</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
            <p className="lead text-xl text-slate-700 dark:text-slate-200 font-medium">
              A comprehensive step-by-step guide to applying for DAAD scholarships for Masters and PhD programs in Germany, specifically tailored for Pakistani applicants.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">What is the DAAD Scholarship?</h2>
            <p>
              The German Academic Exchange Service (DAAD) is one of the world's largest funding organizations for international exchange. For Pakistani students, a DAAD scholarship is highly prestigious. It covers your tuition, provides a monthly stipend (around €934 for Masters and €1,300 for PhDs), health insurance, and even travel allowances. 
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Key DAAD Programs for Pakistanis</h2>
            <p>
              While DAAD offers many programs, the most popular for Pakistani students are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>EPOS (Development-Related Postgraduate Courses):</strong> Aimed at professionals with at least two years of work experience looking to do a Master's or PhD in specific development-related fields.</li>
              <li><strong>Helmut-Schmidt-Programme:</strong> For future leaders in politics, law, economics, and administration.</li>
              <li><strong>Research Grants:</strong> For PhD candidates and post-doctoral researchers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Eligibility Requirements</h2>
            <p>
              The requirements vary strictly by program, but generally include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A Bachelor's degree (usually 16 years of education for Masters applications) completed with above-average results.</li>
              <li>Your last academic degree should generally not be older than six years.</li>
              <li>Language proficiency: IELTS or TOEFL for English-taught programs. Some programs require German proficiency (DSH or TestDaF).</li>
              <li>For EPOS: At least two years of relevant professional experience after your Bachelor's degree.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Application Process</h2>
            <p>
              The application timeline requires immense dedication. Often, deadlines are almost a year before the course starts (e.g., applying in August 2026 for an October 2027 start).
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Find your program:</strong> Use the DAAD database to find courses that align with your career and academic background.</li>
              <li><strong>Prepare documents:</strong> This includes a Europass CV, a compelling Letter of Motivation, academic transcripts (attested by HEC), and reference letters.</li>
              <li><strong>Apply:</strong> Depending on the program, you may apply directly to the university or through the DAAD portal.</li>
              <li><strong>Interview:</strong> Shortlisted candidates are usually interviewed either online or at the DAAD office/German Embassy in Islamabad.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Tips for Pakistani Applicants</h2>
            <p>
              Crafting your motivation letter is critical. Do not use generic templates. DAAD selectors look for candidates who have a clear vision of how their studies in Germany will help them contribute to the development of Pakistan upon their return. Highlight your leadership skills and social commitment.
            </p>
          </div>
        </motion.article>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/germany-opportunity-card-pakistan-2026" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Germany Opportunity Card (Chancenkarte)</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
            <Link to="/blog/swedish-institute-scholarships-pakistan" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Swedish Institute Scholarships</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
