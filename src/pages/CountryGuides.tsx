import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { getAllCountries } from '../data/countries';
import SEO from '../components/SEO';

export default function CountryGuides() {
  const navigate = useNavigate();
  const location = useLocation();
  const { professionId } = useParams<{ professionId?: string }>();
  const allCountries = getAllCountries();

  const isWork = location.pathname.includes('work-abroad') || location.pathname.includes('work');
  const isStudy = location.pathname.includes('study');
  const isHealthcare = location.pathname.includes('healthcare-abroad') || location.pathname.includes('healthcare');

  let title = "Country Guides";
  let subtitle = "Comprehensive guides on visas, living costs, and cultural adaptation.";
  
  if (isStudy) {
    title = "Study Destinations";
    subtitle = "Explore study opportunities, universities, and scholarships abroad.";
  } else if (isWork) {
    title = "Work Destinations";
    subtitle = "Explore work visas, skilled worker programs, and job seeker pathways.";
  } else if (isHealthcare) {
    const profName = professionId ? professionId.charAt(0).toUpperCase() + professionId.slice(1) : "Healthcare Professionals";
    title = `Destinations for ${profName}`;
    subtitle = "Explore licensing, exams, and job pathways for healthcare professionals.";
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.05 } }
  };

  return (
    <>
      <SEO title="Country Guides | MoveAbroad.pk" description="Comprehensive guide to country guides for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">{title}</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">{subtitle}</motion.p>
          <motion.div variants={fadeIn}>
            <Link to="/compare" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm shadow-blue-600/20">
              Compare Countries Side-by-Side
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          {allCountries.map((country) => (
            <motion.div 
              variants={fadeIn}
              key={country.id} 
              onClick={() => {
                let path = `/country-guides/${country.id}`;
                if (isHealthcare && professionId) {
                  path = `/healthcare/${country.id}/${professionId}`;
                } else if (isWork) {
                  path = `/work/${country.id}`;
                } else if (isStudy) {
                  path = `/study/${country.id}`;
                }
                navigate(path);
              }}
              className="group bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 p-8 flex flex-col hover:shadow-2xl hover:border-blue-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center"
            >
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-bottom">{country.flag}</div>
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">{country.name}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed flex-grow line-clamp-3">
                {country.overview || 'Explore opportunities for Pakistani professionals and students.'}
              </p>
              <button className="mt-auto inline-flex items-center justify-center w-full px-6 py-3 bg-slate-50 dark:bg-slate-800/50 text-blue-600 dark:text-blue-400 font-semibold rounded-xl group-hover:bg-blue-50 dark:bg-blue-900/30 transition-colors">
                Explore Destination
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </>
  );
}
