import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Euro, 
  Building2, 
  MapPin, 
  BookOpen, 
  FileCheck, 
  Award, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  Stethoscope,
  Sparkles,
  Info
} from 'lucide-react';
import SEO from '../../components/SEO';

export default function PakistaniDentistGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const checklistItems = [
    { title: 'Valid Passport', desc: 'Current passport with at least 1-2 years validity, notarized copies & certified German translation.' },
    { title: 'BDS Degree Certificate', desc: 'Original Bachelor of Dental Surgery degree fully attested by HEC (Higher Education Commission) & MOFA Pakistan, with certified German translation.' },
    { title: 'PMDC / PMC Registration Certificate', desc: 'Permanent Dental Practitioner registration certificate and Certificate of Good Standing, attested & translated.' },
    { title: 'Detailed Academic Transcripts', desc: 'Year-by-year mark sheets and detailed course syllabus/curriculum hours breakdown, attested & translated.' },
    { title: 'House Job & Work Experience Certificates', desc: 'Clinical experience letters detailing procedures performed and hospital accreditation, attested & translated.' },
    { title: 'Proof of German Language Proficiency (B2)', desc: 'Official B2 certificate from Goethe-Institut, telc, or TestDaF.' },
    { title: 'Fachsprachprüfung (FSP) C1 Certificate', desc: 'Passing certificate of the medical-dental specialist language exam from the German Dental Chamber.' },
    { title: 'Kenntnisprüfung Certificate (if required)', desc: 'Pass certificate of the dental clinical equivalency examination.' },
    { title: 'Medical Fitness Certificate (Ärztliches Attest)', desc: 'Formal health certificate confirming physical and mental fitness to practice dentistry (issued within 3 months).' },
    { title: 'Police Clearance Certificate', desc: 'Character certificate from Pakistan Police / Ministry of Interior + German Führungszeugnis (if already residing in Germany).' },
    { title: 'Chronological CV in German (Tabellarischer Lebenslauf)', desc: 'Detailed, gap-free resume signed and formatted to German standards.' },
    { title: 'Biometric Passport Photos', desc: 'Recent biometric photographs according to German visa/chamber specifications.' }
  ];

  const faqs = [
    {
      q: 'Is PMDC registration valid in Germany?',
      a: 'PMDC/PMC registration proves your professional standing and lawful qualification in Pakistan, which is an indispensable prerequisite for your application. However, it cannot substitute for German Approbation. You must still undergo the official equivalency evaluation and licensing procedure to practice dentistry in Germany.'
    },
    {
      q: 'How long does the whole process take?',
      a: 'Realistically, the entire journey takes between 2 to 4 years. Learning German from scratch (A1 to B2 level) typically takes 12 to 18 months, followed by document evaluation (3-4 months), specialized Fachsprachprüfung (FSP C1) preparation (3-6 months), and preparing for/sitting the Kenntnisprüfung (6-12 months).'
    },
    {
      q: 'Can I work while my Approbation is being processed?',
      a: 'Yes, via a Berufserlaubnis (temporary restricted dental practice authorization). This permit allows qualified Pakistani BDS graduates who have achieved German B2/FSP to work under the direct supervision of a licensed German Zahnarzt while preparing for the Kenntnisprüfung. Check with your chosen state chamber (Landeszahnärztekammer) regarding specific local rules.'
    },
    {
      q: 'Is IELTS required for Pakistani dentists in Germany?',
      a: 'No. German healthcare authorities and embassies do not require IELTS or English tests for medical or dental licensing. Dentistry in Germany is conducted entirely in German, requiring general German at B2 level and dental-medical terminology at C1 level (FSP).'
    },
    {
      q: 'Can I open my own dental clinic in Germany?',
      a: 'Yes! Once you receive your permanent, unrestricted Approbation (and complete any required preparatory assistant period as a Vorbereitungsassistent for statutory health insurance billing / Kassenzulassung), you have the legal right to practice independently, buy an existing practice, or open your own private clinic (Praxis).'
    }
  ];

  return (
    <>
      <SEO 
        title="How Pakistani Dentists Can Work in Germany — Complete Approbation Guide 2026 | MoveAbroad.pk" 
        description="Complete guide for Pakistani dentists (BDS) to get German Approbation and work in Germany. Step-by-step process, language requirements, salary, and 2026 rule changes explained."
        canonicalPath="/blog/pakistani-dentist-germany-guide-2026"
      />
      
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 font-medium text-sm md:text-base group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
            Back to All Articles
          </Link>
          
          <motion.article 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" /> Healthcare &amp; Dentistry
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-xs md:text-sm font-semibold">
                Germany 2026 Guide
              </span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Approbation
              </span>
            </div>
            
            {/* Article Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              How Pakistani Dentists Can Work in Germany — Complete Approbation Guide 2026
            </h1>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4 md:gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-slate-400" />
                <span className="font-medium">Editorial Healthcare Desk</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                <span>Updated for 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                <span>12 min read</span>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="space-y-8 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              
              {/* Introduction */}
              <div className="bg-gradient-to-br from-blue-50/70 to-teal-50/70 dark:from-slate-800/80 dark:to-slate-900/80 p-6 rounded-2xl border border-blue-100 dark:border-slate-700">
                <p className="font-medium text-slate-800 dark:text-slate-200 text-lg sm:text-xl leading-relaxed mb-4">
                  Germany is actively seeking international dental professionals to fill severe workforce deficits across the country. For Pakistani dentists holding a Bachelor of Dental Surgery (BDS), the German healthcare system presents one of the most rewarding and legally secure career avenues in Europe.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-blue-100/60 dark:border-slate-700">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Licensing Security</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Lifetime &amp; Portable Across All 16 States</span>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-blue-100/60 dark:border-slate-700">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">EU Blue Card Floor</span>
                    <span className="text-sm font-bold text-teal-700 dark:text-teal-400">€45,300/year (2026)</span>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-blue-100/60 dark:border-slate-700">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Practice Ownership</span>
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-400">Unrestricted Praxis Rights</span>
                  </div>
                </div>
              </div>

              <p>
                With an aging demographic and retirement waves among German practitioners, the country faces a critical shortage of licensed dentists—especially in suburban and rural municipalities. Unlike countries with complex, temporary visa sponsorship cycles, Germany awards successful candidates a full, permanent state license known as <strong>Approbation</strong>. Once acquired, your Approbation is valid for life and gives you unrestricted mobility across all 16 German federal states.
              </p>

              <p>
                Pakistani BDS graduates, trained with rigorous clinical foundation courses, five-year academic commitments, and compulsory rotary house jobs, are well-positioned to meet German benchmarks. However, achieving full licensure requires strategic navigation through language hurdles, document translation, and state dental board examinations.
              </p>

              {/* Section 1 */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">1</span>
                  What is Approbation and Why You Need It
                </h2>
                <p>
                  In Germany, <strong>Approbation als Zahnarzt</strong> is the official state medical license that permits an individual to practice dentistry independently, examine patients, prescribe medications, bill public and private health insurances, and establish private clinics.
                </p>
                <p className="mt-3">
                  Approbation is granted by the competent dental regulatory authority (typically the <em>Landeszahnärztekammer</em> or state health ministry / <em>Landesprüfungsamt</em>) of the specific federal state where you apply. Without Approbation, no dentist—regardless of years of international senior experience—is permitted to operate an independent dental practice in Germany.
                </p>

                {/* 2026 Update Alert Box */}
                <div className="my-6 p-5 sm:p-6 bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 rounded-r-2xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-amber-900 dark:text-amber-200 text-base sm:text-lg">
                        Important 2026 Regulatory Update for Dental Approbation
                      </h4>
                      <p className="text-amber-800 dark:text-amber-300 text-sm sm:text-base mt-2 leading-relaxed">
                        <strong>From 1 November 2026</strong>, new standardized federal regulations come into effect regarding how foreign qualifications of non-EU/EEA dentists are evaluated. The new framework harmonizes knowledge verification and significantly tightens clinical equivalence criteria. If you have already started your preparation, initiating your state dental chamber application early ensures your file is reviewed under existing transitional procedures.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">2</span>
                  Step-by-Step Approbation Process for Pakistani Dentists
                </h2>
                <p>
                  Transitioning from a Pakistani BDS degree to a German licensed dentist follows a clearly defined statutory procedure:
                </p>

                {/* Step 1 */}
                <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wide">Step 1</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Gather and Prepare Your Pakistani Documents</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Before applying, you must assemble your comprehensive academic and professional portfolio. Every educational and licensing document must be verified at source in Pakistan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li><strong>BDS Degree:</strong> Attested by the Higher Education Commission of Pakistan (HEC) and the Ministry of Foreign Affairs (MOFA).</li>
                    <li><strong>PMDC / PMC Registration:</strong> Valid permanent registration certificate plus a Certificate of Good Standing (issued within the last 3 months).</li>
                    <li><strong>Academic Transcripts &amp; Curriculum Breakdown:</strong> Full transcript showing clinical rotation hours, lecture hours, and curriculum syllabi for every subject.</li>
                    <li><strong>House Job &amp; Clinical Experience:</strong> Detailed completion letters specifying rotary duties in oral surgery, prosthodontics, periodontics, and conservative dentistry.</li>
                    <li><strong>Certified German Translation:</strong> All English or Urdu documents must be translated by an official sworn German translator (<em>ermächtigter / vereidigter Übersetzer</em>).</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wide">Step 2</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Submit Your Application to the State Dental Chamber</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Submit your application for the recognition of your foreign degree (<em>Antrag auf Erteilung der Approbation</em>) to the dental board (<em>Landeszahnärztekammer</em> or state licensing authority) of your target federal state.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li><strong>Choosing Your State:</strong> Fees and wait times differ notably. For example, Niedersachsen (Lower Saxony) offers the lowest administrative fee schedule starting in 2026, whereas North Rhine-Westphalia (NRW) has experienced the longest backlog due to high applicant volumes.</li>
                    <li><strong>Equivalence Assessment (Gleichwertigkeitsprüfung):</strong> The authority compares your Pakistani BDS curriculum against the German dental licensing curriculum (<em>Zahnärztliche Approbationsordnung - ZPHO</em>).</li>
                    <li><strong>Processing Timeline:</strong> If submitted documents are complete, initial administrative processing takes approximately <strong>3 to 4 months</strong> (e.g., Berlin officially quotes 3–4 months).</li>
                    <li><strong>State Administrative Fee:</strong> Recognition assessment fees generally range between <strong>€300 and €580</strong> depending on the state authority.</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wide">Step 3</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Equivalence Assessment Outcome &amp; Kenntnisprüfung</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Following the evaluation of your BDS dossier, the authority issues an official deficiency notice (<em>Defizitbescheid</em>):
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                      <strong className="text-slate-900 dark:text-white block mb-1">Scenario A: Full Direct Equivalence</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-300">If your BDS training and clinical hours are considered identical to German standards, you proceed directly to the specialist language examination and Approbation. However, this is exceptionally rare for non-EU degrees.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                      <strong className="text-slate-900 dark:text-white block mb-1">Scenario B: Kenntnisprüfung (Knowledge Exam) — Standard Pathway</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-300">In the vast majority of cases, substantial differences in pharmacology, dental radiology, legal dental regulations, or clinical hours will be noted. You will be required to sit the <strong>Kenntnisprüfung</strong>.</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-sm space-y-2">
                    <p className="font-semibold text-blue-950 dark:text-blue-200">Key Facts About the Kenntnisprüfung:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                      <li><strong>Structure:</strong> A multi-part clinical and oral-practical examination administered by a committee of university professors and dental chamber examiners.</li>
                      <li><strong>Pass Rate:</strong> Current nationwide pass rates hover at approximately <strong>60%</strong>. Diligent preparation with German dental textbooks and simulation courses is mandatory.</li>
                      <li><strong>Adaptation Course (Anpassungslehrgang):</strong> While an alternative supervised clinical course (6-36 months) at a university clinic previously existed, this pathway will narrow significantly for non-EU trained candidates following the November 2026 regulatory reforms, making the Kenntnisprüfung the standard route.</li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wide">Step 4</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">German Language Mastery — The Two-Level Requirement</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Language proficiency is the cornerstone of dental practice in Germany. Unlike tech or research fields, dental patients and clinic staff communicate entirely in German. You must master two distinct stages:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
                      <div className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span> Level 1: General German (B2)
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Mandatory prerequisite before your Approbation file is processed or before you can sit medical language tests. Certified by Goethe-Institut, telc, or ÖSD.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
                      <div className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-600"></span> Level 2: Dental German C1 (FSP)
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong>Fachsprachprüfung Zahnmedizin:</strong> Specialized dental communication examination conducted directly by the state dental chamber.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-700/40 text-sm space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">What Does the Fachsprachprüfung (FSP) Evaluate?</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      The FSP is not an abstract grammar test—it assesses whether you can safely practice dentistry in German across four essential real-world clinical tasks:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                      <li><strong>Patient History Taking (Anamnese):</strong> Conducting a 20-minute simulation with a standardized patient, understanding local idioms, and asking dental-medical questions empathetically.</li>
                      <li><strong>Informed Consent &amp; Patient Education (Aufklärung):</strong> Explaining treatment options (e.g., root canal vs. extraction, crown types, implants, anesthesia) in clear, patient-friendly German.</li>
                      <li><strong>Colleague Case Handover (Übergabegespräch):</strong> Presenting the clinical case and diagnostic findings to a supervising dentist using proper technical Latin-German dental terms.</li>
                      <li><strong>Written Case Documentation:</strong> Writing a structured clinical consultation letter, diagnosis report, or referral letter under timed exam conditions.</li>
                    </ul>
                  </div>

                  <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    <p>
                      <strong>Where to Prepare in Pakistan:</strong> Goethe-Institut in Islamabad or Karachi provides accredited German courses from A1 to B2. Specialized FSP medical-dental preparation is typically completed through German online language institutes or on-site preparation academies upon arrival in Germany.
                    </p>
                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                      <em>Realistic Timeline:</em> Starting from zero German to solid B2 proficiency takes 12 to 18 months of intensive study. Transitioning from B2 to passing the C1 FSP exam takes an additional 3 to 6 months of focused clinical communication training.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-lg uppercase tracking-wide">Step 5</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Receive Your Approbation</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Once your clinical equivalence is confirmed (or you successfully pass the Kenntnisprüfung) and your FSP C1 dental language certificate is logged, the state health ministry issues your official <strong>Approbationsurkunde</strong>.
                  </p>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Your Approbation is <strong>permanent</strong>, non-expiring, and federally valid across all 16 German states. From the day you begin your first German language class in Pakistan to the day you hold your physical Approbation certificate, plan for a realistic timeline of <strong>2 to 4 years</strong>.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">3</span>
                  Salary and Career Prospects in Germany
                </h2>
                <p>
                  Dentistry ranks among the highest earning professions in Germany. Dental earnings scale significantly with clinical independence and ownership:
                </p>

                {/* Salary Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Entry Level / Supervised</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Assistant Dentist (Vorbereitungsassistent)</h4>
                    <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-2">€45,000 – €60,000</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Gross annual salary during initial training period under supervision.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Licensed Professional</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Established Dentist (Angestellter Zahnarzt)</h4>
                    <p className="text-2xl font-black text-teal-600 dark:text-teal-400 mt-2">€70,000 – €110,000</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Employed dentist working independently in clinics or group practices.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Specialist Practice</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Senior / Specialist Dentist (Fachzahnarzt)</h4>
                    <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-2">€100,000 – €160,000</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Specialists in Orthodontics (KFO), Oral Surgery, or Periodontology.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Private Ownership</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Practice Owner (Praxisinhaber)</h4>
                    <p className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-2">€150,000 – €300,000+</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Net profit after expenses for owners of individual or joint practices.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40 text-sm">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>EU Blue Card Eligibility:</strong> For 2026, the statutory EU Blue Card salary floor for shortage healthcare occupations (including dentistry) is set at <strong>€45,300 per year</strong>. Because starting dentist salaries comfortably exceed this figure, qualified Pakistani dentists automatically qualify for the expedited Blue Card residence permit once Approbation or valid employment is confirmed.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    <strong>High Rural Demand:</strong> Dentists willing to practice outside metropolitan hubs like Berlin or Munich enjoy intense demand, subsidized practice takeover loans, immediate hiring, and frequently higher starting remuneration packages.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">4</span>
                  Which German State Should You Choose?
                </h2>
                <p>
                  Germany operates as a federation of 16 states (<em>Bundesländer</em>), each governing its own licensing administration. Selecting the right state for your initial filing is critical:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-600" /> Niedersachsen (Lower Saxony)
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">Cost Efficient</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Features the lowest recognition fee schedule in Germany starting January 2026. Predictable processing timelines and accessible examination schedules.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-600" /> Berlin
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">Organized Timelines</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      The state health office (LAGeSo) maintains an official 3–4 month preliminary document review timeline. Very transparent process for well-prepared international applications.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-600" /> Bayern (Bavaria)
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">High Job Volume</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Waiting periods for exam slots can be longer, but Bavaria boasts one of the most affluent dental markets and extensive private clinics eager to employ licensed associates.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-600" /> North Rhine-Westphalia (NRW)
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">Largest Market</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Germany's most populous state offers thousands of dental practices. However, administrative wait times can be lengthy, and exam fees sit on the higher end of the spectrum.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-700/40 text-sm">
                  <p className="text-slate-800 dark:text-slate-200 font-semibold mb-1">Strategic Recommendation:</p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Apply directly to the German state where you have secured a confirmed preliminary hospital attachment, clinical observation spot (<em>Hospitation</em>), or job offer for a supervised assistant position. If you have no geographic ties, select states with moderate caseloads and organized boards like Niedersachsen, Thuringia, or Saxony-Anhalt.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">5</span>
                  Required Documents Checklist for Pakistani BDS
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Ensure you prepare both the verified originals and official sworn German translations of every item on this checklist:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {checklistItems.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3 hover:border-blue-300 dark:hover:border-slate-600 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">6</span>
                  Practical Tips for Pakistani Dentists
                </h2>
                
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Start German Language in Pakistan Immediately</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        Language acquisition is the primary time sink in the entire Approbation cycle. Do not wait for degree attestations or embassy slots—enroll in A1/A2 courses at the Goethe-Institut in Islamabad or Karachi today. Reaching B2 before setting foot in Germany saves tens of thousands of Euros in living expenses.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Connect with Pakistani Dental Communities in Germany</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        Join verified Pakistani doctor and dentist groups on Facebook and WhatsApp. Hundreds of Pakistani BDS graduates have successfully passed their FSP and Kenntnisprüfung in various states and share valuable recent exam protocol transcripts, recalled exam questions, and recommended simulation courses.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Leverage the Berufserlaubnis (Temporary Permit)</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        Many states issue a <em>Berufserlaubnis</em> (§ 13 Zahnheilkundegesetz) once you have passed the FSP C1 exam. This temporary permit lets you work under the supervision of a licensed dentist, allowing you to earn a full salary (€45,000–€55,000) while preparing for your Kenntnisprüfung.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Target German Dental Chains and Rural Practices</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        Large dental healthcare chains (ZMVZ - <em>Zahnmedizinisches Versorgungszentrum</em>) and rural practices frequently recruit foreign dentists. Many cover the costs of your FSP language preparation courses and provide guaranteed contracts upon receiving your temporary license.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 - FAQs */}
              <section className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-lg font-bold">7</span>
                  Frequently Asked Questions (FAQs)
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Key answers to the most common queries from Pakistani dental professionals planning their move to Germany:
                </p>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800/90 transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span className="text-base sm:text-lg flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          {faq.q}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            openFaq === idx ? 'transform rotate-180 text-blue-600' : ''
                          }`} 
                        />
                      </button>
                      
                      {openFaq === idx && (
                        <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion & CTA */}
              <section className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-gradient-to-r from-blue-900 to-teal-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold">Begin Your German Dental Career Journey</h3>
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                      Obtaining German Approbation is a marathon, not a sprint. While the requirement for B2 general German, C1 specialized dental language, and clinical knowledge tests requires discipline, the payoff—a permanent European license, unmatched job security, and €100,000+ earning potential—is life-changing for Pakistani dental professionals.
                    </p>
                    
                    <div className="pt-2">
                      <Link 
                        to="/healthcare/germany/dentist" 
                        className="inline-flex items-center px-6 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md group text-sm sm:text-base"
                      >
                        <span>Explore Full Germany Dental Pathway Details</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Statutory Disclaimer */}
                <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-start gap-3">
                  <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Disclaimer:</strong> Requirements vary by German state and change frequently. Always verify current requirements with the relevant Landeszahnärztekammer before starting your application.
                  </p>
                </div>
              </section>

            </div>
          </motion.article>

          {/* Read More Section */}
          <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Read More Like This</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/blog/germany-opportunity-card-pakistan-2026" 
                className="group block p-5 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800/80 transition-colors border border-slate-100 dark:border-slate-700"
              >
                <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded mb-2 inline-block">Germany</span>
                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">
                  How to Get a Germany Opportunity Card (Chancenkarte) from Pakistan 2026
                </h4>
                <p className="text-sm text-slate-500 flex items-center gap-1">Read Article &rarr;</p>
              </Link>

              <Link 
                to="/blog/dha-licensing-exam-pakistani-doctors" 
                className="group block p-5 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800/80 transition-colors border border-slate-100 dark:border-slate-700"
              >
                <span className="text-xs font-semibold px-2 py-0.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded mb-2 inline-block">Healthcare UAE</span>
                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">
                  DHA Licensing Exam Guide for Pakistani Doctors &amp; Pharmacists
                </h4>
                <p className="text-sm text-slate-500 flex items-center gap-1">Read Article &rarr;</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
