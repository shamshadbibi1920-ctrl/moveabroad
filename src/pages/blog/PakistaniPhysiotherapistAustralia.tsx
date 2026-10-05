import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, User, Calendar, Clock, CheckCircle2, AlertTriangle, 
  HelpCircle, ExternalLink, Activity, DollarSign, Plane, 
  FileText, Check, ChevronDown, Sparkles, Building2, MapPin, 
  BookOpen, ShieldCheck, AlertCircle, Award, Briefcase
} from 'lucide-react';
import SEO from '../../components/SEO';

export default function PakistaniPhysiotherapistAustralia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const apepFeeTable = [
    { stage: "Eligibility Assessment", fee: "AUD $1,170", format: "Online document submission", duration: "Approx. 3 weeks" },
    { stage: "Cultural Safety Training", fee: "AUD $242", format: "Online interactive module", duration: "Self-paced (1-2 weeks)" },
    { stage: "Written Assessment", fee: "AUD $2,078", format: "Computer-delivered exam", duration: "Single sitting (3-6 mo prep)" },
    { stage: "Capability Assessment", fee: "AUD $2,928", format: "1.5-hr remote oral exam", duration: "Single scheduled session" },
    { stage: "Clinical Workshop", fee: "AUD $1,903", format: "1-day in-person (Melbourne)", duration: "Full-day practical" },
  ];

  const englishRequirements = [
    { test: "IELTS Academic", overall: "7.0", listening: "7.0", reading: "7.0", writing: "6.5", speaking: "7.0", note: "Writing requires 6.5 minimum (not 7.0)" },
    { test: "PTE Academic", overall: "63", listening: "58", reading: "59", writing: "60", speaking: "76", note: "Speaking 76 is a critical benchmark" },
    { test: "OET Physiotherapy", overall: "N/A", listening: "350", reading: "360", writing: "350", speaking: "360", note: "Grade B equivalent standard" },
    { test: "TOEFL iBT", overall: "91", listening: "22", reading: "22", writing: "23", speaking: "24", note: "Accepted test provider" },
  ];

  const faqs = [
    {
      q: "Does a 5-year DPT from Pakistan automatically grant registration in Australia?",
      a: "No. A Pakistani Doctor of Physical Therapy (DPT) does not grant direct registration. Overseas-qualified physiotherapists must undergo competence assessment through the Australian Physiotherapy Council (APC) via the Australian Physiotherapy Entry Pathway (APEP) and register with Ahpra before legally practising."
    },
    {
      q: "Can I complete most of the APC APEP pathway from Pakistan?",
      a: "Yes! Approximately 80% of the APEP pathway is completed remotely from Pakistan, including the Eligibility Assessment, Cultural Safety Training, Written Assessment, and the 1.5-hour Capability Assessment. Only the final 1-day Clinical Workshop requires travel to Melbourne."
    },
    {
      q: "What is the difference between APEP fees and Migration Skills Assessment fees?",
      a: "APEP assessments evaluate your clinical qualifications and competence for professional registration (AUD $8,321 from 21 October 2026). The Migration Skills Assessment (AUD $1,674) is a separate APC assessment required by the Department of Home Affairs for points-tested skilled visas (189, 190, 491). Together they equal AUD $9,995."
    },
    {
      q: "Can I work in Australia before completing the entire APEP pathway?",
      a: "Potentially yes. Once you complete the Eligibility Assessment and Cultural Safety Training, the APC issues an Interim Certificate (valid for 2 years). This certificate can support eligibility to apply for Limited Registration for supervised practice with Ahpra, allowing you to gain supervised clinical experience in Australia while finishing your remaining assessments."
    },
    {
      q: "What are the updated English test scores required in 2026?",
      a: "Under the National Boards rules effective 23 April 2026: IELTS Academic requires 7.0 overall with 7.0 in Listening, Reading, Speaking, and 6.5 in Writing. PTE Academic requires 63 overall with 58 Listening, 59 Reading, 60 Writing, and 76 Speaking. OET requires 350 L, 360 R, 350 W, 360 S."
    },
    {
      q: "Is there a minimum salary requirement for the 491 to 191 PR pathway?",
      a: "No. Under current Department of Home Affairs regulations, there is no minimum income threshold for the Subclass 191 regional provisional stream. You must have held an eligible regional visa (such as 491) for at least three years, complied with visa conditions, and submitted ATO Notices of Assessment for three income years."
    },
    {
      q: "Can I combine two English test sittings?",
      a: "Yes. Ahpra permits results from a maximum of two test sittings within a 12-month period, provided you satisfy the specific minimum component scores and test sitting rules of the respective testing body. You cannot combine results from different providers (e.g. PTE with IELTS)."
    },
    {
      q: "What is the ANZSCO code for Physiotherapists?",
      a: "Physiotherapists are classified under ANZSCO 252511. The assessing authority is the Australian Physiotherapy Council (APC)."
    }
  ];

  return (
    <>
      <SEO 
        title="Moving to Australia as a Physiotherapist from Pakistan (2026 Guide) | MoveAbroad.pk" 
        description="Complete 2026 guide for Pakistani DPT graduates moving to Australia. Covers APC APEP pathway, late-2026 fees (AUD $8,321), updated PTE/IELTS scores, Ahpra Limited & General registration, and 189/190/491 visas." 
        ogImage="/images/blog/australia-physiotherapist-pakistan.jpg"
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
                <Activity className="w-4 h-4" /> Australia Healthcare
              </span>
              <span className="px-3.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> APC APEP Pathway 2026
              </span>
              <span className="px-3.5 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                ANZSCO 252511
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Moving from Pakistan to Australia as a Physiotherapist in 2026: Complete Step-by-Step Guide
            </h1>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm mb-10 pb-8 border-b border-slate-100 dark:border-slate-700 gap-4 md:gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-slate-900 dark:text-slate-200">Written by Dr Hakeem</span>
                <span className="ml-2 text-xs text-slate-400 hidden sm:inline">(Physiotherapy &amp; Allied Health Specialist)</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                <span>Published: Oct 04, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                <span>18 min read</span>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-100 dark:bg-slate-700 shadow-sm relative group">
              <img
                src="/images/blog/australia-physiotherapist-pakistan.jpg"
                alt="Modern physiotherapy and clinical rehabilitation practice in Australia"
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
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Australia &bull; APC APEP Pathway &amp; Ahpra Registration
              </div>
            </div>

            {/* Overview / Intake Notice Card */}
            <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/90 dark:from-slate-800/90 dark:to-slate-900/90 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-slate-700 mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="p-1.5 bg-blue-600 text-white rounded-lg inline-flex">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h2 className="font-display font-bold text-blue-950 dark:text-blue-100 text-xl sm:text-2xl">
                  Overview: Key 2026 Rule Changes for Pakistani Physiotherapists
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                Australia remains one of the premier global destinations for Pakistani physiotherapists. Under the current <strong>Australian Physiotherapy Entry Pathway (APEP)</strong>, Pakistani DPT graduates can complete approximately <strong>80% of the assessment process remotely from Pakistan</strong> before travelling to Melbourne for the final 1-day Clinical Workshop. This guide breaks down the late-2026 APC fee structure (AUD $8,321 APEP + AUD $1,674 skills assessment = AUD $9,995), the newly updated Ahpra English thresholds, and the 189/190/491 skilled migration visas.
              </p>
            </div>

            {/* Quick Navigation Directory */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 mb-10 border border-slate-200 dark:border-slate-700">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Quick Section Directory
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                <a href="#journey" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Overall Journey at a Glance</a>
                <a href="#eligibility" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Can Pakistani DPTs Apply?</a>
                <a href="#apep-stages" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; The 5 APEP Assessment Stages</a>
                <a href="#interim" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Interim Certificate &amp; Limited Registration</a>
                <a href="#english" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; 2026 English Language Scores</a>
                <a href="#fees" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Updated APEP Fees (Late 2026)</a>
                <a href="#migration" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Skilled Visas (189, 190, 491 &rarr; 191)</a>
                <a href="#mistakes" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; 7 Common Mistakes to Avoid</a>
                <a href="#checklist" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Final 15-Point Checklist</a>
                <a href="#faqs" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5">&rarr; Frequently Asked Questions</a>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p>
                  Australia is an exceptionally attractive destination for Pakistani physiotherapists because physiotherapy is a regulated, high-demand profession with clear, established migration and registration pathways.
                </p>
                <p>
                  However, having a Doctor of Physical Therapy (DPT) or physiotherapy degree from Pakistan does not automatically grant you Australian registration. An overseas-qualified physiotherapist needs to have their qualifications and competence assessed, obtain registration with the <strong>Australian Health Practitioner Regulation Agency (Ahpra)</strong>, and—if pursuing skilled migration—obtain the appropriate skills assessment for the visa pathway.
                </p>
                <p>
                  The good news is that the process has modernised significantly. Under the <strong>Australian Physiotherapy Entry Pathway (APEP)</strong>, overseas physiotherapists can complete approximately <strong>80% of the assessment process from their home country</strong> before travelling to Australia for the final practical workshop. The Australian Physiotherapy Council specifically confirms that Pakistani physiotherapists can use this pathway if they meet its eligibility criteria.
                </p>
              </section>

              {/* Section 1: Overall Journey */}
              <section id="journey" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    1. The Overall Journey at a Glance
                  </h2>
                </div>

                <p>
                  For a Pakistani physiotherapist, the journey involves two related but distinct streams: <strong>professional licensing</strong> and <strong>immigration</strong>.
                </p>

                {/* Workflow Diagram */}
                <div className="bg-slate-900 text-slate-200 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-emerald-400 font-bold mb-3 font-sans text-base">Roadmap: Pakistan to Australian Physiotherapy Practice</div>
                  <div className="space-y-2">
                    <div className="p-2.5 bg-slate-800 rounded-lg text-slate-100 font-bold">1. Pakistan DPT / Physiotherapy Qualification</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">2. Check eligibility with Australian Physiotherapy Council (APC)</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">3. Prepare academic transcripts, clinical education proof &amp; registration evidence</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg text-blue-300 font-bold">4. Complete APC Australian Physiotherapy Entry Pathway (APEP):</div>
                    <div className="pl-6 space-y-1.5 border-l-2 border-blue-500/50 ml-4 text-xs">
                      <div>• Stage 1: Eligibility Assessment (AUD $1,170)</div>
                      <div>• Stage 2: Cultural Safety Training (AUD $242)</div>
                      <div className="text-emerald-300 font-bold">★ Issue of Interim Certificate (Supports Ahpra Limited Registration for Supervised Practice)</div>
                      <div>• Stage 3: Written Assessment (AUD $2,078)</div>
                      <div>• Stage 4: Capability Assessment — 1.5-hr online oral exam (AUD $2,928)</div>
                      <div>• Stage 5: Clinical Workshop — 1-day in Melbourne (AUD $1,903)</div>
                    </div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg text-emerald-400 font-bold">5. APC Final Certificate Issued</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">6. Ahpra General Registration Application</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">7. APC Migration Skills Assessment (AUD $1,674, where required for visas)</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg">8. SkillSelect Expression of Interest (EOI) for Subclasses 189 / 190 / 491</div>
                    <div className="text-center text-blue-400">↓</div>
                    <div className="p-2.5 bg-slate-800 rounded-lg text-blue-300 font-bold">9. Visa Invitation, Grant &amp; Australian Physiotherapy Career</div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900 text-sm text-blue-950 dark:text-blue-200">
                  <strong>Important Distinction:</strong> The <strong>APC</strong> assesses your physiotherapy qualifications and competence. <strong>Ahpra</strong> handles professional registration and legal title protection. The <strong>Department of Home Affairs</strong> handles visa grants and immigration.
                </div>
              </section>

              {/* Section 2: Can Pakistani Physiotherapists Apply? */}
              <section id="eligibility" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    2. Can a Pakistani Physiotherapist Apply?
                  </h2>
                </div>

                <p>
                  <strong>Yes.</strong> The Australian Physiotherapy Council specifically publishes guidance for Pakistani physiotherapists and confirms that Pakistani applicants are eligible for the Australian Physiotherapy Entry Pathway.
                </p>
                <p>
                  For APEP entry, the Council requires an overseas physiotherapy qualification at least at diploma level and either:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Unrestricted registration in the country where you completed your training, OR</li>
                  <li>The legal authority to practise without restriction where no statutory regulatory body exists.</li>
                </ul>
                <p>
                  Because Pakistan currently does not operate a single centralized mandatory licensing body for physiotherapists across all provinces in the exact same manner as PMDC regulates doctors, the APC recognizes official legal authority to practice and university conferrals. Pakistani DPT holders should not assume their degrees are rejected; the APC evaluates your individual academic transcripts and clinical curricula.
                </p>
              </section>

              {/* Section 3 & 4: Qualification & Documents */}
              <section className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    3 &amp; 4. Document Verification &amp; Clinical Evidence
                  </h2>
                </div>

                <p>
                  Do not rely solely on your degree certificate. The APC requires concrete evidence of the education and supervised clinical placements you completed during your DPT.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Academic Records</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      DPT degree certificate, complete semester transcripts, and official syllabus outlines. If transcripts lack clinical breakdown, request an official institutional placement letter from your university registrar.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Clinical Hours Evidence</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>Crucial:</strong> Never self-certify or draft your own clinical hours statement. All evidence must originate directly from your teaching hospital or university on official letterhead.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Professional &amp; Practice Standing</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Evidence of legal authority to practise, provincial physical therapy council memberships (where held), or hospital appointment letters confirming clinical roles.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Employment Records (If Experienced)</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Detailed reference letters listing exact job duties, weekly working hours, dates, official pay slips, and hospital registration numbers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: The 5 APEP Stages */}
              <section id="apep-stages" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    5. The 5 APEP Assessment Stages
                  </h2>
                </div>

                <p>
                  The Australian Physiotherapy Entry Pathway (APEP) is designed to evaluate overseas qualifications efficiently. While the APC indicates that APEP takes approximately <strong>9 months for candidates who progress as fast as possible</strong>, candidates should budget 12–15 months to allow for preparation, booking schedules, and travel planning.
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">STAGE 1</span>
                      <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold">Online &bull; AUD $1,170</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Eligibility Assessment</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      The Council reviews your DPT degree, transcripts, and practice evidence to confirm you meet the threshold to enter the assessment stream. Estimated turnaround is 3 weeks when documentation is complete.
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">STAGE 2</span>
                      <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold">Online Module &bull; AUD $242</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Cultural Safety Training</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Covers Australia's healthcare environment, ethical practice, and culturally safe care for Aboriginal and Torres Strait Islander peoples. (Fee is AUD $242 from 21 October 2026; was AUD $235).
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">STAGE 3</span>
                      <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold">Computer Exam &bull; AUD $2,078</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Written Assessment</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Tests theoretical clinical knowledge, clinical reasoning, patient safety, pharmacology relevant to PT, and ethical decision-making. Avoid rote memorization of Pakistani lecture notes—focus on Australian evidence-based clinical reasoning. (Fee is AUD $2,078 from 21 October 2026; was AUD $2,017).
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">STAGE 4</span>
                      <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold">Remote Oral &bull; AUD $2,928</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Capability Assessment</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      A 1.5-hour remote online oral examination evaluating competencies across clinical scenarios. Candidates talk through patient cases, identify red flags, explain clinical prioritisation, and verbalize escalation procedures. Completed entirely from Pakistan.
                    </p>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">STAGE 5</span>
                      <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold">In-Person &bull; AUD $1,903</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Clinical Workshop (Melbourne)</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      The single face-to-face component. A 1-day practical workshop held in Melbourne with experienced Australian physiotherapy educators. Evaluates hands-on assessment, manual handling, communication, and treatment techniques in simulated clinical environments. (Fee is AUD $1,903 from 21 October 2026; was AUD $1,464).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Interim Certificate & Supervised Practice */}
              <section id="interim" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Can You Work in Australia Before Finishing APEP?
                  </h2>
                </div>

                <div className="p-6 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-3">
                  <h3 className="font-bold text-emerald-950 dark:text-emerald-100 text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    The Interim Certificate Advantage
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-900 dark:text-emerald-200 leading-relaxed">
                    After you successfully complete <strong>Stage 1 (Eligibility Assessment)</strong> and <strong>Stage 2 (Cultural Safety Training)</strong>, the APC issues an <strong>Interim Certificate</strong>.
                  </p>
                  <ul className="text-sm text-emerald-900 dark:text-emerald-200 space-y-1.5 list-disc list-inside">
                    <li>The Interim Certificate is <strong>valid for 2 years</strong>.</li>
                    <li>It supports your eligibility to apply for <strong>Limited Registration for Supervised Practice</strong> with Ahpra.</li>
                    <li>This means you may have the opportunity to secure a supervised physiotherapy position in Australia and earn an Australian salary while completing your Written Assessment, Capability Assessment, and Clinical Workshop.</li>
                  </ul>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 italic pt-1">
                    Note: An Interim Certificate does not give you unrestricted practice rights. You must independently satisfy Ahpra's Limited Registration criteria, have an approved supervisor, and hold an appropriate visa.
                  </p>
                </div>
              </section>

              {/* Section: English Language Standards */}
              <section id="english" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    English Language Requirements in 2026
                  </h2>
                </div>

                <p>
                  The National Health Practitioner Boards updated minimum English test scores effective <strong>23 April 2026</strong>. Pakistani applicants who need the testing pathway must achieve the following scores:
                </p>

                {/* English Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Test Provider</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Overall</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Listening</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Reading</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Writing</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Speaking</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Key Remark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      {englishRequirements.map((row, idx) => (
                        <tr key={idx} className={idx === 1 ? "bg-blue-50/40 dark:bg-blue-950/20" : ""}>
                          <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.test}</td>
                          <td className="py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">{row.overall}</td>
                          <td className="py-3 px-4">{row.listening}</td>
                          <td className="py-3 px-4">{row.reading}</td>
                          <td className="py-3 px-4 font-semibold text-emerald-700 dark:text-emerald-300">{row.writing}</td>
                          <td className="py-3 px-4 font-bold text-indigo-700 dark:text-indigo-300">{row.speaking}</td>
                          <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Registration English vs Migration Points</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Ahpra registration requires meeting the registration standard (e.g. IELTS 7.0 / 6.5 Writing). However, for skilled migration: <strong>Proficient English awards 10 points</strong> and <strong>Superior English awards 20 points</strong>. Scoring higher significantly boosts your EOI rank.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Two Test Sittings Allowed</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Ahpra permits combining results from a maximum of two test sittings within a 12-month period if specific minimum component rules are satisfied. You cannot combine two different test types (e.g. IELTS with PTE).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: APEP Fees Table & Skills Assessment */}
              <section id="fees" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    APEP Fees in Late 2026 &amp; Cost Breakdown
                  </h2>
                </div>

                <p>
                  The Australian Physiotherapy Council implemented an official fee adjustment effective <strong>21 October 2026</strong>. Here are the exact stage costs:
                </p>

                {/* Fee Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">APEP Assessment Stage</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Fee (from 21 Oct 2026)</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Delivery Format</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Timeline / Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      {apepFeeTable.map((item, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">{item.stage}</td>
                          <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">{item.fee}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">{item.format}</td>
                          <td className="py-3 px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{item.duration}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50/70 dark:bg-blue-950/40 font-bold">
                        <td className="py-3.5 px-4 text-blue-950 dark:text-blue-100">Total APEP Assessment Fee</td>
                        <td className="py-3.5 px-4 text-emerald-700 dark:text-emerald-300 text-lg">AUD $8,321</td>
                        <td className="py-3.5 px-4 text-xs text-blue-900 dark:text-blue-200" colSpan={2}>
                          Official APC fee total from 21 October 2026
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Skills Assessment Distinction Box */}
                <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-2xl space-y-2">
                  <h4 className="font-bold text-amber-900 dark:text-amber-200 text-base flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    Important Distinction: Skills Assessment Is Separate (AUD $1,674)
                  </h4>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    A frequent misconception in online forums is quoting AUD $9,995 as the "APEP fee." The late-2026 APEP fee alone is <strong>AUD $8,321</strong>. The additional <strong>AUD $1,674</strong> is for the <em>Complete Skills Assessment for Permanent Residence / Skilled Regional Visas</em>, an immigration evaluation taking 8–10 weeks.
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-1">
                    APEP ($8,321) + Migration Skills Assessment ($1,674) = Total APC Fees of AUD $9,995 (if both are pursued).
                  </p>
                </div>
              </section>

              {/* Section: Skilled Visas (189, 190, 491, 191) */}
              <section id="migration" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Skilled Migration Pathways for Physiotherapists
                  </h2>
                </div>

                <p>
                  Physiotherapists are classified under <strong>ANZSCO 252511</strong> on Australia’s Skilled Occupation List, with the APC as the designated assessing body. Three primary points-tested visa streams are available:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">
                      Subclass 189
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Skilled Independent</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Permanent visa with complete freedom to live and work anywhere in Australia. Highly competitive; no sponsor or state nominator required.
                    </p>
                    <div className="text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700">
                      Visa Base Charge: AUD $6,135
                    </div>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                    <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded text-xs font-bold uppercase">
                      Subclass 190
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Skilled Nominated</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Permanent visa providing +5 points on your points test through state/territory nomination. Requires commitment to the nominating state.
                    </p>
                    <div className="text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700">
                      Visa Base Charge: AUD $6,140
                    </div>
                  </div>

                  <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                    <span className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded text-xs font-bold uppercase">
                      Subclass 491 &rarr; 191
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Regional Provisional</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      5-year visa providing +15 points. Huge demand across regional Australia. Leads to Subclass 191 Permanent Residency.
                    </p>
                    <div className="text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700">
                      Visa Base Charge: AUD $6,140
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <strong>💡 Critical 491 &rarr; 191 PR Rule:</strong> The Department of Home Affairs specifically confirms there is <strong>no minimum income threshold</strong> for the Subclass 191 regional provisional stream. You only need to demonstrate 3 income years of ATO Notices of Assessment while complying with regional visa conditions.
                </div>
              </section>

              {/* Section: Common Mistakes */}
              <section id="mistakes" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    7 Mistakes Pakistani Physiotherapists Must Avoid
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { num: "01", title: "Assuming DPT automatically gives Australian registration", desc: "A Pakistani DPT degree does not grant direct registration. You must pass APC assessment and register through Ahpra." },
                    { num: "02", title: "Following the obsolete Standard Assessment pathway", desc: "The old exam system is retired. APEP is the current, active pathway for overseas-trained physiotherapists." },
                    { num: "03", title: "Relying on outdated English score thresholds", desc: "English rules changed on 23 April 2026. PTE requires a Speaking score of 76; IELTS requires 6.5 in Writing (not 7.0)." },
                    { num: "04", title: "Confusing APEP fees with migration skills assessment", desc: "APEP costs AUD $8,321; the migration assessment is AUD $1,674. Together they total AUD $9,995." },
                    { num: "05", title: "Believing 65 points guarantees an invitation", desc: "65 is merely the bare eligibility threshold. Invitations are competitive and allocated in ranked rounds." },
                    { num: "06", title: "Believing in a blanket '2-year rule' for state nomination", desc: "State nomination obligations vary by state. Always review the nominating state's current conditions directly." },
                    { num: "07", title: "Assuming Subclass 491 is permanent residency", desc: "491 is a 5-year provisional visa. It leads to permanent residency through Subclass 191 after fulfilling 3-year requirements." }
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

              {/* Section: Practical 12-Month Timeline */}
              <section className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Practical 12-Month Planning Model
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700 w-1/4">Period</th>
                        <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Action Plan for Pakistani Applicants</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Months 1 – 2</td>
                        <td className="py-3 px-4 text-sm">Collect DPT transcripts, university clinical placement letter, valid passport; begin dedicated IELTS / PTE study.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Months 2 – 4</td>
                        <td className="py-3 px-4 text-sm">Sit IELTS Academic or PTE Academic; finalize APC document bundle; resolve any documentation gaps.</td>
                      </tr>
                      <tr className="bg-blue-50/40 dark:bg-blue-950/20">
                        <td className="py-3 px-4 font-bold text-blue-950 dark:text-blue-200">Months 3 – 5</td>
                        <td className="py-3 px-4 text-sm">Submit APC Eligibility Assessment (Stage 1); complete Cultural Safety Training (Stage 2); obtain Interim Certificate.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Months 4 – 7</td>
                        <td className="py-3 px-4 text-sm">Prepare clinical reasoning; sit and complete Written Assessment (Stage 3).</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Months 6 – 9</td>
                        <td className="py-3 px-4 text-sm">Book and sit 1.5-hour online remote Capability Assessment (Stage 4) from home.</td>
                      </tr>
                      <tr className="bg-emerald-50/40 dark:bg-emerald-950/20">
                        <td className="py-3 px-4 font-bold text-emerald-900 dark:text-emerald-200">Months 8 – 12+</td>
                        <td className="py-3 px-4 text-sm">Obtain Australian visitor visa; travel to Melbourne; complete 1-day Clinical Workshop (Stage 5); receive APC Final Certificate.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Immigration Phase</td>
                        <td className="py-3 px-4 text-sm">Lodge Ahpra General Registration; complete APC Migration Skills Assessment; submit SkillSelect EOI (189/190/491).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: 15-Point Final Checklist */}
              <section id="checklist" className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Final 15-Point Checklist for Pakistani Physiotherapists
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Recognized 5-year DPT degree from an accredited Pakistani university",
                    "Evidence of legal authority to practise physiotherapy in Pakistan",
                    "Complete academic marksheets and semester-wise transcripts",
                    "Official university letter validating supervised clinical placement hours",
                    "Valid Pakistani passport with at least 18 months remaining validity",
                    "IELTS Academic (7.0 / 6.5 Writing) or PTE Academic (63 / 76 Speaking)",
                    "Understanding of late-2026 APEP assessment fees (AUD $8,321)",
                    "Separate allocation for APC Migration Skills Assessment (AUD $1,674)",
                    "Dedicated Melbourne travel budget (flights, hotel, visa, daily expenses)",
                    "Clean police clearance certificates from Pakistan and overseas countries lived in",
                    "Understanding Ahpra Limited Registration requirements for supervised practice",
                    "Calculated SkillSelect points (Age, English, Education, Experience)",
                    "Evaluating Subclass 189, 190, and 491 regional options simultaneously",
                    "Current state nomination requirement checks for regional employment",
                    "Complete digital and physical copies of every document submitted"
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">☐</span>
                      <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section: FAQs */}
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

              {/* Official Sources */}
              <section className="space-y-4 pt-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Official Regulatory Sources &amp; Portals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <a 
                    href="https://physiocouncil.com.au" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>Australian Physiotherapy Council (APC)</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.ahpra.gov.au" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>Ahpra Registration Standards</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://immi.homeaffairs.gov.au" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                  >
                    <span><strong>Home Affairs SkillSelect Portal</strong></span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </section>

              {/* Author Bio Card */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-600 to-blue-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                    DH
                  </div>
                  <div className="text-center sm:text-left space-y-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">Dr Hakeem</h4>
                      <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                        Physiotherapy &amp; Allied Health Specialist
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dr Hakeem is a physical therapy practitioner and healthcare migration analyst specializing in Australian Health Practitioner Regulation Agency (Ahpra) licensing, Australian Physiotherapy Council (APC) APEP evaluations, and skilled migration pathways for Pakistani rehabilitation professionals.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 pt-1">
                      Editorial Review: Dr. M. Malik, MBBS (Lead Editor, MoveAbroad.pk). Grounded in verified APC, Ahpra, and Department of Home Affairs guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center space-y-4 shadow-lg">
                <h3 className="font-display text-2xl font-bold">Planning Your Australian Healthcare Migration?</h3>
                <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
                  Explore our comprehensive Australian healthcare licensing hubs, compare visa subclasses, and access detailed document checklists for Pakistani professionals.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link 
                    to="/healthcare/australia/physiotherapist" 
                    className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    View Australia Physiotherapy Pathway
                  </Link>
                  <Link 
                    to="/healthcare-abroad" 
                    className="px-6 py-3 bg-blue-800/80 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-colors border border-blue-400/40"
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
