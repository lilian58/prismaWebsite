
import HeroSection from "../components/home/HeroSection";
import ActualitesCarousel from "../components/actualites/ActualitesCarousel";
import MediaCarousel from "../components/home/MediaCarousel";
import NewsletterForm from "../components/home/NewsletterForm";
import ContactSection from "../components/home/ContactSection";

export default function Actualites() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ActualitesCarousel />
      
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