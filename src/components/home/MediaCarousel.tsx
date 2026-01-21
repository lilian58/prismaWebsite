import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const mediaItems = [
    { type: 'image', src: '/images/activite-socioeconomique/nature.jpg' },
    { type: 'image', src: '/images/femme/femme4.jpg' },
    { type: 'image', src: '/images/arbre.jpg' },
    { type: 'image', src: '/images/graine.jpg' },
    { type: 'image', src: '/images/porc3.jpg' },
    { type: 'image', src: '/images/activite-socioeconomique/plantation.jpg' },
    { type: 'image', src: '/images/vache.jpg' },
    { type: 'image', src: '/images/plante5.jpg' },
    { type: 'image', src: '/images/elevage.jpg' },
];

export default function MediaCarousel() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % mediaItems.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    return (
        <div className="w-full ">
            {/* Mobile: Single Image Carousel */}
            <div className="block md:hidden">
                <div className="relative h-75 w-full">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full rounded-lg overflow-hidden"
                    >
                        <img 
                            src={mediaItems[activeIndex].src} 
                            alt={`Media ${activeIndex}`} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        {mediaItems[activeIndex].type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PlayCircle className="w-16 h-16 text-white/70" />
                            </div>
                        )}
                    </motion.div>
                    
                    {/* Navigation buttons */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Desktop: Multiple Images */}
            <div className="hidden md:block ">
                <div className="flex h-screen gap-2 group">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative h-full flex-1 cursor-pointer rounded-lg overflow-hidden ${index >= 3 ? 'hidden lg:flex' : 'flex'}`}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            animate={{ flexGrow: hoveredIndex === index ? 4 : 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                            <img src={item.src} alt={`Media ${index}`} className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-white/70 opacity-0 transition-opacity duration-300" style={{opacity: hoveredIndex === index ? 1 : 0}} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="w-full bg-[#1E22AA] py-3 mt-0">
                <div className="flex justify-center space-x-3">
                    {mediaItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                activeIndex === index ? 'bg-white' : 'bg-white/50'
                            } ${index >= 3 ? 'hidden lg:inline-block' : 'inline-block'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}