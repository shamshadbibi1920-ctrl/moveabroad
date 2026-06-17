import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, FileText, CheckCircle2, ArrowLeft, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaMigrate() {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const pathways = [
    { title: 'Express Entry', emoji: '📊', link: '/migrate/canada/express-entry', desc: 'Federal skilled programs using the CRS points system.' },
    { title: 'Provincial Nominee Program', emoji: '🏙️', link: '/migrate/canada/pnp', desc: 'Sponsorship by a specific Canadian province.' },
    { title: 'Family Sponsorship', emoji: '👨‍👩‍👧', link: '/migrate/canada/family-sponsorship', desc: 'Sponsor your spouse, children, or parents.' },
    { title: 'Atlantic Immigration Program', emoji: '🌊', link: '/migrate/canada/atlantic', desc: 'Employer-driven program for the 4 Atlantic provinces.' },
    { title: 'Document Checklist', emoji: '📋', link: '/migrate/canada/documents', desc: 'Complete list of documents required for your PR application.' },
    { title: 'Processing Times', emoji: '⏱️', link: '/migrate/canada/processing-times', desc: 'Current IRCC processing times for different streams.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Migrate to Canada from Pakistan 2026 | PR Pathways"
        description="Complete guide on how to migrate to Canada. Express Entry, PNP, Atlantic Immigration Program, and Family Sponsorship details for Pakistanis."
        canonicalPath="/migrate/canada"
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
          <Link to="/migrate" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Migrate
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Migrate to Canada 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover the most popular pathways for Pakistani citizens to obtain Canadian Permanent Residency (PR).
            </p>
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
            <Link key={path.title} to={path.link} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all group flex flex-col h-full">
              <span className="text-4xl mb-4 block">{path.emoji}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{path.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{path.desc}</p>
              <div className="flex items-center text-red-600 dark:text-red-400 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                Explore <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
