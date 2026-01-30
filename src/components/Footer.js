import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import BleenhubLogo from '@/components/BleenhubLogo';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 " + t({ IT: "Funzionalità in arrivo", EN: "Feature coming soon" }),
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="relative bg-[#001a3d] border-t border-[#00D2B4]/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <BleenhubLogo className="w-12 h-12" />
              <span className="text-2xl font-bold text-white">bleenhub</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              {t({ 
                IT: 'Scopri il mondo sommerso con noi. Corsi ed esperienze subacquee indimenticabili con la community Bleen.', 
                EN: 'Discover the underwater world with us. Unforgettable diving courses and experiences with the Bleen community.' 
              })}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#00D2B4]/10 hover:bg-[#00D2B4]/20 flex items-center justify-center text-[#00D2B4] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t({ IT: 'Contatti', EN: 'Contact' })}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-[#00D2B4]" />
                <span className="text-sm">info@bleenhub.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-[#00D2B4]" />
                <span className="text-sm">+39 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-[#00D2B4]" />
                <span className="text-sm">Italia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t({ IT: 'Link Rapidi', EN: 'Quick Links' })}
            </h3>
            <div className="space-y-2 flex flex-col">
              {[
                { IT: 'Home', EN: 'Home', path: '/' },
                { IT: 'Destinazioni', EN: 'Destinations', path: '/destinazioni' },
                { IT: 'Corsi', EN: 'Courses', path: '/corsi' },
                { IT: 'Community', EN: 'Community', path: '/community' },
                { IT: 'Contatti', EN: 'Contact', path: '/contatti' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white/70 hover:text-[#00D2B4] transition-colors duration-300 text-sm"
                >
                  {t(link)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#00D2B4]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Bleenhub. {t({ IT: 'Tutti i diritti riservati.', EN: 'All rights reserved.' })}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/60 hover:text-[#00D2B4] transition-colors duration-300 text-sm">
                {t({ IT: 'Privacy Policy', EN: 'Privacy Policy' })}
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-[#00D2B4] transition-colors duration-300 text-sm">
                {t({ IT: 'Termini di Servizio', EN: 'Terms of Service' })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;