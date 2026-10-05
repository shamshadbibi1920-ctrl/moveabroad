import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, User, Calendar, Clock, CheckCircle2, AlertTriangle, 
  HelpCircle, ExternalLink, Activity, DollarSign, FileText, 
  Check, ChevronDown, Sparkles, Building2, MapPin, BookOpen, 
  ShieldCheck, AlertCircle, Award, Briefcase, Languages
} from 'lucide-react';
import SEO from '../../components/SEO';

export default function PakistaniPhysiotherapistGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const cefrLevels = [
    { level: "A1", desc: "Beginner", relevance: "Basic greeting, simple personal phrases" },
    { level: "A2", desc: "Elementary", relevance: "Minimum requirement for Recognition Visa entry" },
    { level: "B1", desc: "Intermediate", relevance: "Routine conversation, everyday healthcare terminology" },
    { level: "B2", desc: "Upper-Intermediate", relevance: "Mandatory standard for German professional recognition", highlight: true },
    { level: "C1", desc: "Advanced", relevance: "Complex clinical discussions, patient nuance & documentation" },
    { level: "C2", desc: "Near-Native", relevance: "Mastery of professional and colloquial dialects" },
  ];

  const comparisonData = [
    { feature: "System Structure", germany: "Decentralized state recognition (16 Bundesländer)", australia: "Centralized national assessment (APC APEP)" },
    { feature: "Language Demand", germany: "German B2 mandatory (Goethe, telc, ÖSD)", australia: "English (IELTS 7.0 / PTE 63 with 76 Speaking)" },
    { feature: "Initial Assessment Fee", germany: "Approx. €25 to €430 (state dependent)", australia: "AUD $8,321 (APEP) + AUD $1,674 (Skills assessment)" },
    { feature: "Shortage Status", germany: "Official shortage area (ratio 0.8 jobseekers per vacancy)", australia: "On national skilled occupation list (ANZSCO 252511)" },
    { feature: "Median Remuneration", germany: "Approx. €3,248 gross/month (up to €3,900–€5,000)", australia: "Approx. AUD $75,000–$105,000+ per year" },
    { feature: "Post-Arrival Training", germany: "Adaptation course (Anpassungslehrgang) or Knowledge test", australia: "Clinical Workshop in Melbourne (1 day)" },
  ];

  const faqs = [
    {
      q: "Does a 5-year DPT from Pakistan give automatic recognition in Germany?",
      a: "No. In Germany, 'Physiotherapeut' is a strictly regulated profession. The competent German state health authority (Regierungspräsidium or Landesamt) conducts an individual equivalence assessment (Gleichwertigkeitsprüfung) comparing your curriculum and practical clinical hours with the German reference qualification. A DPT degree title does not bypass this evaluation."
    },
    {
      q: "What German language level is required for a physiotherapist?",
      a: "German B2 (CEFR) is the standard required for full professional recognition and patient care. While an A2 certificate may allow you to enter Germany on a Recognition/Qualification Visa to complete an adaptation course, you must achieve B2 before being granted your full professional permission (Berufserlaubnis / Approbation)."
    },
    {
      q: "What is a Defizitbescheid and does it mean my degree was rejected?",
      a: "No, a Defizitbescheid does NOT mean rejection. It is an official assessment notice stating that your qualification has 'substantial differences' compared to German standards. It outlines exactly which theoretical subjects or clinical hours are missing and gives you the legal right to complete a compensation measure (an adaptation period or knowledge test) in Germany."
    },
    {
      q: "What are the financial proof requirements for the German Recognition Visa in 2026?",
      a: "For company-based qualification measures with employment, official 2026 regulations require a remuneration of at least approximately €1,200 gross / €941 net per month. For school-based qualification courses, applicants must demonstrate approximately €1,091 net per month through a blocked account (Sperrkonto) or formal declaration of commitment (Verpflichtungserklärung)."
    },
    {
      q: "Can a physiotherapist get an EU Blue Card in Germany?",
      a: "Not typically at entry. The EU Blue Card requires a recognized university degree and meeting strict gross annual salary thresholds (€50,700 general, or €45,934.20 for shortage occupations in 2026). Because standard physiotherapy starting salaries are often around €3,248 gross/month (€39,000/year), most overseas physiotherapists relocate under the skilled worker residence permit (Section 18a/18b AufenthG) rather than a Blue Card."
    },
    {
      q: "Can I work in Germany while my recognition is being processed?",
      a: "Under a Recognition/Qualification Visa, you can work up to 20 hours per week in secondary employment independent of your qualification measure. If you have an employer supporting an 'Anerkennungspartnerschaft' (Recognition Partnership), you may work under contract while completing recognition, provided you do not practice independently as a regulated physiotherapist before obtaining authorization."
    },
    {
      q: "Which German language exam bodies are accepted by health authorities?",
      a: "Recognized certificates include the Goethe-Zertifikat, telc Deutsch B2 (or telc Deutsch B1-B2 Pflege/Medizin where accepted), and ÖSD. Always confirm with your target state's health authority before booking an exam."
    },
    {
      q: "How do I choose the correct recognition authority?",
      a: "Because Germany is a federation of 16 states, you must first decide which state (e.g. North Rhine-Westphalia, Bavaria, Baden-Württemberg) you intend to work in. Then use the official federal portal 'Anerkennung in Deutschland' (Recognition Finder) to identify the exact competent state authority."
    }
  ];

  return (
    <>
      <SEO 
        title="Moving to Germany as a Physiotherapist from Pakistan (2026 Guide) | MoveAbroad.pk" 
        description="Complete 2026 guide for Pakistani DPT graduates moving to Germany. Learn about German B2 language targets, the state Anerkennung equivalence process, Defizitbescheid compensation, recognition visas, and official median salary (€3,248/mo)." 
        ogImage="/images/blog/germany-physiotherapist-pakistan.jpg"
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
              <span className="px-3.5 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> Germany Healthcare
              </span>
              <span className="px-3.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> German Anerkennung 2026
              </span>
              <span className="px-3.5 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                Shortage Occupation
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Moving from Pakistan to Germany as a Physiotherapist in 2026: Complete Step-by-Step Guide
            </h1>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4 md:gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" />
                <span className="font-medium text-slate-900 dark:text-slate-200">Written by Dr M.Haleem</span>
                <span className="ml-2 text-xs text-slate-400 hidden sm:inline">(Physical Therapy &amp; European Licensure Specialist)</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                <span>Published: Oct 05, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                <span>19 min read</span>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-100 dark:bg-slate-700 shadow-sm relative group">
              <img
                src="/images/blog/germany-physiotherapist-pakistan.jpg"
                alt="Modern physiotherapy rehabilitation and clinical practice in Germany"
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
                <MapPin className="w-3.5 h-3.5 text-teal-400" /> Germany &bull; Professional Recognition (Anerkennung) &amp; B2 Pathway
              </div>
            </div>

            {/* Overview / Intake Notice Card */}
            <div className="bg-gradient-to-br from-teal-50/90 to-blue-50/90 dark:from-slate-800/90 dark:to-slate-900/90 p-6 sm:p-8 rounded-2xl border border-teal-100 dark:border-slate-700 mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="p-1.5 bg-teal-600 text-white rounded-lg inline-flex">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h2 className="font-display font-bold text-teal-950 dark:text-teal-100 text-xl sm:text-2xl">
                  Overview: High Labour Shortage &amp; State Recognition in 2026
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                Germany has emerged as one of the most accessible and rewarding destinations for Pakistani physical therapists. Official Federal Employment Agency (Bundesagentur für Arbeit) labour-market statistics confirm that physiotherapy is an official <strong>shortage occupation</strong>, with over 143,550 insured professionals, 5,563 open vacancies, and an exceptionally low vacancy-to-jobseeker ratio of 0.8. However, because physiotherapy is a regulated profession, Pakistani DPT holders must navigate state-level credential evaluation (Anerkennung) and demonstrate German B2 language proficiency.
              </p>
            </div>

            {/* Quick Navigation Directory */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 mb-10 border border-slate-200 dark:border-slate-700">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" /> Quick Section Directory
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <a href="#four-stages" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; The 4-Stage German Pathway</a>
                <a href="#regulated" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Regulated Profession &amp; DPT Realities</a>
                <a href="#language" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; German Language Strategy (B2 Target)</a>
                <a href="#authority" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Finding Your Recognition Authority</a>
                <a href="#documents" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Document Assembly &amp; Translations</a>
                <a href="#outcomes" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Recognition Outcomes &amp; Defizitbescheid</a>
                <a href="#visas" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Recognition Visa &amp; 2026 Financial Rules</a>
                <a href="#employment" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Salaries, Vacancies &amp; Job Search</a>
                <a href="#germany-vs-australia" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Germany vs. Australia Comparison</a>
                <a href="#mistakes" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; 8 Critical Mistakes to Avoid</a>
                <a href="#checklist" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Complete 43-Point Checklist</a>
                <a href="#faqs" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1.5">&rarr; Frequently Asked Questions</a>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p>
                  Germany has become an increasingly attractive destination for internationally trained physiotherapists, including graduates from Pakistan. With a large and established universal healthcare system, an aging demographic, and expanding multidisciplinary rehabilitation centers, German employers are actively seeking foreign healthcare talent.
                </p>
                <p>
                  However, moving to Germany is fundamentally different from moving to Anglophone countries like Australia or the UK. Germany does not use an Australian-style central physiotherapy assessment council (like the APC). Instead, German federal law protects the title <strong>"Physiotherapeut" / "Physiotherapeutin"</strong> and requires an individual equivalence evaluation (Anerkennung) conducted by regional state health authorities.
                </p>
              </section>

              {/* The 4-Stage Core Pathway */}
              <section id="four-stages" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    The 4 Core Stages of the German Pathway
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-bold inline-flex items-center justify-center text-sm">1</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">German Language</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Progression from A1 up to B2 (Goethe / telc / ÖSD).</p>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-bold inline-flex items-center justify-center text-sm">2</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Professional Anerkennung</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Equivalence assessment by the responsible state authority.</p>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-bold inline-flex items-center justify-center text-sm">3</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Qualification Measure</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Adaptation period (Anpassungslehrgang) or exam if needed.</p>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-bold inline-flex items-center justify-center text-sm">4</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Visa &amp; Employment</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Recognition visa or skilled worker permit (Section 18a/18b).</p>
                  </div>
                </div>
              </section>

              {/* Regulated Profession & DPT Evaluation */}
              <section id="regulated" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Is Physiotherapy Regulated in Germany? Does a Pakistani DPT Qualify?
                  </h2>
                </div>

                <p>
                  <strong>Yes, physiotherapy is strictly regulated.</strong> In Germany, training for physiotherapists historically follows a rigorous 3-year vocational or specialized applied bachelor curriculum with mandated minimum hours in theoretical instruction and practical clinical hospital rotations.
                </p>
                <p>
                  A Pakistani 5-year Doctor of Physical Therapy (DPT) can form the solid foundation of a German recognition application. However, German authorities do not judge qualifications by title alone. They audit:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Detailed subject syllabi and individual lecture hours",
                    "Practical clinical hospital placements and rotations",
                    "Electrotherapy, hydrotherapy & balneotherapy coursework",
                    "Manual therapy and mobilization techniques",
                    "Cardiopulmonary, neurological & paediatric rehabilitation hours",
                    "Post-graduation clinical experience and specialized CPD courses"
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span className="text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-xl text-sm text-amber-900 dark:text-amber-200">
                  <strong>Important Advice:</strong> Never assume «"I have a 5-year DPT, so Germany must automatically recognize me."» Two Pakistani DPT graduates from different universities can receive completely different recognition decisions based on transcript credit breakdowns and documentation quality.
                </div>
              </section>

              {/* German Language Strategy */}
              <section id="language" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Languages className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    German Language Strategy: The B2 Benchmark
                  </h2>
                </div>

                <p>
                  For a physiotherapist, the German language is non-negotiable. You will treat German patients directly, explain rehabilitation exercises, discuss post-operative precautions, and document progress notes for statutory health insurance funds (Krankenkassen).
                </p>

                {/* CEFR Level Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700 w-16">Level</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Classification</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Relevance for Physiotherapists</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      {cefrLevels.map((row, idx) => (
                        <tr key={idx} className={row.highlight ? "bg-teal-50/70 dark:bg-teal-950/40 font-semibold" : ""}>
                          <td className="py-3 px-4 font-bold text-teal-700 dark:text-teal-400">{row.level}</td>
                          <td className="py-3 px-4 text-slate-900 dark:text-white">{row.desc}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">{row.relevance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Clinical Vocabulary Box */}
                <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    Essential German Clinical Vocabulary for Physiotherapists
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Schmerz:</strong> Pain</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Bewegung:</strong> Movement</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Kraft:</strong> Strength</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Gleichgewicht:</strong> Balance</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Gang:</strong> Gait / Walking</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Befund:</strong> Assessment / Findings</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Übung:</strong> Exercise</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Behandlung:</strong> Treatment</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Dehnung:</strong> Stretching</div>
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"><strong>Reha:</strong> Rehabilitation</div>
                  </div>
                </div>
              </section>

              {/* Finding the Authority & Document Prep */}
              <section id="authority" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Finding the Competent State Authority &amp; Document Assembly
                  </h2>
                </div>

                <p>
                  Germany operates as 16 federal states (Bundesländer). You do not send your documents to a central national agency. The competent authority depends on <strong>where you intend to live and work</strong>:
                </p>
                <div className="p-4 bg-teal-50/70 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-sm text-teal-950 dark:text-teal-200">
                  <strong>The Official Tool:</strong> Use the federal government's <em>Anerkennung in Deutschland Recognition Finder</em> (anerkennung-in-deutschland.de). Enter "Physiotherapeut" and your intended German city/postal code to identify the exact competent state authority (e.g., Landesamt für Gesundheit und Soziales in Berlin, or Regierungspräsidium Stuttgart in Baden-Württemberg).
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-lg mt-6">
                  Pakistani Document Assembly Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">Educational Bundle</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      DPT degree, detailed semester-wise transcripts, and official course curriculum syllabus. Must be attested by HEC Islamabad and certified by MOFA.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">Clinical &amp; Practical Training Proof</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Official university hospital placement certificates specifying department rotations, supervised patient contact hours, and internship completion letters.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">Sworn German Translations</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      All Pakistani English/Urdu documents must be translated into German by a certified/sworn translator (vereidigter Übersetzer). Always keep original and translated bundles together.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">Professional Standing &amp; CV</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Certificate of legal practice authority, employment letters with clinical duties, police character certificate, and a German tabular CV (Lebenslauf).
                    </p>
                  </div>
                </div>
              </section>

              {/* Recognition Outcomes & Defizitbescheid */}
              <section id="outcomes" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    The 3 Recognition Outcomes: Understanding the Defizitbescheid
                  </h2>
                </div>

                <p>
                  Once the state authority reviews your documents (typically taking 3 to 4 months), you will receive one of three formal decisions:
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg">Outcome 1: Full Recognition (Gleichwertigkeit)</h3>
                      <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 rounded text-xs font-bold">Ideal</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Your Pakistani training is deemed fully equivalent. After presenting your B2 German certificate and medical fitness certificate, you receive your permanent professional permission (Berufserlaubnis).
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-blue-900 dark:text-blue-300 text-lg">Outcome 2: Partial Recognition (Defizitbescheid)</h3>
                      <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded text-xs font-bold">Most Common</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      The authority identifies "substantial differences" in specific theoretical or clinical areas. Your notice explicitly lists what is deficient. You can compensate for these differences in Germany via:
                    </p>
                    <ul className="text-xs sm:text-sm list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
                      <li><strong>Adaptation Period (Anpassungslehrgang):</strong> Supervised clinical training in a German hospital or approved practice.</li>
                      <li><strong>Knowledge Examination (Kenntnisprüfung):</strong> An oral and practical exam testing only the deficient subject areas.</li>
                    </ul>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                      💡 Partial recognition is not rejection! It serves as your official legal basis to apply for the German Recognition/Qualification Visa.
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-red-200 dark:border-red-900/50 shadow-sm space-y-2">
                    <h3 className="font-bold text-red-800 dark:text-red-300 text-lg">Outcome 3: No Recognition</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Rare for 5-year DPT holders. Occurs only if the qualification is non-accredited or missing fundamental clinical coursework entirely.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visas & Financial Rules */}
              <section id="visas" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Recognition Visa &amp; 2026 Financial Requirements
                  </h2>
                </div>

                <p>
                  If you receive a Defizitbescheid, you can apply for a <strong>Visa for Recognition of Foreign Professional Qualifications (Section 16d AufenthG)</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded text-xs font-bold uppercase">
                      Company-Based Qualification
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Employer-Tied Adaptation</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      If an employer hires you for an adaptation course with salary, the 2026 official threshold requires a monthly remuneration of at least <strong>approx. €1,200 gross / €941 net per month</strong>.
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">
                      School-Based Qualification
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Self-Funded Blocked Account</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      For training at an educational institution without salary, applicants must prove <strong>approx. €1,091 net per month</strong> through a German blocked account (Sperrkonto).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <strong>Part-Time Work Rights:</strong> Under the 16d Recognition Visa, the German government allows candidates to work up to <strong>20 hours per week</strong> in secondary employment independent of their qualification course, providing vital supplemental living income.
                </div>
              </section>

              {/* Employment, Salaries & Vacancies */}
              <section id="employment" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    German Labour Market Realities &amp; Physiotherapy Salaries
                  </h2>
                </div>

                <p>
                  Official 2025/2026 data from the Federal Employment Agency (Bundesagentur für Arbeit) reveal an urgent shortage:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Employees</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">143,550</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Open Vacancies</div>
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400 mt-1">5,563</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Jobseeker Ratio</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1">0.8</div>
                    <div className="text-[10px] text-slate-400">More jobs than seekers</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Official Median</div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">€3,248</div>
                    <div className="text-[10px] text-slate-400">Gross / Month</div>
                  </div>
                </div>

                <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Salary Realities vs Online Hype</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ignore deceptive consultancy posts promising €6,000–€8,000 monthly starting salaries. The official national median remuneration is <strong>€3,248 gross per month</strong> (approx. €39,000 per year). Depending on experience and specialized techniques (e.g. Manual Therapy or Lymphatic Drainage), hospital and private clinic advertisements typically range from <strong>€3,700 to €3,900/month</strong>, with high-end private practices reaching up to <strong>€5,000/month</strong>.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">German Job Search Keywords (Search in German!)</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      "Physiotherapeut", "Physiotherapeutin", "Physiotherapeut Anerkennung", 
                      "Physiotherapeut Berufserlaubnis", "Physiotherapeut B2 Deutsch", 
                      "Physiotherapeut internationale Fachkräfte"
                    ].map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md font-mono text-teal-800 dark:text-teal-300">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Germany vs Australia Comparison */}
              <section id="germany-vs-australia" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Germany vs. Australia: Which is Right for You?
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700 w-1/4">Evaluation Metric</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Germany Pathway</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Australia Pathway</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      {comparisonData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.feature}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-teal-800 dark:text-teal-300">{row.germany}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-blue-800 dark:text-blue-300">{row.australia}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 8 Critical Mistakes to Avoid */}
              <section id="mistakes" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    8 Mistakes Pakistani Physiotherapists Must Avoid
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { num: "01", title: "Thinking DPT automatically equals full German recognition", desc: "Your curriculum and practical hours must be compared with the German reference qualification." },
                    { num: "02", title: "Learning only English", desc: "English is insufficient for patient treatment in Germany. B2 German is mandatory for recognition." },
                    { num: "03", title: "Applying for jobs before initiating recognition", desc: "Most clinical employers require at least a pending application or Defizitbescheid before discussing employment contracts." },
                    { num: "04", title: "Paying unauthorized consultancies for generic packages", desc: "Official recognition is run transparently by state health authorities. Follow official government portals." },
                    { num: "05", title: "Assuming partial recognition means rejection", desc: "A Defizitbescheid is your gateway to a Recognition Visa (16d) and an adaptation course in Germany." },
                    { num: "06", title: "Assuming an Opportunity Card replaces recognition", desc: "The Opportunity Card does not permit independent practice in a regulated healthcare profession without licensing." },
                    { num: "07", title: "Assuming every physiotherapist qualifies for an EU Blue Card", desc: "Blue Cards enforce strict salary thresholds (€50,700/year). Standard skilled worker visas (Section 18a/18b) are far more common." },
                    { num: "08", title: "Targeting only high-cost metropolises", desc: "Berlin, Munich, and Frankfurt have high rents. Mid-sized regional cities face equal demand with much cheaper living costs." }
                  ].map((m, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-4">
                      <span className="font-mono font-bold text-red-600 dark:text-red-400 text-sm mt-0.5">{m.num}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{m.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Complete 43-Point Checklist */}
              <section id="checklist" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Complete Pakistani Applicant Checklist
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Original DPT degree parchment attested by HEC Islamabad",
                    "Complete consolidated semester transcripts attested by HEC",
                    "Detailed university curriculum and subject course descriptions",
                    "Official university hospital clinical placement hours breakdown",
                    "Certified sworn German translations of all educational documents",
                    "Valid Pakistani passport with at least 18 months remaining validity",
                    "German language certificate (A2 for visa, targeting B2 for license)",
                    "Selection of target German federal state (Bundesland)",
                    "Competent state authority identified via Recognition Finder",
                    "Recognition application lodged with fee payment (€25–€430)",
                    "Receipt of official assessment decision (Defizitbescheid if partial)",
                    "Adaptation course (Anpassungslehrgang) or exam registration secured",
                    "Proof of financial maintenance (€1,200 gross or €1,091 net blocked account)",
                    "Visa application lodged via German Embassy Islamabad / Consulate Karachi",
                    "German health insurance arranged for arrival and clinical practice"
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5">☐</span>
                      <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
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
                            openFaq === idx ? 'transform rotate-180 text-teal-600' : ''
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

              {/* Official Sources */}
              <section className="space-y-4 pt-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Official German Government Regulatory Portals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <a 
                    href="https://www.anerkennung-in-deutschland.de" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-teal-600 dark:text-teal-400 hover:border-teal-300 transition-colors"
                  >
                    <span><strong>Anerkennung in Deutschland</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.make-it-in-germany.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-teal-600 dark:text-teal-400 hover:border-teal-300 transition-colors"
                  >
                    <span><strong>Make it in Germany Portal</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://pakistan.diplo.de" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-teal-600 dark:text-teal-400 hover:border-teal-300 transition-colors"
                  >
                    <span><strong>German Missions in Pakistan</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </section>

              {/* Author Bio Card */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                    DH
                  </div>
                  <div className="text-center sm:text-left space-y-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">Dr M.Haleem</h4>
                      <span className="px-2.5 py-0.5 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-xs font-semibold">
                        Physical Therapy &amp; European Licensure Specialist
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dr M.Haleem is a physical therapy educator and European medical migration specialist focusing on German professional recognition (Anerkennung), Defizitbescheid compensation pathways, B2 medical language preparation, and German healthcare workforce integration for Pakistani rehabilitation clinicians.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 pt-1">
                      Editorial Review: Dr. M. Malik, MBBS (Lead Editor, MoveAbroad.pk). Grounded in verified Anerkennung in Deutschland and Federal Employment Agency guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-teal-600 to-blue-700 text-white text-center space-y-4 shadow-lg">
                <h3 className="font-display text-2xl font-bold">Planning Your German Healthcare Journey?</h3>
                <p className="text-teal-100 text-sm sm:text-base max-w-2xl mx-auto">
                  Explore our dedicated Germany destination hub, check out blocked account setup guides, or compare healthcare licensing across Europe.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link 
                    to="/healthcare/germany/physiotherapist" 
                    className="px-6 py-3 bg-white text-teal-800 rounded-xl font-semibold text-sm hover:bg-teal-50 transition-colors shadow-sm"
                  >
                    View Germany Physiotherapy Pathway
                  </Link>
                  <Link 
                    to="/healthcare-abroad" 
                    className="px-6 py-3 bg-teal-800/80 hover:bg-teal-800 text-white rounded-xl font-semibold text-sm transition-colors border border-teal-400/40"
                  >
                    All Healthcare Professions
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
