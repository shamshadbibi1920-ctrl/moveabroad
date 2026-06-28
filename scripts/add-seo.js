import fs from 'fs';
import path from 'path';

// Just grabbing the list of files from lacking_seo.txt generated earlier
// Wait, lacking_seo.txt was not generated properly. Let's find missing SEO again in Node.

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

function generateTitleDesc(filePath) {
  const filename = path.basename(filePath, '.tsx');
  let title = filename.replace(/([A-Z])/g, ' $1').trim(); // Convert CamelCase to words
  let desc = `Comprehensive guide to ${title.toLowerCase()} for Pakistani students and professionals moving abroad.`;

  if (filePath.includes('study/italy')) {
      if (filename === 'ItalyStudyIndex') {
          title = 'Study in Italy';
          desc = 'Complete guide to studying in Italy for Pakistani students. Find top universities, visa process, and scholarships.';
      } else {
          title = `Study in Italy: ${title.replace('Italy ', '')}`;
      }
  } else if (filePath.includes('work/australia')) {
      title = `Work in Australia: ${title.replace('Australia ', '')}`;
  } else if (filePath.includes('work/germany')) {
      title = `Work in Germany: ${title.replace('Germany ', '')}`;
  } else if (filePath.includes('work/uk')) {
      title = `Work in UK: ${title.replace('Uk ', '')}`;
  } else if (filePath.includes('work/canada') || filename.startsWith('Canada') && filePath.includes('pages/work')) {
      title = `Work in Canada: ${title.replace('Canada ', '')}`;
  } else if (filePath.includes('healthcare/australia')) {
      title = `Healthcare Careers in Australia: ${title.replace('Australia ', '')}`;
  } else if (filePath.includes('healthcare/canada')) {
      title = `Healthcare Careers in Canada: ${title.replace('Canada ', '')}`;
  } else if (filePath.includes('migrate/')) {
      title = `Migrate to ${title.replace(' Migrate', '')}`;
  } else if (filename.startsWith('Canada') && filePath.includes('pages/Canada')) {
      title = `Study in Canada: ${title.replace('Canada ', '')}`;
  } else if (filename.startsWith('Germany') && filePath.includes('pages/Germany')) {
      title = `Study in Germany: ${title.replace('Germany ', '')}`;
  }

  return {
    title: `${title} | MoveAbroad.pk`,
    desc
  };
}

let count = 0;

for (const fullPath of missingFiles) {
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  const relPath = fullPath.replace(process.cwd(), '');
  const depth = relPath.split('/').length - 3;
  let seoPath = '';
  if (depth === 0) seoPath = '../components/SEO';
  else if (depth === 1) seoPath = '../../components/SEO';
  else if (depth === 2) seoPath = '../../../components/SEO';
  else seoPath = '../../components/SEO';

  const { title, desc } = generateTitleDesc(relPath);

  const importStatement = `import SEO from '${seoPath}';\n`;
  const importMatch = content.match(/import .*?;?\n/g);
  if (importMatch) {
    const lastImport = importMatch[importMatch.length - 1];
    content = content.replace(lastImport, lastImport + importStatement);
  } else {
    content = importStatement + content;
  }

  // Instead of complex string matching, we can match the default export function
  // and insert the SEO component inside the outermost HTML tag.
  
  // Find the first return statement inside the function component
  const returnRegex = /return\s*\(\s*<([a-zA-Z0-9]+)([^>]*)>/;
  const match = content.match(returnRegex);
  
  if (match) {
    const tagName = match[1]; // e.g. div
    const tagAttrs = match[2];
    
    // Replace the matched opening tag with Fragment + SEO + opening tag
    content = content.replace(returnRegex, `return (\n    <>\n      <SEO title="${title}" description="${desc}" />\n      <${tagName}${tagAttrs}>`);
    
    // We must replace the closing tag of that outermost element, followed by );} or similar
    // Since we don't know exactly what the outermost tag is at the end of the file, we can just replace the very last closing tag before `);\n}`
    
    // A regex to match the last closing tag and function end:
    const endRegex = new RegExp(`</${tagName}>\\s*\\);\\s*\\}\\s*$`);
    if (endRegex.test(content)) {
      content = content.replace(endRegex, `</${tagName}>\n    </>\n  );\n}`);
      fs.writeFileSync(fullPath, content, 'utf-8');
      count++;
    } else {
      // Sometimes it might not end exactly like that, try a more generic fallback
      const genericEndRegex = /<\/([a-zA-Z0-9]+)>\s*\);\s*\}\s*$/;
      const endMatch = content.match(genericEndRegex);
      if (endMatch) {
        content = content.replace(genericEndRegex, `</${endMatch[1]}>\n    </>\n  );\n}`);
        fs.writeFileSync(fullPath, content, 'utf-8');
        count++;
      } else {
        console.log("Failed to match end for", relPath);
      }
    }
  } else {
    console.log("Failed to match return for", relPath);
  }
}

console.log(`Updated ${count} files.`);
