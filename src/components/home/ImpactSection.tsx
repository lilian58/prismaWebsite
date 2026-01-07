
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowDown } from 'lucide-react';
import MediaCarousel from './MediaCarousel';
import NewsletterForm from './NewsletterForm';
import { useTranslation } from '../translation/TranslationContext';

const ImpactStat = ({ value, label, color, circlePercentage = 80 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const countRef = useRef(null);

    useEffect(() => {
        if (isInView) {
            animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(latest) {
                    if (countRef.current) {
                        countRef.current.textContent = `+ ${Math.round(latest)}`;
                    }
                }
            });
        }
    }, [isInView, value]);

    const circumference = 2 * Math.PI * 45; // radius is 45

    return (
        <div ref={ref} className="flex flex-col items-center space-y-4">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={color}
                        strokeWidth="10"
                        fill="transparent"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={isInView ? { strokeDashoffset: circumference * (1 - circlePercentage / 100) } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                </svg>
                <span ref={countRef} className="absolute text-3xl font-bold text-[#1E22AA]">
                    +0
                </span>
            </div>
            <p className="text-lg font-semibold text-[#1E22AA]">{label}</p>
        </div>
    );
};

export default function ImpactSection() {
    const { t } = useTranslation();

    const stats = [
        { value: 100, label: t('impact.stat1'), color: "#DF851A", circlePercentage: 80 },
        { value: 100, label: t('impact.stat2'), color: "#5FB1DE", circlePercentage: 70 },
        { value: 100, label: t('impact.stat3'), color: "#62967A", circlePercentage: 90 },
    ];

    return (
        <>
            <section className="bg-[#FBFBFB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-4xl font-bold text-center text-[#1E22AA] mb-12 uppercase">
                        {t('impact.mainTitle')}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-y-12 md:gap-x-8">
                        {stats.map((stat, index) => (
                            <ImpactStat key={index} {...stat} />
                        ))}
                    </div>
                </div>
                <Link to={createPageUrl("Realisations")} className="block bg-[#1E22AA] text-white text-center py-6 hover:bg-[#161a88] transition-colors">
                    <p className="text-xl font-semibold italic">{t('impact.allAchievements')}</p>
                </Link>
            </section>
            
            <section className="py-12 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-[#1E22AA] mb-8 uppercase">
                        {t('impact.partnersTitle')}
                    </h2>
                    <div className="flex justify-center items-center">
                         <img src="https://i.ibb.co/b3KchY4/agrifresh.png" alt="Agrifresh Group Logo" className="h-16" />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white overflow-x-hidden">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-[#1E22AA] text-center whitespace-nowrap relative"
                    style={{ 
                        fontFamily: 'Syncopate, monospace',
                        textShadow: "0 0 10px rgba(30, 34, 170, 0.3), 0 0 20px rgba(30, 34, 170, 0.2)",
                        filter: "drop-shadow(0 0 5px rgba(30, 34, 170, 0.2))"
                    }}
                    animate={{ x: ["5%", "-5%"] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                >
                    {t('impact.familyTitle')}
                </motion.h2>
                <motion.div
                    className="flex justify-center mt-6"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-12 h-12 text-[#1E22AA]" />
                </motion.div>
            </section>

            <section className="pt-4 bg-white">
                <div className="w-full px-0">
                    <MediaCarousel />
                </div>
            </section>

            <NewsletterForm />
        </>
    );
}
