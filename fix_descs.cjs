const fs = require('fs');

const descriptions = {
  'CanadaExpressEntry.tsx': 'The fastest and most popular pathway for skilled Pakistani professionals to obtain Canadian Permanent Residency.',
  'CanadaPnp.tsx': 'Provincial Nominee Programs (PNP) allow Canadian provinces to nominate individuals who wish to immigrate to Canada and settle in a specific province.',
  'CanadaAtlantic.tsx': "A pathway to permanent residence for skilled foreign workers and international graduates who want to work and live in 1 of Canada's 4 Atlantic provinces.",
  'CanadaFamilySponsorship.tsx': 'Sponsor your spouse, partner, or dependent children to become permanent residents of Canada.',
  'CanadaDocuments.tsx': 'A complete checklist of documents required for Canada immigration from Pakistan, ensuring a smooth application process.',
  'CanadaProcessingTimes.tsx': 'Current estimated processing times for various Canadian immigration applications specifically from Pakistan.',
  'AustraliaSkilledIndependent.tsx': 'The Subclass 189 visa is a points-tested permanent visa for skilled workers who are not sponsored by an employer or family member.',
  'AustraliaSkilledNominated.tsx': 'The Subclass 190 visa is a points-tested permanent visa for skilled workers nominated by an Australian state or territory government.',
  'AustraliaEmployerSponsored.tsx': 'The Employer Nomination Scheme (Subclass 186) visa allows skilled workers to live and work in Australia permanently based on an employer nomination.',
  'AustraliaFamilyStream.tsx': 'The Family stream allows the partner, children, parents, or dependent relatives of an Australian citizen or permanent resident to immigrate to Australia.',
  'AustraliaPointsCalculator.tsx': 'Calculate your estimated points for Australian skilled migration visas (Subclass 189, 190, and 491) to check your eligibility.',
  'AustraliaDocuments.tsx': 'A comprehensive document checklist to prepare your Australian permanent residency application from Pakistan.'
};

for (const [filename, newDesc] of Object.entries(descriptions)) {
  let filepath = 'src/pages/migrate/' + filename;
  if (!fs.existsSync(filepath)) continue;
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  // replace the text inside <p className="text-xl text-blue-100 mb-8 leading-relaxed">...</p>
  const descRegex = /<p className="text-xl text-blue-100 mb-8 leading-relaxed">[\s\S]*?<\/p>/;
  
  if (descRegex.test(content)) {
    content = content.replace(descRegex, `<p className="text-xl text-blue-100 mb-8 leading-relaxed">\n              ${newDesc}\n            </p>`);
    fs.writeFileSync(filepath, content);
    console.log("Updated description for " + filename);
  }
}
