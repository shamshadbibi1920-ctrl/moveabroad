import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalPath, 
  ogImage = 'https://moveabroad.pk/og-image.jpg',
  ogType = 'website'
}: SEOProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const url = currentPath === '/' ? 'https://moveabroad.pk/' : `https://moveabroad.pk${currentPath}`;
  const defaultKeywords = 'migrate abroad from Pakistan, study abroad Pakistan, work abroad Pakistan, scholarships for Pakistanis, Canada immigration, Germany visa, UAE Golden Visa, UK skilled worker';

  // Ensure absolute image URL for social media crawlers (WhatsApp, Twitter, LinkedIn, Facebook)
  const resolvedOgImage = ogImage.startsWith('http://') || ogImage.startsWith('https://')
    ? ogImage
    : `https://moveabroad.pk${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:site_name" content="MoveAbroad.pk" />

      {/* Twitter / X card metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* Structured data for articles */}
      {ogType === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": resolvedOgImage,
            "author": {
              "@type": "Organization",
              "name": "MoveAbroad.pk Editorial Team",
              "url": "https://moveabroad.pk"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MoveAbroad.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://moveabroad.pk/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      )}
    </Helmet>
  );
}
