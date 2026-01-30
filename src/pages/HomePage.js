import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import WhyBleenhub from '@/components/WhyBleenhub';
import OurCourses from '@/components/OurCourses';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import UpcomingEvents from '@/components/UpcomingEvents';
import DestinationGrid from '@/components/DestinationGrid';
import PhotoGallery from '@/components/PhotoGallery';
import FAQ from '@/components/FAQ';
import CommunitySection from '@/components/CommunitySection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t({ IT: 'Bleenhub - Scopri il Mondo Sommerso', EN: 'Bleenhub - Discover the Underwater World' })}</title>
        <meta 
          name="description" 
          content={t({ 
            IT: 'Unisciti alla community Bleen per esperienze subacquee indimenticabili. Scopri destinazioni esclusive e corsi di immersione.', 
            EN: 'Join the Bleen community for unforgettable diving experiences. Discover exclusive destinations and diving courses.' 
          })} 
        />
      </Helmet>
      
      <div className="min-h-screen bg-[#001a3d]">
        <NavigationBar />
        <HeroSection />
        <WhyBleenhub />
        <DestinationGrid />
        <OurCourses />
        <TestimonialsCarousel />
        <UpcomingEvents />
        <PhotoGallery />
        <CommunitySection />
        <FAQ />
        <NewsletterSignup />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;