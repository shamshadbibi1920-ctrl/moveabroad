import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, User, Calendar, Clock, CheckCircle2, AlertTriangle, 
  HelpCircle, ExternalLink, GraduationCap, Award, BookOpen, 
  Briefcase, Mail, Check, Copy, ChevronDown, Sparkles, Building2, MapPin
} from 'lucide-react';
import SEO from '../../components/SEO';

export default function UniversityOfHelsinkiScholarships() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const emailTemplate = `Subject: Prospective doctoral applicant: [Your Field], [Specific Topic / Methodology]

Dear Professor [Last Name],

I hope this email finds you well. My name is [Your Name], and I recently completed my Master's / BS in [Your Degree] from [Your University in Pakistan], graduating with [GPA / Class Rank / Honors].

I have closely followed your laboratory's work, particularly your recent paper on "[Title of Professor's Paper]", and I am fascinated by [specific technique or finding]. My previous research focused on [1 sentence describing your thesis or project], and I would love to explore how [your research idea] can extend your team's ongoing projects.

Are you considering supervising new doctoral researchers for the upcoming University of Helsinki salaried doctoral positions (2027-28 intake)? I have attached my academic CV and a 2-page research summary for your review.

Thank you very much for your time and consideration.

Kind regards,
[Your Full Name]
[Phone Number with +92 code]
[LinkedIn / Google Scholar Profile]`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const faqs = [
    {
      q: "Can Pakistani students apply for a Master's at the University of Helsinki without IELTS?",
      a: "Generally no. The University of Helsinki enforces strict English proficiency criteria. You will need an Academic IELTS (minimum 6.5 overall with 6.0 in writing), TOEFL iBT (around 92), or PTE Academic (minimum 62). While exemptions exist for degrees completed entirely in English within native English-speaking countries (e.g. UK, USA, Australia), a Pakistani English-as-Medium-of-Instruction (MOI) certificate is rarely accepted unless explicitly specified by the specific programme."
    },
    {
      q: "Is a 2-year BA/BSc + 2-year MA/MSc (14+2 system) accepted for Master's admissions?",
      a: "Admission boards in Finland assess foreign qualifications on a case-by-case basis through the Finnish National Agency for Education (EDUFI). While 16 years of education is theoretically completed in the 14+2 path, modern Finnish universities heavily prefer candidates with an integrated 4-year Bachelor's degree (BS/BE/MBBS). If applying with 14+2, ensure your detailed transcripts, subject course outlines, and HEC degree equivalence are thoroughly documented."
    },
    {
      q: "Do I need to pay tuition fees for a PhD at the University of Helsinki?",
      a: "No! PhD education in Finland is tuition-free for all nationalities, including Pakistani passport holders. Furthermore, if you secure a university-funded doctoral position, you are employed as a university staff member receiving a monthly gross salary of €2,600 to €3,500+ with full employee benefits, pension, and occupational healthcare."
    },
    {
      q: "How much bank balance is required for the Finnish residence permit for Master's students?",
      a: "For self-funded students or students receiving only a tuition fee waiver, the Finnish Immigration Service (Migri) requires proof of at least €800 per month (€9,600 per year, or €19,200 for a two-year Master's permit) in your own personal bank account. This must be liquid cash under your own name. If you secure a salaried PhD position, your university employment contract satisfies the financial requirement completely."
    },
    {
      q: "Can I bring my spouse and children to Finland while studying?",
      a: "Yes. In Finland, international students and doctoral researchers hold resident status that permits family reunification. Spouses of students and doctoral employees receive an unrestricted right to work in Finland without requiring a separate employer-sponsored visa."
    },
    {
      q: "What is the post-study work visa policy in Finland after graduation?",
      a: "Graduates from Finnish universities are eligible for an extended post-study residence permit of up to 2 years to seek employment or start a business. Moreover, time spent holding a continuous residence permit during studies counts toward permanent residency (PR) and citizenship qualifications under current Finnish immigration guidelines."
    },
    {
      q: "Do my degrees need attestation by HEC and MOFA before applying?",
      a: "For initial university portal submission (Studyinfo.fi), high-resolution color scans of original transcripts are usually uploaded. However, upon being offered admission, the University of Helsinki requires verified, official documentation. Having your degrees and transcripts attested by the Higher Education Commission (HEC) of Pakistan and the Ministry of Foreign Affairs (MOFA) is mandatory for document verification and the subsequent Finnish residence permit application."
    },
    {
      q: "When should I begin contacting professors for PhD positions for the 2027-28 academic year?",
      a: "The ideal window is between August and November prior to the central doctoral calls (which typically conclude in autumn/early winter). Professors receive hundreds of inquiries, so contacting them 10-12 months ahead with a well-tailored research proposal gives you the best chance of securing supervisor endorsement."
    }
  ];

  return (
    <>
      <SEO 
        title="University of Helsinki Scholarships 2027-28 for Pakistani Students | MoveAbroad.pk" 
        description="Comprehensive guide for Pakistani applicants: Fully funded Master's scholarships and salaried PhD positions (€2,600-€3,500/mo) at University of Helsinki Finland for 2027-28." 
        ogImage="/images/blog/helsinki-scholarships-finland.jpg"
        ogType="article"
      />

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
          </Link>
          
          <motion.article 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            {/* Category & Status Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Scholarships
              </span>
              <span className="px-3.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Finland 2027-28 Intake
              </span>
              <span className="px-3.5 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                Salaried PhD &amp; Master's Waivers
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              University of Helsinki Scholarships 2027-28: Fully Funded Master's and PhD Options for Pakistani Students
            </h1>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4 md:gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-slate-900 dark:text-slate-200">Written by Shamshad Bibi</span>
                <span className="ml-2 text-xs text-slate-400 hidden sm:inline">(Higher Education Contributor)</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                <span>Published: Oct 01, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                <span>11 min read</span>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-100 dark:bg-slate-700 shadow-sm relative group">
              <img
                src="/images/blog/helsinki-scholarships-finland.jpg"
                alt="University of Helsinki historic campus and Senate Square in Helsinki Finland"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/blog/default-blog.jpg') {
                    target.src = '/images/blog/default-blog.jpg';
                  }
                }}
              />
              <div className="absolute bottom-3 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Helsinki, Finland &bull; Top 150 Global Research University
              </div>
            </div>

            {/* Editorial Lead Note */}
            <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/90 dark:from-slate-800/90 dark:to-slate-900/90 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-slate-700 mb-10">
              <p className="font-semibold text-blue-900 dark:text-blue-200 text-lg leading-relaxed mb-2">
                Published on MoveAbroad.pk, your trusted guide to studying and settling abroad.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                We have updated this guide specifically for the <strong>2027-28 academic intake</strong>, as prospective Master's and PhD applications open this coming winter. Because institutional policies and funding allotments adjust between cycles, always confirm specific departmental figures with official university portals before submitting.
              </p>
            </div>

            {/* Quick Navigation / Table of Contents */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 mb-10 border border-slate-200 dark:border-slate-700">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Quick Section Directory
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <a href="#why-helsinki" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Why University of Helsinki?
                </a>
                <a href="#masters-scholarships" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Part 1: Master's Scholarships
                </a>
                <a href="#phd-funded" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Part 2: Salaried PhD Positions (€0 Tuition)
                </a>
                <a href="#supervisor-contact" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Cold Email Template for Professors
                </a>
                <a href="#eligibility" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Eligibility for Pakistani Applicants
                </a>
                <a href="#checklist" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Pakistan-Specific Document Checklist
                </a>
                <a href="#timeline" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; 2027-28 Intake Timeline
                </a>
                <a href="#faqs" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">
                  &rarr; Frequently Asked Questions
                </a>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p>
                  If you want to study in Europe without drowning in crippling tuition loans, put Finland near the very top of your list. Founded in 1640, the <strong>University of Helsinki (Helsingin yliopisto)</strong> is Finland's oldest, most prestigious, and largest multidisciplinary institution, consistently ranked among the <strong>top 150 universities globally</strong> in the QS and Times Higher Education (THE) World University Rankings.
                </p>
                <p>
                  The university offers dozens of high-caliber <strong>English-taught Master's programmes</strong> spanning data science, artificial intelligence, biotechnology, environmental sustainability, law, and social sciences. Even more attractive for Pakistani scholars is Finland's progressive research model: <strong>doctoral researchers are treated as professional academic employees who receive a full monthly salary</strong> instead of paying tuition fees.
                </p>
                <p>
                  This in-depth guide covers which scholarships exist, who qualifies, which documents you need from Pakistan (including HEC verification), how to contact Finnish professors, and how to build an application package that commands attention.
                </p>
              </section>

              {/* Section: Why Helsinki? */}
              <section id="why-helsinki" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Why the University of Helsinki?
                  </h2>
                </div>

                <p>
                  Finland stands apart from traditional study-abroad hubs like the UK, Canada, or Australia, which have recently tightened post-study work rules and raised international fee burdens. Here is how Helsinki stacks up:
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-700 w-1/3">Feature</th>
                        <th className="py-3.5 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-700">Details for Pakistani Applicants</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Location</td>
                        <td className="py-3.5 px-4 sm:px-6">Helsinki, Finland's capital (vibrant tech hub with safe, modern infrastructure)</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Global Ranking</td>
                        <td className="py-3.5 px-4 sm:px-6">Consistently ranked in the <strong>Top 100–150 worldwide</strong> (QS, THE, Shanghai ARWU)</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Programmes in English</td>
                        <td className="py-3.5 px-4 sm:px-6">Over 35 international Master's programmes &amp; 33 doctoral programmes fully in English</td>
                      </tr>
                      <tr className="bg-emerald-50/50 dark:bg-emerald-950/20">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-800 dark:text-emerald-300">PhD Tuition</td>
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700 dark:text-emerald-300">
                          €0 for all nationalities, including Pakistani passport holders
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Master's Tuition (Non-EU/EEA)</td>
                        <td className="py-3.5 px-4 sm:px-6">€13,000 to €18,000 per year (offset by 50%–100% university scholarships)</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Post-Graduation Stay</td>
                        <td className="py-3.5 px-4 sm:px-6">Extended residence permit of <strong>up to 2 years</strong> to search for work or launch a startup</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Quality of Life</td>
                        <td className="py-3.5 px-4 sm:px-6">Finland is consistently ranked #1 in the UN World Happiness Report; high safety and social welfare</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: Part 1 Master's Scholarships */}
              <section id="masters-scholarships" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Part 1: Master's Scholarships
                  </h2>
                </div>

                <p>
                  Pakistani passport holders are subject to non-EU/EEA tuition fees for English-taught Master's degrees. However, the University of Helsinki and the Finnish Government sponsor competitive merit-based funding schemes designed to offset or completely eliminate these charges.
                </p>

                {/* Sub-scholarship 1 */}
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 space-y-3">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    1. Helsinki University Scholarship
                  </h3>
                  <p className="text-sm sm:text-base">
                    This is the institution's premier funding vehicle for international Master's candidates.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base list-disc list-inside">
                    <li><strong>What it covers:</strong> A 100% or 50% tuition fee waiver for the standard two-year degree duration. Note that it does not guarantee a monthly living stipend, so applicants must budget for living expenses or part-time work.</li>
                    <li><strong>How to apply:</strong> No cumbersome separate application form. You simply tick the scholarship consideration checkbox inside your online Master's application on the centralized <strong>Studyinfo.fi</strong> portal.</li>
                    <li><strong>Selection criteria:</strong> Purely academic merit. The admissions committee weighs your Bachelor's CGPA, subject relevance, the rigor of your previous university, and the strategic depth of your motivation statement.</li>
                    <li><strong>Maintenance requirement:</strong> To maintain the waiver into the second academic year, you must complete a minimum of 55 ECTS credits during your first academic year.</li>
                  </ul>
                </div>

                {/* Sub-scholarship 2 */}
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 space-y-3">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    2. The Finland Scholarship
                  </h3>
                  <p className="text-sm sm:text-base">
                    Funded through the Finnish Ministry of Education and Culture, this prestigious award is allocated to the highest-ranking non-EU/EEA Master's applicants admitted to Finnish research universities.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base list-disc list-inside">
                    <li><strong>Benefits:</strong> A 100% tuition waiver for the first year of Master's study plus a one-time relocation allowance (historically €5,000) paid into your Finnish bank account after arrival to help with initial housing and settling costs.</li>
                    <li><strong>Second-year coverage:</strong> Helsinki University automatically extends a 100% tuition waiver for the second year provided you successfully progress through your curriculum.</li>
                  </ul>
                </div>

                {/* Sub-scholarship 3 */}
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 space-y-3">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    3. Early-Bird Incentives &amp; Faculty Reductions
                  </h3>
                  <p className="text-sm sm:text-base">
                    Depending on the faculty and annual budget cycles, early-payment discounts (e.g., 10%–15% fee reductions for paying the first installment promptly) or faculty-specific partial grants are periodically introduced.
                  </p>
                </div>

                {/* Warning Callout Box */}
                <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-2xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base text-amber-900 dark:text-amber-200 space-y-1">
                      <p className="font-bold">Crucial Note from MoveAbroad.pk:</p>
                      <p>
                        Scholarship quotas and relocation grant values adjust between application seasons. We frequently see Pakistani candidates rely on outdated blog posts from 2022 or 2023 and encounter budgeting shortfalls. Always cross-reference the latest intake parameters on <strong>studies.helsinki.fi</strong> prior to financial planning.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Part 2 Salaried PhD */}
              <section id="phd-funded" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Part 2: PhD at Helsinki — Get Paid, Not Billed
                  </h2>
                </div>

                <p>
                  Here is a critical fact that many Pakistani graduates overlook: <strong>doctoral education in Finland is tuition-free for all admitted candidates regardless of nationality</strong>. Furthermore, the vast majority of full-time doctoral researchers in Finland do not rely on student stipends; they hold an <em>employment contract</em> as an Early Stage Researcher / Doctoral Researcher.
                </p>

                {/* Funded Package Breakdown */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-700 w-1/3">Item</th>
                        <th className="py-3 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-700">Contractual Entitlements</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      <tr>
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Duration</td>
                        <td className="py-3 px-4 sm:px-6">Up to 4 years of full-time salaried research</td>
                      </tr>
                      <tr className="bg-emerald-50/40 dark:bg-emerald-950/20">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-emerald-800 dark:text-emerald-300">Monthly Salary</td>
                        <td className="py-3 px-4 sm:px-6 font-bold text-emerald-700 dark:text-emerald-300">
                          Roughly €2,600 to €3,500+ gross per month (scales upward as thesis milestones are completed)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Employee Benefits</td>
                        <td className="py-3 px-4 sm:px-6">Full occupational healthcare, pension accrual, 5-6 weeks paid annual leave, parental benefits</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Tuition Charges</td>
                        <td className="py-3 px-4 sm:px-6 font-bold text-emerald-600 dark:text-emerald-400">€0 (Zero)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Taxation &amp; Net Take-home</td>
                        <td className="py-3 px-4 sm:px-6">Finnish progressive income tax applies (typically 20%–26% effective tax bracket). Generous net income sufficient to comfortably support a spouse or family.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6">
                  Two Primary Pathways to Secure a Salaried PhD
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                      Pathway A
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      The Central Doctoral School Call
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      The university conducts centralized annual funding calls administered across four overarching doctoral schools:
                    </p>
                    <ol className="text-xs sm:text-sm list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      <li>Environmental, Food &amp; Biological Sciences</li>
                      <li>Health Sciences (Medicine, Pharmacy, Dentistry)</li>
                      <li>Humanities &amp; Social Sciences</li>
                      <li>Natural Sciences (Physics, CS, Chemistry, Maths)</li>
                    </ol>
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      Calls historically run with autumn deadlines for positions commencing the subsequent calendar year.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
                      Pathway B
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Project-Based Vacancies (Open Positions)
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Finnish professors receive substantial research grants from the Research Council of Finland, Horizon Europe, or industrial consortia. They post openings directly on the University of Helsinki <strong>Open Positions</strong> portal year-round.
                    </p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      💡 Pro-Tip: These project vacancies often face fewer applicant numbers than the centralized call. Bookmark the open positions board and review new listings weekly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Supervisor Cold Email Template */}
              <section id="supervisor-contact" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Step One: How to Approach a Finnish Supervisor
                  </h2>
                </div>

                <p>
                  Before you can formally register for doctoral studies in most Finnish faculties, you need a preliminary agreement or letter of intent from an eligible professor who agrees to supervise your thesis. Finnish academics appreciate concise, well-researched, and respectful communication.
                </p>

                {/* 3 Step Protocol */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">01</span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1 mb-1">Target 3–5 Faculty Members</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Do not mass-email 50 professors. Select only those whose current publications closely align with your research proposal.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">02</span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1 mb-1">Read 2 Recent Papers</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Read their latest 2024–2026 published work thoroughly. Quote one specific experimental methodology or conceptual insight.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">03</span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1 mb-1">Keep It Under 200 Words</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Professors ignore essays. Clearly state your credentials, relevance, and the upcoming Helsinki intake timeline.</p>
                  </div>
                </div>

                {/* Interactive Cold Email Box */}
                <div className="relative rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8 font-mono text-xs sm:text-sm border border-slate-800 shadow-lg">
                  <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                      <span className="ml-2 text-slate-400 text-xs font-sans">High-Conversion Email Structure for Pakistani Applicants</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-sans font-medium transition-all"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedEmail ? 'Copied to Clipboard!' : 'Copy Template'}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-slate-300 overflow-x-auto">
                    {emailTemplate}
                  </pre>
                </div>
              </section>

              {/* Section: Eligibility for Pakistani Applicants */}
              <section id="eligibility" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Eligibility for Pakistani Applicants
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Master's Card */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      For Master's Applicants
                    </h3>
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>16 Years of Formal Education:</strong> Completed 4-year Bachelor's degree (BS, BSc Hons, BE, BEng, MBBS, PharmD, LLB) in a field closely aligned with the target Master's program.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>Academic CGPA:</strong> Competitive applications typically demand a minimum of 3.0 / 4.0 (or equivalent first-division). Full tuition scholarship recipients routinely present a 3.4+ CGPA.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>English Language Test:</strong> Academic IELTS (minimum 6.5 overall, 6.0 in writing), TOEFL iBT (minimum 92), or PTE Academic (minimum 62).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>Statement of Motivation:</strong> A tailored, analytical letter explaining programmatic fit and career trajectories.</span>
                      </li>
                    </ul>

                    <div className="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200">
                      <strong>📌 Pakistani 14+2 System Note:</strong> A traditional 2-year BA/BSc followed by a 2-year MA/MSc is scrutinized stringently. Admissions committees evaluate total credit hours and individual subject syllabi. A 4-year integrated BS remains the most frictionless route.
                    </div>
                  </div>

                  {/* PhD Card */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      For PhD Applicants
                    </h3>
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>18 Years of Education:</strong> A completed Master of Science (MS) / Master of Philosophy (MPhil) or equivalent research degree with solid thesis grades.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>Comprehensive Research Proposal:</strong> A 4–6 page proposal delineating background, research questions, methodology, anticipated findings, and ethical considerations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>Supervisor Endorsement:</strong> Confirmation from an active University of Helsinki faculty professor willing to host your doctoral research.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span><strong>Research Publications:</strong> Peer-reviewed publications in indexed international journals (e.g. Scopus/Clarivate) substantially strengthen your ranking in the centralized calls.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section: Documents Checklist */}
              <section id="checklist" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Pakistan-Specific Document Checklist
                  </h2>
                </div>

                <p>
                  Start assembling and authenticating these documents <strong>at least 3 to 4 months</strong> prior to the application deadlines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Official Degree Certificates & Transcripts",
                      desc: "Complete marksheets of all semesters showing credit hours, GPA scale, and graduation conferral date."
                    },
                    {
                      title: "HEC Attestation of Degrees & Transcripts",
                      desc: "Mandatory verification on the HEC e-portal followed by physical or courier stamping of original credentials."
                    },
                    {
                      title: "MOFA Attestation (Islamabad/Camp Offices)",
                      desc: "Attestation by the Ministry of Foreign Affairs Pakistan, required for official verification during the visa process."
                    },
                    {
                      title: "Certified English Translations",
                      desc: "Any secondary certificates or Urdu-language awards must carry notarized certified translations."
                    },
                    {
                      title: "Valid Score Report (IELTS / TOEFL / PTE)",
                      desc: "Ensure your score report remains valid through the entire admission and enrollment window (typically 2-year validity)."
                    },
                    {
                      title: "Machine-Readable Pakistani Passport",
                      desc: "Must have at least 18 months of remaining validity at the time of your Finnish residence permit filing."
                    },
                    {
                      title: "European Europass-Style Curriculum Vitae",
                      desc: "Chronological, cleanly formatted CV detailing education, lab techniques, software skills, and volunteerism."
                    },
                    {
                      title: "Research Proposal & Supervisor Agreement",
                      desc: "(PhD applicants only) Rigorous, structured research proposal accompanied by the supervisor's signed support form."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section: Application Timeline */}
              <section id="timeline" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Application Timeline for 2027-28 Intake
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-700 w-1/3">Target Window</th>
                        <th className="py-3.5 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-700">Crucial Milestone</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Sep – Nov (Year Prior)</td>
                        <td className="py-3.5 px-4 sm:px-6">Shortlist academic departments; initiate email contact with prospective PhD supervisors; appear for IELTS/TOEFL test; initiate HEC online attestation.</td>
                      </tr>
                      <tr className="bg-blue-50/40 dark:bg-blue-950/20">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-blue-900 dark:text-blue-300">Early Dec – Early Jan</td>
                        <td className="py-3.5 px-4 sm:px-6">
                          <strong>Master's Application Window on Studyinfo.fi.</strong> Submit program choices and select scholarship consideration in the form. Strict January deadline.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Jan – Feb</td>
                        <td className="py-3.5 px-4 sm:px-6">Submit supplementary verification documents or requested apostilles/notarized copies to university admissions.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Mar – Apr</td>
                        <td className="py-3.5 px-4 sm:px-6">
                          <strong>Admission &amp; Scholarship Decisions Announced.</strong> Successful applicants receive offer letter along with tuition waiver grant notification.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Apr – May</td>
                        <td className="py-3.5 px-4 sm:px-6">Formally accept study place via Studyinfo portal; submit student housing application via HOAS (Helsinki student housing foundation).</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">May – Jun</td>
                        <td className="py-3.5 px-4 sm:px-6">Apply online via EnterFinland for Finnish Residence Permit; book biometric appointment at VFS Global / Finnish Embassy in Islamabad.</td>
                      </tr>
                      <tr className="bg-emerald-50/40 dark:bg-emerald-950/20">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-800 dark:text-emerald-300">Aug – Sep</td>
                        <td className="py-3.5 px-4 sm:px-6 font-medium">Arrive in Helsinki; attend university orientation week; lectures commence.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: Residence Permit & Living in Finland */}
              <section className="space-y-4 pt-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Finnish Residence Permit &amp; Living Costs in Helsinki
                </h3>
                <p>
                  Securing admission is only half the journey. Pakistani students must navigate the Finnish Immigration Service (Migri) residence permit requirements:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Proof of Funds (Master's Students)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Migri requires proof of at least <strong>€800 per month (€9,600 per year)</strong> for living costs. This money must be deposited in a personal bank account under the applicant's sole name (sponsor letters or parents' accounts without joint naming are not accepted by Migri).
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Student Health Insurance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      You must purchase comprehensive international student health insurance (such as Swisscare or SIP Insurance) covering treatment expenses of at least €120,000 before submitting your residence permit application.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: FAQ */}
              <section id="faqs" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Frequently Asked Questions (FAQ)
                  </h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          {faq.q}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            openFaq === idx ? 'transform rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="px-4 sm:px-5 pb-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section: Official Sources */}
              <section className="space-y-4 pt-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Official Sources &amp; Primary Portals
                </h3>
                <p className="text-sm sm:text-base">
                  Never rely on third-party commercial agents for University of Helsinki admissions. Apply directly through these official governmental and institutional portals:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <a 
                    href="https://studies.helsinki.fi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>University of Helsinki Admissions</strong> (studies.helsinki.fi)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://opintopolku.fi/konfo/en/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>Studyinfo.fi</strong> (National Application Portal)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://migri.fi/en/residence-permit-for-studies" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>Migri.fi</strong> (Finnish Immigration Service)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://finlandabroad.fi/web/pak/frontpage" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>Finnish Embassy in Islamabad</strong> (Visa Appointments)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </section>

              {/* Author Bio Card */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                    SB
                  </div>
                  <div className="text-center sm:text-left space-y-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">Shamshad Bibi</h4>
                      <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                        Higher Education Contributor
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Shamshad Bibi is a researcher and contributor at MoveAbroad.pk specializing in European university admissions, Nordic higher education pathways, and fully funded scholarship strategies for Pakistani students.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 pt-1">
                      Editorial Review: Dr. M. Malik, MBBS (Founder &amp; Lead Editor, MoveAbroad.pk). Content follows MoveAbroad.pk source-verified educational research standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center space-y-4 shadow-lg">
                <h3 className="font-display text-2xl font-bold">Have Questions About Applying from Pakistan?</h3>
                <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
                  Explore our verified country guides, compare scholarship funding options across Europe, or browse comprehensive visa checklists tailored for Pakistani applicants.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link 
                    to="/scholarships" 
                    className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    Explore All European Scholarships
                  </Link>
                  <Link 
                    to="/country-guides" 
                    className="px-6 py-3 bg-blue-800/80 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-colors border border-blue-400/40"
                  >
                    View Country Guides
                  </Link>
                </div>
              </div>

            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
