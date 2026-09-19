import React from 'react';
import { Globe, ShieldCheck, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <SEO 
        title="About Us — Editorial Mission & Founder Background | MoveAbroad.pk" 
        description="Learn about MoveAbroad.pk, our founder's clinical background, our editorial research methodology, and our commitment to providing independent, verified migration intelligence for Pakistanis." 
      />
      <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial" 
            animate="animate" 
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-4">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Independent Migration & Education Intelligence
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
              About MoveAbroad.pk
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
              Empowering Pakistani students, doctors, and professionals to navigate global study, work, and licensing pathways through verified, research-backed intelligence.
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-14 border border-slate-100 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg prose-blue max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
              
              {/* Mission Statement */}
              <section className="border-b border-slate-100 dark:border-slate-700 pb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  MoveAbroad.pk is an independent educational and immigration research platform dedicated to bridging the information gap for Pakistani passport holders. We dismantle the bureaucratic opacity surrounding foreign university admissions, post-graduate medical licensing, engineering accreditations, and legal skilled migration frameworks.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Our objective is singular: to provide accurate, transparent, and completely free roadmaps so that ambitious Pakistanis can make informed career decisions without falling victim to predatory commercial agents or counterfeit visa promises.
                </p>
              </section>

              {/* Founder Credibility */}
              <section className="border-b border-slate-100 dark:border-slate-700 pb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                  Who We Are: Clinical & Founder Background
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  MoveAbroad.pk was founded by <strong className="text-slate-900 dark:text-slate-100">Dr. M. Malik</strong>, an MBBS graduate from Pakistan who personally navigated the intricate, high-stakes landscape of international medical examinations (PLAB/UKMLA, AMC, German Approbation), foreign credential verification (ECFMG EPIC, PMDC Good Standing), and Embassy visa processing.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Having witnessed peers spend millions of Pakistani Rupees on unqualified educational consultancies only to face preventable visa refusals under strict consular clauses, Dr. Malik established MoveAbroad.pk as a public-service knowledge base. Today, our research combines clinical precision with hands-on regulatory analysis, collaborating with Pakistani expatriates, doctors, and engineers practicing across the UK, Germany, Australia, Canada, and the Middle East.
                </p>
              </section>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                  <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">20+ Destinations</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Comprehensive guides covering Europe, North America, Australia, and the Gulf.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                  <BookOpen className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">100% Primary Data</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Information cited directly from statutory immigration laws and official portals.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                  <ShieldCheck className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">Non-Commercial</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">We charge zero consulting fees, sell no visas, and take no agency kickbacks.</p>
                </div>
              </div>

              {/* Why the Site Was Created */}
              <section className="border-b border-slate-100 dark:border-slate-700 pb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Why MoveAbroad.pk Was Created
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Across Pakistan, the migration sector is saturated with unregulated agents who exploit applicants through misleading advertisements: promising guaranteed Canadian work visas without LMIA, pushing low-quality private European colleges, or hiding crucial consular language requirements.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  These predatory practices routinely cost hardworking families their life savings and result in devastating 5-year or 10-year immigration bans. MoveAbroad.pk exists to offer an authoritative, peer-reviewed alternative: completely transparent, step-by-step guides that teach you how to prepare and lodge your own applications directly with foreign authorities.
                </p>
              </section>

              {/* How We Research and Maintain Content */}
              <section className="border-b border-slate-100 dark:border-slate-700 pb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  How We Research and Maintain Content
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Our editorial framework follows rigorous standards to maintain high levels of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T):
                </p>
                <ul className="space-y-3 pl-2 not-prose text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-slate-100">Official Statutory Sources Only:</strong> We monitor updates directly from government departments—such as IRCC (Canada), UK Visas and Immigration (UKVI), the German Federal Foreign Office (Auswärtiges Amt), and the Australian Department of Home Affairs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-slate-100">Direct Regulatory Boards:</strong> Medical, nursing, and dental guides are validated against primary licensing registries: PMDC, GMC, AMC, AHPRA, NMBI, and German state Approbationsbehörden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-slate-100">Pakistani Financial & Banking Realities:</strong> We calculate practical Pakistani financial parameters—including State Bank of Pakistan (SBP) Form A2 education wire protocols, FBR Section 236Y withholding tax rules, and local currency (PKR) conversions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-slate-100">Quarterly Audits:</strong> Given the fast-changing nature of immigration policies, our team conducts regular review cycles to incorporate quota shifts, blocked account hikes, and visa fee changes.</span>
                  </li>
                </ul>
              </section>

              {/* Independence Statement */}
              <section className="border-b border-slate-100 dark:border-slate-700 pb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Strict Independence Statement
                </h2>
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5 text-amber-900 dark:text-amber-200 text-base leading-relaxed">
                  <strong>Non-Agency Disclosure:</strong> MoveAbroad.pk is an independent informational and research publishing platform. We are not an immigration agency, not licensed legal practitioners, and not affiliated with any foreign government, embassy, or consulate. We do not sell visas, arrange work permits, represent applicants before immigration tribunals, or accept commercial commissions from private universities or consultants. All content is intended strictly for general educational purposes.
                </div>
              </section>

              {/* Our Vision */}
              <section>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We envision an ecosystem where geographic borders do not limit the potential of talented, hardworking Pakistanis. Whether you are a fresh graduate pursuing a fully funded DAAD or Erasmus scholarship, or an experienced consultant doctor advancing into NHS specialty training, MoveAbroad.pk is here to provide an honest, accurate, and empowering roadmap.
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

