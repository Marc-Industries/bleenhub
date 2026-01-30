import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const NewsletterSignup = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        variant: "destructive",
        title: t({ IT: "Errore", EN: "Error" }),
        description: t({ IT: "Inserisci un indirizzo email valido.", EN: "Please enter a valid email address." }),
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast({
        title: t({ IT: "Iscrizione confermata!", EN: "Subscription confirmed!" }),
        description: t({ IT: "Grazie per esserti iscritto alla nostra newsletter.", EN: "Thanks for subscribing to our newsletter." }),
      });
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#001a3d] to-[#002855]">
      <div className="max-w-4xl mx-auto bg-teal-400/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-teal-400/20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ IT: 'Resta Aggiornato', EN: 'Stay Updated' })}
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            {t({ IT: 'Ricevi le ultime notizie, offerte esclusive e aggiornamenti sui nostri prossimi viaggi.', EN: 'Get the latest news, exclusive offers and updates on our upcoming trips.' })}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t({ IT: 'Il tuo indirizzo email', EN: 'Your email address' })}
              className="flex-grow px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-teal-400 hover:bg-teal-300 text-[#001a3d] font-bold py-3 px-8 rounded-xl transition-all"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t({ IT: 'Iscriviti', EN: 'Subscribe' })}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;