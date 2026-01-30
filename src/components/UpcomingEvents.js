import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const UpcomingEvents = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const events = [
    {
      date: '15 Oct 2026',
      title: { IT: 'Workshop Fotografia', EN: 'Photography Workshop' },
      location: 'Portofino, Italy',
      difficulty: { IT: 'Intermedio', EN: 'Intermediate' },
      spots: 4,
      icon: Zap
    },
    {
      date: '02 Nov 2026',
      title: { IT: 'Pulizia Fondali', EN: 'Reef Cleanup' },
      location: 'Sardinia, Italy',
      difficulty: { IT: 'Tutti i livelli', EN: 'All levels' },
      spots: 12,
      icon: Users
    },
    {
      date: '10 Dec 2026',
      title: { IT: 'Immersione Notturna', EN: 'Night Dive Special' },
      location: 'Sicily, Italy',
      difficulty: { IT: 'Avanzato', EN: 'Advanced' },
      spots: 6,
      icon: MapPin
    },
    {
      date: '05 Jan 2027',
      title: { IT: 'Incontro Biologia Marina', EN: 'Marine Biology Meetup' },
      location: 'Online / Rome',
      difficulty: { IT: 'Aperto a tutti', EN: 'Open to all' },
      spots: 50,
      icon: Calendar
    }
  ];

  const handleJoin = (eventTitle) => {
    toast({
      title: t({ IT: "Iscrizione avviata!", EN: "Registration started!" }),
      description: `${t({ IT: "Hai richiesto di partecipare a:", EN: "You requested to join:" })} ${eventTitle}`,
    });
  };

  return (
    <section className="py-24 px-4 bg-[#001a3d] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-gradient-to-b from-transparent via-teal-400 to-transparent h-3/4 opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 pl-8 border-l-4 border-teal-400"
        >
          {t({ IT: 'Prossimi Eventi', EN: 'Upcoming Events' })}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-900/20"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-shrink-0 bg-teal-400/10 p-4 rounded-lg text-center min-w-[80px]">
                  <span className="block text-2xl font-bold text-teal-400">{event.date.split(' ')[0]}</span>
                  <span className="block text-sm text-teal-200/80 uppercase">{event.date.split(' ')[1]}</span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{t(event.title)}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-teal-400" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-teal-400" />
                      {t(event.difficulty)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-teal-400" />
                      {event.spots} {t({ IT: 'posti', EN: 'spots' })}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => handleJoin(t(event.title))}
                  className="w-full md:w-auto bg-teal-400 text-[#001a3d] hover:bg-teal-300 font-semibold"
                >
                  {t({ IT: 'Iscriviti', EN: 'Join' })}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;