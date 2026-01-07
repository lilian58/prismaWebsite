import React from 'react';
import { motion } from 'framer-motion';

export default function FormationJeunesSection() {
  return (
    <section className="bg-[#E9F7FD]">
      <div className="bg-[#1E22AA] py-8 text-center overflow-x-hidden">
        <motion.h2 
          className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider whitespace-nowrap"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          AGIR POUR GUERIR, AGIR POUR PREVENIR
        </motion.h2>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-md mx-auto px-4 py-8">
        {/* Image avec effet de superposition */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            {/* Formes géométriques en arrière-plan */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#5FB1DE] rounded-lg opacity-60 transform rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#5FB1DE] rounded-lg opacity-40 transform -rotate-12"></div>
            
            {/* Image principale */}
            <div className="relative bg-white p-3 rounded-lg shadow-lg transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=300&h=400&auto=format&fit=crop" 
                alt="Jeunes en formation" 
                className="w-64 h-80 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Titre principal */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-[#1E22AA] leading-tight">
            Encadrements des enfants/<br />
            jeunes-<br />
            Aider pour l'émergence des talents<br />
            des enfants et jeunes- appui aux<br />
            projets des jeunes chômeurs
          </h3>
        </div>

        {/* Description principale */}
        <div className="mb-8">
          <p className="text-slate-700 text-sm leading-relaxed text-center">
            PRISMA s'engage à guider et inspirer chaque enfant et jeune, cultivant leurs talents 
            naissants et les soutenant dans la concrétisation de leurs projets ; ensemble, 
            nous ouvrons les portes de l'opportunité et bâtissons des trajectoires porteuses d'avenir.
          </p>
        </div>

        {/* Liste des actions */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Soutien des activités sportives colonies des vacances- encadrement pendant les vacances
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Appui aux microprojets des projets des ONG des jeunes
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Appui aux jeunes pour la scolarisation à l'étranger ou à la participation à des séminaires formatrices
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Image avec effet de superposition */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              {/* Formes géométriques en arrière-plan */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#5FB1DE] rounded-lg opacity-60 transform rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#5FB1DE] rounded-lg opacity-40 transform -rotate-12"></div>
              
              {/* Image principale */}
              <div className="relative bg-white p-4 rounded-lg shadow-lg transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&h=500&auto=format&fit=crop" 
                  alt="Jeunes en formation" 
                  className="w-80 h-96 object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1E22AA] leading-tight">
              Encadrements des enfants/jeunes-<br />
              Aider pour l'émergence des talents<br />
              des enfants et jeunes- appui aux<br />
              projets des jeunes chômeurs
            </h3>
          </div>

          {/* Description principale */}
          <div className="mb-12 text-center">
            <p className="text-slate-700 text-base leading-relaxed max-w-lg mx-auto">
              PRISMA s'engage à guider et inspirer chaque enfant et jeune, cultivant leurs talents 
              naissants et les soutenant dans la concrétisation de leurs projets ; ensemble, 
              nous ouvrons les portes de l'opportunité et bâtissons des trajectoires porteuses d'avenir.
            </p>
          </div>

          {/* Liste des actions */}
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-base leading-relaxed">
                Soutien des activités sportives colonies des vacances- encadrement pendant les vacances
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-base leading-relaxed">
                Appui aux microprojets des projets des ONG des jeunes
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-base leading-relaxed">
                Appui aux jeunes pour la scolarisation à l'étranger ou à la participation à des séminaires formatrices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 py-16">
        {/* Image Section */}
        <div className="w-1/2 flex justify-center items-start pr-16">
          <div className="relative">
            {/* Formes géométriques en arrière-plan */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#5FB1DE] rounded-lg opacity-60 transform rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#5FB1DE] rounded-lg opacity-40 transform -rotate-12"></div>
            
            {/* Image principale */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop" 
                alt="Enfant souriant" 
                className="w-96 h-[500px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-1/2 flex flex-col justify-center">
          {/* Titre principal */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-[#1E22AA] leading-tight">
              Encadrements des enfants/jeunes- Aider<br />
              pour l'émergence des talents des enfants<br />
              et jeunes- appui aux projets des jeunes<br />
              chômeurs
            </h3>
          </div>

          {/* Description principale */}
          <div className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed">
              PRISMA s'engage à guider et inspirer chaque enfant et jeune, 
              cultivant leurs talents naissants et les soutenant dans la 
              concrétisation de leurs projets ; ensemble, nous ouvrons les portes 
              de l'opportunité et bâtissons des trajectoires porteuses d'avenir.
            </p>
          </div>

          {/* Liste des actions */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Soutien des activités sportives colonies des vacances-
                encadrement pendant les vacances
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Appui aux microprojets des projets des OBC des jeunes
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Appui aux jeunes pour le scholarship à l'étranger ou à la
                participation à des séminaires formateurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}