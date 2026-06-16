import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GraduationCap, DollarSign, Calendar, FileText, Globe, Clock, AlertTriangle, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { getCountryData } from '../data/countries';

const scholarships = [
  {
    id: "daad",
    name: "DAAD Scholarship (Most Important)",
    description: "The Deutscher Akademischer Austauschdienst (DAAD) offers the most prestigious and generous scholarships for international students, heavily supporting students from developing countries like Pakistan.",
    types: [
      "Development-Related Postgraduate Courses (EPOS)",
      "Research Grants for Doctoral Candidates",
      "Research Stays for University Academics",
      "Helmut-Schmidt Programme (Public Policy)"
    ],
    stipend: "€934 for graduates, €1,200 for doctoral candidates",
    coverage: "Monthly stipend, health insurance, travel allowance, and study allowance.",
    levels: "Master, PhD",
    documents: ["DAAD Application Form", "Motivation Letter (signed)", "Curriculum Vitae (Europass)", "Academic Degrees & Transcripts", "Professional Experience Letters (usually 2 years min for EPOS)", "Language Certificate (IELTS/TOEFL or German)"],
    deadline: "Varies by specific program and university (Typically August to October)",
    link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/",
    processing: "4-6 Months",
    successRate: "Highly Competitive",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "erasmus",
    name: "Erasmus+ Scholarship",
    description: "A European Union program offering full scholarships for joint master's degrees (Erasmus Mundus). It allows you to study in at least two different European countries, including Germany.",
    types: ["Erasmus Mundus Joint Master Degrees (EMJMD)"],
    stipend: "Up to €1,400 monthly",
    coverage: "Tuition fees, travel costs, visa, and living allowance.",
    levels: "Master",
    documents: ["Motivation Letter", "CV", "Academic Transcripts", "2-3 Recommendation Letters", "Proof of English Proficiency", "Proof of Residence"],
    deadline: "Usually between October and January",
    link: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
    processing: "3-5 Months",
    successRate: "Extremely Competitive",
    color: "from-sky-500 to-blue-500"
  },
  {
    id: "heinrich",
    name: "Heinrich Böll Foundation",
    description: "Awards scholarships to international students who share the foundation's green, democratic ideals. Perfect for those engaged in environmental or social issues.",
    types: ["Study Scholarships for Master's", "Promotionsstipendien (PhD)"],
    stipend: "€934 per month + allowances",
    coverage: "Monthly stipend and various individual allowances.",
    levels: "Master, PhD",
    documents: ["Motivation Letter focusing on social/political engagement", "Academic Transcripts", "Expert Reference from a University Professor", "Reference regarding civic commitment"],
    deadline: "March 1 and September 1 annually",
    link: "https://www.boell.de/en/scholarships",
    processing: "4-6 Months",
    successRate: "Highly Competitive",
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: "konrad",
    name: "Konrad Adenauer Foundation (KAS)",
    description: "Supports international students demonstrating academic excellence, political interest, and commitment to democracy and human rights.",
    types: ["International Scholarship Program"],
    stipend: "€934 (Master) or €1,200 (PhD) per month",
    coverage: "Monthly stipend, health insurance subsidy, family allowance.",
    levels: "Master, PhD",
    documents: ["Meaningful CV", "Copy of university degree", "Proof of German language skills (B2 level required)", "Two academic references", "Motivation Letter"],
    deadline: "Usually July 15 annually",
    link: "https://www.kas.de/en/web/begabtenfoerderung-und-kultur/foreign-students",
    processing: "4-5 Months",
    successRate: "Competitive (requires German B2)",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "friedrich",
    name: "Friedrich Ebert Foundation",
    description: "Geared towards young talents from the Global South who exhibit excellent academic merit and social or political involvement matching the values of social democracy.",
    types: ["Basic Scholarship Programme"],
    stipend: "Up to €934 per month",
    coverage: "Monthly stipend, health insurance.",
    levels: "Bachelor, Master, PhD",
    documents: ["Letter of Motivation", "CV", "Academic Transcripts", "Proof of German skills (often required)"],
    deadline: "Varies via their online portal",
    link: "https://www.fes.de/studienfoerderung/bewerbung",
    processing: "3-4 Months",
    successRate: "Competitive",
    color: "from-rose-600 to-pink-600"
  },
  {
    id: "hec",
    name: "HEC Germany Scholarships",
    description: "The Higher Education Commission (HEC) of Pakistan frequently announces funded seats or joint scholarship partnerships with Germany for Pakistani nationals.",
    types: ["HEC Overseas Scholarships", "Joint HEC-DAAD funding (when active)"],
    stipend: "Varies per HEC MoU",
    coverage: "Usually covers tuition, living stipend, and return airfare.",
    levels: "Master, PhD",
    documents: ["HEC online application", "Attested Degrees from HEC", "NTS/HAT test scores", "NOC from employer (if employed)", "Admission letter or supervisor acceptance"],
    deadline: "Announced periodically on HEC Website",
    link: "https://www.hec.gov.pk/",
    processing: "3-6 Months",
    successRate: "Moderate to High (restricted to Pakistanis)",
    color: "from-green-600 to-emerald-700"
  },
  {
    id: "university",
    name: "University Specific Scholarships",
    description: "Many top universities have their own unique aid packages. Examples include TUM's scholarship for international students and RWTH Aachen's distinct aid programs.",
    types: ["TUM Scholarships", "RWTH Aachen Scholarships", "DAAD Matching Funds"],
    stipend: "Varies (€300 - €1,000+ monthly)",
    coverage: "Often a partial living allowance.",
    levels: "Bachelor, Master",
    documents: ["Proof of enrollment", "Academic transcripts", "Proof of financial need (sometimes)", "Motivation letter"],
    deadline: "Usually beginning of the semester (April/October)",
    link: "Check university specific websites (e.g., TUM, RWTH)",
    processing: "1-2 Months",
    successRate: "Moderate (Depends on the University)",
    color: "from-purple-600 to-fuchsia-600"
  },
  {
    id: "deutschland",
    name: "Deutschland Stipendium",
    description: "The Germany Scholarship provides financial and non-material support to high-achieving and committed students from all over the world.",
    types: ["Merit-based financial support"],
    stipend: "€300 per month",
    coverage: "Direct financial support. At least two semesters.",
    levels: "Bachelor, Master",
    documents: ["University admission/enrollment verification", "Academic transcripts/Abitur equivalent", "Proof of civic engagement or special personal circumstances"],
    deadline: "Determined by each individual university",
    link: "https://www.deutschlandstipendium.de/deutschlandstipendium/de/services/english/english_node.html",
    processing: "1-3 Months",
    successRate: "Moderate",
    color: "from-amber-500 to-yellow-600"
  }
];

