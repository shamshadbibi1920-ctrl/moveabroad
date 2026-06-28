import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';

export default function SwedishInstituteScholarship() {
  return (
    <>
      <SEO title="Swedish Institute Scholarship | MoveAbroad.pk" description="Comprehensive guide to swedish institute scholarship for Pakistani students and professionals moving abroad." />
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
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">Scholarships</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Top Swedish Institute Scholarships for Pakistani Students Explained
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Sara Ahmed</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Sep 15, 2026</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
            <p className="lead text-xl text-slate-700 dark:text-slate-200 font-medium">
              Discover fully funded opportunities in Sweden through the SI Scholarship for Global Professionals. A highly competitive but life-changing avenue for Pakistani innovators.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">What is the SI Scholarship?</h2>
            <p>
              The Swedish Institute (SI) Scholarship for Global Professionals is funded by the Ministry for Foreign Affairs. It is designed to develop future global leaders. Pakistan is among the eligible countries. If you secure this scholarship, it covers your full tuition fees, provides a monthly living stipend of 12,000 SEK, and gives a travel grant of 15,000 SEK.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Who is the Ideal Candidate?</h2>
            <p>
              Unlike standard academic scholarships that look merely at GPA, the SI Scholarship looks for <em>proven leaders</em>. You need a clear idea of how your education in Sweden will contribute to the sustainable development of Pakistan upon your return.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Work Experience:</strong> You must have a minimum of 3,000 hours of demonstrated employment. This can be full-time, part-time, or sometimes voluntary, but it must be verifiable.</li>
              <li><strong>Leadership Experience:</strong> You must demonstrate leadership experience from employment, civil society engagements, or networks.</li>
              <li><strong>Master’s Level:</strong> It is only for one-year or two-year Master's degree programs.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Application Sequence</h2>
            <p>
              Applying involves a two-step process occurring between October and February.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>University Admissions:</strong> First, you must apply for a master's program via universityadmissions.se (usually from mid-October to mid-January). You rank up to 4 programs.</li>
              <li><strong>SI Portal:</strong> In February, the SI application portal opens. You submit your special SI Motivation Letter, CV format, and stamped Reference Letters.</li>
              <li>You MUST be admitted to an eligible Master's program in the first selection round to even be considered for the SI Scholarship.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Crucial Advice for Pakistani Applicants</h2>
            <p>
              Do not use standard reference letters. The Swedish Institute provides extremely specific templates for your CV, proof of work, and letters of reference. Your employers must fill them out exactly as instructed, stamp them with the official company seal, and sign them. Many Pakistani students get disqualified simply because a manager used company letterhead instead of the official SI template. Follow the instructions to the letter.
            </p>
          </div>
        </motion.article>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/daad-scholarship-pakistani-students-guide" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">DAAD Scholarships for Pakistani Students</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
            <Link to="/blog/sweden-work-visa-pakistan-2026" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Sweden Work Visa Process</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
