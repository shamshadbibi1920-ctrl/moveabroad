import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, CheckCircle2, Clock, DollarSign, Activity, AlertTriangle, Link as LinkIcon } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkVisaProcess() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="UK Student Visa Guide for Pakistani Students | MoveAbroad.pk"
        description="Step-by-step guide for Pakistani students applying for the UK Student Visa (Tier 4). CAS, financial requirements, IHS fee, and TB test details."
        canonicalPath="/study/uk/visa-process"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80" 
            alt="UK Big Ben" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              UK Student Visa Process
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Everything you need to know about applying for the UK Student Visa (formerly Tier 4) from Pakistan.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <motion.section variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Core Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">CAS Document</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Confirmation of Acceptance for Studies (CAS). An electronic document issued by your UK university after you accept their unconditional offer and pay the initial deposit.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Financial Proof</h3>
              <p className="text-slate-600 dark:text-slate-400">
                You must prove you have money to pay your course fees for 1 academic year PLUS living costs: <strong>£1,334/month</strong> for London or <strong>£1,023/month</strong> outside London (for up to 9 months). The funds must be in your account for 28 consecutive days.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Tuberculosis (TB) Test</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Mandatory for Pakistani applicants. Must be conducted at a UKVI-approved clinic in Pakistan (e.g., IOM clinics in Islamabad, Lahore, Karachi, Mirpur).
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">English Proficiency</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Typically proven via an IELTS UKVI (Academic) or PTE Academic UKVI certificate. Some universities assess English internally, but UKVI IELTS is safest for visas.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Step-by-Step Visa Application</h2>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-8 ml-4">
            {[
              { title: "Get Your CAS", desc: "Receive the CAS number from your university. Check it carefully to ensure all details match your passport." },
              { title: "Prepare Bank Statements", desc: "Maintain the required tuition + living funds in your or your parents' bank account for a strict 28-day period. Get an official stamped bank statement and maintenance letter." },
              { title: "Take the TB Test", desc: "Book an appointment at an IOM clinic in Pakistan and receive your TB clearance certificate." },
              { title: "Apply Online via UKVI", desc: "Fill out the online student visa application on the UK Gov website. Pay the visa fee (approx. £490) and the Immigration Health Surcharge (IHS)." },
              { title: "Immigration Health Surcharge (IHS)", desc: "Pay the IHS fee, which is currently £776 per year of study. This grants you access to the UK's National Health Service (NHS)." },
              { title: "Biometrics at VFS Global", desc: "Book an appointment at VFS Global (Islamabad, Lahore, or Karachi). Submit your passport, biometrics, and upload scanned documents." },
              { title: "Decision", desc: "Standard processing time is 3-8 weeks. Priority services may be available for faster decisions." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white dark:border-slate-900">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <LinkIcon className="w-6 h-6 mr-3 text-blue-500" /> Official Links
          </h2>
          <div className="flex flex-col space-y-4">
            <a href="https://www.gov.uk/student-visa" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
              UKVI Official Student Visa Page <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="https://visa.vfsglobal.com/pak/en/gbr/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
              VFS Global Pakistan (UK Visa Centers) <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan/tuberculosis-testing-in-pakistan" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
              Approved TB Test Clinics in Pakistan <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
