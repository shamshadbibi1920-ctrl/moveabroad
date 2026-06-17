import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, ShieldAlert, ExternalLink, Activity, Car, Building } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaLmia() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Canada LMIA process for Pakistanis | Labour Market Impact Assessment"
        description="Understand the LMIA (Labour Market Impact Assessment) process. Find out how Canadian employers hire from Pakistan, and learn about LMIA exempt categories."
        canonicalPath="/work/canada/lmia"
      />
      
      {/* Hero Section */}
      <div className="bg-rose-900 py-16 border-b border-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/canada" className="inline-flex items-center text-rose-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Canada
          </Link>
          <motion.h1 initial="initial" animate="animate" variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Understanding LMIA
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-rose-100 max-w-3xl font-light">
            Labour Market Impact Assessment demystified: What it is, why employers need it, and how it affects your Canadian job offer.
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
                <Target className="w-6 h-6 mr-3 text-rose-600" />
                What is an LMIA?
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>A Labour Market Impact Assessment (LMIA) is a document that an employer in Canada may need to get before hiring a foreign worker.</p>
                <p>A positive LMIA will show that there is a need for a foreign worker to fill the job. It will also show that no Canadian worker or permanent resident is available to do the job. A positive LMIA is sometimes called a "confirmation letter."</p>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">How the process works (for the employer):</h3>
                <ul className="list-decimal pl-5 space-y-2">
                  <li>Employer advertises the job in Canada (typically for at least 4 weeks).</li>
                  <li>If no suitable Canadian is found, they apply for an LMIA from Employment and Social Development Canada (ESDC).</li>
                  <li>The employer pays a $1,000 CAD fee. <strong>(Note: The employee pays NOTHING for the LMIA. Charging an employee for an LMIA is illegal in Canada.)</strong></li>
                  <li>If ESDC approves, the employer receives a positive LMIA and gives a copy to the foreign worker.</li>
                  <li>The foreign worker uses the positive LMIA to apply for an employer-specific work permit.</li>
                </ul>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display text-rose-600">
                LMIA-Friendly Sectors
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Because the LMIA process is long and costs money, employers usually only do it for jobs they are desperate to fill. High-demand sectors include:</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center">
                  <Car className="w-8 h-8 text-rose-500 mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Truck Driving</h4>
                    <p className="text-sm text-slate-500">Massive nationwide shortage.</p>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center">
                  <Activity className="w-8 h-8 text-rose-500 mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Healthcare</h4>
                    <p className="text-sm text-slate-500">Nurses and Care Givers.</p>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center">
                  <Building className="w-8 h-8 text-rose-500 mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Construction</h4>
                    <p className="text-sm text-slate-500">Trades and labourers.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                LMIA Exemptions (IMP)
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Under the International Mobility Program (IMP), some jobs do not require an LMIA. Common exemptions for Pakistanis include:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Intra-company transferees (moving from a Pakistani branch to a Canadian branch of the same company).</li>
                <li>Francophone Mobility (for French speakers working outside Quebec).</li>
                <li>Significant Benefit to Canada (e.g. self-employed artists, athletes).</li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-rose-50 dark:bg-rose-900/10 border-2 border-rose-200 dark:border-rose-800 rounded-2xl p-6 relative overflow-hidden">
              <ShieldAlert className="w-12 h-12 text-rose-500/20 absolute -right-2 -top-2" />
              <div className="relative z-10">
                <h3 className="font-display font-bold text-rose-900 dark:text-rose-300 text-lg mb-3 flex items-center">
                  <ShieldAlert className="w-5 h-5 mr-2" /> Red Flags & Scams
                </h3>
                <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                  <li><strong>Paying for LMIA:</strong> If an "agent" or "employer" asks you to pay $1,000 for the LMIA fee or thousands of dollars for a "job offer," it is highly likely a scam or illegal.</li>
                  <li><strong>Instant Offers:</strong> Be wary of job offers received via WhatsApp from recruiters you have never interviewed with.</li>
                  <li><strong>Verify LMIA:</strong> You can verify genuine LMIA exemptions and positive LMIAs through official channels.</li>
                </ul>
              </div>
            </div>

            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Official Links</h2>
              <div className="space-y-3">
                <a href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">ESDC LMIA Info</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.jobbank.gc.ca/trend-analysis/search-job-outcomes" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Job Bank LMIA listings</span>
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
