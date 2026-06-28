import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, Stamp, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItalyApplicationProcess() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1400&q=80" 
            alt="Italy Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Italy
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <FileText className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">University Application Process</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            A comprehensive, step-by-step guide to securing your admission and handling the required Italian bureaucratic procedures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm mb-12">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 flex items-center mb-2">
              <BookOpen className="w-5 h-5 mr-2 text-emerald-600" /> Apply directly FIRST, then Universitaly
            </h4>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
              Unlike the UK's UCAS system, you apply directly to Italian universities via their own portals. ONLY AFTER you receive an admission offer do you use the Universitaly portal to start the pre-enrollment/visa process.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step Guide</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            {[
              { step: 1, title: 'Program Research & Direct Application', desc: 'Find English-taught (or Italian-taught) programs. Apply directly on the university\'s website. Pay the application fee (usually €20-€50). Wait for the admission letter.' },
              { step: 2, title: 'HEC & MOFA Attestation', desc: 'Immediately start attesting your previous degrees and transcripts from the Higher Education Commission (HEC) and the Ministry of Foreign Affairs (MOFA) in Pakistan.' },
              { step: 3, title: 'CIMEA or DOV Process', desc: 'Italian universities require proof of your degree\'s validity. You must obtain either a Statement of Comparability from CIMEA (online, faster but costs ~€150) OR a Declaration of Value (DOV) from the Italian Embassy/Consulate in Pakistan (free for study, but very slow). Check which one your university requires!' },
              { step: 4, title: 'Universitaly Pre-Enrollment', desc: 'Once you have your admission letter, register on www.universitaly.it. Submit your pre-enrollment application, selecting the specific university and program. Upload your passport, photo, and admission letter.' },
              { step: 5, title: 'University Validation', desc: 'The university will review your Universitaly application. Once approved, they will forward it electronically to the Italian Embassy/Consulate in Pakistan. You will receive a "Summary" document.' },
              { step: 6, title: 'Visa Application', desc: 'With the validated Universitaly summary, book your visa appointment through VFS Global and prepare your financial and accommodation documents.' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-slate-900 rounded-3xl p-8 shadow-sm text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Stamp className="w-32 h-32" />
            </div>
            <h2 className="text-2xl font-bold mb-4 relative z-10">What is CIMEA?</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 relative z-10 max-w-3xl">
              CIMEA (Information Centre on Academic Mobility and Equivalence) is the official Italian agency for evaluating foreign qualifications. 
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10 max-w-3xl">
              Historically, students had to get a DOV from the Embassy, which took months. Now, many universities accept the <strong>CIMEA Statement of Comparability</strong>, which is applied for entirely online and usually issued within 30-60 days. Always confirm with your university admission office if they accept CIMEA before applying for it!
            </p>
            <a href="https://www.cimea.it/EN/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors relative z-10">
              Visit CIMEA Portal
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Initial Document Checklist (For University App)</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Passport (valid for at least 18 months)",
                "Passport-size photographs",
                "High School Diploma & Transcripts (for Bachelor's)",
                "Bachelor's Degree & Transcripts (for Master's)",
                "Detailed CV (Europass format recommended)",
                "Motivation Letter / Statement of Purpose (SOP)",
                "Two Letters of Recommendation (Academic)",
                "English Proficiency Certificate (IELTS/PTE or MOI)",
                "Portfolio (required for Architecture/Design)",
                "Course Descriptions/Syllabus (sometimes required)"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://www.universitaly.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Universitaly Portal</a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://hec.gov.pk/english/services/students/Degree%20Attestation%20System/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">HEC Attestation Portal</a>
        </div>
      </div>
    </div>
  );
}
