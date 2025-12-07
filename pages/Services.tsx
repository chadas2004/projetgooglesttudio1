import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { DynamicIcon } from '../components/Icons';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const { language, services } = useStore();
  const t = TRANSLATIONS[language];

  return (
    <div className="pt-8 pb-20 bg-gray-50 dark:bg-gray-800 min-h-screen transition-colors">
      <div className="bg-primary-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t.services.title}</h1>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Découvrez notre gamme complète de solutions technologiques conçues pour propulser votre entreprise.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <motion.img 
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.5 }}
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6 pointer-events-none">
                    <motion.div 
                      variants={{
                        hover: { 
                          scale: 1.2, 
                          rotate: 15,
                          backgroundColor: "#0ea5e9" 
                        }
                      }}
                      initial={{ scale: 0, opacity: 0, rotate: -45 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="text-white p-2 bg-primary-600 rounded-lg shadow-lg origin-center"
                    >
                        <DynamicIcon name={service.iconName} size={24} />
                    </motion.div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                    {t.services.more_details} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                        to="/quote"
                        className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                    >
                        Devis
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;