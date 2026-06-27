import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Banknote, ExternalLink, Calculator, ShieldCheck, HeartPulse, GraduationCap, Globe } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkSalary() {
  const salaries = [
    { role: 'Software Engineer', min: '£35,000', avg: '£55,000', max: '£85,000+' },
    { role: 'Registered Nurse', min: '£28,407', avg: '£35,000', max: '£45,000+' },
    { role: 'Doctor (Junior to Consultant)', min: '£32,398', avg: '£60,000', max: '£119,000+' },
    { role: 'Civil/Mechanical Engineer', min: '£30,000', avg: '£45,000', max: '£65,000+' },
    { role: 'Care Worker', min: '£23,200', avg: '£25,000', max: '£28,000' },
    { role: 'Accountant', min: '£30,000', avg: '£45,000', max: '£70,000+' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="UK Salaries and Benefits for Pakistani Workers | MoveAbroad.pk"
        description="Understand the UK salary structures, tax system, average wages for popular jobs, and employee benefits like NHS access and pensions."
        canonicalPath="/work/uk/salary"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/uk" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in the UK
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Financial Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Salary & Benefits 💷
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Understand the UK tax system, average salaries by profession, and the robust employee benefits you receive when working in the UK.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 space-y-12"
        >
          <section className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
              <Banknote className="w-5 h-5 mr-2 text-blue-600" /> National Living Wage
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              The UK has a strict legal minimum wage. For workers aged 21 and over, the National Living Wage is <strong>£11.44 per hour</strong> (expecting increases in April of each year). Note that to qualify for the Skilled Worker Visa, your salary must meet specific, much higher thresholds depending on your profession.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Average Annual Salaries</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900/50">
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">Profession</th>
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">Starting</th>
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">Average</th>
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">Experienced</th>
                  </tr>
                </thead>
                <tbody>
                  {salaries.map((s, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'}>
                      <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-medium">{s.role}</td>
                      <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400">{s.min}</td>
                      <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-semibold">{s.avg}</td>
                      <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400">{s.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 italic">
              * Salaries in London are generally 15-20% higher than the rest of the UK due to the higher cost of living.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The UK Tax System (Gross vs Net)</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Your job offer will state your <strong>Gross Salary</strong> (before taxes). The amount you actually take home in your bank account is your <strong>Net Salary</strong>. Deductions include:
            </p>
            <ul className="space-y-4">
              <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white">1. Income Tax (PAYE)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">You get a Personal Allowance of £12,570 (tax-free). Earnings between £12,571 and £50,270 are taxed at 20%. Earnings above £50,270 are taxed at 40%.</p>
              </li>
              <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white">2. National Insurance (NI)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">This pays for state benefits and pensions. It's usually 8% on earnings between £242 and £967 a week.</p>
              </li>
              <li className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white">3. Pension Contributions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Under auto-enrolment, a percentage of your salary (usually 5%) is put into a pension pot, and your employer also contributes (minimum 3%).</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Employee Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <HeartPulse className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Free Healthcare (NHS)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Once you pay the IHS fee (or are exempt via Health & Care visa), you have full access to free medical care at the point of use.</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <Calculator className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Paid Holiday</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">By law, full-time workers are entitled to a minimum of 28 days of paid annual leave per year (this includes public holidays).</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <ShieldCheck className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Statutory Sick Pay (SSP)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">If you are too ill to work, you are legally entitled to receive sick pay for up to 28 weeks.</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <GraduationCap className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Free Public Schools</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">If you bring your dependent children to the UK, they are entitled to free public education.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Useful Calculators</h2>
            <div className="flex flex-col space-y-4">
              <a href="https://www.thesalarycalculator.co.uk/salary.php" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                UK Net Salary Calculator (Take-home Pay) <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=United+Kingdom" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                Numbeo: Cost of Living in the UK <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
