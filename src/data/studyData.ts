import { MapPin, Globe, BookOpen, GraduationCap, DollarSign, Building } from 'lucide-react';

export interface University {
  id: string;
  name: string;
  city: string;
  type: 'Public' | 'Private';
  tuitionFeeRange: string;
  popularPrograms: string[];
  levels: ('Bachelor' | 'Master' | 'PhD')[];
  website: string;
}

export interface StudyData {
  overview: string;
  studentVisa: string[];
  scholarships: string;
  tuitionFees: string;
  costOfLiving: string;
  languageRequirements: string;
  accommodation: string;
  applicationProcess: string[];
  intakes: string[];
  faqs: { q: string; a: string }[];
  universities: University[];
}

const defaultUniversities = (countryName: string): University[] => [
  {
    id: '1',
    name: `National University of ${countryName}`,
    city: 'Capital City',
    type: 'Public',
    tuitionFeeRange: '$2,000 - $5,000 / year',
    popularPrograms: ['Engineering', 'Computer Science', 'Business'],
    levels: ['Bachelor', 'Master', 'PhD'],
    website: '#',
  },
  {
    id: '2',
    name: `${countryName} Institute of Technology`,
    city: 'Global Tech Hub',
    type: 'Public',
    tuitionFeeRange: '$3,000 - $6,000 / year',
    popularPrograms: ['Data Science', 'IT', 'Architecture'],
    levels: ['Bachelor', 'Master'],
    website: '#',
  },
  {
    id: '3',
    name: `International School of Business ${countryName}`,
    city: 'Financial District',
    type: 'Private',
    tuitionFeeRange: '$10,000 - $20,000 / year',
    popularPrograms: ['MBA', 'Finance', 'International Relations'],
    levels: ['Master'],
    website: '#',
  }
];

