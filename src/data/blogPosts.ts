import { FOUNDER, EDITORIAL_TEAM, AuthorProfile } from './authors';

export interface BlogPost {
  title: string;
  category: string;
  date: string; // Human-friendly display date (e.g. 'Sep 18, 2026')
  publishedAt: string; // ISO 8601 UTC timestamp for reliable comparisons (e.g. '2026-09-18T09:00:00Z')
  status?: 'published' | 'scheduled' | 'draft';
  author: string;
  authorProfile?: AuthorProfile;
  snippet: string;
  slug: string;
  image: string;
  altText: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { 
    title: 'How Pakistani Dentists Can Work in Germany — Complete Approbation Guide 2026', 
    category: 'Germany', 
    date: 'Sep 18, 2026', 
    publishedAt: '2026-09-18T09:00:00Z',
    status: 'published',
    author: FOUNDER.name, 
    authorProfile: FOUNDER,
    snippet: 'Complete guide for Pakistani dentists (BDS) to get German Approbation and work in Germany. Step-by-step process, language requirements, salary, and 2026 rule changes explained...', 
    slug: 'pakistani-dentist-germany-guide-2026',
    image: '/images/blog/pakistani-dentist-germany.jpg',
    altText: 'Modern dental clinic equipment and treatment room in Germany'
  },
  { 
    title: 'How to Get a Germany Opportunity Card (Chancenkarte) from Pakistan 2026', 
    category: 'Germany', 
    date: 'Sep 16, 2026', 
    publishedAt: '2026-09-16T09:00:00Z',
    status: 'published',
    author: EDITORIAL_TEAM.name, 
    authorProfile: EDITORIAL_TEAM,
    snippet: 'The new Opportunity Card makes it easier than ever to move to Germany as a skilled professional...', 
    slug: 'germany-opportunity-card-pakistan-2026',
    image: '/images/blog/germany-opportunity-card.jpg',
    altText: 'Modern European city skyline in Germany highlighting career opportunities'
  },
  { 
    title: 'Fully Funded DAAD Scholarships for Pakistani Students: Complete Guide', 
    category: 'Scholarships', 
    date: 'Sep 14, 2026', 
    publishedAt: '2026-09-14T09:00:00Z',
    status: 'published',
    author: EDITORIAL_TEAM.name, 
    authorProfile: EDITORIAL_TEAM,
    snippet: 'A comprehensive step-by-step guide to applying for DAAD scholarships for Masters and PhD programs...', 
    slug: 'daad-scholarship-pakistani-students-guide',
    image: '/images/blog/daad-scholarship-germany.jpg',
    altText: 'Historic German university building and academic campus'
  },
  { 
    title: 'Sweden Work Visa Processing Time for Pakistanis (2026 Update)', 
    category: 'Sweden', 
    date: 'Sep 11, 2026', 
    publishedAt: '2026-09-11T09:00:00Z',
    status: 'published',
    author: EDITORIAL_TEAM.name, 
    authorProfile: EDITORIAL_TEAM,
    snippet: 'Everything you need to know about the current visa processing times and requirements for moving to Sweden...', 
    slug: 'sweden-work-visa-pakistan-2026',
    image: '/images/blog/sweden-work-visa.jpg',
    altText: 'Stockholm Sweden historic waterfront and modern business district'
  },
  { 
    title: 'Saudi Arabia Golden Visa for Pakistani Professionals: Requirements', 
    category: 'Saudi Arabia', 
    date: 'Sep 08, 2026', 
    publishedAt: '2026-09-08T09:00:00Z',
    status: 'published',
    author: EDITORIAL_TEAM.name, 
    authorProfile: EDITORIAL_TEAM,
    snippet: 'Learn about the eligibility criteria for the Premium Residency program in Saudi Arabia for expats...', 
    slug: 'saudi-arabia-golden-visa-pakistani-professionals',
    image: '/images/blog/saudi-golden-visa.jpg',
    altText: 'Futuristic architectural skyline of King Abdullah Financial District in Riyadh'
  },
  { 
    title: 'DHA Licensing Exam Guide for Pakistani Doctors & Pharmacists', 
    category: 'UAE', 
    date: 'Sep 05, 2026', 
    publishedAt: '2026-09-05T09:00:00Z',
    status: 'published',
    author: FOUNDER.name, 
    authorProfile: FOUNDER,
    snippet: 'Want to practice medicine in Dubai? Here is what you need to know about preparing for the DHA exam...', 
    slug: 'dha-licensing-exam-pakistani-doctors',
    image: '/images/blog/dha-licensing-dubai.jpg',
    altText: 'Modern healthcare hospital and medical center in Dubai'
  },
  { 
    title: 'Top Swedish Institute Scholarships for Pakistani Students Explained', 
    category: 'Scholarships', 
    date: 'Sep 01, 2026', 
    publishedAt: '2026-09-01T09:00:00Z',
    status: 'published',
    author: EDITORIAL_TEAM.name, 
    authorProfile: EDITORIAL_TEAM,
    snippet: 'Discover fully funded opportunities in Sweden through the SI Scholarship for Global Professionals...', 
    slug: 'swedish-institute-scholarships-pakistan',
    image: '/images/blog/swedish-institute-scholarship.jpg',
    altText: 'Prestigious university campus and study hall in Sweden'
  },
];

/**
 * Validates whether an article is currently published based on:
 * 1. Status is not draft
 * 2. Status is published OR scheduled with a publishedAt date on or before the current time
 * Uses UTC millisecond comparison to eliminate client-side timezone bugs.
 */
export function isArticlePublished(post: BlogPost, referenceDate: Date = new Date()): boolean {
  if (post.status === 'draft') {
    return false;
  }
  
  const pubTime = new Date(post.publishedAt).getTime();
  if (isNaN(pubTime)) {
    return false;
  }

  return pubTime <= referenceDate.getTime();
}

/**
 * Returns all published articles sorted newest to oldest.
 * Filters out future/scheduled articles dynamically.
 */
export function getPublishedArticles(posts: BlogPost[] = BLOG_POSTS, referenceDate: Date = new Date()): BlogPost[] {
  return posts
    .filter((post) => isArticlePublished(post, referenceDate))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
