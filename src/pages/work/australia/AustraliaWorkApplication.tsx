import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, AlertTriangle, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function AustraliaWorkApplication() {
  return (
    <>
      <SEO title="Work in Australia: Work Application | MoveAbroad.pk" description="Comprehensive guide to australia work application for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="bg-blue-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/australia" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Australia
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-800 dark:bg-slate-800 rounded-xl">
              <FileText className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Application Process</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            Step-by-step guide for Pakistani professionals applying for the Subclass 482 (Skills in Demand) visa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-12 shadow-sm">
          <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
            Already have an Australian job offer? This temporary visa is separate from permanent residency. See our <Link to="/migrate/australia" className="underline">Migrate</Link> section for Skilled Independent (189), Skilled Nominated (190), and Employer Sponsored (186) PR pathways.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step Sponsorship Guide</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            {[
              { step: 1, title: 'Document Preparation & Attestation', desc: 'Get your degrees attested by HEC (Higher Education Commission of Pakistan) and Ministry of Foreign Affairs (MOFA). Gather work experience letters on company letterhead.' },
              { step: 2, title: 'Skills Assessment (If Required)', desc: 'Certain occupations (especially trades) require a formal skills assessment before you apply. E.g., Engineers Australia for engineers, ACS for IT professionals.' },
              { step: 3, title: 'English Test', desc: 'Take the IELTS, PTE Academic, or TOEFL test to meet the minimum English language requirements.' },
              { step: 4, title: 'Job Search', desc: 'Apply for jobs on Seek, LinkedIn, and Indeed. Target employers who explicitly state they offer "Visa Sponsorship".' },
              { step: 5, title: 'Receive Job Offer & Contract', desc: 'Secure a formal employment contract. Ensure the salary meets the CSIT/SSIT thresholds.' },
              { step: 6, title: 'Employer Sponsorship & Nomination', desc: 'The employer becomes an Approved Sponsor and lodges the nomination for your specific role with Home Affairs.' },
              { step: 7, title: 'Lodge Visa Application', desc: 'Once nomination is lodged, apply for the Subclass 482 visa online via ImmiAccount using the employer\'s TRN.' },
              { step: 8, title: 'Biometrics & Health Exam', desc: 'Attend a VFS Global center in Pakistan for biometrics. Complete a medical exam through a panel physician (e.g., IOM).' },
              { step: 9, title: 'Police Clearance', desc: 'Obtain a Police Character Certificate from Pakistan (and any other country you lived in for 12+ months).' },
              { step: 10, title: 'Visa Grant & Travel', desc: 'Receive your digital visa grant letter, book flights, and relocate to Australia.' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
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
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Document Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Valid Pakistani Passport",
                "HEC Attested Degrees & Transcripts",
                "Detailed Resume (Australian format)",
                "Work Experience Letters (on company letterhead)",
                "English Test Results (IELTS/PTE)",
                "Positive Skills Assessment (if applicable)",
                "Employment Contract (signed)",
                "Police Character Certificate",
                "Health Insurance (OVHC) proof",
                "Marriage/Birth Certificates (if bringing dependents)"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Realistic Timeline</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 flex items-start">
            <AlertTriangle className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-1" />
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Expect 4 to 10 months total.</strong> While the Visa processing itself can be fast (1-3 months for Core Skills, a few weeks for Specialist), finding a sponsoring employer takes time. Additionally, the employer's Nomination stage is currently experiencing backlogs and can take 4-8 months alone unless they hold Accredited Sponsor status.
            </p>
          </div>
        </section>
        
        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://hec.gov.pk/english/services/students/Degree%20Attestation%20System/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">HEC Degree Attestation</a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-assessment" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Skills Assessment Authorities</a>
        </div>
      </div>
    </div>
    </>
  );
}
