import { CountryData } from './types';

export const usa: CountryData = {
  id: 'usa',
  name: 'USA',
  flag: '🇺🇸',
  overview: 'The USA offers the most flexible education system in the world. It provides the OPT (Optional Practical Training) allowing students to work after graduation, with STEM fields offering extensions up to 3 years.',
  costOfLiving: '$1,500 - $3,000+ per month based heavily on standard of living and state (California/NY are more expensive).',
  languageRequirements: 'TOEFL iBT (80-100+), IELTS (6.5-7.0), or Duolingo English Test. GRE/GMAT/SAT is often required depending on the program.',
  tuitionFees: 'Varies dramatically. Public/State Universities: $20,000 - $40,000/year. Private Ivy/Elites: $50,000 - $80,000+/year.',
  scholarships: [
    'Fulbright Scholarships',
    'University-specific Merit Scholarships (often requiring high SAT/GRE scores)',
    'Graduate Assistantships (Teaching/Research) covering full tuition plus stipend'
  ],
  studentVisaInfo: [
    'Form I-20 issued by the university',
    'SEVIS I-901 fee receipt',
    'Proof of liquid funds covering full first year',
    'F-1 Visa application and embassy interview'
  ],
  workVisaInfo: [
    'OPT (Optional Practical Training) for 1 year post-study',
    'STEM OPT Extension granting 2 additional years for STEM graduates',
    'H-1B Visa (Lottery-based employer sponsorship)',
    'O-1 Visa for extraordinary ability'
  ],
  accommodation: 'On-campus dormitories (mandatory for first-years at many colleges), or off-campus apartments.',
  studyApplicationProcess: [
    'Take standardized tests (SAT/GRE/GMAT and TOEFL/IELTS)',
    'Apply via Common App (undergrad) or university portals (grad)',
    'Submit transcripts, Statement of Purpose, and letters of recommendation',
    'Receive admission and accept offer',
    'Receive I-20 document',
    'Book and attend F-1 Visa interview'
  ],
  studyIntakes: ['Fall (August/September)', 'Spring (January)', 'Summer (May - rare for starting)'],
  universities: [
    { id: 'us1', name: 'Massachusetts Institute of Technology (MIT)', city: 'Cambridge, MA', type: 'Private', tuitionFeeRange: '$55,000 - 65,000', popularPrograms: ['Engineering', 'Computer Science', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://mit.edu' },
    { id: 'us2', name: 'Stanford University', city: 'Stanford, CA', type: 'Private', tuitionFeeRange: '$55,000 - 65,000', popularPrograms: ['Computer Science', 'Business', 'Engineering'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://stanford.edu' },
    { id: 'us3', name: 'University of California, Berkeley (UCB)', city: 'Berkeley, CA', type: 'Public', tuitionFeeRange: '$40,000 - 50,000', popularPrograms: ['Computer Science', 'Architecture', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://berkeley.edu' },
    { id: 'us4', name: 'New York University (NYU)', city: 'New York, NY', type: 'Private', tuitionFeeRange: '$50,000 - 60,000', popularPrograms: ['Arts', 'Business', 'Law'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://nyu.edu' }
  ],
  healthcarePathways: {
    doctor: {
      overview: 'The US is the most lucrative market for doctors, but the exam system (USMLE) is highly rigorous.',
      registrationBoard: 'ECFMG & State Medical Boards',
      exams: ['USMLE Step 1', 'USMLE Step 2 CK', 'USMLE Step 3'],
      languageRequirements: 'OET Medicine is now used by ECFMG for clinical communication certification.',
      process: [
        'Obtain ECFMG Certification (requires verifying degree, passing Step 1, Step 2 CK, and OET)',
        'Apply for residency positions through the ERAS system',
        'Match into a residency program via the NRMP (National Resident Matching Program)',
        'Complete residency (3-7 years) on J-1 or H-1B Visa',
        'Pass Step 3 and apply for state medical license'
      ]
    },
    nurse: {
      overview: 'Nurses must verify credentials via CGFNS and pass the NCLEX exam to practice.',
      registrationBoard: 'State Board of Nursing & CGFNS',
      exams: ['NCLEX-RN'],
      languageRequirements: 'IELTS or TOEFL (required by the visa screen process)',
      process: [
        'Get credentials evaluated by CGFNS (Commission on Graduates of Foreign Nursing Schools)',
        'Apply to the Board of Nursing in the state you wish to practice',
        'Take and pass the NCLEX-RN exam (can be taken in various global centers)',
        'Obtain a VisaScreen Certificate',
        'Find an employer to sponsor an EB-3 immigrant visa (Green Card) or H-1B'
      ]
    }
  },
  officialLinks: [
    { name: 'EducationUSA', url: 'https://educationusa.state.gov/' },
    { name: 'USCIS', url: 'https://www.uscis.gov/' }
  ]
};
