import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, AlertTriangle, FileCheck, MapPin, Landmark, ExternalLink, HelpCircle, ArrowRight, ShieldCheck, Banknote, School, Info, ArrowLeft, Globe } from 'lucide-react';
import { getCountryData } from '../data/countries';
import SEO from '../components/SEO';

export default function GermanyIntakeDeadlines() {
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

  const winterDeadlines = [
    { name: "TU Munich", date: "May 31" },
    { name: "LMU Munich", date: "July 15 (Often earlier for Int.)" },
    { name: "RWTH Aachen", date: "March 1" },
    { name: "TU Berlin", date: "June 1" },
    { name: "KIT Karlsruhe", date: "May 15" },
    { name: "University of Hamburg", date: "May 15 / July 15" },
    { name: "TU Dresden", date: "May 31" },
    { name: "Heidelberg University", date: "May 15 / June 15" },
    { name: "University of Cologne", date: "May 15 / July 15" },
    { name: "Goethe University Frankfurt", date: "May 15 / July 15" },
    { name: "Humboldt University Berlin", date: "June 1 / July 15" },
    { name: "Free University Berlin", date: "June 1 / July 15" },
    { name: "University of Stuttgart", date: "May 31 / July 15" },
    { name: "TU Dortmund", date: "May 31 / July 15" },
    { name: "Ruhr University Bochum", date: "May 15 / July 15" }
  ];

  const fhDeadlines = [
    { name: "FH Aachen", date: "June 15" },
    { name: "Hochschule München", date: "May 31" },
    { name: "HAW Hamburg", date: "May 15" },
    { name: "Hochschule Bremen", date: "May 31" },
    { name: "OTH Regensburg", date: "June 1" },
    { name: "Hochschule Karlsruhe", date: "May 31" },
    { name: "Hochschule Stuttgart", date: "May 31" },
    { name: "Hochschule Darmstadt", date: "May 15" },
    { name: "Hochschule Mannheim", date: "May 31" },
    { name: "Hochschule Düsseldorf", date: "May 15" }
  ];

  const timelineSteps = [
    { month: "12 Months Before", title: "Research & Shortlist", desc: "Research universities, check exact deadlines, and match DAAD requirements." },
    { month: "10 Months Before", title: "Prepare Documents", desc: "Prepare SOP, CV, LORs, and start translating/attesting documents (HEC, IBCC)." },
    { month: "8 Months Before", title: "APS Certificate", desc: "Apply for APS certificate immediately. Processing takes 4-6 weeks minimum." },
    { month: "6 Months Before", title: "Submit Applications", desc: "Submit through Uni-Assist or direct portals well before the deadline." },
    { month: "4 Months Before", title: "Blocked Account", desc: "Once admitted, open your Blocked Account and transfer €11,208." },
    { month: "3 Months Before", title: "Visa Application", desc: "Apply for Visa at German Embassy (Islamabad/Karachi)." },
    { month: "2 Months Before", title: "Flight & Housing", desc: "Book flight, secure temporary/permanent accommodation." },
    { month: "1 Month Before", title: "Final Prep", desc: "Pack essentials, buy health insurance, and review enrollment docs." }
  ];

  return (
    <>
      <SEO title="Study in Germany: Intake Deadlines | MoveAbroad.pk" description="Comprehensive guide to germany intake deadlines for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/germany" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Germany
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Germany Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intake Deadlines for Pakistanis 🇩🇪
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Plan your application timeline perfectly. Master the Winter vs Summer intake schedules and never miss a deadline.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Warning Box */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded-r-xl shadow-sm text-rose-900 dark:text-rose-100 flex items-start">
          <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0 text-rose-600 dark:text-rose-400" />
          <div>
            <h3 className="text-xl font-bold mb-1">Critical Notice</h3>
            <p className="text-lg">Deadlines change every year and can vary greatly depending on whether it's an international Master's program or a restricted (NC) Bachelor's program. <strong>Always verify directly on the university's official website before applying.</strong></p>
          </div>
        </motion.div>

        {/* 1. Intake Overview */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 border-b border-slate-100 dark:border-slate-700 pb-4 flex items-center">
            <Calendar className="w-8 h-8 mr-4 text-blue-500" /> 1. German University Intakes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/50">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">Winter Semester (Main)</h3>
              <p className="text-blue-800 dark:text-blue-200 font-semibold mb-4 text-sm">Starts: October <br/> Application: Jan - July</p>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500"/> This is the primary intake for almost all universities.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500"/> Offers the vast majority of courses, especially English-taught Master's programs.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500"/> <strong>Highly recommended for Pakistani students.</strong></li>
              </ul>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center">Summer Semester (Secondary)</h3>
              <p className="text-amber-800 dark:text-amber-200 font-semibold mb-4 text-sm">Starts: April <br/> Application: Oct - Jan</p>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-amber-500"/> Not all universities or courses offer a summer intake.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-amber-500"/> Very limited options for English-taught international programs.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-amber-500"/> Good as a backup plan if you miss the winter deadline.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 5. Visual Timeline Graphic */}
        <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 rounded-[2rem] p-8 shadow-sm text-white">
          <h2 className="font-display text-2xl font-bold mb-8 border-b border-slate-700 pb-4 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-cyan-400" /> 5. Ideal Timeline for Winter Semester (Oct)
          </h2>
          <div className="space-y-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center relative">
                {idx !== timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute left-[5rem] top-10 bottom-[-2.5rem] w-0.5 bg-slate-700"></div>
                )}
                <div className="md:w-40 flex-shrink-0 font-bold text-cyan-400 text-sm md:text-right md:pr-8 mb-2 md:mb-0">
                  {step.month}
                </div>
                <div className="flex-1 bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-start z-10 hover:bg-slate-800 transition-colors">
                  <div className={`w-3 h-3 rounded-full mt-1.5 mr-4 flex-shrink-0 ${
                    idx < 3 ? 'bg-rose-400' : idx < 5 ? 'bg-amber-400' : 'bg-emerald-400'
                  }`}></div>
                  <div>
                    <h4 className="font-bold text-slate-100">{step.title}</h4>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-center space-x-6 text-sm">
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-rose-400 mr-2"></span> Urgent / Early Prep</span>
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-amber-400 mr-2"></span> Action Phase</span>
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-400 mr-2"></span> Pre-Departure</span>
          </div>
        </motion.section>

        {/* 2 & 7. Deadlines Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-x-auto">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <Landmark className="w-6 h-6 mr-3 text-indigo-500" /> 2. Top Universities (Winter)
            </h2>
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl mb-6 text-sm text-indigo-800 dark:text-indigo-200">
              <strong>Note regarding Summer Semester:</strong> The deadline is usually Jan 15 for the same universities (if they offer the course).
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  <th className="p-3 rounded-tl-lg font-bold">University</th>
                  <th className="p-3 rounded-tr-lg font-bold">Int'l Winter Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {winterDeadlines.map((uni, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-medium text-slate-800 dark:text-slate-200">{uni.name}</td>
                    <td className="p-3 text-rose-600 dark:text-rose-400 font-semibold">{uni.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 overflow-x-auto">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <School className="w-6 h-6 mr-3 text-emerald-500" /> 7. Fachhochschule (UAS) Deadlines
            </h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl mb-6 text-sm text-emerald-800 dark:text-emerald-200">
               Universities of Applied Sciences (FH) often have slightly later deadlines, but applying early via Uni-Assist is still crucial.
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  <th className="p-3 rounded-tl-lg font-bold">UAS / Fachhochschule</th>
                  <th className="p-3 rounded-tr-lg font-bold">Int'l Winter Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {fhDeadlines.map((fh, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-medium text-slate-800 dark:text-slate-200">{fh.name}</td>
                    <td className="p-3 text-amber-600 dark:text-amber-500 font-semibold">{fh.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.section>
        </div>

        {/* 4. UniAssist & 6. APS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] p-8 shadow-sm border border-blue-100 dark:border-blue-800/30">
            <h2 className="font-display text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center border-b border-blue-200 dark:border-blue-800/50 pb-4">
              <FileCheck className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> 4. Uni-Assist Deadlines
            </h2>
            <div className="space-y-4 text-sm text-blue-900 dark:text-blue-200">
              <p><strong>What is it?</strong> A centralized processing portal used by over 180 German universities to evaluate international degrees.</p>
              <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-xl">
                <strong className="text-rose-600 dark:text-rose-400">CRITICAL:</strong> You must submit your documents to uni-assist <strong>BEFORE</strong> the university's official application deadline. Uni-Assist takes 6-8 weeks to process your documents before forwarding them to the university!
              </div>
              <p><strong>Fees:</strong> €75 for the first university preference. €30 for every additional university you apply to in the same semester.</p>
              <p><em>Advice: Hand in your online application and pay the fee at least 8 weeks before the deadline.</em></p>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] p-8 shadow-sm border border-emerald-100 dark:border-emerald-800/30">
            <h2 className="font-display text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-6 flex items-center border-b border-emerald-200 dark:border-emerald-800/50 pb-4">
              <ShieldCheck className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> 6. APS Certificate Timeline
            </h2>
            <div className="space-y-4 text-sm text-emerald-900 dark:text-emerald-200">
              <p>The APS (Akademische Prüfstelle) certificate is <strong>mandatory</strong> for Pakistani students applying to Germany.</p>
              <p><strong>Processing Time:</strong> Typically 4 to 6 weeks, but can spike during peak seasons (Feb-May).</p>
              <p><strong>When to do it:</strong> You must complete APS verification BEFORE applying to uni-assist or the university portals.</p>
              <p><strong>Contact:</strong> APS is located inside the German Embassy Islamabad. You must book an appointment or send documents via courier as instructed on their portal.</p>
            </div>
          </motion.section>
        </div>

        {/* 8. Scholarships & 9. Visa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-purple-50 dark:bg-purple-900/10 rounded-[2rem] p-8 shadow-sm border border-purple-100 dark:border-purple-800/30">
            <h2 className="font-display text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6 flex items-center border-b border-purple-200 dark:border-purple-800/50 pb-4">
              <Banknote className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" /> 8. Scholarship Deadlines
            </h2>
            <div className="space-y-4 text-sm text-purple-900 dark:text-purple-200">
              <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg font-bold">
                Note: Scholarship deadlines are often months earlier than admission deadlines!
              </div>
              <ul className="space-y-3">
                <li><strong>DAAD EPOS:</strong> Usually between August and October of the previous year.</li>
                <li><strong>Erasmus+ EMJMD:</strong> Usually October to January for the following Fall intake.</li>
                <li><strong>Heinrich Böll:</strong> March 1 and September 1 annually.</li>
                <li><strong>HEC Germany:</strong> Announced periodically, check HEC portal frequently.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-100 dark:border-slate-700 pb-4">
              <MapPin className="w-6 h-6 mr-3 text-rose-500" /> 9. Visa Application Timeline
            </h2>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>You should apply for your visa <strong>3 to 4 months</strong> before your semester begins.</p>
              <p><strong>German Embassy Processing:</strong> Booking the appointment online can take weeks. Once interviewed, the processing itself takes 4-8 weeks.</p>
              <p><strong>Delayed?</strong> If your visa is delayed past your intake date, request a "Late Arrival Extension Letter" from your university course coordinator immediately.</p>
            </div>
          </motion.section>
        </div>

        {/* 10. Tips & Official Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
              <Info className="w-6 h-6 mr-3 text-slate-500" /> 10. Tips for Pakistani Students
            </h2>
            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300 flex-1 list-disc list-inside">
              <li>Always aim to apply weeks <em>before</em> the deadline. Portals crash on the last day.</li>
              <li>Some FH and private universities have <strong>Rolling Admissions</strong> — first come, first served.</li>
              <li>Always keep highly visible PDF scans of every single document you submit.</li>
              <li>Check your junk/spam email daily. Universities often email regarding missing documents with a 48-hour response window.</li>
              <li>Join "Pakistani Students in Germany" Facebook groups for real-time visa and APS timeline updates from peers.</li>
            </ul>
          </motion.section>

          <motion.section initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
              <ExternalLink className="w-6 h-6 mr-3 text-slate-500" /> Official Resources
            </h2>
            <div className="space-y-3">
              <a href="https://www.uni-assist.de/en/how-to-apply/plan-your-application/deadlines-processing-time/" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <span className="font-medium">Uni-Assist Deadlines</span> <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <span className="font-medium">DAAD Scholarship Database</span> <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://pakistan.diplo.de/pk-en/service/aps" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white dark:bg-slate-800 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-blue-600 dark:text-blue-400 hover:shadow-md transition-shadow">
                <span className="font-medium">APS Pakistan Official</span> <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
    </>
  );
}
