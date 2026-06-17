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

const errorFiles = getAllFiles('src/pages');

errorFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');

  // The extra content left behind looks like:
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  //           ...
  //       </div>
  //     </div>
  //
  // Sometimes it's <div className="relative max-w-4xl mx-auto...
  
  // To handle the general case, we can find the new hero banner closing div,
  // which is `      </div>\n\n      `
  // Right after that, there is the leftover content that ends with `</div>` right before `<div className="max-w-[4|7]xl mx-auto px-4 sm:px-6 lg:px-8 py-16` or similar.
  // We can just use a regex to strip the orphaned block between the FIRST `      </div>\n\n` after hero and the START of the main content `      <div className="max-w-[4|7]xl... -mt-10|py-16`

  // We know the new Hero banner ends precisely with:
  // `        </div>\n      </div>\n\n      `
  
  // In `replace_heroes.cjs` it was:
  // `      </div>\n\n      `

  // We replace everything between the hero and the next main section.
  // Main section usually begins with `<div className="[^{]*max-w-(?:4xl|7xl)[^{]*?(?:py-16|mt-10|-mt-10|-mt-8|-mt-12)[^{]*?">`
  
  let newHeroEndMatch = text.indexOf('        </div>\n      </div>\n\n      ');
  if (newHeroEndMatch === -1) {
     // try alternative spacing
     newHeroEndMatch = text.indexOf('</div>\n      </div>\n\n      ');
  }

  if (newHeroEndMatch !== -1) {
    let heroEndPos = newHeroEndMatch + 29; // approximate end of new hero code
    
    // find next main content div
    let nextMainContentRegex = /<div className="max-w-(?:4xl|7xl) mx-auto px-4 sm:px-6 lg:px-8(?: -mt-[0-9]+| py-[0-9]+|  relative z-10 pb-20| -mt-20 relative z-10 pb-20)[^>]*>/;
    
    let match = text.slice(heroEndPos).match(nextMainContentRegex);
    while (match) {
      let mainContentPos = heroEndPos + match.index;
      let textToStrip = text.slice(heroEndPos, mainContentPos);
      
      // textToStrip might include the duplicate
      text = text.slice(0, heroEndPos) + text.slice(mainContentPos);
      
      // look for another dummy duplicate right after heroEndPos?
      // actually, if we just removed it, let's see if the newly shifted text now starts with another duplicate.
      // A dummy duplicate always starts with `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">\n          <Link` or similar.
      // But wait! If we already matched the *real* content, the duplicates were between `heroEndPos` and `mainContentPos`. So stripping that area removed ALL duplicates!
      // So no loop is needed?
      fs.writeFileSync(file, text);
      console.log("Fixed " + file);
      break;
    }
  }
});
