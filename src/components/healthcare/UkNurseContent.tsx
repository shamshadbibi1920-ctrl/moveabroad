import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, BadgeDollarSign, ExternalLink, ActivitySquare } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkNurseContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK NMC Registration for Pakistani Nurses | MoveAbroad.pk"
        description="A complete guide for Pakistani nurses moving to the UK. Learn about NMC registration, CBT, OSCE exams, and average NHS nursing salaries."
        canonicalPath="/healthcare/uk/nurse"
      />

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Important Regulatory Notice
        </h4>
        <p className="text-amber-800 dark:text-amber-200">
          NMC registration requirements and OSCE testing arrangements change periodically. Always verify current exam fees, slot availability, and document requirements directly with the NMC (nmc.org.uk) before starting the process.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            The NHS and private care sector face an ongoing nursing shortage across the UK. International nurses account for over 25% of new NMC registrations annually, with Pakistani nurses increasingly recruited through international NHS recruitment drives. The pathway is clear and well-established — it requires passing two components of the NMC Test of Competence (CBT and OSCE) before you can register and practice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Band 5 RN (New Grad)</div>
              <div className="font-semibold text-slate-900 dark:text-white">£28,407–£34,581/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Band 6 Senior/Specialist</div>
              <div className="font-semibold text-slate-900 dark:text-white">£35,392–£42,618/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Band 7 Advanced/Lead</div>
              <div className="font-semibold text-slate-900 dark:text-white">£43,742–£50,056/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <ActivitySquare className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Intl NMC Registrations</div>
              <div className="font-semibold text-slate-900 dark:text-white">25%+ annually</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">NMC Registration Pathway — Step by Step</h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {[
            {
              step: 1,
              title: "Create Your NMC Online Account",
              desc: "Go to nmc.org.uk and create your applicant account. This is the portal through which you will submit your application, upload documents, and track your progress. Application fee: £153. Pay this when submitting your initial application — it is non-refundable."
            },
            {
              step: 2,
              title: "Submit Application and Documents",
              desc: "Upload all required documents through your NMC Online account. The NMC will contact the Pakistan Nursing Council (PNC) directly to verify your registration and qualification. This source verification stage takes 2–4 months. Do not contact the NMC repeatedly for updates during this period — delays are normal and expected."
            },
            {
              step: 3,
              title: "English Language Test",
              desc: "IELTS Academic: minimum 7.0 overall with no individual component below 7.0. OET Nursing: minimum Grade B in all 4 sub-tests (Listening, Reading, Writing, Speaking). Results must be valid (within 2 years) at the point you complete NMC registration. Take this early as it often runs in parallel with the document verification stage."
            },
            {
              step: 4,
              title: "Pass the Computer Based Test (CBT)",
              desc: "The first part of the NMC Test of Competence. Delivered via Pearson VUE at test centres worldwide — including in Pakistan. Fee: £83. Format: 120 questions over 3 hours. Tests nursing knowledge across 4 domains: professional values and expected behaviours, communication and interpersonal skills, nursing practice and decision making, and leadership and team working. Maximum 3 attempts before a cooling-off period. Register at pearsonvue.com/nmc. You can sit this in Pakistan before travelling to the UK."
            },
            {
              step: 5,
              title: "Book Your OSCE Place in the UK",
              desc: "After passing the CBT, you must book an OSCE (Objective Structured Clinical Examination) slot at an NMC-approved test centre in the UK. ⚠️ Book immediately after receiving your CBT result — OSCE slots fill up 3–6 months in advance across test centres in England, Scotland, Wales, and Northern Ireland. Most approved OSCE centres are at NHS Trust sites. Your CBT result is valid for 2 years — you must pass your OSCE within this window."
            },
            {
              step: 6,
              title: "Pass the OSCE",
              desc: "The practical clinical assessment held in the UK only. Fee: £794. Format: 10 clinical stations testing: medication administration, infection control and prevention, communication with patients, moving and handling, catheterisation, vital signs assessment, and other fundamental nursing skills. Assessed by trained NMC nurse examiners. Maximum 3 attempts. Preparation tip: practice with UK clinical guidelines (NICE) not Pakistani textbooks — examiners assess to UK care standards."
            },
            {
              step: 7,
              title: "Secure NHS Job Offer and Health & Care Worker Visa",
              desc: "Once you have passed both CBT and OSCE, you are eligible to apply for nursing roles. Your NHS Trust or care employer will issue a Certificate of Sponsorship (CoS) to sponsor your Skilled Worker (Health and Care) visa. Visa fee for this route: approximately £284 for up to 3 years — significantly cheaper than the standard Skilled Worker visa. NHS workers on this visa are also exempt from the Immigration Health Surcharge (IHS), saving over £3,000 vs standard routes."
            },
            {
              step: 8,
              title: "NMC Registration and First NHS Shift",
              desc: "After arriving in the UK and completing any final NMC requirements, you receive full NMC registration. Annual retention fee: £120/year. You are now a Registered Nurse (RN) in the UK. Band 5 is the standard starting band for internationally registered nurses."
            }
          ].map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-teal-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Where Can You Specialise?</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            After registration, nurses can pursue specialisation in: ICU / Critical Care, Theatre and Perioperative Care, Emergency Medicine, Mental Health Nursing (requires separate NMC part of register), Community / District Nursing, Neonatal Nursing, Oncology, and eventually Advanced Nurse Practitioner (ANP) roles at Band 7–8.
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
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 1–2</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">NMC Online account setup + document submission + English test booking</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 2–5</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">English test + CBT preparation and sitting in Pakistan</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 5–8</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">OSCE booking (early — slots fill fast) + travel to UK</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 8–10</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">OSCE sitting in UK</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 10–12</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Job offer + Health & Care Worker visa + NMC registration</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 12+</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">First NHS nursing role — Band 5</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Cost Breakdown</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">NMC application fee</span>
                <span className="font-semibold text-slate-900 dark:text-white">£153</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">CBT exam</span>
                <span className="font-semibold text-slate-900 dark:text-white">£83</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">OSCE exam</span>
                <span className="font-semibold text-slate-900 dark:text-white">£794</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">NMC annual retention</span>
                <span className="font-semibold text-slate-900 dark:text-white">£120/year</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">IELTS Academic</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£200–220</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Health & Care Worker visa</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£284 (3 years)</span>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">Estimated total core costs</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">~£1,450–1,650</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">
                *Excluding UK travel and accommodation for OSCE
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
              "BSc Nursing or equivalent degree (HEC attested)",
              "PNC Registration Certificate",
              "Certificate of Good Standing from PNC",
              "University transcripts",
              "IELTS Academic or OET Nursing result (within 2 years)",
              "CBT pass certificate",
              "2 professional reference letters (one must be from a current or recent line manager)"
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
              title: "NMC International Registration",
              desc: "Start your overseas nurse registration application",
              url: "https://www.nmc.org.uk/registration/joining-the-register/internationally-educated-nurses-and-midwives/"
            },
            {
              title: "NMC English Language Requirements",
              desc: "Check accepted tests and minimum scores",
              url: "https://www.nmc.org.uk/registration/joining-the-register/english-language-requirements/"
            },
            {
              title: "Pearson VUE CBT Booking (NMC)",
              desc: "Register and book your Computer Based Test in Pakistan",
              url: "https://home.pearsonvue.com/nmc"
            },
            {
              title: "NHS Jobs Portal",
              desc: "Search Band 5 and Band 6 nursing vacancies across the NHS",
              url: "https://www.jobs.nhs.uk/"
            },
            {
              title: "Pakistan Nursing Council",
              desc: "Obtain your Certificate of Good Standing",
              url: "https://www.pnc.org.pk/"
            },
            {
              title: "NMC Register (Check Registration)",
              desc: "Verify your registration status once confirmed",
              url: "https://www.nmc.org.uk/registration/the-register/"
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
