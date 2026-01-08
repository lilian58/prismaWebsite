
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Realisation {
  id: number;
  title: string;
  description: string;
  image: string;
}

const realisationsData: Realisation[] = [
  {
    id: 1,
    title: "Dons de bétails aux membres des OBC",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Formation des jeunes entrepreneurs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Soutien aux femmes entrepreneures",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Plantation d'arbres communautaire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Éducation et sensibilisation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1517486808906-6538cb3f3ee5?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Développement rural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Santé communautaire",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Microfinance et coopératives",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est. Mauris eu justo malesuada, feugiat ipsum ut, sagittis metus. Morbi ut magna et ante varius blandit. In aliquet laoreet risus. Mauris diam dui, luctus non quam vitae, mollis viverra felis.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=800&h=600&auto=format&fit=crop"
  }
];

// Grouper les réalisations par paires (2 par page)
const groupedRealisations: Realisation[][] = [];
for (let i = 0; i < realisationsData.length; i += 2) {
  groupedRealisations.push(realisationsData.slice(i, i + 2));
}

export default function RealisationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % groupedRealisations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + groupedRealisations.length) % groupedRealisations.length);
  };

  return (
    <section className="bg-white">
      <div className="bg-[#1E22AA] py-8 text-center overflow-x-hidden">
        <motion.h2 
          className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-wider whitespace-nowrap"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          DÉCOUVRIR TOUTES NOS RÉALISATIONS
        </motion.h2>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Affichage vertical pour tous les écrans */}
              <div className="flex flex-col items-center space-y-16 md:space-y-20 lg:space-y-24">
                {groupedRealisations[currentIndex].map((realisation) => (
                  <div key={realisation.id} className="flex flex-col w-full max-w-sm md:max-w-2xl lg:max-w-3xl">
                    <img 
                      src={realisation.image} 
                      alt={realisation.title} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover mb-6 md:mb-8"
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] mb-6 md:mb-8">{realisation.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">{realisation.description}</p>
                    <div className="mt-6 md:mt-8">
                      <button className="bg-[#DF851A] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#c97515] transition-colors">
                        Voir plus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <button 
            onClick={prevSlide}
            className="bg-gray-800 text-white rounded-full p-3 lg:p-4 shadow-lg hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
          
          {/* Pagination numérotée */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {groupedRealisations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full transition-all duration-300 font-semibold text-sm lg:text-base ${
                  index === currentIndex 
                    ? 'bg-[#1E22AA] text-white shadow-lg scale-110' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
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
    </section>
  );
}