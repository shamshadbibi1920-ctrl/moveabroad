import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, Activity, Building2, BadgeDollarSign, MapPin, ExternalLink, GraduationCap } from 'lucide-react';

export default function CanadaDentistContent() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-12">
      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <Activity className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Overview
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="mb-4">
            Dentistry is a highly regulated and highly compensated profession in Canada. An average salary ranges from <strong>CAD $120,000 to $250,000/year</strong>, with clinic ownership pushing earnings well past $300,000. However, a foreign BDS degree does NOT automatically qualify you to practice. You must undergo a rigorous equivalency or degree-completion pathway to earn your license.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl flex-1 border border-teal-100 dark:border-teal-800/30">
              <BadgeDollarSign className="w-8 h-8 text-teal-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Average Salary</h4>
              <p className="text-teal-700 dark:text-teal-300">CAD $120,000 - $250,000/year</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl flex-1 border border-blue-100 dark:border-blue-800/30">
              <Building2 className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Workplaces</h4>
              <p className="text-blue-700 dark:text-blue-300">Private Clinics, Corporate Groups</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
          <FileText className="w-8 h-8 mr-4 text-teal-600 dark:text-teal-400" />
          Two Main Licensing Pathways
        </h2>
        
        <div className="space-y-8">
          {/* Pathway A */}
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-1.5 rounded-full text-base font-bold mr-4">Pathway A</span>
              NDEB Equivalency Process (Direct Route)
            </h3>
            
            <div className="space-y-6 relative z-10">
              {[
                { step: "1", title: "Create NDEB Profile & Verify", desc: "Set up an online profile with National Dental Examining Board of Canada (NDEB), submit credentials. Takes ~10 weeks if correct." },
                { step: "2", title: "Pass AFK Exam", desc: "Pass the Assessment of Fundamental Knowledge (AFK) — a written test with two 150-question sessions in one day." },
                { step: "3", title: "Pass ACJ Exam", desc: "Pass the Assessment of Clinical Judgment (ACJ)." },
                { step: "4", title: "Pass ACS Exam", desc: "Pass the Assessment of Clinical Skills (ACS). This is a hands-on practical exam and historically the most challenging stage." },
                { step: "5", title: "NDEB Certification", desc: "Receive your NDEB Certification, qualifying you federally." },
                { step: "6", title: "Provincial Application", desc: "Apply for licensure with the dental regulatory authority in your target province." }
              ].map((item, i) => (
                <div key={i} className="flex bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0 mr-6 text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                 <div className="text-slate-700 dark:text-slate-300"><strong>Timeline:</strong> 1.5 - 2.5 years</div>
                 <div className="text-slate-700 dark:text-slate-300"><strong>Est. Cost:</strong> ~$30,000 CAD (fees + prep)</div>
              </div>
            </div>
          </div>

          {/* Pathway B */}
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 px-4 py-1.5 rounded-full text-base font-bold mr-4">Pathway B</span>
              Degree-Completion Programs (University Route)
            </h3>
            
            <div className="space-y-6 relative z-10 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Alternatively, foreign-trained dentists can apply for accelerated 2-year degree-completion programs (Advanced Placement/Qualifying Programs) at recognized Canadian institutions such as the University of Toronto, UBC, Dalhousie, or Western University.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Prerequisite:</strong> Requires passing the AFK exam first (must be passed within the last 3 years of applying).</span>
                </li>
                 <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Outcome:</strong> Leads directly to a Canadian D.D.S. or D.M.D. degree and NDEB certification, effectively matching you to Canadian-trained peers.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Challenges:</strong> This is highly secure but expensive ($60,000 - $120,000+ CAD for the program) and fiercely competitive, with fewer than 30 spots available nationally each year.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-[2rem] border border-amber-200 dark:border-amber-800/30">
          <h3 className="font-bold text-amber-900 dark:text-amber-300 text-xl mb-4 flex items-center">
            <CheckCircle2 className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
            Required Documents
          </h3>
          <ul className="space-y-3 gap-2">
            {[
              "Valid passport & ID",
              "BDS degree attested by HEC",
              "PMDC dental registration",
              "Original academic transcripts",
              "English/French proficiency proof (for provincial registration)"
            ].map((doc, idx) => (
              <li key={idx} className="flex items-start text-amber-800 dark:text-amber-200">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-teal-500/10"></div>
          <div className="relative z-10">
             <h3 className="font-bold text-white text-xl mb-6 flex items-center">
              <BadgeDollarSign className="w-6 h-6 mr-3 text-teal-400" />
              Salary & Compensation
            </h3>
            <div className="space-y-4">
              <div className="border-b border-slate-700 pb-4">
                <h4 className="text-slate-400 mb-1">Associate Dentist</h4>
                <p className="text-2xl font-bold text-white">CAD $120,000 - $180,000</p>
              </div>
              <div className="pt-2">
                <h4 className="text-slate-400 mb-1">Practice Owner / Partner</h4>
                <p className="text-2xl font-bold text-white">CAD $180,000 - $300,000+</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Official Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "National Dental Examining Board", url: "https://ndeb-bned.ca/", desc: "NDEB - Administrator of the equivalency process" },
            { title: "Royal College of Dental Surgeons of Ontario", url: "https://www.rcdso.org/", desc: "RCDSO - Dental regulation in Ontario" },
            { title: "BC College of Oral Health Professionals", url: "https://oralhealthbc.ca/", desc: "BCCOHP - Dental regulation in BC" },
            { title: "College of Dental Surgeons of Alberta", url: "https://www.cdsalberta.ca/", desc: "CDSA - Dental regulation in Alberta" }
          ].map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-start p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group">
              <ExternalLink className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5 group-hover:text-teal-500 transition-colors" />
              <div>
                <h4 className="font-bold text-teal-600 dark:text-teal-400 group-hover:text-teal-500 transition-colors">{link.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.section variants={itemVariants}>
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 mr-4 flex-shrink-0" />
            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <strong>Important Disclaimer:</strong> Licensing requirements and exam formats change frequently — for example, physiotherapy licensing is transitioning to a new single exam (CPTE) in 2026. Always verify current requirements with the relevant regulatory body before starting the process.
            </p>
          </div>
        </div>
      </motion.section>

      <div className="flex justify-center pt-8">
        <Link to="/healthcare-abroad" className="inline-flex items-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-bold bg-teal-50 dark:bg-teal-900/20 px-6 py-3 rounded-xl transition-colors">
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Back to Healthcare Overview
        </Link>
      </div>
    </div>
  );
}
