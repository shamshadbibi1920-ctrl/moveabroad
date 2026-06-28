import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Building, Users, ExternalLink, MapPin, AlertTriangle, ShieldCheck, FileText, Compass, BedDouble } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaAccommodation() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Student Accommodation in Australia | MoveAbroad.pk"
        description="Find student housing in Australia. Learn about university halls, shared apartments, Flatmates.com.au, and Pakistani community hubs."
        canonicalPath="/study/australia/accommodation"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Neighborhood" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Accommodation</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            From university colleges to shared housing — find the best living arrangements in Australia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Warning Box */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Accommodation Scams Warning
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            Never transfer money (especially via wire transfer) for a private rental before you or a trusted friend has viewed the property in person. Be wary of landlords who claim to be "out of the country" or pressure you to pay a deposit immediately. Always verify listings and use secure platforms.
          </p>
        </div>

        {/* Accommodation Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <Building className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">University Halls / Colleges</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
              On-campus accommodation managed by the university. Excellent for first-year students to make friends. Often includes meals (fully catered) and utilities.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl text-center">
              AUD $250 - $450 / week
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Shared Houses</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
              The most popular option. Renting a room in a house shared with other students or young professionals. Utilities are usually split equally among housemates.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl text-center">
              AUD $200 - $350 / week
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <Home className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Homestay</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
              Living with a local Australian family. Great for improving English and experiencing local culture. Usually includes a furnished room and most meals.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl text-center">
              AUD $280 - $450 / week
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <BedDouble className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Private Studio / Apartment</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
              Renting your own 1-bedroom apartment or studio. Offers the most privacy but is the most expensive. You are responsible for all utilities.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl text-center">
              AUD $350 - $600 / week
            </div>
          </div>
        </div>

        {/* City Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">City-by-City Accommodation Costs</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">City</th>
                  <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Shared Room (Weekly)</th>
                  <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Private Studio (Weekly)</th>
                  <th className="py-4 px-4 font-bold text-slate-900 dark:text-white">Cost Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {[
                  { city: 'Sydney, NSW', shared: 'AUD $250 - $400', private: 'AUD $450 - $700', level: 'Highest' },
                  { city: 'Melbourne, VIC', shared: 'AUD $220 - $350', private: 'AUD $400 - $600', level: 'High' },
                  { city: 'Canberra, ACT', shared: 'AUD $230 - $320', private: 'AUD $400 - $550', level: 'High' },
                  { city: 'Brisbane, QLD', shared: 'AUD $200 - $300', private: 'AUD $350 - $500', level: 'Medium' },
                  { city: 'Perth, WA', shared: 'AUD $180 - $280', private: 'AUD $350 - $480', level: 'Medium' },
                  { city: 'Adelaide, SA', shared: 'AUD $170 - $250', private: 'AUD $300 - $450', level: 'Affordable' },
                  { city: 'Hobart, TAS', shared: 'AUD $180 - $260', private: 'AUD $320 - $460', level: 'Affordable' },
                  { city: 'Darwin, NT', shared: 'AUD $180 - $250', private: 'AUD $300 - $450', level: 'Affordable' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-4 text-slate-900 dark:text-white font-medium">{row.city}</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{row.shared}</td>
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{row.private}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        row.level === 'Highest' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        row.level === 'High' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                        row.level === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                      }`}>
                        {row.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Securing Accommodation Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">How to Secure Accommodation</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            {[
              { step: 1, title: 'Before Arriving: Temporary Housing', desc: 'Book temporary accommodation (like an Airbnb, hostel, or short-term homestay) for your first 1-2 weeks. This gives you a base to inspect permanent housing in person.' },
              { step: 2, title: 'Before Arriving: University Halls', desc: 'If you want to live on-campus, apply for University Halls as soon as you accept your university offer. Places fill up months in advance.' },
              { step: 3, title: 'After Arriving: Inspections', desc: 'Attend open house inspections for shared houses or apartments. Bring copies of your CoE, passport, and proof of funds to show landlords or agents.' },
              { step: 4, title: 'Signing the Lease', desc: 'Carefully read the rental agreement. Pay the bond (usually 4 weeks rent) and advance rent (usually 2 weeks). Ensure the bond is lodged with the state government authority.' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contracts & Tenant Rights */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Rental Contracts & Bond</h3>
              </div>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                <li><strong className="text-slate-900 dark:text-white">The Bond:</strong> A security deposit, legally capped at 4 weeks' rent. It MUST be lodged with the state's Residential Tenancies Authority (not kept in the landlord's personal bank account). You receive a receipt from the government.</li>
                <li><strong className="text-slate-900 dark:text-white">Lease Terms:</strong> Standard leases are 6 or 12 months. Breaking a lease early usually incurs significant penalty fees (paying rent until a new tenant is found).</li>
                <li><strong className="text-slate-900 dark:text-white">Condition Report:</strong> You must fill this out within days of moving in, noting any existing damage. Keep a copy with photos to ensure you get your full bond back when you leave.</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-6">
                <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Tenant Rights</h3>
              </div>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                <li><strong className="text-slate-900 dark:text-white">Privacy:</strong> Landlords must give proper written notice (usually 24-48 hours minimum) before entering the property for inspections or repairs.</li>
                <li><strong className="text-slate-900 dark:text-white">Repairs:</strong> Urgent repairs (like burst water pipes or broken heating) must be fixed immediately. Non-urgent repairs must be fixed within a reasonable timeframe.</li>
                <li><strong className="text-slate-900 dark:text-white">Rent Increases:</strong> Rent can only be increased at specific intervals (usually every 12 months) and requires proper written notice.</li>
                <li><strong className="text-slate-900 dark:text-white">Disputes:</strong> Every Australian state has a free or low-cost tribunal (e.g., VCAT in Victoria, NCAT in NSW) to resolve disputes between tenants and landlords.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips for Pakistani Students */}
        <section className="mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Compass className="w-6 h-6 mr-3 text-emerald-500" /> Tips for Pakistani Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">What to Bring vs. Buy Locally</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Bring lightweight traditional clothes and a good quality winter jacket (especially for Melbourne/Hobart). Do NOT bring heavy bedding, kitchen appliances, or large amounts of spices — Australia has strict biosecurity laws, and these are easily available at Kmart, Target, or local Pakistani grocers.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cultural Considerations in Shared Housing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  If sharing with international housemates, communication is key. Be mindful of cooking smells in shared spaces, negotiate cleaning rosters clearly, and respect quiet hours. If you prefer a halal-only kitchen, look for housing specifically within the Pakistani/Muslim community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Pakistani Communities & Halal Food</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Australia has a vibrant Pakistani and South Asian community, making it easy to find halal food, mosques, and cultural events. Finding accommodation near these hubs can help you settle in faster.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Sydney</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Auburn, Lakemba, Parramatta, Blacktown (Western Sydney)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Melbourne</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Dandenong, Sunshine, Fawkner, Coburg</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Perth</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Cannington, Victoria Park, Thornlie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Best Accommodation Websites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://flatmates.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Flatmates.com.au</h3>
                <p className="text-sm text-slate-500">Best for finding shared rooms</p>
              </div>
            </a>
            <a href="https://domain.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Domain.com.au</h3>
                <p className="text-sm text-slate-500">Best for private rentals and apartments</p>
              </div>
            </a>
            <a href="https://realestate.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">RealEstate.com.au</h3>
                <p className="text-sm text-slate-500">Largest property portal in Australia</p>
              </div>
            </a>
            <a href="https://scape.com/en-au/" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Scape / Student Roost</h3>
                <p className="text-sm text-slate-500">Private purpose-built student housing</p>
              </div>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

