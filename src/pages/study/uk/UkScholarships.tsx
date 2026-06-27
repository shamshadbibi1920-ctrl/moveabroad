import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, ExternalLink, GraduationCap, CheckCircle2, Clock, FileText } from 'lucide-react';
import SEO from '../../../components/SEO';

const scholarships = [
  {
    name: 'Chevening Scholarships',
    provider: 'UK Government',
    amount: 'Fully Funded (Tuition, living allowance, flights)',
    level: 'Master\'s',
    eligibility: 'Pakistani citizens with 2+ years work experience, strong leadership potential, and unconditional offer from a UK university.',
    deadline: 'Early November',
    link: 'https://www.chevening.org/scholarship/pakistan/'
  },
  {
    name: 'Commonwealth Scholarships',
    provider: 'UK Department for International Development',
    amount: 'Fully Funded (Tuition, flights, stipend)',
    level: 'Master\'s and PhD',
    eligibility: 'Pakistani citizens applying for programs related to global development. Must hold a first-class degree.',
    deadline: 'Varies (Usually Oct-Dec)',
    link: 'https://cscuk.fcdo.gov.uk/'
  },
  {
    name: 'GREAT Scholarships',
    provider: 'British Council & UK Universities',
    amount: '£10,000 minimum towards tuition',
    level: 'Postgraduate',
    eligibility: 'Specific to Pakistani passport holders applying to participating universities (varies each year).',
    deadline: 'Varies by University (Usually April/May)',
    link: 'https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships'
  },
  {
    name: 'HEC-UK Scholarships',
    provider: 'Higher Education Commission Pakistan',
    amount: 'Partial to Fully Funded',
    level: 'PhD (sometimes Master\'s)',
    eligibility: 'High academic merit, passing HEC aptitude test, bond to return to Pakistan.',
    deadline: 'Announced on HEC website',
    link: 'https://hec.gov.pk/'
  },
  {
    name: 'University Specific Scholarships',
    provider: 'Oxford, Cambridge, Edinburgh, etc.',
    amount: 'Varies (£2,000 to Full Tuition)',
    level: 'Undergraduate & Postgraduate',
    eligibility: 'Based on academic excellence. E.g., Oxford Clarendon, Cambridge Trust, Vice-Chancellor awards.',
    deadline: 'Usually aligned with application deadlines',
    link: '#'
  }
];

export default function UkScholarships() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="UK Scholarships for Pakistani Students 2026 | MoveAbroad.pk"
        description="Find fully funded and partial scholarships for Pakistani students in the UK, including Chevening, Commonwealth, and GREAT Scholarships."
        canonicalPath="/study/uk/scholarships"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Scholarship" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" /> Financial Aid & Funding
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Scholarships in the UK
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Explore prestigious fully funded and partial scholarships available specifically for Pakistani students.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" /> Important Note
          </h4>
          <p className="text-amber-800 dark:text-amber-200">
            For almost all UK scholarships (including Chevening and University-specific awards), you must first apply and secure an <strong>unconditional admission offer</strong> from a UK university. Start your university applications 9-12 months in advance.
          </p>
        </div>

        <div className="space-y-6">
          {scholarships.map((scholarship, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{scholarship.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{scholarship.provider}</p>
                </div>
                {scholarship.link !== '#' && (
                  <a href={scholarship.link} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors text-sm font-semibold whitespace-nowrap">
                    Official Site <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center"><Award className="w-4 h-4 mr-2" /> Award Amount</h4>
                    <p className="text-slate-900 dark:text-slate-200 font-medium">{scholarship.amount}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center"><GraduationCap className="w-4 h-4 mr-2" /> Study Level</h4>
                    <p className="text-slate-900 dark:text-slate-200 font-medium">{scholarship.level}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center"><FileText className="w-4 h-4 mr-2" /> Eligibility</h4>
                    <p className="text-slate-900 dark:text-slate-200 text-sm leading-relaxed">{scholarship.eligibility}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center"><Clock className="w-4 h-4 mr-2" /> Typical Deadline</h4>
                    <p className="text-slate-900 dark:text-slate-200 font-medium">{scholarship.deadline}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
