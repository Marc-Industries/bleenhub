import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

const DestinationCard = ({ destination, index }) => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleCardClick = () => {
    toast({
      title: "🚧 " + t({ IT: "Funzionalità in arrivo", EN: "Feature coming soon" }),
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={handleCardClick}
      className="group cursor-pointer"
    >
      <div className="relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-[#00D2B4]/50">
        <div className="relative h-64 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
            }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a3d] via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00D2B4] transition-colors duration-300">
            {destination.name}
          </h3>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-5 h-5 text-[#00D2B4]" />
              <span className="text-sm">{t(destination.date)}</span>
            </div>

            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-5 h-5 text-[#00D2B4]" />
              <span className="text-sm">
                {destination.duration} {t({ IT: 'giorni', EN: 'days' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;