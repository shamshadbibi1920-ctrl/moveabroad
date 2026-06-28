import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2, Utensils, Send } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function ItalyRelocation() {
  return (
    <>
      <SEO title="Work in Italy: Relocation Guide | MoveAbroad.pk" description="Essential guide for your first weeks in Italy, finding Pakistani communities, halal food, and sending money home." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        {/* Hero Banner */}
        <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80" 
              alt="Italy Background" 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)'; }}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.35]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/work/italy" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Italy Guide
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
                🇮🇹 Italy Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Relocation Guide 🇮🇹
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Your first weeks in Italy, communities, and living essentials.
              </p>
            </motion.div>
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
