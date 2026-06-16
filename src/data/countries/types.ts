export interface University {
  id: string;
  name: string;
  city: string;
  type: string;
  tuitionFeeRange: string;
  popularPrograms: string[];
  levels?: ('Bachelor' | 'Master' | 'PhD')[];
  website: string;
  minimumEntryRequirement?: string;
  englishProgramsAvailable?: string;
  applicationDeadline?: string;
  region?: string;
}

export interface HealthcarePathway {
  overview?: string;
  registrationBoard?: string;
  exams?: string[];
  languageRequirements?: string;
  process?: string[];
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  overview?: string;
  universities?: University[];
  scholarships?: string[];
  studentVisaInfo?: string[];
  workVisaInfo?: string[];
  costOfLiving?: string;
  languageRequirements?: string;
  healthcarePathways?: Record<string, HealthcarePathway>; 
  officialLinks?: { name: string; url: string }[];
  
  tuitionFees?: string;
  accommodation?: string;
  studyApplicationProcess?: string[];
  studyIntakes?: string[];
  heroImage?: string;
}
