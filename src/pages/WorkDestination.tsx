import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Briefcase, FileText, Banknote, Building, Calendar, ArrowRight, CheckCircle2, TrendingUp, Globe } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function WorkDestination() {
  const { countryId } = useParams<{ countryId: string }>();
  const safeId = countryId || 'germany';
  const data = getCountryData(safeId);
  const countryName = data?.name || safeId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  if (!data) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <Briefcase className="w-16 h-16 text-indigo-500 mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Information Coming Soon</h1>
          <p className="text-slate-500 dark:text-slate-400">Detailed work information for {countryName} is not yet available.</p>
          <Link to="/" className="mt-6 inline-block text-indigo-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 w-full min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {data.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-indigo-900"></div>
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 text-indigo-50 text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4 mr-2" /> Global Careers
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Work in {countryName} {data.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Explore job markets, skilled worker visas, and pathway routes for Pakistani professionals seeking rewarding careers in {countryName}.
            </motion.p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {data.overview && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-4 text-indigo-600 dark:text-indigo-400" /> Overview
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                  {data.overview}
                </p>
              </motion.section>
            )}

            {data.workVisaInfo && data.workVisaInfo.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-4 text-indigo-600 dark:text-indigo-400" /> Work Visa Information
                </h2>
                <ul className="space-y-4">
                  {data.workVisaInfo.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <Building className="w-8 h-8 mr-4 text-indigo-600 dark:text-indigo-400" /> Work Opportunities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Connect with international employers seeking skilled workers. Leverage specialized job boards and networking platforms to find roles matched to your expertise in various high-demand sectors in {countryName}.
              </p>
              <Link to="/work-abroad" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300">
                Browse latest job listings for {countryName} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.section>

             <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.costOfLiving && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Banknote className="w-6 h-6 mr-3 text-indigo-500" /> Cost of Living
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.costOfLiving}
                    </p>
                  </div>
                )}
                {data.languageRequirements && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-indigo-500" /> Language Req.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.languageRequirements}
                    </p>
                  </div>
                )}
             </motion.section>

          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-[2rem] p-8 border border-indigo-100 dark:border-indigo-800/50">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">Latest Updates</h3>
              <div className="space-y-6">
                {[
                  { title: `New shortage occupation list updated for ${countryName}`, date: '2 days ago' },
                  { title: 'Tax exemptions introduced for skilled tech workers', date: '1 week ago' },
                  { title: 'How to write a CV for international recruiters', date: '2 weeks ago' }
                ].map((news, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <Calendar className="w-4 h-4 mr-2" /> {news.date}
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {news.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

             <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-4">Resume Review</h3>
              <p className="text-slate-300 mb-6">
                Get your CV tailored to international standards and increase your interview callbacks.
              </p>
              <Link to="/contact" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 font-semibold py-3 px-4 rounded-xl transition-colors">
                Book a CV Review
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
