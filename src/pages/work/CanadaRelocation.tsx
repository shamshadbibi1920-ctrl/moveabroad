import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, ExternalLink, CheckCircle2, Home, CreditCard } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CanadaRelocation() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="Relocating to Canada from Pakistan | Moving Guide 2026"
        description="First-week checklist, housing tips, SIN applications, banking, and finding Pakistani communities in Canada (Toronto, Mississauga, Calgary)."
        canonicalPath="/work/canada/relocation"
      />
      
      {/* Hero Section */}
      <div className="bg-rose-900 py-16 border-b border-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/canada" className="inline-flex items-center text-rose-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Canada
          </Link>
          <motion.h1 initial="initial" animate="animate" variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Relocation Guide
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-rose-100 max-w-3xl font-light">
            Settle in faster with our checklist tailored for Pakistanis moving to Canada.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Policies change frequently. Always verify the latest information with official IRCC sources before applying.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <CheckCircle2 className="w-6 h-6 mr-3 text-rose-600" />
                First Week Checklist
              </h2>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div className="flex items-start">
                   <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                   <div>
                     <h3 className="font-bold text-slate-900 dark:text-white">Get your SIN (Social Insurance Number)</h3>
                     <p className="text-sm mt-1">You cannot work legally or get paid without it. Apply at a Service Canada office immediately (bring your passport and work permit).</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                   <div>
                     <h3 className="font-bold text-slate-900 dark:text-white">Open a Bank Account</h3>
                     <p className="text-sm mt-1">Major banks (RBC, TD, Scotiabank, BMO, CIBC) have packages for newcomers. You need your passport, Work Permit, and SIN.</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                   <div>
                     <h3 className="font-bold text-slate-900 dark:text-white">Apply for a Health Card</h3>
                     <p className="text-sm mt-1">Register for provincial health insurance. Note: Some provinces (like Ontario) no longer have a waiting period, but check local rules.</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</div>
                   <div>
                     <h3 className="font-bold text-slate-900 dark:text-white">Get a Mobile Plan</h3>
                     <p className="text-sm mt-1">Providers like Fido, Virgin, or Koodo are cheaper alternatives to the big three (Rogers, Bell, Telus).</p>
                   </div>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center font-display">
                <Home className="w-6 h-6 mr-3 text-rose-600" />
                Renting & Neighbourhoods
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>Most landlords look for a Canadian credit score and employment letter. For newcomers, finding a guarantor or offering a few months' rent upfront may be necessary.</p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3">Pakistani Hubs</h3>
                  <p className="mb-2">Moving closer to the community can help ease cultural transitions (halal meat, mosques, desi groceries). Major hubs include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Ontario:</strong> Mississauga, Brampton, Milton, Markham.</li>
                    <li><strong>Alberta:</strong> Northeast Calgary (Saddleridge, Taradale), Edmonton.</li>
                    <li><strong>BC:</strong> Surrey.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Useful Links</h2>
              <div className="space-y-3">
                <a href="https://www.canada.ca/en/employment-social-development/services/sin.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">SIN Application</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://www.kijiji.ca/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Kijiji (Apartment hunting)</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <a href="https://wise.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors border border-slate-200 dark:border-slate-700">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Wise (Remittances)</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
