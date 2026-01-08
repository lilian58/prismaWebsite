
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function FloatingNewsletterButton() {
  const scrollToNewsletter = () => {
    const newsletterElement = document.getElementById('newsletter-section');
    if (newsletterElement) {
      newsletterElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToNewsletter}
      className="fixed bottom-24 right-6 z-40 bg-[#F1A245] text-white p-4 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="S'inscrire à la newsletter"
    >
      <Mail className="w-6 h-6" />
    </motion.button>
  );
}