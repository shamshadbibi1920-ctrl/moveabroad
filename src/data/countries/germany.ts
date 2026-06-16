import { CountryData } from './types';
import { germanyUniversities } from './germanyUniversities';

export const germany: CountryData = {
  id: 'germany',
  name: 'Germany',
  flag: '🇩🇪',
  overview: 'Germany is arguably the best destination for international students seeking high-quality education at almost zero tuition fee. Known for engineering and tech programs, it offers a great blend of historic culture and modern living.',
  costOfLiving: '€850 - €1,200 per month (Blocked account required for student visa: €11,208/year).',
  languageRequirements: 'IELTS (usually 6.0 - 6.5) or TOEFL (80+) is widely accepted for English-taught programs. German language proficiency (B1/B2) is often required for healthcare professionals and significantly improves job prospects.',
  tuitionFees: 'Public universities: €0 - €1,500/semester (mostly free, just a semester contribution of €200-€350). Private universities: €10,000 - €20,000/year.',
  scholarships: [
    'DAAD Scholarships (Fully Funded)',
    'Erasmus+ Programs',
    'Heinrich Böll Foundation Scholarships',
    'Friedrich Ebert Foundation Scholarships'
  ],
  studentVisaInfo: [
    'Proof of university acceptance/admission letter',
    'Blocked account (€11,208) as financial proof',
    'Health insurance coverage for the duration of studies',
    'Valid passport and recent biometric photographs',
    'Proof of language proficiency (if applicable)'
  ],
  workVisaInfo: [
    'Opportunity Card (Chancenkarte) for job seekers based on a points system',
    'EU Blue Card for highly skilled workers (requires a job offer with minimum salary threshold)',
    '18-month Post-Study Work Visa after graduating from a German university',
    'Skilled Worker Visa for those with recognized vocational training or university degree'
  ],
  accommodation: 'Options include Studentenwerk (student union) dormitories, shared flats (WG), and private apartments. On-campus is recommended for first-year students but requires early application.',
  studyApplicationProcess: [
    'Research universities and programs via DAAD',
    'Check entry requirements and language prerequisites via uni-assist',
    'Prepare statement of purpose, recommendation letters, and transcripts',
    'Apply via uni-assist or directly to the university',
    'Receive admission letter',
    'Open blocked account, get health insurance, and apply for student visa'
  ],
  studyIntakes: ['Winter (October, deadline usually mid-July)', 'Summer (April, deadline usually mid-January)'],
  universities: germanyUniversities,
  healthcarePathways: {
    doctor: {
      overview: 'Foreign-trained doctors must obtain an Approbation (medical license) to practice in Germany. There is a very high demand for medical doctors.',
      registrationBoard: 'State Medical Chamber (Landesärztekammer)',
      exams: ['Fachsprachenprüfung (Medical German Exam)', 'Kenntnisprüfung (Medical Knowledge Exam, if degree not fully equivalent)'],
      languageRequirements: 'General German B2, Medical German C1',
      process: [
        'Learn German to B2 level and ideally Medical German to C1',
        'Apply for Approbation with the relevant state authority',
        'Receive Berufserlaubnis (temporary permit) while waiting for Approbation',
        'Pass the Fachsprachenprüfung (C1 level)',
        'Take the Kenntnisprüfung if your medical degree requires equivalence assessment',
        'Receive Approbation and apply for jobs'
      ]
    },
    nurse: {
      overview: 'Germany has a high demand for nurses. Qualifications must be recognized (Anerkennung) to work as a registered nurse.',
      registrationBoard: 'State Health Authorities (Gesundheitsamt)',
      exams: ['Kenntnisprüfung (Knowledge Test) OR Anpassungslehrgang (Adaptation Course)'],
      languageRequirements: 'German B2 level',
      process: [
        'Learn German up to B1/B2 level',
        'Apply for recognition of nursing qualifications',
        'Complete adaptation period (usually 6-12 months) or pass the knowledge exam',
        'Get full recognition (Urkunde) and start working as a registered healthcare nurse'
      ]
    },
    dentist: {
      overview: 'Foreign-trained dentists must obtain an Approbation (dental license) to practice independently in Germany.',
      registrationBoard: 'State Dental Chamber (Landeszahnärztekammer)',
      exams: ['Fachsprachenprüfung (Dental German Exam)', 'Kenntnisprüfung (Dental Knowledge Exam, if degree not fully equivalent)'],
      languageRequirements: 'General German B2, Dental German C1',
      process: [
        'Learn German to B2 level and Dental German to C1',
        'Apply for Approbation with the relevant state authority',
        'Receive Berufserlaubnis (temporary permit) while waiting for Approbation',
        'Pass the Fachsprachenprüfung (C1 level)',
        'Take the Kenntnisprüfung if your dental degree requires equivalence assessment',
        'Receive Approbation and apply for jobs'
      ]
    },
    pharmacist: {
      overview: 'Foreign-trained pharmacists must obtain an Approbation to practice as a licensed pharmacist in Germany. The demand for pharmacists is consistent.',
      registrationBoard: 'State Chamber of Pharmacists (Landesapothekerkammer)',
      exams: ['Fachsprachenprüfung (Pharmacy German Exam)', 'Kenntnisprüfung (Pharmacy Knowledge Exam, if degree not fully equivalent)'],
      languageRequirements: 'General German B2, Pharmacy German C1',
      process: [
        'Learn German to B2 level and Pharmacy German to C1',
        'Apply for Approbation with the relevant state authority',
        'Pass the Fachsprachenprüfung (C1 level)',
        'Take the Kenntnisprüfung if degree requires equivalence assessment',
        'Receive Approbation and apply for jobs'
      ]
    },
    physiotherapist: {
      overview: 'Physiotherapists are in high demand in Germany. Your qualifications must be officially recognized to practice as a certified physiotherapist.',
      registrationBoard: 'State Health and Social Affairs Office (LAGeSo or equivalent)',
      exams: ['Anpassungslehrgang (Adaptation Course) OR Kenntnisprüfung (Knowledge Test)'],
      languageRequirements: 'German B2 level',
      process: [
        'Learn German to B2 level',
        'Apply for recognition of your physiotherapy qualifications',
        'Complete an adaptation period (usually up to 6 months) or pass the knowledge exam',
        'Get full recognition (Urkunde) and state registration'
      ]
    }
  },
  officialLinks: [
    { name: 'DAAD (Study in Germany)', url: 'https://www.daad.de' },
    { name: 'Make it in Germany', url: 'https://www.make-it-in-germany.com' },
    { name: 'Federal Foreign Office', url: 'https://www.auswaertiges-amt.de' }
  ]
};
