import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, HeartPulse, Building2, BadgeDollarSign, MapPin, ExternalLink, GraduationCap, Stethoscope } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkDoctorContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK Licensing for Pakistani Doctors (PLAB) | MoveAbroad.pk"
        description="A complete guide for Pakistani doctors moving to the UK. Learn about the PLAB exams, GMC registration, MTI, and average NHS salaries."
        canonicalPath="/healthcare/uk/doctor"
      />
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden rounded-3xl mt-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80" 
            alt="UK Healthcare" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Doctors in the UK 🇬🇧
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              A comprehensive guide to joining the NHS via the PLAB or CESR routes as a Pakistani medical graduate.
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
            The National Health Service (NHS) relies heavily on international medical graduates — historically over 40% of NHS doctors trained abroad. The UK remains one of the most popular destinations for Pakistani doctors due to a clear licensing pathway (PLAB), English as the working language, and excellent long-term career progression.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center mb-2">
              IMPORTANT 2026 UPDATE
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              UK Medical Training Prioritisation Act became law in March 2026, requiring NHS specialty training programs to prioritize UK graduates and doctors with existing NHS experience. This does <strong>NOT</strong> close the door for international doctors, but it does mean securing NHS clinical experience FIRST (via trust grade/clinical fellow jobs) before applying to formal training is now a stronger strategy than before.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-emerald-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Foundation Doctor</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">£36,000 / year</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Registrar / Specialty</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">£52,000 - £65,000 / year</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <BadgeDollarSign className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Consultant</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">£105,000 - £126,000+ / year</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Step-by-Step Licensing Pathway (PLAB)</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">UKMLA Note</div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 italic text-sm">
              PLAB is being aligned with the new UK Medical Licensing Assessment (UKMLA) framework that all UK graduates now also take, ensuring standardized assessment — PLAB retains its name for now but tests equivalent content.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Verify Your Degree (EPIC)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Verify your MBBS degree is GMC-recognized; create an EPIC (ECFMG) account for primary source verification of your degree (~$100 fee).</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">GMC Online Account</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Create a GMC Online account to manage your registration process.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">English Language Test</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Take an English language test (IELTS or OET) — required unless you meet specific exemption criteria.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Pass PLAB 1</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Register for and pass PLAB 1 (3-hour, 180-question multiple choice exam, held internationally including in Pakistan). Max 4 attempts.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  5
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Pass PLAB 2</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Register for and pass PLAB 2 (practical OSCE-style exam with 16 stations). Currently held only in the UK at the Manchester test centre. Max 4 attempts.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  6
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">GMC Registration</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Apply for GMC registration with a license to practise (must apply within 2 years of passing PLAB 2).</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  7
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">ID Check</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Complete an identity (ID) check at a GMC center in the UK to finalize registration.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  8
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">First NHS Job</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Search and apply for NHS jobs — start with Trust Grade or Clinical Fellow positions to build NHS experience before applying to specialty training.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  9
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Build Portfolio</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Build your portfolio (case logs, audits, references) while working, to strengthen future specialty training applications.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Alternative Pathways</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">MTI Route</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Medical Training Initiative: A 2-year sponsored training scheme for qualified doctors. Requires Royal College sponsorship.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">CESR Route</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Certificate of Eligibility for Specialist Registration: for experienced specialists. Bypasses PLAB but requires extensive documented evidence.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Postgrad Qualifications</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Doctors with certain recognized postgraduate qualifications (e.g., MRCP, MRCS) may have streamlined registration options.</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Timeline & Job Search</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Both PLAB parts together typically take 6-12 months to complete with good preparation.</p>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
            <span className="font-medium text-slate-900 dark:text-white">Month 1-3</span>
            <span className="text-slate-600 dark:text-slate-400 text-right">Documents / English Test / EPIC</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
            <span className="font-medium text-slate-900 dark:text-white">Month 3-9</span>
            <span className="text-slate-600 dark:text-slate-400 text-right">Pass PLAB 1 & PLAB 2</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
            <span className="font-medium text-slate-900 dark:text-white">Month 9-12</span>
            <span className="text-slate-600 dark:text-slate-400 text-right">GMC Registration + First NHS Job</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <span className="font-medium text-slate-900 dark:text-white">Year 2+</span>
            <span className="text-slate-600 dark:text-slate-400 text-right">Build NHS experience & apply to Specialty Training</span>
          </div>
        </div>

        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Required Documents Checklist</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Valid Passport</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> MBBS Degree (EPIC verified)</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> PMC Registration</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> English Test (IELTS/OET)</li>
          <li className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Certificate of Good Standing</li>
        </ul>

        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4">Official Links</h3>
        <div className="flex flex-col space-y-3">
          <a href="https://www.gmc-uk.org/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            General Medical Council (GMC) <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          <a href="https://epic.fsmb.org/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
            EPIC (Primary Source Verification) <ExternalLink className="w-4 h-4 ml-1" />
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
