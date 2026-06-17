import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Languages, ExternalLink, GraduationCap, CheckCircle2 , Globe} from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaLanguage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Language Requirements for Canada Work Permit | IELTS & TEF Guide"
        description="Understand the English and French language requirements for Canadian Work Permits. Learn about IELTS, CELPIP, TEF and provincial differences."
        canonicalPath="/work/canada/language"
      />
      
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Canada
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Language Requirements 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore comprehensive guides and resources for moving abroad.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Policies change frequently. Always verify the latest information with official IRCC sources before applying.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <Languages className="w-6 h-6 mr-3 text-rose-600" />
                English Requirements (IELTS / CELPIP / PTE Core)
              </h2>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>For most temporary work permits via the TFWP or IMP, IRCC does not strictly define a minimum IELTS score across the board. The requirement depends on the job offer itself:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><strong>Employer discretion:</strong> If the employer states they require English proficiency on the LMIA, you must prove you meet it.</li>
                  <li><strong>Professional licensing:</strong> Healthcare workers (Nurses, Doctors) and Engineers must meet strict regulatory body requirements (often IELTS 7.0+ or equivalent).</li>
                  <li><strong>Consular officer discretion:</strong> The visa officer assessing your work permit application must be convinced you have the language skills to perform the job safely.</li>
                </ul>
                
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 mt-6">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3">Accepted Tests:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> <strong>IELTS General Training</strong></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> <strong>CELPIP General</strong></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> <strong>PTE Core</strong> (recently added by IRCC)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <GraduationCap className="w-6 h-6 mr-3 text-emerald-600" />
                The French Advantage (Quebec & Beyond)
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>If you have intermediate French skills (CLB 5 or higher), you have a massive advantage:</p>
                <ul className="space-y-3">
                  <li><strong>Francophone Mobility Program:</strong> This stream allows Canadian employers outside of Quebec to hire French-speaking or bilingual workers <strong>without an LMIA</strong>.</li>
                  <li><strong>Quebec:</strong> To work in Quebec, you usually need to demonstrate French proficiency.</li>
                </ul>
                <p>Accepted French tests: TEF Canada, TCF Canada.</p>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Official Links</h2>
              <div className="space-y-3">
                <a href="https://www.ielts.org/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">IELTS Official Site</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.celpip.ca/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">CELPIP Info</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
