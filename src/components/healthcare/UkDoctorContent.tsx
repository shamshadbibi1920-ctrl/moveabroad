import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, BadgeDollarSign, ExternalLink, HeartPulse } from 'lucide-react';
import SEO from '../../components/SEO';

export default function UkDoctorContent() {
  return (
    <div className="space-y-12 pb-20">
      <SEO 
        title="UK Licensing for Pakistani Doctors (PLAB) | MoveAbroad.pk"
        description="A complete guide for Pakistani doctors moving to the UK. Learn about the PLAB exams, GMC registration, MTI, and average NHS salaries."
        canonicalPath="/healthcare/uk/doctor"
      />

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Important Regulatory Notice
        </h4>
        <p className="text-amber-800 dark:text-amber-200">
          UK healthcare licensing requirements change frequently. The 2026 Medical Training Prioritisation Act has changed specialty training access for international doctors. Always verify current requirements directly with the GMC (gmc-uk.org) before starting any process.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            The National Health Service (NHS) relies heavily on international medical graduates — historically over 40% of NHS doctors trained abroad. The UK remains one of the most accessible destinations for Pakistani doctors due to a clear licensing pathway (PLAB), English as the working language, and structured long-term career progression from Foundation to Consultant level.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 flex items-center mb-2">
              IMPORTANT 2026 UPDATE
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              The UK Medical Training Prioritisation Act became law in March 2026, requiring NHS specialty training programmes to prioritise UK graduates and doctors with existing NHS experience. This does NOT close the door for international doctors — but it means securing NHS clinical experience FIRST (via Trust Grade or Clinical Fellow posts) before applying to formal specialty training is now the stronger and recommended strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Foundation Doctor</div>
              <div className="font-semibold text-slate-900 dark:text-white">£36,000/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Registrar / Spec. Trainee</div>
              <div className="font-semibold text-slate-900 dark:text-white">£52,000–£65,000/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <BadgeDollarSign className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">Consultant</div>
              <div className="font-semibold text-slate-900 dark:text-white">£105,000–£126,000+/year</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <HeartPulse className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-sm text-slate-500 dark:text-slate-400">NHS Doctors from Abroad</div>
              <div className="font-semibold text-slate-900 dark:text-white">40%+ of NHS workforce</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">PLAB Licensing Pathway — Step by Step</h2>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-5 rounded-xl mb-8">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>UKMLA Note:</strong> PLAB is being aligned with the new UK Medical Licensing Assessment (UKMLA) framework. The exam retains its name for international graduates but tests equivalent clinical content to what UK graduates now sit.
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {[
            {
              step: 1,
              title: "Verify Your MBBS via EPIC",
              desc: "Create an account on the EPIC portal (ECFMG Primary Source Verification) at epic.fsmb.org. EPIC contacts your Pakistani medical school directly to verify your MBBS degree is authentic and that your school is on the GMC's list of recognized primary medical qualifications. Fee: approximately $100 USD. Processing time: 4–8 weeks. Do not skip this — GMC will not register you without completed EPIC verification."
            },
            {
              step: 2,
              title: "Create Your GMC Online Account",
              desc: "Register at gmc-uk.org/registration. This is your central hub for managing your entire GMC registration process, tracking document submissions, and eventually receiving your GMC number."
            },
            {
              step: 3,
              title: "English Language Test",
              desc: "Required for all Pakistani graduates unless you completed 5+ years of full medical education taught entirely in English at a GMC-recognized institution. Accepted tests: IELTS Academic (minimum 7.5 overall, no individual component below 7.0) or OET Medicine (minimum Grade B in all 4 components: Listening, Reading, Writing, Speaking). Results are valid for 2 years. Take this early — it is often the longest lead-time item and needs to be valid at point of GMC application."
            },
            {
              step: 4,
              title: "Pass PLAB 1",
              desc: "A 3-hour, 180-question Single Best Answer (SBA) multiple-choice exam testing clinical knowledge at the level of a UK Foundation Year 2 doctor. Held internationally at British Council test centres — including in Pakistan (Karachi, Lahore, Islamabad). Fee: £255 per attempt. Maximum 4 lifetime attempts. Aim to score significantly above the pass mark, not just at it — residency programmes and Trust Grade employers can see your score, and a strong result strengthens your overall profile. Preparation resources: SamsonNotes, Plabable, Passmedicine."
            },
            {
              step: 5,
              title: "Pass PLAB 2",
              desc: "A practical OSCE-style clinical exam with 18 stations testing: history taking, physical examination, communication skills, breaking bad news, prescribing safety, and ethical scenarios. Held ONLY at the GMC's dedicated test centre in Manchester, UK. Fee: £1,085 per attempt. Maximum 4 lifetime attempts. You must pass PLAB 2 within 3 years of passing PLAB 1. Travel and accommodation in Manchester must be planned and funded by you. Book your PLAB 2 slot as soon as you are eligible — waiting times of 3–6 months are common."
            },
            {
              step: 6,
              title: "Apply for GMC Registration",
              desc: "Apply for GMC registration with a licence to practise via your GMC Online account. Fees: £405 (initial registration) + £425 annual retention. Submit alongside: completed EPIC verification, IELTS/OET result, Certificate of Good Standing from PMC (Pakistan Medical Commission), PLAB 1 and PLAB 2 pass certificates. Must apply within 2 years of passing PLAB 2."
            },
            {
              step: 7,
              title: "Complete Identity (ID) Check",
              desc: "After submitting your GMC application, you must complete a mandatory in-person identity verification at a GMC-approved venue in the UK. This cannot be done remotely. Book early as appointment slots can take several weeks to become available."
            },
            {
              step: 8,
              title: "Apply for First NHS Job",
              desc: "Search via NHS Jobs (jobs.nhs.uk) and BMJ Careers. Start with Trust Grade Doctor or Clinical Fellow positions — these are non-training service posts that provide essential, portfolio-building NHS experience. Under the 2026 Medical Training Prioritisation Act, international doctors are now strongly advised to accumulate at least 1–2 years of solid NHS experience before applying to competitive specialty training programmes. Your employer will sponsor your Health and Care Worker visa."
            },
            {
              step: 9,
              title: "Build Portfolio & Apply to Specialty Training",
              desc: "While working, log cases, complete audits, obtain workplace-based assessments (WBAs), and pursue Royal College membership exams relevant to your target specialty: MRCP (physicians), MRCS (surgeons), MRCGP (GPs), MRCPCH (paediatrics), and so on. Apply to formal specialty training via the NHS Oriel platform when eligible and competitive."
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
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Alternative Pathways</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">MTI Route (Medical Training Initiative)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              A 2-year sponsored postgraduate training placement for qualified doctors with specialist experience. Requires a UK Royal College (RCP, RCS, RCGP etc.) to act as your sponsor. Quota-based and highly competitive — you apply to the Royal College MTI scheme directly, not to NHS Trusts. Does not require PLAB. Doctors on MTI must return home after 2 years under current visa rules, though some extend via other routes.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">CESR Route (Certificate of Eligibility for Specialist Registration)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              For experienced consultants or specialists who have completed training substantially equivalent to a UK Certificate of Completion of Training (CCT). You compile a large portfolio of evidence (case logbooks, publications, structured assessments, references, audit records) and submit it to the relevant Royal College for assessment. No PLAB required. GMC application fee: approximately £1,600+. Assessment timeline: 6–18 months depending on specialty and completeness of evidence.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Royal College Membership Exams</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Doctors who pass MRCP, MRCS, MRCGP, or equivalent Royal College exams may access streamlined registration or training application pathways. These exams are internationally recognized and can be taken in Pakistan or the Gulf before arriving in the UK, significantly strengthening any application.
            </p>
          </div>
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
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">EPIC verification + English language test + GMC Online account setup</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 3–6</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">PLAB 1 preparation and sitting (can be done in Pakistan)</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 6–9</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Travel to UK + PLAB 2 booking and sitting in Manchester</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Month 9–12</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">GMC registration application + ID check + NHS job applications</div>
              </div>
              <div className="flex p-4">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Year 1–2</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">NHS Trust Grade / Clinical Fellow posts — build experience and portfolio</div>
              </div>
              <div className="flex p-4 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="w-1/3 text-sm font-semibold text-slate-900 dark:text-white">Year 2+</div>
                <div className="w-2/3 text-sm text-slate-600 dark:text-slate-400">Apply to specialty training via Oriel or pursue CESR/MTI</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white">Cost Breakdown</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">EPIC verification</span>
                <span className="font-semibold text-slate-900 dark:text-white">~$100 USD (~£80)</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">PLAB 1 (per attempt)</span>
                <span className="font-semibold text-slate-900 dark:text-white">£255</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">PLAB 2 (per attempt)</span>
                <span className="font-semibold text-slate-900 dark:text-white">£1,085</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">GMC Registration</span>
                <span className="font-semibold text-slate-900 dark:text-white">£405 + £425/year retention</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400 text-sm">IELTS Academic</span>
                <span className="font-semibold text-slate-900 dark:text-white">~£200–220 (or OET: ~£195)</span>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">Estimated total core costs</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">£2,000–2,500</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-right">
                *Excluding UK travel and accommodation for PLAB 2
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
              "MBBS Degree (EPIC-verified)",
              "PMC Registration Certificate",
              "Certificate of Good Standing from PMC",
              "IELTS Academic or OET Medicine result (within 2 years)",
              "PLAB 1 pass certificate",
              "PLAB 2 pass certificate",
              "2 professional reference letters"
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
              title: "GMC Registration Portal",
              desc: "Start your GMC Online account and track your application",
              url: "https://www.gmc-uk.org/registration"
            },
            {
              title: "EPIC Primary Source Verification",
              desc: "Verify your MBBS degree with ECFMG",
              url: "https://epic.fsmb.org/"
            },
            {
              title: "PLAB Exam Information (GMC)",
              desc: "Official PLAB 1 and PLAB 2 exam dates, fees, and preparation guidance",
              url: "https://www.gmc-uk.org/registration-and-licensing/join-the-register/plab"
            },
            {
              title: "NHS Jobs Portal",
              desc: "Search Trust Grade, Clinical Fellow, and consultant vacancies",
              url: "https://www.jobs.nhs.uk/"
            },
            {
              title: "BMJ Careers",
              desc: "NHS and private sector medical job listings",
              url: "https://www.bmj.com/careers"
            },
            {
              title: "Oriel Specialty Training",
              desc: "Apply to NHS specialty training programmes",
              url: "https://www.oriel.nhs.uk/"
            },
            {
              title: "MTI Scheme",
              desc: "Apply for sponsored 2-year training placements (Academy of Medical Royal Colleges)",
              url: "https://www.aomrc.org.uk/mti/"
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
