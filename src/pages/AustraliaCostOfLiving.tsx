import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Wallet, Home, Bus, Coffee, Info, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaCostOfLiving() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Cost of Living in Australia for Pakistani Students | MoveAbroad.pk"
        description="Detailed breakdown of living costs in Australia (AUD $29,710/year requirement). Compare Sydney, Melbourne, and regional cities."
        canonicalPath="/study/australia/cost-of-living"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia City" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cost of Living in Australia</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Understand the financial requirements and monthly expenses for international students in 2026.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> 2026 Visa Financial Requirement
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            The Australian Department of Home Affairs requires international students to demonstrate they have access to at least <strong>AUD $29,710</strong> for their first year of living costs. This does not include tuition fees or travel costs. You must show these funds in your bank account before applying for the visa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Major Cities (Sydney / Melbourne)</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Home className="w-5 h-5 mr-3 text-slate-400" />
                  Rent (Shared Room / Apartment)
                </div>
                <span className="font-medium text-slate-900 dark:text-white">AUD $800 - $1,400</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Coffee className="w-5 h-5 mr-3 text-slate-400" />
                  Groceries & Food
                </div>
                <span className="font-medium text-slate-900 dark:text-white">AUD $400 - $600</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Bus className="w-5 h-5 mr-3 text-slate-400" />
                  Public Transport
                </div>
                <span className="font-medium text-slate-900 dark:text-white">AUD $150 - $200</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center font-bold text-slate-900 dark:text-white">
                  <Wallet className="w-5 h-5 mr-3 text-blue-500" />
                  Estimated Monthly Total
                </div>
                <span className="font-bold text-blue-600 dark:text-blue-400">AUD $1,800 - $2,500</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Regional Cities (Adelaide / Perth / Hobart)</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Home className="w-5 h-5 mr-3 text-slate-400" />
                  Rent (Shared Room / Apartment)
                </div>
                <span className="font-medium text-slate-900 dark:text-white">AUD $600 - $1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Coffee className="w-5 h-5 mr-3 text-slate-400" />
                  Groceries & Food
                </div>
                <span className="font-medium text-slate-900 dark:text-white">AUD $350 - $500</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Bus className="w-5 h-5 mr-3 text-slate-400" />
                  Public Transport
                </div>
                <span className="font-medium text-slate-900 dark:text-white">AUD $100 - $150</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center font-bold text-slate-900 dark:text-white">
                  <Wallet className="w-5 h-5 mr-3 text-blue-500" />
                  Estimated Monthly Total
                </div>
                <span className="font-bold text-blue-600 dark:text-blue-400">AUD $1,400 - $2,000</span>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Info className="w-6 h-6 mr-3 text-blue-500" /> Working While Studying
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              International students in Australia are permitted to work up to <strong>48 hours per fortnight</strong> (two weeks) during the academic semester, and unlimited hours during scheduled university breaks. Note: The Australian Government has proposed increasing this to 60 hours per fortnight starting July 1, 2026.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The national minimum wage is approximately AUD $23.23 per hour, meaning part-time work can significantly help offset your living expenses, though it should not be relied upon to pay your primary tuition fees.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
