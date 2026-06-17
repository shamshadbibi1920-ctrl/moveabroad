import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, ExternalLink, Calculator, Landmark, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaSalary() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Canada Salaries & Benefits for Pakistani Workers 2026 | Guide"
        description="Understand Canadian salaries, minimum wage by province, tax deductions, and social benefits like Employment Insurance and CPP for temporary workers."
        canonicalPath="/work/canada/salary"
      />
      
      {/* Hero Section */}
      <div className="bg-rose-900 py-16 border-b border-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/canada" className="inline-flex items-center text-rose-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Canada
          </Link>
          <motion.h1 initial="initial" animate="animate" variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Salary & Benefits
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-rose-100 max-w-3xl font-light">
            Understand how much you will make, the taxes you will pay, and the social benefits you are entitled to in Canada.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Policies change frequently. Always verify the latest information with official IRCC sources before applying.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <DollarSign className="w-6 h-6 mr-3 text-rose-600" />
                Minimum Wage & Average Salaries
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>Salaries in Canada are usually quoted in Gross Annual terms (before tax) in Canadian Dollars (CAD).</p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                        <th className="p-4 font-bold text-slate-900 dark:text-white rounded-tl-xl">Province</th>
                        <th className="p-4 font-bold text-slate-900 dark:text-white rounded-tr-xl">Minimum Wage (Hourly)</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-4">Ontario</td><td className="p-4">~ CAD $16.55</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-4">British Columbia</td><td className="p-4">~ CAD $16.75</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-4">Alberta</td><td className="p-4">~ CAD $15.00</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-4">Quebec</td><td className="p-4">~ CAD $15.25</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm italic">Note: Minimum wages update annually. Skilled workers typically earn significantly above minimum wage.</p>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <Landmark className="w-6 h-6 mr-3 text-rose-600" />
                The Canadian Tax System
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Unlike the Gulf countries, Canada has a progressive taxation system. You will see several deductions on your paycheck:</p>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                  <strong className="text-slate-900 dark:text-white block mb-1">Federal Income Tax</strong>
                  Applies across Canada. Marginal rates range from 15% to 33% depending on income brackets.
                </li>
                <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                  <strong className="text-slate-900 dark:text-white block mb-1">Provincial Income Tax</strong>
                  Varies widely heavily by province. Alberta generally has lower taxes than Quebec or Nova Scotia.
                </li>
                <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                  <strong className="text-slate-900 dark:text-white block mb-1">Net vs Gross</strong>
                  A salary of $80,000 CAD per year is the gross. After taxes, CPP, and EI, your take-home (net) pay will be roughly $58,000 - $61,000 CAD depending on the province.
                </li>
              </ul>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <ShieldCheck className="w-6 h-6 mr-3 text-rose-600" />
                Social Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-slate-600 dark:text-slate-400">
                 <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Health Insurance</h3>
                    <p className="text-sm">Temporary workers are generally eligible for provincial health coverage (like OHIP in Ontario) after a short waiting period, covering basic medical care and hospitals.</p>
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Employment Insurance (EI)</h3>
                    <p className="text-sm">Mandatory deduction. Provides temporary income support if you lose your job through no fault of your own.</p>
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Canada Pension Plan (CPP)</h3>
                    <p className="text-sm">Mandatory deduction. You contribute to the national pension plan which pays out upon retirement.</p>
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Vacation Pay</h3>
                    <p className="text-sm">Statutory minimum of 2 weeks paid vacation per year (starts at 4% of gross wages). Increases with tenure.</p>
                 </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-slate-500" /> Useful Tools
              </h2>
              <div className="space-y-3">
                <a href="https://ca.talent.com/tax-calculator" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Income Tax Calculator</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Canada" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Numbeo Cost of Living</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
