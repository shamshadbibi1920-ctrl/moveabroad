import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Briefcase, TrendingUp, MonitorSmartphone, HeartPulse, Building2, HardHat, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../../components/SEO';

export default function AustraliaJobs() {
  return (
    <>
      <SEO title="Work in Australia: Jobs | MoveAbroad.pk" description="Comprehensive guide to australia jobs for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="bg-blue-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work/australia" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Work in Australia
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-800 dark:bg-slate-800 rounded-xl">
              <Briefcase className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Job Opportunities in Australia</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            Discover the most in-demand roles for Pakistani professionals and how to navigate the Australian job market.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Most In-Demand Jobs for Pakistanis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">IT & Software Engineers</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Developers, Data Analysts, Cyber Security, Cloud Engineers.</p>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">AUD $80,000 - $130,000 / year</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400 mr-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Engineers</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Civil, Mechanical, Electrical, Mining Engineering.</p>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">AUD $75,000 - $120,000 / year</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 mr-4">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Nurses & Healthcare</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Registered Nurses, Aged Care Workers, Medical Practitioners.</p>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">AUD $70,000 - $100,000 / year</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Finance & Accounting</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Accountants, Auditors, Financial Investment Advisors.</p>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">AUD $70,000 - $100,000 / year</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400 mr-4">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Skilled Trades & Drivers</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Electricians, Plumbers, Welders, Truck Drivers (high demand regionally).</p>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">AUD $65,000 - $95,000 / year</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Teachers</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Early Childhood, Secondary, Special Education Teachers.</p>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">AUD $70,000 - $95,000 / year</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Core Skills Occupation List (CSOL)</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              To be sponsored for a standard temporary work visa in Australia, your profession generally needs to be on the Core Skills Occupation List (CSOL) (formerly the Short-term and Medium-term lists). The Australian government regularly updates this list based on national labor shortages.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Tip:</strong> If your job is on this list, employers have a streamlined pathway to sponsor you. It is highly recommended to check the official Department of Home Affairs website to confirm your specific occupation code (ANZSCO) is eligible before applying for jobs.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Australian Style Resumes & Cover Letters</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <div className="bg-blue-200 dark:bg-blue-800 p-1 rounded-full mr-3 mt-1 shrink-0"></div>
                <span><strong>Keep it Concise:</strong> Australian resumes should ideally be 2-3 pages maximum.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-200 dark:bg-blue-800 p-1 rounded-full mr-3 mt-1 shrink-0"></div>
                <span><strong>No Photos or Personal Details:</strong> Do not include your photo, date of birth, religion, or marital status. Focus purely on professional skills and experience.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-200 dark:bg-blue-800 p-1 rounded-full mr-3 mt-1 shrink-0"></div>
                <span><strong>Quantify Achievements:</strong> Use metrics (e.g., "Increased sales by 15%", "Managed a budget of $50k").</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-200 dark:bg-blue-800 p-1 rounded-full mr-3 mt-1 shrink-0"></div>
                <span><strong>The Cover Letter is Crucial:</strong> Always include a 1-page tailored cover letter explaining why you are perfect for the role and why you want to move to Australia.</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Top Job Portals in Australia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Seek.com.au', url: 'https://www.seek.com.au' },
              { name: 'Indeed Australia', url: 'https://au.indeed.com' },
              { name: 'LinkedIn Australia', url: 'https://www.linkedin.com/jobs/jobs-in-australia/' },
              { name: 'Jora', url: 'https://au.jora.com/' },
              { name: 'CareerOne', url: 'https://www.careerone.com.au/' }
            ].map((portal, idx) => (
              <a 
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
              >
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{portal.name}</span>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  ;
}
