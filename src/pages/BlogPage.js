import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const { t } = useLanguage();

  const posts = [
    {
      slug: 'top-10-diving-spots',
      title: { IT: 'I 10 Migliori Luoghi per Immersioni', EN: 'Top 10 Diving Spots' },
      excerpt: { IT: 'Scopri le gemme nascoste del Mediterraneo...', EN: 'Discover the hidden gems of the Mediterranean...' },
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop',
      date: 'Oct 12, 2026',
      category: 'Tips'
    },
    {
      slug: 'save-our-oceans',
      title: { IT: 'Come Proteggere i Nostri Oceani', EN: 'How to Protect Our Oceans' },
      excerpt: { IT: 'Piccoli gesti quotidiani per un grande impatto...', EN: 'Small daily gestures for a big impact...' },
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=500&fit=crop',
      date: 'Sep 28, 2026',
      category: 'Conservation'
    },
    {
      slug: 'scuba-gear-guide',
      title: { IT: 'Guida all\'Attrezzatura Subacquea', EN: 'Scuba Gear Guide' },
      excerpt: { IT: 'Cosa comprare e cosa noleggiare per iniziare...', EN: 'What to buy and what to rent to get started...' },
      image: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=800&h=500&fit=crop',
      date: 'Sep 15, 2026',
      category: 'Equipment'
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Blog - Bleenhub', EN: 'Blog - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-7xl mx-auto pb-16">
        <Breadcrumb items={[{ label: 'Blog' }]} />
        
        <div className="mt-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t({ IT: 'Diario di Bordo', EN: 'Logbook' })}</h1>
          <p className="text-white/60">{t({ IT: 'Storie, consigli e notizie dal mondo sommerso.', EN: 'Stories, tips and news from the underwater world.' })}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D2B4]/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={t(post.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#00D2B4] text-[#001a3d] text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-white/40 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{t(post.title)}</h3>
                <p className="text-white/60 mb-6 line-clamp-3">{t(post.excerpt)}</p>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="link" className="text-[#00D2B4] p-0 h-auto hover:text-white">
                    {t({ IT: 'Leggi Tutto', EN: 'Read More' })} &rarr;
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;