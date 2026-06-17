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

  const needsGlobe = content.includes('<Globe') && !/import.*?\\bGlobe\\b.*?from/.test(content);
  
  if (needsGlobe) {
    if (content.includes('from \'lucide-react\'')) {
      content = content.replace(/import {([^}]+)} from 'lucide-react'/, "import {$1, Globe} from 'lucide-react'");
      changed = true;
    } else {
      content = `import { Globe } from 'lucide-react';\n` + content;
      changed = true;
    }
  }

  // Remove `Globe, Globe` if it exists
  if (content.includes('Globe, Globe')) {
      content = content.replace(/Globe,\s*Globe/g, 'Globe');
      changed = true;
  }
  
  // Clean up any weird comma artifacts like `, ,`
  if (content.match(/,\s*,/)) {
      content = content.replace(/,\s*,/g, ',');
      changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});


