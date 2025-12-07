import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { DynamicIcon } from '../components/Icons';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';

const Home = () => {
  const { language, services } = useStore();
  const t = TRANSLATIONS[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/90" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t.hero.title}
              <span className="text-primary-500">.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-primary-500/30">
                {t.hero.cta_services} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                {t.hero.cta_contact}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="bg-primary-600 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
             <div className="flex items-center justify-center space-x-3">
                <Shield className="w-8 h-8" />
                <span className="font-semibold text-lg">Sécurité Maximale</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
                <Zap className="w-8 h-8" />
                <span className="font-semibold text-lg">Performance Élevée</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-8 h-8" />
                <span className="font-semibold text-lg">Expertise Certifiée</span>
             </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.services.title}</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.slice(0, 4).map((service) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <DynamicIcon name={service.iconName} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                  >
                    {t.services.more_details} <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.5 }}
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                   alt="Team working" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-primary-600/20"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Pourquoi choisir <span className="text-primary-600">Africa Infotech</span> ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Nous combinons expertise locale et standards internationaux pour offrir des solutions qui répondent réellement aux défis du marché africain.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Une équipe d'experts certifiés et passionnés",
                  "Support technique réactif 24/7",
                  "Solutions sur mesure et évolutives",
                  "Approche centrée sur le retour sur investissement (ROI)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                En savoir plus sur nous
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;