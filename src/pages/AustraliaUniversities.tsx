import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ExternalLink, ArrowLeft, Building2, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const universities = [
  // Group of Eight
  { id: 'unimelb', name: 'University of Melbourne', city: 'Melbourne', state: 'VIC', type: 'Group of Eight', tuition: 'AUD $35,000 - $45,000', programs: ['Engineering', 'IT', 'Business'], english: 'IELTS 6.5', deadline: 'Late Nov (Sem 1)', url: 'https://unimelb.edu.au' },
  { id: 'usyd', name: 'University of Sydney', city: 'Sydney', state: 'NSW', type: 'Group of Eight', tuition: 'AUD $38,000 - $48,000', programs: ['Data Science', 'Nursing', 'Business'], english: 'IELTS 6.5', deadline: 'Jan 31 (Sem 1)', url: 'https://sydney.edu.au' },
  { id: 'anu', name: 'Australian National University (ANU)', city: 'Canberra', state: 'ACT', type: 'Group of Eight', tuition: 'AUD $36,000 - $47,000', programs: ['Public Policy', 'Computer Science', 'Law'], english: 'IELTS 6.5', deadline: 'Dec 15 (Sem 1)', url: 'https://anu.edu.au' },
  { id: 'uq', name: 'University of Queensland', city: 'Brisbane', state: 'QLD', type: 'Group of Eight', tuition: 'AUD $34,000 - $45,000', programs: ['Biotechnology', 'Engineering', 'Agriculture'], english: 'IELTS 6.5', deadline: 'Nov 30 (Sem 1)', url: 'https://uq.edu.au' },
  { id: 'unsw', name: 'UNSW Sydney', city: 'Sydney', state: 'NSW', type: 'Group of Eight', tuition: 'AUD $38,000 - $48,000', programs: ['Engineering', 'Business', 'Renewable Energy'], english: 'IELTS 6.5', deadline: 'Nov 30 (Term 1)', url: 'https://unsw.edu.au' },
  { id: 'monash', name: 'Monash University', city: 'Melbourne', state: 'VIC', type: 'Group of Eight', tuition: 'AUD $35,000 - $45,000', programs: ['Pharmacy', 'IT', 'Engineering'], english: 'IELTS 6.5', deadline: 'Late Nov (Sem 1)', url: 'https://monash.edu' },
  { id: 'uwa', name: 'University of Western Australia', city: 'Perth', state: 'WA', type: 'Group of Eight', tuition: 'AUD $33,000 - $42,000', programs: ['Mining Engineering', 'Data Science', 'Business'], english: 'IELTS 6.5', deadline: 'Dec 1 (Sem 1)', url: 'https://uwa.edu.au' },
  { id: 'adelaide', name: 'University of Adelaide', city: 'Adelaide', state: 'SA', type: 'Group of Eight', tuition: 'AUD $34,000 - $44,000', programs: ['Health Sciences', 'Engineering', 'IT'], english: 'IELTS 6.5', deadline: 'Dec 1 (Sem 1)', url: 'https://adelaide.edu.au' },
  // Other Major
  { id: 'rmit', name: 'RMIT University', city: 'Melbourne', state: 'VIC', type: 'Other Major', tuition: 'AUD $30,000 - $40,000', programs: ['Design', 'Computer Science', 'Engineering'], english: 'IELTS 6.0 - 6.5', deadline: 'Dec 15', url: 'https://rmit.edu.au' },
  { id: 'uts', name: 'University of Technology Sydney (UTS)', city: 'Sydney', state: 'NSW', type: 'Other Major', tuition: 'AUD $32,000 - $42,000', programs: ['Nursing', 'Data Analytics', 'Business'], english: 'IELTS 6.5', deadline: 'Jan 15', url: 'https://uts.edu.au' },
  { id: 'deakin', name: 'Deakin University', city: 'Geelong', state: 'VIC', type: 'Other Major', tuition: 'AUD $28,000 - $38,000', programs: ['Sports Science', 'Nursing', 'IT'], english: 'IELTS 6.0', deadline: 'Dec 1', url: 'https://deakin.edu.au' },
  { id: 'macquarie', name: 'Macquarie University', city: 'Sydney', state: 'NSW', type: 'Other Major', tuition: 'AUD $32,000 - $40,000', programs: ['Finance', 'Cyber Security', 'Linguistics'], english: 'IELTS 6.5', deadline: 'Jan 15', url: 'https://mq.edu.au' },
  { id: 'qut', name: 'Queensland University of Technology (QUT)', city: 'Brisbane', state: 'QLD', type: 'Other Major', tuition: 'AUD $30,000 - $38,000', programs: ['Creative Industries', 'IT', 'Health'], english: 'IELTS 6.5', deadline: 'Dec 1', url: 'https://qut.edu.au' },
  { id: 'griffith', name: 'Griffith University', city: 'Gold Coast', state: 'QLD', type: 'Other Major', tuition: 'AUD $29,000 - $36,000', programs: ['Hospitality', 'Nursing', 'Engineering'], english: 'IELTS 6.5', deadline: 'Jan 31', url: 'https://griffith.edu.au' },
  { id: 'latrobe', name: 'La Trobe University', city: 'Melbourne', state: 'VIC', type: 'Other Major', tuition: 'AUD $28,000 - $36,000', programs: ['Health Sciences', 'Cyber Security', 'Business'], english: 'IELTS 6.0', deadline: 'Dec 31', url: 'https://latrobe.edu.au' },
  { id: 'curtin', name: 'Curtin University', city: 'Perth', state: 'WA', type: 'Other Major', tuition: 'AUD $29,000 - $38,000', programs: ['Mining', 'Nursing', 'IT'], english: 'IELTS 6.0 - 6.5', deadline: 'Feb 1', url: 'https://curtin.edu.au' },
  { id: 'unisa', name: 'University of South Australia', city: 'Adelaide', state: 'SA', type: 'Other Major', tuition: 'AUD $28,000 - $35,000', programs: ['Aviation', 'Nursing', 'Business'], english: 'IELTS 6.0', deadline: 'Dec 1', url: 'https://unisa.edu.au' },
  { id: 'swinburne', name: 'Swinburne University', city: 'Melbourne', state: 'VIC', type: 'Other Major', tuition: 'AUD $28,000 - $36,000', programs: ['Design', 'IT', 'Engineering'], english: 'IELTS 6.0', deadline: 'Dec 15', url: 'https://swinburne.edu.au' },
  { id: 'newcastle', name: 'University of Newcastle', city: 'Newcastle', state: 'NSW', type: 'Other Major', tuition: 'AUD $29,000 - $37,000', programs: ['Medicine', 'Engineering', 'Architecture'], english: 'IELTS 6.0 - 6.5', deadline: 'Jan 15', url: 'https://newcastle.edu.au' },
  { id: 'wsu', name: 'Western Sydney University', city: 'Sydney', state: 'NSW', type: 'Other Major', tuition: 'AUD $26,000 - $33,000', programs: ['Nursing', 'IT', 'Business'], english: 'IELTS 6.5', deadline: 'Jan 31', url: 'https://westernsydney.edu.au' },
  { id: 'flinders', name: 'Flinders University', city: 'Adelaide', state: 'SA', type: 'Other Major', tuition: 'AUD $28,000 - $35,000', programs: ['Medicine', 'Nursing', 'Engineering'], english: 'IELTS 6.0', deadline: 'Dec 1', url: 'https://flinders.edu.au' },
  { id: 'jcu', name: 'James Cook University', city: 'Townsville', state: 'QLD', type: 'Other Major', tuition: 'AUD $29,000 - $36,000', programs: ['Marine Biology', 'Tropical Medicine', 'Dentistry'], english: 'IELTS 6.0 - 6.5', deadline: 'Jan 31', url: 'https://jcu.edu.au' },
  { id: 'vu', name: 'Victoria University', city: 'Melbourne', state: 'VIC', type: 'Other Major', tuition: 'AUD $25,000 - $32,000', programs: ['Sports Science', 'Business', 'IT'], english: 'IELTS 6.0', deadline: 'Dec 15', url: 'https://vu.edu.au' },
  { id: 'ecu', name: 'Edith Cowan University', city: 'Perth', state: 'WA', type: 'Other Major', tuition: 'AUD $27,000 - $34,000', programs: ['Cyber Security', 'Nursing', 'Performing Arts'], english: 'IELTS 6.0', deadline: 'Jan 15', url: 'https://ecu.edu.au' },
  { id: 'cdu', name: 'Charles Darwin University', city: 'Darwin', state: 'NT', type: 'Other Major', tuition: 'AUD $26,000 - $32,000', programs: ['Nursing', 'Data Science', 'Engineering'], english: 'IELTS 6.0', deadline: 'Jan 31', url: 'https://cdu.edu.au' },
  { id: 'federation', name: 'Federation University', city: 'Ballarat', state: 'VIC', type: 'Other Major', tuition: 'AUD $25,000 - $30,000', programs: ['IT', 'Nursing', 'Business'], english: 'IELTS 6.0', deadline: 'Dec 15', url: 'https://federation.edu.au' },
  { id: 'cqu', name: 'CQUniversity', city: 'Rockhampton', state: 'QLD', type: 'Other Major', tuition: 'AUD $26,000 - $32,000', programs: ['Engineering', 'IT', 'Nursing'], english: 'IELTS 6.0', deadline: 'Jan 31', url: 'https://cqu.edu.au' },
  { id: 'uow', name: 'University of Wollongong', city: 'Wollongong', state: 'NSW', type: 'Other Major', tuition: 'AUD $29,000 - $37,000', programs: ['Engineering', 'IT', 'Business'], english: 'IELTS 6.0 - 6.5', deadline: 'Jan 15', url: 'https://uow.edu.au' },
  { id: 'uc', name: 'University of Canberra', city: 'Canberra', state: 'ACT', type: 'Other Major', tuition: 'AUD $27,000 - $34,000', programs: ['IT', 'Design', 'Health'], english: 'IELTS 6.0', deadline: 'Dec 15', url: 'https://canberra.edu.au' },
  { id: 'murdoch', name: 'Murdoch University', city: 'Perth', state: 'WA', type: 'Other Major', tuition: 'AUD $28,000 - $35,000', programs: ['Veterinary Science', 'Nursing', 'IT'], english: 'IELTS 6.0', deadline: 'Jan 15', url: 'https://murdoch.edu.au' },
  { id: 'utas', name: 'University of Tasmania', city: 'Hobart', state: 'TAS', type: 'Other Major', tuition: 'AUD $28,000 - $35,000', programs: ['Marine Engineering', 'Maritime Studies', 'IT'], english: 'IELTS 6.0', deadline: 'Jan 31', url: 'https://utas.edu.au' },
  { id: 'scu', name: 'Southern Cross University', city: 'Lismore', state: 'NSW', type: 'Other Major', tuition: 'AUD $26,000 - $31,000', programs: ['Tourism', 'Nursing', 'IT'], english: 'IELTS 6.0', deadline: 'Jan 15', url: 'https://scu.edu.au' },
  { id: 'csu', name: 'Charles Sturt University', city: 'Bathurst', state: 'NSW', type: 'Other Major', tuition: 'AUD $26,000 - $32,000', programs: ['Agriculture', 'IT', 'Nursing'], english: 'IELTS 6.0', deadline: 'Jan 15', url: 'https://csu.edu.au' },
  { id: 'une', name: 'University of New England', city: 'Armidale', state: 'NSW', type: 'Other Major', tuition: 'AUD $26,000 - $31,000', programs: ['Agriculture', 'Nursing', 'IT'], english: 'IELTS 6.0', deadline: 'Jan 15', url: 'https://une.edu.au' },
  { id: 'torrens', name: 'Torrens University', city: 'Adelaide', state: 'SA', type: 'Other Major', tuition: 'AUD $25,000 - $30,000', programs: ['Business', 'Design', 'Health'], english: 'IELTS 6.0', deadline: 'Rolling', url: 'https://torrens.edu.au' }
];

