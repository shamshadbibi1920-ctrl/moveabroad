import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, DollarSign, PieChart, MapPin, Briefcase, ExternalLink, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItalyCostOfLiving() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563242084-3c87fb5cb30e?w=1400&q=80" 
            alt="Italy Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Italy
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <DollarSign className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Cost of Living & Working</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            Italy is one of the most affordable study destinations in Western Europe, especially in the South. Learn how to budget and work part-time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Monthly Budget Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <PieChart className="w-6 h-6 mr-3 text-blue-500" /> Average Expenses
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Accommodation (Shared room)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">€250 - €500</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Groceries & Supermarket</span>
                  <span className="font-semibold text-slate-900 dark:text-white">€150 - €250</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Public Transport (Student Pass)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">€20 - €35</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Utilities (Internet, Gas, Electric)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">€40 - €80</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Leisure & Misc.</span>
                  <span className="font-semibold text-slate-900 dark:text-white">€50 - €100</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-slate-900 dark:text-white">Total Estimated (Monthly)</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">€510 - €965</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-500" /> Cost by City
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                The cost of living drops dramatically as you move from the North to the South of Italy. Milan is the most expensive city, while southern cities like Palermo or Bari are incredibly cheap.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">Milan & Rome (Most Expensive)</span>
                  <span className="font-semibold text-red-600 dark:text-red-400">€900 - €1,300</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">Bologna, Florence, Turin</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">€700 - €1,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">Bari, Palermo, Catania (Cheapest)</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">€500 - €800</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-500" /> Part-Time Work Rights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  International students with a valid Permesso di Soggiorno are legally allowed to work up to <strong>20 hours per week</strong> (max 1,040 hours per year) during their studies.
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  <strong>The Reality:</strong> Finding part-time work in Italy (especially outside Milan/Rome) without speaking fluent Italian is extremely difficult. Most English-speaking student jobs are limited to food delivery (Glovo, Deliveroo), tutoring, or online freelancing. Do NOT rely solely on part-time work to fund your tuition/living.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Expected Wages</h4>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <Euro className="w-4 h-4 mr-2" /> Minimum wage: <strong>None</strong> (Italy has no legal national minimum wage, it relies on collective agreements).
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Euro className="w-4 h-4 mr-2" /> Typical student wage: <strong>€7 - €10 per hour</strong> (cash/informal jobs may pay less).
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Italy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center">
            <ExternalLink className="w-4 h-4 mr-2" /> Compare City Costs (Numbeo)
          </a>
        </div>
      </div>
    </div>
  );
}
