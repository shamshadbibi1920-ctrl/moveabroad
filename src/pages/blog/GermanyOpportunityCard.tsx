import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar } from 'lucide-react';

export default function GermanyOpportunityCard() {
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
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">Germany</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            How to Get a Germany Opportunity Card (Chancenkarte) from Pakistan 2026
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Ali Khan</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Oct 15, 2026</span>
            </div>
          </div>
          
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
            <p className="lead text-xl text-slate-700 dark:text-slate-200 font-medium">
              The new Opportunity Card makes it easier than ever to move to Germany as a skilled professional. If you are an ambitious professional in Pakistan looking to make a career switch to Europe, the Germany Opportunity Card (Chancenkarte) might be your golden ticket.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">What is the Chancenkarte?</h2>
            <p>
              Introduced as part of Germany's modernized Skilled Immigration Act, the Chancenkarte allows skilled workers from non-EU countries, including Pakistan, to move to Germany for up to one year to find a suitable job. This is a massive shift from the previous system where you needed a firm job offer before even applying for a work visa.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Eligibility Criteria: The Points System</h2>
            <p>
              To qualify for the Opportunity Card, you need to score a minimum of 6 points based on several criteria. First, you must have either a degree or a minimum of two years of vocational training recognized in Pakistan, plus basic German language skills (A1 level) or advanced English language skills (B2 level).
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Qualification recognition (4 points):</strong> If your Pakistani degree is fully recognized in Germany.</li>
              <li><strong>Language skills (1-3 points):</strong> Based on your proficiency in German or English.</li>
              <li><strong>Professional experience (2-3 points):</strong> Relevant recent experience in your field.</li>
              <li><strong>Age (1-2 points):</strong> Younger candidates receive more points. Applicants under 35 get 2 points.</li>
              <li><strong>Prior stay in Germany (1 point):</strong> If you have lived in Germany before (excluding tourist stays).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Financial Requirements for Pakistani Applicants</h2>
            <p>
              While the Opportunity Card grants you the right to look for a job, Germany wants to ensure you can support yourself during this period. You will need to demonstrate financial stability. Typically, this involves opening a Blocked Account (Sperrkonto) with around €12,000 for the year, or providing a formal declaration of commitment from someone living in Germany.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Application Process from Pakistan</h2>
            <p>
              The process begins at the German Embassy in Islamabad or the Consulate in Karachi. Here are the steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Check your points and eligibility using official German government calculators.</li>
              <li>Get your degree recognized via Anabin or ZAB (Zentralstelle für ausländisches Bildungswesen).</li>
              <li>Gather your documents, including proof of funds, language certificates (IELTS/Goethe), and health insurance.</li>
              <li>Book an appointment at the embassy. Note that appointments can take months, so plan ahead!</li>
              <li>Attend the interview and submit your application.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Why is this important for Pakistanis?</h2>
            <p>
              Pakistan boasts a massive youth population with strong skills in IT, engineering, healthcare, and business. With Germany facing severe shortages in these exact fields, the Opportunity Card eliminates the catch-22 of "need a visa to get a job, need a job to get a visa." 
            </p>
          </div>
        </motion.article>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/daad-scholarship-pakistani-students-guide" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Fully Funded DAAD Scholarships for Pakistani Students</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
            <Link to="/blog/sweden-work-visa-pakistan-2026" className="group block p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">Sweden Work Visa Processing Time for Pakistanis</h4>
              <p className="text-sm text-slate-500">Read Article &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
