import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { prerenderPlugin } from './scripts/prerender-plugin';

// Top primary routes for static pre-rendering (SSG)
// Generates physical HTML files so Google AdSense crawler and search engines see fully rendered content
const prerenderRoutes = [
  '/',
  '/study',
  '/work-abroad',
  '/scholarships',
  '/healthcare-abroad',
  '/country-guides',
  '/country-guides/germany',
  '/country-guides/canada',
  '/country-guides/uk',
  '/country-guides/australia',
  '/compare',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms',
  '/terms-of-service',
  '/migrate',

  // Top Study Destinations & Guides
  '/study/germany',
  '/study/germany/universities',
  '/study/germany/scholarships',
  '/study/germany/visa-process',
  '/study/germany/cost-of-living',
  '/study/germany/accommodation',
  '/study/germany/no-ielts',
  '/study/canada',
  '/study/canada/universities',
  '/study/canada/visa-process',
  '/study/canada/cost-of-living',
  '/study/canada/no-ielts',
  '/study/australia',
  '/study/uk',
  '/study/italy',

  // Top Work Destinations
  '/work/germany',
  '/work/germany/opportunity-card',
  '/work/canada',
  '/work/canada/lmia',
  '/work/australia',
  '/work/uk',
  '/work/italy',

  // High-Traffic Healthcare Licensing Hubs
  '/healthcare/germany/doctor',
  '/healthcare/germany/dentist',
  '/healthcare/uk/doctor',
  '/healthcare/uk/nurse',
  '/healthcare/australia/doctor',
  '/healthcare/canada/doctor',

  // Top Migration Pathways
  '/migrate/canada',
  '/migrate/canada/express-entry',
  '/migrate/canada/pnp',
  '/migrate/australia',
  '/migrate/germany',
  '/migrate/uk',

  // Primary Editorial & Scholarship Guides
  '/blog/how-to-open-german-blocked-account-pakistan-2026',
  '/blog/pakistani-dentist-germany-guide-2026',
  '/blog/germany-opportunity-card-pakistan-2026',
  '/blog/daad-scholarship-pakistani-students-guide',
  '/blog/sweden-work-visa-pakistan-2026',
  '/blog/saudi-arabia-golden-visa-pakistani-professionals',
  '/blog/dha-licensing-exam-pakistani-doctors',
  '/blog/swedish-institute-scholarships-pakistan',
];

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      prerenderPlugin({
        routes: prerenderRoutes,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
