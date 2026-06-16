import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Briefcase, Stethoscope, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const searchData = [
  { title: "Study in Germany", category: "Study", href: "/study/germany", keywords: ["germany", "study", "bachelor", "master"] },
  { title: "Work in Germany", category: "Work", href: "/work/germany", keywords: ["germany", "work", "job", "career"] },
  { title: "Germany Scholarships", category: "Study", href: "/study/germany/scholarships", keywords: ["germany", "scholarships", "funding", "daad"] },
  { title: "Germany Visa", category: "Study", href: "/study/germany/visa-process", keywords: ["germany", "visa", "student visa", "block account", "embassy"] },
  { title: "Germany Universities", category: "Study", href: "/study/germany/universities", keywords: ["germany", "universities", "colleges", "public", "private"] },
  { title: "Opportunity Card", category: "Work", href: "/work/germany/opportunity-card", keywords: ["germany", "chancenkarte", "opportunity card", "job seeker"] },
  { title: "No IELTS Germany", category: "Study", href: "/study/germany/no-ielts", keywords: ["germany", "ielts", "english", "no ielts", "medium of instruction"] },
  { title: "Germany Accommodation", category: "Study", href: "/study/germany/accommodation", keywords: ["germany", "accommodation", "housing", "rent", "wg", "dorm"] },
  { title: "Germany Cost of Living", category: "Study", href: "/study/germany/cost-of-living", keywords: ["germany", "cost of living", "budget", "expenses"] },
  { title: "Study in Canada", category: "Study", href: "/study/canada", keywords: ["canada", "study", "sds", "toronto"] },
  { title: "Work in Canada", category: "Work", href: "/work/canada", keywords: ["canada", "work", "express entry", "pr"] },
  { title: "Study in UK", category: "Study", href: "/study/uk", keywords: ["uk", "study", "london", "england", "united kingdom"] },
  { title: "Work in UK", category: "Work", href: "/work/uk", keywords: ["uk", "work", "tier 2", "skilled worker"] },
  { title: "Study in Australia", category: "Study", href: "/study/australia", keywords: ["australia", "study", "sydney", "melbourne"] },
  { title: "Work in Australia", category: "Work", href: "/work/australia", keywords: ["australia", "work", "subclass"] },
  { title: "Study in UAE", category: "Study", href: "/study/uae", keywords: ["uae", "study", "dubai", "abu dhabi"] },
  { title: "Work in UAE", category: "Work", href: "/work/uae", keywords: ["uae", "work", "dubai", "job"] },
  { title: "Healthcare in UAE", category: "Healthcare", href: "/healthcare/uae/doctor", keywords: ["uae", "healthcare", "doctor", "nurse", "dha", "haad"] },
  { title: "Healthcare in UK", category: "Healthcare", href: "/healthcare/uk/doctor", keywords: ["uk", "healthcare", "doctor", "nurse", "plab", "nmc"] },
  { title: "Healthcare in Germany", category: "Healthcare", href: "/healthcare/germany/doctor", keywords: ["germany", "healthcare", "doctor", "nurse", "approbation", "fachsprachprüfung"] },
  { title: "Healthcare in Australia", category: "Healthcare", href: "/healthcare/australia/doctor", keywords: ["australia", "healthcare", "doctor", "nurse", "amc", "ahpra"] },
  { title: "Saudi Golden Visa", category: "Blog", href: "/blog/saudi-golden-visa", keywords: ["saudi", "golden visa", "work", "ksa", "riyadh"] },
  { title: "DHA Licensing Exam", category: "Blog", href: "/blog/dha-exam", keywords: ["dha", "dubai", "healthcare", "medical", "exam", "license"] },
  { title: "DAAD Scholarship Guide", category: "Blog", href: "/blog/daad-scholarship", keywords: ["daad", "scholarship", "germany", "fully funded"] },
  { title: "Sweden Work Visa", category: "Blog", href: "/blog/sweden-work-visa", keywords: ["sweden", "work", "visa", "tech", "job"] },
  { title: "Swedish Institute Scholarship", category: "Blog", href: "/blog/swedish-institute-scholarship", keywords: ["sweden", "scholarship", "fully funded", "masters"] },
  { title: "Search Scholarships", category: "Scholarships", href: "/scholarships", keywords: ["scholarships", "funding", "financial aid", "bachelors", "masters", "phd"] }
];

const popularPages = [
  { title: "Study in Germany", category: "Study", href: "/study/germany" },
  { title: "Opportunity Card", category: "Work", href: "/work/germany/opportunity-card" },
  { title: "Germany Scholarships", category: "Study", href: "/study/germany/scholarships" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Study': return <BookOpen className="w-4 h-4" />;
    case 'Work': return <Briefcase className="w-4 h-4" />;
    case 'Healthcare': return <Stethoscope className="w-4 h-4" />;
    case 'Blog': return <FileText className="w-4 h-4" />;
    default: return <Search className="w-4 h-4" />;
  }
};

export default function GlobalSearch({ isMobile = false, onClose }: { isMobile?: boolean, onClose?: () => void }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.trim().length > 0);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setQuery('');
    if (onClose) onClose();
  };

  const handleNavigate = (href: string) => {
    closeDropdown();
    navigate(href);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const searchResults = query.trim() === '' ? [] : searchData.filter(item => {
    const searchString = `${item.title} ${item.category} ${item.keywords.join(' ')}`.toLowerCase();
    return searchString.includes(query.toLowerCase().trim());
  });

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'w-64'}`} ref={containerRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => { if (query.trim().length > 0) setIsOpen(true); }}
          placeholder="Search opportunities..."
          className={`block w-full pl-10 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-${isMobile ? 'md' : 'full'} leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors`}
        />
        {query && (
          <button 
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-96 flex flex-col">
          <div className="overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Search Results
                </div>
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigate(result.href)}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex flex-col items-start focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800 group"
                  >
                    <span className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {result.title}
                    </span>
                    <span className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {getCategoryIcon(result.category)}
                      <span className="ml-1.5">{result.category}</span>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-6 px-4 text-center">
                <Search className="h-8 w-8 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">No results found for your search</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">Try checking your spelling or using different keywords.</p>
                
                <div className="text-left mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                    Popular Pages
                  </span>
                  <div className="space-y-1">
                    {popularPages.map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(page.href)}
                        className="w-full text-left px-3 py-2 text-sm rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                      >
                        {getCategoryIcon(page.category)}
                        <span className="ml-2">{page.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
