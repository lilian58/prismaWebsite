import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Facebook } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer className="bg-[#1E22AA] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          
          {/* Accueil */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Accueil</h3>
          </div>

          {/* À propos de nous */}
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos de nous</h3>
            <ul className="space-y-2">
              <li>
                <Link to={createPageUrl("Actualites")} className="text-white/80 hover:text-white transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("Projets")} className="text-white/80 hover:text-white transition-colors">
                  Projets
                </Link>
              </li>
            </ul>
          </div>

          {/* Activités */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Activités</h3>
            <ul className="space-y-2">
              <li>
                <Link to={createPageUrl("FormationJeunes")} className="text-white/80 hover:text-white transition-colors">
                  Emploi des jeunes
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("BienEtreFemme")} className="text-white/80 hover:text-white transition-colors">
                  Droits de la femme
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("ActivitesSocioeconomiques")} className="text-white/80 hover:text-white transition-colors">
                  Activité écologique
                </Link>
              </li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <ul className="space-y-2">
              <li>
                <Link to={createPageUrl("Realisations")} className="text-white/80 hover:text-white transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("Realisations")} className="text-white/80 hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            
            {/* Icônes des réseaux sociaux - rapprochées */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="w-10 h-10 bg-[#F1A245] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F1A245] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/80">
            Copyright © 2025 PRISMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}