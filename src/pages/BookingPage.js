import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Loader2 } from 'lucide-react';

const BookingPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [guests, setGuests] = useState(1);
  const basePrice = 450;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t({ IT: 'Richiesta Inviata', EN: 'Request Sent' }),
        description: t({ IT: 'Ti contatteremo per confermare la prenotazione.', EN: 'We will contact you to confirm the booking.' })
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Prenotazioni - Bleenhub', EN: 'Bookings - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-4xl mx-auto pb-16">
        <Breadcrumb items={[{ label: t({ IT: 'Prenotazioni', EN: 'Bookings' }) }]} />
        
        <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-12 text-center">
          {t({ IT: 'Prenota la tua Avventura', EN: 'Book Your Adventure' })}
        </h1>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">{t({ IT: 'Destinazione / Corso', EN: 'Destination / Course' })}</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D2B4] [&>option]:text-black">
                  <option>Open Water Diver</option>
                  <option>Advanced Open Water</option>
                  <option>Sharm El-Sheikh Trip</option>
                  <option>Maldive Liveaboard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t({ IT: 'Data Preferita', EN: 'Preferred Date' })}</label>
                <div className="relative">
                  <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D2B4] appearance-none" />
                  <Calendar className="absolute right-4 top-3.5 w-5 h-5 text-white/50 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">{t({ IT: 'Numero di Partecipanti', EN: 'Number of Participants' })}: {guests}</label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full accent-[#00D2B4]"
              />
              <div className="flex justify-between text-xs text-white/50 mt-2">
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t({ IT: 'Note Speciali', EN: 'Special Notes' })}</label>
              <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D2B4]"></textarea>
            </div>

            <div className="border-t border-white/10 pt-8 flex items-center justify-between">
              <div>
                <div className="text-sm text-white/60">{t({ IT: 'Totale Stimato', EN: 'Estimated Total' })}</div>
                <div className="text-3xl font-bold text-[#00D2B4]">€{basePrice * guests}</div>
              </div>
              <Button disabled={loading} type="submit" className="bg-[#00D2B4] hover:bg-[#00D2B4]/90 text-[#001a3d] font-bold px-8 py-6 rounded-xl">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t({ IT: 'Invia Richiesta', EN: 'Send Request' })}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;