import React from 'react';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { language } = useStore();
  const t = TRANSLATIONS[language].footer;
  const navT = TRANSLATIONS[language].nav;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
                <Globe className="text-primary-500 w-8 h-8" />
                <span className="text-2xl font-bold text-white">Africa Infotech</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               Innovation, Sécurité, Performance. Votre partenaire de confiance pour la transformation numérique en Afrique.
             </p>
             <div className="flex space-x-4 pt-2">
               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-600 inline-block pb-1">{t.quick_links}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-primary-500 transition-colors">{navT.home}</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">{navT.services}</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-500 transition-colors">{navT.portfolio}</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">{navT.about}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-600 inline-block pb-1">Expertises</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Développement Web</li>
              <li>Applications Mobiles</li>
              <li>Cybersécurité</li>
              <li>Cloud Computing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-600 inline-block pb-1">{t.contact_info}</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                <span>Cotonou, Bénin</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+229 95 79 23 29</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>contact@africa-infotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Africa Infotech Innovation. {t.rights}</p>
          <Link to="/admin" className="mt-4 md:mt-0 flex items-center hover:text-white transition-colors opacity-50 hover:opacity-100">
            <Lock size={14} className="mr-1" /> Accès Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;