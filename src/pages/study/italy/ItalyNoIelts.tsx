import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Globe, CheckCircle2, AlertTriangle, FileText, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function ItalyNoIelts() {
  return (
    <>
      <SEO title="Study in Italy: No Ielts | MoveAbroad.pk" description="Comprehensive guide to italy no ielts for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="relative text-white py-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1400&q=80" 
            alt="Italy Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/study/italy" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in Italy
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-600/30 backdrop-blur-md rounded-xl border border-blue-400/30">
              <Globe className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">"No IELTS" Options & Italian Pathways</h1>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl">
            How to study in Italy using Medium of Instruction (MOI) letters or by learning the Italian language instead of taking English tests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Two "No IELTS" Paths for Pakistanis</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            While highly competitive universities (like PoliMi or Bocconi) strictly require IELTS/TOEFL for their English-taught programs, you have two major alternatives to bypass the IELTS exam:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Path 1: Medium of Instruction (MOI)</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                Many Italian public universities will accept an official letter from your previous university in Pakistan stating that your entire degree was taught and assessed in English. This is used to apply for <strong>English-taught Master's programs</strong>.
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Must be on official letterhead, stamped and signed.</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Accepted by the Embassy for the study visa.</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-emerald-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Path 2: Italian-Taught Programs</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                If you enroll in a program taught entirely in Italian, you do not need any English test. Instead, you need proof of Italian proficiency (usually B2 level). This opens up 100% of the courses at public universities!
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Require CILS or CELI certificates (B1/B2 level).</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Much lower competition for admission and scholarships.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mb-8">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> A Warning on the Italian-Taught Path
            </h4>
            <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
              If you choose an Italian-taught program to avoid IELTS, you <strong>must actually learn Italian</strong>. You will have to pass university exams in Italian. Many universities offer intensive "Foundation" Italian courses for international students before the academic year starts, but arriving with zero Italian will make your first year extremely difficult.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Universities Accepting MOI (Case-by-Case)</h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              The following universities frequently accept the MOI letter from recognized Pakistani universities (like NUST, LUMS, COMSATS, UET) instead of IELTS for their English-taught programs. *Always verify with the specific program coordinator, as rules change.*
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "University of Padua",
                "University of Pisa",
                "University of Siena",
                "University of Genoa",
                "University of Messina",
                "University of Calabria",
                "University of Camerino",
                "University of Cassino",
                "Sapienza University (Some programs)"
              ].map((uni, idx) => (
                <div key={idx} className="flex items-center">
                  <GraduationCap className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Where to Learn Italian in Pakistan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Italian Cultural Center / Embassies</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                The Italian diplomatic missions sometimes collaborate with local institutes or offer guidance on certified language centers.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Dante Alighieri Society</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                The official global network for promoting Italian culture. They have recognized examination centers in major cities where you can take the PLIDA exams.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
    </>
  );
}
