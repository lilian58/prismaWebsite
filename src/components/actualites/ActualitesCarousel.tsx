import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const actualitesData = [
  {
    id: 1,
    date: "01/01/01",
    category: "SOCIÉTÉ & DÉVELOPPEMENT",
    title: "ACCOMPAGNEMENT DES JEUNES FEMMES ENTREPRENEURES DANS LE SECTEUR AGRICOLE",
    description: "PRISMA a lancé un programme d'accompagnement des jeunes femmes entrepreneures dans le secteur agricole. Cette initiative vise à soutenir les femmes dans le développement de leurs activités agricoles en leur fournissant une formation technique, un accès au financement et un accompagnement personnalisé. Le programme comprend des sessions de formation sur les techniques agricoles modernes, la gestion d'entreprise et le marketing des produits agricoles. Les participantes bénéficient également d'un mentorat individuel et d'un accès à un réseau de partenaires financiers. Cette initiative s'inscrit dans notre mission de promotion de l'autonomisation économique des femmes et de développement durable du secteur agricole au Burundi.",
    image: "/images/femme/femme3.jpg"
  },
  {
    id: 2,
    date: "15/12/24",
    category: "ENVIRONNEMENT",
    title: "CAMPAGNE DE REBOISEMENT COMMUNAUTAIRE",
    description: "PRISMA organise une grande campagne de reboisement avec la participation active de la communauté locale. Plus de 500 arbres ont été plantés dans différentes zones de la région, contribuant à la lutte contre la déforestation et au changement climatique. Cette initiative mobilise les jeunes, les femmes et les leaders communautaires dans un effort collectif pour préserver notre environnement naturel.",
    image: "/images/arbre2.jpg"
  },
  {
    id: 3,
    date: "10/12/24",
    category: "FORMATION",
    title: "FORMATION PROFESSIONNELLE POUR LES JEUNES",
    description: "Lancement d'un nouveau programme de formation professionnelle destiné aux jeunes de 18 à 35 ans. Ce programme couvre plusieurs domaines incluant l'informatique, l'artisanat, l'agriculture moderne et l'entrepreneuriat. L'objectif est de doter les jeunes des compétences nécessaires pour s'insérer dans le marché du travail ou créer leurs propres entreprises.",
    image: "/images/jeunes/enfant1.jpg"
  }
];

export default function ActualitesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % actualitesData.length);
    setIsExpanded(false); // Reset expansion when changing slides
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + actualitesData.length) % actualitesData.length);
    setIsExpanded(false); // Reset expansion when changing slides
  };

  const currentActualite = actualitesData[currentIndex];

  return (
    <div className="bg-gray-50">
       <div className="bg-[#1E22AA] py-8 text-center overflow-x-hidden">
        <motion.h2 
          className="text-white text-2xl font-bold uppercase tracking-wider whitespace-nowrap"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
            DÉCOUVREZ TOUTES NOS ACTUALITÉS
        </motion.h2>
      </div>

      <div className="py-8 md:py-12 lg:py-16">
        <div className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto px-4 lg:px-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 lg:h-96">
              <img 
                src={currentActualite.image} 
                alt={currentActualite.title}
                className="w-full h-full object-cover"
              />
              {/* Date badge */}
              <div className="absolute bottom-4 left-4 bg-[#1E22AA] text-white px-3 py-1 rounded text-sm font-medium">
                {currentActualite.date}
              </div>
              {/* Category badge */}
              <div className="absolute bottom-4 right-4 bg-[#5FB1DE] text-white px-3 py-1 rounded text-xs font-medium">
                {currentActualite.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 lg:p-12">
              <h3 className="text-[#1E22AA] font-bold text-lg md:text-xl lg:text-2xl mb-4 lg:mb-6 leading-tight">
                {currentActualite.title}
              </h3>
              
              <div className="relative">
                <p className={`text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-300 ${
                  isExpanded ? '' : 'line-clamp-4 lg:line-clamp-6'
                }`}>
                  {currentActualite.description}
                </p>
                
                {/* Voir plus button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-[#1E22AA] text-sm md:text-base lg:text-lg font-semibold mt-3 lg:mt-4 hover:text-[#161a88] transition-colors"
                >
                  {isExpanded ? 'Voir moins' : 'Voir plus'}
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 md:mt-8 lg:mt-12">
            <button 
              onClick={prevSlide}
              className="bg-gray-800 text-white rounded-full p-3 lg:p-4 shadow-lg hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2 lg:space-x-3">
              {actualitesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#1E22AA]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="bg-gray-800 text-white rounded-full p-3 lg:p-4 shadow-lg hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}