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

export default function PakistaniPhysiotherapistDenmark() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const danish3Grades = [
    { component: "Oral Communication (Mundtlig kommunikation)", minGrade: "10 (Grade B equivalent)", note: "Highest benchmark; essential for clinical patient interaction" },
    { component: "Reading Comprehension (Læseforståelse)", minGrade: "7 (Grade C equivalent)", note: "Required to understand clinical charts & physician referrals" },
    { component: "Written Communication (Skriftlig fremstilling)", minGrade: "7 (Grade C equivalent)", note: "Required for documentation in patient healthcare files" },
  ];

  const comparisonData = [
    { feature: "Regulatory Authority", denmark: "Danish Patient Safety Authority (STPS)", germany: "State health authorities (Regierungspräsidium)" },
    { feature: "2026 Pakistan Status", denmark: "Temporary suspension maintained (unless legally resident or under special route)", germany: "Active processing; no country-wide suspension" },
    { feature: "Language Benchmark", denmark: "Prøve i Dansk 3 (Oral 10, Reading 7, Writing 7)", germany: "German B2 (Goethe, telc, ÖSD)" },
    { feature: "Clinical Assessment", denmark: "Evaluation employment (Evalueringsansættelse, min. 6 months)", germany: "Adaptation period (Anpassungslehrgang) or Knowledge test" },
    { feature: "Authorisation Fee", denmark: "DKK 1,362 (approx. €182)", germany: "€25 to €430 (state dependent)" },
    { feature: "Positive List Status", denmark: "Not on 1 July 2026 Positive List for Higher Education", germany: "Official national shortage occupation (0.8 jobseeker ratio)" },
  ];

  const faqs = [
    {
      q: "Are physiotherapy qualification applications from Pakistan currently being processed by Denmark?",
      a: "As of 30 June 2026, the Danish Patient Safety Authority (STPS) has maintained a temporary suspension on processing educational qualifications completed in Pakistan, Nepal, and Bangladesh due to document authenticity and credibility concerns. However, applications may still be processed if the applicant was educated in Pakistan but is already legally residing in Denmark, or if applying under the special process for specifically requested healthcare professionals."
    },
    {
      q: "What is the special process for specifically requested healthcare professionals?",
      a: "This is a dedicated Danish pathway where an overseas healthcare professional holds a concrete, binding employment offer for adaptation and training (minimum 6 months full-time equivalent) from a Danish healthcare employer with an approved supervision plan. Under this route, candidates are given a 3-year timeframe to complete the language and adaptation requirements while in employment."
    },
    {
      q: "Is Physiotherapy on Denmark's 2026 Positive List for Higher Education?",
      a: "No. The official Positive List for People with a Higher Education effective 1 July 2026 does NOT include Physiotherapist (DISCO 226410). Older migration articles from 2023–2025 citing physiotherapists on the Positive List are outdated. Applicants must rely on other routes, such as the Special Authorisation Residence Permit or the Pay Limit Scheme."
    },
    {
      q: "What grades are required in the Danish 3 examination (Prøve i Dansk 3)?",
      a: "The Danish Patient Safety Authority requires a minimum grade of 10 in Oral Communication, 7 in Reading Comprehension, and 7 in Written Communication on the Danish 7-point grading scale. You do not need to pass all three components in a single exam sitting."
    },
    {
      q: "How much does the Danish physiotherapy authorisation application cost?",
      a: "The non-EU application fee paid to the Danish Patient Safety Authority is DKK 1,362. If applying for a residence/work permit through SIRI, the work application fee for 2026 is DKK 6,810 (and DKK 3,080 for accompanying family members)."
    },
    {
      q: "How much proof of funds is required for the Special Authorisation Residence Permit?",
      a: "For an applicant aged 25 or older travelling alone, the 2026 SIRI financial proof threshold is DKK 79,920. For an applicant with a spouse, it is DKK 146,196; with a spouse and child, DKK 162,768."
    },
    {
      q: "Who is responsible for finding the 6-month evaluation employment (Evalueringsansættelse)?",
      a: "The applicant is solely responsible for securing an evaluation employment contract. The Danish authority does not assign positions. You must apply directly to Danish hospitals, municipalities (kommuner), or approved rehabilitation clinics."
    },
    {
      q: "Can I practice as a physiotherapist in Denmark without Danish authorisation?",
      a: "No. The title 'Fysioterapeut' is legally protected in Denmark. Practising independently without official STPS authorisation is illegal. However, candidates with valid Danish work permits may work in non-regulated healthcare support roles (such as care assistants) while learning Danish."
    }
  ];

  return (
    <>
      <SEO 
        title="Moving to Denmark as a Physiotherapist from Pakistan (2026 Guide) | MoveAbroad.pk" 
        description="Comprehensive 2026 guide for Pakistani DPT graduates moving to Denmark. Covers Danish Patient Safety Authority authorisation, 2026 Pakistan suspension updates, Danish 3 exam, and evaluation employment." 
        ogImage="/images/blog/denmark-physiotherapist-pakistan.jpg"
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
              <span className="px-3.5 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> Denmark Healthcare
              </span>
              <span className="px-3.5 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> 2026 Pakistan Suspension Notice
              </span>
              <span className="px-3.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                STPS Authorisation
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Moving from Pakistan to Denmark as a Physiotherapist in 2026: Complete Step-by-Step Guide
            </h1>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4 md:gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-red-600 dark:text-red-400" />
                <span className="font-medium text-slate-900 dark:text-slate-200">Written by Dr Haleem</span>
                <span className="ml-2 text-xs text-slate-400 hidden sm:inline">(Physical Therapy &amp; European Licensure Specialist)</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                <span>Published: Oct 05, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                <span>18 min read</span>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-100 dark:bg-slate-700 shadow-sm relative group">
              <img
                src="/images/blog/denmark-physiotherapist-pakistan.jpg"
                alt="Modern physiotherapy rehabilitation and clinical practice in Denmark"
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
                <MapPin className="w-3.5 h-3.5 text-red-400" /> Denmark &bull; Danish Patient Safety Authority (STPS) Authorisation
              </div>
            </div>

            {/* Critical 2026 Advisory Callout Box */}
            <div className="bg-gradient-to-br from-red-50/90 to-amber-50/90 dark:from-slate-800/90 dark:to-slate-900/90 p-6 sm:p-8 rounded-2xl border border-red-200 dark:border-slate-700 mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="p-1.5 bg-red-600 text-white rounded-lg inline-flex">
                  <AlertTriangle className="w-4 h-4" />
                </span>
                <h2 className="font-display font-bold text-red-950 dark:text-red-200 text-xl sm:text-2xl">
                  CRITICAL 2026 UPDATE: Pakistan Qualification Processing Suspended
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-3">
                The Danish Patient Safety Authority (STPS) has temporarily paused processing applications involving educational qualifications from <strong>Pakistan, Nepal, and Bangladesh</strong>, and as of <strong>30 June 2026</strong>, it decided to maintain that suspension. This decision relates to concerns about document authenticity and verified institutional records.
              </p>
              <div className="p-3.5 bg-white dark:bg-slate-800/80 rounded-xl border border-red-100 dark:border-slate-700 text-xs sm:text-sm text-red-900 dark:text-red-200 font-medium space-y-1">
                <p><strong>Exceptions Where Applications May Still Be Processed:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                  <li>Applicants educated in Pakistan who are <strong>already legally residing in Denmark</strong> (holding a Danish CPR number).</li>
                  <li>Applicants who qualify under the <strong>Special Process for Specifically Requested Healthcare Professionals</strong> holding a concrete Danish hospital/clinic employment offer.</li>
                </ul>
              </div>
            </div>

            {/* Quick Navigation Directory */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 mb-10 border border-slate-200 dark:border-slate-700">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-600 dark:text-red-400" /> Quick Section Directory
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <a href="#pathway-overview" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Danish Pathway at a Glance</a>
                <a href="#suspension-details" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; The 2026 Pakistan Suspension Explained</a>
                <a href="#special-route" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; The Specifically Requested Route (3-Yr Rule)</a>
                <a href="#documents" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Document Preparation &amp; Sealed Verification</a>
                <a href="#language" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Danish 3 Exam (Prøve i Dansk 3)</a>
                <a href="#evaluation" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Evaluation Employment (Evalueringsansættelse)</a>
                <a href="#positive-list" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; 2026 Positive List Correction</a>
                <a href="#fees-costs" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; SIRI Fees &amp; Financial Maintenance</a>
                <a href="#denmark-vs-germany" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Denmark vs. Germany Comparison</a>
                <a href="#mistakes" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; 8 Mistakes to Avoid</a>
                <a href="#checklist" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Complete 46-Point Checklist</a>
                <a href="#faqs" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5">&rarr; Frequently Asked Questions</a>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p>
                  Denmark is recognized as one of Europe's most desirable countries for healthcare workers, offering an outstanding work-life balance, high standards of patient care, modern clinical facilities, and competitive public salaries.
                </p>
                <p>
                  However, physiotherapy is a <strong>strictly regulated profession</strong> in Denmark. The professional title <em>"Fysioterapeut"</em> is legally protected, meaning that an overseas-qualified clinician must obtain Danish state authorisation from the <strong>Danish Patient Safety Authority (Styrelsen for Patientsikkerhed - STPS)</strong> before practising independently.
                </p>
                <p>
                  The Danish process is fundamentally distinct from Australia's APC exam council or Germany's decentralized state equivalence system. It involves an educational audit, passing the rigorous <strong>Prøve i Dansk 3</strong> language examination, and securing a mandatory 6-month clinical evaluation employment position in Denmark.
                </p>
              </section>

              {/* Section 1: Danish Pathway at a Glance */}
              <section id="pathway-overview" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    1. The Danish Physiotherapist Pathway at a Glance
                  </h2>
                </div>

                <div className="bg-slate-900 text-slate-200 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-emerald-400 font-bold mb-3 font-sans text-base">Standard Non-EU Danish Authorisation Progression</div>
                  <div className="space-y-2">
                    <div className="p-2.5 bg-slate-800 rounded-lg text-slate-100 font-bold">1. Pakistani DPT Degree &amp; University Sealed Documents</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">2. Submit Authorisation Application to STPS (Fee: DKK 1,362)</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">3. Formal Qualification Assessment (Subject to 2026 Pakistan rules)</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg text-blue-300 font-bold">4. Pass Prøve i Dansk 3 (Oral 10, Reading 7, Writing 7)</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">5. Search &amp; Secure 6-Month Evaluation Employment (Evalueringsansættelse)</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">6. Issue of Temporary Authorisation (Evalueringsautorisation)</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">7. Complete Supervised Evaluation with Employer Rating</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg text-emerald-400 font-bold">8. Permanent Danish Physiotherapist Authorisation Conferred</div>
                    <div className="text-center text-red-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">9. Secure Full Employment &amp; Long-Term Residence Permit</div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  The Danish Patient Safety Authority explicitly cautions that the overall pathway can span several years and that obtaining an evaluation employment position is highly competitive.
                </p>
              </section>

              {/* Section 2: Pakistan Suspension */}
              <section id="suspension-details" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-xl">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    2. Understanding the 2026 Pakistan Application Suspension
                  </h2>
                </div>

                <p>
                  This is the single most critical factor for any Pakistani applicant planning a move to Denmark. The Danish Patient Safety Authority has temporarily suspended processing applications based on qualifications from Pakistan, Nepal, and Bangladesh.
                </p>

                <div className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800 space-y-3 text-sm text-amber-900 dark:text-amber-200">
                  <h4 className="font-bold text-base">Key Facts Regarding the Suspension:</h4>
                  <ul className="list-disc list-inside space-y-2 leading-relaxed">
                    <li><strong>Review Decision:</strong> On <strong>30 June 2026</strong>, STPS formally reviewed the situation and decided to <strong>maintain the suspension</strong> while working with the Danish National ID Centre.</li>
                    <li><strong>Underlying Cause:</strong> The suspension stems from concerns regarding document authenticity, verification delays, and credibility issues encountered during previous application cycles.</li>
                    <li><strong>Who Can Still Be Processed:</strong> The authority makes an explicit exception for individuals who completed their education in Pakistan but are <strong>already legally residing in Denmark</strong>.</li>
                    <li><strong>Warning against Scams:</strong> Do not pay unauthorized consultancies in Pakistan promising «"guaranteed Denmark physiotherapist direct processing."» Always check the official STPS status directly.</li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Special Requested Route */}
              <section id="special-route" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    3. The Special Process for Specifically Requested Healthcare Professionals
                  </h2>
                </div>

                <p>
                  Denmark operates a dedicated pathway known as the <strong>Special process for specifically requested healthcare professionals</strong>. This route is of immense significance for applicants from countries affected by the general suspension.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">
                      3-Year Authorization Window
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Parallel Completion</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Unlike the standard pathway (which requires passing Danish 3 before finding a job), this special route allows eligible candidates to undertake evaluation employment in Denmark while completing language and licensing requirements within a <strong>3-year maximum period</strong>.
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded text-xs font-bold uppercase">
                      Mandatory Employer Plan
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Supervision Agreement</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      The employer must provide a concrete employment contract covering at least <strong>6 months of full-time equivalent employment</strong>, accompanied by an approved institutional supervision plan detailing clinical guidance and Danish language integration.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Document Prep */}
              <section id="documents" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    4. Document Preparation &amp; Sealed University Verification
                  </h2>
                </div>

                <p>
                  Danish authorities scrutinize educational records forensically. Submitting only a degree parchment and a standard marksheet is insufficient.
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Theoretical vs. Clinical Hours Breakdown</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Your university transcript or an official accompanying syllabus letter must break down the exact teaching hours and credits for <strong>each individual theoretical subject and clinical placement</strong>. If your institution only reports semester credits, request an official institutional hours conversion certificate.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Sealed Institutional Envelope Confirmation</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      STPS requires direct confirmation from your educational institution sent in a sealed envelope stamped with the official university seal, verifying candidate identity, enrollment duration, and graduation conferral date.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Certificate of Good Standing (Under 3 Months Old)</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      You must provide an official professional standing document from the competent health authority in your home country confirming legal practice entitlement and freedom from disciplinary sanctions. For evaluation employment, this certificate must be under 3 months old upon receipt. If not registered, an official Certificate of Non-Registration is required.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Danish 3 Exam */}
              <section id="language" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <Languages className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    5. Danish Language: Prøve i Dansk 3 Requirements
                  </h2>
                </div>

                <p>
                  English is widely spoken in Denmark, but <strong>clinical healthcare is conducted strictly in Danish</strong>. Under the standard non-EU route, applicants must pass the state examination <strong>Prøve i Dansk 3</strong> before taking up evaluation employment.
                </p>

                {/* Danish 3 Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Exam Component</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Minimum Required Grade</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Clinical Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      {danish3Grades.map((row, idx) => (
                        <tr key={idx} className={idx === 0 ? "bg-red-50/40 dark:bg-red-950/20 font-semibold" : ""}>
                          <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.component}</td>
                          <td className="py-3 px-4 text-red-700 dark:text-red-400">{row.minGrade}</td>
                          <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-300">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong>Exam Sessions:</strong> Prøve i Dansk 3 takes place biannually in <strong>May/June</strong> and <strong>November/December</strong> at accredited Danish language centres.
                  </div>
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <strong>12-Month Rule:</strong> The exam must typically have been passed within the 12 months prior to registration, unless you have resided continuously in Denmark since passing.
                  </div>
                </div>
              </section>

              {/* Section 6: Evaluation Employment */}
              <section id="evaluation" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    6. The Evaluation Employment (Evalueringsansættelse)
                  </h2>
                </div>

                <p>
                  The adaptation period is not a classroom course. It is real clinical employment in Denmark designed to evaluate your diagnostic reasoning, patient handling, safety protocols, and healthcare communication:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Candidate’s Responsibility</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      STPS does not arrange hospital placements. You must independently search, apply, and interview for an eligible evaluation position with Danish municipal clinics, regional hospitals, or private practices.
                    </p>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Temporary Authorisation</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Once offered an evaluation job, you lodge an application for a <strong>Temporary Evaluation Authorisation</strong> (processed in minimum 14 days) allowing supervised practice during the adaptation duration.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: 2026 Positive List Correction */}
              <section id="positive-list" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-xl">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    7. Important 2026 Correction: Denmark Positive List
                  </h2>
                </div>

                <div className="p-5 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-2xl space-y-2 text-sm text-amber-950 dark:text-amber-200">
                  <h4 className="font-bold text-base">Physiotherapist is NOT on the Current 1 July 2026 Positive List</h4>
                  <p className="leading-relaxed">
                    Many older online articles cite DISCO code <em>226410 — Physiotherapist</em> as an active shortage occupation on Denmark’s Positive List for Higher Education. However, the revised official list that took effect on <strong>1 July 2026</strong> does not include physiotherapists. While doctors, dentists, nurses, and veterinarians remain listed, physiotherapists are currently absent.
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-1">
                    What this means: You cannot rely on a generic Positive List work permit. You must qualify via the Special Authorisation Residence Route, the Pay Limit Scheme, or standard employer-sponsored pathways.
                  </p>
                </div>
              </section>

              {/* Section 8: Fees & Proof of Funds */}
              <section id="fees-costs" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    8. Official Fees &amp; Financial Maintenance Requirements (2026)
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                    <div className="text-xs text-slate-500 uppercase font-semibold">STPS Authorisation</div>
                    <div className="text-xl font-bold text-red-600 dark:text-red-400 mt-1">DKK 1,362</div>
                    <div className="text-xs text-slate-400 mt-0.5">Application evaluation fee</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                    <div className="text-xs text-slate-500 uppercase font-semibold">SIRI Work Permit Fee</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-1">DKK 6,810</div>
                    <div className="text-xs text-slate-400 mt-0.5">Family member: DKK 3,080</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Proof of Funds (Single)</div>
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">DKK 79,920</div>
                    <div className="text-xs text-slate-400 mt-0.5">SIRI maintenance threshold</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <p><strong>Proof of Funds with Accompanying Dependants:</strong></p>
                  <p>• Applicant + Spouse: <strong>DKK 146,196</strong></p>
                  <p>• Applicant + Spouse + 1 Child: <strong>DKK 162,768</strong></p>
                </div>
              </section>

              {/* Section 9: Denmark vs Germany */}
              <section id="denmark-vs-germany" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    9. Denmark vs. Germany for Pakistani Physiotherapists
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700 w-1/4">Evaluation Metric</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Denmark Pathway</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Germany Pathway</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      {comparisonData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.feature}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-red-700 dark:text-red-300">{row.denmark}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-teal-700 dark:text-teal-300">{row.germany}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-blue-950 dark:text-blue-200">
                  <strong>Strategic Verdict for 2026:</strong> For candidates living in Pakistan with a Pakistani DPT, <strong>Germany is currently the far more accessible and predictable European route</strong> because Germany has no country-wide suspension on Pakistani credential assessments. Denmark is primarily viable if you already reside legally in Denmark or secure an employer under the Special Specifically Requested Healthcare Professional route.
                </div>
              </section>

              {/* Section 10: 8 Mistakes to Avoid */}
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
                    { num: "01", title: "Paying consultants before verifying the Pakistan suspension", desc: "STPS has maintained a suspension on Pakistan qualifications as of 30 June 2026. Do not pay agents without verifying eligibility." },
                    { num: "02", title: "Relying on older Positive List articles", desc: "Physiotherapists were removed from the Positive List for Higher Education effective 1 July 2026." },
                    { num: "03", title: "Learning German or Swedish instead of Danish", desc: "Only the state-certified Prøve i Dansk 3 satisfies Danish physiotherapy registration." },
                    { num: "04", title: "Assuming English communication is sufficient", desc: "Clinical patient management, rehabilitation plans, and medical charts are strictly in Danish." },
                    { num: "05", title: "Believing passing Danish 3 guarantees a licence", desc: "Danish 3 is only Step 2. You still have to secure and pass 6 months of evaluation employment." },
                    { num: "06", title: "Thinking any ordinary private clinic job qualifies", desc: "Evaluation employment must be approved by STPS with a registered supervisor plan." },
                    { num: "07", title: "Assuming a 5-year DPT grants automatic equivalence", desc: "Danish authorities audit actual theoretical lecture hours and practical clinical ward rotations." },
                    { num: "08", title: "Omitting sealed university envelope verification", desc: "Transcripts submitted without direct, sealed institutional verification will be rejected." }
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

              {/* Complete Checklist */}
              <section id="checklist" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Complete Pakistani Applicant Checklist for Denmark
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Verified status under the 2026 Pakistan suspension policy",
                    "DPT degree parchment and consolidated official transcripts",
                    "Direct institutional degree confirmation in a sealed university envelope",
                    "Detailed syllabus separating theoretical lecture and clinical ward hours",
                    "Official clinical internship and hospital placement completion letters",
                    "Certificate of Good Standing (under 3 months old) or Non-Registration letter",
                    "Certified English or Danish translations of all non-conforming documents",
                    "Preparation and enrollment for Prøve i Dansk 3 (targeting Oral 10, Reading 7, Writing 7)",
                    "Danish CV formatted with clinical rotations and treatment specialities",
                    "Searching Jobnet and municipal portals for Evalueringsansættelse vacancies",
                    "Lodging STPS Authorisation Application with fee payment (DKK 1,362)",
                    "Securing concrete employment contract with employer supervision plan",
                    "Obtaining Temporary Evaluation Authorisation from STPS",
                    "Applying for SIRI Special Authorisation Residence Permit with fee (DKK 6,810)",
                    "Demonstrating required proof of funds (DKK 79,920 for single applicant)"
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <span className="text-red-600 dark:text-red-400 font-bold mt-0.5">☐</span>
                      <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
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
                            openFaq === idx ? 'transform rotate-180 text-red-600' : ''
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
                  Official Danish Government Regulatory Portals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <a 
                    href="https://en.stps.dk/health-professionals-and-authorities/registration-of-healthcare-professionals/physiotherapist" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-red-600 dark:text-red-400 hover:border-red-300 transition-colors"
                  >
                    <span><strong>Danish Patient Safety Authority (STPS)</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.nyidanmark.dk/en-GB" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-red-600 dark:text-red-400 hover:border-red-300 transition-colors"
                  >
                    <span><strong>New to Denmark (SIRI Immigration)</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.workindenmark.dk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-red-600 dark:text-red-400 hover:border-red-300 transition-colors"
                  >
                    <span><strong>WorkinDenmark Official Portal</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </section>

              {/* Author Bio Card */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600 to-amber-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                    DH
                  </div>
                  <div className="text-center sm:text-left space-y-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">Dr Haleem</h4>
                      <span className="px-2.5 py-0.5 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full text-xs font-semibold">
                        Physical Therapy &amp; European Licensure Specialist
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dr Haleem is a physical therapy educator and European medical migration specialist analyzing Scandinavian and Nordic healthcare recognition policies, STPS licensing requirements, and practical international mobility strategies for Pakistani rehabilitation clinicians.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 pt-1">
                      Editorial Review: Dr. M. Malik, MBBS (Lead Editor, MoveAbroad.pk). Grounded in verified Danish Patient Safety Authority and SIRI New to Denmark directives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-center space-y-4 shadow-lg">
                <h3 className="font-display text-2xl font-bold">Comparing European Physiotherapy Pathways?</h3>
                <p className="text-red-100 text-sm sm:text-base max-w-2xl mx-auto">
                  Compare Scandinavian registration standards with Germany's active shortage pathways and Australia's APEP model to make an informed career decision.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link 
                    to="/healthcare/germany/physiotherapist" 
                    className="px-6 py-3 bg-white text-red-800 rounded-xl font-semibold text-sm hover:bg-red-50 transition-colors shadow-sm"
                  >
                    Compare with Germany Pathway
                  </Link>
                  <Link 
                    to="/healthcare/australia/physiotherapist" 
                    className="px-6 py-3 bg-red-800/80 hover:bg-red-800 text-white rounded-xl font-semibold text-sm transition-colors border border-red-300/40"
                  >
                    Compare with Australia APEP
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
