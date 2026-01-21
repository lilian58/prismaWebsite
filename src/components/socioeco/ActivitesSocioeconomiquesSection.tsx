import { motion } from 'framer-motion';

export default function ActivitesSocioeconomiquesSection() {
  return (
    <section className="bg-[#EAF7EE]">
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
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#62967A] rounded-lg opacity-60 transform rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#62967A] rounded-lg opacity-40 transform -rotate-12"></div>
            <div className="relative bg-white p-3 rounded-lg shadow-lg transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=300&h=450&auto=format&fit=crop" 
                alt="Plantation d'arbres" 
                className="w-64 h-96 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-[#1E22AA] leading-tight">
            Plantation des arbres et aménagements des propriétés privées
          </h3>
        </div>

        <div className="mb-8">
          <p className="text-slate-700 text-sm leading-relaxed text-center">
            PRISMA cultive un avenir plus vert en plantant des arbres et en valorisant chaque espace privé, transformant jardins et terrains en havres de vie où la nature s'épanouit et inspire le changement.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Aménagement des propriétés (courbes antiérosives herbes fourragères et fixatrices)
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Plantation d'arbres forestiers, agroforestiers et fruitiers
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#62967A] rounded-lg opacity-60 transform rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#62967A] rounded-lg opacity-40 transform -rotate-12"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=350&h=500&auto=format&fit=crop" 
                  alt="Plantation d'arbres" 
                  className="w-80 h-[450px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1E22AA] leading-tight">
              Plantation des arbres et aménagements des propriétés privées
            </h3>
          </div>

          <div className="mb-12 text-center">
            <p className="text-slate-700 text-base leading-relaxed max-w-lg mx-auto">
              PRISMA cultive un avenir plus vert en plantant des arbres et en valorisant chaque espace privé, transformant jardins et terrains en havres de vie où la nature s'épanouit et inspire le changement.
            </p>
          </div>

          <div className="space-y-6 max-w-lg mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-base leading-relaxed">
                Aménagement des propriétés (courbes antiérosives herbes fourragères et fixatrices)
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-base leading-relaxed">
                Plantation d'arbres forestiers, agroforestiers et fruitiers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 py-24">
        <div className="w-1/2 flex justify-center items-start pr-16">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#62967A] rounded-lg opacity-60 transform rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#62967A] rounded-lg opacity-40 transform -rotate-12"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=600&auto=format&fit=crop" 
                alt="Plantation d'arbres" 
                className="w-96 h-[550px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-[#1E22AA] leading-tight">
              Plantation des arbres et aménagements des propriétés privées
            </h3>
          </div>

          <div className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed">
              PRISMA cultive un avenir plus vert en plantant des arbres et en valorisant chaque espace privé, transformant jardins et terrains en havres de vie où la nature s'épanouit et inspire le changement.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Aménagement des propriétés (courbes antiérosives herbes fourragères et fixatrices)
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#1E22AA] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Plantation d'arbres forestiers, agroforestiers et fruitiers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}