import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FileCheck, CheckCircle2, AlertTriangle, Clock, MapPin, Globe, Stamp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function ItalyVisaProcess() {
  return (
    <>
      <SEO title="Study in Italy: Visa Process | MoveAbroad.pk" description="Comprehensive guide to italy visa process for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543429776-27826ac5ca10?w=1400&q=80" 
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
              <FileCheck className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Italy Study Visa (Type D)</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            Everything you need to know about the Italian National Visa for Study, the DOV, and the Permesso di Soggiorno.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Visa Pathway</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              As a Pakistani student planning to study in Italy for more than 90 days, you must apply for a <strong>National Visa (Type D) for Study</strong>. The process involves multiple Italian authorities, so starting early is critical.
            </p>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              {[
                { title: "Universitaly Pre-Enrollment", desc: "Before you can even book a visa appointment, you MUST register and submit a pre-enrollment application on the official Universitaly portal. Your chosen university validates this online." },
                { title: "DOV or CIMEA", desc: "You need to prove your Pakistani degree is equivalent to Italian standards. You either need a Declaration of Value (DOV) from the Italian Embassy/Consulate OR a Statement of Comparability from CIMEA (if your university accepts it)." },
                { title: "Visa Application via VFS Global", desc: "Once your Universitaly application is validated by the university AND the consulate, you book an appointment at VFS Global (Islamabad, Lahore, or Karachi) to submit your physical documents." },
                { title: "Visa Interview", desc: "You may be called for an interview at the Embassy/Consulate to assess your genuine intentions and English/Italian language skills." },
                { title: "Permesso di Soggiorno", desc: "CRITICAL: The visa only gets you into Italy. Within 8 DAYS of arriving in Italy, you MUST apply for a Residence Permit (Permesso di Soggiorno) at a local post office (Poste Italiane)." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 shrink-0 shadow-sm z-10 mr-4">
                    {idx + 1}
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 w-full">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{step.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Document Checklist</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Universitaly Pre-enrollment summary (validated)",
                "Admission Letter from the Italian University",
                "Declaration of Value (DOV) or CIMEA Certificate",
                "HEC & MOFA Attested Degrees/Transcripts",
                "Proof of Financial Means (approx. €6,000 - €8,000/year in a personal bank account, OR proof of scholarship)",
                "Proof of Accommodation in Italy (rental contract or university hostel booking)",
                "Flight Itinerary (booking only, do not pay full ticket yet)",
                "Travel Health Insurance (covering at least €30,000)",
                "Language Certificate (IELTS/PTE or Italian B2)",
                "Family Registration Certificate (FRC) by NADRA"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-500" /> Processing Times
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Visa processing for Italy from Pakistan typically takes <strong>4 to 8 weeks</strong> during the peak summer season (June - August). However, the bottleneck is often securing the Universitaly validation and getting the DOV appointment. Start the document attestation process in January!
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Stamp className="w-6 h-6 mr-3 text-purple-500" /> Permesso di Soggiorno
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                The visa allows entry, but the <strong>Residence Permit</strong> allows you to stay legally and work part-time. You apply at the Poste Italiane using a "Kit Giallo" (Yellow Kit) within 8 days of arrival. You will then get an appointment at the Questura (Police Station) for fingerprinting.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://www.universitaly.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Universitaly Portal</a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://ambislamabad.esteri.it/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Italian Embassy Islamabad</a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://visa.vfsglobal.com/pak/en/ita" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">VFS Global Italy (Pakistan)</a>
        </div>
      </div>
    </div>
    </>
  );
}
