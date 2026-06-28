import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, AlertTriangle, FileCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaNoIelts() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Study in Australia Without IELTS for Pakistani Students | MoveAbroad.pk"
        description="Learn how to apply to Australian universities using PTE, TOEFL, or Medium of Instruction (MOI) instead of IELTS."
        canonicalPath="/study/australia/no-ielts"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Melbourne Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study in Australia Without IELTS</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Explore alternatives like PTE Academic, TOEFL, and Medium of Instruction (MOI) for university admission.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl mb-12">
          <h4 className="font-bold text-red-900 dark:text-red-100 flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-600" /> CRITICAL VISA DISCLAIMER (2026 UPDATE)
          </h4>
          <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
            While some universities may accept a Medium of Instruction (MOI) letter for <strong>admission</strong>, the Australian Department of Home Affairs (DoHA) has strictly increased English requirements for the <strong>Student Visa (Subclass 500)</strong>. As of 2026, you generally MUST provide an approved English language test (IELTS, PTE, TOEFL, CAE) scoring equivalent to IELTS 6.0 for direct entry. <strong>PTE Academic is the most widely accepted and popular alternative to IELTS for both university admission AND the visa.</strong>
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Accepted Alternative Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">PTE Academic</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Extremely popular in Pakistan. Computer-based with fast results. Accepted by 100% of Australian universities and DoHA. Minimum score: 50.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">TOEFL iBT</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Widely accepted. Must be taken at a physical test centre (TOEFL Home Edition is NOT accepted for visas). Minimum score: 64.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Cambridge CAE</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Cambridge C1 Advanced is fully accepted by DoHA and all major universities. Minimum score: 169.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">OET</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Occupational English Test. Primarily for healthcare and medical students. Accepted for both admission and visa.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Medium of Instruction (MOI) for University Admission</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              If you have completed your previous degree (within the last 5 years) entirely in English, some universities may accept an official MOI letter from your university instead of an English test for <strong>admission purposes only</strong>. However, due to high visa refusal risks from Pakistan without a formal English test, education agents strongly advise taking PTE or IELTS.
            </p>
            
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Universities Flexible with English Requirements (Case-by-Case):</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Swinburne University of Technology",
                "Victoria University",
                "University of Southern Queensland",
                "CQUniversity",
                "Torrens University",
                "Federation University",
                "Charles Sturt University",
                "Southern Cross University",
                "University of New England",
                "Charles Darwin University"
              ].map((uni, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-slate-700 dark:text-slate-300">{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
