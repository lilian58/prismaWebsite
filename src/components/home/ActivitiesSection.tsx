import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useTranslation } from '../translation/useTranslation';

interface Activity {
    id: number;
    bgColor: string;
    textColor: string;
    buttonColor: string;
    title: string;
    description: string;
    imageUrl: string;
    imagePosition: 'left' | 'right';
    linkTo: string;
    exploreText: string;
}

const ActivityCard = ({ activity }: { activity: Activity }) => {
    const isImageLeft = activity.imagePosition === 'left';
    const contentOrder = isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse';
    const initialRotate = isImageLeft ? { bg: -6, img: 3 } : { bg: 6, img: -3 };
    const hoverRotate = isImageLeft ? { bg: -8, img: 0 } : { bg: 8, img: 0 };
    
    return (
        <div className={`w-full overflow-hidden ${activity.bgColor}`}>
            <div className={`max-w-7xl mx-auto flex flex-col ${contentOrder} items-center gap-12 lg:gap-20 py-12 px-4 sm:px-6 lg:px-8`}>
                
                <div className="w-full md:w-5/12 flex justify-center">
                    <motion.div
                        className="relative w-64 h-80 sm:w-72 sm:h-96"
                        whileHover="hover"
                        initial="initial"
                    >
                        <motion.div
                            className={`absolute inset-0 ${activity.buttonColor} rounded-lg`}
                            variants={{
                                initial: { rotate: initialRotate.bg },
                                hover: { rotate: hoverRotate.bg, scale: 1.05 }
                            }}
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        />
                        <motion.img
                            src={activity.imageUrl}
                            alt={activity.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
                            variants={{
                                initial: { rotate: initialRotate.img },
                                hover: { rotate: hoverRotate.img, scale: 1.05 }
                            }}
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        />
                    </motion.div>
                </div>

                <div className="w-full md:w-7/12 flex flex-col items-start space-y-6 text-center md:text-left">
                    <h3 className={`text-2xl md:text-3xl font-bold ${activity.textColor}`}>{activity.title}</h3>
                    <p className="text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">{activity.description}</p>
                    <Link to={createPageUrl(activity.linkTo)}>
                        <motion.div
                            className={`${activity.buttonColor} text-white font-semibold py-3 px-8 rounded-lg shadow-md self-center md:self-start text-sm uppercase tracking-wider cursor-pointer`}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.1, y: 0, transition: { repeat: 0, duration: 0.2 } }}
                        >
                            {activity.exploreText}
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default function ActivitiesSection() {
    const { t } = useTranslation();
    const text = t('activities.mainTitle');

    const activitiesData: Activity[] = [
        {
            id: 1,
            bgColor: "bg-[#FEFBF5]",
            textColor: "text-[#DF851A]",
            buttonColor: "bg-[#DF851A]",
            title: t('activities.women.title'),
            description: t('activities.women.description'),
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=1000&auto=format&fit=crop",
            imagePosition: "left",
            linkTo: "BienEtreFemme",
            exploreText: t('activities.explore')
        },
        {
            id: 2,
            bgColor: "bg-[#E9F7FD]",
            textColor: "text-[#5FB1DE]",
            buttonColor: "bg-[#5FB1DE]",
            title: t('activities.youth.title'),
            description: t('activities.youth.description'),
            imageUrl: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=800&h=1000&auto=format&fit=crop",
            imagePosition: "right",
            linkTo: "FormationJeunes",
            exploreText: t('activities.explore')
        },
        {
            id: 3,
            bgColor: "bg-[#EAF7EE]",
            textColor: "text-[#62967A]",
            buttonColor: "bg-[#62967A]",
            title: t('activities.nature.title'),
            description: t('activities.nature.description'),
            imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&h=1000&auto=format&fit=crop",
            imagePosition: "left",
            linkTo: "ActivitesSocioeconomiques",
            exploreText: t('activities.explore')
        }
    ];

    return (
        <section className="relative bg-white">
            {/* Mobile Title Section */}
            <div className="block md:hidden bg-white text-center py-12">
                <h2 className="text-4xl font-bold text-[#1E22AA] uppercase tracking-wider">{text}</h2>
            </div>

            {/* Tablet Title for Tablet View */}
            <div className="hidden md:block lg:hidden text-center pt-16 pb-8">
                <h2 className="text-4xl font-bold text-[#1E22AA] uppercase tracking-wider">{text}</h2>
            </div>
            
            <div className="flex items-stretch">
                <div className="hidden lg:flex w-32 items-center justify-center overflow-hidden border-r-2 border-slate-100">
                    <div className="vertical-marquee">
                        {/* Block 1 */}
                        <div className="flex flex-col items-center justify-center py-0">
                            {text.split('').map((char, i) => (
                                <span key={`t1-${i}`} className="text-8xl font-bold text-[#1E22AA] leading-none tracking-wider">{char}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    {activitiesData.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}