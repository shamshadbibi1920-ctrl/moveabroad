import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, HeartPulse, Building2, BadgeDollarSign, MapPin, ExternalLink, ActivitySquare } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkNurseContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK Licensing for Pakistani Nurses (NMC) | MoveAbroad.pk"
        description="A complete guide for Pakistani nurses moving to the UK. Learn about the NMC registration, CBT, OSCE exams, and average NHS salaries."
        canonicalPath="/healthcare/uk/nurse"
      />
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden rounded-3xl mt-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80" 
            alt="UK Healthcare Nurse" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Nurses in the UK 🇬🇧
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              A comprehensive guide to registering with the NMC and joining the NHS or private care sector as a Pakistani nurse.
            </p>
            <Link to="/healthcare-abroad" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Healthcare Overview
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Important Regulatory Notice
        </h4>
        <p className="text-amber-800 dark:text-amber-200">
          Healthcare licensing requirements and processes change frequently — for example, pharmacist registration may move from a 2-year to 1-year pathway and NHS training competition is increasing under the 2026 Medical Training Prioritisation Act. Always verify current requirements with the relevant regulatory body (GMC, NMC, GDC, GPhC, HCPC) before starting the process.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            The NHS and the private care sector in the UK face ongoing nursing shortages. Pakistani nurses are highly valued and frequently recruited through international recruitment agencies. The average salary for a registered nurse ranges from £28,000 to £45,000 per year, depending on the NHS Banding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-emerald-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Band 5 (New Grad)</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">£28,000 - £35,000 / year</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Band 6 (Senior)</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">£35,000 - £43,000 / year</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Band 7 (Specialist)</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">£43,000 - £50,000 / year</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Licensing Process (NMC Pathway)</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Submit Application</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Submit an application to the Nursing and Midwifery Council (NMC) for international registration.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Verify Qualifications</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">NMC verifies your nursing qualification and registration with the Pakistan Nursing Council (PNC).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Test of Competence</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Complete Test of Competence — Computer Based Test (CBT, can be taken in Pakistan at Pearson VUE centres) and OSCE (practical exam, held at UK test centres).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">English Proficiency</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Prove English proficiency (IELTS Academic 7.0 or OET).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Visa Sponsorship</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Apply for Health & Care Worker visa sponsorship from an NHS Trust or care provider.</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                6
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Registration</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Receive NMC registration and begin practice in the UK.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Required Documents Checklist</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Valid Passport</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Nursing Degree (HEC Attested)</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> PNC Registration</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> English Test (IELTS/OET)</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> CBT / OSCE Pass Certificates</li>
        </ul>

        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Official Links</h3>
        <div className="flex flex-col space-y-3">
          <a href="https://www.nmc.org.uk/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            Nursing and Midwifery Council (NMC) <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          <a href="https://home.pearsonvue.com/nmc" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            Pearson VUE (CBT Testing) <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          <a href="https://www.jobs.nhs.uk/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            NHS Jobs Portal <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </section>
    </div>
  );
}

const ArrowLeft = ({className}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
