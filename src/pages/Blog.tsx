import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const posts = [
    { title: 'How to Get a Germany Opportunity Card (Chancenkarte) from Pakistan 2026', category: 'Germany', date: 'Oct 15, 2026', author: 'Ali Khan', snippet: 'The new Opportunity Card makes it easier than ever to move to Germany as a skilled professional...', slug: 'germany-opportunity-card-pakistan-2026' },
    { title: 'Fully Funded DAAD Scholarships for Pakistani Students: Complete Guide', category: 'Scholarships', date: 'Oct 12, 2026', author: 'Sara Ahmed', snippet: 'A comprehensive step-by-step guide to applying for DAAD scholarships for Masters and PhD programs...', slug: 'daad-scholarship-pakistani-students-guide' },
    { title: 'Sweden Work Visa Processing Time for Pakistanis (2026 Update)', category: 'Sweden', date: 'Oct 05, 2026', author: 'Usman Raza', snippet: 'Everything you need to know about the current visa processing times and requirements for moving to Sweden...', slug: 'sweden-work-visa-pakistan-2026' },
    { title: 'Saudi Arabia Golden Visa for Pakistani Professionals: Requirements', category: 'Saudi Arabia', date: 'Sep 28, 2026', author: 'Fatima Noor', snippet: 'Learn about the eligibility criteria for the Premium Residency program in Saudi Arabia for expats...', slug: 'saudi-arabia-golden-visa-pakistani-professionals' },
    { title: 'DHA Licensing Exam Guide for Pakistani Doctors & Pharmacists', category: 'UAE', date: 'Sep 20, 2026', author: 'Dr. Bilal', snippet: 'Want to practice medicine in Dubai? Here is what you need to know about preparing for the DHA exam...', slug: 'dha-licensing-exam-pakistani-doctors' },
    { title: 'Top Swedish Institute Scholarships for Pakistani Students Explained', category: 'Scholarships', date: 'Sep 15, 2026', author: 'Sara Ahmed', snippet: 'Discover fully funded opportunities in Sweden through the SI Scholarship for Global Professionals...', slug: 'swedish-institute-scholarships-pakistan' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">Latest Articles</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400">Insights, tips, and news to help your international journey.</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          {posts.map((post, idx) => (
            <motion.div 
              variants={fadeIn}
              key={idx} 
            >
              <Link to={`/blog/${post.slug}`} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col xl:flex-row hover:shadow-xl hover:border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 block h-full">
                {/* Image Placeholder */}
                <div className="xl:w-2/5 flex-shrink-0 bg-slate-100 dark:bg-slate-700 flex items-center justify-center h-56 xl:h-auto border-b xl:border-b-0 xl:border-r border-slate-100 dark:border-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  <span className="font-display font-medium text-slate-400">Featured Image</span>
                </div>
                <div className="p-8 xl:w-3/5 flex flex-col h-full w-full">
                  <div className="flex items-center text-sm mb-4 flex-wrap gap-y-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                      {post.category}
                    </span>
                    <span className="mx-3 text-slate-300">&bull;</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{post.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 group-hover:text-blue-600 dark:text-blue-400 transition-colors leading-snug">{post.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{post.snippet}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-50 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-slate-200 mr-2"></div>
                      {post.author}
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 transition-colors p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transform group-hover:translate-x-2 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
