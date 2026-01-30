import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const PhotoGallery = () => {
  const { t } = useLanguage();

  const photos = [
    'https://images.unsplash.com/photo-1670500014301-4d5e32f6438a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1683648463895-8a64f4f1f260?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1685450500804-98ecdd1d778c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1521774156062-c6ae1c11adf1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1698039147599-735e6892d494?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1658373919642-11f34a69ec04?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1678116146490-dbb4a4a28441?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1695074402060-6c43f284b2de?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1594151961133-4931b244cd00?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1686056561795-f071f46b377a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1569970222178-18769547d601?w=400&h=400&fit=crop'
  ];

  return (
    <section className="py-24 px-4 bg-[#001a3d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t({ IT: 'Momenti Bleen', EN: 'Bleen Moments' })}
          </h2>
          <p className="text-white/60">
            {t({ IT: 'Catturati dalla nostra community', EN: 'Captured by our community' })}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src={url} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  @bleenhub
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;