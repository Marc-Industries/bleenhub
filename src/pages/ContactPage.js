import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t({ IT: 'Messaggio Inviato', EN: 'Message Sent' }),
        description: t({ IT: 'Ti risponderemo al più presto!', EN: 'We will reply as soon as possible!' })
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Contatti - Bleenhub', EN: 'Contact - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-7xl mx-auto pb-16">
        <Breadcrumb items={[{ label: t({ IT: 'Contatti', EN: 'Contact' }) }]} />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-6">{t({ IT: 'Parliamo?', EN: 'Let\'s Talk?' })}</h1>
            <p className="text-white/70 mb-12 text-lg">
              {t({ IT: 'Hai domande sui nostri corsi o viaggi? Siamo qui per aiutarti.', EN: 'Have questions about our courses or trips? We are here to help.' })}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#00D2B4]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#00D2B4]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-white/60">info@bleenhub.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#00D2B4]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#00D2B4]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-white/60">+39 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#00D2B4]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#00D2B4]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-white/60">Via del Mare 42, Roma, Italia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t({ IT: 'Nome', EN: 'Name' })}</label>
                <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D2B4] transition-colors" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input required type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D2B4] transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t({ IT: 'Messaggio', EN: 'Message' })}</label>
                <textarea required rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D2B4] transition-colors"></textarea>
              </div>

              <Button disabled={loading} type="submit" className="w-full bg-[#00D2B4] hover:bg-[#00D2B4]/90 text-[#001a3d] font-bold py-6">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t({ IT: 'Invia Messaggio', EN: 'Send Message' })}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;