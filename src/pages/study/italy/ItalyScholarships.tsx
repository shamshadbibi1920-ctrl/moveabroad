import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Award, CheckCircle2, AlertTriangle, FileText, Globe, Euro, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItalyScholarships() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1400&q=80" 
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
              <Award className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Scholarships in Italy</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            Italy is one of the most generous study destinations for Pakistani students, offering massive regional and government scholarships.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> CRITICAL STEP: The ISEE Parificato
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed mb-4">
            Most Pakistani students fund their studies through <strong>DSU (Regional) Scholarships</strong>. To get this, you must prove your family income is low/moderate. You do this by getting an <strong>ISEE Parificato</strong> (Equivalent Economic Situation Indicator) certificate.
          </p>
          <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2 list-disc list-inside">
            <li>You must gather family income, property, and bank balance documents from Pakistan.</li>
            <li>These documents must be translated into Italian and legalized by the Italian Embassy/Consulate or MOFA.</li>
            <li>Once in Italy (or via online CAFs), these documents are converted into your "ISEE score". If it is below a certain threshold (usually €23,000 - €25,000), you win the scholarship!</li>
          </ul>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Top Scholarship Programs</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                DSU / Regional Scholarships (Need-Based)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Every region in Italy (Lombardy, Lazio, Emilia-Romagna, etc.) has an agency that provides scholarships to all students based purely on financial need, regardless of merit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <Euro className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Amount:</strong> 100% Tuition Waiver + up to €7,000/year stipend + free meals.
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" /> <strong>Deadline:</strong> Usually July - September (varies by region).
                </div>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Eligibility:</strong> ISEE Parificato below the regional threshold. Available for Bachelor's, Master's, and PhD.
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Invest Your Talent in Italy (IYT)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Supported by the Ministry of Foreign Affairs, aimed at students taking specific Master's degrees in Engineering, Advanced Technologies, Architecture, Design, or Economics/Management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <Euro className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Amount:</strong> €9,000/year (paid quarterly) + tuition waiver.
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" /> <strong>Deadline:</strong> Usually January to March.
                </div>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Eligibility:</strong> Must be admitted to an eligible English-taught Master's program. Includes a mandatory 3-month internship in an Italian company.
              </div>
              <a href="https://investyourtalentapplication.esteri.it/SitoInvestYourTalentApplication/progetto.asp" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">Official IYT Portal &rarr;</a>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Italian Government Scholarships (MAECI)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Offered by the Ministry of Foreign Affairs to foreign citizens holding a relevant degree, primarily for Master's, PhD, and Research projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <Euro className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Amount:</strong> €900/month stipend + health insurance + tuition waiver.
                </div>
                <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" /> <strong>Deadline:</strong> Usually June.
                </div>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Eligibility:</strong> High academic merit. Age limits apply (usually 28 for Master's, 30 for PhD).
              </div>
              <a href="https://studyinitaly.esteri.it/en/call-for-procedure" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">Official MAECI Portal &rarr;</a>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                University-Specific Merit Scholarships
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Many universities offer their own merit scholarships to top international students (often based on GRE/GMAT scores, CGPA, or admission test ranking).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <strong>Politecnico di Milano:</strong> Platinum/Gold/Silver scholarships (€5,000-€10,000/year).
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <strong>University of Bologna:</strong> Unibo Action 1 & 2 (up to €11,000/year).
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <strong>Bocconi University:</strong> Bocconi Merit Award (100% tuition waiver).
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <strong>University of Padua:</strong> Padua International Excellence Scholarship.
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
