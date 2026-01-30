import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleCTAClick = () => {
    toast({
      title: "🚧 " + t({ IT: "Funzionalità in arrivo", EN: "Feature coming soon" }),
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#001a3d] via-[#002855] to-[#001a3d]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 210, 180, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 210, 180, 0.15) 0%, transparent 50%)
          `
        }}
      />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D2B4] rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D2B4] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t({ 
              IT: 'Scopri il mondo sommerso con noi', 
              EN: 'Experience the underwater world with us' 
            })}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t({ 
              IT: 'Unisciti alla community Bleen per esperienze subacquee indimenticabili', 
              EN: 'Join the Bleen community for unforgettable diving experiences' 
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={handleCTAClick}
              className="bg-[#00D2B4] hover:bg-[#00D2B4]/90 text-[#001a3d] font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-[#00D2B4]/50 hover:scale-105"
            >
              {t({ IT: 'Inizia la tua avventura', EN: 'Start your adventure' })}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToDestinations}
            className="text-[#00D2B4] hover:text-[#00D2B4]/80 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;