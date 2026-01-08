import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useTranslation } from '../translation/useTranslation';

export default function TopBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1E22AA] text-white py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-hidden">
      <div className="flex-1 marquee-container">
          <p className="marquee whitespace-nowrap text-sm font-medium uppercase tracking-wider">
            {t('topbar.marquee')}
          </p>
      </div>
      <div className="flex items-center space-x-4 pl-4 z-10 bg-[#1E22AA]">
        <a href="https://www.facebook.com/prisma.burundi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
          <Facebook size={18} />
        </a>
        <a href="https://www.instagram.com/prisma_burundi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
          <Instagram size={18} />
        </a>
        <a href="https://wa.me/25779327661" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a href="mailto:itoualilian@gmail.com" aria-label="Email" className="hover:opacity-80 transition-opacity">
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
}