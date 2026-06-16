import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FilePlus, AlertTriangle, CheckCircle2, ExternalLink } from 'lucide-react';

export default function GermanyWorkVisa() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const visaTypes = [
    { title: 'Skilled Worker Visa', desc: 'The most common visa for individuals with a recognized degree or vocational training and a firm job offer.' },
    { title: 'EU Blue Card', desc: 'For highly qualified individuals with a university degree and a high-paying job offer (salary thresholds apply).' },
    { title: 'Opportunity Card (Chancenkarte)', desc: 'A new points-based visa allowing you to come to Germany for up to a year to search for a job.' },
    { title: 'Job Seeker Visa', desc: 'Allows recognized degree holders to stay in Germany for 6 months to find employment.' },
    { title: 'Intra-company Transfer (ICT)', desc: 'For employees of international companies being transferred to a German branch.' }
  ];

  const documents = [
    'Valid Pakistani passport',
    'Signed job offer letter or employment contract (for skilled worker/Blue Card)',
    'Educational certificates (HEC attested and recognized via Anabin/ZAB)',
    'Professional experience certificates',
    'Proof of German language proficiency (if applicable/required)',
    'Blocked account or proof of salary (if applying for job seeker/opportunity card)',
    'Proof of health insurance (travel health insurance initially)',
    'Proof of accommodation (if possible, though sometimes optional for initial application)'
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Germany" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center md:text-left">
          <Link to="/work/germany" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Germany Work Visa Guide
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed md:text-2xl font-light">
              Understand the different types of work visas available for professionals from Pakistan, along with required documents and processing steps.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  Requirements and visa processing times change frequently. Always verify with official sources (German Embassy Islamabad / Consulate Karachi) before applying.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <FilePlus className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Types of German Work Visas
              </h2>
              <div className="space-y-4">
                {visaTypes.map((visa, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{visa.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 m-0">{visa.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Required Documents</h2>
              <ul className="grid grid-cols-1 gap-3 list-none pl-0">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{doc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step-by-Step Application Process</h2>
              <ol className="space-y-4 text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li><strong className="text-slate-800 dark:text-slate-200">Prepare Documents:</strong> Ensure all qualifications are attested by HEC and recognized by German authorities (Anabin database).</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Book Appointment:</strong> Register on the German Mission waitlist online. Depending on the visa category, wait times for appointments can range from a few weeks to several months.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Application Formatting:</strong> Fill out the VIDEX application form online, print it, and organize your documents in the exact order specified by the embassy's checklist.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Attend Interview:</strong> Submit documents, pay the visa fee (usually €75 equivalent in PKR), and provide biometric data.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Wait for Processing:</strong> The embassy will verify documents and forward them to the local foreigners' authority in Germany if necessary.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Processing Time & Fees</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Visa Fee:</strong> Usually €75, payable in PKR cash at the time of the appointment.</li>
                <li><strong>Processing Time:</strong> Processing can take anywhere from 1 to 3 months once the application is submitted. Wait times simply to get an appointment can be significantly longer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Consulate Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://pakistan.diplo.de/pk-en/vertretungen/botschaft" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">German Embassy Islamabad</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://pakistan.diplo.de/pk-en/vertretungen/generalkonsulat1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">German Consulate Karachi</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://visa.vfsglobal.com/pak/en/deu/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">VFS Global Pakistan</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://visa.diplo.de/en/#/jsp/visum/national.jsp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">Official Visa Portal (VIDEX)</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
