import fs from 'fs';
import path from 'path';

function generateSitemap() {
  const appTsxContent = fs.readFileSync(path.join(process.cwd(), 'src', 'App.tsx'), 'utf-8');
  
  const routeMatches = appTsxContent.matchAll(/<Route path="([^"]+)"/g);
  let routes = new Set();
  
  routes.add(''); // Home
  
  for (const match of routeMatches) {
    const routePath = match[1];
    if (routePath.includes(':') || routePath === '*' || routePath === '/') {
      continue;
    }
    routes.add(routePath);
  }
  
  // Dynamically populated routes that fall under :countryId or :professionId
  const dynamicRoutes = [
    // Study
    'study/uk',
    'study/australia',
    'study/canada',
    'study/germany',
    
    // Work
    // wait, work/uk is static in App.tsx (I saw it). But let's add just in case
    
    // Healthcare
    'healthcare/uk/doctor',
    'healthcare/uk/nurse',
    'healthcare/uk/dentist',
    'healthcare/uk/pharmacist',
    'healthcare/uk/physiotherapist',
    
    'healthcare/canada/doctor',
    'healthcare/canada/nurse',
    'healthcare/canada/dentist',
    'healthcare/canada/pharmacist',
    'healthcare/canada/physiotherapist',
    
    'healthcare/germany/doctor',
    'healthcare/germany/nurse',
    'healthcare/germany/dentist',
    'healthcare/germany/pharmacist',
    'healthcare/germany/physiotherapist'
  ];
  
  for (const dr of dynamicRoutes) {
      routes.add(dr);
  }
  
  const baseUrl = 'https://moveabroad.pk';
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of routes) {
    const fullUrl = route ? `${baseUrl}/${route}` : baseUrl;
    let priority = '0.6';
    let changefreq = 'weekly';
    
    if (!route) {
        priority = '1.0';
    } else if (['scholarships', 'work-abroad', 'healthcare-abroad', 'country-guides', 'compare', 'blog', 'about', 'contact', 'privacy-policy', 'disclaimer', 'migrate'].includes(route)) {
        priority = '0.8';
    } else if (route.split('/').length === 2 && !route.includes('blog/')) {
        priority = '0.8';
    }

    if (['about', 'privacy-policy', 'disclaimer'].includes(route)) {
      changefreq = 'monthly';
    }

    xml += `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  }
  
  xml += `</urlset>\n`;
  
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
  console.log('Routes added:', Array.from(routes).length);
}

generateSitemap();
