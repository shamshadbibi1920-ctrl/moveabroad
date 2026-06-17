import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { DollarSign, MapPin, Building, Briefcase, ExternalLink, Activity } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function CanadaCostOfLiving() {
  const data = getCountryData('canada');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt="Canada" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover"
            />
          ) : (
             <div className="w-full h-full bg-emerald-900"></div>
          )}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/study/canada" className="inline-flex items-center text-emerald-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Canada
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cost of Living in Canada
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-emerald-50 mb-8 leading-relaxed">
              A detailed breakdown of monthly expenses, city comparisons, and part-time work opportunities for international students.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Budget Overview */}
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
             <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Minimum Budget</h3>
             <p className="text-slate-500 dark:text-slate-400 mb-6">Shared accomodation, cooking at home</p>
             <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">CAD $1,200 <span className="text-lg text-slate-500 font-medium">/ month</span></div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
             <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Comfortable Budget</h3>
             <p className="text-slate-500 dark:text-slate-400 mb-6">Private room, occasional dining out</p>
             <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">CAD $1,500 - $2,000 <span className="text-lg text-slate-500 font-medium">/ month</span></div>
          </div>
        </motion.div>

        {/* Detailed Breakdown & Cities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-emerald-500" /> Monthly Breakdown
            </h2>
            <div className="space-y-6">
              {[
                { item: 'Accommodation (Shared/Dorms)', amount: 'CAD $600 - $1,500' },
                { item: 'Food & Groceries', amount: 'CAD $300 - $400' },
                { item: 'Transportation (Pass)', amount: 'CAD $100 - $150' },
                { item: 'Health Insurance (Provincial)', amount: 'CAD $50 - $75' },
                { item: 'Phone & Internet', amount: 'CAD $50 - $80' },
                { item: 'Study Materials', amount: 'CAD $50 - $100' }
              ].map((expense, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3 last:border-0">
                  <span className="text-slate-700 dark:text-slate-300">{expense.item}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50">{expense.amount}</span>
                </div>
              ))}
            </div>
            <div className="min-h-16 mt-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
              * Health insurance usually comes to roughly CAD $600-$800/year depending on university plans.
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 rounded-[2rem] p-8 shadow-xl text-white">
            <h2 className="font-display text-2xl font-bold mb-8 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-blue-400" /> City Comparison
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center p-4 bg-slate-800 rounded-xl border border-red-500/30">
                <span className="font-bold w-1/3">Toronto</span>
                <span className="text-sm text-slate-400 w-1/3">Most Expensive</span>
                <span className="text-sm font-mono self-end ml-auto text-red-300">$$$$</span>
              </li>
              <li className="flex items-center p-4 bg-slate-800 rounded-xl border border-amber-500/30">
                <span className="font-bold w-1/3">Vancouver</span>
                <span className="text-sm text-slate-400 w-1/3">Very Expensive</span>
                <span className="text-sm font-mono self-end ml-auto text-amber-300">$$$$</span>
              </li>
              <li className="flex items-center p-4 bg-slate-800 rounded-xl border border-emerald-500/30">
                <span className="font-bold w-1/3">Calgary</span>
                <span className="text-sm text-slate-400 w-1/3">Moderate</span>
                <span className="text-sm font-mono self-end ml-auto text-emerald-300">$$$</span>
              </li>
              <li className="flex items-center p-4 bg-slate-800 rounded-xl border border-blue-500/30">
                <span className="font-bold w-1/3">Ottawa</span>
                <span className="text-sm text-slate-400 w-1/3">Moderate/Affordable</span>
                <span className="text-sm font-mono self-end ml-auto text-blue-300">$$</span>
              </li>
              <li className="flex items-center p-4 bg-slate-800 rounded-xl border border-green-500/30">
                <span className="font-bold w-1/3">Montreal</span>
                <span className="text-sm text-slate-400 w-1/3">Cheapest Major City</span>
                <span className="text-sm font-mono self-end ml-auto text-green-300">$$</span>
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Part Time Work */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 rounded-[2rem] p-8 shadow-sm border border-indigo-100 dark:border-indigo-800/30">
           <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-4 text-indigo-600 dark:text-indigo-400" /> Part-Time Work During Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Permitted Hours</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">International students are legally allowed to work up to <strong>20 hours per week</strong> during active academic sessions.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Scheduled Breaks</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">During scheduled breaks like summer holidays or winter reading weeks, you can work <strong>full-time (40+ hours)</strong>.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Wages</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Minimum wage varies by province (usually between CAD $14 - $16.75/hour). Average part-time earnings hover around <strong>CAD $15-$20/hour</strong>.</p>
            </div>
          </div>
        </motion.section>

        {/* Links */}
        <div className="flex gap-4">
           <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Canada" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
             Numbeo Cost Comparison <ExternalLink className="w-4 h-4 ml-2" />
           </a>
           <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
             IRCC Student Work Info <ExternalLink className="w-4 h-4 ml-2" />
           </a>
        </div>

      </div>
    </div>
  );
}
