import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, BadgeDollarSign, ExternalLink, Pill } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkPharmacistContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK GPhC Registration for Pakistani Pharmacists | MoveAbroad.pk"
        description="A complete guide for Pakistani pharmacists moving to the UK. Learn about GPhC registration, OSPAP, and average NHS pharmacist salaries."
        canonicalPath="/healthcare/uk/pharmacist"
      />

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Important Regulatory Notice
        </h4>
        <p className="text-amber-800 dark:text-amber-200">
          GPhC opened a formal consultation in April 2026 on a proposed 1-year streamlined route replacing the current 2-year OSPAP pathway. This is not yet law — the current 2-year route remains active. Monitor gphcreg.org for updates before starting your application.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            The UK has over 14,000 pharmacies and a rapidly expanding role for clinical pharmacists embedded in GP surgeries and hospital wards under NHS England's Primary Care Networks (PCN) programme. Demand for pharmacists is strong and growing. Pakistani Pharm-D graduates can register via the OSPAP route — a structured 2-year process involving an academic bridging course followed by a paid foundation training year and a final registration assessment.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center mb-2">
              IMPORTANT 2026 UPDATE
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              GPhC opened a consultation in April 2026 on a proposed ONE-YEAR streamlined route that would combine the OSPAP academic year and foundation training year into a single integrated programme. If approved, this would significantly reduce cost and time. As of mid-2026 this is still in consultation — the 2-year route below remains the active pathway. Check pharmacyregulation.org for the latest status.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Staff Pharmacist (NHS Band 6)</div>
              <div className="font-semibold text-slate-900 dark:text-white">£35,392–£42,618/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Clinical / Senior (NHS Band 7)</div>
              <div className="font-semibold text-slate-900 dark:text-white">£43,742–£50,056/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Pharmacy Manager / Consultant</div>
              <div className="font-semibold text-slate-900 dark:text-white">£55,000–£70,000+/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <Pill className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">UK Pharmacies</div>
              <div className="font-semibold text-slate-900 dark:text-white">14,000+ with growing clinical roles</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">GPhC Registration Pathway (Current 2-Year OSPAP Route) — Step by Step</h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {[
            {
              step: 1,
              title: "GPhC Overseas Qualification Assessment",
              desc: "Apply to the General Pharmaceutical Council (GPhC) at pharmacyregulation.org for an overseas qualification assessment. Fee: £739 (non-refundable). Submit: Pharm-D degree certificate, full university transcripts, Pharmacy Council of Pakistan (PCP) registration certificate, and official English translations of any Urdu-language documents. Processing time: 8–12 weeks. GPhC will determine whether your qualification requires bridging — for Pakistani Pharm-D holders, the OSPAP route is the standard outcome."
            },
            {
              step: 2,
              title: "English Language Test",
              desc: "Accepted tests: IELTS Academic (minimum 7.0 overall, no component below 6.5), OET Pharmacy (minimum Grade B in all components), TOEFL iBT (minimum 94 overall), or PTE Academic (minimum 65). Results must be less than 3 years old at point of GPhC registration. GPhC accepts more English test options than GMC or GDC — confirm the current accepted list at pharmacyregulation.org as this is updated periodically."
            },
            {
              step: 3,
              title: "Apply to OSPAP (Overseas Pharmacists' Assessment Programme)",
              desc: "OSPAP is a 9-month intensive, full-time academic course that bridges your Pakistani pharmacy qualification to UK pharmacy practice standards. It is offered by a small number of UK universities. You must secure a place at one of these universities, obtain a UK Student visa, and relocate to the UK for this stage. Course typically starts in September or October — applications open from November the previous year through to approximately February. University course fees: approximately £9,000–£12,000 for the full programme.\n\nCurrent OSPAP providers:\n— University of Bath\n— Aston University (Birmingham)\n— University of Bradford\n— University of East Anglia (Norwich)\n— Kingston University (London)\n\nOSPAP is academically demanding and fast-paced — it is specifically designed to expose and close knowledge gaps in UK law, ethics, clinical pharmacy practice, and therapeutics. Attendance is mandatory."
            },
            {
              step: 4,
              title: "Register as a Trainee Pharmacist with GPhC",
              desc: "After completing OSPAP, register with GPhC as a Trainee Pharmacist before beginning foundation training. Fee: £179. This registration is required before you can legally undertake supervised training in a UK pharmacy setting."
            },
            {
              step: 5,
              title: "Complete 52 Weeks of Foundation Training",
              desc: "Undertake one full year (52 weeks) of paid, supervised foundation training at a GPhC-approved training pharmacy. Settings include: community pharmacies (Boots, Lloyds, Well Pharmacy, independent pharmacies), NHS hospital pharmacy departments, or GP-integrated PCN pharmacy roles. Salary during foundation training: approximately £22,000–£28,000/year depending on employer. Your training pharmacy supervisor is responsible for signing off your competency development."
            },
            {
              step: 6,
              title: "Pass the GPhC Registration Assessment",
              desc: "The final licensing examination required before full GPhC registration. Format: two papers — a calculations paper and a clinical practice paper. Fee: approximately £350. Held twice per year (typically June and October). Maximum 4 attempts per paper. Both papers must be passed within 3 years of passing the first. Pass rates for internationally qualified trainees: approximately 70–75% on first attempt. Prepare using the GPhC assessment framework and UK clinical guidelines (BNF, NICE, MHRA)."
            },
            {
              step: 7,
              title: "GPhC Full Registration and First Pharmacist Role",
              desc: "Apply for full GPhC registration after passing the assessment. Annual retention fee: £256/year. You are now a registered pharmacist in the UK and can practice independently. Apply for Band 6 NHS pharmacist roles via NHS Jobs, or community pharmacist roles via Boots, Lloyds, Well Pharmacy, or independent pharmacy networks. Hospital rotational pharmacist posts are an excellent way to gain broad clinical experience early in your UK career."
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
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Timeline & Cost</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Realistic Timeline</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 1–3</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">GPhC overseas assessment application + English language test</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 3–6</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">OSPAP university applications + Student visa application</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 6–15</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">OSPAP course (Sept–June, 9 months, UK-based)</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 15–16</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">GPhC Trainee Pharmacist registration</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 16–28</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">52-week foundation training (paid, supervised)</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 28–30</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">GPhC Registration Assessment (calculations + clinical papers)</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 30+</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Full GPhC registration + first qualified pharmacist role</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Cost Breakdown</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GPhC overseas assessment</span>
                <span className="font-semibold text-slate-900 dark:text-white">£739</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">OSPAP university fees</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£9,000–£12,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GPhC Trainee registration</span>
                <span className="font-semibold text-slate-900 dark:text-white">£179</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GPhC Registration Assessment</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£350</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GPhC annual retention</span>
                <span className="font-semibold text-slate-900 dark:text-white">£256/year</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">English test (IELTS/OET)</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£200–220</span>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">Estimated total core costs</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">~£10,500–£13,500</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">
                *Excluding UK living costs during OSPAP year and foundation training year
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
              "Pharm-D Degree (HEC attested)",
              "Pharmacy Council of Pakistan Registration Certificate",
              "Certificate of Good Standing from PCP",
              "Full university transcripts (with English translations if in Urdu)",
              "IELTS / OET / TOEFL / PTE result (within 3 years)",
              "OSPAP completion certificate",
              "Foundation training completion record and sign-off portfolio",
              "GPhC Trainee registration confirmation"
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
              title: "GPhC Overseas Pharmacists",
              desc: "Start your qualification assessment and OSPAP application",
              url: "https://www.pharmacyregulation.org/education/pharmacist/overseas-pharmacists"
            },
            {
              title: "GPhC Registration Assessment",
              desc: "Exam format, dates, fees, and preparation resources",
              url: "https://www.pharmacyregulation.org/education/pharmacist/registration-assessment"
            },
            {
              title: "University of Bath OSPAP",
              desc: "Course details and application",
              url: "https://www.bath.ac.uk/courses/postgraduate-2025/taught-postgraduate/ospap/"
            },
            {
              title: "Aston University OSPAP",
              desc: "Birmingham-based OSPAP programme",
              url: "https://www.aston.ac.uk/study/courses/overseas-pharmacists-assessment-programme"
            },
            {
              title: "University of Bradford OSPAP",
              desc: "Bradford OSPAP programme details",
              url: "https://www.bradford.ac.uk/courses/pg/ospap/"
            },
            {
              title: "NHS Jobs Portal",
              desc: "Search Band 6 and Band 7 clinical pharmacist vacancies",
              url: "https://www.jobs.nhs.uk/"
            },
            {
              title: "Pharmacy Council of Pakistan",
              desc: "Obtain your Certificate of Good Standing",
              url: "https://www.pharmacycouncil.org.pk/"
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
