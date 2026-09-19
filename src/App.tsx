import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Core Application Pages
const Home = React.lazy(() => import('./pages/Home'));
const Scholarships = React.lazy(() => import('./pages/Scholarships'));
const WorkAbroad = React.lazy(() => import('./pages/WorkAbroad'));
const HealthcareAbroad = React.lazy(() => import('./pages/HealthcareAbroad'));
const CountryGuides = React.lazy(() => import('./pages/CountryGuides'));
const CompareCountries = React.lazy(() => import('./pages/CompareCountries'));
const Blog = React.lazy(() => import('./pages/Blog'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

// Destination Hub Overview Pages
const StudyDestination = React.lazy(() => import('./pages/StudyDestination'));
const WorkDestination = React.lazy(() => import('./pages/WorkDestination'));
const HealthcareDestination = React.lazy(() => import('./pages/HealthcareDestination'));

// Master Dynamic Guide Template for all sub-routes (eliminates thin content)
const DynamicGuideTemplate = React.lazy(() => import('./components/DynamicGuideTemplate'));

// Editorial Blog Guides
const GermanBlockedAccountGuide = React.lazy(() => import('./pages/blog/GermanBlockedAccountGuide'));
const PakistaniDentistGermany = React.lazy(() => import('./pages/blog/PakistaniDentistGermany'));
const GermanyOpportunityCard = React.lazy(() => import('./pages/blog/GermanyOpportunityCard'));
const DaadScholarshipGuide = React.lazy(() => import('./pages/blog/DaadScholarshipGuide'));
const SwedenWorkVisa = React.lazy(() => import('./pages/blog/SwedenWorkVisa'));
const SaudiGoldenVisa = React.lazy(() => import('./pages/blog/SaudiGoldenVisa'));
const DhaLicensingExam = React.lazy(() => import('./pages/blog/DhaLicensingExam'));
const SwedishInstituteScholarship = React.lazy(() => import('./pages/blog/SwedishInstituteScholarship'));

// Migration Pathway Hub & Guides
const MigrateHome = React.lazy(() => import('./pages/migrate/MigrateHome'));
const CanadaMigrate = React.lazy(() => import('./pages/migrate/CanadaMigrate'));
const CanadaExpressEntry = React.lazy(() => import('./pages/migrate/CanadaExpressEntry'));
const CanadaPnp = React.lazy(() => import('./pages/migrate/CanadaPnp'));
const CanadaFamilySponsorship = React.lazy(() => import('./pages/migrate/CanadaFamilySponsorship'));
const CanadaAtlantic = React.lazy(() => import('./pages/migrate/CanadaAtlantic'));
const CanadaDocuments = React.lazy(() => import('./pages/migrate/CanadaDocuments'));
const CanadaProcessingTimes = React.lazy(() => import('./pages/migrate/CanadaProcessingTimes'));
const GermanyMigrate = React.lazy(() => import('./pages/migrate/GermanyMigrate'));
const UkMigrate = React.lazy(() => import('./pages/migrate/UkMigrate'));
const IrelandMigrate = React.lazy(() => import('./pages/migrate/IrelandMigrate'));
const NewZealandMigrate = React.lazy(() => import('./pages/migrate/NewZealandMigrate'));
const AustraliaMigrate = React.lazy(() => import('./pages/migrate/AustraliaMigrate'));
const AustraliaSkilledIndependent = React.lazy(() => import('./pages/migrate/AustraliaSkilledIndependent'));
const AustraliaSkilledNominated = React.lazy(() => import('./pages/migrate/AustraliaSkilledNominated'));
const AustraliaEmployerSponsored = React.lazy(() => import('./pages/migrate/AustraliaEmployerSponsored'));
const AustraliaFamilyStream = React.lazy(() => import('./pages/migrate/AustraliaFamilyStream'));
const AustraliaPointsCalculator = React.lazy(() => import('./pages/migrate/AustraliaPointsCalculator'));
const AustraliaDocuments = React.lazy(() => import('./pages/migrate/AustraliaDocuments'));
const UsaEb2Niw = React.lazy(() => import('./pages/migrate/UsaEb2Niw'));
const UsaEb3 = React.lazy(() => import('./pages/migrate/UsaEb3'));
const PortugalGoldenVisa = React.lazy(() => import('./pages/migrate/PortugalGoldenVisa'));
const GreeceGoldenVisa = React.lazy(() => import('./pages/migrate/GreeceGoldenVisa'));
const SpainGoldenVisa = React.lazy(() => import('./pages/migrate/SpainGoldenVisa'));
const UaeGoldenVisa = React.lazy(() => import('./pages/migrate/UaeGoldenVisa'));
const MaltaGoldenVisa = React.lazy(() => import('./pages/migrate/MaltaGoldenVisa'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="study" element={<CountryGuides />} />
          <Route path="work-abroad" element={<CountryGuides />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="healthcare-abroad" element={<HealthcareAbroad />} />
          <Route path="healthcare-abroad/:professionId" element={<CountryGuides />} />
          <Route path="country-guides" element={<CountryGuides />} />
          <Route path="compare" element={<CompareCountries />} />

          {/* Editorial Blog Guides */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/how-to-open-german-blocked-account-pakistan-2026" element={<GermanBlockedAccountGuide />} />
          <Route path="blog/pakistani-dentist-germany-guide-2026" element={<PakistaniDentistGermany />} />
          <Route path="blog/germany-opportunity-card-pakistan-2026" element={<GermanyOpportunityCard />} />
          <Route path="blog/daad-scholarship-pakistani-students-guide" element={<DaadScholarshipGuide />} />
          <Route path="blog/sweden-work-visa-pakistan-2026" element={<SwedenWorkVisa />} />
          <Route path="blog/saudi-arabia-golden-visa-pakistani-professionals" element={<SaudiGoldenVisa />} />
          <Route path="blog/dha-licensing-exam-pakistani-doctors" element={<DhaLicensingExam />} />
          <Route path="blog/swedish-institute-scholarships-pakistan" element={<SwedishInstituteScholarship />} />

          {/* Core Info Pages */}
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="terms-of-service" element={<TermsOfService />} />

          {/* Migration Routes */}
          <Route path="migrate" element={<MigrateHome />} />
          <Route path="migrate/canada" element={<CanadaMigrate />} />
          <Route path="migrate/canada/express-entry" element={<CanadaExpressEntry />} />
          <Route path="migrate/canada/pnp" element={<CanadaPnp />} />
          <Route path="migrate/canada/family-sponsorship" element={<CanadaFamilySponsorship />} />
          <Route path="migrate/canada/atlantic" element={<CanadaAtlantic />} />
          <Route path="migrate/canada/documents" element={<CanadaDocuments />} />
          <Route path="migrate/canada/processing-times" element={<CanadaProcessingTimes />} />
          <Route path="migrate/germany" element={<GermanyMigrate />} />
          <Route path="migrate/uk" element={<UkMigrate />} />
          <Route path="migrate/ireland" element={<IrelandMigrate />} />
          <Route path="migrate/new-zealand" element={<NewZealandMigrate />} />
          <Route path="migrate/australia" element={<AustraliaMigrate />} />
          <Route path="migrate/australia/skilled-independent" element={<AustraliaSkilledIndependent />} />
          <Route path="migrate/australia/skilled-nominated" element={<AustraliaSkilledNominated />} />
          <Route path="migrate/australia/employer-sponsored" element={<AustraliaEmployerSponsored />} />
          <Route path="migrate/australia/family-stream" element={<AustraliaFamilyStream />} />
          <Route path="migrate/australia/points-calculator" element={<AustraliaPointsCalculator />} />
          <Route path="migrate/australia/documents" element={<AustraliaDocuments />} />
          <Route path="migrate/usa/eb2-niw" element={<UsaEb2Niw />} />
          <Route path="migrate/usa/eb3" element={<UsaEb3 />} />
          <Route path="migrate/golden-visa/portugal" element={<PortugalGoldenVisa />} />
          <Route path="migrate/golden-visa/greece" element={<GreeceGoldenVisa />} />
          <Route path="migrate/golden-visa/spain" element={<SpainGoldenVisa />} />
          <Route path="migrate/golden-visa/uae" element={<UaeGoldenVisa />} />
          <Route path="migrate/golden-visa/malta" element={<MaltaGoldenVisa />} />

          {/* ========================================================================= */}
          {/* DYNAMIC SUB-ROUTES (Powered by DynamicGuideTemplate & contentData.ts)      */}
          {/* ========================================================================= */}

          {/* Study: Country Overview Hubs */}
          <Route path="study/:countryId" element={<StudyDestination />} />

          {/* Study: Sub-Topics (Cost of Living, No IELTS, Visa Process, Scholarships, etc.) */}
          <Route path="study/:countryId/:topicId" element={<DynamicGuideTemplate />} />

          {/* Work: Country Overview Hubs */}
          <Route path="work/:countryId" element={<WorkDestination />} />

          {/* Work: Sub-Topics (Opportunity Card, Visa, Jobs, Salary, LMIA, etc.) */}
          <Route path="work/:countryId/:topicId" element={<DynamicGuideTemplate />} />

          {/* Healthcare: Specific Profession Guides (Doctor, Dentist, Nurse, etc.) */}
          <Route path="healthcare/:countryId/:professionId" element={<DynamicGuideTemplate />} />

          {/* Healthcare: Specific Licensing Pathway Guides (CaRMS, PLAB, AMC Standard, etc.) */}
          <Route path="healthcare/:countryId/:professionId/:pathwayId" element={<DynamicGuideTemplate />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
