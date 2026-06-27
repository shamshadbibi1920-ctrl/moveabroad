import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, ExternalLink, CheckCircle2, Home, HeartPulse, Building2, Globe } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkRelocation() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Relocation Guide to the UK for Pakistanis | MoveAbroad.pk"
        description="A comprehensive guide to moving to the UK. Learn about National Insurance, bank accounts, halal food, and Pakistani communities in cities like London, Birmingham, and Manchester."
        canonicalPath="/work/uk/relocation"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529381651585-78334460f970?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/uk" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in the UK
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Relocation Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moving to the UK 🇬🇧
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              From packing in Pakistan to setting up your life in the UK. Discover vibrant Pakistani communities, halal food availability, and essential administrative steps.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Before Leaving Pakistan</h2>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span>Book temporary accommodation (Airbnb, SpareRoom) for the first 2-4 weeks.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span>Pack a universal travel adapter (UK uses 3-pin Type G plugs).</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span>Carry £300-£500 in cash for immediate expenses upon arrival.</span>
              </li>
              <li className="flex items-start text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span>Bring all original degree certificates, experience letters, and TB clearance.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your First Week in the UK Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center mb-2">
                  <Building2 className="w-5 h-5 mr-2 text-blue-500" /> Collect BRP
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Collect your Biometric Residence Permit (BRP) from the designated Post Office within 10 days of arrival (note: UK is moving to e-visas by 2025).</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center mb-2">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" /> Get a UK SIM
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Get a local number immediately. Giffgaff, Lebara (great for calling Pakistan), EE, or Vodafone.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" /> National Insurance (NI) Number
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Apply for an NI number online if it's not printed on your BRP. You need this to pay taxes and avoid emergency tax codes.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center mb-2">
                  <Building2 className="w-5 h-5 mr-2 text-blue-500" /> Bank Account
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Open a bank account. High street banks (HSBC, Barclays) require proof of address. Digital banks (Monzo, Revolut, Starling) are faster.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center mb-2">
                  <HeartPulse className="w-5 h-5 mr-2 text-blue-500" /> Register with a GP
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Find your local NHS General Practitioner (doctor) and register online. It's free and essential for healthcare.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center mb-2">
                  <Home className="w-5 h-5 mr-2 text-blue-500" /> Council Tax
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Once you rent a permanent place, register with your local council to pay Council Tax (covers garbage collection, police, etc.).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pakistani Communities in the UK</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              The UK has over 1.6 million people of Pakistani descent, making it one of the most comfortable European destinations for relocation. Halal food, mosques, and familiar grocery stores are abundant.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">London</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Major communities in East London (Whitechapel, Walthamstow, Ilford), Tooting, and Hounslow.</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Birmingham</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">The Sparkbrook and Alum Rock areas have massive South Asian communities with amazing food scenes.</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Manchester & Bradford</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Bradford has a very high concentration of Pakistanis. Manchester (Rusholme "Curry Mile") is also extremely popular.</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Scotland (Glasgow)</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Pollokshields and Govanhill are known for their established Pakistani communities.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Sending Money to Pakistan</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Remitting money back home is secure and fast. Popular, reliable services include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Wise (formerly TransferWise):</strong> Often offers the best exchange rates with low fees directly to Pakistani bank accounts.</li>
              <li><strong>Remitly & WorldRemit:</strong> Very popular among expats for quick transfers.</li>
              <li><strong>Western Union:</strong> Good for cash pickups if your family doesn't have a bank account.</li>
            </ul>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Useful Links</h2>
            <div className="flex flex-col space-y-4">
              <a href="https://www.gov.uk/apply-national-insurance-number" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                Apply for a National Insurance Number <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://wise.com/gb/send-money/send-money-to-pakistan" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center">
                Wise: Send money to Pakistan <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
