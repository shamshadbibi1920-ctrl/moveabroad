import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  DollarSign, Home, ShoppingCart, Train, HeartPulse, 
  Wifi, BookOpen, Shirt, Film, MapPin, Banknote, 
  Briefcase, PiggyBank, AlertTriangle, Calculator, ExternalLink, Map
} from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function GermanyCostOfLiving() {
  const data = getCountryData('germany');
  const countryName = 'Germany';

  const [calcBudget, setCalcBudget] = useState(850);

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-900"></div>
          )}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl">
            <Link to="/study/germany" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Germany
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cost of Living in {countryName}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive budget guide for Pakistani students planning their studies in Germany for 2026-2027.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Important Warning */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm text-amber-900 dark:text-amber-100 flex items-start">
          <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <h3 className="text-xl font-bold mb-1">Important Note</h3>
            <p className="text-lg">Costs vary significantly by city and lifestyle. These are average estimates for 2026-2027. Always plan for extra initial costs (deposits, settling-in expenses) when you first arrive.</p>
          </div>
        </motion.div>

        {/* 1. Budget Overview & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <DollarSign className="w-6 h-6 mr-3 text-emerald-500" /> 1. Monthly Budget Overview
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Minimum Budget (€700 - €800/month)</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Strict budget, living in student dorms (Studentenwerk), cooking all meals, using only public transport.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Comfortable Budget (€900 - €1,100/month)</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Shared apartment (WG), occasional eating out, some travels and leisure activities.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Premium Budget (€1,200+/month)</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Private apartment, frequent eating out, travel across Europe, shopping.</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400"><em>Note: The blocked account requires <strong>€934/month</strong> as a baseline proof of funds.</em></p>
              </div>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 rounded-[2rem] p-8 shadow-sm text-white">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center border-b border-slate-700 pb-4">
              <Calculator className="w-6 h-6 mr-3 text-blue-400" /> Budget Breakdown Chart
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Accommodation (40%)</span>
                  <span className="font-bold">€{Math.round(calcBudget * 0.40)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Food & Groceries (25%)</span>
                  <span className="font-bold">€{Math.round(calcBudget * 0.25)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Health Insurance (13%)</span>
                  <span className="font-bold">€{Math.round(calcBudget * 0.13)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-rose-400 h-2 rounded-full" style={{ width: '13%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Leisure & Misc (12%)</span>
                  <span className="font-bold">€{Math.round(calcBudget * 0.12)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Transport & Bills (10%)</span>
                  <span className="font-bold">€{Math.round(calcBudget * 0.10)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <label className="block text-sm text-slate-300 mb-2">Adjust your target monthly budget (€):</label>
                <input 
                  type="range" min="700" max="1500" step="50" 
                  value={calcBudget} 
                  onChange={(e) => setCalcBudget(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <div className="text-center mt-4 text-3xl font-display font-bold text-blue-300">
                  €{calcBudget} / month
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Breakdown Categories - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 2. Accommodation */}
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
              <Home className="w-5 h-5 mr-3 text-orange-500" /> 2. Accommodation
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Student Dormitory (Studierendenwerk)</span>
                <strong className="text-slate-900 dark:text-slate-200">€200 - €400</strong>
              </li>
              <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Shared Apartment (WG)</span>
                <strong className="text-slate-900 dark:text-slate-200">€300 - €500</strong>
              </li>
              <li className="flex justify-between pb-2">
                <span>Private Apartment (Single)</span>
                <strong className="text-slate-900 dark:text-slate-200">€500 - €900</strong>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/10 rounded-xl text-xs text-orange-800 dark:text-orange-200">
              <strong>Tip:</strong> Apply for public student dorms as soon as you get your admission letter, waitlists can be 6+ months long!
            </div>
          </motion.section>

          {/* 3. Food & Groceries */}
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-3 text-emerald-500" /> 3. Food & Groceries
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Monthly Groceries</span>
                <strong className="text-slate-900 dark:text-slate-200">€150 - €200</strong>
              </li>
              <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>University Mensa (Meal)</span>
                <strong className="text-slate-900 dark:text-slate-200">€2 - €5</strong>
              </li>
              <li className="flex justify-between pb-2">
                <span>Eating Out (Restaurant/Döner)</span>
                <strong className="text-slate-900 dark:text-slate-200">€6 - €15</strong>
              </li>
            </ul>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              <strong>Halal Food:</strong> Widely available in Turkish/Arab supermarkets and restaurants across Germany.
              <br/><br/>
              <strong>Cheap supermarkets:</strong> Aldi, Lidl, Netto, Penny.
            </div>
          </motion.section>

          {/* 4. Transportation */}
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
              <Train className="w-5 h-5 mr-3 text-blue-500" /> 4. Transportation
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Semester Ticket</span>
                <strong className="text-slate-900 dark:text-slate-200 text-right">Included in<br/>Semester Fee</strong>
              </li>
              <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Deutschland Ticket</span>
                <strong className="text-slate-900 dark:text-slate-200">€49/month</strong>
              </li>
              <li className="flex justify-between pb-2">
                <span>Bicycle (Second Hand)</span>
                <strong className="text-slate-900 dark:text-slate-200">€50 - €150</strong>
              </li>
            </ul>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              The <strong>Deutschland Ticket</strong> allows unlimited travel on all local/regional public transport across Germany. Some universities offer it discounted for €29.
            </div>
          </motion.section>

          {/* 5. Health Insurance */}
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
              <HeartPulse className="w-5 h-5 mr-3 text-rose-500" /> 5. Health Insurance
            </h3>
            <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-200 mb-4 text-xl">
              <span>Public Insurance</span>
              <span className="text-rose-500">~€120/mo</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Mandatory for enrollment if you are under 30. Covers doctor visits, hospital stays, and basic dental.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Top Providers:</strong> TK (Techniker Krankenkasse), AOK, Barmer. <br/>
              <em>Note:</em> Private insurance is cheaper (~€35) but not recommended unless you are over 30 or doing a PhD.
            </div>
          </motion.section>

          {/* 6. Communication & 7. Study */}
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                <Wifi className="w-5 h-5 mr-3 text-indigo-500" /> 6. Communication
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span>Mobile Plan (SIM)</span>
                  <strong className="text-slate-900 dark:text-slate-200">€10 - €20/mo</strong>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Home Internet</span>
                  <strong className="text-slate-900 dark:text-slate-200">€20 - €40/mo</strong>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-3 text-amber-500" /> 7. Study Materials
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex justify-between pb-2">
                  <span>Books & Docs</span>
                  <strong className="text-slate-900 dark:text-slate-200">€30 - €50/mo</strong>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* 8. Clothing & 9. Leisure */}
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                <Shirt className="w-5 h-5 mr-3 text-teal-500" /> 8. Clothing & Care
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex justify-between pb-2">
                  <span>Personal Care/Hygiene</span>
                  <strong className="text-slate-900 dark:text-slate-200">€20 - €30/mo</strong>
                </li>
                <li className="text-xs text-slate-500 dark:text-slate-400">
                  Account for a winter jacket and boots (~€100-150 once) for German winters.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                <Film className="w-5 h-5 mr-3 text-fuchsia-500" /> 9. Leisure & Fun
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span>Cinema (Student)</span>
                  <strong className="text-slate-900 dark:text-slate-200">€8 - €12</strong>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Gym Membership</span>
                  <strong className="text-slate-900 dark:text-slate-200">€20 - €30/mo</strong>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* 10. City by City Comparison Table */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-x-auto">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
            <Map className="w-8 h-8 mr-4 text-blue-500" /> 10. City-by-City Expense Comparison
          </h2>
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <th className="p-4 rounded-tl-xl border-b border-slate-200 dark:border-slate-700">City</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">Cost Level</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">Avg. Room Rent (WG)</th>
                <th className="p-4 rounded-tr-xl border-b border-slate-200 dark:border-slate-700">Estimated Total/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Munich</td>
                <td className="p-4 text-red-500 font-semibold">Highest (most expensive)</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€600 - €800</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€1,100 - €1,300+</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Frankfurt</td>
                <td className="p-4 text-orange-500 font-semibold">High</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€500 - €650</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€950 - €1,150</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Hamburg / Cologne</td>
                <td className="p-4 text-amber-500 font-semibold">High - Medium</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€450 - €600</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€900 - €1,050</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Berlin</td>
                <td className="p-4 text-lime-600 dark:text-lime-400 font-semibold">Medium (Rising)</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€400 - €550</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€900 - €1,000</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Dresden / Leipzig / Chemnitz (East)</td>
                <td className="p-4 text-green-600 dark:text-green-400 font-semibold">Low (Most Affordable)</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€250 - €350</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">€700 - €850</td>
              </tr>
            </tbody>
          </table>
        </motion.section>

        {/* 11 & 12. Income and Transfers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] p-8 shadow-sm border border-emerald-100 dark:border-emerald-800/30">
            <h2 className="font-display text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-6 flex items-center border-b border-emerald-200 dark:border-emerald-800/50 pb-4">
              <Briefcase className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> 12. Part-Time Work
            </h2>
            <div className="space-y-4 text-emerald-900 dark:text-emerald-200 text-sm">
              <p><strong>Legal Limit:</strong> International students from outside the EU/EEA (like Pakistan) are allowed to work <strong>140 full days or 280 half days per year</strong> (This limit was increased from 120 days recently).</p>
              <p><strong>Minimum Wage:</strong> The minimum wage in Germany is <strong>€12.41/hour</strong> (as of 2024).</p>
              <div className="bg-emerald-100 dark:bg-emerald-800/40 p-4 rounded-xl mt-4">
                <strong>Earning Potential:</strong> Working a typical 'Minijob' (up to €538/month) is tax-free. Or you can work as a Working Student (Werkstudent) earning €800-€1,200/month, which comfortably covers all living expenses.
              </div>
              <p><strong>Popular Jobs for Pakistanis:</strong> IT/Engineering Werkstudent jobs, Research Assistant (HiWi), Delivery Rider (Wolt/Lieferando), Restaurant/Café staff, Amazon warehouse.</p>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] p-8 shadow-sm border border-blue-100 dark:border-blue-800/30">
            <h2 className="font-display text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center border-b border-blue-200 dark:border-blue-800/50 pb-4">
              <Banknote className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> 11. Sending Money to Pakistan
            </h2>
            <div className="space-y-4 text-blue-900 dark:text-blue-200 text-sm">
              <p>Once you start earning from a part-time/Werkstudent job, you might want to send savings home. Avoid traditional banks due to high fees and poor exchange rates.</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Wise (formerly TransferWise)</strong>: Highly recommended by students for low fees and near mid-market exchange rates to Pakistani bank accounts.</li>
                <li><strong>Remitly / Western Union</strong>: Alternatives for fast cash pickups in Pakistan.</li>
                <li><strong>ACE Money Transfer</strong>: Often partners with Pakistani banks for promotional rates.</li>
              </ul>
              <p className="mt-4 italic opacity-80">Note: Sending money to Germany from Pakistan (e.g. for block account) is restricted by SBP to educational purposes and requires Forms/M-Forms from a local bank.</p>
            </div>
          </motion.section>
        </div>

        {/* 13. Saving Tips & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-indigo-50 dark:bg-indigo-900/10 rounded-[2rem] p-8 shadow-sm border border-indigo-100 dark:border-indigo-800/30">
            <h2 className="font-display text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-6 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
              <PiggyBank className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" /> 13. Top Saving Tips
            </h2>
            <ul className="space-y-3 text-indigo-900 dark:text-indigo-200 text-sm">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
                <span>Always carry your <strong>Student ID (Studentenausweis)</strong> for discounts at museums, cinemas, software subscriptions, and theaters.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
                <span>Opt for student dormitories. Private housing not only means higher rent but also entails paying utility bills (electricity, heating, internet) separately.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
                <span>Eat at the university cafeteria (Mensa) often. A high quality hot meal costs heavily subsidized prices compared to restaurants.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
                <span>Buy used furniture from "eBay Kleinanzeigen" (equivalent of OLX in Germany) or check out Facebook "Free your stuff" groups in your city.</span>
              </li>
            </ul>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
              <ExternalLink className="w-6 h-6 mr-3 text-slate-500" /> Official Resources
            </h2>
            <div className="space-y-3">
              <a href="https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/costs-of-education-and-living/" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                DAAD Official Cost of Living Guide <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Germany" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Numbeo Cost of Living in Germany <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.study-in-germany.de/en/plan-your-studies/requirements/proof-of-financing/" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Proof of Financing & Blocked Account Guide <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
  );
}

