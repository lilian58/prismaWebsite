import React from "react";
import HeroSection from "../components/home/HeroSection";
import ActivitesSocioeconomiquesSection from "../components/socioeco/ActivitesSocioeconomiquesSection";
import MediaCarousel from "../components/home/MediaCarousel";
import ContactSection from "../components/home/ContactSection";

export default function ActivitesSocioeconomiques() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ActivitesSocioeconomiquesSection />
      <section className="pt-4 bg-white">
        <div className="w-full px-0">
          <MediaCarousel />
        </div>
      </section>
      <ContactSection />
    </div>
  );
}