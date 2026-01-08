import HeroSection from "../components/home/HeroSection";
import RealisationsSection from "../components/realisations/RealisationsSection";
import NewsletterForm from "../components/home/NewsletterForm";
import MediaCarousel from "../components/home/MediaCarousel";
import ContactSection from "../components/home/ContactSection";

export default function Realisations() {
  return (
    <div className="bg-white">
      <HeroSection />
      <RealisationsSection />
      <NewsletterForm />
      <section className="pt-4 bg-white">
        <div className="w-full px-0">
          <MediaCarousel />
        </div>
      </section>
      <ContactSection />
    </div>
  );
}