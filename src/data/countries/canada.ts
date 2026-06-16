import { CountryData } from './types';
import { canadaUniversities } from './canadaUniversities';

export const canada: CountryData = {
  id: 'canada',
  name: 'Canada',
  flag: '🇨🇦',
  heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80',
  overview: 'Canada is highly sought after for its safe environment, high academic standards, and friendly immigration policies. The Post-Graduation Work Permit (PGWP) and comprehensive PR pathways make it an attractive choice for both studying and working.',
  costOfLiving: 'CAD 1,500 - CAD 2,500 per month depending on the province and whether you live in a major city like Toronto/Vancouver.',
  languageRequirements: 'IELTS Academic (usually 6.5+ with no band below 6.0) or TOEFL (90+). For work visas and PR, IELTS General or CELPIP is required.',
  tuitionFees: 'Public Universities: CAD 15,000 - CAD 45,000/year. Private Universities/Colleges: CAD 18,000 - CAD 35,000/year.',
  scholarships: [
    'Vanier Canada Graduate Scholarships',
    'Trudeau Foundation Scholarships',
    'University-specific entrance scholarships',
    'Ontario Graduate Scholarship (OGS)'
  ],
  studentVisaInfo: [
    'Letter of Acceptance from a Designated Learning Institution (DLI)',
    'Provincial Attestation Letter (if applicable depending on level of study)',
    'Proof of funds (Guaranteed Investment Certificate - GIC of CAD 20,635)',
    'Medical examination and police clearance',
    'IELTS/Language test results'
  ],
  workVisaInfo: [
    'Post-Graduation Work Permit (PGWP) for eligible international graduates (up to 3 years)',
    'Express Entry System (Federal Skilled Worker, Canadian Experience Class)',
    'Provincial Nominee Programs (PNP) for region-specific skilled workers',
    'Employer-specific closed work permits (requires LMIA)'
  ],
  accommodation: 'On-campus dormitories (CAD 8,000 - 12,000/year), off-campus shared apartments, or homestays.',
  studyApplicationProcess: [
    'Research programs and check if the institution is a DLI (Designated Learning Institution)',
    'Ensure you meet language (IELTS/TOEFL) and academic prerequisites',
    'Apply directly to the university or via provincial portals like OUAC (Ontario)',
    'Receive Letter of Acceptance (LOA) and Provincial Attestation Letter (if required)',
    'Set up a GIC (Guaranteed Investment Certificate) to show proof of funds',
    'Apply for the Canadian Study Permit'
  ],
  studyIntakes: ['Fall (September)', 'Winter (January)', 'Summer (May - limited programs)'],
  universities: canadaUniversities,
  healthcarePathways: {
    doctor: {
      overview: 'Foreign doctors (IMGs) must go through the Medical Council of Canada (MCC) to get licensed. It is notoriously competitive and lengthy.',
      registrationBoard: 'Medical Council of Canada (MCC) & Provincial Colleges',
      exams: ['MCCQE Part I', 'NAC OSCE (National Assessment Collaboration)', 'Provincial assessments'],
      languageRequirements: 'IELTS Academic (at least 7.0 in each band) or OET Medicine',
      process: [
        'Verify medical degree through PhysiciansApply.ca (ECFMG equivalent)',
        'Pass the MCCQE Part I',
        'Pass the NAC OSCE for clinical skills assessment',
        'Apply for residency positions through the Canadian Resident Matching Service (CaRMS)',
        'Complete residency (2-5 years depending on specialty)',
        'Register with the provincial medical regulatory authority'
      ]
    },
    nurse: {
      overview: 'Internationally Educated Nurses (IENs) must apply through the National Nursing Assessment Service (NNAS) to get their credentials evaluated.',
      registrationBoard: 'NNAS & Provincial Regulatory Bodies (e.g., CNO in Ontario)',
      exams: ['NCLEX-RN (for Registered Nurses)'],
      languageRequirements: 'IELTS Academic or CELPIP',
      process: [
        'Open an account with NNAS and submit educational and professional documents',
        'NNAS evaluates the curriculum against Canadian standards',
        'Apply to the provincial nursing regulatory body (e.g., College of Nurses of Ontario)',
        'Complete OSCE or bridging programs if asked by the province',
        'Pass the NCLEX-RN examination',
        'Apply for final registration and secure a job'
      ]
    }
  },
  officialLinks: [
    { name: 'IRCC (Immigration, Refugees and Citizenship Canada)', url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' },
    { name: 'EduCanada', url: 'https://www.educanada.ca/' },
    { name: 'CaRMS (Medical Residency)', url: 'https://www.carms.ca/' }
  ]
};
