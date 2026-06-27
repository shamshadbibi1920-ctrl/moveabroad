import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, HeartPulse, Building2, BadgeDollarSign, MapPin, ExternalLink, Pill } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkPharmacistContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK Licensing for Pakistani Pharmacists (GPhC) | MoveAbroad.pk"
        description="A complete guide for Pakistani pharmacists moving to the UK. Learn about GPhC registration, OSPAP, and pharmacist salaries."
        canonicalPath="/healthcare/uk/pharmacist"
      />
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden rounded-3xl mt-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1520939817895-060bdaf4ed1b?w=1400&q=80" 
            alt="UK Healthcare Pharmacist" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Pharmacists in the UK 🇬🇧
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              A comprehensive guide to registering with the General Pharmaceutical Council (GPhC) and navigating the OSPAP route.
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
            There is steady demand for pharmacists in both the NHS and private community pharmacies across the UK. With competitive salaries and excellent professional development opportunities, the UK is a prime destination for Pakistani pharmacists.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center mb-2">
              IMPORTANT 2026 UPDATE
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              GPhC opened a consultation in April 2026 on a proposed <strong>ONE-YEAR streamlined route</strong> for internationally qualified pharmacists, replacing the current 2-year process with an integrated academic + practice learning year before the registration exam. This is still in consultation as of 2026 — check current GPhC guidance for the latest timeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-emerald-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Staff Pharmacist</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">£35,000 - £45,000 / year</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Pharmacy Manager</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">£45,000 - £55,000+ / year</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Licensing Process (Current 2-Year Route)</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Submit Qualifications</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Submit your qualifications for GPhC assessment (for non-EEA qualified pharmacists). Includes an assessment fee of £739.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Complete OSPAP</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">If required, complete the Overseas Pharmacists' Assessment Programme (OSPAP) — a 9-month university-based academic course (typically starts Sept/Oct, interviews Nov-Feb).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Foundation Training</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Complete 52 weeks of foundation training (paid, supervised practice in a pharmacy).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Registration Assessment</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Pass the GPhC registration assessment (the final licensing exam).</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">GPhC Registration</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Register with the GPhC and begin practice in the UK.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Required Documents Checklist</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Valid Passport</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Pharm-D Degree (HEC Attested)</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Pharmacy Council of Pakistan Registration</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> English Test (IELTS/OET/TOEFL/PTE)</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> OSPAP Fee (£739 assessment fee)</li>
        </ul>

        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Official Links</h3>
        <div className="flex flex-col space-y-3">
          <a href="https://www.pharmacyregulation.org/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            General Pharmaceutical Council (GPhC) <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          <a href="https://www.pharmacyregulation.org/education/pharmacist/overseas-pharmacists" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            OSPAP Information <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </section>
    </div>
  );
}


