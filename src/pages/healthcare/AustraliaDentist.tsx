import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Stethoscope, Briefcase, MapPin, CheckCircle2, Clock, AlertTriangle, Lightbulb, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AustraliaDentist() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1400&q=80" 
            alt="Melbourne Skyline" 
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
            <h1 className="text-3xl md:text-4xl font-bold">Dentistry in Australia</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            A comprehensive guide to the Australian Dental Council (ADC) assessment process and pathway to registration.
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
                  There is strong demand for dentists in Australia, especially in regional areas outside of major cities, making it a highly lucrative and stable career choice.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-900 dark:text-white font-bold mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" /> Average Salaries
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-slate-700 dark:text-slate-300">Associate Dentist:</strong> AUD $120,000 - $180,000/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Experienced/Specialist:</strong> AUD $180,000 - $250,000+/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Practice Owner:</strong> AUD $250,000+/year</li>
                  </ul>
                </div>
                <p>
                  Registration requires passing the rigorous <strong>Australian Dental Council (ADC)</strong> assessment process before applying to the Dental Board of Australia via AHPRA.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3 text-blue-500" /> Required Documents
              </h2>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Valid Passport</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> BDS Degree (Attested by HEC)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> PMDC/PMC Dental Registration</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Academic Transcripts</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> English Test Results (IELTS or OET)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-red-900 dark:text-red-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" /> IMPORTANT COST NOTICE
            </h4>
            <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed mb-2">
              The complete ADC pathway has a direct-fee floor of approximately <strong>AUD $8,800 - $9,000</strong> (Initial Assessment + Written Exam + Practical Exam + first year AHPRA registration).
            </p>
            <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
              This does NOT include travel to Melbourne for the practical exam, accommodation, English testing, study materials, and any repeat attempts if needed. Many candidates' realistic total investment reaches <strong>AUD $15,000 or more</strong>. Budget and plan carefully — this is a significant financial commitment.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Step-by-Step ADC Pathway</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            
            {[
              { title: "Initial Assessment", desc: "Submit Initial (Document) Assessment to the ADC. This evaluates your educational and professional qualifications. Fee: approximately AUD $647." },
              { title: "ADC Written Examination", desc: "Once approved, register for the Written Exam. Held twice a year (March and September) via Pearson VUE test centres worldwide. Consists of four 2-hour sections, 70 scenario-based multiple-choice questions each, over two consecutive days. Fee: approximately AUD $2,122." },
              { title: "Written Exam Results", desc: "Receive results approximately 6 weeks after the exam via ADC Connect. A pass is valid for 3-5 years (extended to 5 years from March 2026), with unlimited attempts allowed." },
              { title: "ADC Practical (Clinical) Examination", desc: "Register for the Practical Exam. Held ONLY in Melbourne, Australia, over two full days. You will work on manikins and with simulated patients to test clinical skills. Fee: approximately AUD $4,775." },
              { title: "Pass Practical Exam", desc: "Successfully pass the Practical Examination to complete the ADC assessment process." },
              { title: "English Language Test", desc: "Take an approved English test (IELTS or OET) if not already satisfied. IELTS Academic costs approximately AUD $475." },
              { title: "Apply for Registration", desc: "Apply for general registration with the Dental Board of Australia via AHPRA." },
              { title: "Pay Registration Fee", desc: "Pay the annual AHPRA registration fee (approximately AUD $818/year for dentists)." },
              { title: "Receive Registration", desc: "Receive your registration. You are now legally allowed to practice dentistry independently in Australia!" }
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
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
             <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://adc.org.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">Australian Dental Council (adc.org.au)</a></li>
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://home.pearsonvue.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">Pearson VUE ADC Test Booking</a></li>
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://www.ahpra.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">AHPRA</a></li>
                <li className="flex items-center"><Globe className="w-5 h-5 mr-3 text-blue-500" /> <a href="https://www.dentalboard.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base font-medium">Dental Board of Australia</a></li>
             </ul>
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
  );
}
