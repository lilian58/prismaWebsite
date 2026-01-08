import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Subscriber } from '@/entities/Subscriber';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await Subscriber.create({ email });
      setStatus('success');
      setEmail(''); // Clear email on success
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter:", error);
      setStatus('error');
    }
  };

  return (
    <section id="newsletter-section" className="bg-[#1E22AA] py-16 relative overflow-hidden">
        {/* Decorations avec les couleurs bleu clair */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-20">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.2266 38.7734L100 50L61.2266 61.2266L50 100L38.7734 61.2266L0 50L38.7734 38.7734L50 0Z" fill="#5FB1DE"/>
            </svg>
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-20">
             <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.2266 38.7734L100 50L61.2266 61.2266L50 100L38.7734 61.2266L0 50L38.7734 38.7734L50 0Z" fill="#5FB1DE"/>
            </svg>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="text-3xl font-bold uppercase">Restez informer de tout !</h2>
            <p className="text-xl font-semibold mt-2">SUR NOTRE NEWSLETTER</p>
            
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto min-h-[3rem]">
                {status === 'success' ? (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center gap-2 bg-green-500/80 p-3 rounded-lg"
                     >
                        <CheckCircle className="w-6 h-6 text-white"/>
                        <p className="font-semibold">Merci pour votre inscription !</p>
                     </motion.div>
                ) : status === 'error' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center gap-2 bg-red-500/80 p-3 rounded-lg"
                    >
                        <XCircle className="w-6 h-6 text-white"/>
                        <p className="font-semibold">Une erreur est survenue.</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: status === 'loading' ? 0.5 : 1 }}
                        className="flex"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            placeholder="ENTREZ VOTRE COURRIEL"
                            className="w-full px-4 py-3 text-slate-800 rounded-l-md border-0 outline-none placeholder:text-slate-400 placeholder:font-medium placeholder:uppercase"
                            required
                            disabled={status === 'loading'}
                        />
                         <motion.button
                            type="submit"
                            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-r-md hover:bg-green-700 transition-colors whitespace-nowrap disabled:bg-slate-500 disabled:cursor-not-allowed uppercase"
                            whileTap={{ scale: 0.95 }}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Envoi...' : 'S\'inscrire'}
                        </motion.button>
                    </motion.div>
                )}
            </form>
        </div>
    </section>
  )
}