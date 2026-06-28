import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Building2, Users, AlertTriangle, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItalyAccommodation() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1400&q=80" 
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
              <Home className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Accommodation Guide</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            Finding student housing in Italy can be highly competitive. Learn about university residences, private rentals, and Pakistani communities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mb-12">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> The Accommodation Crisis
            </h4>
            <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
              Cities like Milan, Rome, and Bologna are currently experiencing a severe housing shortage. Finding a room can take months. <strong>DO NOT</strong> travel to these cities without securing at least temporary accommodation (Airbnb, hostel) for your first month. You must also show proof of accommodation to get your visa!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Housing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Best Value</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-emerald-500" /> University Residences (Residenze)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                Most universities do not own their dorms; they are managed by the regional DSU agency (e.g., EDISU in Piedmont, ALISEO in Liguria).
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                <li>• <strong>Cost:</strong> Often completely free if you win the DSU scholarship! Otherwise, €150-€300/month.</li>
                <li>• <strong>Availability:</strong> Extremely limited. Priority is given strictly based on low family income (ISEE score).</li>
                <li>• <strong>When to apply:</strong> Usually July/August, BEFORE you arrive in Italy.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-500" /> Private Shared Apartments
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                The reality for 80% of international students. You rent a "Posto Letto" (bed in a shared room) or a "Camera Singola" (single room) in an apartment with other students.
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                <li>• <strong>Cost (Single Room):</strong> €400-€700+ in Milan/Rome. €250-€400 in the South.</li>
                <li>• <strong>Cost (Shared Room):</strong> €250-€450 in North. €150-€250 in South.</li>
                <li>• <strong>Deposit (Caparra):</strong> Expect to pay 2 to 3 months' rent upfront as a security deposit.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-indigo-500" /> Pakistani Communities & Halal Food
          </h2>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Unlike the UK or Canada, Italy does not have massive, consolidated Pakistani "towns" within its cities. However, the community is growing rapidly, particularly around engineering hubs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Milan (PoliMi/Bocconi)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Large student presence. Halal butchers (Macelleria Islamica) and Desi restaurants are easily found in areas like Via Padova and Corvetto.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Turin (PoliTo)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Very strong Pakistani engineering student community. Excellent and affordable halal food options near the San Salvario and Porta Palazzo areas.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Small / Southern Cities</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">In cities like Siena, Cassino, or Messina, halal meat might be limited to one or two shops. Most students cook vegetarian or seafood at home.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Where to Search</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://www.idealista.it/en/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 transition-colors flex flex-col items-center justify-center group text-center">
              <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 mb-1">Idealista</span>
              <span className="text-xs text-slate-500">Major listing site</span>
            </a>
            <a href="https://www.immobiliare.it/en/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 transition-colors flex flex-col items-center justify-center group text-center">
              <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 mb-1">Immobiliare</span>
              <span className="text-xs text-slate-500">Largest agency site</span>
            </a>
            <a href="https://www.uniplaces.com/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 transition-colors flex flex-col items-center justify-center group text-center">
              <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 mb-1">Uniplaces</span>
              <span className="text-xs text-slate-500">Student focused (fees apply)</span>
            </a>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="font-bold text-slate-900 dark:text-white mb-1">Facebook</span>
              <span className="text-xs text-slate-500">Search "Affitti Studenti [City]"</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
