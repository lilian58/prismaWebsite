import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { TrendingUp, Target, Users } from 'lucide-react';
import { useTranslation } from '../translation/useTranslation';

const aboutImages = [
  '/images/femme/femme1.jpg',
  '/images/femme/femme2.jpg',
  '/images/plante.jpg',
  '/images/arbre.jpg',
];

export default function AboutSection() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 4000);

    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="w-full">
      {/* Bandeau bleu avec texte oscillant */}
      <div className="bg-[#1E22AA] py-12 overflow-hidden">
        <div className="marquee-container">
          <motion.p 
            className="text-white text-3xl md:text-4xl lg:text-5xl font-medium whitespace-nowrap"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {t('about.marquee')}
          </motion.p>
        </div>
      </div>

      {/* Section À propos */}
      <div className="bg-[#F3F3F3] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Slider d'images */}
            <div className="relative">
              <div className="aspect-3/4 md:aspect-4/5 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={aboutImages[currentImageIndex]}
                  alt={`PRISMA équipe ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
              </div>
              {/* Indicateurs */}
              <div className="flex justify-center mt-6 space-x-3">
                {aboutImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-[#1E22AA]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Contenu texte */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E22AA] mb-8">
                {t('about.title')}
              </h2>

              {/* Qui est PRISMA */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-[#5FB1DE]" />
                  <h3 className="text-xl font-semibold text-[#5FB1DE]">{t('about.who')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.whoText')}
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-[#5FB1DE]" />
                  <h3 className="text-xl font-semibold text-[#5FB1DE]">{t('about.vision')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-[#5FB1DE]" />
                  <h3 className="text-xl font-semibold text-[#5FB1DE]">{t('about.mission')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>
            </div>
          </div>

          {/* Boutons Actualités et Projets */}
          <div className="flex flex-col sm:flex-row gap-4 mt-16 justify-center">
            <Link to={createPageUrl("Actualites")} className="bg-[#62967A] text-white px-8 py-4 text-xl font-semibold transform -skew-x-12 hover:bg-[#527a5f] transition-colors cursor-pointer">
              <span className="block skew-x-12">{t('nav.news')}</span>
            </Link>
            <Link to={createPageUrl("Projets")} className="bg-[#5FB1DE] text-white px-8 py-4 text-xl font-semibold transform -skew-x-12 hover:bg-[#4a9bc4] transition-colors cursor-pointer">
              <span className="block skew-x-12">{t('nav.projects')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
