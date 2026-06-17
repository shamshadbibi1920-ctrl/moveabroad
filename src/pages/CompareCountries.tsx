import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { XCircle } from 'lucide-react';
import { getAllCountries } from '../data/countries';

export default function CompareCountries() {
  const allCountries = getAllCountries();
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    allCountries.length >= 2 ? [allCountries[0].id, allCountries[1].id] : allCountries.map(c => c.id)
  );
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const addCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (id && !selectedCountries.includes(id) && selectedCountries.length < 4) {
      setSelectedCountries([...selectedCountries, id]);
    }
  };

  const removeCountry = (id: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== id));
  };

  const featureRows = [
    { label: 'Tuition Fees', key: 'tuitionFees' },
    { label: 'Living Cost', key: 'costOfLiving' },
    { label: 'Language Requirements', key: 'languageRequirements' },
    { label: 'Work Visa Routes', key: 'workVisaInfo' },
    { label: 'Scholarships', key: 'scholarships' },
    { label: 'Top Universities Listed', key: 'universities' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">Compare Countries</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400">Evaluate key metrics for studying, working, and immigrating across different destinations.</motion.p>
        </motion.div>

        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 p-6 md:p-10 mb-8 overflow-x-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">Compare up to 4 countries</h2>
            {selectedCountries.length < 4 && (
              <select 
                onChange={addCountry} 
                value=""
                className="px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="" disabled>+ Add Country</option>
                {allCountries.filter(c => !selectedCountries.includes(c.id)).map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            )}
          </div>

          <div className="min-w-[800px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-1/5 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-tl-xl border-b border-r border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-medium">
                    Features
                  </th>
                  <AnimatePresence>
                    {selectedCountries.map((id, index) => {
                      const country = allCountries.find(c => c.id === id);
                      if (!country) return null;
                      return (
                        <motion.th 
                          key={id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className={`w-[20%] p-6 text-center border-b border-slate-200 dark:border-slate-700 relative ${index !== selectedCountries.length - 1 ? 'border-r' : 'rounded-tr-xl'}`}
                        >
                          {selectedCountries.length > 2 && (
                            <button 
                              onClick={() => removeCountry(id)}
                              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                          )}
                          <div className="text-5xl mb-4">{country.flag}</div>
                          <div className="font-display text-xl font-bold text-slate-900 dark:text-slate-50">{country.name}</div>
                        </motion.th>
                      );
                    })}
                  </AnimatePresence>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, rowIndex) => (
                  <tr key={row.key} className="group">
                    <td className={`p-4 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 ${rowIndex === featureRows.length - 1 ? 'rounded-bl-xl border-b-0' : 'border-b'}`}>
                      {row.label}
                    </td>
                    <AnimatePresence>
                      {selectedCountries.map((id, colIndex) => {
                        const country = allCountries.find(c => c.id === id);
                        if (!country) return null;
                        
                        let val: any = 'Information not available';
                        const rawVal = country[row.key as keyof typeof country];

                        if (row.key === 'universities' && Array.isArray(rawVal)) {
                          val = `${rawVal.length} Universities Listed`;
                        } else if (Array.isArray(rawVal)) {
                          // Handle array of strings or objects. If it's an array of string, keep it.
                          // If it's an array of objects (like universities), render names.
                          if (rawVal.length > 0 && typeof rawVal[0] === 'object') {
                             val = rawVal.map((v: any) => v.name || 'Item');
                          } else {
                             val = rawVal;
                          }
                        } else if (typeof rawVal === 'string') {
                          val = rawVal;
                        }

                        return (
                          <motion.td 
                            key={`${id}-${row.key}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`p-6 text-center text-slate-600 dark:text-slate-400 align-top ${rowIndex !== featureRows.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''} ${colIndex !== selectedCountries.length - 1 ? 'border-r border-slate-200 dark:border-slate-700' : ''}`}
                          >
                            {Array.isArray(val) ? (
                              <div className="flex flex-col gap-2 text-left">
                                {val.slice(0, 3).map((v, i) => (
                                  <span key={i} className="text-sm">• {v}</span>
                                ))}
                                {val.length > 3 && <span className="text-xs text-blue-500 italic">+{val.length - 3} more</span>}
                              </div>
                            ) : (
                              <span className="text-sm block">{val}</span>
                            )}
                          </motion.td>
                        );
                      })}
                    </AnimatePresence>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
