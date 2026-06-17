import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Euro, AlertTriangle, Info, CheckCircle2 , Globe} from 'lucide-react';

export default function GermanySalary() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const salaries = [
    { role: 'Software Engineer', min: '€50,000', max: '€80,000+' },
    { role: 'Medical Doctor', min: '€60,000', max: '€100,000+' },
    { role: 'Registered Nurse', min: '€38,000', max: '€50,000' },
    { role: 'Mechanical Engineer', min: '€50,000', max: '€75,000' },
    { role: 'Data Scientist', min: '€55,000', max: '€85,000' },
    { role: 'Electrician / Plumber', min: '€35,000', max: '€55,000' },
  ];

  const benefits = [
    { title: 'Health Insurance', desc: 'Mandatory and highly comprehensive, covering almost all medical needs.' },
    { title: 'Pension Contribution', desc: 'Automatically deducted, building towards your retirement in Germany.' },
    { title: 'Unemployment Insurance', desc: 'Provides a safety net (Arbeitslosengeld) if you lose your job after working for at least 12 months.' },
    { title: 'Paid Holidays', desc: 'A legal minimum of 20 days off (based on a 5-day week), though most employers offer 25-30 days.' },
    { title: 'Sick Leave', desc: 'Up to 6 weeks of fully paid sick leave guaranteed by your employer per illness.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/germany" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Germany Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Salary & Benefits 🇩🇪
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Understand the German tax system, gross vs. net income, standard wages, and the robust social benefits available to foreign workers.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  relative z-10 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  Salaries vary heavily by region (Munich pays more than Berlin, but costs more). Always verify with official sources. Minimum wage is €12.41/hour (2024).
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Euro className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Average Salaries by Profession
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                      <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Profession</th>
                      <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Estimated Yearly Gross</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaries.map((s, idx) => (
                      <tr key={idx} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-4 px-4 text-slate-700 dark:text-slate-300 font-medium">{s.role}</td>
                        <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{s.min} - {s.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Gross vs. Net Salary Explained</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                In Germany, job offers always state your <strong>Gross (Brutto)</strong> salary. However, your <strong>Net (Netto)</strong> salary—what actually hits your bank account—will be approximately 35% to 42% lower due to high taxes and social security contributions.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/50">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 mt-0">Tax Classes (Steuerklasse)</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
                      Your exact tax deduction depends on your tax class. Single, unmarried individuals (Class 1) pay the highest taxes. Married couples where one earns significantly more than the other (Classes 3 & 5) can optimize their tax burden slightly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Social Benefits Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <h3 className="font-bold text-slate-900 dark:text-white m-0 text-base">{benefit.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm m-0 leading-relaxed pl-7">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Salary Negotiation Tips for Pakistanis</h2>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li><strong>Research Market Rates:</strong> Use sites like Glassdoor, PayScale, and Kununu.</li>
                <li><strong>Always Negotiate Gross:</strong> State your desired salary in yearly Gross (Brutto).</li>
                <li><strong>Consider Location:</strong> €60k goes much further in Leipzig than it does in Munich due to massive rent disparities. Ensure your salary pitch accounts for local living costs.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
