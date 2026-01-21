import HeroSection from "../components/home/HeroSection";
import FormationJeunesSection from "../components/formation/FormationJeunesSection";
import MediaCarousel from "../components/home/MediaCarousel";
import ContactSection from "../components/home/ContactSection";

export default function FormationJeunes() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FormationJeunesSection />
      <section className="pt-4 bg-white h-screen">
        <div className="w-full h-screen px-0">
          <MediaCarousel />
        </div>
      </section>
      <ContactSection />
    </div>
  );
}