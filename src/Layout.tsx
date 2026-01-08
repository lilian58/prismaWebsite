
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import FloatingTranslator from "./components/translation/FloatingTranslator";
import { TranslationProvider } from "./components/translation/TranslationContext";
import { useTranslation } from "./components/translation/useTranslation";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  location: Location;
  onClick: () => void;
}

interface DropdownLinkProps {
  to: string;
  children: React.ReactNode;
  location: Location;
  onClick?: () => void;
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  location: Location;
  onClick: () => void;
}

interface LayoutContentProps {
  children: React.ReactNode;
  currentPageName: string;
}

interface LayoutProps {
  children: React.ReactNode;
  currentPageName: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, location, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-sm font-poppins font-medium transition-colors ${
      location.pathname === to
        ? 'text-[#1E22AA]'
        : 'text-slate-700 hover:text-[#1E22AA]'
    }`}
  >
    {children}
  </Link>
);

const DropdownLink: React.FC<DropdownLinkProps> = ({ to, children, location, onClick = () => {} }) => (
  <div className="px-4 py-2 hover:bg-[#1E22AA] hover:text-white transition-colors cursor-pointer">
    <Link
      to={to}
      onClick={onClick}
      className={`block ${location.pathname === to ? 'text-white font-semibold' : 'text-white'}`}
    >
      {children}
    </Link>
  </div>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, location, onClick }) => (
   <Link
    to={to}
    onClick={onClick}
    className={`block py-2 px-4 text-sm rounded-md ${
      location.pathname === to
        ? 'bg-[#1E22AA] text-white'
        : 'text-slate-700 hover:bg-slate-100'
    }`}
  >
    {children}
  </Link>
);

function LayoutContent({ children, currentPageName }: LayoutContentProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SEO Metadata management
  useEffect(() => {
    const updatePageMetadata = () => {
      const getPageMetadata = () => {
        const baseData = {
          siteName: "PRISMA - Association Burundaise",
          description: "PRISMA est une ASBL burundaise engagée dans la promotion des initiatives socioéconomiques, la formation des jeunes et le bien-être des femmes au Burundi.",
          keywords: "PRISMA, association burundaise, ASBL Burundi, formation jeunes, bien-être femmes, initiatives socioéconomiques, ONG Burundi, développement communautaire"
        };

        switch (currentPageName) {
          case "Accueil":
            return {
              title: "PRISMA - Association Burundaise pour le Développement Socioéconomique",
              description: "PRISMA est une ASBL burundaise dédiée à la promotion des initiatives socioéconomiques, la formation des jeunes chômeurs et la défense des droits des femmes au Burundi.",
              keywords: baseData.keywords + ", accueil, communauté, développement durable"
            };
          case "Actualites":
            return {
              title: "Actualités - PRISMA Association Burundaise",
              description: "Découvrez les dernières actualités et nouvelles de PRISMA, nos projets en cours et nos réalisations au service de la communauté burundaise.",
              keywords: baseData.keywords + ", actualités, nouvelles, projets, réalisations"
            };
          case "Projets":
            return {
              title: "Projets - PRISMA Association Burundaise", 
              description: "Explorez les projets d'expansion et les initiatives futures de PRISMA pour le développement socioéconomique au Burundi et en Afrique.",
              keywords: baseData.keywords + ", projets, expansion, développement, Togo, Sénégal"
            };
          case "FormationJeunes":
            return {
              title: "Formation des Jeunes - PRISMA Burundi",
              description: "PRISMA accompagne les jeunes burundais dans leur formation et l'émergence de leurs talents à travers des programmes d'encadrement et de soutien aux projets.",
              keywords: baseData.keywords + ", formation jeunes, encadrement, talents, projets jeunes, chômage"
            };
          case "BienEtreFemme":
            return {
              title: "Bien-être des Femmes - PRISMA Association",
              description: "PRISMA défend les droits des femmes et des enfants au Burundi, promouvant leur bien-être et leur épanouissement dans la société.",
              keywords: baseData.keywords + ", droits femmes, bien-être, enfants, défense droits, épanouissement"
            };
          case "ActivitesSocioeconomiques":
            return {
              title: "Activités Socioéconomiques - PRISMA Burundi",
              description: "Découvrez nos activités de plantation d'arbres, d'aménagement des propriétés et de protection de l'environnement au Burundi.",
              keywords: baseData.keywords + ", plantation arbres, environnement, aménagement, écologie, nature"
            };
          case "Realisations":
            return {
              title: "Réalisations - PRISMA Association Burundaise",
              description: "Découvrez toutes nos réalisations et l'impact concret de PRISMA sur les communautés burundaises : formations, dons, projets environnementaux.",
              keywords: baseData.keywords + ", réalisations, impact, résultats, communauté, bétails, microfinance"
            };
          default:
            return {
              title: baseData.siteName,
              description: baseData.description,
              keywords: baseData.keywords
            };
        }
      };

      const metadata = getPageMetadata();
      
      // Update document title
      document.title = metadata.title;
      
      // Update or create meta tags
      const updateMetaTag = (name: string, content: string, property: boolean = false) => {
        const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let meta = document.querySelector(selector);
        if (!meta) {
          meta = document.createElement('meta');
          if (property) {
            meta.setAttribute('property', name);
          } else {
            meta.setAttribute('name', name);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      // Standard meta tags
      updateMetaTag('description', metadata.description);
      updateMetaTag('keywords', metadata.keywords);
      updateMetaTag('author', 'PRISMA Association Burundaise');
      updateMetaTag('robots', 'index, follow');
      
      // Geographic meta tags
      updateMetaTag('geo.region', 'BI');
      updateMetaTag('geo.country', 'Burundi');
      updateMetaTag('geo.placename', 'Bujumbura');
      
      // Open Graph tags
      updateMetaTag('og:type', 'website', true);
      updateMetaTag('og:title', metadata.title, true);
      updateMetaTag('og:description', metadata.description, true);
      updateMetaTag('og:site_name', 'PRISMA - Association Burundaise', true);
      updateMetaTag('og:locale', 'fr_FR', true);
      
      // Twitter tags
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:title', metadata.title);
      updateMetaTag('twitter:description', metadata.description);

      // Add structured data
      let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement | null;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script') as HTMLScriptElement;
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      
      structuredDataScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization", 
        "name": "PRISMA",
        "alternateName": "Promotion des Initiatives Socioéconomiques du Monde Associatif",
        "description": "Association burundaise (ASBL) engagée dans la promotion des initiatives socioéconomiques, la formation des jeunes et le bien-être des femmes",
        "url": window.location.origin,
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BI",
            "addressRegion": "Bujumbura"
          }
        },
        "areaServed": "Burundi",
        "knowsAbout": ["Formation professionnelle", "Développement socioéconomique", "Droits des femmes", "Protection environnementale", "Accompagnement des jeunes"]
      });
    };

    updatePageMetadata();
  }, [currentPageName]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === createPageUrl("Accueil")) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = createPageUrl("Accueil") + `#${sectionId}`;
    }
  };

  const isInSection = (sectionPages: string[]) => {
    return sectionPages.some(page => location.pathname === createPageUrl(page));
  };

  const menuSections = [
    { 
      title: t('nav.about'), 
      links: [
        { name: t('nav.news'), path: "Actualites" },
        { name: t('nav.projects'), path: "Projets" }
      ]
    },
    { 
      title: t('nav.activities'), 
      links: [
        { name: t('nav.youthTraining'), path: "FormationJeunes" },
        { name: t('nav.womenWellbeing'), path: "BienEtreFemme" },
        { name: t('nav.socioEconomicActivities'), path: "ActivitesSocioeconomiques" }
      ]
    },
    { 
      title: t('nav.partners'), 
      links: [
        { name: t('nav.achievements'), path: "Realisations" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@500;600&family=Be+Vietnam+Pro:wght@400;500&family=Syncopate:wght@400;700&display=swap');
        
        body {
          font-family: 'Be Vietnam Pro', sans-serif;
          color: #334155;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 fixed top-0 w-full z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between lg:justify-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Accueil")} className="flex-shrink-0 lg:absolute lg:left-8" aria-label="Retour à l'accueil PRISMA">
              <img src="/images/logo/logo2.png" alt="Logo PRISMA - Association Burundaise" className="w-16 h-auto" />
            </Link>

            {/* Desktop & Tablet Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to={createPageUrl("Accueil")} location={location} onClick={() => scrollToSection('hero')}>{t('nav.home')}</NavLink>

              <div className="relative group">
                <button className={`flex items-center text-sm font-poppins font-medium transition-colors outline-none ${
                  isInSection(["Actualites", "Projets"]) 
                    ? 'bg-[#1E22AA] text-white px-3 py-2 rounded' 
                    : 'text-slate-700 hover:text-[#1E22AA]'
                }`}>
                  {t('nav.about')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 bg-[#1E22AA] text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                  <DropdownLink to={createPageUrl("Accueil")} location={location} onClick={() => scrollToSection('about')}>À propos</DropdownLink>
                  <DropdownLink to={createPageUrl("Actualites")} location={location}>{t('nav.news')}</DropdownLink>
                  <DropdownLink to={createPageUrl("Projets")} location={location}>{t('nav.projects')}</DropdownLink>
                </div>
              </div>

              <div className="relative group">
                <button className={`flex items-center text-sm font-poppins font-medium transition-colors outline-none ${
                  isInSection(["FormationJeunes", "BienEtreFemme", "ActivitesSocioeconomiques"]) 
                    ? 'bg-[#1E22AA] text-white px-3 py-2 rounded' 
                    : 'text-slate-700 hover:text-[#1E22AA]'
                }`}>
                  {t('nav.activities')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 bg-[#1E22AA] text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                  <DropdownLink to={createPageUrl("Accueil")} location={location} onClick={() => scrollToSection('activities')}>Activités</DropdownLink>
                  <DropdownLink to={createPageUrl("FormationJeunes")} location={location}>{t('nav.youthTraining')}</DropdownLink>
                  <DropdownLink to={createPageUrl("BienEtreFemme")} location={location}>{t('nav.womenWellbeing')}</DropdownLink>
                  <DropdownLink to={createPageUrl("ActivitesSocioeconomiques")} location={location}>{t('nav.socioEconomicActivities')}</DropdownLink>
                </div>
              </div>
              
              <div className="relative group">
                <button className={`flex items-center text-sm font-poppins font-medium transition-colors outline-none ${
                  isInSection(["Realisations"]) 
                    ? 'bg-[#1E22AA] text-white px-3 py-2 rounded' 
                    : 'text-slate-700 hover:text-[#1E22AA]'
                }`}>
                  {t('nav.partners')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 bg-[#1E22AA] text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                  <DropdownLink to={createPageUrl("Accueil")} location={location} onClick={() => scrollToSection('partners')}>Partenaires</DropdownLink>
                  <DropdownLink to={createPageUrl("Realisations")} location={location}>{t('nav.achievements')}</DropdownLink>
                </div>
              </div>

              <NavLink to={createPageUrl("Accueil")} location={location} onClick={() => scrollToSection('contact')}>{t('nav.contact')}</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-700 rounded-md hover:bg-slate-100">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink to={createPageUrl("Accueil")} location={location} onClick={() => { setIsMobileMenuOpen(false); scrollToSection('hero'); }}>{t('nav.home')}</MobileNavLink>
              {menuSections.map(section => (
                <div key={section.title} className="pt-2">
                  <h3 className="px-4 text-xs font-semibold uppercase text-slate-500 tracking-wider">{section.title}</h3>
                  <div className="mt-1 space-y-1">
                    {section.links.map(link => (
                      <MobileNavLink key={link.name} to={createPageUrl(link.path)} location={location} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</MobileNavLink>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-2">
                 <h3 className="px-4 text-xs font-semibold uppercase text-slate-500 tracking-wider">{t('nav.contact')}</h3>
                 <div className="mt-1 space-y-1">
                    <MobileNavLink to={createPageUrl("Accueil")} location={location} onClick={() => { setIsMobileMenuOpen(false); scrollToSection('contact'); }}>Contactez-nous</MobileNavLink>
                 </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20" role="main">
        {children}
      </main>

      {/* Composant de traduction flottant */}
      <FloatingTranslator />
    </div>
  );
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  return (
    <TranslationProvider>
      <LayoutContent children={children} currentPageName={currentPageName} />
    </TranslationProvider>
  );
}