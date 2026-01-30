import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { t } = useLanguage();
  const { slug } = useParams();

  // Placeholder content since we don't have a backend
  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>Blog Post - Bleenhub</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-3xl mx-auto pb-16">
        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: slug }]} />
        
        <div className="mt-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-white/60 hover:text-white pl-0 mb-6">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t({ IT: 'Torna al Blog', EN: 'Back to Blog' })}
            </Button>
          </Link>

          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop" 
            alt="Cover" 
            className="w-full h-64 md:h-96 object-cover rounded-3xl mb-8"
          />

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {t({ IT: 'Titolo dell\'Articolo', EN: 'Article Title' })}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3>{t({ IT: 'Sottotitolo', EN: 'Subtitle' })}</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;