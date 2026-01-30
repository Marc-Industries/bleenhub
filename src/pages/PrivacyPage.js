import React from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>Privacy Policy - Bleenhub</title>
      </Helmet>
      <NavigationBar />
      <main className="pt-28 px-4 max-w-4xl mx-auto pb-16">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
        <h1 className="text-3xl font-bold mt-8 mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p>Last updated: January 2026</p>
          <p>At Bleenhub, accessible from bleenhub.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Bleenhub and how we use it.</p>
          <h3>Log Files</h3>
          <p>Bleenhub follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;