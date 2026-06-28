import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Stethoscope, Briefcase, GraduationCap, MapPin, CheckCircle2, FileText, Globe, Star, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AustraliaDoctorIndex() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=80" 
            alt="Modern Australian Hospital Building" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/healthcare-abroad" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Healthcare
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <Stethoscope className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Doctors in Australia</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            Australia offers a highly rewarding career for International Medical Graduates (IMGs), with high demand in regional and rural areas across the country.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Australia relies significantly on international medical graduates (IMGs) to staff regional and rural hospitals. General practice, psychiatry, and anaesthesia are in particularly high demand.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-900 dark:text-white font-bold mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-500" /> Average Salaries
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-slate-700 dark:text-slate-300">Resident Medical Officers:</strong> AUD $90,000 - $150,000/year</li>
                    <li><strong className="text-slate-700 dark:text-slate-300">Specialists/Consultants:</strong> AUD $200,000 - $450,000+/year</li>
                  </ul>
                </div>
                <p>
                  All pathways are managed by <strong>AHPRA</strong> (Australian Health Practitioner Regulation Agency) and the <strong>Medical Board of Australia</strong>, with the <strong>Australian Medical Council (AMC)</strong> handling exams for the Standard pathway.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3 text-blue-500" /> Required Documents
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Required for most AHPRA registration pathways:</p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Valid Passport</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> MBBS Degree (Attested by HEC)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> PMC/PMDC Registration Certificate</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Primary Source Verification (EPIC) of your degree</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> English Test Results (IELTS, OET, PTE, or TOEFL)</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Certificate of Good Standing from PMC/PMDC</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div> Criminal History Checks (Pakistani Police clearance + Australian Federal Police check when relevant)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Find Your Pathway</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/healthcare/australia/doctor/standard-pathway" className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Standard Pathway</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Most common for Pakistani doctors. Involves passing the AMC CAT and Clinical Exams, followed by supervised practice.</p>
              <div className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
                Explore Pathway <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </div>
            </Link>
            
            <Link to="/healthcare/australia/doctor/competent-authority-pathway" className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:amber-500 transition-all group">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Competent Authority</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Fast-track route for doctors who are already licensed in the UK (GMC), Ireland, USA, Canada, or New Zealand.</p>
              <div className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center">
                Explore Pathway <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </div>
            </Link>

            <Link to="/healthcare/australia/doctor/specialist-pathway" className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:emerald-500 transition-all group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Specialist Pathway</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">For experienced specialists/consultants (e.g., FCPS holders) seeking assessment by Australian medical colleges.</p>
              <div className="text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center">
                Explore Pathway <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </div>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Salary & Benefits</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Resident Medical Officer</span>
                  <span className="font-semibold text-slate-900 dark:text-white">AUD $90,000 - $120,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Registrar</span>
                  <span className="font-semibold text-slate-900 dark:text-white">AUD $120,000 - $180,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">Consultant / Specialist</span>
                  <span className="font-semibold text-slate-900 dark:text-white">AUD $250,000 - $450,000+</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-sm text-slate-600 dark:text-slate-400">
                <strong>Additional Benefits:</strong> Medicare provider number access, salary packaging (which reduces your taxable income significantly), and substantial Continuing Professional Development (CPD) allowances.
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Job Search & Official Links</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Job Search Resources:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Health Workforce Australia</li>
                    <li>• State Health Department career sites (NSW Health, Queensland Health, WA Health, etc.)</li>
                    <li>• Rural workforce agencies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Official Portals:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li><a href="https://www.ahpra.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AHPRA (ahpra.gov.au)</a></li>
                    <li><a href="https://www.medicalboard.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medical Board of Australia</a></li>
                    <li><a href="https://www.amc.org.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Australian Medical Council (AMC)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Disclaimer
          </h4>
          <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
            AHPRA registration pathways, exam fees, and college assessment requirements change frequently and vary by specialty. Always verify current requirements directly with AHPRA, the Medical Board of Australia, and the relevant specialist college before starting the process.
          </p>
        </div>
      </div>
    </div>
  );
}
