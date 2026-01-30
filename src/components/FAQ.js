import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Shield, Bookmark, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      icon: Shield,
      question: { IT: 'È sicuro fare immersioni?', EN: 'Is diving safe?' },
      answer: { 
        IT: 'Sì, la sicurezza è la nostra priorità assoluta. Seguiamo standard rigorosi e tutti i nostri istruttori sono certificati.', 
        EN: 'Yes, safety is our top priority. We follow rigorous standards and all our instructors are certified.' 
      }
    },
    {
      icon: Bookmark,
      question: { IT: 'Come posso prenotare un corso?', EN: 'How can I book a course?' },
      answer: { 
        IT: 'Puoi prenotare direttamente dal sito o contattarci via email. Richiediamo un acconto per confermare la prenotazione.', 
        EN: 'You can book directly from the website or contact us via email. We require a deposit to confirm the booking.' 
      }
    },
    {
      icon: Wrench,
      question: { IT: 'Devo avere la mia attrezzatura?', EN: 'Do I need my own equipment?' },
      answer: { 
        IT: 'No, forniamo tutta l\'attrezzatura necessaria per i corsi base. Per i livelli avanzati consigliamo di avere il proprio equipaggiamento.', 
        EN: 'No, we provide all necessary equipment for basic courses. For advanced levels, we recommend having your own gear.' 
      }
    },
    {
      icon: HelpCircle,
      question: { IT: 'Quali sono i requisiti minimi?', EN: 'What are the minimum requirements?' },
      answer: { 
        IT: 'Devi avere almeno 10 anni e saper nuotare. È richiesto un certificato medico di buona salute.', 
        EN: 'You must be at least 10 years old and able to swim. A medical certificate of good health is required.' 
      }
    },
    {
      icon: Shield,
      question: { IT: 'Cosa succede se piove?', EN: 'What happens if it rains?' },
      answer: { 
        IT: 'Ci si bagna comunque! Le immersioni si fanno anche con la pioggia, a meno che le condizioni del mare non siano pericolose.', 
        EN: 'You get wet anyway! Dives proceed even in rain, unless sea conditions are dangerous.' 
      }
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#001a3d] relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t({ IT: 'Domande Frequenti', EN: 'Frequently Asked Questions' })}</h2>
          <p className="text-white/60">{t({ IT: 'Tutto quello che devi sapere', EN: 'Everything you need to know' })}</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-teal-400/30 transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <faq.icon className="w-6 h-6 text-teal-400" />
                  <span className="text-lg font-semibold text-white">{t(faq.question)}</span>
                </div>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-teal-400" />
                ) : (
                  <Plus className="w-5 h-5 text-teal-400" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-white/70 ml-10 border-l-2 border-teal-400/20 pl-4">
                      {t(faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;