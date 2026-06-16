import React from 'react';
import { Link } from 'react-router-dom';

export default function GoldenVisaComparison() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-12">
      <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Golden Visa Programs Comparison</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
              <th className="py-4 px-6 font-semibold">Country</th>
              <th className="py-4 px-6 font-semibold">Min Investment</th>
              <th className="py-4 px-6 font-semibold">Residency Period</th>
              <th className="py-4 px-6 font-semibold">Citizenship Timeline</th>
              <th className="py-4 px-6 font-semibold">Schengen Access</th>
              <th className="py-4 px-6 font-semibold">Min Stay Required</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <td className="py-4 px-6 font-medium text-slate-900 dark:text-white"><Link to="/migrate/portugal-golden-visa" className="hover:text-amber-500">Portugal 🇵🇹</Link></td>
              <td className="py-4 px-6">€250,000 (Donation) / €500,000 (Fund)</td>
              <td className="py-4 px-6">1-2 years (Renewable)</td>
              <td className="py-4 px-6">5 Years</td>
              <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium">Yes</td>
              <td className="py-4 px-6">7 days / year</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <td className="py-4 px-6 font-medium text-slate-900 dark:text-white"><Link to="/migrate/greece-golden-visa" className="hover:text-amber-500">Greece 🇬🇷</Link></td>
              <td className="py-4 px-6">€250,000 - €800,000 (Real Estate)</td>
              <td className="py-4 px-6">5 years (Renewable)</td>
              <td className="py-4 px-6">7 Years (Actual residence req.)</td>
              <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium">Yes</td>
              <td className="py-4 px-6">None</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <td className="py-4 px-6 font-medium text-slate-900 dark:text-white"><Link to="/migrate/spain-golden-visa" className="hover:text-amber-500">Spain 🇪🇸</Link></td>
              <td className="py-4 px-6">€500,000 (Real Estate - ending soon)</td>
              <td className="py-4 px-6">2-3 years (Renewable)</td>
              <td className="py-4 px-6">10 Years</td>
              <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium">Yes</td>
              <td className="py-4 px-6">None (to maintain permit)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <td className="py-4 px-6 font-medium text-slate-900 dark:text-white"><Link to="/migrate/uae-golden-visa" className="hover:text-amber-500">UAE 🇦🇪</Link></td>
              <td className="py-4 px-6">AED 2,000,000 (or via Profession)</td>
              <td className="py-4 px-6">10 years (Renewable)</td>
              <td className="py-4 px-6 text-slate-400">Exceptional cases only</td>
              <td className="py-4 px-6 text-slate-400">No</td>
              <td className="py-4 px-6">None</td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <td className="py-4 px-6 font-medium text-slate-900 dark:text-white"><Link to="/migrate/malta-golden-visa" className="hover:text-amber-500">Malta 🇲🇹</Link></td>
              <td className="py-4 px-6">~€150,000 cash + Property (buy/rent)</td>
              <td className="py-4 px-6">Permanent</td>
              <td className="py-4 px-6">5 Years (Actual residence req.)</td>
              <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium">Yes</td>
              <td className="py-4 px-6">None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
