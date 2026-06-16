import React from 'react';
import { CheckCircle2, AlertTriangle, ExternalLink, Calendar, Banknote, Briefcase, Globe, Settings, MapPin, ChevronRight, UserCheck, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function GermanyNurseContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
            Requirements vary by German state. Always verify with the relevant state nursing authority before starting the process.
          </p>
        </div>
      </motion.div>

      {/* 1. Extended Overview */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Globe className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Massive Nursing Shortage
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            <strong>The Crisis:</strong> Germany is facing an unprecedented shortage of nurses across the entire country, with over 100,000 vacancies in hospitals and elderly care homes.
          </p>
          <p>
            <strong>Why Germany?</strong> Germany is actively rolling out "fast-track" visas for healthcare workers. For Pakistani nurses, this means extensive support, and very often, German hospitals and recruitment agencies will sponsor your visa and pay your relocation and language course costs.
          </p>
          <p>
            <strong>High Demand:</strong> This demand is consistent across all German states. Salaries range broadly from €35,000 to €55,000 per year, depending on experience and shift work.
          </p>
        </div>
      </motion.section>

      {/* 2. Recognition Process */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Settings className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> License Recognition Process
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          <strong>What is Berufserlaubnis and Anerkennung?</strong> Anerkennung is the full recognition of your foreign nursing degree. Often, you can start working as a nursing assistant with a temporary permit (Berufserlaubnis) while completing your recognition.
        </p>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 dark:before:via-teal-800 before:to-transparent">
          {[
            { step: '1', title: 'PNC Certificate', desc: 'Secure your registration/Good Standing Certificate from the Pakistan Nursing Council (PNC).' },
            { step: '2', title: 'HEC Attestation', desc: 'Get your nursing degree fully attested by the Higher Education Commission (HEC).' },
            { step: '3', title: 'Certified Translations', desc: 'Have all documents translated to German by a state-certified translator.' },
            { step: '4', title: 'Apply to State Authority', desc: 'Submit your application to the relevant state nursing authority for an equivalence assessment.' },
            { step: '5', title: 'Equivalence Assessment', desc: 'The authority compares your Pakistani nursing curriculum with the German standard.' },
            { step: '6', title: 'Compensatory Measures', desc: 'If your degree is not 100% equivalent (very common), you must complete an adaptation course (Anpassungslehrgang) or a knowledge test (Kenntnisprüfung).' },
            { step: '7', title: 'German Language (B2)', desc: 'You must provide proof of B2 level German proficiency.' },
            { step: '8', title: 'Full Recognition', desc: 'Once steps are complete, you receive full recognition and can work independently as a registered nurse (Pflegefachkraft).' }
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
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> Easiest States
            </h4>
            <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">Hesse, North Rhine-Westphalia, and Bavaria often have very streamlined processes and high demand.</p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800/30">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center">
              <Calendar className="w-4 h-4 mr-2" /> Processing Time
            </h4>
            <p className="text-sm text-teal-700 dark:text-teal-300 mt-1">Typically takes 3 to 12 months for the initial assessment and sorting of compensatory measures.</p>
          </div>
        </div>
      </motion.section>

      {/* 3. Required Documents */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <UserCheck className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Required Documents Checklist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            'Valid passport',
            'Nursing degree attested by HEC',
            'PNC registration certificate',
            'Academic transcripts',
            'Work experience certificates',
            'German language certificate B2',
            'Police clearance certificate',
            'Health certificate',
            'Certified German translations of all documents'
          ].map((doc, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">{doc}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. Language Requirements */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">Language Requirements</h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            <strong>B2 Level is Mandatory:</strong> B2 standard German is required to register as a nurse. Medical and nursing terminology in German (Pflegedeutsch) is critical for daily duties.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Where to learn: Goethe Institut Islamabad and Karachi offer dedicated courses.</li>
            <li>Online resources: Many agencies provide online German language training specifically tailored for nurses from A1 up to B2 level.</li>
          </ul>
        </div>
      </motion.section>

      {/* 5. Salary & Benefits */}
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
          <Banknote className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" /> Salary & Benefits
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Junior Nurse</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€35,000 - €42,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Experienced Nurse</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€42,000 - €52,000 / year</span>
              </li>
              <li className="flex flex-col bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Senior/Specialist Nurse</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">€52,000 - €65,000 / year</span>
              </li>
            </ul>
             <p className="text-xs text-slate-500 mt-2">*Note: Plus highly lucrative shift allowances for night and weekend shifts.</p>
          </div>
          <div>
             <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Benefits</h3>
             <ul className="space-y-3">
              {[
                'Comprehensive Health insurance',
                'Pension contributions',
                '30 days paid holiday per year',
                'Extra shift allowances and bonuses',
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

      {/* 6. Job Search & 7. Timeline */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center">
            <Briefcase className="w-7 h-7 mr-3 text-teal-600 dark:text-teal-400" /> Job Search
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-300">
            <li><strong>Recruitment Agencies:</strong> Many German agencies actively hire in Pakistan, often covering language courses and visa processing.</li>
            <li><strong>Direct Recruitment:</strong> Large hospitals sometimes travel or conduct online interviews directly.</li>
            <li><strong>Job Portals:</strong> Medi-Jobs.de, Indeed.de, and Krankenhaus.de are best.</li>
            <li><strong>Sponsorship:</strong> It is very common for hospitals to sponsor your visa entirely.</li>
          </ul>
        </div>
        
        <div className="bg-teal-600 dark:bg-teal-900 rounded-[2rem] p-8 text-white shadow-sm">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center">
            <Calendar className="w-7 h-7 mr-3" /> Typical Timeline
          </h2>
          <div className="space-y-4">
            {[
              { m: "Month 1-12", desc: "Learn German to B2 level" },
              { m: "Month 6-12", desc: "Document preparation and attestation" },
              { m: "Month 12-18", desc: "Recognition process (Anerkennung)" },
              { m: "Month 18-24", desc: "Arrive and start working in Germany" }
            ].map((t, i) => (
              <div key={i} className="flex items-center">
                <div className="w-24 font-bold text-teal-200 flex-shrink-0">{t.m}</div>
                <div className="text-teal-50 text-sm border-l border-teal-500/50 pl-4 py-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 8. Official Links */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "PNC Pakistan Official Website", url: "https://pnc.org.pk/" },
            { title: "HEC Attestation Portal", url: "https://www.hec.gov.pk/" },
            { title: "Make it in Germany (Nursing)", url: "https://www.make-it-in-germany.com/en/jobs/professions-in-demand/nursing" },
            { title: "Goethe Institut Pakistan", url: "https://www.goethe.de/ins/pk/en/index.html" }
          ].map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-colors group">
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
