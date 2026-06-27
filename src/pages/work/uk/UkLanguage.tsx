import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Languages, ExternalLink, CheckCircle2, GraduationCap, MapPin, Globe } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkLanguage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="UK Visa English Language Requirements | MoveAbroad.pk"
        description="Understand the B1 English language requirement for the UK Skilled Worker Visa. Accepted tests like IELTS UKVI, PTE UKVI, and Ecctis degree exemptions."
        canonicalPath="/work/uk/language"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/uk" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in the UK
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Language Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Language Requirements 🗣️
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Understand the B1 English proficiency requirement, approved tests (IELTS UKVI), and degree-based exemptions through Ecctis.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Languages className="w-6 h-6 mr-3 text-blue-600" /> The B1 Requirement Explained
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              To obtain a Skilled Worker Visa or Health & Care Visa, you must prove your knowledge of English. The requirement is at least level <strong>B1</strong> on the Common European Framework of Reference for Languages (CEFR) scale.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              B1 means you are an "independent user" who can understand the main points of clear standard input on familiar matters, deal with most situations likely to arise, and produce simple connected text. In IELTS terms, this roughly equates to a score of <strong>4.0 overall</strong> (though higher is always better for employer impressions).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Approved Secure English Language Tests (SELT)</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              You cannot take just any English test. It <strong>must</strong> be an approved SELT taken at an approved test center.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">IELTS for UKVI</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">The most common test. It is similar to standard IELTS but has extra security protocols. Available through British Council and AEO in Pakistan.</p>
                <div className="text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 inline-block px-3 py-1 rounded-full">Highly Recommended</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">PTE Academic UKVI</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">A computer-based test that often provides faster results. Growing in popularity in Pakistan.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">LanguageCert International ESOL SELT</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Another valid option, offering both computer and paper-based testing at specific centers.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">OET (Occupational English Test)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Accepted for doctors and nurses if it is required by their professional regulatory body (GMC/NMC).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-emerald-500" /> Exemptions (The Ecctis Route)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You do <strong>not</strong> need to take an English test if you have a university degree (Bachelor's, Master's, or PhD) that was taught in English.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              To prove this, you must apply to <strong>Ecctis</strong> (formerly UK NARIC) for a certificate that confirms your degree is equivalent to a UK degree and was taught in English.
            </p>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">How to get Ecctis confirmation:</h4>
              <ul className="text-sm text-emerald-800 dark:text-emerald-200 space-y-2">
                <li>1. Gather your degree certificate and transcripts.</li>
                <li>2. Get a Medium of Instruction (MOI) letter from your university stating the course was taught in English.</li>
                <li>3. Apply online at the Ecctis website for the "Visas and Nationality service" (English proficiency).</li>
                <li>4. It usually takes 10-15 working days and costs around £140.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Preparation in Pakistan</h2>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>British Council:</strong> Offers excellent free online resources when you book your IELTS UKVI with them. They have centers in Karachi, Lahore, and Islamabad.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>AEO Pakistan:</strong> Another official IELTS testing partner with preparation classes and test centers across major cities.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Private Academies:</strong> Numerous academies offer 1-2 month intensive IELTS/PTE preparation courses (ensure they focus on the UKVI specific formats).</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
            <div className="flex flex-col space-y-4">
              <a href="https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                UKVI: Approved Secure English Language Tests <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ecctis.com/Qualifications/VAN/Default.aspx" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                Ecctis: Visas and Nationality Service <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
