const fs = require('fs');

const germanyImages = [
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80",
  "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80",
  "https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=1400&q=80"
];
let gImgIndex = 0;

const canadaImages = [
  "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1400&q=80",
  "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1400&q=80",
  "https://images.unsplash.com/photo-1561134643-668f2b97d4f9?w=1400&q=80"
];
let cImgIndex = 0;

const australiaImages = [
  "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80",
  "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1400&q=80",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1400&q=80"
];
let aImgIndex = 0;

const files = [
  // Germany Work
  'src/pages/work/GermanyWorkIndex.tsx',
  'src/pages/work/GermanyJobs.tsx',
  'src/pages/work/GermanyWorkVisa.tsx',
  'src/pages/work/GermanyWorkOpportunityCard.tsx',
  'src/pages/work/GermanyWorkApplication.tsx',
  'src/pages/work/GermanySalary.tsx',
  'src/pages/work/GermanyRelocation.tsx',
  'src/pages/work/GermanyLanguage.tsx',

  // Canada Work
  'src/pages/work/CanadaWorkIndex.tsx',
  'src/pages/work/CanadaJobs.tsx',
  'src/pages/work/CanadaWorkPermit.tsx',
  'src/pages/work/CanadaLmia.tsx',
  'src/pages/work/CanadaWorkApplication.tsx',
  'src/pages/work/CanadaSalary.tsx',
  'src/pages/work/CanadaRelocation.tsx',
  'src/pages/work/CanadaLanguage.tsx',

  // Germany Study
  'src/pages/GermanyUniversities.tsx',
  'src/pages/GermanyScholarships.tsx',
  'src/pages/GermanyVisaProcess.tsx',
  'src/pages/GermanyApplicationProcess.tsx',
  'src/pages/GermanyNoIelts.tsx',
  'src/pages/GermanyCostOfLiving.tsx',
  'src/pages/GermanyAccommodation.tsx',
  'src/pages/GermanyIntakeDeadlines.tsx',
  'src/pages/GermanyOfficialLinks.tsx',

  // Canada Study
  'src/pages/CanadaUniversities.tsx',
  'src/pages/CanadaScholarships.tsx',
  'src/pages/CanadaVisaProcess.tsx',
  'src/pages/CanadaApplicationProcess.tsx',
  'src/pages/CanadaNoIelts.tsx',
  'src/pages/CanadaCostOfLiving.tsx',
  'src/pages/CanadaAccommodation.tsx',
  'src/pages/CanadaIntakeDeadlines.tsx',
  
  // Healthcare Germany
  'src/pages/HealthcareDestination.tsx', // This contains healthcare hero banner
  // Wait, component files don't have hero banner, it's HealthcareDestination that has it
  
  // Migrate Canada
  'src/pages/migrate/CanadaMigrate.tsx',
  'src/pages/migrate/CanadaExpressEntry.tsx',
  'src/pages/migrate/CanadaPnp.tsx',
  'src/pages/migrate/CanadaAtlantic.tsx',
  'src/pages/migrate/CanadaFamilySponsorship.tsx',
  'src/pages/migrate/CanadaDocuments.tsx',
  'src/pages/migrate/CanadaProcessingTimes.tsx',

  // Migrate Australia
  'src/pages/migrate/AustraliaMigrate.tsx',
  'src/pages/migrate/AustraliaSkilledIndependent.tsx',
  'src/pages/migrate/AustraliaSkilledNominated.tsx',
  'src/pages/migrate/AustraliaEmployerSponsored.tsx',
  'src/pages/migrate/AustraliaFamilyStream.tsx',
  'src/pages/migrate/AustraliaPointsCalculator.tsx',
  'src/pages/migrate/AustraliaDocuments.tsx'
];

function getDetailsForContent(content, filename) {
  let titleMatch = content.match(/<(?:motion\.)?h1[^>]*>([\s\S]*?)<\/(?:motion\.)?h1>/);
  let title = titleMatch ? titleMatch[1].trim() : 'Page Title';
  // Check if title has a span or something, strip html
  title = title.replace(/<[^>]+>/g, '').trim();

  let descMatch = content.match(/<(?:motion\.)?p[^>]*text-blue-100[^>]*>([\s\S]*?)<\/(?:motion\.)?p>/) || 
                  content.match(/<(?:motion\.)?p[^>]*mb-8[^>]*>([\s\S]*?)<\/(?:motion\.)?p>/) ||
                  content.match(/<(?:motion\.)?p[^>]*leading-[^>]*>([\s\S]*?)<\/(?:motion\.)?p>/);
  let desc = 'Explore comprehensive guides and resources for moving abroad.';
  if (descMatch) {
    desc = descMatch[1].replace(/<[^>]+>/g, '').trim();
  }

  // Find back link
  let backLinkMatch = content.match(/<Link[^>]*to="([^"]+)"[^>]*>([\s\S]*?)<\/Link>/);
  let backHref = '/', backText = 'Back';
  if (backLinkMatch) {
    backHref = backLinkMatch[1];
    backText = backLinkMatch[2].replace(/<[^>]+>/g, '').trim();
  }

  return { title, desc, backHref, backText };
}

