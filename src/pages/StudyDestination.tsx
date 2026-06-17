import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, BookOpen, FileText, Banknote, Building, Calendar, ArrowRight, CheckCircle2, MapPin, Search, GraduationCap, DollarSign, Home, MessageCircle, HelpCircle, AlertTriangle, Info, ChevronDown } from 'lucide-react';
import { getCountryData } from '../data/countries';
import SEO from '../components/SEO';

const noIeltsUniversities = [
  { name: 'TU Berlin', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'RWTH Aachen', alternative: 'MOI + Interview / Internal English Test' },
  { name: 'TU Dresden', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'University of Hamburg', alternative: 'MOI / Duolingo (depends on program)' },
  { name: 'Hochschule München', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'HAW Hamburg', alternative: 'MOI + Internal Assessment' },
  { name: 'TU Darmstadt', alternative: 'MOI / Internal English Test' },
  { name: 'University of Duisburg-Essen', alternative: 'Medium of Instruction (MOI) Certificate' },
  { name: 'Hochschule Bremen', alternative: 'Duolingo / MOI' },
  { name: 'OTH Regensburg', alternative: 'MOI Certificate' }
];

const noIeltsProcess = [
  "Check University Requirements: Confirm on the official university portal if your target program explicitly accepts MOI (Medium of Instruction) from Pakistani universities.",
  "Obtain MOI Certificate: Get an official letter from your previous university in Pakistan stating that your entire degree was taught and examined in English.",
  "Prepare Additional Documents: Gather strong academic transcripts, SOP, LORs, and sometimes GRE/GMAT if required to strengthen your profile.",
  "Submit Application: Apply through Uni-Assist or the university's direct portal, uploading the MOI certificate in place of IELTS.",
  "Prepare for Interview: Some universities or the German embassy may conduct an interview to verify your English communication skills.",
  "Embassy Visa Interview: Be prepared to speak fluently in English during your visa interview at the German consulate in Pakistan, as they will evaluate your language proficiency."
];

