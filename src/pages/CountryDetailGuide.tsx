import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Globe,
  GraduationCap,
  Briefcase,
  Stethoscope,
  Building,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  DollarSign,
  Compass,
  BookOpen,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Info,
  ShieldCheck,
  Calendar,
  Layers,
  HeartPulse
} from 'lucide-react';
import { getCountryData, getAllCountries } from '../data/countries';
import SEO from '../components/SEO';

export default function CountryDetailGuide() {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  const safeId = (countryId || 'germany').toLowerCase();
  const data = getCountryData(safeId);
  const allCountries = getAllCountries();

  const [activeTab, setActiveTab] = useState<'overview' | 'study' | 'work' | 'healthcare' | 'visa'>('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [uniSearch, setUniSearch] = useState('');

  // Formatted Country Name
  const countryName = data?.name || safeId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const countryFlag = data?.flag || '🌍';

  const isGermany = safeId === 'germany';
  const isCanada = safeId === 'canada';
  const isUk = safeId === 'uk';
  const isAustralia = safeId === 'australia';

  // Specific content highlights for major countries
  const currencyInfo = useMemo(() => {
    switch (safeId) {
      case 'germany':
        return { code: 'EUR (€)', rateText: '1 EUR ≈ 300 PKR', livingPkr: 'PKR 255k – 360k/mo' };
      case 'canada':
        return { code: 'CAD ($)', rateText: '1 CAD ≈ 205 PKR', livingPkr: 'PKR 310k – 410k/mo' };
      case 'uk':
        return { code: 'GBP (£)', rateText: '1 GBP ≈ 355 PKR', livingPkr: 'PKR 350k – 480k/mo' };
      case 'australia':
        return { code: 'AUD ($)', rateText: '1 AUD ≈ 185 PKR', livingPkr: 'PKR 330k – 440k/mo' };
      case 'ireland':
        return { code: 'EUR (€)', rateText: '1 EUR ≈ 300 PKR', livingPkr: 'PKR 300k – 420k/mo' };
      case 'usa':
        return { code: 'USD ($)', rateText: '1 USD ≈ 280 PKR', livingPkr: 'PKR 350k – 550k/mo' };
      case 'uae':
        return { code: 'AED', rateText: '1 AED ≈ 76 PKR', livingPkr: 'PKR 230k – 380k/mo' };
      case 'saudi-arabia':
        return { code: 'SAR', rateText: '1 SAR ≈ 74 PKR', livingPkr: 'PKR 220k – 350k/mo' };
      default:
        return { code: 'Local Currency', rateText: 'Subject to exchange rate', livingPkr: 'Varies by city' };
    }
  }, [safeId]);

  // Dynamic FAQs tailored to country
  const faqs = useMemo(() => {
    if (isGermany) {
      return [
        {
          q: "Do I need to learn German before moving to Germany from Pakistan?",
          a: "For English-taught Master's or Bachelor's degrees, you only need proof of English (IELTS 6.0–6.5 or a recognized Medium of Instruction certificate where accepted). However, basic German (A1–A2) is crucial for daily life, part-time jobs, and flat hunting. For doctors, dentists, and nurses, German proficiency (B2 general + C1 medical Fachsprachprüfung) is mandatory for clinical licensing."
        },
        {
          q: "What is the German Blocked Account requirement in 2026?",
          a: "The German Federal Foreign Office sets the mandatory student visa financial requirement at €11,904 per year (€992 per month). Pakistani students must deposit this amount into an approved blocked account provider (such as Coracle, Expatrio, or Fintiba) prior to their visa appointment at the German Embassy Islamabad or Consulate Karachi."
        },
        {
          q: "Can I work part-time as a student in Germany?",
          a: "Yes! Germany permits international students to work up to 140 full days or 280 half days per calendar year (approximately 20 hours per week during term time, and unlimited during semester breaks). Popular options include student assistant (HiWi) roles, tutoring, and mini-jobs paying up to €538/month tax-free."
        },
        {
          q: "How does the German Opportunity Card (Chancenkarte) work for Pakistanis?",
          a: "The Opportunity Card is a points-based job seeker visa allowing qualified Pakistani graduates and skilled workers to reside in Germany for up to one year to secure qualified employment. Applicants need either full German recognition of their degree or 6 points based on language skills (German/English), age, professional experience, and ties to Germany."
        },
        {
          q: "What is the permanent residency (PR) and citizenship timeline in Germany?",
          a: "Under the modernized Nationality Law, EU Blue Card holders can obtain Niederlassungserlaubnis (Permanent Settlement) in just 21 months with B1 German (or 27 months with basic A1 German). German citizenship can now be granted after 3 to 5 years of legal residence, and dual citizenship with Pakistan is fully permitted."
        }
      ];
    }
    if (isCanada) {
      return [
        {
          q: "What is the minimum living expense GIC requirement for Canada?",
          a: "Effective for current study permit intakes, IRCC requires single applicants to show $20,635 CAD in a Guaranteed Investment Certificate (GIC), in addition to first-year tuition fees and travel costs."
        },
        {
          q: "Can Pakistani professionals qualify for Express Entry without a Canadian job offer?",
          a: "Yes. The Federal Skilled Worker (FSW) program operates via Comprehensive Ranking System (CRS) points based on age, master's/bachelor's degrees (evaluated by WES/ICAS), IELTS/PTE scores, and foreign work experience. High scorers receive Direct Invitations to Apply (ITA) for PR."
        },
        {
          q: "Is provincial nomination (PNP) a realistic route for Pakistani applicants?",
          a: "Yes. Provinces like Alberta (AAIP), Saskatchewan (SINP), and Ontario (OINP) offer in-demand occupation streams and human capital priorities that allocate 600 additional CRS points."
        }
      ];
    }
    return [
      {
        q: `What are the primary visa pathways for Pakistanis moving to ${countryName}?`,
        a: `The main pathways include higher education student visas, skilled employment sponsorship, post-study work permits, and specialized professional licensing routes.`
      },
      {
        q: `What is the estimated cost of living in ${countryName}?`,
        a: `Living expenses average ${data?.costOfLiving || currencyInfo.livingPkr}. Costs depend heavily on living in major capitals versus regional cities.`
      }
    ];
  }, [isGermany, isCanada, countryName, data, currencyInfo]);

  // Filtered universities
  const filteredUniversities = useMemo(() => {
    if (!data?.universities) return [];
    if (!uniSearch.trim()) return data.universities.slice(0, 8);
    return data.universities.filter(u =>
      u.name.toLowerCase().includes(uniSearch.toLowerCase()) ||
      u.city.toLowerCase().includes(uniSearch.toLowerCase())
    ).slice(0, 12);
  }, [data?.universities, uniSearch]);

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <>
      <SEO
        title={`${countryName} Country Guide for Pakistanis (2026) | MoveAbroad.pk`}
        description={`Comprehensive 2026 guide for Pakistanis moving to ${countryName}. Explore university admissions, tuition fees, monthly living costs in PKR, work visas, and medical licensing pathways.`}
      />

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-x-2">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/country-guides" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Country Guides</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900 dark:text-white">{countryName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 z-0">
            {data?.heroImage ? (
              <img
                src={data.heroImage}
                alt={`${countryName} skyline`}
                className="w-full h-full object-cover opacity-30"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>{countryFlag}</span>
                <span>Official Destination Guide 2026</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
                Moving to {countryName} from Pakistan
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {data?.overview || `Your complete authoritative manual on studying, working, licensing, and building a sustainable career in ${countryName}.`}
              </p>

              {/* Badges / Quick Highlights */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {isGermany && (
                  <>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      🎓 €0 Tuition at Public Universities
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      💶 Blocked Account (€11,904)
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      💼 Opportunity Card (Chancenkarte)
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      🩺 Approbation for Doctors & Dentists
                    </span>
                  </>
                )}
                {isCanada && (
                  <>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      🇨🇦 Express Entry & PNP PR
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      💰 GIC: $20,635 CAD Living Proof
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      📜 Post-Graduation Work Permit (PGWP)
                    </span>
                  </>
                )}
                {!isGermany && !isCanada && (
                  <>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      🌍 International Destination
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                      ⚖️ Validated Official Regulations
                    </span>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#pathways"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2"
                >
                  Explore Migration Pathways
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/compare"
                  className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
                >
                  Compare with Other Countries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Vitals Bar */}
        <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  Monthly Living Cost
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {data?.costOfLiving ? data.costOfLiving.split('(')[0] : currencyInfo.livingPkr}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Approx. {currencyInfo.livingPkr}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  Tuition Fee Structure
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
                  {isGermany ? '€0 Public Uni Fee' : (data?.tuitionFees || 'Varies by program')}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isGermany ? 'Only €250–€350 semester ticket' : 'Affordable options available'}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  <Briefcase className="w-4 h-4 text-indigo-500" />
                  Post-Study Work Visa
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {isGermany ? '18 Months Job Search' : isCanada ? 'Up to 3 Years PGWP' : isUk ? '2 Years Graduate Route' : '1–3 Years'}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Full work authorization
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  <Globe className="w-4 h-4 text-purple-500" />
                  Currency & Exchange
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {currencyInfo.code}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {currencyInfo.rateText}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div id="pathways" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Section Navigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 mb-10 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              Complete Overview
            </button>
            <button
              onClick={() => setActiveTab('study')}
              className={`pb-4 px-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'study'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Study & Admissions
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`pb-4 px-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'work'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Work & Job Visas
            </button>
            <button
              onClick={() => setActiveTab('healthcare')}
              className={`pb-4 px-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'healthcare'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              Healthcare Pathways
            </button>
            <button
              onClick={() => setActiveTab('visa')}
              className={`pb-4 px-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'visa'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Finances & Visas
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-12">
              
              {/* Core Strategic Pillars Grid */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Key Migration Pathways to {countryName}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                  Choose the category that aligns with your qualifications and professional goals:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Study Pillar Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Higher Education & Research
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                      {isGermany
                        ? 'Enroll in world-renowned tuition-free public universities, access DAAD funded grants, and benefit from 18 months of post-graduation job search permits.'
                        : `Discover programs, admission criteria, English requirements, and student visas in ${countryName}.`}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                      {isGermany && (
                        <>
                          <Link
                            to="/study/germany/cost-of-living"
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
                          >
                            <span>Living Cost & Budget Breakdown</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/study/germany/no-ielts"
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
                          >
                            <span>Study Without IELTS (MOI Guide)</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/study/germany/scholarships"
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
                          >
                            <span>DAAD & Foundation Scholarships</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </>
                      )}
                      <button
                        onClick={() => setActiveTab('study')}
                        className="w-full mt-3 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold transition-colors text-center block"
                      >
                        View Full Study Guide →
                      </button>
                    </div>
                  </div>

                  {/* Work Pillar Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Skilled Employment & Work Visas
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                      {isGermany
                        ? 'Leverage the Opportunity Card (Chancenkarte) points system, secure the EU Blue Card for shortage occupations, or apply for fast-track IT specialist visas.'
                        : `Explore work permits, skilled worker streams, employer sponsorship, and in-demand occupations in ${countryName}.`}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                      {isGermany && (
                        <>
                          <Link
                            to="/work/germany/opportunity-card"
                            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-between"
                          >
                            <span>Opportunity Card (Chancenkarte)</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/blog/germany-opportunity-card-pakistan-2026"
                            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-between"
                          >
                            <span>Step-by-Step Application Guide</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/work/germany"
                            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-between"
                          >
                            <span>EU Blue Card & Salary Thresholds</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </>
                      )}
                      <button
                        onClick={() => setActiveTab('work')}
                        className="w-full mt-3 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition-colors text-center block"
                      >
                        View Full Work Guide →
                      </button>
                    </div>
                  </div>

                  {/* Healthcare Pillar Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Medical & Healthcare Licensing
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                      {isGermany
                        ? 'High clinical demand for Pakistani MBBS graduates, BDS dentists, and registered nurses. Navigate Approbation, Fachsprachprüfung (FSP C1), and Anerkennung.'
                        : `License transfer examinations, regulatory registration boards, and clinical training pathways for doctors and nurses in ${countryName}.`}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                      {isGermany && (
                        <>
                          <Link
                            to="/healthcare/germany/doctor"
                            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center justify-between"
                          >
                            <span>Doctor Approbation & FSP Guide</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/blog/pakistani-dentist-germany-guide-2026"
                            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center justify-between"
                          >
                            <span>Pakistani Dentist in Germany (2026)</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/healthcare/germany/nurse"
                            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center justify-between"
                          >
                            <span>Nurse Anerkennung Recognition</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </>
                      )}
                      <button
                        onClick={() => setActiveTab('healthcare')}
                        className="w-full mt-3 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-xs font-semibold transition-colors text-center block"
                      >
                        View Healthcare Pathways →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Editorial Highlight: German Blocked Account (if Germany) */}
              {isGermany && (
                <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold mb-4">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Must-Read for Visa Applicants
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                      How to Open a German Blocked Account (Sperrkonto) from Pakistan
                    </h3>
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
                      A step-by-step masterclass on depositing the mandatory €11,904 via State Bank of Pakistan approved remittance channels, comparing Coracle, Expatrio, and Fintiba, avoiding bank delays, and obtaining the Sperrbestätigung for your embassy appointment.
                    </p>
                    <Link
                      to="/blog/how-to-open-german-blocked-account-pakistan-2026"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-950 font-bold text-sm hover:bg-blue-50 transition-colors"
                    >
                      Read Full Sperrkonto Manual
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Detailed Roadmaps */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  {countryName} Application & Visa Roadmap for Pakistanis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Credential Assessment</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isGermany ? 'Check degree equivalence on Anabin (H+) and obtain MOI or German/English language test certificates.' : 'Submit degree transcripts for official credential evaluation (WES/ICAS/UK ENIC).'}
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Application Submission</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isGermany ? 'Apply through uni-assist or direct university portals. For jobs, file Opportunity Card points.' : 'Secure formal admission letter or job offer sponsorship from an authorized employer.'}
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Proof of Funds & Insurance</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isGermany ? 'Deposit €11,904 in a Sperrkonto and register statutory German health insurance (TK / Barmer).' : 'Arrange bank statements, GIC certificate, and international health surcharge coverage.'}
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">4</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Embassy & Biometrics</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isGermany ? 'Book waitlist appointment at German Embassy Islamabad or Consulate Karachi, complete interview and biometrics.' : 'Submit visa application online and visit VFS/Gerrys for biometric enrollment.'}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: STUDY */}
          {activeTab === 'study' && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Higher Education in {countryName}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Tuition fees, popular academic fields, admissions criteria, and university directories.
                    </p>
                  </div>
                  <Link
                    to={isGermany ? "/study/germany" : `/study/${safeId}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Open Dedicated Study Hub
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Admission Requirements for Pakistanis
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Bachelor's:</strong> 13 years of education required in Germany (FSc / A-Levels + 1 year university or Studienkolleg / Feststellungsprüfung).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Master's:</strong> 4-year HEC-recognized Bachelor degree (BS / BSc Hons / MBBS / BE) from a recognized Pakistani university (Anabin H+ rating).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Language:</strong> IELTS 6.5 (or MOI certificate where permitted by selected German universities).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      Intakes & Application Deadlines
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Winter Semester (Main Intake):</strong> Starts October. Applications open mid-April to July 15. Ideal for the majority of English-taught programs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Summer Semester:</strong> Starts April. Applications open October to January 15. Limited program availability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Uni-Assist Processing:</strong> Always submit at least 4–6 weeks ahead of deadline to allow document verification.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* University Search & Filter */}
                {data?.universities && data.universities.length > 0 && (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        Recognized Universities in {countryName} ({data.universities.length})
                      </h3>
                      <input
                        type="text"
                        placeholder="Filter by university or city..."
                        value={uniSearch}
                        onChange={(e) => setUniSearch(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {filteredUniversities.map((uni) => (
                        <div
                          key={uni.id}
                          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 mb-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {uni.city}
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 line-clamp-2">
                              {uni.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                              {uni.type} • {uni.tuitionFeeRange}
                            </p>
                          </div>
                          <a
                            href={uni.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 mt-2"
                          >
                            <span>Official Portal</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: WORK */}
          {activeTab === 'work' && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Work Visas & Professional Pathways in {countryName}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Job search permits, skilled immigration categories, salary minimums, and shortage lists.
                    </p>
                  </div>
                  <Link
                    to={isGermany ? "/work/germany/opportunity-card" : `/work/${safeId}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    View In-Depth Work Hub
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Opportunity Card (Chancenkarte)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      A 1-year residency permit for job searching in Germany. Requires 6 points based on language (German A2 or English C1), professional experience, age below 35/40, and academic degree.
                    </p>
                    <Link
                      to="/work/germany/opportunity-card"
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>Check 2026 Points Grid</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      EU Blue Card Germany
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      For university graduates with a binding job offer. Benefits include relaxed salary thresholds for bottleneck occupations (IT, STEM, Healthcare) and expedited PR in 21–27 months.
                    </p>
                    <Link
                      to="/work/germany"
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>Explore Salary Thresholds</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      18-Month Post-Study Visa
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Every graduate from a state-accredited German university receives an 18-month residence permit with unrestricted work authorization to seek a degree-relevant job.
                    </p>
                    <Link
                      to="/study/germany/visa-process"
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>Transition Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: HEALTHCARE */}
          {activeTab === 'healthcare' && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Healthcare Licensing & Registration in {countryName}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                  Step-by-step equivalence, medical German C1 (Fachsprachprüfung), Kenntnisprüfung exams, and hospital recruitment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Doctors */}
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center mb-4">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Medical Doctors (MBBS)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Pakistani MBBS doctors must clear B2 general German, pass the Fachsprachprüfung (FSP C1 medical German) at the State Medical Chamber (Landesärztekammer), and clear the Kenntnisprüfung (KP) clinical knowledge exam for full Approbation.
                    </p>
                    <Link
                      to="/healthcare/germany/doctor"
                      className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read Doctor Licensing Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Dentists */}
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center mb-4">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Dentists (BDS)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Pakistani dental surgeons must complete document equivalence assessment, clear dental terminology (Zahnmedizin FSP), and undergo the dental Kenntnisprüfung covering prosthetics, conservative dentistry, and surgery.
                    </p>
                    <Link
                      to="/blog/pakistani-dentist-germany-guide-2026"
                      className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read Dentist Manual (2026)</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Nurses */}
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center mb-4">
                      <Building className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Registered Nurses (BSN)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Huge workforce deficit across hospitals and eldercare centers in Germany. Requires B1/B2 German and an adaptation program (Anpassungslehrgang) or knowledge exam to receive Urkunde recognition.
                    </p>
                    <Link
                      to="/healthcare/germany/nurse"
                      className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read Nursing Pathway Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: VISA & FINANCES */}
          {activeTab === 'visa' && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Financial Requirements & Visa Procedures for Pakistanis
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                  Embassy appointment waitlists, blocked accounts, health insurance, and documentation checklists.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-500" />
                      Proof of Financial Capability
                    </h3>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs space-y-2 text-slate-600 dark:text-slate-300">
                      <p>
                        <strong>Blocked Account (Sperrkonto):</strong> €11,904 (€992/month) must be transferred to an approved provider before your visa appointment.
                      </p>
                      <p>
                        <strong>Approved Providers:</strong> Coracle, Expatrio, and Fintiba are officially recognized by the German Federal Foreign Office and Islamabad Embassy.
                      </p>
                      <p>
                        <strong>Wire Transfer Process:</strong> Can be remitted directly from Pakistani commercial banks (Meezan, HBL, Bank Alfalah, etc.) under the State Bank of Pakistan education remittance regulations.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-500" />
                      German Embassy Islamabad & Karachi Guidelines
                    </h3>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs space-y-2 text-slate-600 dark:text-slate-300">
                      <p>
                        <strong>Waitlist Registrations:</strong> Register on the German Embassy Islamabad or Consulate General Karachi portal as early as possible.
                      </p>
                      <p>
                        <strong>Mandatory Documents:</strong> Valid passport, signed application form, admission letter / unconditional offer, Sperrbestätigung (blocked account certificate), statutory health insurance declaration, and educational transcripts verified by IBCC / HEC.
                      </p>
                      <p>
                        <strong>Processing Timeline:</strong> Typically 4 to 8 weeks after attending the in-person biometric appointment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Frequently Asked Questions Accordion */}
          <div className="mt-16 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Frequently Asked Questions for Pakistani Applicants
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
              Straightforward answers to the most common queries about moving to {countryName}.
            </p>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-900/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official Verification Portals */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Official Statutory Resources & Verification Portals
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Always cross-reference your application documents against official government websites.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {isGermany ? (
                <>
                  <a
                    href="https://www.make-it-in-germany.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group transition-colors"
                  >
                    <span>Make it in Germany</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://www.daad.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group transition-colors"
                  >
                    <span>DAAD Germany</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://anabin.kmk.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group transition-colors"
                  >
                    <span>Anabin Database</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://pakistan.diplo.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group transition-colors"
                  >
                    <span>German Embassy PK</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                </>
              ) : (
                data?.officialLinks?.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group transition-colors"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))
              )}
            </div>
          </div>

          {/* Browse Other Destination Guides */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Explore Other Country Guides
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              Compare visa criteria, tuition rates, and career prospects in other leading nations:
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {allCountries.filter(c => c.id !== safeId).slice(0, 10).map((other) => (
                <Link
                  key={other.id}
                  to={`/country-guides/${other.id}`}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>{other.flag}</span>
                  <span>{other.name}</span>
                </Link>
              ))}
              <Link
                to="/country-guides"
                className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors"
              >
                View All {allCountries.length} Guides →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
