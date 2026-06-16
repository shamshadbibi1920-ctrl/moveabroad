import React from 'react';
import { Target, CheckCircle2, AlertTriangle, ExternalLink, GraduationCap, Clock, Banknote, Briefcase, Globe, HeartPulse, Building2, Calendar, FileText, Settings, Key, BookOpen, UserCheck, Languages, MapPin, ChevronRight, Search, Users, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function GermanyDoctorContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-12 space-y-12">
      
      {/* Warning Box */}
      <motion.div variants={itemVariants} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 flex items-start shadow-sm">
        <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500 mr-4 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">Important Notice</h4>
          <p className="text-amber-800 dark:text-amber-200">
            Requirements vary by German state. Always verify with the relevant Landesärztekammer (State Medical Chamber) before starting the process.
          </p>
        </div>
      </motion.div>

      {/* 1. Extended Overview */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Globe className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Expanded Overview
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            <strong>The Doctor Shortage:</strong> Germany is facing an unprecedented shortage of doctors, particularly in rural areas and smaller cities. With an aging population and many physicians retiring, hospitals are urgently recruiting international medical graduates (IMGs).
          </p>
          <p>
            <strong>Community:</strong> There are already hundreds of Pakistani doctors successfully working across Germany. Strong community networks exist to guide newcomers through the transition.
          </p>
          <p>
            <strong>Why Germany?</strong> Unlike the UK's PLAB or USA's USMLE which are highly competitive to get a residency spot, in Germany, once you get your license (Approbation), securing a paid residency (Assistenzarzt) position is significantly easier due to the high demand.
          </p>
          <p>
            <strong>Salary Expectations:</strong> A regular Assistant Doctor (Assistenzarzt) earns between €60,000 and €120,000 per year, depending on experience and on-call shifts.
          </p>
        </div>
      </motion.section>

      {/* 2. Approbation Process */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Settings className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> The Approbation Process In Detail
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          <strong>What is Approbation?</strong> Approbation is the unrestricted license to practice medicine in Germany. It is mandatory for all doctors.
        </p>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 dark:before:via-teal-800 before:to-transparent">
          {[
            { step: '1', title: 'PMDC/PMC Certificate', desc: 'Secure your registration certificate and Good Standing Certificate from PMDC/PMC in Pakistan.' },
            { step: '2', title: 'HEC Attestation', desc: 'Get your MBBS degree and transcripts formally attested by the Higher Education Commission (HEC) of Pakistan.' },
            { step: '3', title: 'Certified Translations', desc: 'Have all documents translated to German by a state-certified translator (usually done in Germany).' },
            { step: '4', title: 'State Medical Chamber Application', desc: 'Apply to the Landesärztekammer of the German state where you intend to work.' },
            { step: '5', title: 'Defizitprüfung (Equivalence Assessment)', desc: 'Authorities will compare your Pakistani curriculum with the German curriculum through Gutachten (assessment).' },
            { step: '6', title: 'Kenntnisprüfung', desc: 'If your degree is not considered entirely equivalent (which is common for non-EU degrees), you must sit the Kenntnisprüfung (knowledge equivalence exam).' },
            { step: '7', title: 'Fachsprachenprüfung (FSP)', desc: 'The Medical German language exam at C1 level. Essential for patient communication.' },
            { step: '8', title: 'Berufserlaubnis', desc: 'A temporary license granted for up to 2 years, allowing you to work as a doctor while preparing for the Kenntnisprüfung.' },
            { step: '9', title: 'Full Approbation', desc: 'Once FSP and Kenntnisprüfung are passed, you receive your permanent, unrestricted Approbation.' }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> Easiest States
            </h4>
            <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">Historically, doctors have found North Rhine-Westphalia (NRW) and Bavaria to be robust due to multiple testing centers, although processing times vary greatly.</p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center">
              <Clock className="w-4 h-4 mr-2" /> Processing Time
            </h4>
            <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">Typically takes 6 to 18 months from initial application to receiving full Approbation, pending exams and document review.</p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center">
              <Banknote className="w-4 h-4 mr-2" /> Total Process Cost
            </h4>
            <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">Expect to spend around €2,000 to €4,000 covering translations, certification, FSP exam fees, and Kenntnisprüfung fees.</p>
          </div>
        </div>
      </motion.section>

      {/* 3. Required Documents */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <FileText className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Required Documents Checklist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            'Valid passport',
            'MBBS degree (attested by HEC)',
            'PMDC/PMC registration certificate',
            'Academic transcripts',
            'House job completion certificate',
            'Work experience certificates',
            'German language certificate (B2 minimum, C1 preferred)',
            'Medical German certificate (Fachsprachenprüfung)',
            'Police clearance certificate',
            'Health certificate',
            'CV in German format',
            'Certified German translations of all documents'
          ].map((doc, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">{doc}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. German Language for Doctors */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Languages className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> German Language for Doctors
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-300">
          <p>
            <strong>The Requirement:</strong> You need a B2 certificate in general German, plus passing the Fachsprachenprüfung (FSP) which tests your medical German at a C1 level.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-3">Understanding the FSP (Fachsprachenprüfung)</h3>
            <p className="mb-4">It is a 60-minute practical exam simulating clinical communication. It has three parts:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Doctor-Patient Simulation (20 min):</strong> Taking anamnesis (patient history) from an actor.</li>
              <li><strong>Documentation (20 min):</strong> Writing a doctor's letter (Arztbrief) based on the anamnesis.</li>
              <li><strong>Doctor-Doctor Communication (20 min):</strong> Presenting the patient case to a Chief Doctor and answering medical questions.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-3">Where to Prepare in Pakistan</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Goethe Institut Islamabad:</strong> Excellent for reaching B2 level.</li>
              <li><strong>Goethe Institut Karachi:</strong> Offers comprehensive intensive and standard courses.</li>
              <li><strong>Online Resources:</strong> "Deutsch für Ärztinnen und Ärzte" textbooks, online language tutors from Germany for FSP specific training.</li>
            </ul>
            <p className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 p-4 rounded-lg">
              <em>Estimated timeline:</em> Reaching B2 from scratch typically requires 12-18 months of highly dedicated study.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 5. Kenntnisprüfung */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <BookOpen className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Kenntnisprüfung (Knowledge Exam)
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            <strong>What is it?</strong> It is an oral-practical medical knowledge exam for doctors whose medical degree is from outside the EU/EEA (such as Pakistan) and is not automatically recognized as equivalent to a German degree.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Who Needs It?</strong> Almost all Pakistani medical graduates will eventually need to sit this exam, unless an expert individual assessment surprisingly finds your specific curriculum 100% equivalent.</li>
            <li><strong>Structure:</strong> The exam strongly focuses on Internal Medicine and Surgery. You may also be questioned on Emergency Medicine, Clinical Pharmacology, Radiology, or legal frameworks. It is conducted entirely in German.</li>
            <li><strong>Preparation:</strong> Most doctors take a paid preparation course in Germany or join study groups. The pass rate is solid if you prepare properly, though the exam is rigorous.</li>
            <li><strong>Which States Require It?</strong> ALL German states require this mechanism for non-EU degrees to grant full Approbation.</li>
          </ul>
        </div>
      </motion.section>

      {/* 6. Salary & Benefits */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Banknote className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Salary & Benefits
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
             <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Average Salary Expectations</h3>
             <ul className="space-y-4">
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Junior Doctor (Assistenzarzt)</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€55,000 - €70,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Specialist (Facharzt)</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€80,000 - €120,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Senior Doctor (Oberarzt)</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€100,000 - €150,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Chief Doctor (Chefarzt)</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€150,000 - €300,000 / year</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">*Note: These are gross amounts. Earnings heavily depend on extra night/weekend shifts.</p>
          </div>
          <div>
             <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Excellent Healthcare Benefits</h3>
             <ul className="space-y-3">
              {[
                'Comprehensive Health insurance (Statutory or Private)',
                'Solid Pension system contributions (Ärzteversorgung)',
                'Generous 30 days of paid holiday per year',
                'Paid sick leave (100% pay for first 6 weeks)',
                'Continuing education allowances and dedicated days off'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 7. Specialist Recognition */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <UserCheck className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Specialist Recognition (Facharzt)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Pakistani Specializations (FCPS / MRCP / MRCS)</h3>
            <p>
              Germany handles specialist recognition on a case-by-case basis. While an FCPS or MRCP is respected, it is almost never recognized outright automatically. 
              The state medical chamber evaluates your logbooks and experience. You will likely be asked to complete a few more years in a German hospital and pass the German Facharzt exam.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Most In-Demand Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {['General Practice', 'Internal Medicine', 'Surgery', 'Anaesthesiology', 'Psychiatry', 'Radiology', 'Paediatrics'].map(spec => (
                <span key={spec} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. Job Search */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Briefcase className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Job Search for Pakistani Doctors
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-300">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-3">Best Job Portals</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Medi-Jobs.de:</strong> Dedicated platform for medical professionals.</li>
              <li><strong>Aerztestellen.de:</strong> The official portal supported by the German Medical Journal (Deutsches Ärzteblatt).</li>
              <li><strong>Deutsche Krankenhaus Gesellschaft (DKG):</strong> German Hospital Federation listings.</li>
              <li><strong>LinkedIn & Xing:</strong> Very active for headhunters and hospital recruiters.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">CV & Cover Letter Tips</h4>
              <p className="text-sm">Use standard tabular German formats (Lebenslauf). Include a highly professional photo. Ensure the Cover Letter (Anschreiben) is flawless German, highlighting why you chose that specific hospital.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">Hospital Hiring Process (Hospitation)</h4>
              <p className="text-sm">It's common to be invited for a "Hospitation" (an observership of 1-5 days) before a formal job offer is given. This helps both you and the chief doctor see if it is a good fit.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. State by State Guide */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <MapPin className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> State by State Guide
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            The Approbation process varies heavily because healthcare is managed at the federal state level in Germany.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Bavaria (Bayern) & NRW:</strong> Generally seen as having well-structured processes. NRW holds a large Pakistani community.</li>
            <li><strong>Berlin:</strong> Very international, but bureaucratic backlogs can mean approvals take longer.</li>
            <li><strong>Baden-Württemberg:</strong> Great job opportunities and excellent hospitals, strict but fair exams.</li>
            <li><strong>East German States (e.g., Saxony, Thuringia):</strong> Huge shortage of doctors, often faster to get initial temporary licenses, but the FSP and exams are still robustly tested.</li>
          </ul>
        </div>
      </motion.section>

      {/* 10. Life as Pakistani Doctor */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Users className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Life as a Pakistani Doctor in Germany
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-300">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-2">Hospital Work Culture</h3>
            <p className="mb-4">Standard contracts aim for 40-48 hours/week. Work hierarchy is strict but respectful. Germans highly value punctuality and direct communication.</p>
            
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-2">Shifts & Duties</h3>
            <p>Night shifts (Nachtdienst) and on-call duties (Bereitschaftsdienst) are heavily regulated and compensated well, though they can be demanding.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-2">Community & Family</h3>
            <p className="mb-4">Vibrant Pakistani communities thrive especially in NRW, Frankfurt, and Munich. Finding Halal food and access to mosques is rarely an issue near major hospital hubs.</p>
            
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-2">Path to Permanent Residency</h3>
            <p>Under the EU Blue Card scheme, doctors easily qualify for fast-track permanent residency (Niederlassungserlaubnis), often within 21-33 months depending on German fluency.</p>
          </div>
        </div>
      </motion.section>

      {/* 11. Timeline */}
      <motion.section variants={itemVariants} className="bg-teal-600 dark:bg-teal-900 rounded-[2rem] p-8 md:p-10 text-white shadow-sm">
        <h2 className="font-display text-2xl font-bold mb-8 flex items-center">
          <Calendar className="w-7 h-7 mr-3" /> Typical Timeline to Practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { m: "Month 1-3", desc: "Start intense language learning (A1-B1)" },
            { m: "Month 3-12", desc: "Reach B2 German level & gather documents" },
            { m: "Month 6-18", desc: "Approbation process & document checks" },
            { m: "Month 12-18", desc: "Pass Fachsprachenprüfung (FSP)" },
            { m: "Month 18-24", desc: "Start working in Germany!" }
          ].map((t, i) => (
            <div key={i} className="bg-teal-700/50 dark:bg-teal-800/50 p-4 rounded-xl text-center border border-teal-500/30">
              <div className="font-bold text-teal-100 mb-2">{t.m}</div>
              <div className="text-sm text-teal-50">{t.desc}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Official Links */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Landesärztekammer Directory", url: "https://www.bundesaerztekammer.de/ueber-uns/landesaerztekammern" },
            { title: "PMDC Official Website", url: "https://pmdc.pk/" },
            { title: "HEC Attestation Portal", url: "https://www.hec.gov.pk/" },
            { title: "Goethe Institut Pakistan", url: "https://www.goethe.de/ins/pk/en/index.html" },
            { title: "Medi-Jobs.de", url: "https://www.medi-jobs.de/" },
            { title: "Make it in Germany (Healthcare)", url: "https://www.make-it-in-germany.com/en/jobs/professions-in-demand/physicians" }
          ].map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors group">
              <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400">{link.title}</span>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-500" />
            </a>
          ))}
        </div>
      </motion.section>

       <motion.div variants={itemVariants} className="pt-8">
        <Link to="/healthcare-abroad" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
          <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
          Back to Healthcare Overview
        </Link>
      </motion.div>

    </motion.div>
  );
}
