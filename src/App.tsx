import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Core pages
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

// Dynamic destination pages
const StudyDestination = React.lazy(() => import('./pages/StudyDestination'));
const WorkDestination = React.lazy(() => import('./pages/WorkDestination'));
const HealthcareDestination = React.lazy(() => import('./pages/HealthcareDestination'));
const GermanyApplicationProcess = React.lazy(() => import('./pages/GermanyApplicationProcess'));
const GermanyUniversities = React.lazy(() => import('./pages/GermanyUniversities'));
const GermanyScholarships = React.lazy(() => import('./pages/GermanyScholarships'));
const GermanyVisaProcess = React.lazy(() => import('./pages/GermanyVisaProcess'));
const GermanyNoIelts = React.lazy(() => import('./pages/GermanyNoIelts'));
const GermanyCostOfLiving = React.lazy(() => import('./pages/GermanyCostOfLiving'));
const GermanyAccommodation = React.lazy(() => import('./pages/GermanyAccommodation'));
const GermanyIntakeDeadlines = React.lazy(() => import('./pages/GermanyIntakeDeadlines'));
const GermanyOfficialLinks = React.lazy(() => import('./pages/GermanyOfficialLinks'));

const CanadaUniversities = React.lazy(() => import('./pages/CanadaUniversities'));
const CanadaScholarships = React.lazy(() => import('./pages/CanadaScholarships'));
const CanadaVisaProcess = React.lazy(() => import('./pages/CanadaVisaProcess'));
const CanadaApplicationProcess = React.lazy(() => import('./pages/CanadaApplicationProcess'));
const CanadaNoIelts = React.lazy(() => import('./pages/CanadaNoIelts'));
const CanadaCostOfLiving = React.lazy(() => import('./pages/CanadaCostOfLiving'));
const CanadaAccommodation = React.lazy(() => import('./pages/CanadaAccommodation'));
const CanadaIntakeDeadlines = React.lazy(() => import('./pages/CanadaIntakeDeadlines'));

// Study in UK Pages
const UkUniversities = React.lazy(() => import('./pages/study/uk/UkUniversities'));
const UkScholarships = React.lazy(() => import('./pages/study/uk/UkScholarships'));
const UkVisaProcess = React.lazy(() => import('./pages/study/uk/UkVisaProcess'));
const UkApplicationProcess = React.lazy(() => import('./pages/study/uk/UkApplicationProcess'));
const UkNoIelts = React.lazy(() => import('./pages/study/uk/UkNoIelts'));
const UkCostOfLiving = React.lazy(() => import('./pages/study/uk/UkCostOfLiving'));
const UkAccommodation = React.lazy(() => import('./pages/study/uk/UkAccommodation'));
const UkIntakeDeadlines = React.lazy(() => import('./pages/study/uk/UkIntakeDeadlines'));

// Healthcare Canada Doctor Pathways
const CanadaDoctorCaRMS = React.lazy(() => import('./pages/healthcare/CanadaDoctorCaRMS'));
const CanadaDoctorFellowship = React.lazy(() => import('./pages/healthcare/CanadaDoctorFellowship'));
const CanadaDoctorPRA = React.lazy(() => import('./pages/healthcare/CanadaDoctorPRA'));
const CanadaDoctorPER = React.lazy(() => import('./pages/healthcare/CanadaDoctorPER'));

// Blog Pages
const GermanyOpportunityCard = React.lazy(() => import('./pages/blog/GermanyOpportunityCard'));
const DaadScholarshipGuide = React.lazy(() => import('./pages/blog/DaadScholarshipGuide'));
const SwedenWorkVisa = React.lazy(() => import('./pages/blog/SwedenWorkVisa'));
const SaudiGoldenVisa = React.lazy(() => import('./pages/blog/SaudiGoldenVisa'));
const DhaLicensingExam = React.lazy(() => import('./pages/blog/DhaLicensingExam'));
const SwedishInstituteScholarship = React.lazy(() => import('./pages/blog/SwedishInstituteScholarship'));

