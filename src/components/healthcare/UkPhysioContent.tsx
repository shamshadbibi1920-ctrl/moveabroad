import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, BadgeDollarSign, ExternalLink, Activity } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkPhysioContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK HCPC Registration for Pakistani Physiotherapists | MoveAbroad.pk"
        description="A complete guide for Pakistani physiotherapists moving to the UK. Learn about HCPC registration, Adaptation Periods, and NHS physiotherapy salaries."
        canonicalPath="/healthcare/uk/physiotherapist"
      />

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Important Regulatory Notice
        </h4>
        <p className="text-amber-800 dark:text-amber-200">
          HCPC assessment outcomes for Pakistani DPT graduates vary case by case. Most will be required to complete an Adaptation Period in the UK before full registration. Always confirm current requirements and adaptation period arrangements directly with HCPC (hcpc-uk.org) and the Chartered Society of Physiotherapy (csp.org.uk) before starting.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            The NHS employs over 60,000 physiotherapists across its Trusts, and demand is particularly high in musculoskeletal (MSK), neurorehabilitation, and community physiotherapy services. Pakistani DPT graduates are eligible to apply for HCPC registration — the mandatory requirement to legally practice as a physiotherapist anywhere in the UK. The HCPC pathway involves a detailed qualification assessment, and most Pakistani DPT holders will be required to complete a supervised Adaptation Period in the UK before receiving full registration.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Important for Pakistani DPT graduates: HCPC does not automatically accept DPT degrees as equivalent to UK physiotherapy standards. A case-by-case assessment is conducted. The most common outcome for Pakistani graduates is a requirement to complete a 3–6 month supervised Adaptation Period at an NHS Trust or approved private clinic before full registration is granted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Band 5 (New Graduate)</div>
              <div className="font-semibold text-slate-900 dark:text-white">£28,407–£34,581/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Band 6 Senior / Specialist</div>
              <div className="font-semibold text-slate-900 dark:text-white">£35,392–£42,618/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Band 7 Advanced</div>
              <div className="font-semibold text-slate-900 dark:text-white">£43,742–£50,056/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <Activity className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">NHS Physiotherapists</div>
              <div className="font-semibold text-slate-900 dark:text-white">60,000+ employed</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">HCPC Registration Pathway — Step by Step</h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {[
            {
              step: 1,
              title: "HCPC International Registration Application",
              desc: "Apply via the HCPC online portal at hcpc-uk.org. Application fee: £350. You must have already completed your DPT and hold active PT Council of Pakistan registration before applying — HCPC does not accept applications from students or unregistered graduates. Required at application: DPT degree certificate, full university transcripts, a detailed syllabus/module breakdown of your DPT programme (this is critical — HCPC uses it to assess equivalency gaps), PT Council of Pakistan registration certificate, clinical placement records or logbooks, and proof of identity."
            },
            {
              step: 2,
              title: "English Language Test",
              desc: "HCPC accepts: IELTS Academic (minimum 7.0 overall, no component below 6.5) or OET Physiotherapy (minimum Grade B in all components). Verify the current full list of accepted tests at hcpc-uk.org as HCPC periodically updates its accepted language test providers. Results must be current at the point of registration."
            },
            {
              step: 3,
              title: "HCPC Qualification Assessment",
              desc: "HCPC compares your DPT programme against the HCPC Standards of Proficiency for Physiotherapists and Standards of Education and Training. This assessment takes 4–6 months. Submit your detailed programme syllabus proactively — incomplete submissions significantly delay this stage. Two possible outcomes:\nOutcome A — Full approval: Rare for Pakistani DPT graduates. Means HCPC considers your training substantially equivalent to UK standards. Proceed directly to registration.\nOutcome B — Conditional approval with Adaptation Period or Aptitude Test required: The most common outcome for Pakistani DPT holders. HCPC identifies specific competency gaps and specifies what must be addressed before full registration is granted."
            },
            {
              step: 4,
              title: "Adaptation Period (Most Common Route for Pakistani DPT Graduates)",
              desc: "An Adaptation Period is a supervised period of practice in the UK — typically 3 to 6 months — during which you work under the direct supervision of a HCPC-registered physiotherapist. This is not a job — it is an assessed clinical placement. You must independently find an NHS Trust or approved private physiotherapy clinic willing to host your Adaptation Period. HCPC does not arrange placements for you.\nHow to find a placement: Contact NHS Trust physiotherapy departments directly, use the Chartered Society of Physiotherapy (CSP) network, or reach out to university physiotherapy departments who maintain placement provider contacts. You will need a valid UK visa with permission to work during this period. Some employers pay a small stipend; others do not — clarify before accepting."
            },
            {
              step: 5,
              title: "Aptitude Test (Alternative to Adaptation Period)",
              desc: "In some cases HCPC may specify an Aptitude Test instead of or in addition to an Adaptation Period. This is a formal written and/or practical examination at a HCPC-approved UK institution, testing the specific knowledge or skill gaps identified in your assessment. The format, institution, and fee vary depending on what gaps were identified."
            },
            {
              step: 6,
              title: "Final HCPC Assessment and Registration",
              desc: "After successfully completing your Adaptation Period or Aptitude Test, submit evidence of completion to HCPC. HCPC conducts a final review and grants full registration. Annual registration fee: £90/year (2026 rate — verify at hcpc-uk.org). You are added to the HCPC public register, which employers and patients can check to verify your registration status. You are now legally able to practice as a Physiotherapist in the UK."
            },
            {
              step: 7,
              title: "First UK Physiotherapy Job",
              desc: "Apply for Band 5 NHS physiotherapy roles via NHS Jobs, the CSP Job Board (csp.org.uk/jobs), or Indeed. Private physiotherapy clinics, sports clinics, and rehabilitation centres also hire internationally registered physiotherapists and often offer higher pay than NHS Band 5. Many Pakistani physiotherapists start in NHS roles for structured clinical development and then move to private practice."
            }
          ].map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-teal-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-wrap">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Where Can You Specialise?</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            After gaining experience, physiotherapists can pursue specialty pathways including: Musculoskeletal (MSK) and Extended Scope Practice, Neurorehabilitation, Paediatric Physiotherapy, Cardiorespiratory and ICU Physiotherapy, Sports and Exercise Medicine, Women's Health and Pelvic Floor, and Advanced Physiotherapy Practitioner (APP) roles at Band 7–8. The CSP provides CPD resources, specialist interest groups, and career development frameworks for all specialities.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Timeline & Cost</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Realistic Timeline</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 1–3</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">HCPC application + document compilation (include detailed DPT syllabus) + English test</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 3–9</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">HCPC qualification assessment (4–6 months)</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 9–10</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Receive HCPC outcome letter — arrange Adaptation Period placement if required</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 10–16</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Adaptation Period in UK (3–6 months, supervised clinical placement)</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 16–18</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">HCPC final approval and full registration</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 18+</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">First Band 5 NHS physiotherapy role</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Cost Breakdown</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">HCPC application fee</span>
                <span className="font-semibold text-slate-900 dark:text-white">£350</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">English test (IELTS/OET)</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£200–220</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">HCPC annual registration</span>
                <span className="font-semibold text-slate-900 dark:text-white">£90/year</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Adaptation Period (UK living costs)</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£1,000–1,500/month</span>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">Estimated total core fees</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">~£550–650</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">
                *Adaptation period personal living costs vary widely and are not included in core fees
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Documents Checklist</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Valid Passport",
              "DPT Degree (HEC attested)",
              "PT Council of Pakistan Registration Certificate",
              "Certificate of Good Standing from PT Council",
              "Full university transcripts",
              "Detailed DPT programme syllabus with module-by-module breakdown (essential for HCPC assessment)",
              "Clinical placement logbooks and hours records",
              "IELTS Academic or OET Physiotherapy result",
              "2 professional reference letters from HCPC-registered or equivalent physiotherapists"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Official Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "HCPC International Applications",
              desc: "Apply for overseas physiotherapist registration",
              url: "https://www.hcpc-uk.org/registration/getting-on-the-register/international-applications/"
            },
            {
              title: "HCPC Standards of Proficiency — Physiotherapists",
              desc: "The standards your DPT will be assessed against",
              url: "https://www.hcpc-uk.org/standards/standards-of-proficiency/physiotherapists/"
            },
            {
              title: "HCPC Adaptation Periods",
              desc: "Guidance on completing a supervised Adaptation Period",
              url: "https://www.hcpc-uk.org/registration/getting-on-the-register/international-applications/adaptation-period/"
            },
            {
              title: "Chartered Society of Physiotherapy (CSP)",
              desc: "Professional body, CPD resources, and career support",
              url: "https://www.csp.org.uk/"
            },
            {
              title: "CSP Job Board",
              desc: "Search NHS and private physiotherapy vacancies",
              url: "https://www.csp.org.uk/jobs"
            },
            {
              title: "NHS Jobs Portal",
              desc: "Search Band 5 and Band 6 NHS physiotherapy roles",
              url: "https://www.jobs.nhs.uk/"
            },
            {
              title: "PT Council of Pakistan",
              desc: "Obtain your Certificate of Good Standing",
              url: "https://ptcouncil.gov.pk/"
            }
          ].map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-700 transition-all group hover:shadow-md"
            >
              <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg mr-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors">
                <ExternalLink className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{link.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
