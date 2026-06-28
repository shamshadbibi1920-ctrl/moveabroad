import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Building, Users, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AustraliaAccommodation() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <SEO 
        title="Student Accommodation in Australia | MoveAbroad.pk"
        description="Find student housing in Australia. Learn about university halls, shared apartments, Flatmates.com.au, and Pakistani community hubs."
        canonicalPath="/study/australia/accommodation"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" 
            alt="Australia Neighborhood" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/study/australia" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study in Australia
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Accommodation</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            From university colleges to shared housing — find the best living arrangements in Australia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Building className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">University Halls / Colleges</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              On-campus accommodation managed by the university. Excellent for first-year students to make friends. Often includes meals (fully catered) and utilities.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl inline-block">
              AUD $300 - $600 / week
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Shared Houses</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              The most popular option for international students. Renting a room in a house or apartment shared with other students or young professionals. Utilities are usually split.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl inline-block">
              AUD $150 - $350 / week
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Home className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Homestay</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              Living with a local Australian family. Great for improving English and experiencing local culture. Usually includes a furnished room and meals.
            </p>
            <div className="text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl inline-block">
              AUD $250 - $380 / week
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Pakistani Communities & Halal Food</h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Australia has a vibrant Pakistani and South Asian community, making it easy to find halal food, mosques, and cultural events. Finding accommodation near these hubs can help you settle in faster.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Sydney</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Auburn, Lakemba, Parramatta, Blacktown (Western Sydney)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Melbourne</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Dandenong, Sunshine, Fawkner, Coburg</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Perth</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Cannington, Victoria Park, Thornlie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Best Accommodation Websites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://flatmates.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Flatmates.com.au</h3>
                <p className="text-sm text-slate-500">Best for finding shared rooms</p>
              </div>
            </a>
            <a href="https://domain.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Domain.com.au</h3>
                <p className="text-sm text-slate-500">Best for private rentals and apartments</p>
              </div>
            </a>
            <a href="https://realestate.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">RealEstate.com.au</h3>
                <p className="text-sm text-slate-500">Largest property portal in Australia</p>
              </div>
            </a>
            <a href="https://scape.com/en-au/" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Scape / Student Roost</h3>
                <p className="text-sm text-slate-500">Private purpose-built student housing</p>
              </div>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
