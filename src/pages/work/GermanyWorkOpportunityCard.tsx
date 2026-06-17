import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, AlertTriangle, CheckCircle2, ExternalLink } from 'lucide-react';

export default function GermanyWorkOpportunityCard() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const pointsCriteria = [
    { rule: 'Qualification recognition', points: '4 points', desc: 'If your foreign qualification is fully recognized in Germany or you are authorized to practice a regulated profession.' },
    { rule: 'Professional experience', points: '2-3 points', desc: '3 points for 5 years of experience; 2 points for 2 years of experience.' },
    { rule: 'Language skills', points: '1-3 points', desc: 'German: A2 (1 pt), B1 (2 pts), B2 (3 pts). English: C1 (1 pt).' },
    { rule: 'Age', points: '1-2 points', desc: '2 points if under 35 years old; 1 point if under 40 years old.' },
    { rule: 'Stay in Germany', points: '1 point', desc: 'Previous legal stay in Germany for at least 6 continuous months (tourist stays do not count).' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Germany" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
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
              Germany Opportunity Card
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed md:text-2xl font-light">
              A complete guide to the new points-based Chancenkarte, allowing skilled Pakistani professionals to enter Germany to search for jobs.
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
                  Requirements and points criteria change frequently. Always verify with official sources before applying.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What is the Chancenkarte?</h2>
              <p className="text-slate-600 dark:text-slate-300">
                The Opportunity Card (Chancenkarte) is a residence permit that allows non-EU citizens, including Pakistanis, to enter Germany for up to one year to find suitable employment. It removes the barrier of needing a solid job offer before relocating.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                During this job search period, you are allowed to work part-time (up to 20 hours per week) or undertake trial work (probationary employment) to secure a long-term position.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <Target className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                The Points System Explained
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                To be eligible via the points system, you must score a minimum of <strong>6 points</strong>. Additionally, you must have recognized qualifications and basic language skills (A1 German or B2 English).
              </p>
              <div className="space-y-4">
                {pointsCriteria.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg m-0">{item.rule}</h3>
                      <p className="text-slate-600 dark:text-slate-400 m-0 mt-2 text-sm">{item.desc}</p>
                    </div>
                    <div className="md:w-1/4 text-right">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-bold px-4 py-2 rounded-lg">{item.points}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Required Documents</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Valid Pakistani Passport</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Proof of funds:</strong> Typically a blocked account holding approximately €12,204 for a 12-month stay, or a formal declaration of commitment (Verpflichtungserklärung).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Proof of qualification:</strong> Attested degrees and statement of comparability from ZAB.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Proof of language skills:</strong> Recognized certificates (Goethe-Zertifikat, IELTS, etc.).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Health Insurance:</strong> Adequate coverage valid in Germany.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Success Tips for Pakistani Applicants</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Start ZAB early:</strong> The Statement of Comparability process from the ZAB (Central Office for Foreign Education) can take months. Do this before applying for the visa.</li>
                <li><strong>Learn German:</strong> Even if you qualify with B2 English, the German job market heavily favors those who speak the local language. Securing points for German proficiency greatly boosts your chances of securing a job once you arrive.</li>
                <li><strong>Prepare your finances:</strong> Ensure the blocked account process is started well in advance. Consider Expatrio or Fintiba.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">Official Chancenkarte Info</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://anabin.kmk.org/anabin.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">Anabin Database</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://www.make-it-in-germany.com/en/visa-residence/quick-check" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">Points Self-Assessment Tool</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://pakistan.diplo.de/pk-en/vertretungen/botschaft" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">German Embassy Islamabad</span>
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