// Work Destinations (Germany)
const GermanyWorkIndex = React.lazy(() => import('./pages/work/GermanyWorkIndex'));
const CanadaWorkIndex = React.lazy(() => import('./pages/work/CanadaWorkIndex'));
const CanadaJobs = React.lazy(() => import('./pages/work/CanadaJobs'));
const CanadaWorkPermit = React.lazy(() => import('./pages/work/CanadaWorkPermit'));
const CanadaLmia = React.lazy(() => import('./pages/work/CanadaLmia'));
const CanadaWorkApplication = React.lazy(() => import('./pages/work/CanadaWorkApplication'));
const CanadaSalary = React.lazy(() => import('./pages/work/CanadaSalary'));
const CanadaRelocation = React.lazy(() => import('./pages/work/CanadaRelocation'));
const CanadaLanguage = React.lazy(() => import('./pages/work/CanadaLanguage'));
const GermanyJobs = React.lazy(() => import('./pages/work/GermanyJobs'));
const GermanyWorkVisa = React.lazy(() => import('./pages/work/GermanyWorkVisa'));
const GermanyWorkOpportunityCard = React.lazy(() => import('./pages/work/GermanyWorkOpportunityCard'));
const GermanyWorkApplication = React.lazy(() => import('./pages/work/GermanyWorkApplication'));
const GermanySalary = React.lazy(() => import('./pages/work/GermanySalary'));
const GermanyRelocation = React.lazy(() => import('./pages/work/GermanyRelocation'));
const GermanyLanguage = React.lazy(() => import('./pages/work/GermanyLanguage'));

// Work in UK Pages
const UkWorkIndex = React.lazy(() => import('./pages/work/uk/UkWorkIndex'));
const UkJobs = React.lazy(() => import('./pages/work/uk/UkJobs'));
const UkWorkVisa = React.lazy(() => import('./pages/work/uk/UkWorkVisa'));
const UkHealthCareVisa = React.lazy(() => import('./pages/work/uk/UkHealthCareVisa'));
const UkWorkApplication = React.lazy(() => import('./pages/work/uk/UkWorkApplication'));
const UkSalary = React.lazy(() => import('./pages/work/uk/UkSalary'));
const UkRelocation = React.lazy(() => import('./pages/work/uk/UkRelocation'));
const UkLanguage = React.lazy(() => import('./pages/work/uk/UkLanguage'));

// Migrate
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

