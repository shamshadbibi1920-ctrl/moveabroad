import { motion } from 'motion/react';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stethoscope, FileText, Banknote, Calendar, ArrowRight, CheckCircle2, Globe, HeartPulse, Activity, ChevronDown } from 'lucide-react';
import { getCountryData } from '../data/countries';
import GermanyDoctorContent from '../components/healthcare/GermanyDoctorContent';
import GermanyNurseContent from '../components/healthcare/GermanyNurseContent';
import GermanyDentistContent from '../components/healthcare/GermanyDentistContent';
import GermanyPharmacistContent from '../components/healthcare/GermanyPharmacistContent';
import GermanyPhysioContent from '../components/healthcare/GermanyPhysioContent';

import CanadaDoctorContent from '../components/healthcare/CanadaDoctorContent';

export default function HealthcareDestination() {
  const { countryId, professionId } = useParams<{ countryId: string, professionId: string }>();
  const safeCountryId = countryId || 'uk';
  const data = getCountryData(safeCountryId);
  const [expandedNewsIndex, setExpandedNewsIndex] = useState<number | null>(null);
  
  const countryName = data?.name || safeCountryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const professionName = professionId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Healthcare Professional';
  
  const professionKey = professionId?.toLowerCase() || 'doctor';
  const professionData = data?.healthcarePathways?.[professionKey];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  if (!data || !professionData) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <Stethoscope className="w-16 h-16 text-teal-500 mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Information Coming Soon</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Detailed healthcare licensing information for {professionName}s in {countryName} is not yet available.
          </p>
          <Link to="/" className="mt-6 inline-block text-teal-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      {/* Hero Banner */}
      {/* Hero Banner */}
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
              loading="eager"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-teal-900"></div>
          )}
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/30 backdrop-blur-md border border-teal-400/30 text-teal-50 text-sm font-semibold mb-6">
              <HeartPulse className="w-4 h-4 mr-2" /> Global Healthcare
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {professionName}s in {countryName} {data.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              Complete licensing pathway, exam preparation, and career guide for Pakistani {professionName.toLowerCase()}s relocating to {countryName}.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {safeCountryId === 'germany' && professionId === 'doctor' && <GermanyDoctorContent data={professionData} />}
        {safeCountryId === 'germany' && professionId === 'nurse' && <GermanyNurseContent data={professionData} />}
        {safeCountryId === 'germany' && professionId === 'dentist' && <GermanyDentistContent data={professionData} />}
        {safeCountryId === 'germany' && professionId === 'pharmacist' && <GermanyPharmacistContent data={professionData} />}
        {safeCountryId === 'germany' && professionId === 'physiotherapist' && <GermanyPhysioContent data={professionData} />}
        {safeCountryId === 'canada' && professionId === 'doctor' && <CanadaDoctorContent />}
      </div>
    </div>
  );
}
