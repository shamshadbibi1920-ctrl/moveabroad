import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, GraduationCap, CheckCircle2, Clock, DollarSign, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AustraliaDoctorStandard() {
  return (
    <>
      <SEO title="Australia Doctor Standard | MoveAbroad.pk" description="Comprehensive guide to australia doctor standard for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=80" 
            alt="Modern Australian Hospital Building" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/healthcare/australia/doctor" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Doctors in Australia
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <GraduationCap className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Standard Pathway</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            The most common route for Pakistani doctors. Involves passing the AMC exams and completing supervised practice to attain General Registration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who is this for?</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Doctors trained outside the recognized "Competent Authority" countries (UK, Ireland, USA, Canada, New Zealand). This applies to the vast majority of Pakistani-trained doctors with no specialist qualification from those countries.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step Process</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            {[
              { title: "Verify Your Medical Degree", desc: "Verify your MBBS degree is from an AMC-recognized medical school (check the World Directory of Medical Schools) and graduating year is eligible." },
              { title: "Primary Source Verification", desc: "Complete primary source verification (EPIC) of your medical degree." },
              { title: "Create AHPRA Account", desc: "Create an AHPRA portal account to manage your registration process." },
              { title: "AMC CAT (MCQ) Exam", desc: "Register for and pass the AMC CAT (Computer Adaptive Test). This is a multiple-choice written exam covering clinical knowledge across all of medicine." },
              { title: "AMC Clinical Examination", desc: "Register for and pass the AMC Clinical Examination. This is an OSCE-style exam testing your clinical, communication, and procedural skills." },
              { title: "English Language Test", desc: "Take an approved English language test (IELTS Academic, OET, PTE, or TOEFL) if required to prove proficiency." },
              { title: "Secure Supervised Position", desc: "Secure an approved supervised practice position (limited or provisional registration). The Medical Board must approve both the position and the supervision arrangements." },
              { title: "Apply for Limited/Provisional Registration", desc: "Apply for limited or provisional registration via the AHPRA portal using your job offer and supervision plan." },
              { title: "Complete Supervised Practice", desc: "Complete 12 months of supervised practice (minimum 47 weeks full-time equivalent) in the approved position." },
              { title: "Apply for General Registration", desc: "Apply for general registration once supervised practice and remaining exam requirements are satisfactorily completed." },
              { title: "Receive General Registration", desc: "Receive general registration! You are now eligible to apply for a work visa with your AHPRA registration number and practice independently." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <section className="mb-16">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 flex items-center mb-2">
              <FileText className="w-5 h-5 mr-2 text-indigo-600" /> Important Visa Note
            </h4>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
              You need your AHPRA registration BEFORE applying for your Australian work visa via Department of Home Affairs ImmiAccount. If sponsored, your employer provides a Transaction Reference Number (TRN) once they submit the sponsorship nomination — you can apply for your visa as soon as you have the TRN, without waiting for full nomination approval.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-500" /> Realistic Timeline
              </h3>
              <ul className="space-y-4 text-sm">
                <li><strong className="text-slate-800 dark:text-slate-200">Months 1-6:</strong> Degree verification + AMC CAT prep and exam.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Months 6-12:</strong> AMC Clinical Exam prep and exam.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Months 12-15:</strong> Secure supervised position + apply for visa.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Months 15-27:</strong> 12-month supervised practice + general registration application.</li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <strong className="text-blue-800 dark:text-blue-300">Total Realistic Timeline:</strong><br />
                <span className="text-blue-600 dark:text-blue-400">2-3 years from starting preparation to general registration.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-emerald-500" /> Cost Breakdown & Requirements
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> AMC CAT Exam fees</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> AMC Clinical Exam fees</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> AHPRA Application & Registration fees</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> English Language Test fees</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> CPD Home Joining fees</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">CPD Requirement</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Once registered, you must complete 50 hours of Continuing Professional Development (CPD) per calendar year through an AMC-accredited CPD home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Common Mistakes Pakistani Doctors Make</h3>
             <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>Underestimating the difficulty of the AMC Clinical Exam and lacking local communication context.</li>
                <li>Failing to start the EPIC primary source verification process early enough.</li>
                <li>Not understanding the specific supervision requirements before accepting a job offer.</li>
             </ul>
          </div>
        </section>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mt-8">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Disclaimer
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            AHPRA registration pathways, exam fees, and college assessment requirements change frequently and vary by specialty. Always verify current requirements directly with AHPRA, the Medical Board of Australia, and the relevant specialist college before starting the process.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
