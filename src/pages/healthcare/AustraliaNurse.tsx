import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Stethoscope, Briefcase, MapPin, CheckCircle2, Clock, AlertTriangle, Lightbulb, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AustraliaNurse() {
  return (
    <>
      <SEO title="Australia Nurse | MoveAbroad.pk" description="Comprehensive guide to australia nurse for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80" 
            alt="Sydney Opera House" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/healthcare-abroad" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Healthcare
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <Stethoscope className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Nursing in Australia</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            A comprehensive guide to the AHPRA Streamlined Pathway and moving to Australia as an internationally qualified nurse.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Australia is currently experiencing a significant nursing shortage, especially in rural/regional areas and the aged care sector. This makes it a highly attractive destination for internationally qualified nurses.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-900 dark:text-white font-bold mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" /> Average Salaries
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-slate-700 dark:text-slate-300">New Grad/Junior:</strong> AUD $70,000 - $80,000/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Experienced Nurse:</strong> AUD $80,000 - $95,000/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Nurse Practitioner/Specialist:</strong> AUD $95,000 - $120,000/year</li>
                  </ul>
                </div>
                <p>
                  All registration is managed by <strong>AHPRA</strong> under the Nursing and Midwifery Board of Australia (NMBA), while <strong>ANMAC</strong> handles skills assessments for migration purposes.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3 text-blue-500" /> Required Documents
              </h2>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Valid Passport</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Nursing Degree (Attested by HEC)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Pakistan Nursing Council Registration</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Certificate of Good Standing (sent directly by PNC)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Academic Transcripts</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Evidence of Employment History</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> English Test Results (IELTS Academic or OET)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> International Criminal History Check (ICHC)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 flex items-center mb-2">
              <Lightbulb className="w-5 h-5 mr-2 text-indigo-600" /> Important Distinction: AHPRA vs. ANMAC
            </h4>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed mb-2">
              It is crucial to understand the difference between these two authorities:
            </p>
            <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-2 list-disc list-inside ml-2">
              <li><strong>AHPRA Registration:</strong> Gives you the legal right to practice nursing in Australia and supports your employment.</li>
              <li><strong>ANMAC Skills Assessment:</strong> Proves your qualifications to the Department of Home Affairs specifically for visa and migration purposes.</li>
            </ul>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed mt-2">
              These are two separate processes that often run in parallel when you are planning your move to Australia.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">AHPRA Streamlined Pathway (Step-by-Step)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The Streamlined Pathway allows internationally qualified nurses to gain registration much faster than older processes. The total typical timeline is approximately 3 months.
          </p>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            {[
              { title: "Self-Check", desc: "AHPRA checks whether you meet minimum qualification standards, recency of practice, registration status, and English language criteria." },
              { title: "Portal Application & Document Upload", desc: "Create your AHPRA portal application and upload all required documents (professional registration, qualifications, employment history, identity evidence). Candidate submission takes ~1 week, AHPRA processing ~2 weeks." },
              { title: "Certificate of Good Standing (COGS)", desc: "Request a COGS to be sent directly from all nursing councils where you've been registered (e.g., Pakistan Nursing Council). This can take up to 4 weeks depending on the issuing authority." },
              { title: "International Criminal History Check (ICHC)", desc: "Complete the ICHC process. There is a fee of AUD $175 per country where you have lived." },
              { title: "ICHC Verification", desc: "AHPRA verifies your ICHC report. This is often combined with prior stages and takes about 2 weeks." },
              { title: "Respond to Clarifications", desc: "Respond to any AHPRA requests for clarification or missing documents promptly." },
              { title: "Final Fee & Identity Verification", desc: "Pay the final portal fee (AUD $525) and complete biometric/document-based identity verification (takes 2-3 weeks)." },
              { title: "English Language Evidence", desc: "Provide evidence of meeting English language requirements (e.g., OET results) if required. Processing takes about 1 day." },
              { title: "Orientation Modules", desc: "Complete Orientation Part 1 and Part 2 (online modules introducing you to the Australian healthcare system)." },
              { title: "Final Registration Approval", desc: "AHPRA completes the assessment and issues your final registration approval. You can now practice as a registered nurse in Australia!" }
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
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Job Search & Official Links</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">Job Search Resources:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li>• State Health Department career sites (NSW Health, Queensland Health, WA Health, etc.)</li>
                    <li>• Aged Care Providers & Specialist Recruiters</li>
                    <li>• Health Workforce Australia</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">Official Portals:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
                    <li className="flex items-center"><Globe className="w-4 h-4 mr-2 text-blue-500" /> <a href="https://www.ahpra.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AHPRA (ahpra.gov.au)</a></li>
                    <li className="flex items-center"><Globe className="w-4 h-4 mr-2 text-blue-500" /> <a href="https://www.nursingmidwiferyboard.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nursing and Midwifery Board of Australia</a></li>
                    <li className="flex items-center"><Globe className="w-4 h-4 mr-2 text-blue-500" /> <a href="https://www.anmac.org.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ANMAC (anmac.org.au)</a></li>
                  </ul>
               </div>
             </div>
          </div>
        </section>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mt-8">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Disclaimer
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            AHPRA registration pathways, exam formats, and fees change frequently. Always verify current requirements and fees directly with AHPRA and the relevant professional council before starting the process.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
