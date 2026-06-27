import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HeartPulse, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, Stethoscope, Briefcase } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkHealthCareVisa() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="UK Health and Care Worker Visa for Pakistanis | MoveAbroad.pk"
        description="Learn about the UK Health and Care Worker Visa. Benefits include no IHS fee, lower salary thresholds, and fast-track processing for doctors, nurses, and care workers."
        canonicalPath="/work/uk/health-care-visa"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 text-emerald-50 text-sm font-semibold mb-6">
              <HeartPulse className="w-4 h-4 mr-2" /> Healthcare Pathway
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Health & Care Worker Visa 🏥
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              A specialized, fast-track visa for medical professionals and adult social care workers offering significantly lower costs and exemptions from the Immigration Health Surcharge.
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
                  <strong>Important 2024 Update:</strong> Care workers (SOC 6135) and senior care workers (SOC 6136) are no longer permitted to bring dependents (partners/children) to the UK. Doctors and nurses are unaffected by this change.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Benefits over the Standard Skilled Worker Visa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <ShieldCheck className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">No IHS Fee</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">You and your eligible dependents do not have to pay the Immigration Health Surcharge (£1,035/year savings).</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <Briefcase className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Lower Salary Thresholds</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">The minimum salary required is generally £29,000 (or £23,200 for care workers), significantly lower than the standard £38,700.</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <HeartPulse className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Lower Application Fees</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Visa application fees are heavily discounted (up to 3 years: £284, over 3 years: £551).</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <Stethoscope className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Fast-Track Processing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Applications are prioritized and usually processed within 3 weeks from outside the UK.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Eligible Professions</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">To qualify, you must be a qualified doctor, nurse, health professional, or adult social care professional. Common roles include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Medical Practitioners (Doctors)</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Nurses and Midwives</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Pharmacists</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Physiotherapists</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Care Workers (SOC 6135)</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Senior Care Workers (SOC 6136)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Requirements Checklist</h2>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                <span><strong>Job Offer:</strong> From the NHS, an NHS supplier, or in adult social care.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                <span><strong>Certificate of Sponsorship (CoS):</strong> Must explicitly state you are eligible for the Health and Care Visa.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                <span><strong>English Language:</strong> B1 level (IELTS/PTE UKVI) OR passed OET (Occupational English Test) if your regulatory body accepts it.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                <span><strong>Criminal Record Certificate:</strong> A police clearance certificate from Pakistan (and any country you've lived in for 12+ months).</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                <span><strong>TB Test:</strong> Required from an approved IOM clinic in Pakistan.</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
            <div className="flex flex-col space-y-4">
              <a href="https://www.gov.uk/health-care-worker-visa" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                UKVI: Health and Care Worker Visa <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.jobs.nhs.uk/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                NHS Jobs Portal <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