export default function GermanyScholarships() {
  const data = getCountryData('germany');
  const countryName = 'Germany';

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-900"></div>
          )}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl">
            <Link to="/study/germany" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              &larr; Back to Study in Germany
            </Link>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Scholarships in {countryName} for Pakistanis
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore your complete guide to studying in {countryName} with generous financial aid and fully-funded programs.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Prominent Note */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm text-amber-900 dark:text-amber-100 flex items-start">
          <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <h3 className="text-xl font-bold mb-1">Crucial Requirement</h3>
            <p className="text-lg"><strong>Most scholarships require you to apply AFTER getting university admission.</strong> Secure your university acceptance first, as the "Zulassung" (Admission Letter) is often a mandatory document for the scholarship application.</p>
          </div>
        </motion.div>

        {/* Scholarship Cards */}
        <div className="space-y-12">
          {scholarships.map((scholarship, index) => (
            <motion.div 
              key={scholarship.id}
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row"
            >
              <div className={`md:w-1/3 bg-gradient-to-br ${scholarship.color} p-8 text-white flex flex-col justify-center`}>
                <h2 className="font-display text-3xl font-bold mb-4">{scholarship.name}</h2>
                <div className="flex items-center text-white/90 mb-6 bg-black/20 p-4 rounded-xl">
                  <DollarSign className="w-8 h-8 mr-3 flex-shrink-0 text-green-300" />
                  <span className="text-xl font-bold">{scholarship.stipend}</span>
                </div>
                <p className="text-white/80 leading-relaxed">{scholarship.description}</p>
                <div className="mt-8 flex items-center text-sm font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Success Rate: <span className="ml-2 bg-white/20 px-3 py-1 rounded-full">{scholarship.successRate}</span>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="flex items-center text-slate-900 dark:text-slate-100 font-bold mb-3"><GraduationCap className="w-5 h-5 mr-2 text-indigo-500" /> Eligible Levels</h4>
                    <p className="text-slate-600 dark:text-slate-400">{scholarship.levels}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center text-slate-900 dark:text-slate-100 font-bold mb-3"><Calendar className="w-5 h-5 mr-2 text-rose-500" /> Deadline</h4>
                    <p className="text-slate-600 dark:text-slate-400">{scholarship.deadline}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center text-slate-900 dark:text-slate-100 font-bold mb-3"><Clock className="w-5 h-5 mr-2 text-amber-500" /> Processing</h4>
                    <p className="text-slate-600 dark:text-slate-400">{scholarship.processing}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center text-slate-900 dark:text-slate-100 font-bold mb-3"><Info className="w-5 h-5 mr-2 text-blue-500" /> Types/Focus</h4>
                    <ul className="text-slate-600 dark:text-slate-400 list-disc list-inside">
                      {scholarship.types.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="flex items-center text-slate-900 dark:text-slate-100 font-bold mb-4"><FileText className="w-5 h-5 mr-2 text-emerald-500" /> Required Documents</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                    {scholarship.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-slate-400" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <a href={scholarship.link} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">
                    <Globe className="w-5 h-5 mr-2" /> Official Application Portal
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-x-auto">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">Scholarships Comparison</h2>
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <th className="p-4 rounded-tl-xl border-b border-slate-200 dark:border-slate-700">Scholarship Name</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">Monthly Stipend</th>
                <th className="p-4 border-b border-slate-200 dark:border-slate-700">Degree Levels</th>
                <th className="p-4 rounded-tr-xl border-b border-slate-200 dark:border-slate-700">Competition</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((s, idx) => (
                <tr key={s.id} className="border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold text-slate-800 dark:text-slate-200">{s.name.replace(/ \(.*?\)/, '')}</td>
                  <td className="p-4 text-green-600 dark:text-green-400 font-semibold">{s.stipend}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{s.levels}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{s.successRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Tips & Mistakes Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] p-8 shadow-sm border border-blue-100 dark:border-blue-800/50">
            <h3 className="font-display text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Tips for a Strong Application
            </h3>
            <ul className="space-y-4 text-blue-800 dark:text-blue-200">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">1</div>
                <div><strong>Quantify Your Achievements:</strong> Mention specific GPAs, class ranks, and the impact of your previous projects.</div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">2</div>
                <div><strong>Align with German Values:</strong> Many foundations (like Böll, KAS) fund students whose personal values align with theirs (e.g., green politics, democracy). Research the foundation first.</div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">3</div>
                <div><strong>Perfect Europass CV:</strong> German institutions highly favor the clear, structured Europass CV format. Ensure it has no gaps.</div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">4</div>
                <div><strong>Strong LORs:</strong> Recommendation letters should come from professors who know you well, not just the head of the department.</div>
              </li>
            </ul>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-red-50 dark:bg-red-900/10 rounded-[2rem] p-8 shadow-sm border border-red-100 dark:border-red-800/50">
            <h3 className="font-display text-2xl font-bold text-red-900 dark:text-red-100 mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-600 dark:text-red-400" /> Common Mistakes
            </h3>
            <ul className="space-y-4 text-red-800 dark:text-red-200">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0" />
                <div><strong>Generic Motivation Letters:</strong> Writing a generalized SOP and sending it to multiple foundations. Tailor every letter explicitly.</div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0" />
                <div><strong>Ignoring Language Requirements:</strong> Applying for KAS or Friedrich Ebert without knowing German. Many civic foundations require B2 German even if the study program is in English.</div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0" />
                <div><strong>Missing the Deadline:</strong> Forgetting that scholarship deadlines are often 6-9 months <em>before</em> the study program starts.</div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0" />
                <div><strong>Failing to Provide Admission:</strong> Assuming the scholarship will help get university admission. It's usually the other way around.</div>
              </li>
            </ul>
          </motion.section>
        </div>

      </div>
    </div>
  );
}
