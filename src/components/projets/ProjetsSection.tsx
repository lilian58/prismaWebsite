import { motion } from 'framer-motion';
import { TrendingUp, ArrowDown } from 'lucide-react';

const projetsData = [
  {
    title: "PRISMA veut s'étendre au TOGO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est Mauris eu justo malesuada feugiat ipsum ut sagittis metus.",
  },
  {
    title: "PRISMA veut s'étendre au SENEGAL",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lectus lacus. Etiam aliquet justo dolor, at feugiat tortor ultricies vitae. Aliquam porta tempor tellus in eu euismod est Mauris eu justo malesuada feugiat ipsum ut sagittis metus.",
  },
];

export default function ProjetsSection() {
  return (
    <section className="bg-gray-50 pb-16">
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
            DÉCOUVRIR TOUS NOS PROJETS
        </motion.h2>
      </div>
      
      {/* Mobile & Tablet: Image Section */}
      <div className="my-8 md:my-12 lg:hidden">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&h=800&auto=format&fit=crop" alt="Groupe de personnes heureuses" className="w-full h-auto object-cover" />
      </div>

      {/* Desktop: Side by side layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 py-16">
        {/* Image */}
        <div className="w-1/2 pr-12">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&h=1000&auto=format&fit=crop" alt="Groupe de personnes heureuses" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        
        {/* Text Content */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="space-y-12">
            {projetsData.map((projet, index) => (
              <div key={index} className="flex items-start space-x-6">
                <TrendingUp className="w-12 h-12 text-[#5FB1DE] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#5FB1DE] mb-4">{projet.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{projet.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet: Text Content Section */}
      <div className="max-w-md md:max-w-2xl mx-auto px-4 lg:hidden">
        <div className="space-y-8 md:space-y-12">
          {projetsData.map((projet, index) => (
            <div key={index} className="flex items-start space-x-4 md:space-x-6">
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#5FB1DE] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#5FB1DE]">{projet.title}</h3>
                <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">{projet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E22AA] uppercase"
          animate={{
            textShadow: [
              "0 0 4px rgba(30, 34, 170, 0.4)",
              "0 0 12px rgba(30, 34, 170, 0.8)",
              "0 0 4px rgba(30, 34, 170, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Voulez vous faire partie de l'aventure ?
        </motion.h2>
        <motion.div
          className="flex justify-center mt-6"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-12 h-12 lg:w-16 lg:h-16 text-[#1E22AA]" />
        </motion.div>
      </div>
    </section>
  );
}