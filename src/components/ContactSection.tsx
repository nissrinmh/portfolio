import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwjnakk", { // Remplace par ton URL Formspree
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.user_name,
          email: formData.user_email, // important pour reply-to
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        alert("Erreur : " + (data.error || "Impossible d'envoyer le message"));
      }
    } catch (err) {
      alert("Erreur : " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "nissrinmahan02@gmail.com", href: "mailto:nissrinmahan02@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Téléphone", value: "+212 693393610", href: "tel:+212693393610" },
    { icon: <MapPin className="w-5 h-5" />, label: "Localisation", value: " Hay el Boughaz ,Tanger, Maroc", href: "#" },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/nissrinmh", color: "hover:text-gray-700 dark:hover:text-gray-300" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/nissrin-mahan-2965781ba", color: "hover:text-blue-500" },
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-gray-800/50 dark:to-rose-900/20 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              La Connexion Lumineuse
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Établissons une connexion. Envoyez-moi un message pour transformer vos idées en réalités lumineuses !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 dark:border-rose-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 dark:border-rose-700 focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Adresse email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 dark:border-rose-700 focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-3 rounded-lg border border-rose-200 dark:border-rose-700 focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-lg border border-rose-200 dark:border-rose-700 focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 transform hover:scale-105 glow-effect"
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {isSubmitted && (
                <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-white border-0 rounded-2xl p-5 text-center shadow-lg animate-fadeIn">
                  <h4 className="text-lg font-semibold mb-1">Merci pour votre message ! 💌</h4>
                  <p className="text-sm opacity-90">
                    Votre message a été envoyé avec succès. Je vous répondrai dès que possible.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Infos & Réseaux sociaux */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 dark:border-rose-800/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 dark:border-rose-800/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow-effect ${link.color}`} title={link.label}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
