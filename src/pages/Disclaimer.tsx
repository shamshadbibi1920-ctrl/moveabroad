import React from 'react';

export default function Disclaimer() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-16">
          <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8">Disclaimer</h1>
          <div className="prose prose-lg prose-blue max-w-none text-slate-600 dark:text-slate-400 space-y-6">
          <p>Last updated: June 15, 2026</p>
          <p>
            The information contained on the MoveAbroad.pk website (the "Service") is for general information purposes only.
          </p>
          <p>
            MoveAbroad.pk assumes no responsibility for errors or omissions in the contents on the Service. We are not official immigration agents or representatives of any university or government body.
          </p>
          
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mt-12 mb-4">External Links Disclaimer</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with MoveAbroad.pk. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mt-12 mb-4">Professional Advice Disclaimer</h2>
          <p>
            The immigration and educational information is provided for general informational and educational purposes only and is not a substitute for professional legal or immigration advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal advice.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
