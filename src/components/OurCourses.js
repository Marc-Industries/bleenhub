import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Star, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const OurCourses = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const courses = [
    {
      icon: Anchor,
      title: 'Open Water',
      level: { IT: 'Principiante', EN: 'Beginner' },
      duration: { IT: '3-4 Giorni', EN: '3-4 Days' },
      price: '€350 - €450',
      description: { IT: 'Il tuo primo passo nel mondo della subacquea.', EN: 'Your first step into the diving world.' }
    },
    {
      icon: Star,
      title: 'Advanced',
      level: { IT: 'Intermedio', EN: 'Intermediate' },
      duration: { IT: '2-3 Giorni', EN: '2-3 Days' },
      price: '€300 - €400',
      description: { IT: 'Migliora le tue abilità ed esplora nuove profondità.', EN: 'Improve your skills and explore new depths.' }
    },
    {
      icon: Zap,
      title: 'Specialty',
      level: { IT: 'Avanzato', EN: 'Advanced' },
      duration: { IT: 'Variabile', EN: 'Variable' },
      price: { IT: 'Su richiesta', EN: 'On request' },
      description: { IT: 'Specializzati in relitti, notturne e altro.', EN: 'Specialize in wrecks, night dives and more.' }
    }
  ];

  const handleLearnMore = () => {
    toast({
      title: "🚧 " + t({ IT: "Funzionalità in arrivo", EN: "Feature coming soon" }),
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="py-24 px-4 relative bg-[#001a3d]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ IT: 'I Nostri Corsi', EN: 'Our Courses' })}
          </h2>
          <div className="h-1 w-24 bg-teal-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-md border border-teal-400/20 p-8 rounded-2xl overflow-hidden hover:border-teal-400/60 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <course.icon className="w-24 h-24 text-teal-400" />
              </div>

              <div className="relative z-10">
                <course.icon className="w-10 h-10 text-teal-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <div className="flex gap-4 text-sm text-teal-200/80 mb-4">
                  <span>{t(course.level)}</span>
                  <span>•</span>
                  <span>{t(course.duration)}</span>
                </div>
                <p className="text-white/70 mb-6 min-h-[3rem]">{t(course.description)}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-semibold text-white">{typeof course.price === 'string' ? course.price : t(course.price)}</span>
                  <Button
                    onClick={handleLearnMore}
                    variant="outline"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#001a3d] transition-all"
                  >
                    {t({ IT: 'Scopri di più', EN: 'Learn More' })}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;