import fs from 'fs';
import path from 'path';

function findFilesMissingSEO(dir) {
  let missing = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      missing = missing.concat(findFilesMissingSEO(fullPath));
    } else if (fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      if (!content.includes('<SEO') && !content.includes('<Helmet')) {
        missing.push(fullPath);
      }
    }
  }

  return missing;
}

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const missingFiles = findFilesMissingSEO(pagesDir);
console.log(missingFiles.length);
