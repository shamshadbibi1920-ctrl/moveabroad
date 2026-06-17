import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, CheckCircle2, AlertTriangle, Landmark, 
  Clock, MapPin, ExternalLink, PlaneTakeoff, 
  Briefcase, ShieldCheck, HeartPulse, HelpCircle, CreditCard
} from 'lucide-react';
import { getCountryData } from '../data/countries';

export default function GermanyVisaProcess() {
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

  const visaSteps = [
    { title: "Get University Admission", desc: "Receive your unconditional 'Zulassung' (admission letter) from a German university." },
    { title: "Get APS Certificate", desc: "Apply for the mandatory APS certificate. This can take 4-6 weeks." },
    { title: "Open Blocked Account", desc: "Open a blocked account (Sperrkonto) and transfer the required €11,208." },
    { title: "Get Health Insurance", desc: "Purchase valid German statutory or private health insurance." },
    { title: "Collect & Attest Documents", desc: "Gather all documents, photos, forms, and get educational certificates attested (HEC/IBCC)." },
    { title: "Book Visa Appointment", desc: "Book an appointment at the German Embassy in Islamabad or Consulate in Karachi." },
    { title: "Attend Visa Interview", desc: "Submit your documents, pay the visa fee (approx. €75 equivalent in PKR), and give interview." },
    { title: "Wait for Decision", desc: "Processing time can range from 4 to 8 weeks on average." },
    { title: "Collect Visa & Travel", desc: "Once approved, collect your passport with the stamped visa and prepare to travel." }
  ];

  const documents = [
    "Valid Passport (minimum 1 year validity)",
    "Visa Application Form (completed and signed)",
    "Passport-sized photographs (as per biometric standards)",
    "University Admission Letter (Zulassung)",
    "APS Certificate (Original)",
    "Academic Certificates (attested by IBCC and HEC)",
    "Blocked Account Confirmation (€11,208)",
    "Health Insurance Certificate",
    "Proof of Accommodation in Germany (if available)",
    "Financial Sponsorship Letter (if applicable)",
    "Motivation Letter (SOP)",
    "Curriculum Vitae (Europass format)"
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          {data?.heroImage ? (
            <img 
              src={data.heroImage} 
              alt={`${countryName} skyline`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
          loading="eager"
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
              German Student Visa Process
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-blue-100 mb-8 leading-relaxed">
              The complete step-by-step guide for Pakistani scholars applying for the German National Visa.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Warning Box */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm text-amber-900 dark:text-amber-100 flex items-start">
          <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <h3 className="text-xl font-bold mb-1">Important Notice</h3>
            <p className="text-lg">Visa requirements and processes can change. <strong>Always verify the latest checklist with the official German Embassy Pakistan website</strong> before applying.</p>
          </div>
        </motion.div>

        {/* 1. Types of German Student Visas */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
            1. Types of German Student Visas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">Student Visa (Visum zu Studienzwecken)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">For students who have already been accepted to a German university. This is the most common visa for degree-seeking international students.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">Student Applicant Visa</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">For individuals who need to be in Germany to apply for university admission or take an entrance exam. Valid for 3-6 months.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">Language Course Visa</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">For educational activities lasting from 3 to 12 months solely for the purpose of attending a German language course.</p>
            </div>
          </div>
        </motion.section>

        {/* 2. Basic Eligibility & 4. Blocked Account */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              2. Basic Eligibility Requirements
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">University Admission</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">A valid letter of acceptance from a recognized German higher education institution.</span>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Financial Proof</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Mandatory €11,208 deposited in a German blocked account, or proof of a recognized scholarship.</span>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Academic Qualifications</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Previous educational certificates recognized by the German system (and APS verified for Pakistanis).</span>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Language Proficiency</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">IELTS/TOEFL for English programs, or Goethe-Zertifikat/TestDaF for German programs.</span>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Health Insurance</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Valid health coverage for your entire stay in Germany from day one.</span>
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section id="blocked-account" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-indigo-50 dark:bg-indigo-900/10 rounded-[2rem] p-8 shadow-sm border border-indigo-100 dark:border-indigo-800/30">
            <h2 className="font-display text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-6 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
              <Landmark className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" /> 4. Blocked Account Explained
            </h2>
            <div className="space-y-4 text-indigo-900 dark:text-indigo-200">
              <p className="text-sm"><strong>What is it?</strong> A special bank account (Sperrkonto) that serves as proof of financial resources. It's required by German law to ensure you can cover your living expenses.</p>
              <p className="text-sm"><strong>Required Amount:</strong> €11,208 for one year (which allows you to withdraw a maximum of €934 per month).</p>
              <div>
                <strong className="block mb-2">Recommended Digital Providers:</strong>
                <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                  <li><strong>Fintiba</strong> (Fast, digital, popular among Pakistanis)</li>
                  <li><strong>Expatrio</strong> (Also provides health insurance bundles)</li>
                  <li><strong>Coracle</strong></li>
                  <li>Deutsche Bank (Traditional, slower process)</li>
                </ul>
              </div>
              <p className="text-sm"><strong>How to open from Pakistan:</strong> Create an account online with a digital provider, verify your identity via passport (or video call), receive the IBAN, and remit the funds from Pakistan via a local bank (e.g., State Bank regulations apply, takes 1-2 weeks).</p>
            </div>
          </motion.section>
        </div>

        {/* 5. Visual Step-by-Step Timeline */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
            5. Step-by-Step Application Process
          </h2>
          <div className="relative border-l-4 border-blue-200 dark:border-blue-800 ml-4 md:ml-6 space-y-10 py-4">
            {visaSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10">
                <div className="absolute -left-5 md:-left-[1.35rem] top-1 w-9 h-9 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm z-10">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. Document Checklist & 7. Interview Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <FileText className="w-6 h-6 mr-3 text-blue-500" /> 3. Document Checklist
            </h2>
            <ul className="space-y-3">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-sm text-slate-600 dark:text-slate-400 italic">
              Note: Bring original documents and typically 2 sets of A4 sized photocopies for the embassy interview.
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <HelpCircle className="w-6 h-6 mr-3 text-purple-500" /> 7. Visa Interview Tips
            </h2>
            <div className="space-y-5 flex-1">
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block mb-1">Common Questions:</strong>
                <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Why did you choose Germany and not your home country?</li>
                  <li>Why this specific university and course?</li>
                  <li>Tell me about the course structure and modules.</li>
                  <li>Where exactly is the university located?</li>
                  <li>What are your post-graduation career plans?</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block mb-1">Preparation & Appearance:</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Answer confidently and concisely in English. Know your course curriculum inside-out. Dress in formal or smart-casual business attire.</p>
              </div>
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block mb-1">Reasons for Rejection:</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Incomplete documents, fake educational certificates, unable to answer basic questions about the study program, or suspicion of immigration intent rather than study intent.</p>
              </div>
            </div>
          </motion.section>
        </div>

        {/* 6. Embassy Info & 8. Processing Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center border-b border-slate-700 pb-4">
              <MapPin className="w-6 h-6 mr-3 text-red-400" /> 6. Embassy Contact Info
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-blue-300">Embassy of Germany, Islamabad</h4>
                <p className="text-sm text-slate-300 mt-1">Ramna 5, Diplomatic Enclave, Islamabad<br/><strong>Coverage:</strong> Punjab, KP, GB, AJK, Islamabad</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">Consulate General, Karachi</h4>
                <p className="text-sm text-slate-300 mt-1">92-A/7, Block 5, Clifton, Karachi<br/><strong>Coverage:</strong> Sindh and Balochistan</p>
              </div>
              <a href="https://pakistan.diplo.de/pk-en/service/2-study-visa" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm bg-white text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors">
                Book Appointment / Official Site <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 ">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <Clock className="w-6 h-6 mr-3 text-amber-500" /> 8. Processing Time
            </h2>
            <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl mb-4">
              <span className="text-4xl font-bold text-amber-600 dark:text-amber-500">4 to 8 Weeks</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Average processing time after your interview at the embassy. However, securing the appointment date itself can take weeks or months.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              <strong>Delay Advice:</strong> Apply well in advance (3-4 months before the semester). If delayed, ask your university for an extension letter to present at immigration upon arrival.
            </p>
          </motion.section>
        </div>

        {/* 9. After Visa Approval */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] p-8 shadow-sm border border-emerald-100 dark:border-emerald-800/30">
          <h2 className="font-display text-2xl font-bold text-emerald-900 dark:text-emerald-50 mb-6 flex items-center border-b border-emerald-200 dark:border-emerald-800/50 pb-4">
            <PlaneTakeoff className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> 9. After Visa Approval
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 dark:bg-black/20 p-5 rounded-xl">
              <strong className="text-emerald-800 dark:text-emerald-300 block mb-2 text-lg">1. Register at University</strong>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Complete standard matriculation (Immatrikulation) immediately upon arriving to receive your student ID.</p>
            </div>
            <div className="bg-white/60 dark:bg-black/20 p-5 rounded-xl">
              <strong className="text-emerald-800 dark:text-emerald-300 block mb-2 text-lg">2. City Registration (Anmeldung)</strong>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Register your residential address at the local Resident's Registration Office (Bürgeramt) within 1-2 weeks.</p>
            </div>
            <div className="bg-white/60 dark:bg-black/20 p-5 rounded-xl">
              <strong className="text-emerald-800 dark:text-emerald-300 block mb-2 text-lg">3. Unlock Blocked Account</strong>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Open a local German checking account (Girokonto) to receive your monthly payouts from the blocked account.</p>
            </div>
            <div className="bg-white/60 dark:bg-black/20 p-5 rounded-xl">
              <strong className="text-emerald-800 dark:text-emerald-300 block mb-2 text-lg">4. Residence Permit</strong>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Before your entry visa expires, visit the Foreigners' Authority (Ausländerbehörde) to convert it to a residence permit.</p>
            </div>
          </div>
        </motion.section>

        {/* 10. Important Tips & Official Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              10. Important Tips for Pakistanis
            </h2>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" /> Avoid tight schedules. The APS certificate alone takes 4-6 weeks, and transferring funds for the blocked account takes 1-2 weeks.</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" /> Always notarize document photocopies exactly as instructed by the embassy guidelines (e.g., using specific public notaries).</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" /> Double-check your blocked account details before initiating international remittance to avoid delays from the State Bank of Pakistan.</li>
            </ul>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
              <ExternalLink className="w-6 h-6 mr-3 text-slate-500" /> Official Links
            </h2>
            <div className="space-y-3">
              <a href="https://pakistan.diplo.de/pk-en/service/2-study-visa" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                German Embassy Pakistan - Study Visa <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://pakistan.diplo.de/pk-en/service/aps" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                APS Pakistan Official <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.fintiba.com/" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Fintiba (Blocked Account) <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.expatrio.com/" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Expatrio (Blocked Account) <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/visas/" target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                DAAD Visa Guide <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
  );
}

