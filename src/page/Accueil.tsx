
import TopBar from '../components/home/TopBar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ActivitiesSection from '../components/home/ActivitiesSection';
import ImpactSection from '../components/home/ImpactSection';
import ContactSection from '../components/home/ContactSection';
import FloatingNewsletterButton from '../components/home/FloatingNewsletterButton';

export default function Accueil() {
  return (
    <div className="bg-white">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        .marquee {
          display: inline-block;
          padding-right: 50%; /* create a gap */
          animation: marquee 20s linear infinite;
        }
        @keyframes vertical-marquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .vertical-marquee {
          animation: vertical-marquee 40s linear infinite;
        }
      `}</style>
      <TopBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="activities">
        <ActivitiesSection />
      </div>
      <div id="partners">
        <ImpactSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FloatingNewsletterButton />
    </div>
  );
}