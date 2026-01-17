import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import ContactFooter from "../contact/ContactFooter";
import emailjs from '@emailjs/browser';
import { useTranslation } from "../translation/useTranslation";

const SendEmail = async ({ to, name, email, subject, body }: { to: string; name?: string; email?: string; subject: string; body: string; from_name?: string }) => {
  return emailjs.send(
    "service_7o9wl6f",
    "template_2fgvltq",
    {
      to_email: to,
      name: name,
      email: email,
      subject: subject,
      message: body
    },
    "YFAb7wWPU18u9A0tJ"
  );
};

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Structure du corps de l'email en HTML pour un rendu professionnel
      const emailBody = `${formData.message}`;

      await SendEmail({
        to: 'itoualilian@gmail.com',
        name: `${formData.name}`,
        email: `${formData.email}`,
        subject: `${formData.subject}`,
        body: emailBody,
        from_name: 'Site Web PRISMA'
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact-section" className="bg-white">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#1E22AA] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            {t('contact.title')}
          </motion.h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0  from-[#84D8AA]/36 to-[#62967A]">
          <img 
            src="/images/contact3.jpg" 
            alt="PRISMA Community" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Container */}
        <div className="relative z-10 flex items-center justify-end min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md mr-0 lg:mr-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{t('contact.formTitle')}</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Message envoyé avec succès !
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                Erreur lors de l'envoi. Veuillez réessayer.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder={t('contact.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E22AA] hover:bg-[#161a88] text-white py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#01a7d1] text-white px-6 sm:px-8 py-4 rounded-lg shadow-lg w-11/12 sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">+257 79 327 661</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">+257 79 112 683</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
