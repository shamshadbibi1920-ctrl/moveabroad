import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, GraduationCap, MapPin, Search, Filter, ExternalLink, Euro, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../../components/SEO';

export default function ItalyUniversities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  const universities = [
    { name: "University of Bologna (UNIBO)", city: "Bologna", region: "North", type: "Public", fee: "€150 - €3,000", programs: "Law, Business, Arts, Engineering", english: true, deadline: "March - May", url: "https://www.unibo.it/en" },
    { name: "Sapienza University of Rome", city: "Rome", region: "Central", type: "Public", fee: "€150 - €2,900", programs: "Classics, Medicine, Engineering, AI", english: true, deadline: "April - June", url: "https://www.uniroma1.it/en" },
    { name: "Politecnico di Milano (PoliMi)", city: "Milan", region: "North", type: "Public", fee: "€895 - €3,900", programs: "Architecture, Design, Engineering", english: true, deadline: "November - March", url: "https://www.polimi.it/en/" },
    { name: "University of Padua (UNIPD)", city: "Padua", region: "North", type: "Public", fee: "€192 - €2,900", programs: "Medicine, Psychology, Engineering", english: true, deadline: "January - March", url: "https://www.unipd.it/en/" },
    { name: "University of Milan (La Statale)", city: "Milan", region: "North", type: "Public", fee: "€156 - €4,000", programs: "Medicine, Humanities, Sciences", english: true, deadline: "March - June", url: "https://www.unimi.it/en" },
    { name: "Politecnico di Torino (PoliTo)", city: "Turin", region: "North", type: "Public", fee: "€161 - €2,600", programs: "Engineering, Architecture", english: true, deadline: "January - April", url: "https://www.polito.it/en/" },
    { name: "University of Florence", city: "Florence", region: "Central", type: "Public", fee: "€156 - €2,500", programs: "Arts, Architecture, Economics", english: true, deadline: "May - July", url: "https://www.unifi.it/changelang-eng.html" },
    { name: "University of Naples Federico II", city: "Naples", region: "South", type: "Public", fee: "€156 - €2,000", programs: "Engineering, Humanities, Law", english: true, deadline: "June - August", url: "http://www.international.unina.it/" },
    { name: "University of Pisa", city: "Pisa", region: "Central", type: "Public", fee: "€356 - €2,400", programs: "Physics, Computer Science, Engineering", english: true, deadline: "April - July", url: "https://www.unipi.it/index.php/english" },
    { name: "Bocconi University", city: "Milan", region: "North", type: "Private", fee: "€14,000 - €16,000", programs: "Business, Economics, Finance, Law", english: true, deadline: "December - April", url: "https://www.unibocconi.eu/" },
    { name: "University of Turin", city: "Turin", region: "North", type: "Public", fee: "€156 - €2,800", programs: "Business, Law, Medicine", english: true, deadline: "April - June", url: "https://en.unito.it/" },
    { name: "University of Trento", city: "Trento", region: "North", type: "Public", fee: "€156 - €3,000", programs: "Cognitive Science, IT, Sociology", english: true, deadline: "February - April", url: "https://www.unitn.it/en" },
    { name: "University of Genoa", city: "Genoa", region: "North", type: "Public", fee: "€156 - €3,000", programs: "Maritime Engineering, Architecture", english: true, deadline: "May - July", url: "https://unige.it/en" },
    { name: "University of Verona", city: "Verona", region: "North", type: "Public", fee: "€156 - €2,500", programs: "Economics, Medicine, Humanities", english: true, deadline: "March - May", url: "https://www.univr.it/en/" },
    { name: "University of Rome Tor Vergata", city: "Rome", region: "Central", type: "Public", fee: "€156 - €3,000", programs: "Economics, Engineering, Medicine", english: true, deadline: "March - June", url: "https://en.uniroma2.it/" },
    { name: "LUISS Guido Carli", city: "Rome", region: "Central", type: "Private", fee: "€12,000 - €13,000", programs: "Political Science, Business, Law", english: true, deadline: "February - May", url: "https://www.luiss.edu/" },
    { name: "University of Siena", city: "Siena", region: "Central", type: "Public", fee: "€156 - €2,500", programs: "Dentistry, Economics, Pharmacy", english: true, deadline: "April - June", url: "https://en.unisi.it/" },
    { name: "University of Bari", city: "Bari", region: "South", type: "Public", fee: "€156 - €2,000", programs: "Medicine, IT, Agriculture", english: true, deadline: "May - July", url: "https://www.uniba.it/english-version" },
    { name: "University of Catania", city: "Catania", region: "South", type: "Public", fee: "€156 - €2,000", programs: "Engineering, Humanities, Science", english: true, deadline: "May - July", url: "https://www.unict.it/en" },
    { name: "University of Palermo", city: "Palermo", region: "South", type: "Public", fee: "€156 - €2,000", programs: "Architecture, Engineering, Tourism", english: true, deadline: "May - July", url: "https://www.unipa.it/strutture/internationalstudents/" },
    { name: "University of Bergamo", city: "Bergamo", region: "North", type: "Public", fee: "€156 - €2,000", programs: "Engineering, Economics, Languages", english: true, deadline: "April - June", url: "https://en.unibg.it/" },
    { name: "University of Brescia", city: "Brescia", region: "North", type: "Public", fee: "€156 - €2,500", programs: "Engineering, Medicine, Economics", english: true, deadline: "April - July", url: "https://en.unibs.it/" },
    { name: "University of Calabria", city: "Rende", region: "South", type: "Public", fee: "€165 - €1,500", programs: "AI, Data Science, Engineering", english: true, deadline: "April - May", url: "https://www.unical.it/eng/" },
    { name: "University of Ferrara", city: "Ferrara", region: "North", type: "Public", fee: "€156 - €2,500", programs: "Architecture, Medicine, Physics", english: true, deadline: "March - June", url: "https://en.unife.it/" },
    { name: "University of Parma", city: "Parma", region: "North", type: "Public", fee: "€156 - €2,500", programs: "Food Science, Engineering", english: true, deadline: "April - June", url: "https://en.unipr.it/" },
    { name: "University of Salerno", city: "Salerno", region: "South", type: "Public", fee: "€156 - €2,000", programs: "IT, Engineering, Pharmacy", english: true, deadline: "May - July", url: "https://web.unisa.it/en/home" },
    { name: "Politecnico di Bari", city: "Bari", region: "South", type: "Public", fee: "€156 - €1,800", programs: "Engineering, Architecture", english: true, deadline: "April - June", url: "http://www.en.poliba.it/" },
    { name: "Free University of Bozen-Bolzano", city: "Bolzano", region: "North", type: "Public", fee: "€1,350 - €1,500", programs: "Computer Science, Economics", english: true, deadline: "April - July", url: "https://www.unibz.it/en/" }
  ];

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          uni.programs.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter === 'All' || uni.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <SEO title="Study in Italy: Universities | MoveAbroad.pk" description="Comprehensive guide to italy universities for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&q=80" 
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
              <GraduationCap className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Universities in Italy</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            Explore 30+ popular Italian universities for Pakistani students. Known for extremely affordable public education and world-class programs in Engineering, Architecture, and Business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm mb-12">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-100 flex items-center mb-2">
            <Euro className="w-5 h-5 mr-2 text-emerald-600" /> Ultra-Low Public Tuition Fees
          </h4>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            Unlike the UK, Australia, or North America, <strong>public universities in Italy charge very low tuition fees (often €500 - €4,000 per year)</strong>. Furthermore, based on your family income (ISEE Parificato), you can apply for regional DSU scholarships which often reduce these fees to nearly €0 and provide a monthly living stipend!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search universities, cities, or programs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white"
            />
          </div>
          <div className="relative md:w-64">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select 
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white appearance-none"
            >
              <option value="All">All Regions</option>
              <option value="North">North Italy (Milan, Turin, Venice)</option>
              <option value="Central">Central Italy (Rome, Florence, Pisa)</option>
              <option value="South">South Italy (Naples, Bari, Sicily)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">{uni.name}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-md ${uni.type === 'Public' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'}`}>
                  {uni.type}
                </span>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 mr-2 shrink-0 text-slate-400" />
                  {uni.city}, {uni.region} Italy
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Euro className="w-4 h-4 mr-2 shrink-0 text-slate-400" />
                  Fee/Yr: <strong className="ml-1 text-slate-700 dark:text-slate-300">{uni.fee}</strong>
                </div>
                <div className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-4 h-4 mr-2 shrink-0 text-slate-400 mt-0.5" />
                  <span><strong className="text-slate-700 dark:text-slate-300">Top Programs:</strong> {uni.programs}</span>
                </div>
                {uni.english && (
                  <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                    English-taught programs available
                  </div>
                )}
              </div>
              
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>Intake/Deadline:</strong><br/>{uni.deadline}
                </div>
                <a 
                  href={uni.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 bg-slate-50 hover:bg-blue-50 dark:bg-slate-700 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                  aria-label={`Visit ${uni.name} website`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No universities found matching your filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setRegionFilter('All'); }}
              className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
