import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Wallet, Home, Bus, Coffee, Info, AlertTriangle, Lightbulb, Landmark, Smartphone, Zap, HeartPulse, GraduationCap, ArrowRightLeft } from 'lucide-react';
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
        
        {/* Visa Financial Requirement Warning */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> 2026 Visa Financial Requirement
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            The Australian Department of Home Affairs requires international students to demonstrate they have access to at least <strong>AUD $29,710</strong> for their first year of living costs. This does not include tuition fees or travel costs. You must show these funds in your bank account before applying for the visa.
          </p>
        </div>

        {/* Detailed Monthly Budget Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Estimated Monthly Budget (Average City)</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 px-6 font-bold text-slate-900 dark:text-white">Expense Category</th>
                    <th className="py-4 px-6 font-bold text-slate-900 dark:text-white">Estimated Cost (AUD)</th>
                    <th className="py-4 px-6 font-bold text-slate-900 dark:text-white">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <Home className="w-5 h-5 mr-3 text-blue-500" /> Accommodation (Shared)
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$800 - $1,400</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Depends heavily on the city and distance from CBD.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <Coffee className="w-5 h-5 mr-3 text-emerald-500" /> Groceries & Food
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$400 - $600</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Cooking at home is essential; eating out is expensive in Australia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <Zap className="w-5 h-5 mr-3 text-yellow-500" /> Utilities (Gas, Elec, Water)
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$100 - $150</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Often split between housemates in shared accommodation.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <Bus className="w-5 h-5 mr-3 text-indigo-500" /> Public Transport
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$120 - $200</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Concession (student) cards available in some states, but not all (e.g., NSW for international students).</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <Smartphone className="w-5 h-5 mr-3 text-purple-500" /> Phone & Internet
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$60 - $100</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Mobile plan + share of home broadband.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <HeartPulse className="w-5 h-5 mr-3 text-red-500" /> Health Insurance (OSHC)
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$45 - $60</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Usually paid upfront for the whole visa duration, but averages out monthly.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-medium">
                        <GraduationCap className="w-5 h-5 mr-3 text-orange-500" /> Study Materials
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">$50 - $80</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Textbooks, printing, stationery.</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-t-2 border-slate-200 dark:border-slate-700">
                    <td className="py-5 px-6">
                      <div className="flex items-center text-slate-900 dark:text-white font-bold text-lg">
                        <Wallet className="w-6 h-6 mr-3 text-emerald-600" /> Total Estimated Monthly
                      </div>
                    </td>
                    <td className="py-5 px-6 font-bold text-emerald-600 dark:text-emerald-400 text-lg" colSpan={2}>
                      AUD $1,575 - $2,590
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* City-by-City Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">City-by-City Cost Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-red-200 dark:border-red-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-bold px-3 py-1 rounded-bl-xl">Most Expensive</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sydney, NSW</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Highest rents in the country, but excellent job opportunities.</p>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">AUD $2,200+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-orange-200 dark:border-orange-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs font-bold px-3 py-1 rounded-bl-xl">Very Expensive</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Melbourne, VIC</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Slightly cheaper rent than Sydney, great student culture.</p>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">AUD $2,000+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-yellow-200 dark:border-yellow-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-xs font-bold px-3 py-1 rounded-bl-xl">Expensive</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Brisbane, QLD</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Growing fast, costs are catching up to Melbourne.</p>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">AUD $1,800+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-blue-200 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-bl-xl">Moderate</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Perth, WA</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Booming economy, high wages, moderate living costs.</p>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">AUD $1,600+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-blue-200 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-bl-xl">Moderate</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Canberra, ACT</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">High average incomes drive up prices, but very safe.</p>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">AUD $1,700+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-emerald-200 dark:border-emerald-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-bl-xl">Affordable</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Adelaide, SA</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">One of the most affordable major cities in Australia.</p>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">AUD $1,400+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>
          </div>
        </section>

        {/* Working While Studying (Expanded) */}
        <section className="mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Info className="w-6 h-6 mr-3 text-blue-500" /> Working While Studying
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                International students in Australia are permitted to work up to <strong>48 hours per fortnight</strong> (two weeks) during the academic semester, and unlimited hours during scheduled university breaks. Note: The Australian Government has proposed increasing this to 60 hours per fortnight starting July 1, 2026.
              </p>
              <p>
                The national minimum wage is approximately <strong>AUD $23.23 per hour</strong> (often higher for casual work to compensate for lack of sick leave). Common jobs include retail, hospitality (cafes/restaurants), delivery driving, and tutoring.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-blue-100 dark:border-blue-800 mt-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Realistic Earning Potential:</h4>
                <p className="text-sm">Working 24 hours/week at minimum wage ($23.23) = <strong>~$550/week</strong> (before tax). This is generally enough to cover rent and groceries, but it should <em>not</em> be relied upon to pay your primary university tuition fees.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Banking and Money Transfer */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Landmark className="w-6 h-6 mr-3 text-emerald-600" /> Banking in Australia
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                You can often open an Australian bank account online up to 3 months before you arrive. The "Big Four" banks all offer fee-free student accounts:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li><strong>Commonwealth Bank (CommBank):</strong> Most popular for students, great app.</li>
                <li><strong>ANZ:</strong> Good branch network.</li>
                <li><strong>Westpac:</strong> Solid student account options.</li>
                <li><strong>NAB:</strong> No monthly fees.</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <ArrowRightLeft className="w-6 h-6 mr-3 text-indigo-600" /> Sending Money from Pakistan
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Avoid sending money via standard bank wire transfers if possible, as the fees and exchange rates are poor. Recommended services:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li><strong>Wise (formerly TransferWise):</strong> Usually the best exchange rate and lowest fees for PKR to AUD.</li>
                <li><strong>Remitly or Western Union:</strong> Good alternatives if Wise is not an option.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips for Pakistani Students */}
        <section className="mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 mr-3 text-emerald-500" /> Money-Saving Tips for Pakistani Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Shop at Aldi & Markets</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Aldi is significantly cheaper than Coles or Woolworths for staples. For fresh produce, visit local markets (like Queen Vic in Melbourne or Paddy's in Sydney) near closing time on Sundays for huge discounts.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Desi Groceries in Bulk</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Spices, rice, and halal meat are much cheaper if you buy in bulk from local Pakistani/Indian grocers in suburbs like Auburn (Sydney) or Dandenong (Melbourne) rather than standard supermarkets.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Student Discounts</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always ask for a student discount. It applies to cinema tickets, software, flights, and sometimes even local restaurants. Get an ISIC (International Student Identity Card).
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/50">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Second-hand Goods</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use Facebook Marketplace, Gumtree, or local Op Shops (Salvos, Vinnies) for furniture, appliances, and winter clothes instead of buying new.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
