import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormStatus('error');
      setFormMessage('Please fill all required fields');
      return;
    }
    
    setFormStatus('success');
    setFormMessage("Thank you for your message! We'll respond within 24 hours via email or WhatsApp.");
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    
    setTimeout(() => {
      setFormStatus('idle');
      setFormMessage('');
    }, 8000);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <SEO title="Contact Us | MoveAbroad.pk" description="Comprehensive guide to contact us for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">Contact Us</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">Have questions about studying, working or moving abroad? We'd love to help. Contact us via email or WhatsApp and we'll respond within 24 hours.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-50 mb-10">Get in Touch</h2>
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">Email</h3>
                  <a href="mailto:malik007.mbbs@gmail.com" className="text-slate-600 dark:text-slate-400 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">malik007.mbbs@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center mr-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">WhatsApp</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-3">03002134708</p>
                  <a href="https://wa.me/923002134708" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">Multan, Pakistan</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1 flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Monday to Saturday, 9AM to 9PM Pakistan Time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 dark:border-slate-700 p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {formStatus !== 'idle' && (
                <div className={`p-4 rounded-xl text-sm font-medium ${formStatus === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {formMessage}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">Full Name *</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-800/50 transition-colors" placeholder="Ali Khan" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">Email Address *</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-800/50 transition-colors" placeholder="ali@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">Subject</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-800/50 transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">Message *</label>
                <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full px-5 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 dark:bg-slate-800/50 transition-colors" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
