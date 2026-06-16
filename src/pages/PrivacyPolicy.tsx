import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-16">
          <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg prose-blue max-w-none text-slate-600 dark:text-slate-400 space-y-6">
          <p>Last updated: June 15, 2026</p>
          <p>
            At MoveAbroad.pk, accessible from moveabroad.pk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
          </p>
          
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mt-12 mb-4">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mt-12 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
