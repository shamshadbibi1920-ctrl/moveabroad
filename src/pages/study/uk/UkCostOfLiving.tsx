import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { DollarSign, ArrowLeft, Home, ShoppingCart, Train, Coffee, Info, AlertTriangle, ExternalLink, Activity } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkCostOfLiving() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const londonCosts = [
    { item: 'Rent (Shared / Dorm)', cost: '£600 - £1,000', icon: <Home className="w-5 h-5 text-indigo-500" /> },
    { item: 'Groceries / Food', cost: '£200 - £300', icon: <ShoppingCart className="w-5 h-5 text-emerald-500" /> },
    { item: 'Transport (Oyster Card)', cost: '£100 - £150', icon: <Train className="w-5 h-5 text-blue-500" /> },
    { item: 'Utilities & Internet', cost: '£50 - £100', icon: <Activity className="w-5 h-5 text-amber-500" /> },
    { item: 'Social & Misc', cost: '£100 - £200', icon: <Coffee className="w-5 h-5 text-rose-500" /> }
  ];

  const outsideLondonCosts = [
    { item: 'Rent (Shared / Dorm)', cost: '£400 - £700', icon: <Home className="w-5 h-5 text-indigo-500" /> },
    { item: 'Groceries / Food', cost: '£150 - £250', icon: <ShoppingCart className="w-5 h-5 text-emerald-500" /> },
    { item: 'Transport (Bus pass)', cost: '£50 - £80', icon: <Train className="w-5 h-5 text-blue-500" /> },
    { item: 'Utilities & Internet', cost: '£40 - £80', icon: <Activity className="w-5 h-5 text-amber-500" /> },
    { item: 'Social & Misc', cost: '£80 - £150', icon: <Coffee className="w-5 h-5 text-rose-500" /> }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="Cost of Living in UK for Pakistani Students | MoveAbroad.pk"
        description="Detailed breakdown of living expenses in the UK. Compare London vs outside London costs for rent, food, transport, and UKVI financial requirements."
        canonicalPath="/study/uk/cost-of-living"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Cost of Living" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Cost of Living in the UK
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Budget breakdowns and UKVI financial requirements for Pakistani students.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> UKVI Mandatory Financial Requirements
          </h4>
          <p className="text-amber-800 dark:text-amber-200 mb-2">
            To get your Student Visa, you MUST prove to the UK government that you have enough money to support yourself. These funds must be in your bank account for 28 days.
          </p>
          <ul className="list-disc pl-5 text-amber-800 dark:text-amber-200 font-semibold mt-2">
            <li>Studying inside London: <strong>£1,334 per month</strong> (up to 9 months = £12,006 max)</li>
            <li>Studying outside London: <strong>£1,023 per month</strong> (up to 9 months = £9,207 max)</li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* London */}
          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Inside London</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Estimated Monthly Budget: £1,050 - £1,750</p>
            
            <div className="space-y-4">
              {londonCosts.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3 font-medium text-slate-700 dark:text-slate-300">{item.item}</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{item.cost}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Outside London */}
          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Outside London</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Estimated Monthly Budget: £720 - £1,260</p>
            
            <div className="space-y-4">
              {outsideLondonCosts.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3 font-medium text-slate-700 dark:text-slate-300">{item.item}</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">{item.cost}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
              Cities like Manchester, Birmingham, Edinburgh, and Glasgow.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
            <Info className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Part-Time Work (20 Hours)
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            International students on a Student Visa are legally allowed to work up to <strong>20 hours per week</strong> during term time, and full-time during official university holidays. 
            The National Minimum Wage in the UK (as of 2024/2025) is £11.44 per hour for those aged 21 and over. Working 20 hours can realistically cover your grocery and utility bills.
          </p>
          <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=United+Kingdom" target="_blank" rel="noreferrer" className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-2">
            Check live costs on Numbeo UK <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}


