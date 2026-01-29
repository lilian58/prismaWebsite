import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../translation/useTranslation';

const allImages = [
  '/images/elevage.jpg',
  '/images/contact.png',
  '/images/plante3.jpg',
  '/images/porc.jpg',
  '/images/porc2.jpg',
  '/images/jeunes/jeune.jpg',
  '/images/elevage3.jpg',
  '/images/vache.jpg',
  '/images/plante5.jpg',
  '/images/arbre.jpg',
  '/images/vache2.jpg',
  '/images/arbre3.jpg',
  '/images/contact3.jpg',
  '/images/elevage4.jpg',
  '/images/porc3.jpg',
  '/images/graine4.jpg',
  '/images/jeunes/enfant4.jpg',
];

// Créer des sets de 4 images pour le carrousel
const imageSets: string[][] = [];
for (let i = 0; i < allImages.length; i += 4) {
    imageSets.push(allImages.slice(i, i + 4));
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0
  }
};


export default function HeroSection() {
   const { t } = useTranslation();
   const [currentImageSetIndex, setCurrentImageSetIndex] = useState(0);
   const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

   const taglines = [
      { text: t('hero.taglines.youth'), colorClass: 'text-[#DF851A]' },
      { text: t('hero.taglines.women'), colorClass: 'text-[#5FB1DE]' },
      { text: t('hero.taglines.nature'), colorClass: 'text-[#62967A]' },
      { text: t('hero.taglines.autonomy'), colorClass: 'text-[#1E22AA]' },
      { text: t('hero.taglines.children'), colorClass: 'text-[#528429]' },
   ];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 7000);
    return () => clearInterval(imageTimer);
  }, []);

  useEffect(() => {
    const taglineTimer = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(taglineTimer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] md:h-screen">
      {/* Mobile: Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 md:hidden">
        <AnimatePresence>
          <motion.img
            key={currentImageSetIndex}
            src={allImages[currentImageSetIndex]}
            alt={`Communauté PRISMA ${currentImageSetIndex}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#5FB1DE]/30 to-[#DF851A]/30 pointer-events-none"></div>
      </div>

      {/* Desktop & Tablet: Side by side layout */}
      <div className="hidden md:flex h-full">
        {/* Text Content */}
        <div className="w-1/2 lg:w-1/3 flex flex-col justify-center p-12 lg:p-16 bg-white/90 backdrop-blur-[100px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1E22AA] mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-2xl lg:text-3xl font-semibold text-slate-800 mb-8 leading-snug">
              {t('hero.subtitle')}
            </p>
            <p className="text-xl lg:text-2xl text-slate-600 mb-6 font-poppins">
              {t('hero.engaged')}
            </p>
            
            <div className="w-full h-32 relative">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTaglineIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`${taglines[currentTaglineIndex].colorClass} text-3xl lg:text-5xl font-bold p-5`}
                >
                  {taglines[currentTaglineIndex].text}
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Images Grid */}
        <div className="flex-1 relative">
          <AnimatePresence>
            {/* Tablet Grid (1 row, 3 columns) */}
            <motion.div
                key={`${currentImageSetIndex}-tablet`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full grid grid-cols-3 gap-2 p-2 md:grid lg:hidden"
            >
                {imageSets[currentImageSetIndex].slice(0, 3).map((src, index) => (
                    <motion.div
                        key={index}
                        variants={imageVariants}
                        className="w-full h-full"
                    >
                        <img
                            src={src}
                            alt={`Communauté PRISMA ${currentImageSetIndex}-${index}`}
                            className="w-full h-full object-cover border-2 border-white rounded-lg shadow-md"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Desktop Grid (1 row, 4 columns) */}
            <motion.div
                key={`${currentImageSetIndex}-desktop`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full grid grid-cols-4 gap-2 p-2 hidden lg:grid"
            >
                {imageSets[currentImageSetIndex].slice(0, 4).map((src, index) => (
                    <motion.div
                        key={index}
                        variants={imageVariants}
                        className="w-full h-full"
                    >
                        <img
                            src={src}
                            alt={`Communauté PRISMA ${currentImageSetIndex}-${index}`}
                            className="w-full h-full object-cover border-2 border-white rounded-lg shadow-md"
                        />
                    </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#5FB1DE]/[0.45] to-[#DF851A]/[0.35] pointer-events-none"></div>
        </div>
      </div>

      {/* Mobile: Text Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center p-0 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/20 backdrop-blur-md rounded-xl p-6 text-center w-full max-w-md"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-2xl font-semibold text-white/90 mb-8 leading-snug">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl text-white/80 mb-6 font-poppins">
            {t('hero.engaged')}
          </p>
          
          <div className="w-full h-24 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTaglineIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-white text-4xl font-bold"
              >
                {taglines[currentTaglineIndex].text}
              </motion.h2>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