export default function App() {
  return (
    <Router>
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
          <Route path="blog" element={<Blog />} />
          <Route path="blog/germany-opportunity-card-pakistan-2026" element={<GermanyOpportunityCard />} />
          <Route path="blog/daad-scholarship-pakistani-students-guide" element={<DaadScholarshipGuide />} />
          <Route path="blog/sweden-work-visa-pakistan-2026" element={<SwedenWorkVisa />} />
          <Route path="blog/saudi-arabia-golden-visa-pakistani-professionals" element={<SaudiGoldenVisa />} />
          <Route path="blog/dha-licensing-exam-pakistani-doctors" element={<DhaLicensingExam />} />
          <Route path="blog/swedish-institute-scholarships-pakistan" element={<SwedishInstituteScholarship />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          
          {/* Migrate Routes */}
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

          {/* Dynamic Routes */}
          <Route path="study/germany/universities" element={<GermanyUniversities />} />
          <Route path="study/germany/scholarships" element={<GermanyScholarships />} />
          <Route path="study/germany/visa-process" element={<GermanyVisaProcess />} />
          <Route path="study/germany/application-process" element={<GermanyApplicationProcess />} />
          <Route path="study/germany/no-ielts" element={<GermanyNoIelts />} />
          <Route path="study/germany/cost-of-living" element={<GermanyCostOfLiving />} />
          <Route path="study/germany/accommodation" element={<GermanyAccommodation />} />
          <Route path="study/germany/intake-deadlines" element={<GermanyIntakeDeadlines />} />
          <Route path="study/germany/official-links" element={<GermanyOfficialLinks />} />
          <Route path="study/canada/universities" element={<CanadaUniversities />} />
          <Route path="study/canada/scholarships" element={<CanadaScholarships />} />
          <Route path="study/canada/visa-process" element={<CanadaVisaProcess />} />
          <Route path="study/canada/application-process" element={<CanadaApplicationProcess />} />
          <Route path="study/canada/no-ielts" element={<CanadaNoIelts />} />
          <Route path="study/canada/cost-of-living" element={<CanadaCostOfLiving />} />
          <Route path="study/canada/accommodation" element={<CanadaAccommodation />} />
          <Route path="study/canada/intake-deadlines" element={<CanadaIntakeDeadlines />} />
          <Route path="study/uk/universities" element={<UkUniversities />} />
          <Route path="study/uk/scholarships" element={<UkScholarships />} />
          <Route path="study/uk/visa-process" element={<UkVisaProcess />} />
          <Route path="study/uk/application-process" element={<UkApplicationProcess />} />
          <Route path="study/uk/no-ielts" element={<UkNoIelts />} />
          <Route path="study/uk/cost-of-living" element={<UkCostOfLiving />} />
          <Route path="study/uk/accommodation" element={<UkAccommodation />} />
          <Route path="study/uk/intake-deadlines" element={<UkIntakeDeadlines />} />
          <Route path="study/:countryId" element={<StudyDestination />} />
          <Route path="work/germany" element={<GermanyWorkIndex />} />
          <Route path="work/germany/jobs" element={<GermanyJobs />} />
          <Route path="work/germany/visa" element={<GermanyWorkVisa />} />
          <Route path="work/germany/opportunity-card" element={<GermanyWorkOpportunityCard />} />
          <Route path="work/germany/application-process" element={<GermanyWorkApplication />} />
          <Route path="work/germany/salary" element={<GermanySalary />} />
          <Route path="work/germany/relocation" element={<GermanyRelocation />} />
          <Route path="work/germany/language" element={<GermanyLanguage />} />
          <Route path="work/canada" element={<CanadaWorkIndex />} />
          <Route path="work/canada/jobs" element={<CanadaJobs />} />
          <Route path="work/canada/work-permit" element={<CanadaWorkPermit />} />
          <Route path="work/canada/lmia" element={<CanadaLmia />} />
          <Route path="work/canada/application-process" element={<CanadaWorkApplication />} />
          <Route path="work/canada/salary" element={<CanadaSalary />} />
          <Route path="work/canada/relocation" element={<CanadaRelocation />} />
          <Route path="work/canada/language" element={<CanadaLanguage />} />
          <Route path="work/uk" element={<UkWorkIndex />} />
          <Route path="work/uk/jobs" element={<UkJobs />} />
          <Route path="work/uk/visa" element={<UkWorkVisa />} />
          <Route path="work/uk/health-care-visa" element={<UkHealthCareVisa />} />
          <Route path="work/uk/application-process" element={<UkWorkApplication />} />
          <Route path="work/uk/salary" element={<UkSalary />} />
          <Route path="work/uk/relocation" element={<UkRelocation />} />
          <Route path="work/uk/language" element={<UkLanguage />} />
          <Route path="work/:countryId" element={<WorkDestination />} />
          <Route path="healthcare/canada/doctor/carms-pathway" element={<CanadaDoctorCaRMS />} />
          <Route path="healthcare/canada/doctor/fellowship-pathway" element={<CanadaDoctorFellowship />} />
          <Route path="healthcare/canada/doctor/pra-pathway" element={<CanadaDoctorPRA />} />
          <Route path="healthcare/canada/doctor/per-pathway" element={<CanadaDoctorPER />} />
          <Route path="healthcare/:countryId/:professionId" element={<HealthcareDestination />} />
        </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
