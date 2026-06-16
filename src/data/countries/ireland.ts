import { CountryData } from './types';

export const ireland: CountryData = {
  id: 'ireland',
  name: 'Ireland',
  flag: '🇮🇪',
  overview: 'Ireland is a major European tech hub and the only native English-speaking country remaining in the EU. It offers a 2-year post-study work visa (Third Level Graduate Scheme) for Master’s students.',
  costOfLiving: '€1,200 - €1,800 per month. Rent, especially in Dublin, is the highest expense.',
  languageRequirements: 'IELTS Academic (6.5), TOEFL, or PTE.',
  tuitionFees: '€10,000 - €25,000 per year for non-EU students.',
  scholarships: [
    'Government of Ireland International Education Scholarships (GOI-IES)',
    'University-specific Excellence Scholarships'
  ],
  studentVisaInfo: [
    'Acceptance letter from an Irish university',
    'Financial proof of €10,000 to cover the first year of living costs',
    'Private health insurance',
    'Police clearance'
  ],
  workVisaInfo: [
    'Third Level Graduate Scheme (Stamp 1G) allows up to 2 years post-study work',
    'Critical Skills Employment Permit for high-demand occupations',
    'General Employment Permit'
  ],
  accommodation: 'On-campus housing is limited. Private student accommodations and shared housing (digs) are common.',
  studyApplicationProcess: [
    'Apply to universities (some use the PAC system, others direct)',
    'Receive offer and pay securing deposit',
    'Prepare visa documentation and proof of funds',
    'Apply for the Irish Study Visa (Stamp 2 authorization)'
  ],
  studyIntakes: ['Autumn (September) Main', 'Spring (January/February) - limited'],
  universities: [
    { id: 'ir1', name: 'Trinity College Dublin (TCD)', city: 'Dublin', type: 'Public', tuitionFeeRange: '€20,000 - 25,000', popularPrograms: ['Arts', 'Business', 'Computer Science'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://tcd.ie' },
    { id: 'ir2', name: 'University College Dublin (UCD)', city: 'Dublin', type: 'Public', tuitionFeeRange: '€19,000 - 26,000', popularPrograms: ['Engineering', 'Veterinary', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://ucd.ie' },
    { id: 'ir3', name: 'National University of Ireland Galway (NUIG)', city: 'Galway', type: 'Public', tuitionFeeRange: '€16,000 - 22,000', popularPrograms: ['Biomedical Sciences', 'IT', 'Law'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://nuigalway.ie' }
  ],
  healthcarePathways: {
    doctor: {
      overview: 'Ireland has a strong demand for IMGs. The Medical Council registers doctors.',
      registrationBoard: 'Irish Medical Council (IMC)',
      exams: ['PRES (Pre-Registration Examination System)'],
      languageRequirements: 'IELTS/OET',
      process: [
        'Apply to the IMC for assessment',
        'If exempt from PRES (e.g. holding specific post-grad qualifications), apply for registration directly',
        'If not exempt, take and pass the PRES exam',
        'Secure employment in the HSE (Health Service Executive)'
      ]
    },
    nurse: {
      overview: 'Registered Nurses from abroad must register with the NMBI.',
      registrationBoard: 'Nursing and Midwifery Board of Ireland (NMBI)',
      exams: ['RCSI Aptitude Test OR Adaptation and Assessment course'],
      languageRequirements: 'OET Nursing or IELTS',
      process: [
        'Submit qualifications to NMBI for decision letter',
        'Obtain a decision to complete the RCSI Aptitude Test or a supervised Adaptation period',
        'Pass the test or adaptation',
        'Join the NMBI register and practice'
      ]
    }
  },
  officialLinks: [
    { name: 'Education in Ireland', url: 'https://www.educationinireland.com/' },
    { name: 'Irish Naturalisation and Immigration Service (INIS)', url: 'https://www.irishimmigration.ie/' }
  ]
};
