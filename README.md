# MoveAbroad.pk

MoveAbroad.pk is an informational guidance portal and pathway navigator designed specifically for Pakistani students, skilled workers, and healthcare professionals (doctors, dentists, nurses, pharmacists, and physiotherapists) planning to study, work, and migrate abroad.

The platform provides step-by-step guides, eligibility breakdowns, visa requirements, cost calculators, scholarship directories, and official application pathways for key destination countries including Germany, Canada, the United Kingdom, Australia, Italy, Sweden, and Saudi Arabia.

## Features

- **Study Abroad Pathways**: University listings, scholarship opportunities (DAAD, Swedish Institute, Chevening, Australia Awards), visa requirements, block account info, and admission timelines.
- **Skilled Migration Guides**: Opportunity Card (Chancenkarte), skilled worker visas, point-based immigration assessments, and work permit checklists.
- **Healthcare Licensing Hub**: Detailed licensing roadmaps for Pakistani doctors, dentists, nurses, pharmacists, and physiotherapists (including DHA UAE, PMDC verifications, CaRMS/PRA Canada, AMC Australia, and German Approbation).
- **Interactive Tools**: Points calculators, cost of living estimates, intake deadline calendars, and comparison tools.

## Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **SEO & Social Sharing**: React Helmet Async with Schema.org JSON-LD and Open Graph integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. Clone or download the repository.
2. Install project dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the local development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
Build output files will be generated in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

### Code Quality

To validate TypeScript types across the project:
```bash
npm run lint
```

## Deployment

The application is a client-side Single Page Application (SPA) that compiles to static assets in `dist/`. It can be hosted on:
- Google Cloud Run (containerized nginx or static web server)
- Vercel (configured via `vercel.json`)
- Netlify, Firebase Hosting, Cloudflare Pages, or AWS S3/CloudFront

SPA fallback routing must redirect all non-file route requests to `/index.html`.
