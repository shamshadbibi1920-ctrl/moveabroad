const fs = require('fs');
const path = require('path');

function getAllFiles(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = getAllFiles('src/pages');

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const lucideMatch = content.match(/import \{([^}]+)\} from 'lucide-react';/);
  if (lucideMatch) {
      let tokens = lucideMatch[1].split(',').map(s => s.trim()).filter(Boolean);
      let seen = new Set();
      let newTokens = [];
      for (let token of tokens) {
          if (!seen.has(token)) {
              seen.add(token);
              newTokens.push(token);
          }
      }
      
      const newImport = `import { ${newTokens.join(', ')} } from 'lucide-react';`;
      if (lucideMatch[0] !== newImport) {
          content = content.replace(lucideMatch[0], newImport);
          changed = true;
      }
  }

  // Also if there is a separate line `import { Globe } from 'lucide-react';` and it's also in the big import...
  const allImports = [...content.matchAll(/import \{([^}]+)\} from 'lucide-react';/g)];
  if (allImports.length > 1) {
      let combinedTokens = [];
      for (let im of allImports) {
          content = content.replace(im[0], '');
          combinedTokens.push(...im[1].split(',').map(s => s.trim()).filter(Boolean));
      }
      let seen = new Set();
      let uniqueTokens = [];
      for (let token of combinedTokens) {
          if (!seen.has(token)) {
              seen.add(token);
              uniqueTokens.push(token);
          }
      }
      const newImportLine = `import { ${uniqueTokens.join(', ')} } from 'lucide-react';\n`;
      // insert it where the first matched import was roughly or just after react imports
      
      content = newImportLine + content.replace(/^\s*\n/mg, '\n');
      changed = true;
  }

  if (changed) {
      fs.writeFileSync(file, content);
      console.log('Fixed ' + file);
  }
});
