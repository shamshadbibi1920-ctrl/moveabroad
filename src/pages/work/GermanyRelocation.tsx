import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function GermanyRelocation() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Germany" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center md:text-left">
          <Link to="/work/germany" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Relocation Guide
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed md:text-2xl font-light">
              Essential checklists and community insights to help you transition smoothly from Pakistan to Germany.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
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
                  Rules and administrative processes differ by city. Always verify local Bürgeramt (citizens office) requirements in your specific destination.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <MapPin className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Before Leaving Pakistan
              </h2>
              <ul className="grid grid-cols-1 gap-3 list-none pl-0">
                <li className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Translate and attest all vital documents (Marriage certificates, birth certificates) via MOFA and the German Embassy.</span>
                </li>
                <li className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Secure short-term accommodation (Airbnb, Wunderflats) for at least the first 2-3 months. Finding a permanent flat takes time.</span>
                </li>
                <li className="flex items-start bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Carry sufficient Euros in cash to cover initial expenses before your German bank account is fully active.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your First Weeks in Germany</h2>
              <ol className="space-y-4 text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li><strong className="text-slate-800 dark:text-slate-200">Anmeldung (City Registration):</strong> Within 14 days of arriving, you MUST register your address at the local Bürgeramt. You need a form signed by your landlord (Wohnungsgeberbestätigung).</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Open a Bank Account:</strong> With your Anmeldung in hand, open an account (Girokonto) at banks like N26, Sparkasse, or Commerzbank.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Health Insurance:</strong> Register with a statutory health insurance provider (TK, AOK, Barmer). Hand this over to your employer immediately.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Tax ID (Steuer-ID):</strong> You automatically receive this by mail 2-3 weeks after your Anmeldung. Give it to your employer so you are taxed correctly.</li>
                <li><strong className="text-slate-800 dark:text-slate-200">Residence Permit:</strong> Apply for your formal Residence Permit (Aufenthaltstitel) at the Ausländerbehörde before your entry visa expires.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Finding Permanent Accommodation</h2>
              <p className="text-slate-600 dark:text-slate-300">
                The German housing market is highly competitive. Landlords require proof of income (usually 3 recent payslips) and a SCHUFA (credit score) report. Use websites like <strong>ImmoScout24</strong>, <strong>WG-Gesucht</strong> (for shared flats), and <strong>Ebay Kleinanzeigen</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Community, Halal Food & Apps</h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>Community:</strong> Cities like Frankfurt, Berlin, and Munich have thriving Pakistani communities. Search Facebook for groups like "Pakistanis in Germany (PSA-G)".</li>
                <li><strong>Halal Amenities:</strong> Turkish grocery stores (widely available across Germany) are excellent resources for halal meat and familiar South Asian spices.</li>
                <li><strong>Sending Money:</strong> Use apps like Wise (TransferWise), Western Union, or Remitly for the best exchange rates back to Pakistani banks.</li>
                <li><strong>Essential Apps:</strong> DB Navigator (Train travel), N26 (Banking), Lieferando (Food delivery), and DeepL (Highly accurate German-English translations).</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
