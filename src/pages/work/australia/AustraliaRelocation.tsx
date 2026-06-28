import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, CheckCircle2, Home, Landmark, Users, ArrowRightLeft, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function AustraliaRelocation() {
  return (
    <>
      <SEO title="Work in Australia: Relocation | MoveAbroad.pk" description="Comprehensive guide to australia relocation for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="bg-blue-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/australia" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Australia
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-800 dark:bg-slate-800 rounded-xl">
              <MapPin className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Relocation Guide</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            Essential steps for Pakistani professionals moving to Australia, from packing to settling into your new community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Plane className="w-6 h-6 mr-3 text-blue-500" /> Before Leaving Pakistan
              </h2>
              <ul className="space-y-4">
                {[
                  "Book temporary accommodation (Airbnb, hotel) for the first 2-4 weeks.",
                  "Carry original degrees, marriage certificates, and medical records.",
                  "Do NOT pack raw spices, seeds, or dairy. Australia has extremely strict biosecurity laws at the airport.",
                  "Buy some AUD cash (around $500-$1000) for initial expenses like taxis and food.",
                  "Ensure your phone is unlocked and ready for an Australian SIM."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Landmark className="w-6 h-6 mr-3 text-emerald-500" /> First Week in Australia
              </h2>
              <ul className="space-y-4">
                {[
                  "Apply for a Tax File Number (TFN) online immediately (needed to get paid).",
                  "Open an Australian Bank Account (CommBank, NAB, ANZ, Westpac). You usually need to visit a branch with your passport.",
                  "Set up your Superannuation fund (or go with your employer's default fund).",
                  "Get a local SIM card (Optus, Telstra, Vodafone, or cheaper MVNOs like Aldi Mobile/Amaysim).",
                  "Start attending property inspections to secure a long-term rental."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pakistani Communities in Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-indigo-500 mr-2" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Sydney</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Strong communities in Western Sydney suburbs like Auburn, Lakemba, Parramatta, and Rooty Hill. Excellent halal food options.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-indigo-500 mr-2" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Melbourne</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Major hubs in Dandenong, Fawkner, Broadmeadows, Werribee, and Sunshine. Very active cultural and sporting (cricket) scene.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-indigo-500 mr-2" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Brisbane</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Growing community in the southern suburbs, particularly around Logan and Kuraby, centered around large local mosques.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-indigo-500 mr-2" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Perth</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Communities spread across Mirrabooka, Thornlie, and Canning Vale. Great for mining engineers and trades.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <ArrowRightLeft className="w-6 h-6 mr-3 text-emerald-600" /> Sending Money to Pakistan
                </h2>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Sending money back home from your Australian bank account is simple, but standard bank wire transfers have high fees and poor exchange rates.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• <strong>Wise (TransferWise):</strong> Usually the lowest fees and best mid-market exchange rate.</li>
                  <li>• <strong>Remitly / Western Union:</strong> Good alternatives, often with promotional rates for first-time transfers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://www.ato.gov.au/individuals-and-families/tax-file-number" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Apply for a TFN</a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://wise.com/au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Wise Money Transfer</a>
        </div>
      </div>
    </div>
    </>
  );
}
