import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';

export default function AustraliaMigrate() {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const pathways = [
    { title: 'Skilled Independent (189)', emoji: '📊', link: '/migrate/australia/skilled-independent', desc: 'Points-tested visa for skilled workers. No sponsor needed.' },
    { title: 'Skilled Nominated (190)', emoji: '🏙️', link: '/migrate/australia/skilled-nominated', desc: 'Points-tested visa, nominated by a state or territory.' },
    { title: 'Employer Sponsored (186)', emoji: '💼', link: '/migrate/australia/employer-sponsored', desc: 'For skilled workers nominated by their employer.' },
    { title: 'Family Stream', emoji: '👨‍👩‍👧', link: '/migrate/australia/family-stream', desc: 'Partner, parent, and child visas.' },
    { title: 'Points Calculator', emoji: '📋', link: '/migrate/australia/points-calculator', desc: 'Estimate your points for subclass 189, 190 and 491 visas.' },
    { title: 'Document Checklist', emoji: '📄', link: '/migrate/australia/documents', desc: 'Gather your items for Australian immigration.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Migrate to Australia from Pakistan 2026 | SC 189, 190, 491"
        description="Complete guide to Australian PR for Pakistanis. Skilled Independent Subclass 189, State Nominated 190, employer sponsored, and Points Calculator."
        canonicalPath="/migrate/australia"
      />
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Sydney Opera House" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/migrate" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Migrate
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Migrate to Australia 🇦🇺
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore the General Skilled Migration (GSM) program and family pathways for permanent residency.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 mb-16 flex items-start shadow-sm">
          <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-medium">
            Immigration laws change frequently. Always consult an authorized immigration consultant and verify with official government sources before making any decisions. We are an informational platform, not an immigration agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((path) => (
             path.link !== '' ? (
            <Link key={path.title} to={path.link} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all group flex flex-col h-full">
              <span className="text-4xl mb-4 block">{path.emoji}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{path.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{path.desc}</p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                Explore <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
             ) : (
                <div key={path.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col h-full opacity-60 cursor-not-allowed">
                  <span className="text-4xl mb-4 block">{path.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{path.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{path.desc}</p>
                  <div className="text-sm font-medium text-slate-500 mt-auto uppercase tracking-wider">Coming soon</div>
                </div>
             )
          ))}
        </div>
      </div>
    </div>
  );
}
