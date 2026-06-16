import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Building, Search, MapPin, DollarSign, GraduationCap, Globe, Calendar, ArrowRight } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function GermanyUniversities() {
  const data = getCountryData('germany');
  const countryName = 'Germany';

  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [tuitionFilter, setTuitionFilter] = useState('All');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-900"></div>
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <Link to="/study/germany" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Germany
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Universities in {countryName}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Search and filter top public and private universities.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
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

          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 scrollbar-thin">
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
      </div>
    </div>
  );
}
