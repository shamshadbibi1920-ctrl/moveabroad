import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, DollarSign, Calculator, Info, Wallet, PieChart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function AustraliaSalary() {
  return (
    <>
      <SEO title="Work in Australia: Salary | MoveAbroad.pk" description="Comprehensive guide to australia salary for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1400&q=80" 
            alt="Australia Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.35]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/australia" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Australia Guide
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              🇦🇺 Australia Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Salary & Benefits 🇦🇺
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Understand minimum wages, superannuation, taxes, and how much you can expect to earn.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h3 className="font-bold text-emerald-900 dark:text-emerald-100 flex items-center mb-2">
              <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" /> National Minimum Wage
            </h3>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
              The national minimum wage in Australia is <strong>AUD $24.10 per hour</strong> (or AUD $915.90 per 38-hour week). However, sponsored professionals on the 482 Visa are guaranteed much higher minimums due to the Core Skills Income Threshold (CSIT).
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Average Salaries by Profession</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 px-6 font-bold text-slate-900 dark:text-white">Profession</th>
                    <th className="py-4 px-6 font-bold text-slate-900 dark:text-white">Average Annual Salary (AUD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">Software Engineer</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">$90,000 - $140,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">Civil Engineer</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">$85,000 - $130,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">Registered Nurse</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">$75,000 - $110,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">Accountant</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">$75,000 - $115,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">Electrician (Licensed)</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">$80,000 - $120,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">Secondary Teacher</td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">$80,000 - $110,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Wallet className="w-6 h-6 mr-3 text-blue-500" /> Superannuation (Retirement)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                Superannuation (or "Super") is a mandatory retirement fund contribution paid by your employer. This is paid <strong>ON TOP of</strong> your base salary.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li>• <strong>Current Rate:</strong> 11.5% (rising to 12% by July 2025).</li>
                <li>• <strong>Example:</strong> If your salary is $100,000, your employer pays an additional $12,000 into your Super fund.</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Payday Super Reform (July 2026)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Employers must now pay your superannuation at the same time they pay your wages (e.g., fortnightly), rather than quarterly, ensuring your money grows faster.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <PieChart className="w-6 h-6 mr-3 text-purple-500" /> Taxes & Medicare
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                Australia uses a progressive tax system. The more you earn, the higher your tax bracket.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li>• <strong>Tax-Free Threshold:</strong> The first $18,200 you earn is tax-free.</li>
                <li>• <strong>Medicare Levy:</strong> Usually 2% of your taxable income to fund public healthcare. <em>Note: As a temporary visa holder (482) from Pakistan, you are generally NOT eligible for Medicare and must hold Overseas Visitor Health Cover (OVHC). You can apply for a Medicare Levy Exemption at tax time.</em></li>
              </ul>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Gross vs Net Salary</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Always use a calculator to determine your "Net" (take-home) pay. A $100k gross salary is roughly $75k net after taxes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://paycalculator.com.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center">
            <Calculator className="w-4 h-4 mr-2" /> Australian Salary Calculator
          </a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Australia" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Cost of Living (Numbeo)</a>
        </div>
      </div>
    </div>
    </>
  );
}
