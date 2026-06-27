import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ListTodo, ExternalLink, CheckCircle2, Clock, Globe } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkWorkApplication() {
  const steps = [
    {
      title: 'Prepare Documents (HEC & English Test)',
      desc: 'Get your degrees attested by HEC Pakistan. Prepare your experience letters. Take an approved English test (IELTS UKVI or PTE UKVI) to achieve at least a B1 level.'
    },
    {
      title: 'Search for Licensed Sponsors',
      desc: 'Use UK job portals to find employers. Crucially, verify that the employer holds a valid UK Sponsor Licence using the official UKVI register.'
    },
    {
      title: 'Interview & Job Offer',
      desc: 'Pass the interviews and secure a formal job offer. Ensure the salary meets the minimum threshold for the Skilled Worker Visa (e.g., £38,700 or the going rate).'
    },
    {
      title: 'Receive Certificate of Sponsorship (CoS)',
      desc: 'Your employer will apply to the Home Office to assign you a CoS. They will send you a unique CoS reference number which you need for the visa application.'
    },
    {
      title: 'Tuberculosis (TB) Test',
      desc: 'Book and attend a TB test at an approved IOM clinic in Pakistan (Islamabad, Lahore, Karachi, or Mirpur). You must have this certificate before applying.'
    },
    {
      title: 'Submit Visa Application Online',
      desc: 'Apply on the Gov.uk website. Pay the visa fee and the Immigration Health Surcharge (IHS). If you are applying for the Health & Care visa, you are exempt from the IHS.'
    },
    {
      title: 'Biometrics at VFS Global',
      desc: 'Book an appointment at VFS Global in Pakistan. Submit your passport, get your fingerprints and photograph taken, and upload supporting documents.'
    },
    {
      title: 'Decision & Travel',
      desc: 'Wait for the decision (usually 3-8 weeks). Once approved, collect your passport with the entry vignette. Travel to the UK within the vignette validity window.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="UK Work Visa Application Process for Pakistanis | MoveAbroad.pk"
        description="Step-by-step guide to applying for a UK Skilled Worker Visa from Pakistan. Covers HEC attestation, finding sponsors, CoS, and VFS biometrics."
        canonicalPath="/work/uk/application-process"
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
              <Globe className="w-4 h-4 mr-2" /> UK Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Application Process 📋
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A clear, step-by-step roadmap from securing a job offer to arriving in the UK.
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
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ListTodo className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Step-by-Step Guide
            </h2>
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-8 ml-4">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white dark:border-slate-900">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-3xl border border-amber-100 dark:border-amber-800/30">
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" /> Timeline
            </h2>
            <p className="text-amber-800 dark:text-amber-200 mb-4">
              The entire process typically takes <strong>2 to 4 months</strong> from starting the job hunt to arriving in the UK.
            </p>
            <ul className="space-y-2 text-amber-800 dark:text-amber-200">
              <li>• Job Hunting & Interviews: 1 - 3 months</li>
              <li>• Employer issues CoS: 1 - 4 weeks</li>
              <li>• Visa Processing (Standard): 3 weeks</li>
              <li>• Visa Processing (Priority): 5 working days (additional cost)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Document Checklist</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Valid Passport</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> CoS Reference Number</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> IELTS / PTE UKVI Certificate</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> TB Clearance Certificate</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Police Clearance Certificate</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Bank Statement (£1,270)</li>
              <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> HEC Attested Degrees</li>
            </ul>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
            <div className="flex flex-col space-y-4">
              <a href="https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                Search the Register of Licensed Sponsors <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://eservices.hec.gov.pk/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                HEC E-Portal (Degree Attestation) <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
