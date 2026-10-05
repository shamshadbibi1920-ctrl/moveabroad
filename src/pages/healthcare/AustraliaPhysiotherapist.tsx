import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Stethoscope, Briefcase, CheckCircle2, Clock, 
  AlertTriangle, Globe, Activity, Award, ShieldCheck, DollarSign, 
  BookOpen, ExternalLink, ArrowRight, Plane
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AustraliaPhysiotherapist() {
  const apepStages = [
    {
      title: "Stage 1: Eligibility Assessment",
      fee: "AUD $1,170",
      desc: "Confirms your DPT degree and practice evidence meet basic requirements to enter the APEP pathway. Review time is approximately 3 weeks."
    },
    {
      title: "Stage 2: Cultural Safety Training",
      fee: "AUD $242 (from 21 Oct 2026)",
      desc: "Mandatory online module covering cultural safety in Australian healthcare, including Aboriginal and Torres Strait Islander health. (Previously AUD $235)."
    },
    {
      title: "Interim Certificate Issued (Milestone)",
      fee: "Included",
      highlight: true,
      desc: "Valid for 2 years. Supports your eligibility to apply for Limited Registration for Supervised Practice with Ahpra, allowing you to work in Australia while finishing remaining assessments!"
    },
    {
      title: "Stage 3: Written Assessment",
      fee: "AUD $2,078 (from 21 Oct 2026)",
      desc: "Theoretical knowledge examination assessing evidence-based clinical practice, patient safety, and clinical reasoning. (Previously AUD $2,017)."
    },
    {
      title: "Stage 4: Capability Assessment",
      fee: "AUD $2,928",
      desc: "A 1.5-hour remote online oral exam evaluating clinical competencies and case reasoning across 9 practice domains. Conducted entirely from Pakistan."
    },
    {
      title: "Stage 5: Clinical Workshop (Melbourne)",
      fee: "AUD $1,903 (from 21 Oct 2026)",
      desc: "The only in-person component. A 1-day practical clinical workshop held in Melbourne with Australian physiotherapy educators. (Previously AUD $1,464)."
    },
    {
      title: "APC Final Certificate",
      fee: "Conferred upon Stage 5 completion",
      desc: "Official certificate confirming completion of the Australian Physiotherapy Entry Pathway."
    },
    {
      title: "Ahpra General Registration",
      fee: "Standard Ahpra application fee",
      desc: "Apply for full, unrestricted General Registration with the Physiotherapy Board of Australia / Ahpra."
    },
    {
      title: "APC Migration Skills Assessment",
      fee: "AUD $1,674",
      highlight: true,
      desc: "Separate assessment required by the Department of Home Affairs for points-tested skilled migration visas (Subclasses 189, 190, 491)."
    }
  ];

  const englishRequirements = [
    { test: "IELTS Academic", overall: "7.0", l: "7.0", r: "7.0", w: "6.5", s: "7.0", note: "Writing requires 6.5 minimum (not 7.0)" },
    { test: "PTE Academic", overall: "63", l: "58", r: "59", w: "60", s: "76", note: "Speaking 76 is a critical benchmark" },
    { test: "OET Physiotherapy", overall: "N/A", l: "350", r: "360", w: "350", s: "360", note: "Minimum sub-scores required" },
    { test: "TOEFL iBT", overall: "91", l: "22", r: "22", w: "23", s: "24", note: "Accepted Ahpra test provider" },
  ];

  return (
    <>
      <SEO 
        title="Australia Physiotherapist Registration 2026: APC APEP Pathway | MoveAbroad.pk" 
        description="Comprehensive 2026 guide to the Australian Physiotherapy Entry Pathway (APEP) for Pakistani DPT graduates. Late-2026 fees (AUD $8,321), new PTE/IELTS scores, Ahpra registration, and skilled visas." 
      />

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        
        {/* Hero Section */}
        <div className="relative text-white py-16 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1400&q=80" 
              alt="Melbourne Skyline" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/healthcare-abroad" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Healthcare
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
                <Activity className="w-8 h-8 text-blue-100" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-display">Physiotherapy in Australia</h1>
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
              Complete guide to the Australian Physiotherapy Entry Pathway (APEP), Ahpra registration, and skilled migration for Pakistani DPT graduates.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Deep-Dive Article Referral Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 rounded-3xl shadow-md mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Featured Editorial Guide by Dr Hakeem
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Moving from Pakistan to Australia as a Physiotherapist in 2026: Complete Step-by-Step Guide
              </h3>
              <p className="text-blue-100 text-sm max-w-2xl">
                Read our in-depth 40-section manual covering the 80% remote APEP roadmap, Melbourne clinical workshop logistics, cold email templates, and the Subclass 491 to 191 PR pathway.
              </p>
            </div>
            <Link 
              to="/blog/moving-to-australia-physiotherapist-pakistan-2026"
              className="px-6 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm transition-all shadow-sm shrink-0 inline-flex items-center gap-2"
            >
              Read Full Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key 2026 Notice Box */}
          <section className="mb-12">
            <div className="bg-indigo-50 dark:bg-indigo-950/40 border-l-4 border-indigo-600 p-6 rounded-r-2xl shadow-sm mb-8">
              <h4 className="font-bold text-indigo-950 dark:text-indigo-100 flex items-center mb-2 text-base sm:text-lg">
                <AlertTriangle className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" /> 
                KEY 2026 UPDATES: APEP Pathway &amp; Late-2026 Fee Schedule
              </h4>
              <p className="text-indigo-900 dark:text-indigo-200 text-sm leading-relaxed mb-3">
                The <strong>Australian Physiotherapy Entry Pathway (APEP)</strong> is the active assessment model for overseas-qualified physiotherapists. The Australian Physiotherapy Council specifically confirms Pakistani physiotherapists are eligible. Approximately <strong>80% of the pathway is conducted remotely from Pakistan</strong>, with only the 1-day Clinical Workshop requiring in-person attendance in Melbourne.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-indigo-950 dark:text-indigo-200 font-medium">
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-indigo-900">
                  <strong>Total APEP Fee:</strong> AUD $8,321 (from 21 Oct 2026)
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-indigo-900">
                  <strong>Migration Skills Assessment:</strong> AUD $1,674 (separate)
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-indigo-900">
                  <strong>Interim Certificate:</strong> Enables Limited Registration
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overview Card */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Career &amp; Salary Overview</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Australia faces acute shortages of qualified physiotherapists across public health networks, private outpatient clinics, aged care facilities, and sports rehabilitation centers.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-900 dark:text-white font-bold mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" /> Australian Physiotherapy Salary Benchmarks
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li><strong className="text-slate-800 dark:text-slate-200">Junior / Grade 1 Physiotherapist:</strong> AUD $75,000 - $85,000 / year</li>
                    <li><strong className="text-slate-800 dark:text-slate-200">Experienced / Private Practice:</strong> AUD $90,000 - $115,000+ / year</li>
                    <li><strong className="text-slate-800 dark:text-slate-200">Regional / Locum Contracts:</strong> AUD $55 - $75+ / hour plus housing</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Physiotherapist is listed under ANZSCO 252511 on Australia's Skilled Occupation List, eligible for permanent Subclass 189 and 190 visas, as well as regional Subclass 491 visas.
                </p>
              </div>

              {/* Required Documents Card */}
              <div className="bg-blue-50/60 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Required Documentation
                </h2>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span><strong>DPT Degree Certificate &amp; Transcripts:</strong> Attested through the HEC online portal and stamped.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span><strong>Supervised Clinical Placement Evidence:</strong> Official university placement letter detailing supervised clinical hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span><strong>Proof of Legal Authority to Practise:</strong> Provincial physical therapy council registration or hospital appointment records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span><strong>English Language Results:</strong> IELTS Academic, PTE Academic, OET, or TOEFL iBT meeting 2026 Ahpra thresholds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span><strong>Identity &amp; Police Clearance:</strong> Valid passport, CNIC, and international police checks.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* English Requirements Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Ahpra English Language Requirements (2026 Rules)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6">
              National Health Practitioner Boards updated the English testing thresholds effective <strong>23 April 2026</strong>. Note that IELTS Writing requires 6.5 (not 7.0), and PTE Academic requires a Speaking score of 76:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                  <tr>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Test Provider</th>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Overall</th>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Listening</th>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Reading</th>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Writing</th>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Speaking</th>
                    <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {englishRequirements.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.test}</td>
                      <td className="py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">{row.overall}</td>
                      <td className="py-3 px-4">{row.l}</td>
                      <td className="py-3 px-4">{row.r}</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">{row.w}</td>
                      <td className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">{row.s}</td>
                      <td className="py-3 px-4 text-xs text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Step-by-Step Pathway Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Step-by-Step APEP &amp; Licensing Roadmap
            </h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              {apepStages.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 ${step.highlight ? 'bg-emerald-600' : 'bg-blue-600'} text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 text-xs`}>
                    {idx + 1}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl ${step.highlight ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'} border shadow-sm transition-all hover:shadow-md`}>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">{step.title}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {step.fee}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fee Summary Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                  APC APEP Assessment Total (from 21 Oct 2026)
                </h4>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">AUD $8,321</p>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Includes Eligibility Assessment ($1,170), Cultural Safety ($242), Written Assessment ($2,078), Capability Assessment ($2,928), and Clinical Workshop ($1,903).
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                  Total with Migration Skills Assessment
                </h4>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">AUD $9,995</p>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Combines the full APEP assessment ($8,321) with the separate APC Migration Skills Assessment ($1,674) required for points-tested visas (189, 190, 491).
                </p>
              </div>
            </div>
          </section>

          {/* Skilled Migration Pathways */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Skilled Migration Visas for Physiotherapists (ANZSCO 252511)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded">
                  Subclass 189
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Skilled Independent</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Permanent residency without state sponsorship. Highly competitive invitation rounds based on points. Base fee: AUD $6,135.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded">
                  Subclass 190
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Skilled Nominated</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  State-nominated permanent visa offering +5 points. Requires living and working in the nominating Australian state. Base fee: AUD $6,140.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded">
                  Subclass 491 &rarr; 191 PR
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Regional Provisional</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  5-year regional visa providing +15 points. Leads to Subclass 191 Permanent Residency with <strong>no minimum income threshold</strong>. Base fee: AUD $6,140.
                </p>
              </div>
            </div>
          </section>

          {/* Official Resources */}
          <section className="mb-16">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links &amp; Regulatory Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="https://physiocouncil.com.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-semibold">Australian Physiotherapy Council (APC)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.ahpra.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-semibold">Ahpra Registration Standards</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://immi.homeaffairs.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-blue-600 dark:text-blue-400 hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-semibold">Home Affairs SkillSelect Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-sm">
            <h4 className="font-bold text-amber-950 dark:text-amber-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Regulatory Disclaimer
            </h4>
            <p className="text-amber-900 dark:text-amber-200 text-sm leading-relaxed">
              Ahpra registration criteria, assessment fees, and Australian skilled visa quotas are subject to periodic review. The APC has confirmed fee increases effective 21 October 2026. Always confirm current fee schedules and visa parameters with the official regulatory authorities prior to lodging your application.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
