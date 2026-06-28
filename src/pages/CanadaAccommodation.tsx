import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Search, ShieldCheck, ExternalLink, Users, AlertCircle, ArrowLeft, Globe } from 'lucide-react';
import { getCountryData } from '../data/countries';
import SEO from '../components/SEO';

export default function CanadaAccommodation() {
  const data = getCountryData('canada');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <SEO title="Study in Canada: Accommodation | MoveAbroad.pk" description="Comprehensive guide to canada accommodation for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561134643-668f2b97d4f9?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Canada
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Student Accommodation 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Find the perfect place to live across Canada. Types of housing, Pakistani communities, and how to avoid scams.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Housing Types */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center">
            <Home className="w-8 h-8 mr-4 text-orange-500" /> Types of Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: 'University Residence (Dorms)', price: 'CAD $800 - $1,500/month', desc: 'Safest and most convenient. Usually includes utilities and sometimes meal plans. High demand, apply early.' },
               { title: 'Shared Apartment', price: 'CAD $600 - $1,000/month', desc: 'Renting a room in a multi-bedroom apartment with other students. Great for saving money.' },
               { title: 'Homestay', price: 'CAD $800 - $1,200/month', desc: 'Live with a local Canadian family. Includes a furnished room, meals, and cultural immersion.' },
               { title: 'Private Apartment', price: 'CAD $1,000 - $2,000/month', desc: 'Renting your own 1-bedroom or bachelor apartment. Most expensive, but offers complete privacy.' }
             ].map((type, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col h-full hover:border-orange-200 dark:hover:border-orange-800 transition">
                   <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">{type.title}</h3>
                   <span className="text-orange-600 dark:text-orange-400 font-semibold mb-3 bg-orange-50 dark:bg-orange-900/10 self-start px-2 py-1 rounded text-sm">{type.price}</span>
                   <p className="text-slate-600 dark:text-slate-400 text-sm mt-auto">{type.desc}</p>
                </div>
             ))}
          </div>
        </motion.section>

        {/* Communities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
           <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-500" /> Pakistani Community Areas
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Canada is highly multicultural. To stay connected with culture, Pakistani grocery stores, and major mosques, consider these neighborhoods:</p>
              <ul className="space-y-4">
                <li className="flex flex-col border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Toronto (GTA)</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Mississauga, Brampton (Largest Pakistani community hub, high concentration of Halal food)</span>
                </li>
                <li className="flex flex-col border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Vancouver Area</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Surrey</span>
                </li>
                <li className="flex flex-col border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Calgary</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Northeast Calgary (Castleridge, Falconridge)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Ottawa</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Gloucester, South Keys</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-800 dark:text-emerald-300 rounded-xl text-sm border border-emerald-100 dark:border-emerald-800/20">
                <strong>Halal Food & Mosques:</strong> Every major university city in Canada has prominent Islamic centers and vast options for Halal dining nearby.
              </div>
           </motion.section>

           <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden h-full">
               <div className="absolute right-0 bottom-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl"></div>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center relative z-10">
                <ShieldCheck className="w-6 h-6 mr-3 text-orange-400" /> Top Tips & Scam avoidance
              </h2>
              <ul className="space-y-4 relative z-10 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 mr-3 shrink-0"></span>
                  <p><strong>Book before arriving:</strong> Secure at least a temporary space before landing. Border officers often ask for your address.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 mr-3 shrink-0"></span>
                  <p><strong>University Dorms first:</strong> Opt for official university residences for your very first semester to easily make friends safely.</p>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 mr-2 shrink-0" />
                  <p className="text-orange-100"><strong>Avoid Scams:</strong> Do NOT wire transfer money (via Western Union/MoneyGram) for deposits before seeing the unit or verifying the landlord.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 mr-3 shrink-0"></span>
                  <p><strong>Facebook & WhatsApp Groups:</strong> Search for "Pakistani Students Association [University Name]" for trusted insider help from seniors.</p>
                </li>
              </ul>
           </motion.section>
        </div>

        {/* Resources */}
        <h3 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Search className="w-5 h-5 mr-3 text-slate-400" /> Best Websites to Find Housing
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {['Kijiji.ca', 'Padmapper.com', 'Rentals.ca', 'Facebook Marketplace', 'Places4Students.com'].map(site => (
             <div key={site} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center font-medium text-slate-700 dark:text-slate-300">
               {site}
             </div>
           ))}
        </div>

      </div>
    </div>
    </>
  );
}
