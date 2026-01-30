import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const CoursesPage = () => {
  const { t } = useLanguage();

  const courses = [
    {
      title: 'Open Water Diver',
      price: '€390',
      duration: { IT: '3-4 Giorni', EN: '3-4 Days' },
      description: { IT: 'Il corso base per imparare a immergersi in sicurezza fino a 18 metri.', EN: 'The basic course to learn to dive safely up to 18 meters.' },
      features: [
        { IT: '5 Sessioni in piscina', EN: '5 Pool sessions' },
        { IT: '4 Immersioni in mare', EN: '4 Ocean dives' },
        { IT: 'Attrezzatura inclusa', EN: 'Equipment included' },
        { IT: 'Certificazione internazionale', EN: 'International certification' }
      ]
    },
    {
      title: 'Advanced Open Water',
      price: '€350',
      duration: { IT: '2-3 Giorni', EN: '2-3 Days' },
      description: { IT: 'Espandi le tue abilità con immersioni profonde e di navigazione.', EN: 'Expand your skills with deep and navigation dives.' },
      features: [
        { IT: '5 Immersioni di avventura', EN: '5 Adventure dives' },
        { IT: 'Nessun esame scritto', EN: 'No written exam' },
        { IT: 'Massimo 30 metri', EN: 'Max 30 meters' },
        { IT: 'Flessibilità di orari', EN: 'Schedule flexibility' }
      ]
    },
    {
      title: 'Rescue Diver',
      price: '€420',
      duration: { IT: '3-4 Giorni', EN: '3-4 Days' },
      description: { IT: 'Impara a gestire emergenze e aiutare altri subacquei.', EN: 'Learn to manage emergencies and help other divers.' },
      features: [
        { IT: 'Scenari di soccorso', EN: 'Rescue scenarios' },
        { IT: 'Gestione stress', EN: 'Stress management' },
        { IT: 'Primo soccorso EFR', EN: 'EFR First Aid' },
        { IT: 'Prerequisito per Divemaster', EN: 'Prerequisite for Divemaster' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#001a3d] text-white">
      <Helmet>
        <title>{t({ IT: 'Corsi Sub - Bleenhub', EN: 'Diving Courses - Bleenhub' })}</title>
      </Helmet>
      <NavigationBar />
      
      <main className="pt-28 px-4 max-w-7xl mx-auto pb-16">
        <Breadcrumb items={[{ label: t({ IT: 'Corsi', EN: 'Courses' }) }]} />
        
        <div className="text-center mt-12 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00D2B4]">
            {t({ IT: 'Impara ad Immergerti', EN: 'Learn to Dive' })}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t({ IT: 'Dai primi respiri sott\'acqua alle certificazioni professionali.', EN: 'From your first breaths underwater to professional certifications.' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:border-[#00D2B4]/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <div className="text-3xl font-bold text-[#00D2B4] mb-4">{course.price}</div>
              <div className="flex items-center gap-2 text-white/60 mb-6">
                <Clock className="w-4 h-4" />
                <span>{t(course.duration)}</span>
              </div>
              <p className="text-white/80 mb-8 flex-grow">{t(course.description)}</p>
              
              <ul className="space-y-4 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D2B4] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{t(feature)}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-white/10 hover:bg-[#00D2B4] hover:text-[#001a3d] text-white border border-white/20 hover:border-transparent transition-all py-6">
                {t({ IT: 'Richiedi Info', EN: 'Request Info' })}
              </Button>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;