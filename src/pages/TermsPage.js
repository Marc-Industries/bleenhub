import React from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>Terms of Service - Bleenhub</title>
      </Helmet>
      <NavigationBar />
      <main className="pt-28 px-4 max-w-4xl mx-auto pb-16">
        <Breadcrumb items={[{ label: 'Terms of Service' }]} />
        <h1 className="text-3xl font-bold mt-8 mb-6">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p>Last updated: January 2026</p>
          <h3>1. Terms</h3>
          <p>By accessing this Website, accessible from bleenhub.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
          <h3>2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials on Bleenhub's Website for personal, non-commercial transitory viewing only.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;