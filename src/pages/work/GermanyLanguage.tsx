import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Languages, AlertTriangle, CheckCircle2, Link as LinkIcon, Globe } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function GermanyLanguage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const levels = [
    { level: 'A1 (Beginner)', desc: 'Basic vocabulary, introductions, and simple everyday phrases.' },
    { level: 'A2 (Elementary)', desc: 'Can communicate in routine tasks and understand common expressions.' },
    { level: 'B1 (Intermediate)', desc: 'Can deal with most travel situations, describe experiences, and understand main points of standard input.' },
    { level: 'B2 (Upper Intermediate)', desc: 'Can understand complex text, interact with native speakers fluently, and work comfortably in German.' },
    { level: 'C1/C2 (Advanced)', desc: 'Near-native fluency. Required for highly specialized or academic roles.' }
  ];

  return (
    <>
      <SEO title="Germany Language | MoveAbroad.pk" description="Comprehensive guide to germany language for Pakistani students and professionals moving abroad." />
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
              Language Requirements 🇩🇪
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything you need to know about learning German, officially recognized exams, and which proficiency levels are required for different visas.
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
                  While many IT roles operate in English, moving to Germany without at least A1/A2 German heavily restricts your job market opportunities and makes daily life challenging.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <Languages className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> CEFR Levels Explained
              </h2>
              <div className="space-y-4">
                {levels.map((lvl, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 m-0">{lvl.level}</h3>
                    <p className="text-slate-600 dark:text-slate-400 m-0 text-sm">{lvl.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Visa Language Requirements</h2>
              <ul className="grid grid-cols-1 gap-3 list-none pl-0">
                <li className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Opportunity Card:</span> B1 German highly preferred (gets you 2 points), or A1 German + B2 English.
                  </div>
                </li>
                <li className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Healthcare Workers (Doctors/Nurses):</span> Strict B2 requirement, usually followed by an Approbation medical language exam.
                  </div>
                </li>
                <li className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">EU Blue Card:</span> Legally, no strict German requirement if the job is entirely in English. However, having A1/B1 accelerates your path to Permanent Residency.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Where to Learn German in Pakistan</h2>
              <p className="text-slate-600 dark:text-slate-300">
                The German Embassy only accepts certificates from recognized testing bodies (Goethe, ÖSD, telc, TestDaF).
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Goethe Institut (Islamabad, Karachi, Lahore):</strong> The absolute gold standard. They offer intensive and super-intensive courses.</li>
                <li><strong>NUML (National University of Modern Languages):</strong> Offers accredited German diploma programs.</li>
                <li><strong>Online Options:</strong> For practice alongside formal classes, use Deutsche Welle (Nicos Weg is fantastic), Babbel, or italki (for conversational practice).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cost and Duration</h2>
              <p className="text-slate-600 dark:text-slate-300">
                In Pakistan, an intensive Goethe Institut course for one level (e.g., A1) takes roughly 6 to 8 weeks. Expect costs to be around PKR 40,000 to PKR 60,000 per level, plus the official exam fee. To reach B2 from zero, expect a 6 to 9 month full-time commitment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tips for Fast Learning</h2>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>Immerse yourself: Change your phone language to German.</li>
                <li>Watch German Netflix shows with subtitles (e.g., Dark, How to Sell Drugs Online (Fast)).</li>
                <li>Focus heavily on the gender of nouns (der/die/das) from day one. Do not just memorize words without their articles.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
