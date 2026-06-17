import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, ArrowRight, Globe } from 'lucide-react';

export default function Scholarships() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const allScholarships = [
    { title: 'DAAD Scholarships', country: 'Germany', level: 'Masters / PhD', deadline: 'Varies', tags: ['Fully Funded', 'Stipend'] },
    { title: 'Erasmus Mundus Joint Masters', country: 'Europe', level: 'Masters', deadline: 'Jan 2027', tags: ['Fully Funded', 'Travel Allowance'] },
    { title: 'Fulbright Program', country: 'USA', level: 'Masters / PhD', deadline: 'Feb 2027', tags: ['Fully Funded', 'GRE Required'] },
    { title: 'Chevening Scholarships', country: 'UK', level: 'Masters', deadline: 'Nov 2026', tags: ['Fully Funded', 'Experience Req'] },
    { title: 'Swedish Institute Scholarships', country: 'Sweden', level: 'Masters', deadline: 'Feb 2027', tags: ['Fully Funded'] },
    { title: 'AAS Scholarships', country: 'Australia', level: 'Masters / PhD', deadline: 'April 2027', tags: ['Fully Funded', 'Return Condition'] },
    { title: 'MEXT Scholarship', country: 'Japan', level: 'Bachelors / Masters / PhD', deadline: 'May 2027', tags: ['Fully Funded', 'No IELTS'] },
    { title: 'Vanier Canada Graduate', country: 'Canada', level: 'PhD', deadline: 'Nov 2026', tags: ['Fully Funded', 'Leadership Req'] },
    { title: 'Stipendium Hungaricum', country: 'Hungary', level: 'Bachelors / Masters', deadline: 'Jan 2027', tags: ['Fully Funded', 'IELTS Not Mandatory'] },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('All Levels');

  const filteredScholarships = allScholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scholarship.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                          
    const matchesLevel = levelFilter === 'All Levels' || scholarship.level.includes(levelFilter);
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">International Scholarships</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Discover fully-funded opportunities for Pakistani students across the globe.</motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 md:p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search scholarships, countries, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select 
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="flex-grow md:flex-grow-0 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 dark:text-slate-100"
              >
                <option>All Levels</option>
                <option>Bachelors</option>
                <option>Masters</option>
                <option>PhD</option>
              </select>
              <button className="flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium transition-colors">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Listings */}
        {filteredScholarships.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial" animate="animate" variants={staggerContainer}
          >
            <AnimatePresence>
              {filteredScholarships.map((scholarship, idx) => (
                <motion.div 
                  variants={fadeIn}
                  initial="initial" animate="animate" exit="exit"
                  key={scholarship.title} 
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
                >
                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        Active
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{scholarship.title}</h3>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <Globe className="h-4 w-4 mr-3 text-blue-500 dark:text-blue-400" />
                        {scholarship.country}
                      </div>
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <BookOpen className="h-4 w-4 mr-3 text-blue-500 dark:text-blue-400" />
                        {scholarship.level}
                      </div>
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <Clock className="h-4 w-4 mr-3 text-blue-500 dark:text-blue-400" />
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {scholarship.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-5 border-t border-slate-100 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 transition-colors">
                    <button className="w-full flex justify-between items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"
          >
            <Search className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">No scholarships found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms or filters to find what you're looking for.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
