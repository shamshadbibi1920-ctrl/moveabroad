import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, CheckCircle2, ChevronRight, Calculator, CalendarClock, BookOpen, FileCheck2 , ArrowLeft, Globe} from 'lucide-react';
import CRSCalculator from '../../components/CRSCalculator';
import SEO from '../../components/SEO';

export default function CanadaExpressEntry() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <SEO 
        title="Canada Express Entry 2026 for Pakistani Professionals | MoveAbroad.pk"
        description="Complete Express Entry guide for Pakistanis. CRS calculator, draw history, FSW FST CEC programs, and step by step process."
        canonicalPath="/migrate/canada/express-entry"
      />
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561134643-668f2b97d4f9?w=1400&q=80" 
            alt="Hero Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1e293b)'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/migrate/canada" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Canada Migration
          </Link>
          <motion.div initial="initial" animate="animate" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" /> Canada Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Express Entry System 🇨🇦
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The fastest and most popular pathway for skilled Pakistani professionals to obtain Canadian Permanent Residency.
            </p>
          </motion.div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6 flex items-start shadow-sm">
          <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed font-medium">
            Immigration laws change frequently. Always consult an authorized immigration consultant and verify with official government sources before making any decisions. We are an informational platform, not an immigration agency.
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">The 3 Express Entry Programs</h2>
          
          <div className="space-y-12">
            {/* FSW */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 p-2 rounded-lg mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1. Federal Skilled Worker (FSW)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                For skilled workers with foreign (non-Canadian) work experience. Most Pakistani applicants applying directly from Pakistan fall under this category.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Requirements:</h4>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Minimum <strong>1 year continuous skilled work experience</strong> (within the last 10 years).</li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Job must fall under <strong>NOC TEER 0, 1, 2, or 3</strong>.</li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Minimum language score of <strong>CLB 7</strong> (IELTS 6.0 in all bands).</li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Educational Credential Assessment (ECA) required for foreign degrees.</li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> <strong>Proof of funds required</strong> (unless you have a valid Canadian job offer). No job offer needed to apply.</li>
                    </ul>
                 </div>
                 <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                   <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex justify-between">
                     <span>The 67 Points FSW Grid</span>
                     <span className="text-sm font-normal text-rose-600 dark:text-rose-400">Min 67/100 required</span>
                   </h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Before entering the Express Entry pool, FSW candidates must score at least 67 out of 100 on the initial eligibility grid:</p>
                   <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                     <li className="flex justify-between"><span>Language Skills:</span> <strong>Max 28 points</strong></li>
                     <li className="flex justify-between"><span>Education:</span> <strong>Max 25 points</strong></li>
                     <li className="flex justify-between"><span>Work Experience:</span> <strong>Max 15 points</strong></li>
                     <li className="flex justify-between"><span>Age:</span> <strong>Max 12 points</strong></li>
                     <li className="flex justify-between"><span>Arranged Employment:</span> <strong>Max 10 points</strong></li>
                     <li className="flex justify-between"><span>Adaptability:</span> <strong>Max 10 points</strong></li>
                   </ul>
                 </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                 <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Success Tip for Pakistani Applicants:</strong> Most Pakistani professionals (doctors, engineers, IT, finance) easily meet the 67-point FSW criteria. The real challenge is achieving a competitive CRS score in the pool. Focus heavily on achieving IELTS CLB 9.</p>
              </div>
            </div>

            {/* CEC */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2. Canadian Experience Class (CEC)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                For skilled workers who already have Canadian work experience. This is the primary pathway for international students in Canada.
              </p>
              
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Minimum <strong>1 year of skilled work experience in Canada</strong> (within the last 3 years).</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Language limits: CLB 7 for NOC TEER 0 or 1, and CLB 5 for NOC TEER 2 or 3.</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> <strong>No education requirement</strong> (though education increases CRS score).</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> <strong>No proof of funds required</strong> for CEC.</li>
              </ul>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 text-sm text-slate-700 dark:text-slate-300">
                <strong>Pathway for Pakistani Students:</strong> Pakistani students typically graduate from a Canadian college/university, obtain a Post-Graduation Work Permit (PGWP), work for 1 year in a skilled TEER 0,1,2,3 job, and then apply for PR under the Canadian Experience Class.
              </div>
            </div>

            {/* FST */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">3. Federal Skilled Trades (FST)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                For skilled workers qualified in a skilled trade. Draws for FST are less frequent but require significantly lower CRS scores.
              </p>
              
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Minimum <strong>2 years of full-time work experience</strong> in a skilled trade (within the last 5 years).</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Must have a <strong>valid job offer in Canada OR a certificate of qualification</strong> from a Canadian authority.</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> Lower language requirements: CLB 5 for speaking/listening, CLB 4 for reading/writing.</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5"/> <strong>Eligible trades include:</strong> Industrial/electrical/construction trades, maintenance/equipment operation, supervisors/technical jobs in natural resources, agriculture, processing, manufacturing, chefs/cooks, bakers, and butchers.</li>
              </ul>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">For Pakistani tradespeople, securing a Canadian certificate of qualification or an LMIA-supported employer job offer is the biggest hurdle to qualifying for FST.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Comprehensive Ranking System (CRS) Breakdown</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Once determining eligibility for FSW, CEC, or FST, candidates enter the Express Entry pool and are ranked against each other based on a maximum CRS score of <strong>1,200 points</strong>.
              </p>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
                <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">CRS Score Breakdown (Max 1,200)</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-1">A. Core Human Capital (Max 500 points)</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 pl-4 list-disc space-y-1">
                      <li>Age (Max 110 points)</li>
                      <li>Education (Max 150 points)</li>
                      <li>First language / IELTS (Max 160 points)</li>
                      <li>Second language / French (Max 30 points)</li>
                      <li>Canadian work experience (Max 80 points)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-1">B. Spouse Factors (Max 40 points)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 pl-4">Education, language skills, and Canadian experience of your spouse.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-1">C. Skill Transferability (Max 100 points)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 pl-4">Bonus combinations (e.g., strong language + master's degree, or strong language + foreign work experience).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-1">D. Additional Points (Max 600 points)</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 pl-4 list-disc space-y-1">
                      <li>Provincial nomination (+600 points)</li>
                      <li>Valid Job offer (NOC TEER 0: +200 points / TEER 1,2,3: +50 points)</li>
                      <li>Canadian education (+15 to +30 points)</li>
                      <li>Strong French language ability (+50 points)</li>
                      <li>Sibling in Canada (+15 points)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl text-sm text-slate-700 dark:text-slate-300 mb-6">
                <strong>Recent Draw Cutoffs:</strong> Over recent years, standard 'All-Program' draw cutoffs have typically ranged between <strong>470 - 520 points</strong>. Category-based draws (Healthcare, STEM, French) can see lower cutoffs.
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
                 <h3 className="font-bold text-lg mb-3 text-emerald-800 dark:text-emerald-400">Tips to Improve Your CRS Score</h3>
                 <ul className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
                   <li><strong>1. Maximize IELTS:</strong> Achieving CLB 9 (Listening 8.0, others 7.0) is the fastest way to jump points significantly.</li>
                   <li><strong>2. Learn French:</strong> Even basic to intermediate French knowledge gives a massive boost in additional points and opens doors for French-category draws.</li>
                   <li><strong>3. Higher Education:</strong> Upgrading from a Bachelor's to a Master's degree adds significant points.</li>
                   <li><strong>4. Work Experience:</strong> Gaining 3+ years of foreign experience maximizes the transferability section.</li>
                   <li><strong>5. Provincial Nominee Programs (PNP):</strong> Getting nominated by a province automatically adds 600 points, essentially guaranteeing an ITA.</li>
                 </ul>
              </div>
            </div>
            
            <div id="calculator">
               <CRSCalculator />
            </div>
          </div>
        </section>

        {/* Requirements & Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* IELTS Guide */}
           <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -z-0 opacity-50"></div>
             <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6 relative z-10" />
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">IELTS Requirements</h3>
             <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Canada uses Canadian Language Benchmarks (CLB) to assess language proficiency. The higher your CLB, the more CRS points you earn.</p>
             <ul className="space-y-4 mb-6 relative z-10">
               <li className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                 <strong className="text-slate-900 dark:text-white block mb-1">CLB 9 (The Magic Number)</strong>
                 <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold block mb-1">IELTS: Listening 8.0, Reading 7.0, Writing 7.0, Speaking 7.0</span>
                 <p className="text-xs text-slate-500">Achieving CLB 9 is crucial as it unlocks maximum points in the Skill Transferability section. A jump from CLB 8 to CLB 9 can increase your score by up to 50 points.</p>
               </li>
               <li className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                 <strong className="text-slate-900 dark:text-white block mb-1">CLB 7 (Minimum for FSW)</strong>
                 <span className="text-sm text-slate-600 dark:text-slate-400 font-medium block mb-1">IELTS: 6.0 in all four bands</span>
                 <p className="text-xs text-slate-500">If you score below 6.0 in any single band, you do not qualify for the Federal Skilled Worker program.</p>
               </li>
             </ul>
             <p className="text-xs text-slate-500 dark:text-slate-400 italic">Tip: Take the IELTS General Training test, not Academic, for Express Entry.</p>
           </div>

           {/* WES Guide */}
           <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 dark:bg-amber-900/20 rounded-bl-full -z-0 opacity-50"></div>
             <FileCheck2 className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-6 relative z-10" />
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">WES Evaluation Guide</h3>
             <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">To claim CRS points for foreign education, it must be evaluated by a designated organization to determine its Canadian equivalent. WES (World Education Services) is the most popular.</p>
             <div className="space-y-4 mb-4 relative z-10 text-sm text-slate-600 dark:text-slate-400">
               <div className="flex">
                 <span className="font-bold text-slate-900 dark:text-white w-6 shrink-0">1.</span>
                 <p>Create a WES account and receive a WES Reference Number. Pay the fee (~$240 CAD).</p>
               </div>
               <div className="flex">
                 <span className="font-bold text-slate-900 dark:text-white w-6 shrink-0">2.</span>
                 <p>For Pakistani degrees, you MUST have your transcripts sent directly from the Higher Education Commission (HEC) of Pakistan to WES, and metric/inter boards via IBCC.</p>
               </div>
               <div className="flex">
                 <span className="font-bold text-slate-900 dark:text-white w-6 shrink-0">3.</span>
                 <p>HEC places attested transcripts in a sealed envelope, stamped across the flap, and mails or electronically transmits it to WES.</p>
               </div>
               <div className="flex">
                 <span className="font-bold text-slate-900 dark:text-white w-6 shrink-0">4.</span>
                 <p>Evaluation process typically takes 7-9 weeks after all documents are received.</p>
               </div>
             </div>
             <a href="https://www.wes.org/ca/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline">View WES Document Requirements for Pakistan &rarr;</a>
           </div>
        </section>

        {/* Timeline */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <CalendarClock className="w-48 h-48" />
           </div>
           <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center">
             <CalendarClock className="w-6 h-6 mr-3 text-emerald-400" />
             Complete Express Entry Timeline
           </h2>
           <div className="space-y-6 relative z-10 max-w-3xl">
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Month 1-2</div>
               <div className="pl-6 border-l border-slate-700 pb-2">
                 <h4 className="font-bold text-lg mb-1">Preparation</h4>
                 <p className="text-slate-400 text-sm">Take your IELTS exam and begin the WES degree evaluation process (this often takes the longest).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Month 2-3</div>
               <div className="pl-6 border-l border-slate-700 pb-2">
                 <h4 className="font-bold text-lg mb-1">Profile Creation</h4>
                 <p className="text-slate-400 text-sm">Once you have IELTS and WES results, create your Express Entry profile online. You are now officially in the pool.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Month 3-6</div>
               <div className="pl-6 border-l border-slate-700 pb-2">
                 <h4 className="font-bold text-lg mb-1">Wait for ITA</h4>
                 <p className="text-slate-400 text-sm">Wait for IRCC to conduct a draw. If your CRS score is above the cutoff, you receive an Invitation to Apply (ITA).</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Month 6</div>
               <div className="pl-6 border-l border-slate-700 pb-2">
                 <h4 className="font-bold text-lg mb-1">Submit eAPR</h4>
                 <p className="text-slate-400 text-sm">You have 60 days to upload all supporting documents (police clearances, medicals, job letters, proof of funds) and pay the PR fees.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Month 6-12</div>
               <div className="pl-6 border-l border-slate-700 pb-2">
                 <h4 className="font-bold text-lg mb-1">Processing</h4>
                 <p className="text-slate-400 text-sm">IRCC reviews your complete application, verifies documents, and conducts background checks.</p>
               </div>
             </div>
             <div className="flex">
               <div className="w-24 shrink-0 font-bold text-emerald-400 pt-1">Month 12+</div>
               <div className="pl-6 border-l-0 pb-0">
                 <h4 className="font-bold text-lg text-white mb-1">COPR & Landing</h4>
                 <p className="text-slate-400 text-sm">Receive your Confirmation of Permanent Residence (COPR) and landing visa. You can now travel to Canada as a Permanent Resident!</p>
               </div>
             </div>
           </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Required Documents Checklist (Post-ITA)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Valid Passport',
              'IELTS Academic or General results (CLB 7 minimum for FSW)',
              'Educational Credential Assessment (ECA) - usually via WES',
              'Reference letters from all past employers',
              'Proof of Funds (approx. CAD $13,756 for a single person)',
              'Police Clearance Certificates from all countries lived in > 6 months',
              'Upfront Medical Examination by panel physician',
              'Digital photos'
            ].map(doc => (
              <div key={doc} className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Official Resources</h2>
          <div className="space-y-3">
             <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">IRCC Express Entry Portal</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">Official CRS Calculator Tool</span>
               <ChevronRight className="text-slate-400" />
             </a>
             <a href="https://www.wes.org/ca/" className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition" target="_blank" rel="noreferrer">
               <span className="font-semibold text-slate-800 dark:text-slate-200">WES Canada (Educational Assessment)</span>
               <ChevronRight className="text-slate-400" />
             </a>
          </div>
        </section>

      </div>
    </div>
  );
}
