import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Compass, Stethoscope, BookOpen, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404: Page Not Found | MoveAbroad.pk" 
        description="The page you are looking for cannot be found. Explore our comprehensive study, work, migration, and healthcare guides on MoveAbroad.pk." 
      />

      <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full text-center bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-extrabold text-3xl mb-6">
            404
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base mb-8 leading-relaxed">
            The page or guide you requested might have been moved, renamed, or is temporarily unavailable. Explore our key destination hubs below:
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
            <Link 
              to="/" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Home className="w-4 h-4" /> Home
            </Link>

            <Link 
              to="/country-guides" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Compass className="w-4 h-4" /> Destinations
            </Link>

            <Link 
              to="/healthcare-abroad" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Stethoscope className="w-4 h-4" /> Healthcare
            </Link>

            <Link 
              to="/blog" 
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Latest Guides
            </Link>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Homepage
          </Link>
        </motion.div>
      </div>
    </>
  );
}
