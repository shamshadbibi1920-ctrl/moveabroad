import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Building, DollarSign, Globe, GraduationCap, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../../components/SEO';
import { ukUniversities } from '../../../data/countries/ukUniversities';

export default function UkUniversities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const uniqueRegions = useMemo(() => {
    const regions = new Set(ukUniversities.map(u => u.region));
    return ['All', ...Array.from(regions)].sort();
  }, []);

  const uniqueTypes = useMemo(() => {
    const types = new Set(ukUniversities.map(u => u.type));
    return ['All', ...Array.from(types)].sort();
  }, []);

  const filteredUniversities = useMemo(() => {
    return ukUniversities.filter(uni => {
      const matchSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          uni.programs.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchRegion = regionFilter === 'All' || uni.region === regionFilter;
      const matchType = typeFilter === 'All' || uni.type === typeFilter;
      return matchSearch && matchRegion && matchType;
    });
  }, [searchQuery, regionFilter, typeFilter]);

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="Top UK Universities for Pakistani Students | MoveAbroad.pk"
        description="Search and filter top UK universities for Pakistani students. Find Russell Group and affordable universities by region, fees, and programs."
        canonicalPath="/study/uk/universities"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Tower Bridge" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Top UK Universities for Pakistani Students
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Discover over 40 top-tier and affordable universities across England, Scotland, Wales, and Northern Ireland.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK Overview
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by university name, city, or program..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors"
              />
            </div>
            <select
              value={regionFilter}
              onChange={e => setRegionFilter(e.target.value)}
              className="px-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-w-[160px]"
            >
              {uniqueRegions.map(region => <option key={region} value={region}>{region === 'All' ? 'All Regions' : region}</option>)}
            </select>
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
              className="px-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-w-[160px]"
            >
              {uniqueTypes.map(type => <option key={type} value={type}>{type === 'All' ? 'All Types' : type}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map((uni, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {uni.name}
                  </h3>
                  {uni.type === 'Russell Group' && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 whitespace-nowrap ml-2">
                      Russell Group
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{uni.city}, {uni.region}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{uni.tuition}/year avg</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{uni.english}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-slate-400" />
                    <span>Deadline: {uni.deadline}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-300 uppercase tracking-wider mb-2">Popular Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.split(', ').map((prog, pidx) => (
                      <span key={pidx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <Building className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No universities found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
