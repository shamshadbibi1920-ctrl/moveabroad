import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Plane, Briefcase, GraduationCap, MapPin, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import SEO from '../../components/SEO';

export default function MigrateHome() {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Migrate Abroad — Complete PR & Visa Guide for Pakistanis"
        description="Explore permanent residency, skilled migration, and investment visas (Golden Visa) for Canada, Australia, USA, UK, Europe, and more."
        canonicalPath="/migrate"
      />
      {/* Hero Section */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80" 
            alt="Migration Destination" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Migrate Abroad — Build Your Future Permanently
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore permanent residency and citizenship pathways for Pakistani professionals and investors.
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

        {/* Category 1 — Skilled Migration */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-20">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-xl mr-4"><Briefcase className="w-6 h-6" /></span>
             Skilled Migration 🎯
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Permanent residency through skills, qualifications and work experience.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { country: 'Canada', flag: '🇨🇦', link: '/migrate/canada' },
              { country: 'Australia', flag: '🇦🇺', link: '/migrate/australia' },
              { country: 'Germany', flag: '🇩🇪', link: '/migrate/germany' },
              { country: 'United Kingdom', flag: '🇬🇧', link: '/migrate/uk' },
              { country: 'New Zealand', flag: '🇳🇿', link: '/migrate/new-zealand' },
              { country: 'Ireland', flag: '🇮🇪', link: '/migrate/ireland' },
            ].map(item => (
              <Link key={item.country} to={item.link} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all group flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{item.flag}</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-white">{item.country}</span>
                </div>
                <ArrowRight className="text-slate-400 group-hover:text-blue-500 transition-colors" />
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Category 2 — USA Immigration */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-20">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
             <span className="bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-2 rounded-xl mr-4">🇺🇸</span>
             USA Immigration
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Employment based green card pathways for Pakistani professionals.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/migrate/usa/eb2-niw" className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all group">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">USA EB-2 NIW</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-4">National Interest Waiver — No job offer required. Ideal for advanced degree holders.</p>
               <div className="flex items-center text-red-600 dark:text-red-400 font-semibold group-hover:translate-x-2 transition-transform">
                 Learn more <ArrowRight className="ml-2 w-4 h-4" />
               </div>
            </Link>
            <Link to="/migrate/usa/eb3" className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all group">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">USA EB-3</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-4">Skilled workers and professionals. Requires employer sponsorship and PERM.</p>
               <div className="flex items-center text-red-600 dark:text-red-400 font-semibold group-hover:translate-x-2 transition-transform">
                 Learn more <ArrowRight className="ml-2 w-4 h-4" />
               </div>
            </Link>
          </div>
        </motion.section>

        {/* Category 3 — Golden Visa */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
             <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 p-2 rounded-xl mr-4"><DollarSign className="w-6 h-6" /></span>
             Golden Visa 💰
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Residency and citizenship through investment for Pakistani investors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { country: 'Portugal', flag: '🇵🇹', link: '/migrate/golden-visa/portugal' },
              { country: 'Greece', flag: '🇬🇷', link: '/migrate/golden-visa/greece' },
              { country: 'Spain', flag: '🇪🇸', link: '/migrate/golden-visa/spain' },
              { country: 'UAE', flag: '🇦🇪', link: '/migrate/golden-visa/uae' },
              { country: 'Malta', flag: '🇲🇹', link: '/migrate/golden-visa/malta' },
            ].map(item => (
              <Link key={item.country} to={item.link} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-lg transition-all group flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{item.flag}</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-white">{item.country}</span>
                </div>
                <ArrowRight className="text-slate-400 group-hover:text-amber-500 transition-colors" />
              </Link>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
