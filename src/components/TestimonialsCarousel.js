import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialsCarousel = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Giulia Conti',
      location: 'Roma, Italy',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      quote: { IT: "Un'esperienza che mi ha cambiato la vita. Bleenhub è fantastico!", EN: "A life-changing experience. Bleenhub is fantastic!" }
    },
    {
      name: 'Thomas Mueller',
      location: 'Berlin, Germany',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      quote: { IT: "Organizzazione impeccabile e destinazioni da sogno.", EN: "Impeccable organization and dream destinations." }
    },
    {
      name: 'Sara Tanaka',
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      quote: { IT: "Mi sono sentita sicura e accolta fin dal primo momento.", EN: "I felt safe and welcomed from the very first moment." }
    },
    {
      name: 'Alex Johnson',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      quote: { IT: "Guide professionali e un'atmosfera incredibile.", EN: "Professional guides and an incredible atmosphere." }
    },
    {
      name: 'Maria Garcia',
      location: 'Madrid, Spain',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      quote: { IT: "Non vedo l'ora del prossimo viaggio con Bleenhub!", EN: "Can't wait for the next trip with Bleenhub!" }
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#001a3d] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d] via-[#002855]/30 to-[#001a3d]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          {t({ IT: 'Dicono di noi', EN: 'What they say about us' })}
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-teal-400/80 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/70 italic flex-grow">"{t(testimonial.quote)}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;