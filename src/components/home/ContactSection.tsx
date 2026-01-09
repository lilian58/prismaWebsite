import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import ContactFooter from "../contact/ContactFooter";
import { SendEmail } from "@/integrations/Core";
import { useTranslation } from "../translation/useTranslation";

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
      const emailBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #1E22AA; border-bottom: 2px solid #5FB1DE; padding-bottom: 10px;">Nouveau Message - Site PRISMA</h2>
          <p>Vous avez reçu une nouvelle demande de contact :</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold; width: 120px;">Nom:</td>
              <td style="padding: 10px;">${formData.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${formData.email}" style="color: #1E22AA;">${formData.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold;">Sujet:</td>
              <td style="padding: 10px;">${formData.subject}</td>
            </tr>
          </table>
          <h3 style="color: #1E22AA;">Message :</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #DF851A;">
            <p style="margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 30px; text-align: center;">
            ---<br>
            Cet e-mail a été envoyé depuis le formulaire de contact du site web PRISMA.
          </p>
        </div>
      `;

      await SendEmail({
        to: 'itoualilian@gmail.com',
        subject: `[PRISMA Contact] ${formData.subject}`,
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#84D8AA]/36 to-[#62967A]">
          <img 
            src="/images/activite-socioeconomique/nature.jpg" 
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
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#5FB1DE] text-white px-6 sm:px-8 py-4 rounded-lg shadow-lg w-11/12 sm:w-auto">
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
