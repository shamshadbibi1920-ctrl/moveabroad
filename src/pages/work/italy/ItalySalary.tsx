import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, ExternalLink } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalySalary() {
  return (
    <>
      <SEO title="Work in Italy: Salary & Benefits | MoveAbroad.pk" description="Learn about average salaries by sector in Italy, the taxation system, and worker benefits." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        {/* Hero Banner */}
        <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=1400&q=80" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.35]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
                🇮🇹 Italy Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Salary & Benefits in Italy 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Understand minimum wages, CCNL agreements, and taxes.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How Minimum Wage Works (CCNL)</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Italy does not have a single national minimum wage set by law. Instead, wages are determined by <strong>Collective Labour Agreements (CCNL - Contratti Collettivi Nazionali di Lavoro)</strong> for each specific sector. This means your minimum legal pay depends entirely on your industry and job level.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Average Salaries by Sector</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="p-4 font-semibold text-slate-900 dark:text-white rounded-tl-lg">Sector</th>
                    <th className="p-4 font-semibold text-slate-900 dark:text-white rounded-tr-lg">Average Yearly Gross (Estimated)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="p-4">Construction & Trades</td>
                    <td className="p-4">€22,000 - €32,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Agriculture (often seasonal)</td>
                    <td className="p-4">€18,000 - €25,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Hospitality & Tourism</td>
                    <td className="p-4">€18,000 - €26,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Manufacturing</td>
                    <td className="p-4">€22,000 - €30,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Healthcare / Caregiving</td>
                    <td className="p-4">€20,000 - €28,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900 dark:text-white">IT & Tech (EU Blue Card)</td>
                    <td className="p-4 font-medium text-slate-900 dark:text-white">€35,000 - €55,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tax System</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 text-sm">
                <li>Progressive income tax (IRPEF) ranging from 23% to 43% depending on income brackets.</li>
                <li>Additional regional and municipal taxes.</li>
                <li>Social security contributions (INPS) are typically deducted directly from your gross pay.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Worker Benefits</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 text-sm">
                <li>Strong labor protection laws under Italian constitution.</li>
                <li>Access to public healthcare (Servizio Sanitario Nazionale).</li>
                <li>Paid leave, sick leave, and maternity/paternity entitlements under CCNL.</li>
                <li>13th-month pay (Tredicesima) mandatory in most sectors, paid in December.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Cost of Living
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Compare cost of living between Pakistani cities and Italian cities to estimate your expenses.</p>
            <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Italy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
              Check Numbeo Italy
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
