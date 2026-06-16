import { CountryData } from './types';

export const saudiArabia: CountryData = {
  id: 'saudi-arabia',
  name: 'Saudi Arabia',
  flag: '🇸🇦',
  overview: 'Saudi Arabia is rapidly transforming under Vision 2030, offering numerous opportunities in engineering, IT, and healthcare with entirely tax-free salaries and large modernization projects like NEOM.',
  costOfLiving: 'SAR 3,000 - SAR 6,000 per month depending on whether accommodation is provided by the employer (which is common).',
  languageRequirements: 'Arabic is the official language. English is widely used in corporate environments, healthcare, and higher education.',
  tuitionFees: 'Often fully funded for international students via government scholarships. Private degrees range SAR 40,000 - 80,000.',
  scholarships: [
    'Saudi Government Fully Funded Scholarships for International Students',
    'KAUST Fellowship (for STEM graduates)'
  ],
  studentVisaInfo: [
    'Full medical report',
    'Police clearance certificate',
    'Attested academic degrees',
    'Visa is typically fully sponsored by the university'
  ],
  workVisaInfo: [
    'Employer-sponsored Iqama (residency permit)',
    'Premium Residency program for investors, highly skilled talent, and doctors'
  ],
  accommodation: 'Usually provided by employers in secure compounds for expats. Students receive on-campus housing.',
  studyApplicationProcess: [
    'Apply to universities via their online portals',
    'If accepted, the university provides a visa authorization number',
    'Submit degrees for attestation at the Saudi Embassy / Cultural Mission',
    'Obtain the student visa'
  ],
  studyIntakes: ['September', 'January'],
  universities: [
    { id: 'sa1', name: 'King Abdullah University of Science and Technology (KAUST)', city: 'Thuwal', type: 'Public', tuitionFeeRange: 'Fully Funded', popularPrograms: ['Engineering', 'Computer Science', 'Biological Sciences'], levels: ['Master', 'PhD'], website: 'https://kaust.edu.sa' },
    { id: 'sa2', name: 'King Saud University', city: 'Riyadh', type: 'Public', tuitionFeeRange: 'Usually Fully Funded via Scholarship', popularPrograms: ['Engineering', 'Medicine', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://ksu.edu.sa' },
    { id: 'sa3', name: 'King Fahd University of Petroleum and Minerals (KFUPM)', city: 'Dhahran', type: 'Public', tuitionFeeRange: 'Usually Fully Funded via Scholarship', popularPrograms: ['Petroleum Engineering', 'Business', 'Sciences'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://kfupm.edu.sa' }
  ],
  healthcarePathways: {
    doctor: {
      overview: 'High demand for Consultants and Specialists. Often provides luxurious tax-free packages, housing, and education for children.',
      registrationBoard: 'Saudi Commission for Health Specialties (SCFHS)',
      exams: ['SMLE (Saudi Medical Licensing Exam) or equivalent depending on rank'],
      languageRequirements: 'English is used clinically. Arabic helps with patient interaction.',
      process: [
        'Mumaris Plus account creation',
        'Dataflow verification of medical credentials',
        'Classification by SCFHS based on experience (Resident, Specialist, Consultant)',
        'Pass the relevant licensing exam if required (higher ranks like Consultants from tier-1 countries might be exempt)',
        'Find employer to sponsor Iqama and activate license'
      ]
    },
    nurse: {
      overview: 'Nurses are offered excellent packages including housing and transport.',
      registrationBoard: 'SCFHS',
      exams: ['SNLE (Saudi Nursing Licensing Exam) or Prometric equivalent'],
      languageRequirements: 'English fluency',
      process: [
        'Dataflow verification',
        'Register in Mumaris Plus',
        'Take the Prometric Exam for Nurses',
        'Obtain classification and secure employment'
      ]
    }
  },
  officialLinks: [
    { name: 'Study in Saudi', url: 'https://studyinsaudi.moe.gov.sa/' },
    { name: 'SCFHS', url: 'https://scfhs.org.sa/' }
  ]
};
