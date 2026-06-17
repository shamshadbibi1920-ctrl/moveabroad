const fs = require('fs');

const fixFiles = [
  'src/pages/migrate/CanadaMigrate.tsx',
  'src/pages/migrate/CanadaExpressEntry.tsx',
  'src/pages/migrate/CanadaPnp.tsx',
  'src/pages/migrate/CanadaAtlantic.tsx',
  'src/pages/migrate/CanadaFamilySponsorship.tsx',
  'src/pages/migrate/CanadaDocuments.tsx',
  'src/pages/migrate/CanadaProcessingTimes.tsx',
  'src/pages/migrate/AustraliaMigrate.tsx',
  'src/pages/migrate/AustraliaSkilledIndependent.tsx',
  'src/pages/migrate/AustraliaSkilledNominated.tsx',
  'src/pages/migrate/AustraliaEmployerSponsored.tsx',
  'src/pages/migrate/AustraliaFamilyStream.tsx',
  'src/pages/migrate/AustraliaPointsCalculator.tsx',
  'src/pages/migrate/AustraliaDocuments.tsx'
];

fixFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  
  // They have the duplicate content:
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //          <Link to="/migrate...
  //          <h1 ...
  //          <p ...
  //        </div>
  //      </div>
  // RIGHT AFTER the new hero banner `</div>`
  
  // Let's use Regex to remove it.
  // It looks like:
  /*
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to=...
          ...
      </div>
  */
  
  // The duplicated section starts exactly after `</div>\n\n`
  // We can just find `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          <Link`
  // and remove up to `</div>\n      </div>\n\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`

  const badBlockRegex = /<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">[\s\S]*?<\/div>\s*<\/div>\s*(?=<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[0-9]+)/;
  
  if (badBlockRegex.test(text)) {
    text = text.replace(badBlockRegex, '');
    fs.writeFileSync(file, text);
    console.log("Fixed " + file);
  }
});