const specificData: Record<string, Partial<StudyData>> = {
  germany: {
    overview: 'Germany is arguably the best destination for international students seeking high-quality education at almost zero tuition fee. Known for engineering and tech programs, it offers a great blend of historic culture and modern living.',
    tuitionFees: 'Public universities: €0 - €1,500/semester (mostly free, just a semester contribution of €200-€350). Private universities: €10,000 - €20,000/year.',
    costOfLiving: '€850 - €1,200 per month (Blocked account required for visa: €11,208/year).',
    universities: [
      { id: 'g1', name: 'Technical University of Munich (TUM)', city: 'Munich', type: 'Public', tuitionFeeRange: '€100 - €300 / semester', popularPrograms: ['Engineering', 'Computer Science'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://tum.de' },
      { id: 'g2', name: 'Ludwig Maximilian University (LMU)', city: 'Munich', type: 'Public', tuitionFeeRange: '€100 - €300 / semester', popularPrograms: ['Medicine', 'Natural Sciences'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://lmu.de' },
      { id: 'g3', name: 'RWTH Aachen University', city: 'Aachen', type: 'Public', tuitionFeeRange: '€300 / semester', popularPrograms: ['Mechanical Engineering', 'Automotive'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://rwth-aachen.de' },
      { id: 'g4', name: 'Frankfurt School of Finance & Management', city: 'Frankfurt', type: 'Private', tuitionFeeRange: '€15,000 - €25,000 / year', popularPrograms: ['Finance', 'Management'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://frankfurt-school.de' },
    ]
  },
  canada: {
    overview: 'Canada is highly sought after for its safe environment, high academic standards, and friendly immigration policies. The Post-Graduation Work Permit (PGWP) makes it an attractive choice.',
    costOfLiving: 'CAD 1,500 - CAD 2,500 per month depending on the province.',
    tuitionFees: 'CAD 15,000 - CAD 35,000 per year for international students.',
    universities: [
      { id: 'c1', name: 'University of Toronto', city: 'Toronto', type: 'Public', tuitionFeeRange: 'CAD 40,000 - CAD 60,000 / year', popularPrograms: ['Computer Science', 'Engineering', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://utoronto.ca' },
      { id: 'c2', name: 'University of British Columbia', city: 'Vancouver', type: 'Public', tuitionFeeRange: 'CAD 35,000 - CAD 50,000 / year', popularPrograms: ['Arts', 'Science', 'Forestry'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://ubc.ca' },
      { id: 'c3', name: 'McGill University', city: 'Montreal', type: 'Public', tuitionFeeRange: 'CAD 20,000 - CAD 45,000 / year', popularPrograms: ['Medicine', 'Law', 'Engineering'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://mcgill.ca' },
      { id: 'c4', name: 'Yorkville University', city: 'Toronto', type: 'Private', tuitionFeeRange: 'CAD 15,000 - CAD 25,000 / year', popularPrograms: ['Business Administration', 'Interior Design'], levels: ['Bachelor', 'Master'], website: 'https://yorkvilleu.ca' },
    ]
  },
  uk: {
    overview: 'The UK is home to some of the world\'s most prestigious universities. With the Graduate Route visa, students can stay back for 2 years after completing their degree.',
    tuitionFees: '£12,000 - £30,000 per year depending on the course (Medical/Lab courses are higher).',
    costOfLiving: '£1,000 - £1,500 per month (£1,334/month required for London, £1,023 for outside London).',
    universities: [
      { id: 'uk1', name: 'University of Oxford', city: 'Oxford', type: 'Public', tuitionFeeRange: '£25,000 - £40,000 / year', popularPrograms: ['Humanities', 'Sciences', 'Law'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://ox.ac.uk' },
      { id: 'uk2', name: 'Imperial College London', city: 'London', type: 'Public', tuitionFeeRange: '£30,000 - £40,000 / year', popularPrograms: ['Engineering', 'Medicine', 'Business'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://imperial.ac.uk' },
      { id: 'uk3', name: 'University of Manchester', city: 'Manchester', type: 'Public', tuitionFeeRange: '£20,000 - £30,000 / year', popularPrograms: ['Business', 'Engineering', 'Social Sciences'], levels: ['Bachelor', 'Master', 'PhD'], website: 'https://manchester.ac.uk' },
      { id: 'uk4', name: 'BPP University', city: 'London', type: 'Private', tuitionFeeRange: '£10,000 - £18,000 / year', popularPrograms: ['Law', 'Business', 'Accounting'], levels: ['Bachelor', 'Master'], website: 'https://bpp.com' },
    ]
  }
};

export const getStudyData = (countryId: string): StudyData => {
  const cId = countryId.toLowerCase();
  const countryName = cId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const baseData: StudyData = {
    overview: `${countryName} is a flourishing study destination known for its global universities and dynamic student life. It offers excellent return on investment and a welcoming culture for international students.`,
    studentVisa: [
      'Proof of university acceptance/admission letter',
      'Proof of financial resources to cover living expenses and tuition',
      'Health insurance coverage for the duration of studies',
      'Valid passport and recent biometric photographs',
      'Proof of language proficiency (if applicable)'
    ],
    scholarships: `Various government, university, and private scholarships are available for international students in ${countryName}, covering partial or full tuition along with living allowances. Examples include global excellence awards and merit-based grants.`,
    tuitionFees: 'Average tuition ranges from $5,000 to $25,000 per year depending on the program and whether the university is public or private.',
    costOfLiving: 'Expect to spend around $800 to $2,000 per month on accommodation, food, utilities, and transport.',
    languageRequirements: 'IELTS (usually 6.0 - 6.5) or TOEFL (80+) is widely accepted. Duolingo may also be accepted by some institutions.',
    accommodation: 'Options include on-campus dormitories, private student apartments, and shared flatings. On-campus is recommended for first-year students.',
    applicationProcess: [
      'Research universities and programs',
      'Check entry requirements and language prerequisites',
      'Prepare statement of purpose, recommendation letters, and transcripts',
      'Apply directly or via centralized portals',
      'Receive conditional or unconditional offer',
      'Pay deposit and apply for visa'
    ],
    intakes: ['Fall (September/October)', 'Spring (January/February)'],
    faqs: [
      { q: `Can I work while studying in ${countryName}?`, a: 'Yes, international students are generally allowed to work part-time (usually 20 hours per week) during semesters and full-time during breaks.' },
      { q: `What is the post-study work visa duration?`, a: `It typically ranges from 1 to 3 years depending on the level of degree completed in ${countryName}.` }
    ],
    universities: defaultUniversities(countryName)
  };

  const specific = specificData[cId];
  if (specific) {
    return { ...baseData, ...specific };
  }
  
  return baseData;
};