export default function StudyDestination() {
  const { countryId } = useParams<{ countryId: string }>();
  const safeId = countryId || 'germany';
  const data = getCountryData(safeId);
  const countryName = data?.name || safeId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [tuitionFilter, setTuitionFilter] = useState('All');
  const [expandedNewsIndex, setExpandedNewsIndex] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const uniqueCities = useMemo(() => {
    if (!data?.universities) return ['All'];
    const cities = new Set(data.universities.map(u => u.city));
    return ['All', ...Array.from(cities)].sort();
  }, [data?.universities]);

  const uniqueRegions = useMemo(() => {
    if (!data?.universities) return ['All'];
    const regions = new Set(data.universities.map(u => u.region).filter(Boolean));
    return ['All', ...Array.from(regions)].sort() as string[];
  }, [data?.universities]);

  const uniqueTuitions = useMemo(() => {
    if (!data?.universities) return ['All'];
    const tuitions = new Set(data.universities.map(u => u.tuitionFeeRange));
    return ['All', ...Array.from(tuitions)].sort();
  }, [data?.universities]);

  const filteredUniversities = useMemo(() => {
    if (!data?.universities) return [];
    return data.universities.filter(uni => {
      const matchSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          uni.popularPrograms.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchCity = cityFilter === 'All' || uni.city === cityFilter;
      const matchRegion = regionFilter === 'All' || uni.region === regionFilter;
      const matchType = typeFilter === 'All' || uni.type === typeFilter;
      const matchTuition = tuitionFilter === 'All' || uni.tuitionFeeRange === tuitionFilter;
      return matchSearch && matchCity && matchRegion && matchType && matchTuition;
    });
  }, [data?.universities, searchQuery, cityFilter, regionFilter, typeFilter, tuitionFilter]);

  const publicUniversities = data?.universities?.filter(u => u.type.includes('Public')).slice(0, 3) || [];
  const privateUniversities = data?.universities?.filter(u => u.type.includes('Private') || u.type.includes('Fachhochschule')).slice(0, 3) || [];

  if (!data) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Information Coming Soon</h1>
          <p className="text-slate-500 dark:text-slate-400">Detailed study information for {countryName} is not yet available.</p>
          <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 w-full min-h-screen transition-colors duration-300">
      <SEO 
        title={safeId === 'germany' 
          ? "Study in Germany Free for Pakistani Students 2026 | MoveAbroad.pk" 
          : safeId === 'canada' 
            ? "Study in Canada from Pakistan 2026 — Universities, Visa, Scholarships" 
            : `Study in ${countryName} for Pakistani Students | MoveAbroad.pk`}
        description={safeId === 'germany' 
          ? "How to study in Germany for free from Pakistan. No tuition fees, DAAD scholarships, blocked account, APS certificate guide." 
          : safeId === 'canada' 
            ? "Top Canadian universities for Pakistani students, study permit process, IELTS requirements and scholarship opportunities." 
            : `Complete guide for Pakistani students to study in ${countryName}.`}
        canonicalPath={`/study/${safeId}`}
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {data.heroImage ? (
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Study Abroad Destination
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Study in {countryName} {data.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore your complete guide to studying in {countryName}. Find universities, navigate the visa process, and kickstart your international journey.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* 1. Overview */}
            {data.overview && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <BookOpen className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" /> 1. Overview
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {data.overview}
                </p>

                {['germany', 'canada'].includes(safeId) && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to={`/study/${safeId}/universities`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Universities</span>
                    </Link>
                    <Link to={`/study/${safeId}/scholarships`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <Banknote className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Scholarships</span>
                    </Link>
                    <Link to={`/study/${safeId}/visa-process`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <FileText className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Visa Process</span>
                    </Link>
                    <Link to={`/study/${safeId}/application-process`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Application Process</span>
                    </Link>
                    <Link to={`/study/${safeId}/no-ielts`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <Globe className="w-10 h-10 text-amber-600 dark:text-amber-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">No IELTS Options</span>
                    </Link>
                    <Link to={`/study/${safeId}/cost-of-living`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <DollarSign className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Cost of Living</span>
                    </Link>
                    <Link to={`/study/${safeId}/accommodation`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <Home className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Accommodation</span>
                    </Link>
                    <Link to={`/study/${safeId}/intake-deadlines`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                      <Calendar className="w-10 h-10 text-rose-600 dark:text-rose-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Intake Deadlines</span>
                    </Link>
                    {safeId === 'germany' && (
                      <Link to={`/study/${safeId}/official-links`} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-800 rounded-2xl transition-all group text-center shadow-sm hover:shadow-md">
                        <Globe className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Official Links</span>
                      </Link>
                    )}
                  </div>
                )}
              </motion.section>
            )}

            {!['germany', 'canada'].includes(safeId) && (
              <>
                {/* University Finder Section */}
            {data.universities && data.universities.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2 flex items-center">
                  <Building className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" /> Discover Universities
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">Search and filter top public and private universities in {countryName}.</p>
                
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search universities or programs..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <select
                    value={cityFilter}
                    onChange={e => setCityFilter(e.target.value)}
                    className="px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                  >
                    {uniqueCities.map(city => <option key={city} value={city}>{city === 'All' ? 'All Cities' : city}</option>)}
                  </select>
                  {uniqueRegions.length > 2 && (
                    <select
                      value={regionFilter}
                      onChange={e => setRegionFilter(e.target.value)}
                      className="px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                    >
                      {uniqueRegions.map(region => <option key={region} value={region}>{region === 'All' ? 'All Regions' : region}</option>)}
                    </select>
                  )}
                  <select
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                    className="px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                  >
                    <option value="All">All Types</option>
                    <option value="Public University">Public University</option>
                    <option value="Fachhochschule">Fachhochschule (UAS)</option>
                    <option value="Private">Private</option>
                  </select>
                  <select
                    value={tuitionFilter}
                    onChange={e => setTuitionFilter(e.target.value)}
                    className="px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                  >
                    {uniqueTuitions.map(tuition => <option key={tuition} value={tuition}>{tuition === 'All' ? 'All Tuition Ranges' : tuition}</option>)}
                  </select>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                  <AnimatePresence>
                    {filteredUniversities.length > 0 ? filteredUniversities.map(uni => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        key={uni.id}
                        className="p-6 border border-slate-100 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">{uni.name}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-4">
                              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {uni.city}{uni.region && `, ${uni.region}`}</span>
                              <span className="flex items-center"><Building className="w-4 h-4 mr-1" /> {uni.type}</span>
                              <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> {uni.tuitionFeeRange}</span>
                            </div>
                            
                            {/* New Optional Fields grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4 bg-slate-100/50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-200 dark:border-slate-700/50">
                              {uni.minimumEntryRequirement && (
                                <div className="flex items-start">
                                  <GraduationCap className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
                                  <span><strong className="text-slate-700 dark:text-slate-300">Entry:</strong> {uni.minimumEntryRequirement}</span>
                                </div>
                              )}
                              {uni.englishProgramsAvailable && (
                                <div className="flex items-start">
                                  <Globe className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-indigo-500" />
                                  <span><strong className="text-slate-700 dark:text-slate-300">English Taught:</strong> {uni.englishProgramsAvailable}</span>
                                </div>
                              )}
                              {uni.applicationDeadline && (
                                <div className="flex items-start sm:col-span-2">
                                  <Calendar className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-emerald-500" />
                                  <span><strong className="text-slate-700 dark:text-slate-300">Deadlines:</strong> {uni.applicationDeadline}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {uni.levels && uni.levels.map(level => (
                                <span key={level} className="px-2.5 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold">
                                  {level}
                                </span>
                              ))}
                              {uni.popularPrograms.slice(0, 3).map(prog => (
                                <span key={prog} className="px-2.5 py-1 bg-slate-200/50 dark:bg-slate-700 rounded-md text-slate-700 dark:text-slate-300 text-xs">
                                  {prog}
                                </span>
                              ))}
                            </div>
                          </div>
                          <a href={uni.website} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors whitespace-nowrap">
                            Visit Website <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </motion.div>
                    )) : (
                      <div className="text-center py-10 text-slate-500 dark:text-slate-400">
                        No universities found matching your criteria.
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
            )}

            {/* Study Without IELTS Section (Only for Germany) */}
            {safeId === 'germany' && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50">Study in Germany Without IELTS</h2>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  For Pakistani students, many top German universities and Fachhochschulen (UAS) accept alternative English proficiency evidence. If your previous degree was taught entirely in English, you may be eligible to apply using a Medium of Instruction (MOI) Certificate instead of an IELTS score.
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5 mb-8 flex items-start">
                  <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-1">⚠️ Important Disclaimer</h4>
                    <p className="text-amber-700 dark:text-amber-400 text-sm">
                      While Medium of Instruction (MOI) certificate is accepted as an alternative to IELTS, having an IELTS score is strongly recommended. It significantly increases admission acceptance and German student visa approval rate. Always verify directly with the university as requirements can change.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Universities Accepting MOI / Alternatives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {noIeltsUniversities.map((uni, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{uni.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1.5" /> {uni.alternative}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Application Process Without IELTS</h3>
                <div className="space-y-4">
                  {noIeltsProcess.map((step, idx) => {
                    const [stepTitle, ...stepDescParts] = step.split(': ');
                    const stepDesc = stepDescParts.join(': ');
                    return (
                      <div key={idx} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center flex-shrink-0 mr-4">
                          {idx + 1}
                        </div>
                        <div>
                          <strong className="text-slate-800 dark:text-slate-200 block mb-1">{stepTitle}</strong>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">{stepDesc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* Top Public & Private Highlights */}
            {publicUniversities.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
                 <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Top Public Universities</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {publicUniversities.map(u => (
                     <div key={u.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                       <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">{u.name}</h4>
                       <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{u.city}</p>
                       <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{u.popularPrograms.join(', ')}</p>
                     </div>
                   ))}
                 </div>
              </motion.section>
            )}

            {privateUniversities.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="pt-6">
                 <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Top Private Universities</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {privateUniversities.map(u => (
                     <div key={u.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                       <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">{u.name}</h4>
                       <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{u.city}</p>
                       <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{u.popularPrograms.join(', ')}</p>
                     </div>
                   ))}
                 </div>
              </motion.section>
            )}

            {/* 4. Scholarships */}
            {data.scholarships && data.scholarships.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] p-8 shadow-sm border border-blue-100/50 dark:border-blue-800/30">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <GraduationCap className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" /> Scholarships
                </h2>
                <ul className="space-y-3 mb-6">
                  {data.scholarships.map((s, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-lg">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

             {/* 5. Visa */}
             {data.studentVisaInfo && data.studentVisaInfo.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" /> Student Visa Information
                </h2>
                <ul className="space-y-4">
                  {data.studentVisaInfo.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
             )}

            {/* 6 & 7. Tuition and Cost  */}
            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.tuitionFees && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Banknote className="w-6 h-6 mr-3 text-indigo-500" /> Tuition Fees
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.tuitionFees}
                    </p>
                  </div>
                )}
                {data.costOfLiving && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <DollarSign className="w-6 h-6 mr-3 text-emerald-500" /> Cost of Living
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.costOfLiving}
                    </p>
                  </div>
                )}
             </motion.section>

            {/* 8 & 9. Language and Accommodation  */}
            <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.languageRequirements && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <MessageCircle className="w-6 h-6 mr-3 text-blue-500" /> Language Req.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.languageRequirements}
                    </p>
                  </div>
                )}
                {data.accommodation && (
                  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center">
                      <Home className="w-6 h-6 mr-3 text-orange-500" /> Accommodation
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {data.accommodation}
                    </p>
                  </div>
                )}
             </motion.section>

             {/* Application Process */}
             {data.studyApplicationProcess && data.studyApplicationProcess.length > 0 && (
               <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center">
                  <BookOpen className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" /> Application Process
                </h2>
                <div className="relative border-l-2 border-blue-100 dark:border-blue-900/50 pl-8 space-y-8 ml-4">
                  {data.studyApplicationProcess.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[41px] bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white dark:border-slate-800">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-lg">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
             )}

            {/* Intakes */}
            {data.studyIntakes && data.studyIntakes.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <Calendar className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" /> Intakes & Deadlines
                </h2>
                <div className="flex flex-wrap gap-4">
                  {data.studyIntakes.map(intake => (
                    <div key={intake} className="px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">
                      {intake}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">* Deadlines often fall 6-9 months prior to the intake. Always check specific university portals.</p>
              </motion.section>
            )}

            {/* Official Links */}
            {data.officialLinks && data.officialLinks.length > 0 && (
              <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-500" /> Official Government & Study Links
                </h2>
                <div className="space-y-4">
                  {data.officialLinks.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group">
                      <Globe className="w-5 h-5 text-slate-400 group-hover:text-blue-500 mr-4" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-blue-500" />
                    </a>
                  ))}
                </div>
              </motion.section>
            )}
              </>
            )}

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8 sticky top-28 h-fit">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-[2rem] p-8 border border-blue-100 dark:border-blue-800/50">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">Latest Updates</h3>
              <div className="space-y-6">
                {(safeId === 'germany' ? [
                  { 
                    title: 'New Visa rules announced for Germany', 
                    date: '2 days ago',
                    details: [
                      'Germany increased blocked account requirement to €11,208/year',
                      'New financial proof documents required',
                      'Processing time at German Embassy Islamabad now 8-12 weeks',
                      'Always check German Embassy Pakistan website for latest updates'
                    ]
                  },
                  { 
                    title: 'Top Universities in Germany updates', 
                    date: '1 week ago',
                    details: [
                      'TU Munich ranked #1 in Germany 2026',
                      'Several universities added new English taught programs',
                      'Application portals updated for Winter 2026 semester',
                      'Uni-assist processing fee increased to €75 first university'
                    ]
                  },
                  { 
                    title: 'Step-by-step student accommodation guide', 
                    date: '2 weeks ago',
                    details: [
                      'Studentenwerk dormitory waitlists now 6-12 months in Munich',
                      'WG-Gesucht remains best platform for shared apartments',
                      'Average rent increased by 8% in major German cities 2026',
                      'Apply for accommodation before receiving admission letter'
                    ]
                  }
                ] : safeId === 'canada' ? [
                  { 
                    title: 'Updates to SDS program for Pakistani students', 
                    date: '2 days ago',
                    details: [
                      'IRCC has updated processing times for the Student Direct Stream (SDS).',
                      'GIC requirement remains at CAD $20,635 to reflect the true cost of living.',
                      'Ensure biometric appointments are booked immediately after submitting the application.'
                    ]
                  },
                  { 
                    title: 'New Intake Deadlines for Fall 2026', 
                    date: '1 week ago',
                    details: [
                      'Several top universities including UofT and UBC have announced early deadlines.',
                      'Apply 8-10 months in advance for highly competitive programs.',
                      'Entrance scholarship considerations happen concurrently with admission.'
                    ]
                  },
                  { 
                    title: 'Post-Graduation Work Permit (PGWP) changes', 
                    date: '2 weeks ago',
                    details: [
                      'New updates affect the eligibility criteria for PGWP.',
                      'Master\'s degree graduates will continue to be eligible for 3-year PGWPs.',
                      'Always check IRCC for the most current post-graduation work rules.'
                    ]
                  }
                ] : [
                  { title: `New Visa rules announced for ${countryName}`, date: '2 days ago', details: [] },
                  { title: `Top Universities in ${countryName} updates`, date: '1 week ago', details: [] },
                  { title: 'Step-by-step student accommodation guide', date: '2 weeks ago', details: [] }
                ]).map((news, i) => (
                  <div key={i} className="group cursor-pointer border-b border-blue-200/50 dark:border-blue-800/30 pb-4 last:border-0 last:pb-0" onClick={() => setExpandedNewsIndex(expandedNewsIndex === i ? null : i)}>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <Calendar className="w-4 h-4 mr-2" /> {news.date}
                    </div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {news.title}
                      </h4>
                      {news.details.length > 0 && (
                        <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform ml-2 flex-shrink-0 ${expandedNewsIndex === i ? 'rotate-180 text-blue-500' : 'group-hover:text-blue-500'}`} />
                      )}
                    </div>
                    {news.details.length > 0 && (
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-2 block opacity-100 group-hover:opacity-80 transition-opacity">
                          {expandedNewsIndex === i ? 'Show less' : 'Read more'}
                        </span>
                    )}
                    <AnimatePresence>
                      {expandedNewsIndex === i && news.details.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc pl-5">
                            {news.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

             <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-8 text-white relative overflow-hidden">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
              <h3 className="font-display text-2xl font-bold mb-4">Need Expert Guidance?</h3>
              <p className="text-slate-300 mb-6">
                Get personalized advice on university shortlisting, statement of purpose, and visa applications.
              </p>
              <Link to="/contact" className="block w-full text-center bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-4 rounded-xl transition-colors">
                Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

