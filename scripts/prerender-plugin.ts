import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Plugin, build } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface PrerenderOptions {
  routes: string[];
}

export function prerenderPlugin(options: PrerenderOptions): Plugin {
  let isSsr = false;
  let outDir = 'dist';

  return {
    name: 'vite-plugin-prerender-ssg',
    apply: 'build',
    configResolved(config) {
      isSsr = Boolean(config.build.ssr);
      outDir = config.build.outDir || 'dist';
    },
    async closeBundle() {
      // Prevent recursive execution when compiling the SSR bundle
      if (isSsr || process.env.VITE_SSR_BUILD === 'true') {
        return;
      }

      console.log('\n[prerender-ssg] Starting static HTML pre-rendering for Google AdSense & SEO...');
      const cacheDir = path.resolve('.cache-ssr');

      try {
        process.env.VITE_SSR_BUILD = 'true';

        // 1. Build server bundle for SSG
        await build({
          configFile: false,
          plugins: [react()],
          build: {
            ssr: 'src/entry-server.tsx',
            outDir: cacheDir,
            emptyOutDir: true,
            sourcemap: false,
            minify: false,
          },
        });

        // 2. Read base index.html
        const templatePath = path.resolve(outDir, 'index.html');
        if (!fs.existsSync(templatePath)) {
          console.warn(`[prerender-ssg] Template not found at ${templatePath}. Skipping.`);
          return;
        }
        const template = fs.readFileSync(templatePath, 'utf-8');

        // 3. Import SSR entry render function
        const ssrEntryPath = path.resolve(cacheDir, 'entry-server.js');
        const { render } = await import(`file://${ssrEntryPath}?t=${Date.now()}`);

        // 4. Pre-render each specified route
        let renderedCount = 0;
        for (const route of options.routes) {
          try {
            const { html } = await render(route);

            // Extract title if present in rendered markup
            const titleMatch = html.match(/<title>([^<]*)<\/title>/);
            const title = titleMatch ? titleMatch[1] : null;

            // Extract meta description
            const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
            const desc = descMatch ? descMatch[1] : null;

            // Extract canonical link
            const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
            const canonical = canonicalMatch ? canonicalMatch[1] : null;

            let pageHtml = template;

            if (title) {
              pageHtml = pageHtml.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
              pageHtml = pageHtml.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
              pageHtml = pageHtml.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
            }

            if (desc) {
              pageHtml = pageHtml.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${desc}" />`);
              pageHtml = pageHtml.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${desc}" />`);
              pageHtml = pageHtml.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${desc}" />`);
            }

            if (canonical) {
              pageHtml = pageHtml.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
              pageHtml = pageHtml.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
            }

            // Strip meta/title/link tags before injecting into root container
            const cleanBodyHtml = html
              .replace(/<title>[^<]*<\/title>/g, '')
              .replace(/<meta[^>]*\/>/g, '')
              .replace(/<link[^>]*\/>/g, '');

            pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${cleanBodyHtml}</div>`);

            // 5. Output physical index.html for this route
            const routePath = route === '/' ? '' : route.replace(/^\//, '');
            const targetDir = path.resolve(outDir, routePath);
            fs.mkdirSync(targetDir, { recursive: true });
            fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageHtml, 'utf-8');

            renderedCount++;
          } catch (routeErr) {
            console.error(`[prerender-ssg] Error rendering route ${route}:`, routeErr);
          }
        }

        console.log(`[prerender-ssg] ✓ Successfully pre-rendered ${renderedCount}/${options.routes.length} physical HTML files into ${outDir}/`);
      } catch (err) {
        console.error('[prerender-ssg] Error during pre-rendering:', err);
      } finally {
        delete process.env.VITE_SSR_BUILD;
        if (fs.existsSync(cacheDir)) {
          fs.rmSync(cacheDir, { recursive: true, force: true });
        }
      }
    },
  };
}
