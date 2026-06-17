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

  if (content.includes('<Globe') && !content.includes('Globe')) {
    // but how to check properly?
  }

  // just regex check
  const needsGlobe = content.includes('<Globe') && !/import.*?Globe.*?from/.test(content);
  const needsArrowLeft = content.includes('<ArrowLeft') && !/import.*?ArrowLeft.*?from/.test(content);
  const needsMotion = content.includes('<motion.') && !/import { motion } from 'motion\/react'/.test(content);

  if (needsGlobe || needsArrowLeft) {
    if (content.includes('from \'lucide-react\'')) {
      if (needsGlobe) content = content.replace(/import {([^}]+)} from 'lucide-react'/, "import {$1, Globe} from 'lucide-react'");
      if (needsArrowLeft) content = content.replace(/import {([^}]+)} from 'lucide-react'/, "import {$1, ArrowLeft} from 'lucide-react'");
      changed = true;
    } else {
      let addedImports = [];
      if (needsGlobe) addedImports.push('Globe');
      if (needsArrowLeft) addedImports.push('ArrowLeft');
      content = `import { ${addedImports.join(', ')} } from 'lucide-react';\n` + content;
      changed = true;
    }
  }

  if (needsMotion) {
    content = `import { motion } from 'motion/react';\n` + content;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log("Fixed imports in " + file);
  }
});
