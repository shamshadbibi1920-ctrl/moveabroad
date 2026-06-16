import { CountryData } from './types';

export const uk: CountryData = {
  id: 'uk',
  name: 'United Kingdom',
  flag: '🇬🇧',
  overview: 'The UK is home to some of the world\'s oldest and most prestigious universities. With the Graduate Route visa, students can stay for 2 years (3 years for PhDs) after completing their degree. It also recruits heavily from abroad for the NHS.',
  costOfLiving: '£1,000 - £1,500 per month (UKVI requires £1,334/month for London, £1,023/month outside London).',
  languageRequirements: 'IELTS UKVI Academic (usually 6.0/6.5) or PTE Academic UKVI. For healthcare professionals, OET or IELTS is strictly enforced.',
  tuitionFees: '£14,000 - £30,000 per year depending on the institution and subject (Clinical degrees are much higher).',
  scholarships: [
    'Chevening Scholarships',
    'Commonwealth Scholarships',
    'GREAT Scholarships',
    'University-specific Vice-Chancellor\'s awards'
  ],
  studentVisaInfo: [
    'Confirmation of Acceptance for Studies (CAS) from a licensed sponsor',
    'Proof of funds for tuition and 9 months of living costs',
    'ATAS Certificate (for certain science/engineering degrees)',
    'Tuberculosis test results',
    'Immigration Health Surcharge (IHS) payment'
  ],
  workVisaInfo: [
    'Graduate Route Visa (Post-Study Work) for 2 years',
    'Skilled Worker Visa (Requires employer sponsorship and minimum salary threshold)',
    'Health and Care Worker Visa (fast-track and lower fees for NHS and care workers)',
    'Global Talent Visa for highly distinguished individuals'
  ],
  accommodation: 'University halls of residence, private student hubs (e.g. Unite Students), or private rental housing.',
  studyApplicationProcess: [
    'Choose universities and courses (up to 5 for undergraduate via UCAS)',
    'Prepare Personal Statement and reference letters',
    'Submit application via UCAS (undergrad) or directly (postgrad)',
    'Receive Conditional/Unconditional offer',
    'Pay deposit to secure the CAS',
    'Apply for the Student Visa'
  ],
  studyIntakes: ['Autumn (September/October - Main)', 'Spring (January/February)'],
  universities: [
    { id: 'u1', name: 'University of Oxford', city: 'Oxford', type: 'Public', tuitionFeeRange: '£30,000 - £45,000', popularPrograms: ['Humanities', 'Medicine', 'Law'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://ox.ac.uk' },
    { id: 'u2', name: 'University of Cambridge', city: 'Cambridge', type: 'Public', tuitionFeeRange: '£30,000 - £45,000', popularPrograms: ['Engineering', 'Sciences', 'Economics'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://cam.ac.uk' },
    { id: 'u3', name: 'Imperial College London', city: 'London', type: 'Public', tuitionFeeRange: '£35,000 - £42,000', popularPrograms: ['Engineering', 'Medicine', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://imperial.ac.uk' },
    { id: 'u4', name: 'University of Manchester', city: 'Manchester', type: 'Public', tuitionFeeRange: '£22,000 - £32,000', popularPrograms: ['Business', 'Computer Science', 'Social Sciences'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://manchester.ac.uk' },
    { id: 'u5', name: 'BPP University', city: 'London', type: 'Private', tuitionFeeRange: '£12,000 - £20,000', popularPrograms: ['Law (SQE)', 'Business', 'Accounting'], levels: ['Bachelor', 'Master'], website: 'https://bpp.com' }
  ],
  healthcarePathways: {
    doctor: {
      overview: 'The NHS is the largest employer of IMGs. The PLAB route is the standard pathway for doctors.',
      registrationBoard: 'General Medical Council (GMC)',
      exams: ['PLAB Part 1 (Written)', 'PLAB Part 2 (OSCE)'],
      languageRequirements: 'IELTS Academic (7.0 in all bands, 7.5 overall) or OET Medicine (Grade B)',
      process: [
        'Open GMC online account and verify Primary Medical Qualification via EPIC',
        'Pass OET or IELTS',
        'Book and pass PLAB 1 (offered in multiple countries)',
        'Travel to UK to pass PLAB 2 (Clinical skills in Manchester)',
        'Apply for GMC full Registration with a License to Practice',
        'Apply for NHS jobs on NHS Jobs/Trac systems'
      ]
    },
    nurse: {
      overview: 'The NHS recruits heavily from overseas. The NMC manages registration for nurses and midwives.',
      registrationBoard: 'Nursing and Midwifery Council (NMC)',
      exams: ['CBT (Computer Based Test)', 'OSCE (Objective Structured Clinical Examination)'],
      languageRequirements: 'IELTS Academic (7.0, with 6.5 in writing) or OET Nursing (B, with C+ in writing)',
      process: [
        'Create NMC account and complete initial eligibility assessment',
        'Pass CBT exam (offered globally)',
        'Provide health, character, and language evidence',
        'Relocate to UK via Health and Care Visa (often sponsored by NHS trust/agency)',
        'Pass the OSCE in the UK within weeks of arrival',
        'Receive NMC PIN and practice as an RN'
      ]
    }
  },
  officialLinks: [
    { name: 'UKVI / Gov.uk', url: 'https://www.gov.uk/browse/visas-immigration' },
    { name: 'UCAS', url: 'https://www.ucas.com/' },
    { name: 'GMC (Doctors)', url: 'https://www.gmc-uk.org/' },
    { name: 'NMC (Nurses)', url: 'https://www.nmc.org.uk/' }
  ]
};
