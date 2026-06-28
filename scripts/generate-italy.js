import fs from 'fs';
import path from 'path';

const basePath = path.join(process.cwd(), 'src', 'pages', 'work', 'italy');
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

const colosseum = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80";
const venice = "https://images.unsplash.com/photo-1516483638261-f4088921c518?w=1400&q=80";
const florence = "https://images.unsplash.com/photo-1542820229-081e0c12af0b?w=1400&q=80";

const files = {
  'ItalyWorkIndex.tsx': `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, Users, ListTodo, DollarSign, MapPin, Languages, ArrowLeft, Globe, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyWorkIndex() {
  const [openSection, setOpenSection] = useState<string | null>('updates');

  const sections = [
    { title: 'Job Opportunities', icon: <Briefcase className="w-8 h-8" />, desc: 'In-demand sectors and legitimate employers', link: '/work/italy/jobs' },
    { title: 'Decreto Flussi Visa Process', icon: <FilePlus className="w-8 h-8" />, desc: 'Quota system and Click Days explained', link: '/work/italy/visa' },
    { title: 'Pakistan-Specific Quota', icon: <Users className="w-8 h-8" />, desc: '3,500 dedicated slots for Pakistanis in 2026', link: '/work/italy/pakistan-quota' },
    { title: 'Application Process', icon: <ListTodo className="w-8 h-8" />, desc: 'Step-by-step from job offer to residence permit', link: '/work/italy/application-process' },
    { title: 'Salary & Benefits', icon: <DollarSign className="w-8 h-8" />, desc: 'Wages by sector and CCNL agreements', link: '/work/italy/salary' },
    { title: 'Relocation Guide', icon: <MapPin className="w-8 h-8" />, desc: 'First weeks in Italy and community hubs', link: '/work/italy/relocation' },
    { title: 'Language Requirements', icon: <Languages className="w-8 h-8" />, desc: 'Italian language skills and integration', link: '/work/italy/language' },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <>
      <SEO title="Work in Italy: Work Index | MoveAbroad.pk" description="Comprehensive guide to working in Italy for Pakistani professionals. Explore the Decreto Flussi visa, Pakistan-specific quota, and job opportunities." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="${colosseum}" 
            alt="Italy Work Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work-abroad" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work Destinations
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Italy Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Work in Italy 🇮🇹
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Italy offers incredible opportunities across technical trades, agriculture, and healthcare. Learn how to secure a job offer and navigate the Decreto Flussi quota system.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        
        {/* HIGHLIGHT BOX */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border-l-4 border-emerald-500 rounded-r-2xl p-6 mb-8 backdrop-blur-md shadow-sm border-t border-r border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <span className="text-2xl">🇮🇹</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Special Pakistan Quota</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Italy has reserved <strong>3,500 work visa slots exclusively for Pakistani nationals in 2026</strong> (part of 10,500 total slots over 2026-2028), under a dedicated bilateral agreement separate from the general Decreto Flussi quota — making Italy one of the most accessible legal work pathways to Europe for Pakistanis right now.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-12">
           <button 
              onClick={() => toggleSection('updates')}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3 text-amber-500" /> Latest Updates
              </h2>
              {openSection === 'updates' ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>
            <AnimatePresence>
              {openSection === 'updates' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm space-y-4">
                    <p>
                      <strong>Decreto Flussi quotas, Click Day dates, and eligibility requirements change annually</strong> and are announced by the Italian Ministry of Interior.
                    </p>
                    <p className="text-red-600 dark:text-red-400 font-semibold">
                      Never pay an agent claiming to offer guaranteed jobs or "free visas" — always verify through official government sources and licensed employers only. The Italian government does NOT issue free work visas. You must have a genuine job offer from a real, quota-registered Italian employer.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={section.link}
                className="block h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
`,
  'ItalyJobs.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Briefcase, ExternalLink, AlertTriangle } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyJobs() {
  return (
    <>
      <SEO title="Work in Italy: Jobs | MoveAbroad.pk" description="Explore the most in-demand sectors for Pakistanis in Italy, salary ranges, and where to find legitimate Italian employers." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${venice}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <h1 className="font-display text-4xl font-bold mb-4">Job Opportunities in Italy</h1>
            <p className="text-lg text-blue-100">Find legitimate employment and understand the most in-demand sectors for Pakistani professionals.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Most In-Demand Sectors for Pakistanis
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Construction and Skilled Trades</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€22,000 - €32,000/year</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Logistics and Warehouse Work</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€20,000 - €28,000/year</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Agriculture and Seasonal Farm Work</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€18,000 - €25,000/year (often seasonal)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Hospitality and Tourism</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€18,000 - €26,000/year (often seasonal)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Manufacturing</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€22,000 - €30,000/year</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 border-l-4 border-l-emerald-500">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Healthcare / Caregiving (Family Assistance)</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€20,000 - €28,000/year</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2 font-medium">Note: 13,600 non-seasonal slots specifically reserved for family assistance and healthcare sector in 2026.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 border-l-4 border-l-blue-500">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">IT & Tech Professionals (EU Blue Card)</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">€35,000 - €55,000/year</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 font-medium">Note: Separate from the Decreto Flussi quota system.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Where to find legitimate Italian employers</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Connect through licensed recruitment agencies, EURES (European job mobility portal), or direct employer outreach.</p>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-red-800 dark:text-red-300 font-bold mb-2">Warning: Beware of Scams</h3>
                  <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed">
                    Beware of agents promising guaranteed jobs or "free visas" — the Italian government does NOT issue free work visas. You must have a genuine job offer from a real, quota-registered Italian employer before any visa process can begin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Job Portal Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="https://eures.ec.europa.eu/index_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                EURES Italy <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://www.infojobs.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                InfoJobs.it <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="https://it.indeed.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                Indeed Italy <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
`,
  'ItalyWorkVisa.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FilePlus, Calendar, CheckCircle2, Globe, AlertTriangle } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyWorkVisa() {
  return (
    <>
      <SEO title="Work in Italy: Decreto Flussi Visa | MoveAbroad.pk" description="Learn about Italy's Decreto Flussi visa process, Click Days, quotas, and how Italian employers sponsor non-EU workers." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${florence}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <h1 className="font-display text-4xl font-bold mb-4">Decreto Flussi Visa Process</h1>
            <p className="text-lg text-blue-100">Understand the annual quota system, Click Days, and the employer-driven application process.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What is Decreto Flussi?</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Decreto Flussi is Italy's annual government decree setting quotas for non-EU workers. It covers 2026-2028 with nearly 500,000 total work entries planned, including <strong>164,850 slots specifically for 2026</strong> (88,000 seasonal in agriculture/tourism, 76,850 non-seasonal including skilled trades and self-employment).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Seasonal Work</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lavoro stagionale (e.g., agriculture, tourism).</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Non-Seasonal</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lavoro subordinato non stagionale (e.g., construction, manufacturing).</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Self-Employed</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lavoro autonomo for entrepreneurs and freelancers.</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-blue-800 dark:text-blue-300 font-bold mb-2 text-lg">Process is EMPLOYER-DRIVEN</h3>
              <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                You cannot apply for this visa independently. An Italian employer must first secure your Nulla Osta (work authorization) on your behalf during designated "Click Days" when the online portal opens.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Step-by-Step Process</h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Secure Job Offer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Get a job offer from a registered Italian employer participating in Decreto Flussi.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Employer Submits Application</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Via Ministry of Interior portal during Click Days (pre-filing in Oct, main days early Feb 2026).</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Receive Nulla Osta</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Work authorization is issued to the employer, typically valid for 6 months. Processing takes 4-8 weeks.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Apply for Visa</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Apply for Type D work visa at Italian Embassy/Consulate in Pakistan using the Nulla Osta.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-blue-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  5
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Travel & Register</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Travel to Italy, and within 8 days apply for Permesso di Soggiorno (residence permit).</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8 flex items-start">
             <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
             <div>
                <h3 className="text-amber-800 dark:text-amber-400 font-bold mb-2">IMPORTANT 2026 RULE</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  If a Nulla Osta is issued but you fail to obtain your visa within 6 months, the authorization is automatically canceled — this rule was introduced to free up unused quota slots.
                </p>
             </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Official Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="https://portaleservizi.dlci.interno.it/AliSportello/ali/home.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Ministry of Interior Services Portal (Sportello Unico)
              </a>
              <a href="https://visa.vfsglobal.com/pak/en/ita/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                VFS Global Italy - Pakistan
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
`,
  'ItalyPakistanQuota.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyPakistanQuota() {
  return (
    <>
      <SEO title="Work in Italy: Pakistan-Specific Quota | MoveAbroad.pk" description="Learn about the special bilateral agreement reserving 3,500 work visa slots in Italy exclusively for Pakistani nationals in 2026." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${colosseum}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/30 text-emerald-100 text-sm font-semibold mb-4">
              <Users className="w-4 h-4 mr-2" /> Dedicated Quota
            </div>
            <h1 className="font-display text-4xl font-bold mb-4">Pakistan-Specific Quota</h1>
            <p className="text-lg text-blue-100">Details on the bilateral labor agreement reserving 10,500 slots over 2026-2028.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Understanding the Bilateral Agreement</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg">
                Italy and Pakistan signed a bilateral labor agreement reserving <strong>10,500 work visa slots exclusively for Pakistani nationals over 2026-2028</strong>, with <strong>3,500 slots specifically allocated for 2026</strong>.
              </p>
              <p>
                This is separate from and in addition to Pakistan's share of the general Decreto Flussi global quota. It was finalized through diplomatic efforts by Pakistan's Ministry of Overseas Pakistanis and Human Resource Development, aimed at providing a legal, secure migration pathway while curbing irregular migration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <FileCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Valid CNIC and Passport</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Confirmed job offer from registered Italian employer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Clean criminal record (Pakistan + any other residence)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">International polio vaccination certificate (mandatory)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Relevant trade experience or diplomas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Covered Sectors
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Technical Trades</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Hospitality</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Construction</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Logistics</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Healthcare / Caregiving</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-blue-800 dark:text-blue-300 font-bold mb-2 text-lg">Important Note</h3>
            <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
              This quota does not mean automatic approval — you still need a genuine employer-sponsored job offer and must go through the same Nulla Osta and visa process. The benefit is a higher number of dedicated slots specifically for Pakistani applicants, improving your chances compared to the general global quota.
            </p>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Where to find updates:</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Follow the Pakistan Ministry of Overseas Pakistanis and Human Resource Development official announcements and the Italian Embassy Islamabad for Click Day schedules.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
`,
  'ItalyWorkApplication.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ListTodo, FileText, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyWorkApplication() {
  return (
    <>
      <SEO title="Work in Italy: Application Process | MoveAbroad.pk" description="Step-by-step guide to applying for an Italian work visa, document requirements, and common mistakes to avoid." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${venice}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <h1 className="font-display text-4xl font-bold mb-4">Application Process & Documents</h1>
            <p className="text-lg text-blue-100">Detailed steps to secure your visa and the required document checklist.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Document Checklist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Valid Passport (at least 6 months validity)</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Nulla Osta (Work Authorization document)</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Job Offer / Employment Contract</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Educational/Trade Certificates (HEC Attested)</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Police Clearance Certificate</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">International Polio Vaccination Certificate</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Certified Italian Translation of documents</span>
              </div>
              <div className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">Passport sized photos</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Step-by-Step Process</h2>
            <ol className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-8">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Connect & Attest</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Connect with employer/agency. Get HEC attestation of qualifications if required for your field.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Translate Documents</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Get Italian translation of required documents through certified translators.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">3</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Nulla Osta Application</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Employer submits Nulla Osta application during Click Days in Italy.</p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">4</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Visa Application</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Receive Nulla Osta and apply for Type D visa at Italian Embassy Islamabad or Consulate Karachi.</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-slate-900 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-sm">5</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Arrival in Italy</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Travel to Italy and register for Permesso di Soggiorno (Residence Permit) within 8 days.</p>
                </li>
            </ol>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-red-800 dark:text-red-300 font-bold mb-2">Common Mistakes to Avoid</h3>
                <ul className="list-disc list-inside text-red-700 dark:text-red-400 text-sm space-y-1">
                  <li>Applying without a confirmed employer</li>
                  <li>Missing the narrow "Click Day" windows</li>
                  <li>Using unlicensed agents promising "free visas"</li>
                  <li>Incomplete or uncertified document translation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Useful Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="https://www.hec.gov.pk/english/services/students/Degree-Attestation-System/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                HEC Degree Attestation System
              </a>
              <a href="https://ambislamabad.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/traduttori/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                List of Certified Translators (Embassy of Italy in Pakistan)
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
`,
  'ItalySalary.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, ExternalLink } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalySalary() {
  return (
    <>
      <SEO title="Work in Italy: Salary & Benefits | MoveAbroad.pk" description="Learn about average salaries by sector in Italy, the taxation system, and worker benefits." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${florence}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <h1 className="font-display text-4xl font-bold mb-4">Salary & Benefits in Italy</h1>
            <p className="text-lg text-blue-100">Understand minimum wages, CCNL agreements, and taxes.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How Minimum Wage Works (CCNL)</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Italy does not have a single national minimum wage set by law. Instead, wages are determined by <strong>Collective Labour Agreements (CCNL - Contratti Collettivi Nazionali di Lavoro)</strong> for each specific sector. This means your minimum legal pay depends entirely on your industry and job level.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Average Salaries by Sector</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="p-4 font-semibold text-slate-900 dark:text-white rounded-tl-lg">Sector</th>
                    <th className="p-4 font-semibold text-slate-900 dark:text-white rounded-tr-lg">Average Yearly Gross (Estimated)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="p-4">Construction & Trades</td>
                    <td className="p-4">€22,000 - €32,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Agriculture (often seasonal)</td>
                    <td className="p-4">€18,000 - €25,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Hospitality & Tourism</td>
                    <td className="p-4">€18,000 - €26,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Manufacturing</td>
                    <td className="p-4">€22,000 - €30,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Healthcare / Caregiving</td>
                    <td className="p-4">€20,000 - €28,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900 dark:text-white">IT & Tech (EU Blue Card)</td>
                    <td className="p-4 font-medium text-slate-900 dark:text-white">€35,000 - €55,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tax System</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 text-sm">
                <li>Progressive income tax (IRPEF) ranging from 23% to 43% depending on income brackets.</li>
                <li>Additional regional and municipal taxes.</li>
                <li>Social security contributions (INPS) are typically deducted directly from your gross pay.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Worker Benefits</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 text-sm">
                <li>Strong labor protection laws under Italian constitution.</li>
                <li>Access to public healthcare (Servizio Sanitario Nazionale).</li>
                <li>Paid leave, sick leave, and maternity/paternity entitlements under CCNL.</li>
                <li>13th-month pay (Tredicesima) mandatory in most sectors, paid in December.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Cost of Living
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Compare cost of living between Pakistani cities and Italian cities to estimate your expenses.</p>
            <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Italy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
              Check Numbeo Italy
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
`,
  'ItalyRelocation.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2, Utensils, Send } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyRelocation() {
  return (
    <>
      <SEO title="Work in Italy: Relocation Guide | MoveAbroad.pk" description="Essential guide for your first weeks in Italy, finding Pakistani communities, halal food, and sending money home." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${venice}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <h1 className="font-display text-4xl font-bold mb-4">Relocation Guide</h1>
            <p className="text-lg text-blue-100">Your first weeks in Italy, communities, and living essentials.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Building2 className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              First Weeks in Italy Checklist
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white">1. Permesso di Soggiorno (Residence Permit)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">You must apply for this within 8 days of arriving in Italy at the local post office (Sportello Amico) or Questura (police headquarters).</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white">2. Codice Fiscale (Tax Code)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Required for opening a bank account, signing a lease, or getting a SIM card. Apply at the local Agenzia delle Entrate.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white">3. Register Residency (Residenza)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Register your address at the local town hall (Comune). Essential for accessing healthcare and local services.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white">4. Open a Bank Account</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Required for salary deposits. You will need your passport, Codice Fiscale, and proof of address/employment.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-emerald-500" />
                Pakistani Communities
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Italy has one of the largest Pakistani diasporas in Europe. You will find established communities, mosques, and grocery stores primarily in northern and central regions:
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-sm space-y-1 font-medium">
                <li>Lombardy (Milan, Brescia, Bergamo)</li>
                <li>Emilia-Romagna (Bologna, Modena)</li>
                <li>Lazio (Rome area)</li>
                <li>Prato (Tuscany)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Utensils className="w-5 h-5 mr-3 text-orange-500" />
                Halal Food & Mosques
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Finding halal meat (carne halal) and South Asian spices is relatively easy in major cities and areas with large immigrant populations. Look for "Macelleria Islamica" (Islamic butchery). Mosques and Islamic centers are also widespread across northern industrial towns.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Send className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Sending Money to Pakistan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Sending remittances from Italy to Pakistan is straightforward. Popular and secure options include:
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium">Wise (formerly TransferWise)</span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium">Remitly</span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium">Western Union</span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium">Ria Money Transfer</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
`,
  'ItalyLanguage.tsx': `import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Languages, CheckCircle2, Info } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyLanguage() {
  return (
    <>
      <SEO title="Work in Italy: Language Requirements | MoveAbroad.pk" description="Understand language requirements for working in Italy, why basic Italian is crucial, and where to learn." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="relative text-white py-16 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="${colosseum}" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <h1 className="font-display text-4xl font-bold mb-4">Language Requirements</h1>
            <p className="text-lg text-blue-100">Do you need IELTS? Should you learn Italian?</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Languages className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Do I need IELTS?
            </h2>
            <div className="flex items-start bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-emerald-900 dark:text-emerald-400 font-bold text-lg mb-2">IELTS is NOT mandatory for most Decreto Flussi visas</h3>
                <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed text-sm">
                  Unlike study visas or skilled migration to English-speaking countries, general work visas under the Decreto Flussi quota system do not legally require an English test like IELTS.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Reality of Italian Language</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              While you may not need an English test, <strong>basic Italian language skills are strongly recommended</strong> for better job success, workplace safety, and integration. Outside of major international corporations in Milan or Rome, the primary working language across all sectors is Italian.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Why learn Italian?</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-2">
                <li>Essential for communicating with employers, landlords, and local authorities.</li>
                <li>Required for long-term permanent residency (EC long-term residence permit requires an A2 Italian language certificate).</li>
                <li>Increases your employability and bargaining power.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Where to learn Italian in Pakistan</h2>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Italian Cultural Institute</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Official language courses</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Dante Alighieri Society</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Recognized language and culture centers</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
             <div className="flex">
                <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-800 dark:text-blue-300 font-bold mb-2">EU Blue Card Exception</h3>
                  <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
                    If you are applying as a highly skilled professional via the EU Blue Card route, requirements may differ. The employer might require English proficiency depending on the corporate environment.
                  </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
}
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(basePath, filename), content);
}
console.log("Files generated.");
