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

  // if `import { motion } from 'motion/react';` appears multiple times, keep the first one
  let motionCount = (content.match(/import { motion(?:, [^}]+)? } from 'motion\/react'/g) || []).length;
  if (motionCount > 1) {
    let first = true;
    content = content.replace(/import { motion(?:, [^}]+)? } from 'motion\/react';\n/g, (match) => {
      if (first) {
        first = false;
        return match;
      }
      return '';
    });
    changed = true;
  }
  
  if (content.includes('Globe, Globe')) {
      content = content.replace('Globe, Globe', 'Globe');
      changed = true;
  }
  if (content.includes('ArrowLeft, ArrowLeft')) {
      content = content.replace('ArrowLeft, ArrowLeft', 'ArrowLeft');
      changed = true;
  }
  
  // What about `Cannot find name 'Globe'` in AustraliaDocuments and CanadaDocuments?
  if (file.includes('AustraliaDocuments') || file.includes('CanadaDocuments')) {
     if (!content.includes('import ') || !content.includes('lucide')) {
          // just inject
     }
     if (content.includes('<Globe') && !content.includes('Globe,')) {
         content = content.replace(/import {([^}]+)} from 'lucide-react'/, "import {$1, Globe} from 'lucide-react'");
         changed = true;
     }
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});
