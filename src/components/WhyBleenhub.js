import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Compass, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyBleenhub = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: { IT: 'Community Unita', EN: 'United Community' },
      description: { IT: 'Entra in una famiglia di appassionati.', EN: 'Join a family of diving enthusiasts.' }
    },
    {
      icon: Award,
      title: { IT: 'Guide Esperte', EN: 'Expert Guides' },
      description: { IT: 'Professionisti certificati al tuo fianco.', EN: 'Certified professionals by your side.' }
    },
    {
      icon: Compass,
      title: { IT: 'Esperienze Uniche', EN: 'Unique Experiences' },
      description: { IT: 'Destinazioni esclusive e indimenticabili.', EN: 'Exclusive and unforgettable destinations.' }
    },
    {
      icon: Shield,
      title: { IT: 'Sicurezza Prima di Tutto', EN: 'Safety First' },
      description: { IT: 'Standard di sicurezza rigorosi.', EN: 'Rigorous safety standards.' }
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#001a3d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-[#001a3d] to-[#001a3d]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
            {t({ IT: 'Perché scegliere Bleenhub?', EN: 'Why Choose Bleenhub?' })}
          </h2>
          <p className="text-xl text-white/70">
            {t({ IT: 'Più di un semplice diving center.', EN: 'More than just a diving center.' })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-colors">
                <feature.icon className="w-8 h-8 text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t(feature.title)}</h3>
              <p className="text-white/60">{t(feature.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBleenhub;