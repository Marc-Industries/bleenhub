import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import DestinationCard from '@/components/DestinationCard';

const DestinationGrid = () => {
  const { t } = useLanguage();

  const destinations = [
    {
      name: 'Sharm El-Sheikh',
      duration: 7,
      date: { IT: 'Giugno 2026', EN: 'June 2026' },
      image: 'https://images.unsplash.com/photo-1691938275373-fbe16d306962?w=800&h=600&fit=crop'
    },
    {
      name: "Isola d'Elba",
      duration: 4,
      date: { IT: 'Luglio 2026', EN: 'July 2026' },
      image: 'https://images.unsplash.com/photo-1521774156062-c6ae1c11adf1?w=800&h=600&fit=crop'
    },
    {
      name: 'Favignana',
      duration: 7,
      date: { IT: 'Settembre 2026', EN: 'September 2026' },
      image: 'https://images.unsplash.com/photo-1702045414393-ffcf6a65051f?w=800&h=600&fit=crop'
    },
    {
      name: 'Maldive, liveaboard',
      duration: 8,
      date: { IT: 'Febbraio/Marzo 2027', EN: 'February/March 2027' },
      image: 'https://images.unsplash.com/photo-1675180549785-8f8dcb134215?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="destinations" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d] via-[#002855] to-[#001a3d] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ 
              IT: 'Le prossime destinazioni Bleen...', 
              EN: 'Upcoming Bleen destinations...' 
            })}
          </h2>
          <p className="text-xl text-white/70">
            {t({ 
              IT: 'Esplora le meraviglie del mondo subacqueo', 
              EN: 'Explore the wonders of the underwater world' 
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index} 
              destination={destination} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;