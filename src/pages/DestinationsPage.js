import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Filter, Calendar, MapPin, Fish, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const DestinationsPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Sharm El-Sheikh',
      image: 'https://images.unsplash.com/photo-1691938275373-fbe16d306962?w=800&h=600&fit=crop',
      season: { IT: 'Tutto l\'anno', EN: 'Year-round' },
      difficulty: 'Easy',
      price: '€€',
      description: { IT: 'Barriera corallina spettacolare e relitti storici.', EN: 'Spectacular coral reefs and historic wrecks.' }
    },
    {
      id: 2,
      name: "Isola d'Elba",
      image: 'https://images.unsplash.com/photo-1521774156062-c6ae1c11adf1?w=800&h=600&fit=crop',
      season: { IT: 'Mag-Ott', EN: 'May-Oct' },
      difficulty: 'Medium',
      price: '€€',
      description: { IT: 'Acque cristalline e biodiversità mediterranea.', EN: 'Crystal clear waters and Mediterranean biodiversity.' }
    },
    {
      id: 3,
      name: 'Favignana',
      image: 'https://images.unsplash.com/photo-1702045414393-ffcf6a65051f?w=800&h=600&fit=crop',
      season: { IT: 'Giu-Set', EN: 'Jun-Sep' },
      difficulty: 'Medium',
      price: '€€',
      description: { IT: 'Grotte sommerse e archeologia subacquea.', EN: 'Underwater caves and underwater archaeology.' }
    },
    {
      id: 4,
      name: 'Maldive',
      image: 'https://images.unsplash.com/photo-1675180549785-8f8dcb134215?w=800&h=600&fit=crop',
      season: { IT: 'Dic-Apr', EN: 'Dec-Apr' },
      difficulty: 'Easy/Hard',
      price: '€€€€',
      description: { IT: 'Atolli paradisiaci e grandi pelagici.', EN: 'Paradise atolls and large pelagics.' }
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Destinazioni - Bleenhub', EN: 'Destinations - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-7xl mx-auto pb-16">
        <Breadcrumb items={[{ label: t({ IT: 'Destinazioni', EN: 'Destinations' }) }]} />
        
        <div className="mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00D2B4]">
            {t({ IT: 'Le Nostre Destinazioni', EN: 'Our Destinations' })}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            {t({ IT: 'Esplora i luoghi più affascinanti del pianeta blu.', EN: 'Explore the most fascinating places on the blue planet.' })}
          </p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-[#00D2B4] text-[#001a3d]' : 'text-white border-white/20'}
          >
            {t({ IT: 'Tutte', EN: 'All' })}
          </Button>
          <Button 
            variant={filter === 'tropical' ? 'default' : 'outline'}
            onClick={() => setFilter('tropical')}
            className={filter === 'tropical' ? 'bg-[#00D2B4] text-[#001a3d]' : 'text-white border-white/20'}
          >
            Tropical
          </Button>
          <Button 
            variant={filter === 'mediterranean' ? 'default' : 'outline'}
            onClick={() => setFilter('mediterranean')}
            className={filter === 'mediterranean' ? 'bg-[#00D2B4] text-[#001a3d]' : 'text-white border-white/20'}
          >
            Mediterranean
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#00D2B4]/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#001a3d]/80 backdrop-blur px-3 py-1 rounded-full text-[#00D2B4] text-sm font-bold border border-[#00D2B4]/20">
                  {dest.price}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{dest.name}</h3>
                <p className="text-white/70 mb-6 min-h-[3rem]">{t(dest.description)}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Calendar className="w-4 h-4 text-[#00D2B4]" />
                    {t(dest.season)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <MapPin className="w-4 h-4 text-[#00D2B4]" />
                    {dest.difficulty}
                  </div>
                </div>

                <Button className="w-full bg-[#00D2B4] hover:bg-[#00D2B4]/90 text-[#001a3d] font-bold py-6">
                  {t({ IT: 'Prenota Ora', EN: 'Book Now' })}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;