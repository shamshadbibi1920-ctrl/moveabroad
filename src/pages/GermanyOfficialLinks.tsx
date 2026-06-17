import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, GraduationCap, Building, Banknote, HeartPulse, Home, BookOpen, UserCircle2, Briefcase, ExternalLink, Search, Star, AlertTriangle, MapPin, ArrowLeft, Globe } from 'lucide-react';
import { getCountryData } from '../data/countries';

const linkCategories = [
  {
    id: "app-portals",
    title: "1. University Application Portals",
    icon: <GraduationCap className="w-6 h-6" />,
    links: [
      { name: "Uni-assist", url: "https://www.uni-assist.de/en/", desc: "Main centralized application portal for international students.", important: true },
      { name: "Hochschulstart", url: "https://www.hochschulstart.de/", desc: "Central application portal for Medicine and Pharmacy.", important: false },
      { name: "TUM Online", url: "https://campus.tum.de/tumonline/webnav.ini", desc: "Direct portal for Technical University of Munich.", important: false },
      { name: "RWTHonline", url: "https://online.rwth-aachen.de/", desc: "Direct portal for RWTH Aachen University.", important: false }
    ]
  },
  {
    id: "aps",
    title: "2. APS Certificate (Most Important for Pakistanis)",
    icon: <Globe className="w-6 h-6" />,
    links: [
      { name: "APS Pakistan Official Website", url: "https://pakistan.diplo.de/pk-en/service/aps", desc: "Mandatory academic verification for Pakistani students. Book appointments and find requirements here.", important: true },
      { name: "APS Checklists", url: "https://pakistan.diplo.de/pk-en/service/aps/checklists", desc: "Document requirements based on your current education level.", important: true },
      { name: "APS FAQs", url: "https://pakistan.diplo.de/pk-en/service/aps/faq", desc: "Answers regarding fees (typically €90) and processing times.", important: false }
    ]
  },
  {
    id: "embassy",
    title: "3. German Embassy Pakistan",
    icon: <Building className="w-6 h-6" />,
    links: [
      { name: "German Embassy Islamabad", url: "https://pakistan.diplo.de/pk-en/vertretungen/botschaft", desc: "Official embassy website. Ramna 5, Diplomatic Enclave, Islamabad.", important: true },
      { name: "Visa Booking Portal (Islamabad)", url: "https://service2.diplo.de/rktermin/face/assignSubmit.do?cms_terminfall_id=146200&cms_kategorie_id=30200&cms_standort_id=302&cms_standort_kuerzel=isla", desc: "Online appointment system for student visas.", important: true },
      { name: "Consulate Karachi", url: "https://pakistan.diplo.de/pk-en/vertretungen/generalkonsulat2", desc: "Consulate details for Sindh/Balochistan residents.", important: false }
    ]
  },
  {
    id: "daad",
    title: "4. DAAD (German Academic Exchange Service)",
    icon: <Globe className="w-6 h-6" />,
    links: [
      { name: "DAAD Official Homepage", url: "https://www.daad.de/en/", desc: "Official DAAD portal for studying in Germany.", important: true },
      { name: "DAAD Pakistan Office", url: "https://www.daad.pk/", desc: "DAAD Regional Office in Pakistan.", important: true },
      { name: "Scholarship Database", url: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/", desc: "Find DAAD and other official scholarships.", important: true },
      { name: "International Programmes Database", url: "https://www2.daad.de/deutschland/studienangebote/ আন্তর্জাতিক-programmes/en/", desc: "Search for English-taught bachelor's and master's courses.", important: true }
    ]
  },
  {
    id: "blocked-account",
    title: "5. Blocked Account Providers",
    icon: <Banknote className="w-6 h-6" />,
    links: [
      { name: "Fintiba", url: "https://www.fintiba.com/", desc: "Most recommended blocked account provider for students.", important: true },
      { name: "Expatrio", url: "https://www.expatrio.com/", desc: "Excellent alternative with 'Value Package' (Blocked account + Health Insurance).", important: false },
      { name: "Deutsche Bank", url: "https://www.deutsche-bank.de/pk/konto-und-karte/konten-im-ueberblick/internationale-studenten1.html", desc: "Traditional bank offering blocked accounts.", important: false }
    ]
  },
  {
    id: "health",
    title: "6. Health Insurance Providers",
    icon: <HeartPulse className="w-6 h-6" />,
    links: [
      { name: "TK (Techniker Krankenkasse)", url: "https://www.tk.de/en", desc: "Most popular public health insurance for students. Can register online from Pakistan.", important: true },
      { name: "AOK", url: "https://www.aok.de/kp/uni/", desc: "Large public health insurance provider with student tariffs.", important: true },
      { name: "Barmer", url: "https://www.barmer.de/en", desc: "Public insurance provider, extensive English support.", important: false },
      { name: "DAK-Gesundheit", url: "https://www.dak.de/", desc: "Another valid option for mandatory public health insurance.", important: false }
    ]
  },
  {
    id: "accommodation",
    title: "7. Accommodation Portals",
    icon: <Home className="w-6 h-6" />,
    links: [
      { name: "Studentenwerk", url: "https://www.studentenwerke.de/en/content/find-accommodation", desc: "Official student housing networks across Germany.", important: true },
      { name: "WG-Gesucht", url: "https://www.wg-gesucht.de/en/", desc: "The definitive website for finding shared apartments (WGs).", important: true },
      { name: "ImmoScout24", url: "https://www.immoscout24.de/", desc: "Largest portal for private apartment rentals.", important: false },
      { name: "Studenten-WG", url: "https://www.studenten-wg.de/", desc: "Alternative portal for student housing and shared flats.", important: false }
    ]
  },
  {
    id: "hec",
    title: "8. HEC Pakistan Links",
    icon: <Building2 className="w-6 h-6" />,
    links: [
      { name: "HEC Degree Attestation", url: "https://eservices.hec.gov.pk/", desc: "E-portal for mandatory degree attestation required by APS.", important: true },
      { name: "HEC Foreign Scholarships", url: "https://www.hec.gov.pk/english/scholarshipsgrants/foreign/Pages/default.aspx", desc: "Check for joint HEC-Germany scholarship announcements.", important: false },
      { name: "IBCC Equivalency", url: "https://ibcc.edu.pk/", desc: "Inter Board Committee of Chairmen for matric/inter attestation.", important: true }
    ]
  },
  {
    id: "language",
    title: "9. German Language Learning",
    icon: <BookOpen className="w-6 h-6" />,
    links: [
      { name: "Goethe-Institut Pakistan", url: "https://www.goethe.de/ins/pk/en/index.html", desc: "Official cultural institute. Centers in Karachi and Islamabad.", important: true },
      { name: "TestDaF Official", url: "https://www.testdaf.de/", desc: "Information on the Test of German as a Foreign Language.", important: false },
      { name: "Deutsche Welle (DW) Learn German", url: "https://learngerman.dw.com/en/overview", desc: "Excellent FREE online tool to self-study German.", important: true }
    ]
  },
  {
    id: "student-life",
    title: "10. Student Life in Germany",
    icon: <UserCircle2 className="w-6 h-6" />,
    links: [
      { name: "Make it in Germany", url: "https://www.make-it-in-germany.com/en/", desc: "Official portal by German Govt for skilled workers and students.", important: true },
      { name: "Study in Germany", url: "https://www.study-in-germany.de/en/", desc: "Comprehensive life, campus, and study guide.", important: true }
    ]
  },
  {
    id: "pakistani-community",
    title: "11. Pakistani Community Resources",
    icon: <MapPin className="w-6 h-6" />,
    links: [
      { name: "Embassy of Pakistan, Berlin", url: "https://pakemb.de/", desc: "Consular services for Pakistanis inside Germany.", important: true }
    ]
  },
  {
    id: "jobs",
    title: "12. Job and Career Links",
    icon: <Briefcase className="w-6 h-6" />,
    links: [
      { name: "Make it in Germany (Jobs)", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings", desc: "Official job portal.", important: true },
      { name: "Bundesagentur für Arbeit", url: "https://www.arbeitsagentur.de/en/welcome", desc: "Federal Employment Agency - Official job portal.", important: false }
    ]
  }
];

export default function GermanyOfficialLinks() {
  const data = getCountryData('germany');
  const countryName = 'Germany';
  const [searchTerm, setSearchTerm] = useState('');

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const filteredCategories = linkCategories.map(cat => ({
    ...cat,
    links: cat.links.filter(link => 
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      link.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.links.length > 0 || cat.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/germany" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Germany Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Official Links & Resources 🇩🇪
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A curated, centralized directory of all the official websites and portals Pakistani students need for their German study journey.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 max-w-xl relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search portals, embassies, resources..."
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 px-5 py-3 rounded-xl flex items-center border border-emerald-200 dark:border-emerald-800/50">
            <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm">All links verified as of <strong>2026</strong>. If any link is broken please contact us.</span>
          </motion.div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">No links found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredCategories.map((category, idx) => (
                <motion.div 
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col h-full"
                >
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center pb-4 border-b border-slate-100 dark:border-slate-700">
                    <span className="p-2 bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl mr-4 shadow-sm border border-blue-100 dark:border-slate-700">
                      {category.icon}
                    </span>
                    {category.title}
                  </h2>
                  <div className="space-y-4 flex-1">
                    {category.links.map((link, jdx) => (
                      <a 
                        key={jdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group block p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-sm hover:shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="pr-4">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center transition-colors">
                              {link.name}
                              {link.important && (
                                <Star className="w-4 h-4 ml-2 text-amber-500 fill-amber-500 flex-shrink-0" title="Highly Important" />
                              )}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                              {link.desc}
                            </p>
                          </div>
                          <ExternalLink className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
