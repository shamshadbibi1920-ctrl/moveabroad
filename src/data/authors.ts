export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
}

export const EDITORIAL_TEAM: AuthorProfile = {
  name: "MoveAbroad.pk Editorial Team",
  role: "Editorial Team",
  bio: "The MoveAbroad.pk editorial team researches and publishes informational guides regarding international education, employment pathways, immigration processes, and professional licensing for Pakistani students and professionals."
};

export const DEFAULT_AUTHOR = EDITORIAL_TEAM;
