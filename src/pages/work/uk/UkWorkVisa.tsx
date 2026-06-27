import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ExternalLink, CheckCircle2, Globe, AlertTriangle, BadgePoundSterling, Info } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkWorkVisa() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="UK Skilled Worker Visa Guide for Pakistanis | MoveAbroad.pk"
        description="Learn about the UK Skilled Worker Visa (formerly Tier 2). Requirements, points-based system, CoS, fees, and application process for Pakistani professionals."
        canonicalPath="/work/uk/visa"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1400&q=80" 
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
              <Globe className="w-4 h-4 mr-2" /> Visa Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              UK Skilled Worker Visa 📝
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The main route for Pakistani professionals to work in the UK. Understand the points-based system, Certificate of Sponsorship (CoS), and requirements.
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
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  Visa requirements and minimum salary thresholds change frequently (most recently in April 2024). Always verify with official UKVI sources before applying.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What is the Skilled Worker Visa?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The Skilled Worker visa (which replaced the Tier 2 General visa) allows you to come to or stay in the UK to do an eligible job with an approved employer. This visa can lead to settlement (Indefinite Leave to Remain) after 5 years of continuous residence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Requirements</h2>
            <ul className="space-y-4">
              <li className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Job Offer from a Licensed Sponsor</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">You must have a job offer from a UK employer that holds a valid Sponsor Licence.</p>
                </div>
              </li>
              <li className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Certificate of Sponsorship (CoS)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Your employer must issue you a CoS, which contains a unique reference number you need for your visa application.</p>
                </div>
              </li>
              <li className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Minimum Salary Threshold</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">You must be paid at least £38,700 per year, or the "going rate" for your profession, whichever is higher (discounts apply for Health & Care or ISL roles).</p>
                </div>
              </li>
              <li className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">English Language (B1)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">You must prove you can read, write, speak, and understand English to at least level B1 on the CEFR scale.</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Points-Based System Explained</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              You must score a total of <strong>70 points</strong> to be eligible. 50 of these points are mandatory, and the remaining 20 are "tradeable" (usually gained through your salary).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 border-b border-blue-200 dark:border-blue-800 pb-2">Mandatory (50 Points)</h4>
                <ul className="text-sm space-y-2 text-blue-800 dark:text-blue-200">
                  <li>• Offer from approved sponsor (20 pts)</li>
                  <li>• Job at appropriate skill level (20 pts)</li>
                  <li>• English language at B1 (10 pts)</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2 border-b border-emerald-200 dark:border-emerald-800 pb-2">Tradeable (20 Points)</h4>
                <ul className="text-sm space-y-2 text-emerald-800 dark:text-emerald-200">
                  <li>• Salary above threshold (20 pts)</li>
                  <li>• Job on Immigration Salary List (20 pts)</li>
                  <li>• Relevant PhD (10-20 pts)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Required Documents Checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Valid Pakistani Passport</li>
              <li>Certificate of Sponsorship (CoS) reference number</li>
              <li>Proof of English proficiency (IELTS UKVI, PTE UKVI, or Ecctis certificate)</li>
              <li>Tuberculosis (TB) test results from a UKVI approved clinic in Pakistan</li>
              <li>Bank statements showing £1,270 in your account for 28 days (unless your sponsor certifies maintenance on your CoS)</li>
              <li>Criminal record certificate (for certain sectors like education or healthcare)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BadgePoundSterling className="w-6 h-6 mr-3 text-emerald-500" /> Fees and Costs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900/50">
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">Expense</th>
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300">Visa Application Fee (up to 3 years)</td>
                    <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-medium">£719</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300">Visa Application Fee (over 3 years)</td>
                    <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-medium">£1,420</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300">Immigration Health Surcharge (IHS)</td>
                    <td className="p-4 border-b border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-medium">£1,035 per year</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-4 text-slate-600 dark:text-slate-300">Biometrics/VFS Fee</td>
                    <td className="p-4 text-slate-900 dark:text-white font-medium">Varies (~£55)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 italic">
              Note: Many employers pay the visa and IHS fees upfront as part of a relocation package. Standard processing time is about 3 weeks from outside the UK.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
            <div className="flex flex-col space-y-4">
              <a href="https://www.gov.uk/skilled-worker-visa" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                UKVI: Skilled Worker Visa <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                Register of Licensed Sponsors <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://visa.vfsglobal.com/pak/en/gbr/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                VFS Global Pakistan <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
