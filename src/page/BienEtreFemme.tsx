import React from "react";
import HeroSection from "../components/home/HeroSection";
import BienEtreFemmeSection from "../components/bienetre/BienEtreFemmeSection";
import MediaCarousel from "../components/home/MediaCarousel";
import ContactSection from "../components/home/ContactSection";

export default function BienEtreFemme() {
  return (
    <div className="bg-white">
      <HeroSection />
      <BienEtreFemmeSection />
      <section className="pt-4 bg-white">
        <div className="w-full px-0">
          <MediaCarousel />
        </div>
      </section>
      <ContactSection />
    </div>
  );
}