import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Home, Users, Building, Hotel, AlertTriangle, ListChecks, 
  MapPin, CheckCircle2, FileText, Globe, Key, ShieldAlert,
  Search, Utensils
} from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function GermanyAccommodation() {
  const data = getCountryData('germany');
  const countryName = 'Germany';

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
              Accommodation Guide in {countryName}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything Pakistani students need to know to find a home in Germany—from dormitories to finding a WG and avoiding scams.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Warning Box */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded-r-xl shadow-sm text-rose-900 dark:text-rose-100 flex items-start">
          <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0 text-rose-600 dark:text-rose-400" />
          <div>
            <h3 className="text-xl font-bold mb-1">Critical Warning</h3>
            <p className="text-lg">Accommodation in Germany is very competitive, especially in major cities like Munich, Berlin, and Hamburg. <strong>Start searching as early as possible (at least 3-6 months before arrival).</strong></p>
          </div>
        </motion.div>

        {/* 1. Types of Accommodation */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 border-b border-slate-100 dark:border-slate-700 pb-4 flex items-center">
            <Home className="w-8 h-8 mr-4 text-blue-500" /> 1. Types of Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center"><Building className="w-5 h-5 mr-2 text-indigo-500"/> Student Dormitory</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Run by <em>Studentenwerk</em>. The cheapest and safest option.</p>
              <ul className="text-xs space-y-1 text-slate-500 dark:text-slate-400">
                <li className="text-emerald-600 dark:text-emerald-400">✓ Pros: Cheap, bills included, furnished</li>
                <li className="text-rose-600 dark:text-rose-400">✗ Cons: Long waitlists, small rooms</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-emerald-500"/> Shared Flat (WG)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Sharing an apartment (Wohngemeinschaft) with 2-5 other people.</p>
              <ul className="text-xs space-y-1 text-slate-500 dark:text-slate-400">
                <li className="text-emerald-600 dark:text-emerald-400">✓ Pros: Make friends quickly, good availability</li>
                <li className="text-rose-600 dark:text-rose-400">✗ Cons: Competitive interviews, cleaning disputes</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center"><Key className="w-5 h-5 mr-2 text-amber-500"/> Private Apartment</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Renting an entire studio or 1-bedroom flat.</p>
              <ul className="text-xs space-y-1 text-slate-500 dark:text-slate-400">
                <li className="text-emerald-600 dark:text-emerald-400">✓ Pros: Complete privacy, make your own rules</li>
                <li className="text-rose-600 dark:text-rose-400">✗ Cons: Very expensive, requires high deposit</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 flex items-center"><Home className="w-5 h-5 mr-2 text-purple-500"/> Homestay</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Living with a German family or elderly person.</p>
              <ul className="text-xs space-y-1 text-slate-500 dark:text-slate-400">
                <li className="text-emerald-600 dark:text-emerald-400">✓ Pros: Learn German fast, cultural exchange</li>
                <li className="text-rose-600 dark:text-rose-400">✗ Cons: Less independence, house rules</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 2 & 3. Dorms & WGs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-indigo-50 dark:bg-indigo-900/10 rounded-[2rem] p-8 shadow-sm border border-indigo-100 dark:border-indigo-800/30">
            <h2 className="font-display text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-6 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
              <Building className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" /> 2. Student Dormitory
            </h2>
            <div className="space-y-4 text-indigo-900 dark:text-indigo-200 text-sm">
              <p><strong>Cost:</strong> €200 - €400 per month (includes internet, heating, water).</p>
              <p><strong>How to Apply:</strong> Register on your city's <em>Studentenwerk</em> website immediately after applying to the university. Do <strong>not</strong> wait for your admission letter in competitive cities!</p>
              <p><strong>Waiting Time:</strong> Can range from 1 to 6+ months depending on the city.</p>
              <div className="bg-indigo-100 dark:bg-indigo-800/40 p-4 rounded-xl mt-4">
                <strong>Pro-Tip:</strong> Check your email regularly. When Studentenwerk offers you a room, you usually only have 3-5 days to reply and pay the deposit.
              </div>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] p-8 shadow-sm border border-emerald-100 dark:border-emerald-800/30">
            <h2 className="font-display text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-6 flex items-center border-b border-emerald-200 dark:border-emerald-800/50 pb-4">
              <Users className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> 3. Shared Apartment (WG)
            </h2>
            <div className="space-y-4 text-emerald-900 dark:text-emerald-200 text-sm">
              <p><strong>Cost:</strong> €300 - €500 per month.</p>
              <p><strong>Where to find:</strong> WG-Gesucht.de (most popular), Immoscout24, local university blackboards.</p>
              <p><strong>WG Application Tip:</strong> Write a personalized message (in German if possible, or polite English). Mention your hobbies, that you are clean, and how you will fund your rent.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Never send a copy-paste standard message.</li>
                <li>Be prepared for a casual "WG Casting" (interview) via Skype/Zoom.</li>
                <li>Check what is included: "Kaltmiete" (cold rent without heating/bills) vs "Warmmiete" (including heating/water).</li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* 4 & 6. Private Apartments & Before Arrival */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <Key className="w-6 h-6 mr-3 text-amber-500" /> 4. Private Apartment
            </h2>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <p><strong>Cost:</strong> €500 - €900+ per month.</p>
              <p><strong>Deposit (Kaution):</strong> By law, landlords can ask for up to 3 month's Kaltmiete (cold rent) upfront.</p>
              <p><strong>Websites:</strong> Immoscout24, Immowelt, eBay Kleinanzeigen.</p>
              <p className="mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded-lg">
                <strong>Warning:</strong> Many private apartments in Germany are rented completely unfurnished — this means NO lights, NO kitchen sink, NO cabinets. Look for "möbliert" (furnished) or ones with an "Einbauküche/EBK" (fitted kitchen).
              </p>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 rounded-[2rem] p-8 shadow-sm text-white">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center border-b border-slate-700 pb-4">
              <Hotel className="w-6 h-6 mr-3 text-rose-400" /> 6. Before You Arrive
            </h2>
            <div className="space-y-4 text-sm text-slate-300">
              <p>Do NOT travel without booking at least temporary accommodation.</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Temporary Options:</strong> Hostels, Airbnb, Wunderflats, or sublets (Zwischenmiete).</li>
                <li><strong>Budget:</strong> Keep aside €400 - €800 for 2-4 weeks of temporary stay.</li>
                <li><strong>Tip:</strong> Use this temporary period to visit long-term rooms in person to avoid scams and secure the best spot.</li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* 5. City Table */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-x-auto">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
            <MapPin className="w-8 h-8 mr-4 text-emerald-500" /> 5. Accommodation Costs by City
          </h2>
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <th className="p-4 rounded-tl-xl border-b border-slate-200 dark:border-slate-700">City</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">Dormitory (Avg)</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">WG Room (Avg)</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">Private Apt (Avg)</th>
                <th className="p-4 rounded-tr-xl border-b border-slate-200 dark:border-slate-700">Competitiveness</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Munich</td><td className="p-4 text-slate-600 dark:text-slate-400">€350+</td><td className="p-4 text-slate-600 dark:text-slate-400">€600 - €800+</td><td className="p-4 text-slate-600 dark:text-slate-400">€900+</td><td className="p-4 text-rose-500 font-bold">Extreme</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Berlin / Frankfurt</td><td className="p-4 text-slate-600 dark:text-slate-400">€300+</td><td className="p-4 text-slate-600 dark:text-slate-400">€500 - €700</td><td className="p-4 text-slate-600 dark:text-slate-400">€800+</td><td className="p-4 text-rose-500 font-bold">Very High</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Hamburg / Stuttgart</td><td className="p-4 text-slate-600 dark:text-slate-400">€280+</td><td className="p-4 text-slate-600 dark:text-slate-400">€450 - €650</td><td className="p-4 text-slate-600 dark:text-slate-400">€750+</td><td className="p-4 text-orange-500 font-bold">High</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Cologne</td><td className="p-4 text-slate-600 dark:text-slate-400">€250+</td><td className="p-4 text-slate-600 dark:text-slate-400">€400 - €600</td><td className="p-4 text-slate-600 dark:text-slate-400">€650+</td><td className="p-4 text-orange-500 font-bold">High</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4 font-bold text-slate-800 dark:text-slate-200">Dresden / Leipzig</td><td className="p-4 text-slate-600 dark:text-slate-400">€200+</td><td className="p-4 text-slate-600 dark:text-slate-400">€250 - €450</td><td className="p-4 text-slate-600 dark:text-slate-400">€450+</td><td className="p-4 text-emerald-500 font-bold">Moderate</td>
              </tr>
            </tbody>
          </table>
        </motion.section>

        {/* 7. Anmeldung & 8. Rental Contract */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <ListChecks className="w-6 h-6 mr-3 text-blue-500" /> 7. Anmeldung (Registration)
            </h2>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p><strong>What is it?</strong> Mandatory city registration. You must register your address at the local Bürgeramt (Citizen's Office).</p>
              <p><strong>Timeline:</strong> By law, it must be done within 14 days of moving in (book an appointment online early).</p>
              <p><strong>Critical Documents Needed:</strong></p>
              <ul className="list-disc list-inside">
                <li>Passport / Visa</li>
                <li><strong>Wohnungsgeberbestätigung:</strong> A landlord confirmation form signed by your landlord/main tenant. You cannot do Anmeldung without this!</li>
              </ul>
              <p className="italic text-rose-500 dark:text-rose-400 mt-2">No Anmeldung = No German Bank Account = No Blocked Account Payout!</p>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <FileText className="w-6 h-6 mr-3 text-emerald-500" /> 8. German Rental Contract
            </h2>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <p><strong>Kaltmiete vs. Warmmiete:</strong> Kaltmiete is base rent. Warmmiete includes Nebenkosten (heating, water, trash). Electricity and Internet are usually separate.</p>
              <p><strong>Notice Period (Kündigungsfrist):</strong> Standard is 3 months! You cannot just leave at the end of the month.</p>
              <p><strong>GEZ / Rundfunkbeitrag:</strong> A mandatory TV/Radio tax in Germany costing €18.36 per month per household. Factor this in!</p>
              <p><strong>Tenant Rights:</strong> German law heavily favors tenants. A landlord cannot evict you without extreme cause and cannot enter the apartment without permission.</p>
            </div>
          </motion.section>
        </div>

        {/* 9. Halal / Community */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] p-8 shadow-sm border border-blue-100 dark:border-blue-800/30">
          <h2 className="font-display text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center border-b border-blue-200 dark:border-blue-800/50 pb-4">
            <Utensils className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> 9. Halal Food & Pakistani Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900 dark:text-blue-200 text-sm">
            <div>
              <p className="mb-2"><strong>Cities with Large Communities:</strong> Frankfurt (Offenbach area), Berlin (Neukölln/Kreuzberg), Hamburg, and Munich have established Pakistani diaspora, mosques, and grocery stores.</p>
              <p><strong>Halal Availability:</strong> Finding Halal meat is incredibly easy in almost any German city, thanks to widespread Turkish and Arab communities. Look for signs saying "Halal" or "Helal".</p>
            </div>
            <div>
              <p className="mb-2"><strong>Connecting:</strong> Join "Pakistanis in [City Name]" or "PSA [University]" (Pakistani Student Association) groups on Facebook and WhatsApp before arriving.</p>
              <p><strong>Mosques:</strong> You can find local prayer times and mosque locations using apps like Muslim Pro or simply searching for "DITIB" or local Islamic centers.</p>
            </div>
          </div>
        </motion.section>

        {/* 10. Tips & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-rose-50 dark:bg-rose-900/10 rounded-[2rem] p-8 shadow-sm border border-rose-100 dark:border-rose-800/30 flex flex-col">
            <h2 className="font-display text-2xl font-bold text-rose-900 dark:text-rose-100 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4">
              <ShieldAlert className="w-6 h-6 mr-3 text-rose-600 dark:text-rose-400" /> 10. Avoid Scams & Tips
            </h2>
            <ul className="space-y-4 text-sm text-rose-900 dark:text-rose-200 flex-1">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-rose-500" />
                <span><strong>Never pay cash or transfer money BEFORE viewing the apartment</strong> and signing a legitimate contract.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-rose-500" />
                <span><strong>"I am currently abroad" Scam:</strong> If the "landlord" says they are not in Germany but will send the keys via DHL after you pay Western Union/Airbnb — <strong>IT IS A SCAM.</strong></span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-emerald-500" />
                <span><strong>Bring basics:</strong> Pack a light bedsheet, a power adapter, and some instant noodles/snacks for your first 2 days. German shops are strictly closed on Sundays!</span>
              </li>
            </ul>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
              <Globe className="w-6 h-6 mr-3 text-slate-500" /> Useful Links
            </h2>
            <div className="space-y-3">
              <a href="https://www.wg-gesucht.de/en/" target="_blank" rel="noreferrer" className="flex items-center text-sm bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <Search className="w-4 h-4 mr-3 text-slate-400" /> WG-Gesucht (Most Popular)
              </a>
              <a href="https://www.studentenwerke.de/en/content/find-accommodation" target="_blank" rel="noreferrer" className="flex items-center text-sm bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <Search className="w-4 h-4 mr-3 text-slate-400" /> Studentenwerk Dormitories
              </a>
              <a href="https://www.immoscout24.de/" target="_blank" rel="noreferrer" className="flex items-center text-sm bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <Search className="w-4 h-4 mr-3 text-slate-400" /> ImmobilienScout24
              </a>
              <a href="https://wunderflats.com/" target="_blank" rel="noreferrer" className="flex items-center text-sm bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <Search className="w-4 h-4 mr-3 text-slate-400" /> Wunderflats (Temporary/Furnished)
              </a>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
  );
}
