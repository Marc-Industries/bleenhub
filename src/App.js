import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import { Loader2 } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const DestinationsPage = lazy(() => import('@/pages/DestinationsPage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const CommunityPage = lazy(() => import('@/pages/CommunityPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const BookingPage = lazy(() => import('@/pages/BookingPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#001a3d] flex items-center justify-center">
    <Loader2 className="w-12 h-12 text-[#00D2B4] animate-spin" />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinazioni" element={<DestinationsPage />} />
            <Route path="/corsi" element={<CoursesPage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contatti" element={<ContactPage />} />
            <Route path="/prenotazioni" element={<BookingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}


export default App;
