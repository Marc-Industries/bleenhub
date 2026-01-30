import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const AboutPage = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Elena Rossi',
      role: 'Founder & Instructor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Marco Bianchi',
      role: 'Lead Divemaster',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah James',
      role: 'Marine Biologist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Chi Siamo - Bleenhub', EN: 'About Us - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-7xl mx-auto pb-16">
        <Breadcrumb items={[{ label: t({ IT: 'Chi Siamo', EN: 'About Us' }) }]} />
        
        <section className="mt-12 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t({ IT: 'La Nostra Missione', EN: 'Our Mission' })}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            {t({ 
              IT: 'Connettere le persone con la meraviglia del mondo sottomarino, promuovendo la conservazione e la sicurezza attraverso esperienze indimenticabili.', 
              EN: 'Connecting people with the wonder of the underwater world, promoting conservation and safety through unforgettable experiences.' 
            })}
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
            <Heart className="w-12 h-12 text-[#00D2B4] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t({ IT: 'Passione', EN: 'Passion' })}</h3>
            <p className="text-white/60">{t({ IT: 'Amiamo ciò che facciamo e lo trasmettiamo.', EN: 'We love what we do and we share it.' })}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
            <Shield className="w-12 h-12 text-[#00D2B4] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t({ IT: 'Sicurezza', EN: 'Safety' })}</h3>
            <p className="text-white/60">{t({ IT: 'La tua sicurezza è la nostra priorità #1.', EN: 'Your safety is our #1 priority.' })}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
            <Award className="w-12 h-12 text-[#00D2B4] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{t({ IT: 'Eccellenza', EN: 'Excellence' })}</h3>
            <p className="text-white/60">{t({ IT: 'Standard elevati in ogni dettaglio.', EN: 'High standards in every detail.' })}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">{t({ IT: 'Il Nostro Team', EN: 'Our Team' })}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#00D2B4]/30 group-hover:border-[#00D2B4] transition-colors duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#00D2B4]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;