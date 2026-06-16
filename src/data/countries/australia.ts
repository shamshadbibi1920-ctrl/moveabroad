import { CountryData } from './types';

export const australia: CountryData = {
  id: 'australia',
  name: 'Australia',
  flag: '🇦🇺',
  overview: 'Australia offers world-class education, excellent weather, and a multicultural society. It is highly favored for its Temporary Graduate visa (subclass 485) and pathways to permanent residency (PR) for skilled professionals.',
  costOfLiving: 'AUD 2,000 - AUD 3,000 per month. Financial requirement for visa is approximately AUD 24,505 per year.',
  languageRequirements: 'IELTS (usually 6.5 with no band under 6.0), PTE Academic (usually 58+), or TOEFL. English requirements for immigration and healthcare are stricter.',
  tuitionFees: 'Public/Private Universities: AUD 30,000 - AUD 50,000/year depending on the degree.',
  scholarships: [
    'Australia Awards Scholarships',
    'Destination Australia Scholarships',
    'University-specific merit scholarships',
    'Research Training Program (RTP)'
  ],
  studentVisaInfo: [
    'Confirmation of Enrolment (CoE) from an Australian institution',
    'Genuine Student (GS) requirement documentation',
    'Overseas Student Health Cover (OSHC)',
    'Proof of sufficient funds (liquid assets)',
    'English proficiency test results'
  ],
  workVisaInfo: [
    'Temporary Graduate visa (subclass 485) for post-study work',
    'Skilled Independent visa (subclass 189)',
    'Skilled Nominated visa (subclass 190)',
    'Temporary Skill Shortage visa (subclass 482) - employer sponsored'
  ],
  accommodation: 'Managed student accommodations, residential colleges on-campus, or private rentals/share houses.',
  studyApplicationProcess: [
    'Choose a course and check the CRICOS code',
    'Check entry requirements and English criteria',
    'Apply directly or via an official education agent',
    'Receive Letter of Offer and pay the initial deposit/OSHC',
    'Receive the Confirmation of Enrolment (CoE)',
    'Apply for the Subclass 500 Student Visa'
  ],
  studyIntakes: ['Semester 1 (February/March)', 'Semester 2 (July)'],
  universities: [
    { id: 'a1', name: 'University of Melbourne', city: 'Melbourne', type: 'Public', tuitionFeeRange: 'AUD 40,000 - 55,000', popularPrograms: ['Business', 'Law', 'Medicine'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://unimelb.edu.au' },
    { id: 'a2', name: 'University of Sydney', city: 'Sydney', type: 'Public', tuitionFeeRange: 'AUD 45,000 - 60,000', popularPrograms: ['Architecture', 'Arts', 'Data Science'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://sydney.edu.au' },
    { id: 'a3', name: 'Monash University', city: 'Melbourne', type: 'Public', tuitionFeeRange: 'AUD 35,000 - 50,000', popularPrograms: ['Engineering', 'IT', 'Pharmacy'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://monash.edu' },
    { id: 'a4', name: 'Bond University', city: 'Gold Coast', type: 'Private', tuitionFeeRange: 'AUD 35,000 - 45,000', popularPrograms: ['Law', 'Business', 'Actuarial Science'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://bond.edu.au' }
  ],
  healthcarePathways: {
    doctor: {
      overview: 'International Medical Graduates (IMGs) are highly sought after in regional Australia. The AMC manages the primary assessment.',
      registrationBoard: 'Australian Medical Council (AMC) & AHPRA',
      exams: ['AMC MCQ Exam (Part 1)', 'AMC Clinical Exam (Part 2) or Workplace Based Assessment (WBA)'],
      languageRequirements: 'IELTS Academic (7.0 in each band) or OET Medicine (B in all components)',
      process: [
        'Verify degree with EPIC',
        'Apply for primary source verification (PSV) with AMC',
        'Pass the AMC MCQ Exam',
        'Secure a job offer and apply for provisional registration with AHPRA',
        'Pass the AMC Clinical Exam or WBA over time',
        'Gain general registration'
      ]
    },
    nurse: {
      overview: 'Registered Nurses are on the Medium and Long-term Strategic Skills List (MLTSSL). The NMBA oversees registration.',
      registrationBoard: 'Nursing and Midwifery Board of Australia (NMBA) via AHPRA',
      exams: ['NCLEX-RN', 'OSCE (Objective Structured Clinical Exam) - typically in Adelaide'],
      languageRequirements: 'IELTS Academic 7.0 (no band below 7) or OET Nursing B',
      process: [
        'Submit qualifications for assessment to AHPRA (Self-Check)',
        'Depending on curriculum match, enter the Outcomes-Based Assessment (OBA) pathway',
        'Pass the NCLEX-RN (can be taken globally)',
        'Travel to Australia to take the OSCE',
        'Apply for NMBA registration and start working'
      ]
    }
  },
  officialLinks: [
    { name: 'Department of Home Affairs', url: 'https://immi.homeaffairs.gov.au/' },
    { name: 'Study Australia', url: 'https://www.studyaustralia.gov.au/' },
    { name: 'AHPRA', url: 'https://www.ahpra.gov.au/' }
  ]
};
