import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Banknote, FileText, Calendar, ArrowRight, CheckCircle2, DollarSign, ChevronRight, AlertTriangle, ArrowLeft, Globe } from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function CanadaScholarships() {
  const data = getCountryData('canada');
  const [activeTab, setActiveTab] = useState('government');

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const scholarshipsData = {
    government: [
      {
        name: 'Vanier Canada Graduate Scholarships',
        amount: 'CAD 50,000 / year',
        levels: ['Doctorate'],
        deadline: 'November',
        eligibility: ['Demonstrated leadership skills', 'High standard of scholarly achievement in graduate studies'],
        documents: ['Research Proposal', 'Leadership Statement', 'Transcripts', 'Reference Letters'],
        link: 'https://vanier.gc.ca/'
      },
      {
        name: 'Canada Graduate Scholarships (NSERC/SSHRC/CIHR)',
        amount: 'CAD 17,500 - 35,000 / year',
        levels: ['Master\'s', 'Doctorate'],
        deadline: 'December 1',
        eligibility: ['Enrolled in an eligible graduate program', 'High academic standing'],
        documents: ['Transcripts', 'Proposal', 'At least 2 Reference Letters', 'CV'],
        link: 'https://www.nserc-crsng.gc.ca/'
      },
      {
        name: 'Ontario Graduate Scholarship (OGS)',
        amount: 'CAD 10,000 - 15,000 / year',
        levels: ['Master\'s', 'Doctorate'],
        deadline: 'Varies by university (usually Jan-March)',
        eligibility: ['Enrolled in an Ontario university', 'Minimum A- average '],
        documents: ['Transcripts', 'Academic References', 'Study Proposal'],
        link: 'https://osap.gov.on.ca/OSAPPortal/en/A-ZListofAid/PRDR019245.html'
      }
    ],
    nongovernment: [
      {
        name: 'Trudeau Foundation Scholarship',
        amount: 'CAD 40,000 / year',
        levels: ['Doctorate'],
        deadline: 'December',
        eligibility: ['Social Sciences and Humanities research', 'Leadership qualities', 'Align with Trudeau foundation themes'],
        documents: ['CV', 'Transcripts', 'Research Proposal', 'Reference Letters'],
        link: 'https://www.trudeaufoundation.ca/'
      },
      {
        name: 'Aga Khan Foundation Scholarships',
        amount: 'Covers Tuition & Living (50% Grant / 50% Loan)',
        levels: ['Master\'s', 'Doctorate'],
        deadline: 'March',
        eligibility: ['Outstanding academic record', 'Genuine financial need', 'Under 30 years prefered'],
        documents: ['Proof of Income', 'Transcripts', 'Admission Letter', 'Statement of Purpose'],
        link: 'https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme'
      },
      {
        name: 'Commonwealth Scholarships',
        amount: 'Full Tuition + Travel + Living Allowance',
        levels: ['Master\'s', 'Doctorate'],
        deadline: 'May-June',
        eligibility: ['Citizens of Commonwealth countries (Pakistan included)'],
        documents: ['HEC verification', 'Degree certificates', 'Academic references', 'Proposal'],
        link: 'https://cscuk.fcdo.gov.uk/'
      }
    ],
    university: [
      {
        name: 'University of Toronto International Scholar Award',
        amount: 'Up to CAD 100,000 over 4 years',
        levels: ['Bachelor\'s'],
        deadline: 'Automatic consideration upon admission',
        eligibility: ['Outstanding academic record in secondary school'],
        documents: ['High School Transcripts', 'Admission Application'],
        link: 'https://future.utoronto.ca/finances/scholarships/'
      },
      {
        name: 'UBC International Major Entrance Scholarship',
        amount: 'Varies (Significant portion of tuition)',
        levels: ['Bachelor\'s'],
        deadline: 'January 15',
        eligibility: ['Exceptional academic achievement', 'Extracurricular involvement'],
        documents: ['Personal Profile', 'High School Transcripts'],
        link: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/'
      },
      {
        name: 'McGill Entrance Scholarships',
        amount: 'CAD 3,000 - 12,000',
        levels: ['Bachelor\'s'],
        deadline: 'January (with admission application)',
        eligibility: ['Top 1-2% of class'],
        documents: ['High school grades'],
        link: 'https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships'
      },
      {
        name: 'Waterloo International Student Awards',
        amount: 'CAD 10,000',
        levels: ['Bachelor\'s'],
        deadline: 'Automatic',
        eligibility: ['High academic achievement in specific faculties'],
        documents: ['Transcripts'],
        link: 'https://uwaterloo.ca/future-students/financing/scholarships'
      }
    ],
    hec: [
      {
        name: 'HEC Pakistan - Canada Scholarships',
        amount: 'Varies (Tuition + Stipend)',
        levels: ['Master\'s', 'Doctorate'],
        deadline: 'Through HEC portals periodically',
        eligibility: ['Pakistani citizen', 'Valid HEC attested degrees', 'Meet university criteria'],
        documents: ['HEC Application Form', 'Local equivalences', 'English Proficiency', 'Research Proposal'],
        link: 'https://www.hec.gov.pk/english/scholarshipsgrants/Pages/default.aspx'
      }
    ]
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Canada
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Scholarships in Canada 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Find fully funded scholarships and financial aid opportunities for Pakistani students in Canada.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5 mb-12 flex items-start">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-1">Important Note</h4>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              In Canada, most substantial scholarships (especially for Bachelors) require you to secure university admission first. Begin targeting early and apply 8-10 months before the deadline!
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-700 mb-10">
          {[
            { id: 'government', label: 'Government Scholarships' },
            { id: 'nongovernment', label: 'Foundation & NGO' },
            { id: 'university', label: 'University Specific' },
            { id: 'hec', label: 'HEC Pakistan' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === tab.id 
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {scholarshipsData[activeTab as keyof typeof scholarshipsData].map((scholarship, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 pr-4">{scholarship.name}</h3>
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 p-3 rounded-2xl flex-shrink-0">
                      <DollarSign className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                    {scholarship.amount}
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Deadline</span>
                        <span className="text-slate-600 dark:text-slate-400">{scholarship.deadline}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Eligible Levels</span>
                        <span className="text-slate-600 dark:text-slate-400">{scholarship.levels.join(', ')}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Eligibility</span>
                        <ul className="text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                          {scholarship.eligibility.map((item, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Required Documents</span>
                        <ul className="text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                          {scholarship.documents.map((doc, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mr-2" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <a href={scholarship.link} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center px-6 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700 transition-colors group">
                    Official Information <ChevronRight className="w-5 h-5 ml-2 text-slate-400 group-hover:text-emerald-500" />
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tips Section */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center">
            <CheckCircle2 className="w-8 h-8 mr-4 text-emerald-400" /> Tips for a Strong Application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div>
              <div className="text-4xl font-bold text-emerald-500/30 mb-2">01</div>
              <h4 className="font-bold text-lg mb-2">Start Early</h4>
              <p className="text-slate-400 text-sm">Scholarship deadlines are often 6-9 months before the course start date. Prepare your language tests well in advance.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500/30 mb-2">02</div>
              <h4 className="font-bold text-lg mb-2">Tailor Your SOP</h4>
              <p className="text-slate-400 text-sm">Write a compelling Statement of Purpose that highlights your socio-economic background, leadership, and how funding will help.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500/30 mb-2">03</div>
              <h4 className="font-bold text-lg mb-2">Strong References</h4>
              <p className="text-slate-400 text-sm">Choose academic Referees who know you well and can vouch for your academic rigor and determination, not just your grade.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500/30 mb-2">04</div>
              <h4 className="font-bold text-lg mb-2">Check Fine Print</h4>
              <p className="text-slate-400 text-sm">Some scholarships require you to return to Pakistan after graduation, while others allow you to stay in Canada with a PGWP.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
