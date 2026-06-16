import React, { useState } from 'react';
import { Calculator, AlertCircle } from 'lucide-react';

export default function CRSCalculator() {
  const [age, setAge] = useState('20-29');
  const [education, setEducation] = useState('bachelors');
  const [ieltsS, setIeltsS] = useState('7.0');
  const [ieltsL, setIeltsL] = useState('8.0');
  const [ieltsR, setIeltsR] = useState('7.0');
  const [ieltsW, setIeltsW] = useState('7.0');
  const [secondLang, setSecondLang] = useState('no');
  const [canExp, setCanExp] = useState('0');
  const [foreignExp, setForeignExp] = useState('3');
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [spouseEd, setSpouseEd] = useState('none');
  const [spouseLang, setSpouseLang] = useState('none');
  const [spouseCanExp, setSpouseCanExp] = useState('0');
  const [jobOffer, setJobOffer] = useState('no');
  const [pnp, setPnp] = useState('no');
  const [sibling, setSibling] = useState('no');
  const [canEd, setCanEd] = useState('no');
  const [french, setFrench] = useState('no');

  const [result, setResult] = useState<{ score: number; breakdown: any } | null>(null);

  const calculateScore = () => {
    let coreAge = 0;
    if (age === '20-29') coreAge = maritalStatus === 'single' ? 110 : 100;
    else if (age === '30') coreAge = maritalStatus === 'single' ? 105 : 95;
    else if (age === '35') coreAge = maritalStatus === 'single' ? 77 : 70;
    else if (age === '40') coreAge = maritalStatus === 'single' ? 50 : 45;
    else if (age === '45+') coreAge = 0;
    else coreAge = maritalStatus === 'single' ? 90 : 85; // Default fallback

    let coreEd = 0;
    if (education === 'phd') coreEd = maritalStatus === 'single' ? 150 : 140;
    else if (education === 'masters') coreEd = maritalStatus === 'single' ? 135 : 126;
    else if (education === 'bachelors') coreEd = maritalStatus === 'single' ? 120 : 112;
    else if (education === 'highschool') coreEd = maritalStatus === 'single' ? 30 : 28;

    // Simplified IELTS to CLB
    const getClb = (s: number, l: number, r: number, w: number) => {
      // CLB 9: L 8.0, R 7.0, W 7.0, S 7.0
      if (l >= 8.0 && r >= 7.0 && w >= 7.0 && s >= 7.0) return 9;
      // CLB 8: L 7.5, R 6.5, W 6.5, S 6.5
      if (l >= 7.5 && r >= 6.5 && w >= 6.5 && s >= 6.5) return 8;
      // CLB 7: L 6.0, R 6.0, W 6.0, S 6.0
      if (l >= 6.0 && r >= 6.0 && w >= 6.0 && s >= 6.0) return 7;
      return 6;
    };

    const clb = getClb(parseFloat(ieltsS), parseFloat(ieltsL), parseFloat(ieltsR), parseFloat(ieltsW));
    
    let coreLang = 0;
    if (clb >= 9) coreLang = maritalStatus === 'single' ? 136 : 128; // Usually max 136
    else if (clb === 8) coreLang = maritalStatus === 'single' ? 116 : 108;
    else if (clb === 7) coreLang = maritalStatus === 'single' ? 68 : 64;
    else coreLang = 30;

    let coreCanExp = 0;
    if (canExp === '1') coreCanExp = maritalStatus === 'single' ? 40 : 35;
    else if (canExp === '2') coreCanExp = maritalStatus === 'single' ? 53 : 46;
    else if (canExp === '3') coreCanExp = maritalStatus === 'single' ? 64 : 56;

    let coreTotal = coreAge + coreEd + coreLang + coreCanExp;
    if (coreTotal > (maritalStatus === 'single' ? 500 : 460)) coreTotal = maritalStatus === 'single' ? 500 : 460;

    let spouseTotal = 0;
    if (maritalStatus === 'married') {
      if (spouseEd === 'masters') spouseTotal += 10;
      else if (spouseEd === 'bachelors') spouseTotal += 8;
      
      if (spouseLang === 'clb9') spouseTotal += 20;
      else if (spouseLang === 'clb7') spouseTotal += 10;

      if (spouseCanExp === '1') spouseTotal += 5;
      else if (spouseCanExp === '2') spouseTotal += 7;
      else if (spouseCanExp === '3') spouseTotal += 10;
    }

    // Transferability Max 100
    let transferability = 0;
    if (clb >= 9 && (education === 'masters' || education === 'bachelors')) transferability += 50;
    else if (clb >= 7 && education !== 'highschool') transferability += 25;

    if (clb >= 9 && foreignExp === '3') transferability += 50;
    else if (clb >= 7 && foreignExp === '3') transferability += 25;
    else if (clb >= 9 && foreignExp === '1') transferability += 25;
    else if (clb >= 7 && foreignExp === '1') transferability += 13;

    if (transferability > 100) transferability = 100;

    let additional = 0;
    if (pnp === 'yes') additional += 600;
    if (jobOffer === 'teer0') additional += 200;
    else if (jobOffer === 'teer123') additional += 50;
    
    if (sibling === 'yes') additional += 15;
    if (canEd === 'yes') additional += 30;
    if (french === 'yes') additional += 50;

    const totalScore = coreTotal + spouseTotal + transferability + additional;

    setResult({
      score: totalScore,
      breakdown: {
        coreTotal,
        spouseTotal,
        transferability,
        additional
      }
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Interactive CRS Score Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Age</label>
          <select value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="18">18-19</option>
            <option value="20-29">20-29</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45+">45 and above</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Education Level</label>
          <select value={education} onChange={(e) => setEducation(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="phd">PhD</option>
            <option value="masters">Master's Degree / Professional Degree</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="highschool">High School</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Language (IELTS Scores)</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <span className="text-xs text-slate-500 block mb-1">Speaking</span>
              <select value={ieltsS} onChange={(e) => setIeltsS(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                 <option value="7.5">7.5+</option>
                 <option value="7.0">7.0 (CLB 9)</option>
                 <option value="6.5">6.5</option>
                 <option value="6.0">6.0 (CLB 7)</option>
                 <option value="5.5">5.5 or lower</option>
              </select>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Listening</span>
              <select value={ieltsL} onChange={(e) => setIeltsL(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                 <option value="8.5">8.5+</option>
                 <option value="8.0">8.0 (CLB 9)</option>
                 <option value="7.5">7.5</option>
                 <option value="6.0">6.0 (CLB 7)</option>
                 <option value="5.5">5.5 or lower</option>
              </select>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Reading</span>
              <select value={ieltsR} onChange={(e) => setIeltsR(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                 <option value="8.0">8.0+</option>
                 <option value="7.0">7.0 (CLB 9)</option>
                 <option value="6.5">6.5</option>
                 <option value="6.0">6.0 (CLB 7)</option>
                 <option value="5.5">5.5 or lower</option>
              </select>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Writing</span>
              <select value={ieltsW} onChange={(e) => setIeltsW(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                 <option value="7.5">7.5+</option>
                 <option value="7.0">7.0 (CLB 9)</option>
                 <option value="6.5">6.5</option>
                 <option value="6.0">6.0 (CLB 7)</option>
                 <option value="5.5">5.5 or lower</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Second Language (e.g. French)</label>
          <select value={secondLang} onChange={(e) => setSecondLang(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="no">No</option>
            <option value="yes">Yes (CLB 5+)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">French Language Ability (CLB 7+)</label>
          <select value={french} onChange={(e) => setFrench(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Canadian Work Experience</label>
          <select value={canExp} onChange={(e) => setCanExp(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="0">None / Less than 1 year</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Foreign Work Experience</label>
          <select value={foreignExp} onChange={(e) => setForeignExp(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="0">None / Less than 1 year</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Marital Status</label>
          <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="single">Single</option>
            <option value="married">Married / Common-law</option>
          </select>
        </div>

        {maritalStatus === 'married' && (
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 border border-slate-200 dark:border-slate-700 p-4 rounded-lg bg-slate-50/50 dark:bg-slate-900/50">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Spouse Education</label>
              <select value={spouseEd} onChange={(e) => setSpouseEd(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                <option value="none">High School or Less</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's or PhD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Spouse Language</label>
              <select value={spouseLang} onChange={(e) => setSpouseLang(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                <option value="none">Below CLB 7</option>
                <option value="clb7">CLB 7/8</option>
                <option value="clb9">CLB 9+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Spouse Can. Exp.</label>
              <select value={spouseCanExp} onChange={(e) => setSpouseCanExp(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-2 text-slate-900 dark:text-white text-sm">
                <option value="0">None</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3+ years</option>
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Valid Job Offer</label>
          <select value={jobOffer} onChange={(e) => setJobOffer(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="no">No</option>
            <option value="teer123">Yes (NOC TEER 1, 2, 3)</option>
            <option value="teer0">Yes (NOC TEER 0: Senior Management)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Provincial Nomination</label>
          <select value={pnp} onChange={(e) => setPnp(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="no">No</option>
            <option value="yes">Yes (+600 points)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Canadian Sibling</label>
          <select value={sibling} onChange={(e) => setSibling(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
           <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Canadian Education</label>
           <select value={canEd} onChange={(e) => setCanEd(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-900 dark:text-white">
             <option value="no">No</option>
             <option value="yes">Yes (1-2 years or 3+ years)</option>
           </select>
        </div>

      </div>

      <button 
        onClick={calculateScore}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors mb-8 shadow-md"
      >
        Calculate CRS Score
      </button>

      {result && (
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center mb-6">
            <span className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">Your Estimated Score</span>
            <div className="text-6xl font-display font-bold text-slate-900 dark:text-white my-2">{result.score}</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Out of 1,200 points maximum</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-slate-600 dark:text-slate-400">Core/Human Capital Factors:</span>
              <span className="font-semibold text-slate-900 dark:text-white">{result.breakdown.coreTotal}</span>
            </div>
            {maritalStatus === 'married' && (
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-600 dark:text-slate-400">Spouse Factors:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{result.breakdown.spouseTotal}</span>
              </div>
            )}
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-slate-600 dark:text-slate-400">Skill Transferability:</span>
              <span className="font-semibold text-slate-900 dark:text-white">{result.breakdown.transferability}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
              <span className="text-slate-600 dark:text-slate-400">Additional Points:</span>
              <span className="font-semibold text-slate-900 dark:text-white">{result.breakdown.additional}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            {result.score >= 490 ? (
              <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-center text-sm md:text-base">
                Your score is highly competitive! You are likely above the recent draw cutoffs (470-520).
              </p>
            ) : result.score >= 450 ? (
              <p className="text-amber-700 dark:text-amber-400 font-semibold text-center text-sm md:text-base">
                Your score is moderate. You are near the recent draw cutoffs. Maximizing IELTS or learning French can guarantee an ITA.
              </p>
            ) : (
              <p className="text-rose-700 dark:text-rose-400 font-semibold text-center text-sm md:text-base">
                Your score is below recent draw cutoffs (usually 480+). Consider improving your IELTS (aim for CLB 9), learning French, getting a Master's degree, or exploring Provincial Nominee Programs (PNP).
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-start text-xs text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-lg">
        <AlertCircle className="w-4 h-4 mr-2 shrink-0 mt-0.5 opacity-70" />
        <p>This calculator provides an estimate only. Actual CRS score may vary based on exact age at ITA, evaluation exact dates, and specific work periods. Always verify with official IRCC tools. <a href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Official IRCC Calculator</a>.</p>
      </div>
    </div>
  );
}
