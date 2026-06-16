import { CountryData } from './types';

export const uae: CountryData = {
  id: 'uae',
  name: 'UAE',
  flag: '🇦🇪',
  overview: 'The United Arab Emirates (UAE) offers tax-free income, a luxurious lifestyle, and a booming job market. It is home to many international university branch campuses and world-class healthcare infrastructure.',
  costOfLiving: 'AED 3,000 - AED 6,000+ per month depending on housing limits in Dubai/Abu Dhabi.',
  languageRequirements: 'English is the primary language of business and education. Knowing Arabic is a distinct advantage.',
  tuitionFees: 'AED 40,000 - AED 100,000+ per year mapping to top-tier Western university branch campuses.',
  scholarships: [
    'University-specific Academic Excellence Scholarships',
    'Golden Visa for Outstanding Students (offers 10-year residency)'
  ],
  studentVisaInfo: [
    'Visa is typically sponsored by the university',
    'Medical fitness test in the UAE required',
    'Emirates ID processing'
  ],
  workVisaInfo: [
    'Employer-sponsored work visas are standard',
    'Golden Visa (10-year residency) for specialized talents, doctors, and engineers',
    'Green Visa for freelancers and skilled professionals without employer sponsorship'
  ],
  accommodation: 'University-provided housing, or private apartments. Many fresh graduates share apartments to save costs.',
  studyApplicationProcess: [
    'Apply to branch campuses in Dubai (e.g., Knowledge Park) or Abu Dhabi',
    'Pay the application fee and submit high school/undergrad transcripts',
    'Receive admission and the university initiates the student visa process',
    'Travel to UAE and complete medical tests'
  ],
  studyIntakes: ['September (Main)', 'January'],
  universities: [
    { id: 'uae1', name: 'New York University Abu Dhabi (NYUAD)', city: 'Abu Dhabi', type: 'Private', tuitionFeeRange: 'AED 150,000+', popularPrograms: ['Engineering', 'Arts', 'Sciences'], levels: ['Bachelor'], website: 'https://nyuad.nyu.edu/' },
    { id: 'uae2', name: 'University of Wollongong in Dubai', city: 'Dubai', type: 'Private', tuitionFeeRange: 'AED 60,000 - 80,000', popularPrograms: ['Business', 'IT', 'Engineering'], levels: ['Bachelor', 'Master'], website: 'https://uowdubai.ac.ae/' },
    { id: 'uae3', name: 'Zayed University', city: 'Dubai/Abu Dhabi', type: 'Public', tuitionFeeRange: 'AED 80,000', popularPrograms: ['Business', 'Arts', 'Education'], levels: ['Bachelor', 'Master'], website: 'https://zu.ac.ae/' },
    { id: 'uae4', name: 'American University of Sharjah (AUS)', city: 'Sharjah', type: 'Private', tuitionFeeRange: 'AED 90,000 - 110,000', popularPrograms: ['Architecture', 'Engineering', 'Business'], levels: ['Bachelor', 'Master'], website: 'https://aus.edu/' }
  ],
  healthcarePathways: {
    doctor: {
      overview: 'Doctors enjoy tax-free salaries and excellent conditions. Registration varies by the specific emirate.',
      registrationBoard: 'DHA (Dubai), DOH/HAAD (Abu Dhabi), MOHAP (Northern Emirates)',
      exams: ['Prometric Exam specific to the licensing authority'],
      languageRequirements: 'English fluency. Passing the Prometric exam proves sufficient competency.',
      process: [
        'Complete primary source verification of credentials via Dataflow',
        'Book and pass the relevant Prometric Exam (DHA/HAAD/MOHAP)',
        'Obtain an eligibility letter',
        'Secure a job offer from an employer in that specific Emirate',
        'Employer activates the license and processes the work visa'
      ]
    },
    nurse: {
      overview: 'Massive demand for nurses across private hospitals. Process is similar to doctors.',
      registrationBoard: 'DHA, DOH/HAAD, MOHAP',
      exams: ['Registered Nurse Prometric Exam'],
      languageRequirements: 'English fluency minimum',
      process: [
        'Primary source verification via Dataflow',
        'Pass the RN Prometric Exam for the target Emirate',
        'Secure a hospital job offer',
        'Employer processes the trade license and residency visa'
      ]
    }
  },
  officialLinks: [
    { name: 'UAE Government Portal', url: 'https://u.ae/' },
    { name: 'DHA Health Regulation', url: 'https://www.dha.gov.ae/' }
  ]
};
