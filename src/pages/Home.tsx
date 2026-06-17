import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, GraduationCap, Briefcase, Stethoscope, ArrowRight, CheckCircle2, ChevronRight, Search, X } from 'lucide-react';
import SEO from '../components/SEO';

const COUNTRY_GROUPS = [
  {
    name: 'Schengen Countries',
    countries: [
      { id: 'germany', name: 'Germany', flag: '🇩🇪' },
      { id: 'austria', name: 'Austria', flag: '🇦🇹' },
      { id: 'belgium', name: 'Belgium', flag: '🇧🇪' },
      { id: 'croatia', name: 'Croatia', flag: '🇭🇷' },
      { id: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿' },
      { id: 'denmark', name: 'Denmark', flag: '🇩🇰' },
      { id: 'estonia', name: 'Estonia', flag: '🇪🇪' },
      { id: 'finland', name: 'Finland', flag: '🇫🇮' },
      { id: 'france', name: 'France', flag: '🇫🇷' },
      { id: 'greece', name: 'Greece', flag: '🇬🇷' },
      { id: 'hungary', name: 'Hungary', flag: '🇭🇺' },
      { id: 'iceland', name: 'Iceland', flag: '🇮🇸' },
      { id: 'italy', name: 'Italy', flag: '🇮🇹' },
      { id: 'latvia', name: 'Latvia', flag: '🇱🇻' },
      { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹' },
      { id: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺' },
      { id: 'malta', name: 'Malta', flag: '🇲🇹' },
      { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱' },
      { id: 'norway', name: 'Norway', flag: '🇳🇴' },
      { id: 'poland', name: 'Poland', flag: '🇵🇱' },
      { id: 'portugal', name: 'Portugal', flag: '🇵🇹' },
      { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰' },
      { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮' },
      { id: 'spain', name: 'Spain', flag: '🇪🇸' },
      { id: 'sweden', name: 'Sweden', flag: '🇸🇪' },
      { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭' },
    ]
  },
  {
    name: 'English Speaking',
    countries: [
      { id: 'canada', name: 'Canada', flag: '🇨🇦' },
      { id: 'usa', name: 'USA', flag: '🇺🇸' },
      { id: 'uk', name: 'UK', flag: '🇬🇧' },
      { id: 'ireland', name: 'Ireland', flag: '🇮🇪' },
      { id: 'australia', name: 'Australia', flag: '🇦🇺' },
      { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿' },
    ]
  },
  {
    name: 'Gulf Countries',
    countries: [
      { id: 'uae', name: 'UAE', flag: '🇦🇪' },
      { id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦' },
      { id: 'qatar', name: 'Qatar', flag: '🇶🇦' },
      { id: 'kuwait', name: 'Kuwait', flag: '🇰🇼' },
      { id: 'bahrain', name: 'Bahrain', flag: '🇧🇭' },
      { id: 'oman', name: 'Oman', flag: '🇴🇲' },
    ]
  },
  {
    name: 'Asian Countries',
    countries: [
      { id: 'japan', name: 'Japan', flag: '🇯🇵' },
      { id: 'south-korea', name: 'South Korea', flag: '🇰🇷' },
      { id: 'singapore', name: 'Singapore', flag: '🇸🇬' },
      { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾' },
      { id: 'china', name: 'China', flag: '🇨🇳' },
    ]
  }
];

const HEALTHCARE_PROFESSIONS = [
  { id: 'doctor', name: 'Doctor' },
  { id: 'nurse', name: 'Nurse' },
  { id: 'dentist', name: 'Dentist' },
  { id: 'pharmacist', name: 'Pharmacist' },
  { id: 'physiotherapist', name: 'Physiotherapist' },
];

export default function Home() {
  const [modalType, setModalType] = useState<'study' | 'work' | 'healthcare' | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<{ id: string, name: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleCountrySelect = (country: { id: string, name: string }) => {
    if (modalType === 'study') {
      navigate(`/study/${country.id}`);
    } else if (modalType === 'work') {
      navigate(`/work/${country.id}`);
    } else if (modalType === 'healthcare') {
      setSelectedCountry(country);
    }
  };

  const handleProfessionSelect = (professionId: string) => {
    if (selectedCountry) {
      navigate(`/healthcare/${selectedCountry.id}/${professionId}`);
    }
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedCountry(null);
    setSearchQuery('');
  };

  const filteredGroups = COUNTRY_GROUPS.map(group => ({
    ...group,
    countries: group.countries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(group => group.countries.length > 0);

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="MoveAbroad.pk — Study, Work & Migrate Abroad for Pakistanis"
        description="Complete guide for Pakistani students and professionals to study in Germany, migrate to Canada, work in UAE, and find scholarships abroad."
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white flex items-center min-h-[80vh]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Destinations" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
          className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 blur-3xl opacity-20"></div>
        </div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              variants={fadeIn}
            >
              Your Gateway to <span className="text-blue-400">Global</span> Opportunities
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed"
              variants={fadeIn}
            >
              Connecting Pakistani students and professionals with fully-funded scholarships, international jobs, and healthcare careers abroad.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeIn}>
              <Link to="/scholarships" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Find Scholarships
              </Link>
              <Link to="/country-guides" className="inline-flex justify-center items-center px-8 py-4 border border-slate-500 text-base font-medium rounded-full text-white hover:bg-slate-800 hover:border-slate-400 transition-all backdrop-blur-sm">
                Explore Country Guides
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="font-display text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">Choose Your Path</motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Explore tailored guides and opportunities based on your career goals.</motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Category 1 */}
            <motion.div variants={fadeIn} className="group relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] shadow-sm hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-300 p-10 flex flex-col h-full transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Study Abroad</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow mb-8 leading-relaxed">Fully-funded scholarships, DAAD, Erasmus+, and university guides for Pakistani students.</p>
              <button onClick={() => setModalType('study')} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer text-left">
                Select Country <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Category 2 */}
            <motion.div variants={fadeIn} className="group relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] shadow-sm hover:shadow-2xl dark:hover:shadow-indigo-900/20 transition-all duration-300 p-10 flex flex-col h-full transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Work Abroad</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow mb-8 leading-relaxed">Skilled worker visas, job seeker visas, and professional pathways to Europe, Canada, and the Middle East.</p>
              <button onClick={() => setModalType('work')} className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer text-left">
                Select Country <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Category 3 */}
            <motion.div variants={fadeIn} className="group relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] shadow-sm hover:shadow-2xl dark:hover:shadow-teal-900/20 transition-all duration-300 p-10 flex flex-col h-full transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-50 dark:bg-slate-700 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Healthcare Professionals</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow mb-8 leading-relaxed">Licensing exams (PLAB, DHA, Prometric) and job guides for Doctors, Nurses, and Pharmacists.</p>
              <button onClick={() => setModalType('healthcare')} className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-800 dark:hover:text-teal-300 transition-colors cursor-pointer text-left">
                Select Country <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Category 4 */}
            <motion.div variants={fadeIn} className="group relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] shadow-sm hover:shadow-2xl dark:hover:shadow-amber-900/20 transition-all duration-300 p-10 flex flex-col h-full transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-50 dark:bg-slate-700 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <Plane className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Migrate</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow mb-8 leading-relaxed">Permanent residency, and golden visa pathways for Pakistani investors and professionals.</p>
              <Link to="/migrate" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-800 dark:hover:text-amber-300 transition-colors cursor-pointer text-left">
                Explore Pathways <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Opportunities Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">Latest Opportunities</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Fresh updates on scholarships and visas.</p>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'DAAD Scholarships 2026 for Pakistanis', category: 'Scholarship', country: 'Germany', date: '2 days ago' },
              { title: 'Canada Express Entry Latest Draw', category: 'Visa Update', country: 'Canada', date: '4 days ago' },
              { title: 'DHA Exam Guide for Pharmacists', category: 'Healthcare', country: 'UAE', date: '1 week ago' },
              { title: 'Swedish Institute Scholarships Open', category: 'Scholarship', country: 'Sweden', date: '1 week ago' },
            ].map((item, idx) => (
              <div key={idx} className="group bg-slate-50/50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-blue-700 dark:text-blue-400 shadow-sm`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">{item.country}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">{item.title}</h3>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
                  <Link to={`/blog`} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Why Pakistani Professionals Trust Us</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Navigating international opportunities can be overwhelming. We simplify the process by providing verified, contextualized information specifically for Pakistani passport holders.
              </p>
              
              <ul className="space-y-6">
                {[
                  'Verified scholarship and job portals',
                  'Country-specific visa guides for Pakistani citizens',
                  'Step-by-step licensing guides for medical professionals',
                  'Community success stories and mentorship'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 mr-4">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-slate-800 dark:text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-base font-semibold rounded-full text-slate-700 dark:text-slate-300 bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                  Learn more about us
                </Link>
              </div>
            </div>
            
            <div className="relative lg:ml-10">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center p-12 relative">
                 <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 {/* Placeholder for an illustration or image */}
                 <div className="grid grid-cols-2 gap-6 w-full h-full relative z-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8 flex flex-col justify-center items-center transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                      <GraduationCap className="h-14 w-14 text-white mb-6" />
                      <div className="h-2 w-24 bg-white/30 rounded-full mb-3"></div>
                      <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8 flex flex-col justify-center items-center transform rotate-6 hover:rotate-0 transition-transform duration-500 mt-12">
                      <Briefcase className="h-14 w-14 text-white mb-6" />
                      <div className="h-2 w-24 bg-white/30 rounded-full mb-3"></div>
                      <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalType && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 w-full max-w-2xl sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh] overflow-hidden relative"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {modalType === 'study' ? 'Where do you want to study?' :
                   modalType === 'work' ? 'Where do you want to work?' :
                   selectedCountry ? 'Select your profession' : 'Select a destination'}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 scrollbar-hide">
                {modalType === 'healthcare' && selectedCountry ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {HEALTHCARE_PROFESSIONS.map((profession) => (
                      <button
                        key={profession.id}
                        onClick={() => handleProfessionSelect(profession.id)}
                        className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:shadow-md transition-all text-left"
                      >
                        <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 mr-4 shadow-sm">
                          <Stethoscope className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{profession.name}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-slate-900 dark:text-slate-100"
                        placeholder="Search for a country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="space-y-8">
                      {filteredGroups.length === 0 ? (
                        <p className="text-center text-slate-500 dark:text-slate-400 py-8">No countries found.</p>
                      ) : (
                        filteredGroups.map((group) => (
                          <div key={group.name}>
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                              {group.name}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {group.countries.map((country) => (
                                <button
                                  key={country.id}
                                  onClick={() => handleCountrySelect(country)}
                                  className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:shadow-md transition-all"
                                >
                                  <span className="text-4xl mb-2">{country.flag}</span>
                                  <span className="font-medium text-slate-700 dark:text-slate-200 text-sm text-center">
                                    {country.name}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
