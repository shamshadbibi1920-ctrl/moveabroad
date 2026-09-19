import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS, getPublishedArticles } from '../data/blogPosts';

export default function Blog() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  // Only retrieve published articles whose publishedAt date is not in the future
  const posts = React.useMemo(() => getPublishedArticles(BLOG_POSTS), []);

  return (
    <>
      <SEO title="Blog | MoveAbroad.pk" description="Comprehensive guide to blog for Pakistani students and professionals moving abroad." />
      <div className="bg-slate-50 dark:bg-slate-800/50 dark:bg-slate-900 min-h-screen transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">Latest Articles</motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400">Insights, tips, and news to help your international journey.</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="initial" animate="animate" variants={staggerContainer}
        >
          {posts.map((post, idx) => (
            <motion.div 
              variants={fadeIn}
              key={idx} 
            >
              <Link to={`/blog/${post.slug}`} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col xl:flex-row hover:shadow-xl hover:border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 block h-full">
                {/* Featured Image */}
                <div className="xl:w-2/5 flex-shrink-0 bg-slate-100 dark:bg-slate-700 h-56 xl:h-auto min-h-[14rem] border-b xl:border-b-0 xl:border-r border-slate-100 dark:border-slate-700 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.altText || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={idx === 0 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== window.location.origin + '/images/blog/default-blog.jpg') {
                        target.src = '/images/blog/default-blog.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-8 xl:w-3/5 flex flex-col h-full w-full">
                  <div className="flex items-center text-sm mb-4 flex-wrap gap-y-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                      {post.category}
                    </span>
                    <span className="mx-3 text-slate-300">&bull;</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{post.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 group-hover:text-blue-600 dark:text-blue-400 transition-colors leading-snug">{post.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{post.snippet}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
                      <User className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {post.author}
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 transition-colors p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transform group-hover:translate-x-2 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </>
  );
}
