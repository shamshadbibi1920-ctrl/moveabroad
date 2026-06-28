import fs from 'fs';
import path from 'path';

const missingFiles = [
  '/src/pages/AboutUs.tsx',
  '/src/pages/Blog.tsx',
  '/src/pages/CanadaAccommodation.tsx',
  '/src/pages/CanadaApplicationProcess.tsx',
  '/src/pages/CanadaCostOfLiving.tsx',
  '/src/pages/CanadaIntakeDeadlines.tsx',
  '/src/pages/CanadaNoIelts.tsx',
  '/src/pages/CanadaScholarships.tsx',
  '/src/pages/CanadaUniversities.tsx',
  '/src/pages/CanadaVisaProcess.tsx',
  '/src/pages/CompareCountries.tsx',
  '/src/pages/ContactUs.tsx',
  '/src/pages/CountryGuides.tsx',
  '/src/pages/Disclaimer.tsx',
  '/src/pages/GermanyAccommodation.tsx',
  '/src/pages/GermanyApplicationProcess.tsx',
  '/src/pages/GermanyCostOfLiving.tsx',
  '/src/pages/GermanyIntakeDeadlines.tsx',
  '/src/pages/GermanyNoIelts.tsx',
  '/src/pages/GermanyOfficialLinks.tsx',
  '/src/pages/GermanyScholarships.tsx',
  '/src/pages/GermanyUniversities.tsx',
  '/src/pages/GermanyVisaProcess.tsx',
  '/src/pages/HealthcareAbroad.tsx',
  '/src/pages/HealthcareDestination.tsx',
  '/src/pages/PrivacyPolicy.tsx',
  '/src/pages/Scholarships.tsx',
  '/src/pages/WorkAbroad.tsx',
  '/src/pages/WorkDestination.tsx',
  '/src/pages/blog/DhaLicensingExam.tsx',
  '/src/pages/blog/GermanyOpportunityCard.tsx',
  '/src/pages/blog/SaudiGoldenVisa.tsx',
  '/src/pages/blog/SwedenWorkVisa.tsx',
  '/src/pages/blog/SwedishInstituteScholarship.tsx',
  '/src/pages/healthcare/AustraliaDentist.tsx',
  '/src/pages/healthcare/AustraliaDoctorCompetent.tsx',
  '/src/pages/healthcare/AustraliaDoctorIndex.tsx',
  '/src/pages/healthcare/AustraliaDoctorSpecialist.tsx',
  '/src/pages/healthcare/AustraliaDoctorStandard.tsx',
  '/src/pages/healthcare/AustraliaNurse.tsx',
  '/src/pages/healthcare/AustraliaPharmacist.tsx',
  '/src/pages/healthcare/AustraliaPhysiotherapist.tsx',
  '/src/pages/healthcare/CanadaDoctorCaRMS.tsx',
  '/src/pages/healthcare/CanadaDoctorFellowship.tsx',
  '/src/pages/healthcare/CanadaDoctorPER.tsx',
  '/src/pages/healthcare/CanadaDoctorPRA.tsx',
  '/src/pages/migrate/AustraliaDocuments.tsx',
  '/src/pages/migrate/AustraliaEmployerSponsored.tsx',
  '/src/pages/migrate/AustraliaFamilyStream.tsx',
  '/src/pages/migrate/AustraliaPointsCalculator.tsx',
  '/src/pages/migrate/GreeceGoldenVisa.tsx',
  '/src/pages/migrate/IrelandMigrate.tsx',
  '/src/pages/migrate/MaltaGoldenVisa.tsx',
  '/src/pages/migrate/NewZealandMigrate.tsx',
  '/src/pages/migrate/SpainGoldenVisa.tsx',
  '/src/pages/migrate/UaeGoldenVisa.tsx',
  '/src/pages/migrate/UsaEb2Niw.tsx',
  '/src/pages/migrate/UsaEb3.tsx',
  '/src/pages/study/italy/ItalyAccommodation.tsx',
  '/src/pages/study/italy/ItalyApplicationProcess.tsx',
  '/src/pages/study/italy/ItalyCostOfLiving.tsx',
  '/src/pages/study/italy/ItalyIntakeDeadlines.tsx',
  '/src/pages/study/italy/ItalyNoIelts.tsx',
  '/src/pages/study/italy/ItalyScholarships.tsx',
  '/src/pages/study/italy/ItalyStudyIndex.tsx',
  '/src/pages/study/italy/ItalyUniversities.tsx',
  '/src/pages/study/italy/ItalyVisaProcess.tsx',
  '/src/pages/work/GermanyJobs.tsx',
  '/src/pages/work/GermanyLanguage.tsx',
  '/src/pages/work/GermanyRelocation.tsx',
  '/src/pages/work/GermanySalary.tsx',
  '/src/pages/work/GermanyWorkApplication.tsx',
  '/src/pages/work/GermanyWorkIndex.tsx',
  '/src/pages/work/GermanyWorkOpportunityCard.tsx',
  '/src/pages/work/GermanyWorkVisa.tsx',
  '/src/pages/work/australia/AustraliaJobs.tsx',
  '/src/pages/work/australia/AustraliaLanguage.tsx',
  '/src/pages/work/australia/AustraliaRelocation.tsx',
  '/src/pages/work/australia/AustraliaSalary.tsx',
  '/src/pages/work/australia/AustraliaWorkApplication.tsx',
  '/src/pages/work/australia/AustraliaWorkIndex.tsx',
  '/src/pages/work/australia/AustraliaWorkVisa.tsx',
  '/src/pages/work/uk/UkWorkIndex.tsx'
];

for (const relPath of missingFiles) {
  const fullPath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Fix the ASI issue
  content = content.replace(/return\s*\n\s*<>/g, 'return (\n    <>');
  
  // Fix the import paths
  const parts = relPath.split('/').filter(Boolean); // e.g. ['src', 'pages', 'AboutUs.tsx'] -> length 3
  const depth = parts.length - 2; // e.g. pages is depth 1, blog is 2, etc.
  let seoPath = '';
  if (depth === 1) seoPath = '../../components/SEO';
  else if (depth === 2) seoPath = '../../../components/SEO';
  else if (depth === 3) seoPath = '../../../../components/SEO';
  else seoPath = '../../components/SEO';

  content = content.replace(/import SEO from '.*?';/g, `import SEO from '${seoPath}';`);
  
  fs.writeFileSync(fullPath, content, 'utf-8');
}

console.log("Fixed files.");
