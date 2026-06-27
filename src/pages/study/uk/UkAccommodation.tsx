import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Building, Users, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import SEO from '../../../components/SEO';

export default function UkAccommodation() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      <SEO 
        title="Student Accommodation in UK for Pakistani Students | MoveAbroad.pk"
        description="Guide to student accommodation in the UK. Learn about university halls, private student housing (PBSA), and finding halal food and mosques nearby."
        canonicalPath="/study/uk/accommodation"
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
            alt="UK Accommodation" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Student Accommodation in the UK
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Find the right place to live, from university halls to private housing, with Pakistani community insights.
            </p>
            <Link to="/study/uk" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Study in UK
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Building className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">University Halls</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Owned by the university, usually on or very near campus. Great for first-year students to make friends. Bills are usually included in the rent.
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              £150 - £250 / week
            </span>
          </motion.div>

          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Private PBSA</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Purpose Built Student Accommodation (like Unite Students or Student Roost). Modern, ensuite rooms with gyms and social spaces.
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
              £170 - £300 / week
            </span>
          </motion.div>

          <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Users className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Private House Share</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Renting a house with other students through a landlord. Usually the cheapest option, but you have to manage your own utility bills.
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              £90 - £150 / week
            </span>
          </motion.div>
        </div>

        <motion.section variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <ExternalLink className="w-6 h-6 mr-3 text-blue-500" /> Useful Accommodation Websites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://www.spareroom.co.uk/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="font-semibold text-slate-800 dark:text-slate-200">SpareRoom</span>
              <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
            </a>
            <a href="https://www.rightmove.co.uk/student-accommodation.html" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Rightmove Students</span>
              <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
            </a>
            <a href="https://www.mystudenthalls.com/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="font-semibold text-slate-800 dark:text-slate-200">MyStudentHalls</span>
              <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
            </a>
            <a href="https://www.unitestudents.com/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Unite Students</span>
              <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
            </a>
          </div>
        </motion.section>

        <motion.div variants={itemVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/30">
          <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4 flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> Pakistani Community, Halal Food & Mosques
          </h3>
          <p className="text-emerald-800 dark:text-emerald-200 mb-4">
            The UK has a massive, well-established British Pakistani diaspora (over 1.5 million people). You will rarely struggle to find halal food, mosques, or cultural communities.
          </p>
          <ul className="space-y-2 text-emerald-800 dark:text-emerald-200 text-sm">
            <li><strong>London:</strong> Areas like Whitechapel, Ilford, and Tooting are hubs for South Asian culture and halal food.</li>
            <li><strong>Manchester:</strong> Rusholme (the famous "Curry Mile") is packed with halal takeaways, restaurants, and shisha cafes near the universities.</li>
            <li><strong>Birmingham:</strong> Sparkbrook and Alum Rock offer extensive Pakistani communities and grocers.</li>
            <li><strong>Bradford & Leeds:</strong> Known for some of the best Pakistani cuisine and large community networks.</li>
            <li><strong>Universities:</strong> Almost every UK university has an active Islamic Society (ISoc) and a Pakistani Student Society (PakSoc) that organize events and Friday prayers on campus.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}

// Added this to fix the undefined ArrowRight icon in the code above
const ArrowRight = ({className}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
