import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, GraduationCap, ExternalLink, ArrowLeft, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaScholarships() {
  const [activeTab, setActiveTab] = useState<'government' | 'university' | 'hec' | 'research'>('government');

  const scholarships = {
    government: [
      {
        name: 'Australia Awards Scholarships',
        amount: 'Fully Funded (Tuition, flights, stipend)',
        levels: ['Master\'s', 'PhD'],
        deadline: 'April 30 (Annual)',
        eligibility: ['Pakistani citizens', 'Public or private sector experience', 'Return to Pakistan for 2 years post-study'],
        documents: ['Degree Transcripts', 'IELTS/TOEFL', 'Employer NOC'],
        link: 'https://www.dfat.gov.au/people-to-people/australia-awards'
      },
      {
        name: 'Destination Australia Scholarships',
        amount: 'AUD 15,000 per year',
        levels: ['Bachelor\'s', 'Master\'s', 'PhD'],
        deadline: 'Varies by institution',
        eligibility: ['Study at a regional Australian campus'],
        documents: ['Admission Offer', 'Scholarship Application'],
        link: 'https://www.education.gov.au/destination-australia'
      },
      {
        name: 'Endeavour Leadership Program',
        amount: 'Fully Funded (Temporarily paused, check updates)',
        levels: ['Master\'s', 'PhD', 'VET'],
        deadline: 'Check official site',
        eligibility: ['High academic merit', 'Leadership potential'],
        documents: ['Transcripts', 'References'],
        link: 'https://internationaleducation.gov.au/'
      }
    ],
    university: [
      {
        name: 'University of Melbourne International Scholar Award',
        amount: 'Up to AUD 100,000 over 4 years',
        levels: ['Bachelor\'s'],
        deadline: 'Automatic consideration',
        eligibility: ['Outstanding academic record in secondary school'],
        documents: ['Academic Transcripts'],
        link: 'https://scholarships.unimelb.edu.au/'
      },
      {
        name: 'University of Sydney International Entrance Scholarship',
        amount: 'Varies (Significant portion of tuition)',
        levels: ['Bachelor\'s'],
        deadline: 'January 15',
        eligibility: ['Top academic merit'],
        documents: ['Personal Profile', 'High School Transcripts'],
        link: 'https://www.sydney.edu.au/scholarships/'
      },
      {
        name: 'Monash Entrance Scholarships',
        amount: 'AUD 3,000 - 12,000',
        levels: ['Bachelor\'s'],
        deadline: 'January',
        eligibility: ['Top 1-2% of class'],
        documents: ['School Transcripts'],
        link: 'https://www.monash.edu/study/fees-scholarships'
      },
      {
        name: 'UNSW International Student Awards',
        amount: 'AUD 10,000',
        levels: ['Bachelor\'s', 'Master\'s'],
        deadline: 'Automatic',
        eligibility: ['High academic achievement'],
        documents: ['Transcripts'],
        link: 'https://www.scholarships.unsw.edu.au/'
      }
    ],
    hec: [
      {
        name: 'HEC-Australia Joint Scholarships',
        amount: 'Fully Funded',
        levels: ['PhD'],
        deadline: 'Varies (Check HEC Portal)',
        eligibility: ['Pakistani national', 'Minimum 1st Division in entire career'],
        documents: ['HEC Application', 'Research Proposal', 'NOC'],
        link: 'https://www.hec.gov.pk/'
      }
    ],
    research: [
      {
        name: 'Research Training Program (RTP)',
        amount: 'Fully Funded (Tuition + Stipend)',
        levels: ['PhD', 'Master\'s by Research'],
        deadline: 'Varies by university',
        eligibility: ['Outstanding research potential'],
        documents: ['Research Proposal', 'Publications', 'Supervisor Acceptance'],
        link: 'https://www.education.gov.au/research-training-program'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Scholarships in Australia for Pakistani Students | MoveAbroad.pk"
        description="Find fully funded and partial scholarships in Australia including Australia Awards, Destination Australia, and University-specific awards."
        canonicalPath="/study/australia/scholarships"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Scholarships" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarships in Australia</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Explore government and university scholarships available to Pakistani students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          <button
            onClick={() => setActiveTab('government')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'government' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Australian Government
          </button>
          <button
            onClick={() => setActiveTab('university')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'university' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            University Specific
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'research' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Research (PhD/MPhil)
          </button>
          <button
            onClick={() => setActiveTab('hec')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'hec' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            HEC Pakistan
          </button>
        </div>

        {/* Scholarships List */}
        <div className="space-y-6">
          {scholarships[activeTab].map((scholarship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{scholarship.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {scholarship.levels.map(level => (
                      <span key={level} className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Amount</div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">{scholarship.amount}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Eligibility</h4>
                  <ul className="space-y-1">
                    {scholarship.eligibility.map((req, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Required Documents</h4>
                  <ul className="space-y-1">
                    {scholarship.documents.map((doc, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-0">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Deadline:</span> {scholarship.deadline}
                </div>
                <a
                  href={scholarship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl transition-colors text-sm font-medium group"
                >
                  Official Details
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
