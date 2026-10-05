export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
  qualifications?: string;
  avatar?: string;
}

export const FOUNDER: AuthorProfile = {
  name: "Dr. M. Malik",
  role: "Founder & Lead Editor",
  bio: "MBBS graduate from Pakistan. Focuses on practical, source-based guidance for Pakistani students, doctors, and skilled professionals pursuing study, work, and licensing pathways abroad.",
  qualifications: "MBBS (Pakistan)"
};

export const EDITORIAL_TEAM: AuthorProfile = {
  name: "MoveAbroad.pk Editorial Team",
  role: "Editorial Team",
  bio: "The MoveAbroad.pk editorial team researches and publishes informational guides regarding international education, employment pathways, immigration processes, and professional licensing for Pakistani students and professionals."
};

export const SHAMSHAD_BIBI: AuthorProfile = {
  name: "Shamshad Bibi",
  role: "Higher Education Contributor",
  bio: "Researcher and contributor at MoveAbroad.pk specializing in European university admissions, Nordic higher education pathways, and fully funded scholarship strategies for Pakistani students.",
  qualifications: "Education & Admissions Researcher"
};

export const DR_HAKEEM: AuthorProfile = {
  name: "Dr Hakeem",
  role: "Physiotherapy & Allied Health Specialist",
  bio: "Doctor of Physical Therapy and clinical migration analyst specializing in Australian Health Practitioner Regulation Agency (Ahpra) licensing, Australian Physiotherapy Council (APC) APEP assessments, and skilled migration pathways for Pakistani rehabilitation professionals.",
  qualifications: "DPT, Allied Health Migration Specialist"
};

export const DR_M_HALEEM: AuthorProfile = {
  name: "Dr M.Haleem",
  role: "Physical Therapy & European Licensure Specialist",
  bio: "Senior physical therapy educator and European medical migration specialist focusing on German professional recognition (Anerkennung), Defizitbescheid compensation pathways, B2 medical language preparation, and German healthcare workforce integration for Pakistani rehabilitation clinicians.",
  qualifications: "DPT, German Healthcare Recognition Specialist"
};

export const DR_HALEEM: AuthorProfile = {
  name: "Dr Haleem",
  role: "Physical Therapy & European Licensure Specialist",
  bio: "Senior physical therapy educator and European medical migration specialist analyzing Scandinavian and Nordic healthcare recognition policies, STPS licensing requirements, German Anerkennung, and practical international mobility strategies for Pakistani rehabilitation clinicians.",
  qualifications: "DPT, European Healthcare Licensure Specialist"
};

export const DEFAULT_AUTHOR = FOUNDER;

