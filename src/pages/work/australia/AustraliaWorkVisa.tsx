import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FilePlus, AlertTriangle, CheckCircle2, Clock, DollarSign, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function AustraliaWorkVisa() {
  return (
    <>
      <SEO title="Work in Australia: Work Visa | MoveAbroad.pk" description="Comprehensive guide to australia work visa for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner */}
      <div className="relative text-white py-20 lg:py-32 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1400&q=80" 
            alt="Australia Background" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.35]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/work/australia" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Australia Guide
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-semibold mb-6">
              🇦🇺 Australia Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Skills in Demand Visa 🇦🇺
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              The primary employer-sponsored temporary work visa (formerly TSS), allowing skilled professionals to work in Australia.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12 shadow-sm">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> IMPORTANT 2026 SALARY UPDATE
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            From 1 July 2026, minimum salary thresholds increase due to annual indexation: <strong>Core Skills Income Threshold (CSIT)</strong> rises from AUD $76,515 to <strong>AUD $79,499/year</strong>. <strong>Specialist Skills Income Threshold (SSIT)</strong> rises from AUD $141,210 to <strong>AUD $146,717/year</strong>. Employers must pay whichever is HIGHER: the threshold amount OR the genuine market salary rate for that role in that location.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Visa Streams Explained</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Skills Stream</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                The most common pathway. Designed for occupations listed on the Core Skills Occupation List (CSOL).
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Salary must meet CSIT ($79,499/yr)</li>
                <li>• Standard processing time (1-4 months)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-emerald-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Specialist Skills Stream</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                For highly paid specialists (excluding trades workers, machinery operators, and labourers). 
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Salary must meet SSIT ($146,717/yr)</li>
                <li>• Faster processing (days to 2 months)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <FilePlus className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Labour Agreement Stream</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                For employers who have negotiated a specific labour agreement with the Australian Government to address specific niche shortages.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Requirements</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300"><strong>Occupation on CSOL:</strong> For the Core Skills stream.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300"><strong>Work Experience:</strong> Minimum 1 to 2 years of relevant work experience in your nominated occupation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300"><strong>Qualifications:</strong> Relevant degree/diploma (HEC attested for Pakistanis). Skills assessment may be required for specific trades.</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300"><strong>English Proficiency:</strong> Minimum IELTS 5.0 overall (no band below 4.5) or equivalent. Specialist stream may have exemptions.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300"><strong>Compliant Salary:</strong> Must meet the CSIT/SSIT thresholds and market rates.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300"><strong>Health & Character:</strong> Pass medical examinations and provide Police Clearance Certificates.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The 3-Step Employer Sponsorship Process</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            {[
              { step: 1, title: 'Standard Business Sponsorship', desc: 'The employer applies to become an Approved Standard Business Sponsor with the Department of Home Affairs. This proves they are a lawful, operating business.' },
              { step: 2, title: 'Nomination', desc: 'The employer nominates the specific position. They must prove the occupation is eligible, the salary complies with market rates and thresholds, and (for Core Skills) they may need to provide evidence of Labour Market Testing (advertising the job to Australians first).' },
              { step: 3, title: 'Visa Application', desc: 'Once the nomination is lodged or approved, the worker lodges their Subclass 482 visa application, linking it to the employer\'s nomination Transaction Reference Number (TRN).' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-indigo-500" /> Duration & PR Pathway
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                The visa is typically granted for up to <strong>2 to 4 years</strong> depending on the stream and occupation. It can usually be renewed.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold">
                Permanent Residency Pathway:
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                After working for your sponsoring employer for a specified period (usually 2-3 years), you may be eligible to transition to Permanent Residency via the Employer Nomination Scheme (Subclass 186) Temporary Residence Transition stream.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-emerald-500" /> Employer Costs (SAF Levy)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Be aware that sponsoring a foreign worker involves costs for the employer, primarily the <strong>Skilling Australians Fund (SAF) levy</strong>:
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside space-y-2">
                <li>Small business (turnover &lt; $10M): AUD $1,200 per year of visa.</li>
                <li>Large business: AUD $1,800 per year of visa.</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 font-medium text-red-500 dark:text-red-400">
                Important: Legally, the employer MUST pay the SAF levy and sponsorship costs. They cannot pass these costs onto you.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex flex-wrap gap-4 mt-8">
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Department of Home Affairs - 482 Visa</a>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Core Skills Occupation List (CSOL)</a>
        </div>
      </div>
    </div>
    </>
  );
}
