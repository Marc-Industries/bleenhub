import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CommunitySection from '@/components/CommunitySection';
import PhotoGallery from '@/components/PhotoGallery';

const CommunityPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Community - Bleenhub', EN: 'Community - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-7xl mx-auto pb-16">
        <Breadcrumb items={[{ label: 'Community' }]} />
        
        <div className="mt-8">
          <CommunitySection />
        </div>

        <div className="mt-16">
          <PhotoGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;