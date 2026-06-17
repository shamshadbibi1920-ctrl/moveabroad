import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ListTodo, AlertTriangle, CheckCircle2 , Globe} from 'lucide-react';

export default function GermanyWorkApplication() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const steps = [
    { title: 'Step 1: Get HEC attestation of degrees', desc: 'Ensure all your university degrees are attested by the Higher Education Commission block in Pakistan.' },
    { title: 'Step 2: Get experience certificates', desc: 'Gather verifiable experience letters from your past employers detailing your exact duties and dates of employment.' },
    { title: 'Step 3: Get qualification recognized in Germany', desc: 'Use the Anabin database to check your university/degree, or apply for a Statement of Comparability from ZAB.' },
    { title: 'Step 4: Learn German', desc: 'While not strictly required for all IT jobs, A1-B1 is highly recommended for visas and integration.' },
    { title: 'Step 5: Search and apply for jobs', desc: 'Use LinkedIn, Stepstone, and Make it in Germany to find roles and apply with a German-format CV.' },
    { title: 'Step 6: Get job offer', desc: 'Secure a signed employment contract that ideally meets the salary requirements for a Skilled Worker or EU Blue Card visa.' },
    { title: 'Step 7: Apply for work visa', desc: 'Submit your application at the German Embassy in Islamabad or Consulate in Karachi along with all supporting documents.' },
    { title: 'Step 8: Travel and register in Germany', desc: 'Once approved, travel to Germany, register your address (Anmeldung), and quickly apply for your residence permit.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/germany" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Germany Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Application Process 🇩🇪
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive step-by-step roadmap for Pakistani professionals aiming to move and work in Germany.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  relative z-10 pb-20">
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
                  Requirements change frequently. Always verify with official sources before applying.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <ListTodo className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Step-by-Step Guide
              </h2>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row relative">
                    <div className="md:w-1/4 pb-2 md:pb-0 font-bold text-slate-900 dark:text-white mt-1">
                      {step.title.split(':')[0]}
                    </div>
                    <div className="md:w-3/4 bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 mt-0">{step.title.split(':')[1].trim()}</h3>
                      <p className="text-slate-600 dark:text-slate-400 m-0 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Document Checklist</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> HEC Attested Degrees</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> MOFA Attested Documents</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> ZAB Comparability Statement</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Language Certificates</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Experience Letters</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Passport & ID</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Timeline & Common Mistakes</h2>
              <p className="text-slate-600 dark:text-slate-300">
                The entire process typically takes <strong>6 to 12 months</strong>.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li><strong>Mistake: Treating Anabin lightly.</strong> Failing to get your degree recognized properly before applying for jobs leads to visa rejections.</li>
                <li><strong>Mistake: Poor CV formats.</strong> Using standard templates instead of a strict, factual German Lebenslauf.</li>
                <li><strong>Mistake: Underestimating processing times.</strong> Embassy appointments in Pakistan can take months to secure. Plan accordingly.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