export default function AustraliaUniversities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const states = ['All', 'NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
  const types = ['All', 'Group of Eight', 'Other Major'];

  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          uni.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === 'All' || uni.state === selectedState;
      const matchesType = selectedType === 'All' || uni.type === selectedType;
      
      return matchesSearch && matchesState && matchesType;
    });
  }, [searchTerm, selectedState, selectedType]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Universities in Australia for Pakistani Students | MoveAbroad.pk"
        description="Explore 35+ top Australian universities for Pakistani students. Find tuition fees, entry requirements, popular programs, and official links."
        canonicalPath="/study/australia/universities"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Sydney Opera House" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Universities in Australia</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Explore world-class education at the Group of Eight and other major universities across Australia's vibrant cities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Search Universities
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g., Monash, Sydney..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                State / Territory
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none dark:text-white"
                >
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                University Type
              </label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none dark:text-white"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400">
            Showing <span className="font-bold text-slate-900 dark:text-white">{filteredUniversities.length}</span> universities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  uni.type === 'Group of Eight' 
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}>
                  {uni.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{uni.name}</h3>
              
              <div className="flex items-center text-slate-500 dark:text-slate-400 mb-6 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {uni.city}, {uni.state}
              </div>

              <div className="space-y-4 flex-grow mb-6">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Avg. Tuition / Year</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{uni.tuition}</div>
                </div>
                
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">English Requirement</div>
                  <div className="font-medium text-slate-900 dark:text-white">{uni.english}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Popular Programs</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {uni.programs.map(prog => (
                      <span key={prog} className="text-xs bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href={uni.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl transition-colors text-sm font-medium group"
              >
                Official Website
                <ExternalLink className="w-4 h-4 ml-2 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No universities found</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Try adjusting your search filters to find more results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
