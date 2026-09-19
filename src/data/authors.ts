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

export const DEFAULT_AUTHOR = FOUNDER;

