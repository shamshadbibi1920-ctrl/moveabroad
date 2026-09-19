import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Building2,
  FileCheck,
  Landmark,
  Compass,
  ArrowRight,
  Share2,
  Info,
  Lightbulb,
  DollarSign,
  GraduationCap,
  Briefcase,
  Stethoscope
} from 'lucide-react';
import { getGuideByKey, generateFallbackGuide, GuideContent } from '../data/contentData';

export default function DynamicGuideTemplate() {
  const { countryId, topicId, professionId, pathwayId } = useParams<{
    countryId?: string;
    topicId?: string;
    professionId?: string;
    pathwayId?: string;
  }>();

  const location = useLocation();
  const normalizedPath = location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');

  // 1. Check if an exact matching guide exists in contentDatabase
  let guide: GuideContent | null = getGuideByKey(normalizedPath);

  // 2. If not found, check reconstructed key or generate a rich fallback guide
  if (!guide) {
    const pathParts = normalizedPath.split('/');
    const category = pathParts[0] || 'study';
    const cId = countryId || pathParts[1] || 'abroad';
    const tId = topicId || professionId || pathParts[2] || 'guide';
    const subId = pathwayId || (pathParts.length > 3 ? pathParts.slice(3).join('/') : undefined);

    guide = generateFallbackGuide(category, cId, tId, subId);
  }

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Structured Data Schema for FAQPage & Article
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.metaTitle,
    description: guide.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'MoveAbroad.pk Editorial Team',
      url: 'https://moveabroad.pk/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoveAbroad.pk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://moveabroad.pk/og-image.jpg',
      },
    },
    dateModified: '2026-03-01T00:00:00+05:00',
    mainEntityOfPage: `https://moveabroad.pk${guide.canonicalPath}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://moveabroad.pk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: guide.category.charAt(0).toUpperCase() + guide.category.slice(1),
        item: `https://moveabroad.pk/${guide.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.country,
        item: `https://moveabroad.pk/${guide.category}/${guide.country.toLowerCase()}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: guide.topicTitle,
        item: `https://moveabroad.pk${guide.canonicalPath}`,
      },
    ],
  };

  // Icon mapping for categories
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'study':
        return <GraduationCap className="w-4 h-4 mr-1.5" />;
      case 'work':
        return <Briefcase className="w-4 h-4 mr-1.5" />;
      case 'healthcare':
        return <Stethoscope className="w-4 h-4 mr-1.5" />;
      default:
        return <Compass className="w-4 h-4 mr-1.5" />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      {/* Dynamic SEO & Schema Injection */}
      <Helmet>
        <title>{guide.metaTitle}</title>
        <meta name="description" content={guide.metaDescription} />
        <link rel="canonical" href={`https://moveabroad.pk${guide.canonicalPath}`} />
        <meta property="og:title" content={guide.metaTitle} />
        <meta property="og:description" content={guide.metaDescription} />
        <meta property="og:url" content={`https://moveabroad.pk${guide.canonicalPath}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={guide.metaTitle} />
        <meta name="twitter:description" content={guide.metaDescription} />

        {/* JSON-LD Schema: FAQPage */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {/* JSON-LD Schema: Article */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {/* JSON-LD Schema: Breadcrumbs */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <nav
          id="guide-breadcrumbs"
          aria-label="Breadcrumbs"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6"
        >
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to={`/${guide.category}`}
            className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {guide.category}
          </Link>
          <span>/</span>
          <Link
            to={`/${guide.category}/${guide.country.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {guide.country}
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-xs sm:max-w-sm">
            {guide.topicTitle}
          </span>
        </nav>

        {/* ========================================================================= */}
        {/* DYNAMIC HERO SECTION */}
        {/* ========================================================================= */}
        <header id="guide-hero-section" className="mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200">
              {getCategoryIcon(guide.category)}
              {guide.hero.badge}
            </span>
            <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
              Last Updated: {guide.hero.lastUpdated}
            </span>
            <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {guide.hero.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {guide.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {guide.hero.subtitle}
          </p>

          {/* Key Takeaway Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/70 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
                  Key Takeaway for Pakistani Applicants
                </span>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                  {guide.hero.keyTakeaway}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {guide.hero.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs"
              >
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {stat.value}
                </div>
                {stat.subtext && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </header>

        {/* ========================================================================= */}
        {/* LOCALIZED PAKISTANI CONTEXT ALERT BOX */}
        {/* ========================================================================= */}
        <section
          id="pakistani-context-box"
          aria-labelledby="pakistani-context-heading"
          className="mb-10 p-5 sm:p-6 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100">
              <AlertTriangle className="w-3.5 h-3.5 mr-1" />
              {guide.pakistaniContext.badge}
            </span>
            <h2
              id="pakistani-context-heading"
              className="text-lg sm:text-xl font-bold text-amber-950 dark:text-amber-100"
            >
              {guide.pakistaniContext.title}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-amber-900/90 dark:text-amber-200/90 mb-4 leading-relaxed">
            {guide.pakistaniContext.summary}
          </p>

          {/* Attestation Details Grid */}
          {guide.pakistaniContext.attestationDetails && (
            <div className="space-y-3 mb-4">
              {guide.pakistaniContext.attestationDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50"
                >
                  <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">
                    <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{detail.authority}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                    {detail.requirement}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Banking Advice */}
          {guide.pakistaniContext.bankingAdvice && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mb-4">
              <Landmark className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
                <span className="font-bold">Banking & Remittance Note: </span>
                {guide.pakistaniContext.bankingAdvice}
              </div>
            </div>
          )}

          {/* Critical Warnings Checklist */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-2">
              Critical Red Flags & Warnings:
            </span>
            <ul className="space-y-1.5">
              {guide.pakistaniContext.keyWarnings.map((warning, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-amber-950 dark:text-amber-200"
                >
                  <span className="text-red-500 dark:text-red-400 font-bold shrink-0">✕</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DATA TABLE COMPONENT (PKR / EUR / CAD or Score Matrix) */}
        {/* ========================================================================= */}
        <section
          id="guide-data-table-section"
          aria-labelledby="data-table-heading"
          className="mb-10"
        >
          <div className="mb-3">
            <h2
              id="data-table-heading"
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              {guide.dataTable.title}
            </h2>
            {guide.dataTable.subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {guide.dataTable.subtitle}
              </p>
            )}
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs bg-white dark:bg-slate-800">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-slate-700/60 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold">
                  {guide.dataTable.headers.map((header, idx) => (
                    <th key={idx} scope="col" className="py-3 px-3 sm:px-4 font-semibold whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {guide.dataTable.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`transition-colors ${
                      row.highlight
                        ? 'bg-blue-50/60 dark:bg-blue-950/30 font-semibold text-blue-950 dark:text-blue-100'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {row.cols.map((col, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-3 px-3 sm:px-4 leading-relaxed ${
                          cIdx === 0 ? 'font-medium' : ''
                        }`}
                      >
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {guide.dataTable.footnote && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2">
              {guide.dataTable.footnote}
            </p>
          )}
        </section>

        {/* ========================================================================= */}
        {/* STEP-BY-STEP TIMELINE COMPONENT */}
        {/* ========================================================================= */}
        <section
          id="guide-timeline-section"
          aria-labelledby="timeline-heading"
          className="mb-10"
        >
          <div className="mb-4">
            <h2
              id="timeline-heading"
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              {guide.timeline.title}
            </h2>
            {guide.timeline.subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {guide.timeline.subtitle}
              </p>
            )}
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-300 dark:border-blue-800 space-y-6 sm:space-y-8 my-6">
            {guide.timeline.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Step Circle Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md ring-4 ring-white dark:ring-slate-900">
                  {step.stepNumber}
                </div>

                {/* Step Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Pakistani Action Tip */}
                  <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Pakistani Applicant Action: </span>
                      {step.pakistaniTip}
                    </div>
                  </div>

                  {/* Official Portal Link */}
                  {step.officialPortal && (
                    <div className="mt-3 text-right">
                      <a
                        href={step.officialPortal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Visit {step.officialPortal.name}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DEEP-DIVE SUBSTANTIVE READING SECTIONS (>800 words target) */}
        {/* ========================================================================= */}
        <section id="guide-deep-dive-sections" className="space-y-8 mb-10">
          {guide.deepDiveSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs"
            >
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                {section.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {section.leadParagraph}
              </p>

              {section.paragraphs && (
                <div className="space-y-3 mb-4">
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Callout Box if present */}
              {section.callout && (
                <div
                  className={`p-4 rounded-xl my-4 border ${
                    section.callout.type === 'warning'
                      ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                      : section.callout.type === 'tip'
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                      : 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-blue-950 dark:text-blue-200'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {section.callout.type === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                    ) : section.callout.type === 'tip' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                    )}
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wide block mb-1">
                        {section.callout.title}
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {section.callout.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Subsections if present */}
              {section.subsections && (
                <div className="space-y-3 mt-4">
                  {section.subsections.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-750 border border-slate-200/80 dark:border-slate-700"
                    >
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {sub.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet points if present */}
              {section.bulletPoints && (
                <ul className="list-disc list-inside space-y-1.5 mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bp}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        {/* ========================================================================= */}
        {/* DYNAMIC FAQ SECTION + ACCORDION (Injected into FAQPage JSON-LD) */}
        {/* ========================================================================= */}
        <section
          id="guide-faq-section"
          aria-labelledby="faq-section-heading"
          className="mb-10"
        >
          <div className="mb-4">
            <h2
              id="faq-section-heading"
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Authoritative answers to common questions from Pakistani applicants.
            </p>
          </div>

          <div className="space-y-3">
            {guide.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-4 px-4 sm:px-5 flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-850/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VERIFIED OFFICIAL RESOURCES */}
        {/* ========================================================================= */}
        <section
          id="guide-resources-section"
          aria-labelledby="resources-heading"
          className="mb-12 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs"
        >
          <div className="mb-4">
            <h2
              id="resources-heading"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
            >
              Verified Government & Official Portals
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Direct access to official diplomatic missions, immigration authorities, and regulatory boards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guide.officialResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {res.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {res.description}
                </p>
                <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {res.authorityType}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM NAVIGATION / CALL TO ACTION */}
        {/* ========================================================================= */}
        <footer className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
          <Link
            to={`/${guide.category}/${guide.country.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to all {guide.country} {guide.category} guides
          </Link>
          <Link
            to="/compare"
            className="inline-flex items-center px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
          >
            Compare Countries Tool
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
