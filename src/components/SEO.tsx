import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalPath, 
  ogImage = 'https://moveabroad.pk/og-image.jpg'
}: SEOProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const url = currentPath === '/' ? 'https://moveabroad.pk/' : `https://moveabroad.pk${currentPath}`;
  const defaultKeywords = 'migrate abroad from Pakistan, study abroad Pakistan, work abroad Pakistan, scholarships for Pakistanis, Canada immigration, Germany visa, UAE Golden Visa, UK skilled worker';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
}
