import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, BadgeDollarSign, ExternalLink, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkDentistContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK GDC Registration for Pakistani Dentists | MoveAbroad.pk"
        description="A complete guide for Pakistani dentists moving to the UK. Learn about GDC registration, ORE exams, and average NHS dentist salaries."
        canonicalPath="/healthcare/uk/dentist"
      />

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Important Regulatory Notice
        </h4>
        <p className="text-amber-800 dark:text-amber-200">
          GDC registration requirements and ORE exam slot availability change frequently. ORE Part 2 waiting times can exceed 12 months. Always verify current fees, exam dates, and document requirements directly with the GDC (gdc-uk.org) and the relevant Royal College before starting.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            The UK faces a severe NHS dentist shortage — approximately 12 million patients cannot access NHS dental care as of 2025, and this gap is growing. Pakistani BDS graduates are well-positioned to fill this demand, with excellent earning potential particularly in NHS-heavy regions (North of England, Wales, Scotland) and strong long-term prospects for mixed or fully private practice ownership. All internationally trained dentists must register with the General Dental Council (GDC) — the sole regulatory body for dentistry in the UK.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              NHS dentists are paid per UDA (Unit of Dental Activity) — a contract-based system rather than hourly pay. Private practice pays significantly more per treatment. Most international dentists start as NHS associates and gradually transition to mixed or fully private practice as they build experience and a patient base.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Associate Dentist (NHS)</div>
              <div className="font-semibold text-slate-900 dark:text-white">£50,000–£80,000/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Experienced / Mixed</div>
              <div className="font-semibold text-slate-900 dark:text-white">£80,000–£110,000/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Practice Owner</div>
              <div className="font-semibold text-slate-900 dark:text-white">£110,000–£150,000+/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <ShieldCheck className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">NHS Dentist Shortage</div>
              <div className="font-semibold text-slate-900 dark:text-white">~12M patients without access</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">GDC Registration Pathway — Step by Step</h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {[
            {
              step: 1,
              title: "Check GDC Eligibility and Create Account",
              desc: "All dentists must register with the General Dental Council (GDC) at gdc-uk.org regardless of where they qualified. Pakistani BDS degrees are not from GDC-approved overseas dental schools, meaning you cannot register directly — you must complete either the ORE (Overseas Registration Exam) or the LDS (Licence in Dental Surgery) route first. Create your GDC Online account early to begin tracking requirements. Confirm your BDS is from an HEC-recognized institution in Pakistan before proceeding."
            },
            {
              step: 2,
              title: "English Language Test",
              desc: "IELTS Academic: minimum 7.0 overall with no individual component below 6.5. OET Dentistry: minimum Grade B in all 4 components. Results must be less than 2 years old at the point of GDC application. Note: GDC's IELTS threshold (7.0 overall) is slightly different from GMC's (7.5 overall) — do not assume the same score suffices across both regulators. Check gdc-uk.org for the exact current requirements as these are reviewed periodically."
            },
            {
              step: 3,
              title: "Choose Your Exam Route",
              desc: "Two options for Pakistani BDS graduates: Option A — ORE (Overseas Registration Exam): The most common route for Pakistani dentists. Run jointly by the Royal College of Surgeons of England (RCS England) and Royal College of Surgeons of Edinburgh (RCS Edinburgh). A two-part exam (written + clinical). Option B — LDS (Licence in Dental Surgery): An alternative qualification offered by RCS England or RCS Edinburgh. Less commonly used by international applicants but recognized equally by GDC for registration purposes."
            },
            {
              step: 4,
              title: "Pass ORE Part 1 (Written Exam)",
              desc: "A computer-based written examination testing dental sciences and clinical knowledge. Topics: oral medicine, oral surgery, periodontology, orthodontics, restorative dentistry, paediatric dentistry, dental public health, and patient management. Delivered via Pearson VUE test centres in the UK and internationally — you can sit Part 1 outside the UK. Fee: approximately £570 per attempt. Maximum 4 lifetime attempts. Prepare using UK dental guidelines (NICE, FGDP) not Pakistani textbook standards — the exam tests to UK clinical reasoning frameworks."
            },
            {
              step: 5,
              title: "Pass ORE Part 2 (Clinical Exam)",
              desc: "A practical clinical skills assessment held only at Royal College centres in London or Edinburgh. Fee: approximately £1,895 per attempt. Maximum 4 lifetime attempts. Tests: clinical examination technique, treatment planning, operative dentistry on a manikin (typodont), radiograph interpretation, and patient management scenarios. The standard assessed is equivalent to a newly qualified UK BDS graduate — focus on systematic, patient-safety-first approach rather than advanced technique. ⚠️ CRITICAL: ORE Part 2 slots are extremely limited and waiting lists of 6–12 months are standard. Book your slot the moment you become eligible after passing Part 1. Do not wait."
            },
            {
              step: 6,
              title: "GDC Registration Application",
              desc: "Once you have passed both ORE parts, submit your GDC registration application online. Fee: approximately £890 (2026 rate). Required documents: BDS degree certificate, ORE Part 1 and Part 2 pass certificates, English language test result, Certificate of Good Standing from PMDC (Pakistan Medical and Dental Council), valid passport, and two professional references from qualified dental professionals who have directly observed your clinical work."
            },
            {
              step: 7,
              title: "Identity Verification",
              desc: "GDC requires you to complete identity verification as part of the application review. This is handled via the GDC Online portal and may involve document uploads or a video verification call — check the current process at gdc-uk.org as GDC has been updating its identity checking procedures."
            },
            {
              step: 8,
              title: "GDC Registration and First UK Dental Job",
              desc: "Once registered, you are added to the GDC register and can legally practice dentistry in the UK. Unlike UK BDS graduates, internationally registered dentists are not required to complete a mandatory Dental Foundation Training year — you can practice independently immediately after GDC registration. Apply for associate dentist positions via NHS Jobs, Reed Dental, Dentist Jobs UK, or direct outreach to practice principals. Annual GDC retention fee: £948 (2026 rate — verify at gdc-uk.org as fees increase annually)."
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
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Timeline & Cost</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Realistic Timeline</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 1–3</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">GDC account setup + English language test + ORE Part 1 preparation</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 3–6</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Sit ORE Part 1 (can be done outside UK at Pearson VUE)</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 6–18</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Book ORE Part 2 immediately — expect 6–12 month wait. Travel to UK for exam.</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 18–22</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">GDC registration application + identity verification</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 22–24</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">First UK dental associate role</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Cost Breakdown</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">ORE Part 1 (per attempt)</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£570</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">ORE Part 2 (per attempt)</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£1,895</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GDC Registration</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£890</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GDC Annual Retention</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£948/year</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">English test (IELTS)</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£200–220</span>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">Estimated total core costs</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">~£3,600–4,100+</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">
                *Excluding UK travel and accommodation for ORE Part 2 in London or Edinburgh
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
              "BDS Degree (HEC attested)",
              "PMDC Registration Certificate",
              "Certificate of Good Standing from PMDC",
              "Full university transcripts",
              "IELTS Academic or OET Dentistry result (within 2 years)",
              "ORE Part 1 pass certificate",
              "ORE Part 2 pass certificate",
              "2 professional reference letters from qualified dental professionals"
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
              title: "General Dental Council",
              desc: "Create your GDC account and check registration requirements",
              url: "https://www.gdc-uk.org/"
            },
            {
              title: "GDC Overseas Applicants Guide",
              desc: "Official GDC guidance for internationally trained dentists",
              url: "https://www.gdc-uk.org/registration/your-registration/who-can-register/overseas-applicants"
            },
            {
              title: "ORE Exam — RCS England",
              desc: "ORE Part 1 and Part 2 information, dates, and fees",
              url: "https://www.rcseng.ac.uk/dental-faculties/fds/examinations/ore/"
            },
            {
              title: "ORE Exam — RCS Edinburgh",
              desc: "Alternative ORE route via Edinburgh",
              url: "https://www.rcsed.ac.uk/examinations/overseas-registration-examination"
            },
            {
              title: "LDS Exam — RCS England",
              desc: "Alternative to ORE for GDC registration",
              url: "https://www.rcseng.ac.uk/dental-faculties/fds/examinations/lds/"
            },
            {
              title: "NHS Jobs Portal",
              desc: "Search associate dentist and specialist vacancies",
              url: "https://www.jobs.nhs.uk/"
            },
            {
              title: "PMDC Pakistan",
              desc: "Obtain your Certificate of Good Standing",
              url: "https://www.pmdc.org.pk/"
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