function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipped: ${filePath} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // skip if it's not a page/component with standard hero (some are components)
  if (!content.includes('<h1') && !content.includes('<motion.h1')) {
    console.log(`Skipped: ${filePath} (no h1)`);
    return;
  }

  let isGermany = filePath.toLowerCase().includes('germany');
  let isCanada = filePath.toLowerCase().includes('canada');
  let isAustralia = filePath.toLowerCase().includes('australia');
  
  // if generic like HealthcareDestination, check dynamically
  if (filePath.includes('HealthcareDestination')) {
     // Healthcare destination has dynamic hero, replace the whole Hero with the new format
     content = content.replace(
       /<div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
       `{/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={\`\${countryName} skyline\`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
              loading="eager"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-teal-900"></div>
          )}
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/30 backdrop-blur-md border border-teal-400/30 text-teal-50 text-sm font-semibold mb-6">
              <HeartPulse className="w-4 h-4 mr-2" /> Global Healthcare
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {professionName}s in {countryName} {data.flag}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-teal-100 mb-8 leading-relaxed">
              Complete licensing pathway, exam preparation, and career guide for Pakistani {professionName.toLowerCase()}s relocating to {countryName}.
            </motion.p>
          </motion.div>
        </div>
      </div>`
     );
     fs.writeFileSync(filePath, content);
     console.log(`Updated: ${filePath} dynamically`);
     return;
  }

  let flag = '';
  let badgeName = '';
  let imgUrl = germanyImages[0];

  if (isGermany) {
    flag = '🇩🇪';
    badgeName = 'Germany Guide';
    imgUrl = germanyImages[gImgIndex];
    gImgIndex = (gImgIndex + 1) % 3;
  } else if (isCanada) {
    flag = '🇨🇦';
    badgeName = 'Canada Guide';
    imgUrl = canadaImages[cImgIndex];
    cImgIndex = (cImgIndex + 1) % 3;
  } else if (isAustralia) {
    flag = '🇦🇺';
    badgeName = 'Australia Guide';
    imgUrl = australiaImages[aImgIndex];
    aImgIndex = (aImgIndex + 1) % 3;
  }

  let { title, desc, backHref, backText } = getDetailsForContent(content, filePath);
  
  // Ensure title ends with flag if not already there
  if (!title.includes(flag)) {
    title = title + ' ' + flag;
  }

  // some files have 'Back to Work In Germany', we remove ArrowLeft from text
  backText = backText.replace(/&larr;/g, '').replace(/←/g, '').trim();

  // Find the exact outer div of the hero banner. 
  // It usually starts with <div className="... relative bg-blue-900..." or similar 
  // Or <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
  // Since there are multiple styles, we can replace everything between
  // {/* Hero Section */} or {/* Hero Banner */}
  // and <div className="max-w-7xl mx-auto px-4
  // using regex is hard. Let's use string operations.
  
  const heroIndicators = ["{/* Hero Section */}", "{/* Hero Banner */}"];
  let startIdx = content.indexOf(heroIndicators[0]);
  if (startIdx === -1) startIdx = content.indexOf(heroIndicators[1]);
  if (startIdx === -1) {
    // Try to find the outer div directly
    let match = content.match(/<div className="relative[^>]*bg-blue-900[^>]*>/) ||
                content.match(/<div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900/) ||
                content.match(/<div className="bg-slate-900 py-16 border-b/);
    if (match) {
      startIdx = match.index;
    }
  }
  
  if (startIdx === -1) {
    console.log(`Skipped: ${filePath} (No Hero Marker)`);
    return;
  }

  let nextSectionMarker = '<div className="max-w-';
  let endIdx = content.indexOf(nextSectionMarker, startIdx + 10);
  
  if (endIdx === -1) {
    console.log(`Skipped: ${filePath} (No end marker)`);
    return;
  }

  // Some pages have "-mt-10" which makes content overlap, let's remove -mt-10 from the next div
  let restOfContent = content.slice(endIdx);
  restOfContent = restOfContent.replace(/-mt-10|-mt-8|-mt-12/, '');

  let newHero = `{/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="${imgUrl}" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          ${backHref !== '/' ? `<Link to="${backHref}" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> ${backText}
          </Link>` : ''}
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> ${badgeName}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ${title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ${desc}
            </p>
          </motion.div>
        </div>
      </div>

      `;

  content = content.slice(0, startIdx) + newHero + restOfContent;

  // Add Globe and ArrowLeft to imports if missing
  if (!content.includes('Globe')) content = content.replace(/import \{([^}]+)\}.*lucide-react';/, "import { $1, Globe, ArrowLeft } from 'lucide-react';");
  else if (!content.includes('ArrowLeft')) content = content.replace(/import \{([^}]+)\}.*lucide-react';/, "import { $1, ArrowLeft } from 'lucide-react';");
  
  if (!content.includes('motion')) {
    content = "import { motion } from 'motion/react';\n" + content;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath} Image: ${imgUrl}`);
}

files.forEach(processFile);
