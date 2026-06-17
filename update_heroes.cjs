const fs = require('fs');

const pages = [
  {
    path: 'src/pages/migrate/NewZealandMigrate.tsx',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80',
    guide: 'New Zealand Guide',
  },
  {
    path: 'src/pages/migrate/UkMigrate.tsx',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80',
    guide: 'UK Guide',
  },
  {
    path: 'src/pages/migrate/MaltaGoldenVisa.tsx',
    image: 'https://images.unsplash.com/photo-1599394020836-b4870c9f4e6c?w=1400&q=80',
    guide: 'Malta Guide',
  },
  {
    path: 'src/pages/migrate/GermanyMigrate.tsx',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80',
    guide: 'Germany Guide',
  },
  {
    path: 'src/pages/migrate/IrelandMigrate.tsx',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1400&q=80',
    guide: 'Ireland Guide',
  }
];

pages.forEach(page => {
  let content = fs.readFileSync(page.path, 'utf8');
  
  // ensure motion is imported
  if (!content.includes("from 'motion/react'")) {
    content = "import { motion } from 'motion/react';\n" + content;
  }
  
  // ensure ArrowLeft and Globe are imported
  if (!content.includes('Globe') || !content.includes('ArrowLeft')) {
    const lucideImport = content.match(/import \{([^}]+)\} from 'lucide-react';/);
    if (lucideImport) {
        let imports = lucideImport[1];
        if (!imports.includes('ArrowLeft')) imports += ', ArrowLeft';
        if (!imports.includes('Globe')) imports += ', Globe';
        content = content.replace(lucideImport[0], `import {${imports}} from 'lucide-react';`);
    }
  }

  // extract H1 and P
  let titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/);
  let pMatch = content.match(/<p className="text-xl text-slate-300 max-w-3xl">(.*?)<\/p>/);
  
  let title = titleMatch ? titleMatch[1] : '';
  let desc = pMatch ? pMatch[1] : '';
  
  if (!title) {
    let mTitle = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (mTitle) title = mTitle[1].trim();
  }

  if (page.path === 'src/pages/migrate/MaltaGoldenVisa.tsx' && title.includes('🇲🇹')) {
     // no change
  } else if (page.path === 'src/pages/migrate/NewZealandMigrate.tsx') { title += ' 🇳🇿'; }
  else if (page.path === 'src/pages/migrate/UkMigrate.tsx') { title = title.replace('Migrate to the United Kingdom', 'Migrate to the UK 🇬🇧'); }
  else if (page.path === 'src/pages/migrate/GermanyMigrate.tsx') { title += ' 🇩🇪'; }
  else if (page.path === 'src/pages/migrate/IrelandMigrate.tsx') { title += ' 🇮🇪'; }

  const newHero = `      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="${page.image}" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Migrate
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> ${page.guide}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ${title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ${desc}
            </p>
          </motion.div>
        </div>
      </div>`;

  if (page.path === 'src/pages/migrate/MaltaGoldenVisa.tsx') {
    const maltaRegex = /<div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">[\s\S]*?<\/p>\n\s*<\/div>\n\s*<\/div>/;
    if (maltaRegex.test(content)) {
        content = content.replace(maltaRegex, newHero);
    }
  } else {
    const oldRegex = /<div className="bg-slate-900 py-16 border-b border-slate-800">[\s\S]*?<\/p>\n\s*<\/div>\n\s*<\/div>/;
    if (oldRegex.test(content)) {
       content = content.replace(oldRegex, newHero);
    } else {
       console.log("Could not find banner block for " + page.path);
    }
  }

  fs.writeFileSync(page.path, content);
  console.log('Fixed ' + page.path)
});
