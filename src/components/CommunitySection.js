import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CommunitySection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Marco Rossi',
      image: 'https://images.unsplash.com/photo-1647825194145-2d94e259c745?w=400&h=400&fit=crop',
      text: { 
        IT: 'Un\'esperienza incredibile! La community Bleen mi ha fatto scoprire luoghi magnifici.', 
        EN: 'An incredible experience! The Bleen community helped me discover magnificent places.' 
      }
    },
    {
      name: 'Sofia Marino',
      image: 'https://images.unsplash.com/photo-1594151961133-4931b244cd00?w=400&h=400&fit=crop',
      text: { 
        IT: 'Immersioni organizzate alla perfezione, guide esperte e compagni di avventura fantastici!', 
        EN: 'Perfectly organized dives, expert guides and fantastic adventure companions!' 
      }
    },
    {
      name: 'Luca Bianchi',
      image: 'https://images.unsplash.com/photo-1568661434242-0461ebb33c79?w=400&h=400&fit=crop',
      text: { 
        IT: 'Grazie a Bleen ho trasformato la mia passione per il mare in ricordi indimenticabili.', 
        EN: 'Thanks to Bleen I turned my passion for the sea into unforgettable memories.' 
      }
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D2B4] rounded-full filter blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D2B4] rounded-full filter blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t({ 
              IT: 'Vivi l\'esperienza con i Bleeners', 
              EN: 'Experience with the Bleeners' 
            })}
          </h2>

          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#00D2B4]" />
              <span className="text-xl text-white/80">
                <strong className="text-[#00D2B4]">1604</strong> {t({ IT: 'follower', EN: 'followers' })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#00D2B4]" />
              <span className="text-xl text-white/80">
                {t({ IT: 'Community attiva', EN: 'Active community' })}
              </span>
            </div>
          </div>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t({ 
              IT: 'Scopri il mondo sommerso con noi. Corsi ed esperienze subacquee. Unisciti alla community Bleen.', 
              EN: 'Discover the underwater world with us. Diving courses and experiences. Join the Bleen community.' 
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-[#00D2B4]/50 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#00D2B4]/30 group-hover:border-[#00D2B4] transition-colors duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#00D2B4] rounded-full p-2">
                      <Heart className="w-4 h-4 text-[#001a3d] fill-current" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D2B4] transition-colors duration-300">
                    {testimonial.name}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    "{t(testimonial.text)}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;