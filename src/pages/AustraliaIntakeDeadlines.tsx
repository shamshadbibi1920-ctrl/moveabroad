import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, AlertTriangle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaIntakeDeadlines() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Australia University Intakes & Deadlines | MoveAbroad.pk"
        description="Learn about Semester 1 (Feb/Mar) and Semester 2 (July) intakes in Australia, application deadlines, and 2026 NPL cap implications."
        canonicalPath="/study/australia/intake-deadlines"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Clock Tower" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intake Deadlines</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Plan your application timeline for Australian universities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> 2026 NPL Cap Warning
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            Australia has introduced a National Planning Level (NPL) capping international student enrolments to 295,000 for 2026. This cap is distributed per institution. <strong>Apply as early as possible</strong> — if a university reaches its cap for the semester, they will defer offers to the following year. Do not wait until the application deadline to apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Semester 1 (Main Intake)</h2>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">February / March</p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 relative z-10">
              This is the primary intake for Australian universities. All programs, including specialized and competitive degrees (like Medicine, Dentistry, Engineering), are open. Maximum scholarship opportunities are available.
            </p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-slate-400 mr-3" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Application Opens</div>
                  <div className="text-sm text-slate-500">August of previous year</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-slate-400 mr-3" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">General Deadline</div>
                  <div className="text-sm text-slate-500">Late November - December</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Semester 2</h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-6">July / August</p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 relative z-10">
              The second major intake. Most programs are available, though some highly specialized programs may only commence in Semester 1. Excellent option if you miss the Semester 1 deadlines.
            </p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-slate-400 mr-3" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Application Opens</div>
                  <div className="text-sm text-slate-500">February</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-slate-400 mr-3" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">General Deadline</div>
                  <div className="text-sm text-slate-500">May - Early June</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Trimester Systems</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Some universities (like Deakin, UNSW, Griffith) operate on a Trimester system, offering three intakes per year: <strong>February (T1), June (T2), and September/October (T3)</strong>. This offers more flexibility for starting your degree and potentially fast-tracking your graduation. Check individual university websites for exact dates.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
