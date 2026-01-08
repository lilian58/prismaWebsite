
import HeroSection from "../components/home/HeroSection";
import ProjetsSection from "../components/projets/ProjetsSection";
import MediaCarousel from "../components/home/MediaCarousel";
import NewsletterForm from "../components/home/NewsletterForm";
import ContactSection from "../components/home/ContactSection";


export default function Projets() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProjetsSection />
      <section className="pt-4 bg-white">
        <div className="w-full px-0">
          <MediaCarousel />
        </div>
      </section>
      <NewsletterForm />
      <ContactSection />
    </div>
  );
}