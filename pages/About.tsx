import React from 'react';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const { language } = useStore();
  const t = TRANSLATIONS[language].about;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
        {/* Header */}
        <div className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.title}</h1>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
                    Africa Infotech Innovation est né de la volonté de fournir des solutions numériques de classe mondiale adaptées aux réalités africaines.
                </p>
            </div>
        </div>

        {/* Vision/Mission/Values */}
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center border-t-4 border-primary-500 shadow-lg"
                >
                    <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 mb-6">
                        <Target size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t.mission}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.mission_text}</p>
                </motion.div>

                <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center border-t-4 border-secondary-500 shadow-lg"
                >
                    <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t.vision}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.vision_text}</p>
                </motion.div>

                <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center border-t-4 border-purple-500 shadow-lg"
                >
                    <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 mb-6">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t.values}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.values_text}</p>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default About;