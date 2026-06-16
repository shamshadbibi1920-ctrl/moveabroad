import React, { useState } from 'react';
import { Map, MapPin } from 'lucide-react';

export default function ProvinceSelector() {
  const [occupation, setOccupation] = useState('it');
  const [education, setEducation] = useState('bachelors');
  const [experience, setExperience] = useState('2-3');
  const [language, setLanguage] = useState('clb7-8');
  const [showResult, setShowResult] = useState(false);

  const getRecommendation = () => {
    let primary = '';
    let secondary = [];
    let message = '';

    if (occupation === 'it') {
      primary = 'British Columbia (BC) or Ontario';
      secondary = ['Alberta', 'Nova Scotia'];
      message = 'BC\'s Tech Pilot and Ontario\'s Human Capital Priorities stream frequently target IT professionals. If your CRS score is high, Ontario is excellent. For faster processing targeted specifically at tech, BC is highly recommended.';
    } else if (occupation === 'engineering') {
      primary = 'Alberta or Ontario';
      secondary = ['Saskatchewan', 'British Columbia'];
      message = 'Alberta has a strong demand for engineers, especially in civil, mechanical, and oil/gas sectors. Ontario regularly selects engineers under its targeted draws.';
    } else if (occupation === 'healthcare') {
      primary = 'Nova Scotia or British Columbia';
      secondary = ['Saskatchewan', 'Ontario'];
      message = 'Nova Scotia and BC have dedicated, fast-tracked streams for healthcare professionals (nurses, physicians, and allied health).';
    } else if (occupation === 'trades') {
      primary = 'Saskatchewan or Alberta';
      secondary = ['Manitoba', 'Ontario'];
      message = 'Saskatchewan\'s Hard-to-Fill Skills pilot and Alberta\'s trades streams are highly suitable. Often lower language requirements are acceptable here.';
    } else if (occupation === 'finance') {
      primary = 'Ontario';
      secondary = ['British Columbia', 'Manitoba'];
      message = 'Ontario (Toronto) is the financial hub of Canada. The Human Capital Priorities stream often targets finance and business management professionals.';
    } else {
      primary = 'Saskatchewan or Manitoba';
      secondary = ['New Brunswick', 'Prince Edward Island'];
      message = 'Saskatchewan and Manitoba have broader occupation-in-demand lists that cater to a wide variety of professions, often with slightly lower CRS cutoffs.';
    }

    if (language === 'clb9') {
      message += ' Outstanding language scores! You are highly competitive for Express Entry aligned (Enhanced) PNP streams across all provinces.';
    } else if (language === 'clb_below7') {
      primary = 'Saskatchewan or Manitoba';
      message += ' Warning: With a language score below CLB 7, you cannot enter the Federal Skilled Worker pool. You must look for Base PNP streams in provinces like Saskatchewan or Manitoba that allow lower CLBs.';
    }

    return { primary, secondary, message };
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Map className="w-6 h-6 text-rose-600 dark:text-rose-400 mr-3" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Interactive Province Selector</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
        Find out which Canadian province might be the best fit for your profile based on current labor market trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Occupation / Field</label>
          <select value={occupation} onChange={(e) => {setOccupation(e.target.value); setShowResult(false);}} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="it">IT & Tech (Software, Data, Network)</option>
            <option value="engineering">Engineering (Civil, Mech, Electrical)</option>
            <option value="healthcare">Healthcare (Nurses, Doctors, Allied)</option>
            <option value="finance">Business & Finance (Accounting, Management)</option>
            <option value="trades">Skilled Trades (Electricians, Plumbers, Mechanics)</option>
            <option value="other">Other / General Professional</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Education Level</label>
          <select value={education} onChange={(e) => {setEducation(e.target.value); setShowResult(false);}} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="phd">PhD</option>
            <option value="masters">Master's Degree</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="highschool">Diploma / High School</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Work Experience</label>
          <select value={experience} onChange={(e) => {setExperience(e.target.value); setShowResult(false);}} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="0-1">Less than 2 years</option>
            <option value="2-3">2 - 3 years</option>
            <option value="4+">4+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Language Score (IELTS)</label>
          <select value={language} onChange={(e) => {setLanguage(e.target.value); setShowResult(false);}} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="clb9">CLB 9+ (IELTS 8,7,7,7 or higher)</option>
            <option value="clb7-8">CLB 7/8 (IELTS 6.0 - 7.5)</option>
            <option value="clb_below7">Below CLB 7 (IELTS under 6.0)</option>
          </select>
        </div>
      </div>

      <button 
        onClick={() => setShowResult(true)}
        className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md"
      >
        Find My Best Province
      </button>

      {showResult && (
        <div className="mt-8 bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-100 dark:border-rose-800 animate-in fade-in slide-in-from-bottom-4">
          <h4 className="text-sm font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-2">Recommended For You</h4>
          <div className="flex items-start mb-4">
            <MapPin className="w-6 h-6 text-rose-600 dark:text-rose-400 mr-2 shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{recommendation.primary}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Also consider: {recommendation.secondary.join(', ')}</div>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed border-t border-rose-200 dark:border-rose-800/50 pt-4 mt-4">
            {recommendation.message}
          </p>
        </div>
      )}
    </div>
  );
}
